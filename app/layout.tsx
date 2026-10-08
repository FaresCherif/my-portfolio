import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/Particles";
import ScrollProgress from "@/components/ScrollProgress";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.softechsolutions.fr"),
  title: {
    default: "Fares Cherif — Développeur full-stack",
    template: "%s | Fares Cherif — Développeur full-stack",
  },
  description: "Portfolio de Fares Cherif, développeur full-stack PHP / JavaScript. 4 ans d’expérience, à la recherche d’un CDI en France et à l’international.",
  openGraph: {
    title: "Fares Cherif — Développeur full-stack",
    description: "Portfolio de Fares Cherif, développeur full-stack PHP / JavaScript. 4 ans d’expérience, à la recherche d’un CDI en France et à l’international.",
    url: "/",
    siteName: "Fares Cherif",
    images: [
      {
        url: "/og-image.png",
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
    description: "Portfolio de Fares Cherif, développeur full-stack PHP / JavaScript. 4 ans d’expérience, à la recherche d’un CDI en France et à l’international.",
    images: ["/og-image.png"],
  },
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

