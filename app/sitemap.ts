import type { MetadataRoute } from "next";
import { localePath } from "@/data";
import { PAGES, SITE_URL, languageAlternates } from "@/lib/seo";

const settings: Record<keyof typeof PAGES, Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">> = {
  home: { changeFrequency: "monthly", priority: 1 },
  about: { changeFrequency: "monthly", priority: 0.8 },
  projects: { changeFrequency: "monthly", priority: 0.8 },
  contact: { changeFrequency: "yearly", priority: 0.5 },
};

const absolute = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  // Le sitemap est généré au build : la date correspond au dernier déploiement
  const lastModified = new Date();

  return (Object.keys(PAGES) as (keyof typeof PAGES)[]).flatMap((page) => {
    const path = PAGES[page];
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, absolute(href)]),
    );
    return (["fr", "en"] as const).map((lang) => ({
      url: absolute(localePath(lang, path)),
      lastModified,
      ...settings[page],
      alternates: { languages },
    }));
  });
}
