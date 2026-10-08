export const experiences = [
  {
    company: "Einden",
    role: "Développeur full-stack",
    period: "Depuis 09/2022",
    type: "Alternance (1 an) puis CDI",
    summary:
      "Éditeur d'une solution de DAM (Digital Asset Management). Développement back end et front end sur le produit de l'entreprise.",
    tasks: [
      "Conception et développement de modules custom, dont des modules de recherche d’images",
      "Conception et développement de plugins CKEditor5 et Akeneo pour accéder aux médias depuis des applications tierces",
      "Conception et développement d’un site web",
      "Rédaction de documentation technique",
      "Participation à la mise en place de nouveaux process",
    ],
    stack: ["PHP", "JavaScript", "SQL", "CKEditor5", "Akeneo"],
    image: "/images/einden.webp",
  },
  {
    company: "Ganylab",
    role: "Développeur software",
    period: "07/2022",
    type: "Stage — 2 mois",
    summary: "Développement du logiciel de contrôle d’un robot autonome.",
    tasks: [
      "Pilotage du déplacement du robot par télécommande",
      "Implémentation du déplacement automatique à l’aide d’un lidar",
    ],
    stack: ["C++", "Python"],
  },
  {
    company: "Grains’up",
    role: "Développeur front end",
    period: "12/2020",
    type: "Stage — 12 semaines",
    summary: "Mise en place du site web de l’entreprise.",
    tasks: [],
    stack: ["JavaScript", "PHP"],
  },
];

export const projects = [
  {
    title: "Ray-Tracing",
    description:
      "Moteur de ray-tracing en Java rendant une scène avec deux sphères : l’une réfléchissante (miroir), l’autre réfractante (verre).",
    stack: ["Java"],
    type: "Projet universitaire",
    image: "/images/raytracing.png",
  },
  {
    title: "Drawbot",
    description:
      "Application de dessin sur tablette. Le dessin est ensuite reproduit sur papier via une imprimante 3D custom.",
    stack: ["C++", "Qt"],
    type: "Projet universitaire",
    image: "/images/drawbot.png",
  },
  {
    title: "Vue-Assurance",
    description:
      "Maquette d’un site d’assurance en Vue.js : interface moderne et responsive présentant les services d’un assureur.",
    stack: ["Vue.js", "JavaScript"],
    type: "Projet personnel",
    link: "https://vue-assurance.vercel.app/",
  },
  {
    title: "Yahtzee",
    description:
      "Jeu de Yahtzee multijoueur avec deux modes : ligne de commande et interface graphique.",
    stack: ["C++", "SFML"],
    type: "Projet universitaire",
  },
  {
    title: "Mobile Clicker Game",
    description:
      "Jeu mobile de type clicker : des vagues d’ennemis traversent l’écran et le joueur doit les toucher pour les éliminer.",
    stack: ["Java", "Android"],
    type: "Projet universitaire",
  },
  {
    title: "Unity — Circuit de voiture",
    description:
      "Jeu de course dans lequel on pilote une voiture sur un circuit personnalisable.",
    stack: ["C#", "Unity"],
    type: "Projet universitaire",
  },
];
