import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ description: DEFAULT_DESCRIPTION, path: "/" });

// Données structurées : aident Google à identifier la personne derrière le site
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Fares Cherif",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      jobTitle: "Développeur full-stack PHP / JavaScript",
      description: DEFAULT_DESCRIPTION,
      worksFor: { "@type": "Organization", name: "Einden" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Université de Poitiers" },
        { "@type": "CollegeOrUniversity", name: "Université de Limoges" },
      ],
      address: { "@type": "PostalAddress", addressLocality: "Poitiers", addressCountry: "FR" },
      knowsLanguage: ["fr", "en", "de"],
      knowsAbout: ["PHP", "JavaScript", "TypeScript", "SQL", "Drupal", "WordPress", "Akeneo", "CKEditor5"],
      sameAs: [
        "https://www.linkedin.com/in/fares-lucas-cherif-93bab4170/",
        "https://github.com/FaresCherif",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
    </main>
  );
}
