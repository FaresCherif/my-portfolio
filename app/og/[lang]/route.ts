import { renderOgImage } from "@/lib/og";
import type { Lang } from "@/data";

// Image de partage à URL fixe (/og/fr, /og/en), générée au build et référencée par toutes les pages
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export async function GET(_request: Request, { params }: RouteContext<"/og/[lang]">) {
  const { lang } = await params;
  return renderOgImage(lang as Lang);
}
