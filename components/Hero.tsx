"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getContent, localePath, type Lang } from "@/data";

export default function Hero({ lang }: { lang: Lang }) {
  const t = getContent(lang).hero;

  return (
    <section className="pt-24 pb-12 flex-1 flex flex-col items-center justify-center text-center px-4">
      <motion.p
        className="text-blue-500 font-medium mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.greeting}
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
        {t.role}
      </motion.h2>

      <motion.p
        className="max-w-xl text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {t.pitch}
      </motion.p>

      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href={localePath(lang, "/projects")} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
          {t.ctaJourney}
        </Link>
        <Link href={localePath(lang, "/contact")} className="border border-gray-600 hover:border-blue-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition">
          {t.ctaContact}
        </Link>
        <a href={t.cvHref} download className="border border-gray-600 hover:border-blue-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition">
          {t.ctaCv}
        </a>
      </motion.div>

      <motion.a
        href={t.otherCvHref}
        download
        className="mt-4 text-sm text-gray-400 hover:text-blue-400 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {t.otherCvLabel}
      </motion.a>
    </section>
  );
}
