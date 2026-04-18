import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="pt-24 py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Projets & Expériences</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition">
            {project.image && (
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <span className="text-xs text-blue-500 font-medium">{project.type}</span>
              <h3 className="text-xl font-semibold mt-1 mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}