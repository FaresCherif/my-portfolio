import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("en", "contact");

export default function ContactPage() {
  return (
    <main>
      <Contact lang="en" />
    </main>
  );
}
