import { getContent, localePath, type Lang } from "@/data";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

// Données structurées : aident Google à identifier la personne derrière le site
export default function PersonJsonLd({ lang }: { lang: Lang }) {
  const { meta } = getContent(lang);
  const url = `${SITE_URL}${localePath(lang, "/") === "/" ? "" : localePath(lang, "/")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Fares Cherif",
        url: SITE_URL,
        jobTitle: meta.jobTitle,
        description: meta.description,
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
        "@id": `${url}/#website`,
        url,
        name: SITE_NAME,
        inLanguage: lang === "fr" ? "fr-FR" : "en",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
