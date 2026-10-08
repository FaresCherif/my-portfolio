import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Contact from "@/components/Contact";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contacter Fares Cherif, développeur full-stack PHP / JavaScript à la recherche d’un CDI en France ou à l’international.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}