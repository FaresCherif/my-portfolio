"use client";

import { motion } from "framer-motion";
import { getContent, type Lang } from "@/data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function About({ lang }: { lang: Lang }) {
  const t = getContent(lang).about;

  return (
    <section className="pt-24 py-12 px-4 max-w-3xl mx-auto">
      <motion.h1 {...fadeUp} className="text-3xl font-bold mb-12 text-center">
        {t.title}
      </motion.h1>

      <div className="flex flex-col gap-12">

        {/* Présentation */}
        <motion.div {...fadeUp}>
          <h2 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-4">{t.whoAmI}</h2>
          {t.intro.map((paragraph, i) => (
            <p key={i} className={`text-gray-300 leading-relaxed ${i > 0 ? "mt-4" : ""}`}>
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Compétences */}
        <motion.div {...fadeUp}>
          <h2 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">{t.skillsTitle}</h2>
          <div className="flex flex-col gap-6">
            {t.skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-gray-400 text-sm mb-3">{group.label}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {group.items.map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="border border-gray-700 rounded-lg px-4 py-3 text-center text-gray-300 hover:border-blue-500 transition"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-gray-400 text-sm">
              <span className="text-gray-300">{t.notionsLabel}</span> {t.notions}
            </p>
          </div>
        </motion.div>

        {/* Formation */}
        <motion.div {...fadeUp}>
          <h2 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">{t.educationTitle}</h2>
          <div className="flex flex-col gap-4">
            {t.education.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex gap-6 items-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-blue-500 font-mono text-sm w-32 shrink-0">{item.year}</span>
                <div>
                  <p className="text-white font-medium">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Langues */}
        <motion.div {...fadeUp}>
          <h2 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">{t.languagesTitle}</h2>
          <div className="flex flex-col gap-3">
            {t.languages.map((item) => (
              <div key={item.lang} className="flex justify-between gap-4 border-b border-gray-800 pb-3">
                <span className="text-gray-300">{item.lang}</span>
                <span className="text-gray-400 text-sm text-right">{item.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Centres d’intérêt */}
        <motion.div {...fadeUp}>
          <h2 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">{t.interestsTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {t.interests.map((item, index) => (
              <motion.span
                key={item}
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
