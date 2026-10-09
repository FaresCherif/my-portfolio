import { Bot, Box, Brain, Globe, Car, MessageSquareLock, ShieldCheck, Swords } from "lucide-react";
import type { Content } from "./types";

export const fr: Content = {
  meta: {
    title: "Fares Cherif — Développeur full-stack PHP / JavaScript (Poitiers)",
    titleTemplate: "%s | Fares Cherif — Développeur full-stack PHP / JavaScript",
    description:
      "Portfolio de Fares Cherif, développeur full-stack PHP / JavaScript basé à Poitiers. 4 ans d’expérience, à la recherche d’un CDI en France et à l’international.",
    ogLocale: "fr_FR",
    jobTitle: "Développeur full-stack PHP / JavaScript",
    ogTagline: "4 ans d’expérience · À la recherche d’un CDI en France et à l’international",
    about: {
      title: "À propos",
      description:
        "Parcours, compétences (PHP, JavaScript, TypeScript, SQL, Drupal…), formation et langues de Fares Cherif, développeur full-stack basé à Poitiers.",
    },
    projects: {
      title: "Parcours",
      description:
        "Expériences professionnelles de Fares Cherif (Einden, Ganylab, Grains’up) et projets : IA, robotique, rendu 3D, jeux, web.",
    },
    contact: {
      title: "Contact",
      description:
        "Contacter Fares Cherif, développeur full-stack PHP / JavaScript à la recherche d’un CDI en France ou à l’international.",
    },
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    projects: "Parcours",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    switchLabel: "EN",
    switchAria: "English version",
  },
  hero: {
    greeting: "Bonjour, je m’appelle",
    role: "Développeur full-stack PHP / JavaScript",
    pitch:
      "4 ans d’expérience sur une plateforme de gestion de médias pour les entreprises : modules métier, intégrations API et plugins (Drupal, Akeneo, CKEditor5) déployés chez des clients en production. À la recherche d’un CDI, en France ou à l’international.",
    ctaJourney: "Voir mon parcours",
    ctaContact: "Me contacter",
    ctaCv: "Télécharger mon CV",
    cvHref: "/CV_FR.pdf",
    otherCvLabel: "English resume (PDF)",
    otherCvHref: "/CV_EN.pdf",
  },
  about: {
    title: "À propos",
    whoAmI: "Qui suis-je ?",
    intro: [
      "Je m’appelle Fares Cherif, développeur full-stack PHP / JavaScript, diplômé d’un Master en Conception Logicielle de l’Université de Poitiers.",
      "Depuis 2022, je travaille chez Einden, éditeur d’une plateforme de gestion de médias pour les entreprises : d’abord en alternance, puis en CDI. J’y développe des modules (synchronisation via API, organisation des médias, optimisation SQL), des plugins (CKEditor5, Akeneo, Drupal, Android) et des sites web clients, tout en assurant le support technique.",
      "Ce que j’aime : comprendre un besoin client et le transformer en fonctionnalité fiable, du back end à l’interface. Je recherche aujourd’hui un CDI de développeur full-stack au sein d’une équipe produit, en France ou à l’international.",
    ],
    skillsTitle: "Compétences",
    skillGroups: [
      { label: "Langages", items: ["PHP", "JavaScript", "TypeScript", "SQL", "HTML / CSS", "SASS"] },
      { label: "Écosystème", items: ["Drupal", "WordPress", "Akeneo", "CKEditor5", "Postman", "Linux"] },
    ],
    notionsLabel: "Notions :",
    notions:
      "Java, C / C++, C#, Python, Symfony, React, Vue.js, Node.js, Qt, Unity, ROS2 — Méthodes Agile et cycle en V.",
    educationTitle: "Formation",
    education: [
      { year: "2021 - 2023", title: "Master en Conception Logicielle", school: "Université de Poitiers" },
      { year: "2018 - 2021", title: "DUT puis Licence en Informatique", school: "Université de Limoges" },
      { year: "2018", title: "Bac scientifique — spécialité ISN", school: "Lycée Marguerite de Valois" },
    ],
    languagesTitle: "Langues",
    languages: [
      { lang: "Français", level: "Langue maternelle" },
      { lang: "Anglais", level: "C1 — TOEIC 990/990 (score maximal)" },
      { lang: "Allemand", level: "A1 — Débutant" },
    ],
    interestsTitle: "Centres d’intérêt",
    interests: ["Tennis", "Course à pied", "Échecs", "Littérature", "Voyages"],
  },
  journey: {
    experiencesTitle: "Expériences professionnelles",
    projectsTitle: "Projets",
    showMore: "Voir plus",
    showLess: "Voir moins",
    viewProject: "Voir le code →",
  },
  contact: {
    title: "Me contacter",
    pitch: "Vous recrutez un développeur full-stack PHP / JavaScript en CDI ? Je vous réponds sous 24 h.",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    location: "Basé à Poitiers — mobile en France et à l’international",
  },
  footer: { role: "Développeur" },
  experiences: [
    {
      company: "Einden",
      role: "Développeur full-stack",
      period: "09/2022 — Aujourd’hui",
      type: "Alternance (13 mois) puis CDI",
      summary:
        "Éditeur d’une plateforme de gestion de médias pour les entreprises (DAM). Développement et maintenance du produit, de ses plugins et des sites web clients, pour de nouvelles fonctionnalités comme pour des besoins remontés par les clients.",
      sections: [
        {
          title: "Modules",
          items: [
            "Système d’agencement permettant d’organiser les médias selon un ordre donné",
            "Synchronisation des médias à partir de l’API d’un client, automatisée en tâche CRON",
            "Modules de recherche d’images",
            "Optimisation de requêtes SQL et de code",
          ],
        },
        {
          title: "Plugins",
          items: [
            "Développement de plugins CKEditor5, Akeneo, Drupal et Android pour accéder aux médias depuis des applications tierces",
            "Maintenance du plugin WordPress",
            "Conception avec le chef de projet et le product owner",
          ],
        },
        {
          title: "Support & sites web",
          items: [
            "Résolution de tickets, dont des correctifs urgents après montée de version",
            "Accompagnement des clients sur l’utilisation de leur API custom (collections Postman)",
            "Développement et maintenance de sites web clients à partir d’un template",
            "Rédaction de documentation et de comptes rendus d’avancement",
          ],
        },
      ],
      stack: ["PHP", "JavaScript", "TypeScript", "SQL", "SASS", "Drupal", "CKEditor5", "Akeneo", "Postman", "Linux"],
      image: "/images/einden.webp",
      imageAlt: "Interface de la plateforme de gestion de médias Einden : grille de recherche d’images",
    },
    {
      company: "Ganylab",
      role: "Développeur robotique",
      period: "06/2022 — 08/2022",
      type: "Stage — 3 mois",
      summary:
        "Développement d’un robot sous ROS2 se déplaçant soit guidé par télécommande, soit de façon autonome sur un parcours.",
      sections: [
        {
          items: [
            "Cartographie d’une pièce à l’aide d’un lidar",
            "Planification d’un parcours à partir de la cartographie",
            "Détection et évitement d’obstacles",
            "Reprise de l’existant et collaboration avec l’ingénieur mécanique",
          ],
        },
      ],
      stack: ["C++", "Python", "ROS2"],
    },
    {
      company: "Grains’up",
      role: "Développeur web",
      period: "12/2020 — 03/2021",
      type: "Stage — 4 mois",
      summary: "Réalisation du site web présentant l’entreprise et ses différentes activités.",
      sections: [
        {
          items: ["Échanges avec l’entreprise pour la maquette", "Développement et suivi de projet"],
        },
      ],
      stack: ["HTML", "CSS", "JavaScript"],
    },
  ],
  projects: [
    {
      title: "Ce portfolio",
      icon: Globe,
      description:
        "Site bilingue FR / EN développé avec Next.js 16, React 19 et TypeScript : rendu statique, SEO (données structurées, hreflang, sitemap), accessibilité et déploiement continu sur Vercel.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      type: "Projet personnel — 2026",
      link: "https://github.com/FaresCherif/my-portfolio",
    },
    {
      title: "Organisation d’images par IA",
      icon: Brain,
      description:
        "Conception, entraînement et validation d’un modèle d’intelligence artificielle pour classer automatiquement des images.",
      stack: ["Machine learning"],
      type: "Master — Poitiers",
    },
    {
      title: "Drawbot",
      description:
        "Application de dessin sur tablette, reproduit ensuite sur papier par une imprimante 3D custom. Projet en équipe mené avec un client : cahier des charges, planning Gantt, rapports réguliers.",
      stack: ["C++", "Qt"],
      type: "Master — Poitiers",
      image: "/images/drawbot.png",
      imageAlt: "Application Drawbot : tracés de couleur dessinés sur la tablette",
    },
    {
      title: "Vue-Assurance",
      icon: ShieldCheck,
      description:
        "Maquette d’un site d’assurance en Vue.js : interface moderne et responsive présentant les services d’un assureur.",
      stack: ["Vue.js", "JavaScript"],
      type: "Projet personnel",
    },
    {
      title: "Moteur de rendu 3D",
      icon: Box,
      description:
        "Rendu d’objets 3D : découpage des modèles en triangles, puis développement et application de shaders.",
      stack: ["3D", "Shaders"],
      type: "Master — Poitiers",
    },
    {
      title: "Robot mobile",
      icon: Bot,
      description: "Conception et développement d’un robot dont chaque roue est pilotée de façon asynchrone.",
      stack: ["Robotique"],
      type: "Master — Poitiers",
    },
    {
      title: "Unity — Circuit de voiture",
      icon: Car,
      description:
        "Jeu de course dans lequel on pilote une voiture sur un circuit personnalisable, avec gestion des collisions.",
      stack: ["C#", "Unity"],
      type: "Master — Poitiers",
    },
    {
      title: "Messagerie sécurisée",
      icon: MessageSquareLock,
      description:
        "Mise en place d’un réseau local pour l’envoi de messages chiffrés par clé publique / privée, puis interception par une attaque Man-in-the-Middle.",
      stack: ["Réseau", "Cryptographie"],
      type: "Licence — Limoges",
    },
    {
      title: "Ray-Tracing",
      description:
        "Moteur de ray-tracing écrit from scratch en Java, rendant une scène avec une sphère miroir et une sphère en verre.",
      stack: ["Java"],
      type: "Licence — Limoges",
      image: "/images/raytracing.png",
      imageAlt: "Rendu ray-tracing : pièce colorée avec une sphère miroir et une sphère en verre",
    },
    {
      title: "Mobile Clicker Game",
      description:
        "Jeu mobile de type clicker avec vagues d’ennemis, système de niveaux et récupération de données via une API.",
      stack: ["Java", "Android"],
      type: "Licence — Limoges",
      image: "/images/clicker.webp",
      imageAlt: "Mobile Clicker Game : carte des niveaux reliés entre eux",
    },
    {
      title: "Jeu type Pokémon",
      icon: Swords,
      description: "Jeu en ligne de commande développé en équipe : conception des classes, documentation et débogage.",
      stack: ["POO"],
      type: "Licence — Limoges",
    },
    {
      title: "Yahtzee",
      description: "Jeu de Yahtzee multijoueur avec deux modes : ligne de commande et interface graphique.",
      stack: ["C++", "SFML"],
      type: "Projet universitaire",
      image: "/images/yahtzee.webp",
      imageAlt: "Yahtzee en interface graphique SFML : cinq dés sur un tapis vert et la feuille de score",
    },
  ],
};
