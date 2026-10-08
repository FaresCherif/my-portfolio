import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Projects from "@/components/Projects";

export const metadata: Metadata = pageMetadata({
  title: "Parcours",
  description:
    "Expériences professionnelles de Fares Cherif (Einden, Ganylab, Grains’up) et projets : IA, robotique, rendu 3D, jeux, web.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main>
      <Projects />
    </main>
  );
}