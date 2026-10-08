"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experiences, projects } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// Nombre de projets visibles sur mobile avant le bouton « Voir plus »
const MOBILE_VISIBLE = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="pt-24 py-12 px-4 max-w-5xl mx-auto">
      {/* Expériences professionnelles */}
      <motion.h1 {...fadeUp} className="text-3xl font-bold text-center mb-12">
        Expériences professionnelles
      </motion.h1>

      <div className="flex flex-col gap-6 mb-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition md:flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {exp.image && (
              <div className="relative w-full h-48 md:h-auto md:w-72 shrink-0">
                <Image src={exp.image} alt={exp.imageAlt ?? exp.company} fill className="object-cover" />
              </div>
            )}
            <div className="p-6 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  {exp.role} <span className="text-blue-500">— {exp.company}</span>
                </h3>
                <span className="text-sm text-gray-400 font-mono">{exp.period}</span>
              </div>
              <p className="text-xs text-blue-400 font-medium mt-1 mb-3">{exp.type}</p>
              <p className="text-gray-300 text-sm mb-3">{exp.summary}</p>
              {exp.sections.map((section, i) => (
                <div key={section.title ?? i} className="mb-4">
                  {section.title && (
                    <p className="text-sm text-white font-medium mb-1">{section.title}</p>
                  )}
                  <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span key={tech} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Projets */}
      <motion.h2 {...fadeUp} className="text-3xl font-bold text-center mb-12">
        Projets
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition ${
              !showAll && index >= MOBILE_VISIBLE ? "hidden md:block" : ""
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
          >
            {project.image ? (
              <div className="relative w-full h-48">
                <Image src={project.image} alt={project.imageAlt ?? project.title} fill className="object-cover" />
              </div>
            ) : (
              project.icon && (
                <div className="relative w-full h-48 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950/70 via-gray-900 to-gray-950">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(#3b82f6_1px,transparent_1px),linear-gradient(90deg,#3b82f6_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(circle,black,transparent_70%)]"
                  />
                  <project.icon aria-hidden="true" size={56} strokeWidth={1.25} className="relative text-blue-400" />
                </div>
              )
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  Voir le projet →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length > MOBILE_VISIBLE && (
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            className="border border-gray-600 hover:border-blue-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition"
          >
            {showAll ? "Voir moins" : `Voir plus (${projects.length - MOBILE_VISIBLE})`}
          </button>
        </div>
      )}
    </section>
  );
}
