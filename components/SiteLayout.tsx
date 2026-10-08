import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/Particles";
import ScrollProgress from "@/components/ScrollProgress";
import type { Lang } from "@/data";

const geist = Geist({ subsets: ["latin"] });

// Structure commune aux layouts racine FR et EN
export default function SiteLayout({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body className={`${geist.className} bg-gray-950 text-white min-h-dvh flex flex-col`}>
        <ParticlesBackground />
        <ScrollProgress />
        <Header lang={lang} />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
