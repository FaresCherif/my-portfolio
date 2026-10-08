import type { LucideIcon } from "lucide-react";

export type Lang = "fr" | "en";

export type Experience = {
  company: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  sections: { title?: string; items: string[] }[];
  stack: string[];
  image?: string;
  imageAlt?: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  type: string;
  image?: string;
  imageAlt?: string;
  // Visuel générique affiché quand le projet n'a pas de capture
  icon?: LucideIcon;
  link?: string;
};

type PageMeta = { title: string; description: string };

// Tout le texte du site pour une langue. Le type garantit que FR et EN restent complets.
export type Content = {
  meta: {
    title: string;
    titleTemplate: string;
    description: string;
    ogLocale: string;
    jobTitle: string;
    // Ligne du bas de l'image de partage (Open Graph)
    ogTagline: string;
    about: PageMeta;
    projects: PageMeta;
    contact: PageMeta;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    // Lien vers l'autre langue
    switchLabel: string;
    switchAria: string;
  };
  hero: {
    greeting: string;
    role: string;
    pitch: string;
    ctaJourney: string;
    ctaContact: string;
    ctaCv: string;
    cvHref: string;
    otherCvLabel: string;
    otherCvHref: string;
  };
  about: {
    title: string;
    whoAmI: string;
    intro: string[];
    skillsTitle: string;
    skillGroups: { label: string; items: string[] }[];
    notionsLabel: string;
    notions: string;
    educationTitle: string;
    education: { year: string; title: string; school: string }[];
    languagesTitle: string;
    languages: { lang: string; level: string }[];
    interestsTitle: string;
    interests: string[];
  };
  journey: {
    experiencesTitle: string;
    projectsTitle: string;
    showMore: string;
    showLess: string;
    viewProject: string;
  };
  contact: {
    title: string;
    pitch: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    location: string;
  };
  footer: { role: string };
  experiences: Experience[];
  projects: Project[];
};
