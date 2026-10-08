import type { Metadata } from "next";
import Projects from "@/components/Projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("fr", "projects");

export default function ProjectsPage() {
  return (
    <main>
      <Projects lang="fr" />
    </main>
  );
}
