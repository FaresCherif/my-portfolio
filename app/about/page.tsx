import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import About from "@/components/About";

export const metadata: Metadata = pageMetadata({
  title: "À propos",
  description:
    "Parcours, compétences (PHP, JavaScript, TypeScript, SQL, Drupal…), formation et langues de Fares Cherif, développeur full-stack basé à Poitiers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}