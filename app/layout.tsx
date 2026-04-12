import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fares Cherif — Développeur",
  description: "Portfolio de Fares Cherif, développeur web et logiciel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geist.className} bg-gray-950 text-white h-screen flex flex-col overflow-hidden`}>
        <Header />
        <div className="flex-1 overflow-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}