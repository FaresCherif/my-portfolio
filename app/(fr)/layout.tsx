import type { Metadata } from "next";
import "../globals.css";
import SiteLayout from "@/components/SiteLayout";
import { rootMetadata } from "@/lib/seo";

export const metadata: Metadata = rootMetadata("fr");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout lang="fr">{children}</SiteLayout>;
}
