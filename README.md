# Portfolio — Fares Cherif

Portfolio de Fares Cherif, développeur full-stack PHP / JavaScript : [softechsolutions.fr](https://www.softechsolutions.fr)

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- Tailwind CSS 4
- Framer Motion (animations), tsParticles (fond animé), Lucide (icônes)

## Développement

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Structure

Site bilingue : le français est servi à la racine (`/`, `/about`…), l'anglais sous `/en`.

- `app/(fr)/` et `app/(en)/en/` — pages de chaque langue, chacune avec son layout racine (`<html lang>`)
- `app/global-not-found.tsx` — page 404 commune (bilingue), `sitemap.ts`, `robots.ts`
- `components/` — sections et éléments d'interface, qui reçoivent la langue en prop
- `data/fr.ts` et `data/en.ts` — **tout le texte du site** (expériences, projets, libellés). Modifier les deux fichiers ensemble ; le type `Content` signale tout oubli à la compilation
- `lib/seo.ts` — URL du site, métadonnées et balises hreflang
- `public/` — CV (FR / EN), images et image Open Graph
