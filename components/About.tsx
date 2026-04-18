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
      <motion.h2 {...fadeUp} className="text-3xl font-bold mb-12 text-center">
        À propos
      </motion.h2>

      <div className="flex flex-col gap-12">

        {/* Présentation */}
        <motion.div {...fadeUp}>
          <h3 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-4">Qui suis-je ?</h3>
          <p className="text-gray-300 leading-relaxed">
            Je m'appelle Fares Cherif, développeur passionné titulaire d'un Master en Conception Logicielle
            de l'Université de Poitiers. J'aime concevoir des applications robustes et bien pensées,
            aussi bien côté back end que front end.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Après plusieurs expériences en stage et une alternance suivie d'un CDI chez Einden,
            je cherche à relever de nouveaux défis et à contribuer à des projets ambitieux.
          </p>
        </motion.div>

        {/* Compétences */}
        <motion.div {...fadeUp}>
          <h3 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">Compétences</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["PHP", "JavaScript", "Java", "C++", "Python", "SQL"].map((tech, index) => (
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
        </motion.div>

        {/* Formation */}
        <motion.div {...fadeUp}>
          <h3 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">Formation</h3>
          <div className="flex flex-col gap-4">
            {[
              { year: "2022 - Aujourd'hui", title: "Développeur", school: "Einden" },
              { year: "2021 - 2023", title: "Master en Conception Logicielle", school: "Université de Poitiers" },
              { year: "2018 - 2021", title: "Licence en Informatique", school: "Université de Limoges" },
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
                  <p className="text-gray-500 text-sm">{item.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Langues */}
        <motion.div {...fadeUp}>
          <h3 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">Langues</h3>
          <div className="flex flex-col gap-3">
            {[
              { lang: "Français", level: "Langue maternelle" },
              { lang: "Anglais", level: "Niveau B2" },
              { lang: "Allemand", level: "Niveau scolaire" },
            ].map((item) => (
              <div key={item.lang} className="flex justify-between border-b border-gray-800 pb-3">
                <span className="text-gray-300">{item.lang}</span>
                <span className="text-gray-500 text-sm">{item.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Centres d'intérêt */}
        <motion.div {...fadeUp}>
          <h3 className="text-blue-500 font-semibold uppercase text-sm tracking-widest mb-6">Centres d'intérêt</h3>
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