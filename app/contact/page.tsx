import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter Fares Cherif, développeur full-stack PHP / JavaScript à la recherche d’un CDI.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}