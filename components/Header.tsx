"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getContent, localePath, type Lang } from "@/data";

// Même page dans l'autre langue : /about <-> /en/about
function switchPath(lang: Lang, pathname: string): string {
  if (lang === "fr") return localePath("en", pathname);
  return pathname.replace(/^\/en/, "") || "/";
}

export default function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const t = getContent(lang).nav;
  const otherLang: Lang = lang === "fr" ? "en" : "fr";

  const links = [
    { href: localePath(lang, "/"), label: t.home },
    { href: localePath(lang, "/about"), label: t.about },
    { href: localePath(lang, "/projects"), label: t.projects },
    { href: localePath(lang, "/contact"), label: t.contact },
  ];

  // Lien classique (et non <Link>) : chaque langue a son propre layout racine
  const languageSwitch = (
    <a
      href={switchPath(lang, pathname)}
      hrefLang={otherLang}
      lang={otherLang}
      aria-label={t.switchAria}
      className="text-sm font-medium text-gray-400 hover:text-white border border-gray-700 hover:border-blue-500 rounded-md px-2 py-1 transition"
    >
      {t.switchLabel}
    </a>
  );

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={localePath(lang, "/")} className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition">
          Fares<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          {languageSwitch}
        </nav>

        {/* Mobile : langue + hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          {languageSwitch}
          <button
            className="text-gray-400 hover:text-white transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t.closeMenu : t.openMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition ${
                  pathname === link.href
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-white"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
