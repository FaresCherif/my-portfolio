import type { Metadata } from "next";

export const SITE_URL = "https://www.softechsolutions.fr";
export const SITE_NAME = "Fares Cherif";
export const DEFAULT_TITLE = "Fares Cherif — Développeur full-stack PHP / JavaScript (Poitiers)";
export const DEFAULT_DESCRIPTION =
  "Portfolio de Fares Cherif, développeur full-stack PHP / JavaScript basé à Poitiers. 4 ans d’expérience, à la recherche d’un CDI en France et à l’international.";

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Fares Cherif — Développeur full-stack PHP / JavaScript",
};

// Métadonnées d'une page : titre, description, URL canonique et aperçu de partage.
// L'openGraph d'une page remplace entièrement celui du layout, d'où la reprise des valeurs communes.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const shareTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
