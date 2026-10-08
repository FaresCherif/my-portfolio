import type { LucideIcon } from "lucide-react";
import { Bot, Box, Brain, Car, Dices, MessageSquareLock, ShieldCheck, Smartphone, Swords } from "lucide-react";

type Experience = {
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

type Project = {
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

export const experiences: Experience[] = [
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
];

export const projects: Project[] = [
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
    description:
      "Conception et développement d’un robot dont chaque roue est pilotée de façon asynchrone.",
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
    icon: Smartphone,
    description:
      "Jeu mobile de type clicker avec vagues d’ennemis, système de niveaux et récupération de données via une API.",
    stack: ["Java", "Android"],
    type: "Licence — Limoges",
  },
  {
    title: "Jeu type Pokémon",
    icon: Swords,
    description:
      "Jeu en ligne de commande développé en équipe : conception des classes, documentation et débogage.",
    stack: ["POO"],
    type: "Licence — Limoges",
  },
  {
    title: "Yahtzee",
    icon: Dices,
    description:
      "Jeu de Yahtzee multijoueur avec deux modes : ligne de commande et interface graphique.",
    stack: ["C++", "SFML"],
    type: "Projet universitaire",
  },
];
