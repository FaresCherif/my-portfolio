import { en } from "./en";
import { fr } from "./fr";
import type { Content, Lang } from "./types";

export type { Content, Lang } from "./types";

const contents: Record<Lang, Content> = { fr, en };

export function getContent(lang: Lang): Content {
  return contents[lang];
}

// Le français est servi à la racine, l'anglais sous /en
export function localePath(lang: Lang, path: string): string {
  if (lang === "fr") return path;
  return path === "/" ? "/en" : `/en${path}`;
}
