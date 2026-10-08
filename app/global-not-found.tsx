import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 — Page introuvable / Page not found",
  robots: { index: false },
};

// 404 commune aux deux langues : une URL inconnue n'appartient à aucun layout, la page est donc bilingue
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className={`${geist.className} bg-gray-950 text-white min-h-dvh flex flex-col items-center justify-center text-center px-4`}>
        <p className="text-blue-500 font-mono text-lg mb-2">404</p>
        <h1 className="text-5xl font-bold mb-4">Page introuvable</h1>
        <p className="text-gray-300 max-w-md mb-2">Cette page n’existe pas ou a été déplacée.</p>
        <p lang="en" className="text-gray-400 max-w-md mb-8">This page doesn’t exist or has been moved.</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
            Retour à l’accueil
          </Link>
          <Link
            href="/en"
            lang="en"
            className="border border-gray-600 hover:border-blue-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
