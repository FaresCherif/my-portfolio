import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "À propos",
  description: "Parcours, compétences, formation et langues de Fares Cherif, développeur full-stack PHP / JavaScript.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}