import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Parcours",
  description: "Expériences professionnelles (Einden, Ganylab, Grains’up) et projets de Fares Cherif.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main>
      <Projects />
    </main>
  );
}