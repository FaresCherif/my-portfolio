import type { Metadata } from "next";
import About from "@/components/About";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("fr", "about");

export default function AboutPage() {
  return (
    <main>
      <About lang="fr" />
    </main>
  );
}
