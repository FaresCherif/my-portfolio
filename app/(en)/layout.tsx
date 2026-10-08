import type { Metadata } from "next";
import "../globals.css";
import SiteLayout from "@/components/SiteLayout";
import { rootMetadata } from "@/lib/seo";

export const metadata: Metadata = rootMetadata("en");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout lang="en">{children}</SiteLayout>;
}
