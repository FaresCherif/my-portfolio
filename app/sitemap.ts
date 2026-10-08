import type { MetadataRoute } from "next";
import { SITE_URL as baseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Le sitemap est généré au build : la date correspond au dernier déploiement
  const lastModified = new Date();
  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
