import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/Particles";
import ScrollProgress from "@/components/ScrollProgress";
import Cursor from "@/components/Cursor";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fares Cherif — Développeur full-stack",
  description: "Portfolio de Fares Cherif, développeur full-stack PHP / JavaScript basé à Poitiers. Expériences, projets et contact.",
  openGraph: {
    title: "Fares Cherif — Développeur full-stack",
    description: "Portfolio de Fares Cherif, développeur full-stack PHP / JavaScript basé à Poitiers. Expériences, projets et contact.",
    url: "https://www.softechsolutions.fr",
    siteName: "Fares Cherif",
    images: [
      {
        url: "https://www.softechsolutions.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fares Cherif — Développeur full-stack",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fares Cherif — Développeur full-stack",
    description: "Portfolio de Fares Cherif, développeur full-stack PHP / JavaScript basé à Poitiers. Expériences, projets et contact.",
    images: ["https://www.softechsolutions.fr/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geist.className} bg-gray-950 text-white h-screen flex flex-col overflow-hidden cursor-none`}>
        <Cursor />
        <ParticlesBackground />
        <ScrollProgress />
        <Header />
        <div
          id="scroll-container"
          className="flex-1 overflow-auto scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

