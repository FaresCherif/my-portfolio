import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL, pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/Particles";
import ScrollProgress from "@/components/ScrollProgress";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME} — Développeur full-stack PHP / JavaScript`,
  },
  ...pageMetadata({ description: DEFAULT_DESCRIPTION, path: "/" }),
  // Pas d'URL canonique globale : chaque page déclare la sienne
  alternates: undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geist.className} bg-gray-950 text-white min-h-dvh flex flex-col`}>
        <ParticlesBackground />
        <ScrollProgress />
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

