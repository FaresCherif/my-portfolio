import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PersonJsonLd from "@/components/PersonJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("en", "home");

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <PersonJsonLd lang="en" />
      <Hero lang="en" />
    </main>
  );
}
