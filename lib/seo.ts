import type { Metadata } from "next";
import { getContent, localePath, type Lang } from "@/data";

export const SITE_URL = "https://www.softechsolutions.fr";
export const SITE_NAME = "Fares Cherif";

export const PAGES = {
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
} as const;

export type Page = keyof typeof PAGES;

// Versions FR / EN d'une même page, pour les balises hreflang et le sitemap.
// x-default pointe vers le français, la version principale du site.
export function languageAlternates(path: string) {
  return {
    fr: localePath("fr", path),
    en: localePath("en", path),
    "x-default": localePath("fr", path),
  };
}

// Métadonnées d'une page : titre, description, URL canonique, hreflang et aperçu de partage.
// L'openGraph d'une page remplace entièrement celui du layout, d'où la reprise des valeurs communes.
export function pageMetadata(lang: Lang, page: Page): Metadata {
  const { meta } = getContent(lang);
  const path = PAGES[page];
  const url = localePath(lang, path);
  const title = page === "home" ? undefined : meta[page].title;
  const description = page === "home" ? meta.description : meta[page].description;
  const shareTitle = title ? `${title} | ${SITE_NAME}` : meta.title;
  // Image générée par app/og/[lang]/route.ts
  const image = { url: `/og/${lang}`, width: 1200, height: 630, alt: meta.title, type: "image/png" };

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title: shareTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [image],
      locale: meta.ogLocale,
      alternateLocale: getContent(lang === "fr" ? "en" : "fr").meta.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image],
    },
  };
}

// Métadonnées du layout racine d'une langue
export function rootMetadata(lang: Lang): Metadata {
  const { meta } = getContent(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: meta.titleTemplate },
    ...pageMetadata(lang, "home"),
    // Pas d'URL canonique globale : chaque page déclare la sienne
    alternates: undefined,
  };
}
