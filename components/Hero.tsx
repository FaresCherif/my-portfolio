"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 flex-1 flex flex-col items-center justify-center text-center px-4">
      <motion.p
        className="text-blue-500 font-medium mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bonjour, je m’appelle
      </motion.p>

      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Fares Cherif
      </motion.h1>

      <motion.h2
        className="text-2xl text-gray-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Développeur full-stack PHP / JavaScript
      </motion.h2>

      <motion.p
        className="max-w-xl text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        4 ans d’expérience sur une plateforme de gestion de médias pour les entreprises :
        modules métier, intégrations API et plugins (Drupal, Akeneo, CKEditor5) déployés
        chez des clients en production. À la recherche d’un CDI, en France ou à l’international.
      </motion.p>

      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
          Voir mon parcours
        </Link>
        <Link href="/contact" className="border border-gray-600 hover:border-blue-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition">
          Me contacter
        </Link>
        <a href="/CV_FR.pdf" download className="border border-gray-600 hover:border-blue-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition">
          Télécharger mon CV
        </a>
      </motion.div>

      <motion.a
        href="/CV_EN.pdf"
        download
        className="mt-4 text-sm text-gray-400 hover:text-blue-400 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        English resume (PDF)
      </motion.a>
    </section>
  );
}