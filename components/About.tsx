"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <section className="pt-24 py-12 px-4 max-w-3xl mx-auto">
      <motion.h1 {...fadeUp} className="text-3xl font-bold mb-12 text-center">
        À propos
      </motion.h1>

      <div className="flex flex-col gap-12">

        {/* Présentation */}
        <motion.div {...fadeUp}>
          <h2 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-4">Qui suis-je ?</h2>
          <p className="text-gray-300 leading-relaxed">
            Je m’appelle Fares Cherif, développeur full-stack PHP / JavaScript, diplômé d’un Master en
            Conception Logicielle de l’Université de Poitiers.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Depuis 2022, je travaille chez Einden, éditeur d’une plateforme de gestion de médias pour les entreprises :
            d’abord en alternance, puis en CDI. J’y développe des modules (synchronisation via API,
            organisation des médias, optimisation SQL), des plugins (CKEditor5, Akeneo, Drupal, Android)
            et des sites web clients, tout en assurant le support technique.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Ce que j’aime : comprendre un besoin client et le transformer en fonctionnalité fiable, du back end
            à l’interface. Je recherche aujourd’hui un CDI de développeur full-stack au sein d’une équipe
            produit, en France ou à l’international.
          </p>
        </motion.div>

        {/* Compétences */}
        <motion.div {...fadeUp}>
          <h2 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">Compétences</h2>
          <div className="flex flex-col gap-6">
            {[
              { label: "Langages", items: ["PHP", "JavaScript", "TypeScript", "SQL", "HTML / CSS", "SASS"] },
              { label: "Écosystème", items: ["Drupal", "WordPress", "Akeneo", "CKEditor5", "Postman", "Linux"] },
            ].map((group) => (
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
              <span className="text-gray-400">Notions :</span> Java, C / C++, C#, Python, Symfony, React,
              Vue.js, Node.js, Qt, Unity, ROS2 — Méthodes Agile et cycle en V.
            </p>
          </div>
        </motion.div>

        {/* Formation */}
        <motion.div {...fadeUp}>
          <h2 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">Formation</h2>
          <div className="flex flex-col gap-4">
            {[
              { year: "2021 - 2023", title: "Master en Conception Logicielle", school: "Université de Poitiers" },
              { year: "2018 - 2021", title: "DUT puis Licence en Informatique", school: "Université de Limoges" },
              { year: "2018", title: "Bac scientifique — spécialité ISN", school: "Lycée Marguerite de Valois" },
            ].map((item, index) => (
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
          <h2 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">Langues</h2>
          <div className="flex flex-col gap-3">
            {[
              { lang: "Français", level: "Langue maternelle" },
              { lang: "Anglais", level: "C1 — TOEIC 990/990 (score maximal)" },
              { lang: "Allemand", level: "A1 — Débutant" },
            ].map((item) => (
              <div key={item.lang} className="flex justify-between border-b border-gray-800 pb-3">
                <span className="text-gray-300">{item.lang}</span>
                <span className="text-gray-400 text-sm">{item.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Centres d’intérêt */}
        <motion.div {...fadeUp}>
          <h2 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">Centres d’intérêt</h2>
          <div className="flex flex-wrap gap-3">
            {["Tennis", "Course à pied", "Échecs", "Littérature", "Voyages"].map((item, index) => (
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