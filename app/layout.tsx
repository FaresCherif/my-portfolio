import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/Particles";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fares Cherif — Développeur",
  description: "Portfolio de Fares Cherif, développeur web et logiciel.",
  openGraph: {
    title: "Fares Cherif — Développeur",
    description: "Portfolio de Fares Cherif, développeur web et logiciel.",
    url: "https://www.softechsolutions.fr",
    siteName: "Fares Cherif",
    images: [
      {
        url: "https://www.softechsolutions.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fares Cherif — Développeur",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fares Cherif — Développeur",
    description: "Portfolio de Fares Cherif, développeur web et logiciel.",
    images: ["https://www.softechsolutions.fr/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geist.className} bg-gray-950 text-white h-screen flex flex-col overflow-hidden`}>
        <ParticlesBackground />
        <Header />
        <div className="flex-1 overflow-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
