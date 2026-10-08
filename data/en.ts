import { Bot, Box, Brain, Car, Dices, MessageSquareLock, ShieldCheck, Smartphone, Swords } from "lucide-react";
import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Fares Cherif — Full-Stack PHP / JavaScript Developer",
    titleTemplate: "%s | Fares Cherif — Full-Stack PHP / JavaScript Developer",
    description:
      "Portfolio of Fares Cherif, full-stack PHP / JavaScript developer based in France. 4 years of experience, looking for a permanent role in France or abroad.",
    ogLocale: "en_US",
    jobTitle: "Full-Stack PHP / JavaScript Developer",
    about: {
      title: "About",
      description:
        "Background, skills (PHP, JavaScript, TypeScript, SQL, Drupal…), education and languages of Fares Cherif, full-stack developer.",
    },
    projects: {
      title: "Experience",
      description:
        "Professional experience of Fares Cherif (Einden, Ganylab, Grains’up) and projects: AI, robotics, 3D rendering, games, web.",
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with Fares Cherif, full-stack PHP / JavaScript developer looking for a permanent role in France or abroad.",
    },
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Experience",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "FR",
    switchAria: "Version française",
  },
  hero: {
    greeting: "Hi, my name is",
    role: "Full-Stack PHP / JavaScript Developer",
    pitch:
      "4 years of experience on a digital asset management platform for businesses: core modules, API integrations and plugins (Drupal, Akeneo, CKEditor5) running in production for clients. Looking for a permanent role, in France or abroad.",
    ctaJourney: "See my experience",
    ctaContact: "Get in touch",
    ctaCv: "Download my resume",
    cvHref: "/CV_EN.pdf",
    otherCvLabel: "CV en français (PDF)",
    otherCvHref: "/CV_FR.pdf",
  },
  about: {
    title: "About",
    whoAmI: "Who am I?",
    intro: [
      "I’m Fares Cherif, a full-stack PHP / JavaScript developer with a Master’s degree in Software Design from the University of Poitiers, France.",
      "Since 2022, I’ve been working at Einden, which builds a digital asset management (DAM) platform for businesses — first as a work-study apprentice, then as a full-time employee. I develop modules (API synchronization, media organization, SQL optimization), plugins (CKEditor5, Akeneo, Drupal, Android) and client websites, while also providing technical support.",
      "What I enjoy most: understanding a client’s need and turning it into a reliable feature, from the back end to the interface. I’m now looking for a permanent full-stack developer role in a product team, in France or abroad.",
    ],
    skillsTitle: "Skills",
    skillGroups: [
      { label: "Languages", items: ["PHP", "JavaScript", "TypeScript", "SQL", "HTML / CSS", "SASS"] },
      { label: "Ecosystem", items: ["Drupal", "WordPress", "Akeneo", "CKEditor5", "Postman", "Linux"] },
    ],
    notionsLabel: "Familiar with:",
    notions:
      "Java, C / C++, C#, Python, Symfony, React, Vue.js, Node.js, Qt, Unity, ROS2 — Agile and V-model methodologies.",
    educationTitle: "Education",
    education: [
      { year: "2021 - 2023", title: "Master’s degree in Software Design", school: "University of Poitiers" },
      {
        year: "2018 - 2021",
        title: "Technical degree (DUT), then Bachelor’s in Computer Science",
        school: "University of Limoges",
      },
      {
        year: "2018",
        title: "French Baccalaureate in Science — Computer Science major",
        school: "Lycée Marguerite de Valois",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { lang: "French", level: "Native" },
      { lang: "English", level: "C1 — TOEIC 990/990 (maximum score)" },
      { lang: "German", level: "A1 — Beginner" },
    ],
    interestsTitle: "Interests",
    interests: ["Tennis", "Running", "Chess", "Literature", "Travel"],
  },
  journey: {
    experiencesTitle: "Professional experience",
    projectsTitle: "Projects",
    showMore: "Show more",
    showLess: "Show less",
    viewProject: "View project →",
  },
  contact: {
    title: "Get in touch",
    pitch: "Hiring a full-stack PHP / JavaScript developer for a permanent role? I reply within 24 hours.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    location: "Based in Poitiers, France — open to relocation in France and abroad",
  },
  footer: { role: "Developer" },
  experiences: [
    {
      company: "Einden",
      role: "Full-Stack Developer",
      period: "09/2022 — Present",
      type: "Work-study (13 months), then full-time",
      summary:
        "Publisher of a digital asset management (DAM) platform for businesses. Development and maintenance of the product, its plugins and client websites — for new features as well as client-reported needs.",
      sections: [
        {
          title: "Modules",
          items: [
            "Arrangement system to organize media in a custom order",
            "Media synchronization from a client’s API, automated as a CRON job",
            "Image search modules",
            "SQL query and code optimization",
          ],
        },
        {
          title: "Plugins",
          items: [
            "CKEditor5, Akeneo, Drupal and Android plugins giving access to media from third-party applications",
            "Maintenance of the WordPress plugin",
            "Design work with the project manager and product owner",
          ],
        },
        {
          title: "Support & websites",
          items: [
            "Ticket resolution, including urgent fixes after version upgrades",
            "Helping clients use their custom API (Postman collections)",
            "Building and maintaining client websites from a template",
            "Writing documentation and progress reports",
          ],
        },
      ],
      stack: ["PHP", "JavaScript", "TypeScript", "SQL", "SASS", "Drupal", "CKEditor5", "Akeneo", "Postman", "Linux"],
      image: "/images/einden.webp",
      imageAlt: "Einden digital asset management platform: image search grid",
    },
    {
      company: "Ganylab",
      role: "Robotics Developer",
      period: "06/2022 — 08/2022",
      type: "Internship — 3 months",
      summary:
        "Development of a ROS2 robot that moves either by remote control or autonomously along a route.",
      sections: [
        {
          items: [
            "Mapping a room with a lidar sensor",
            "Route planning based on the map",
            "Obstacle detection and avoidance",
            "Building on existing code and working with the mechanical engineer",
          ],
        },
      ],
      stack: ["C++", "Python", "ROS2"],
    },
    {
      company: "Grains’up",
      role: "Web Developer",
      period: "12/2020 — 03/2021",
      type: "Internship — 4 months",
      summary: "Built the company website presenting its business and activities.",
      sections: [
        {
          items: ["Mockup discussions with the company", "Development and project follow-up"],
        },
      ],
      stack: ["HTML", "CSS", "JavaScript"],
    },
  ],
  projects: [
    {
      title: "AI image classification",
      icon: Brain,
      description: "Design, training and validation of a machine learning model that automatically classifies images.",
      stack: ["Machine learning"],
      type: "Master’s — Poitiers",
    },
    {
      title: "Drawbot",
      description:
        "Tablet drawing app whose drawings are reproduced on paper by a custom 3D printer. Team project run with a client: specifications, Gantt planning, regular reports.",
      stack: ["C++", "Qt"],
      type: "Master’s — Poitiers",
      image: "/images/drawbot.png",
      imageAlt: "Drawbot app: colored strokes drawn on the tablet",
    },
    {
      title: "Vue-Assurance",
      icon: ShieldCheck,
      description: "Insurance website mockup built with Vue.js: a modern, responsive interface presenting an insurer’s services.",
      stack: ["Vue.js", "JavaScript"],
      type: "Personal project",
    },
    {
      title: "3D rendering engine",
      icon: Box,
      description: "Rendering 3D objects: splitting models into triangles, then writing and applying shaders.",
      stack: ["3D", "Shaders"],
      type: "Master’s — Poitiers",
    },
    {
      title: "Mobile robot",
      icon: Bot,
      description: "Design and development of a robot whose wheels are each driven asynchronously.",
      stack: ["Robotics"],
      type: "Master’s — Poitiers",
    },
    {
      title: "Unity — Racing circuit",
      icon: Car,
      description: "Racing game where you drive a car on a customizable circuit, with collision handling.",
      stack: ["C#", "Unity"],
      type: "Master’s — Poitiers",
    },
    {
      title: "Secure messaging",
      icon: MessageSquareLock,
      description:
        "Set up a local network to send messages encrypted with public / private keys, then intercepted them with a man-in-the-middle attack.",
      stack: ["Networking", "Cryptography"],
      type: "Bachelor’s — Limoges",
    },
    {
      title: "Ray-Tracing",
      description: "Ray-tracing engine written from scratch in Java, rendering a scene with a mirror sphere and a glass sphere.",
      stack: ["Java"],
      type: "Bachelor’s — Limoges",
      image: "/images/raytracing.png",
      imageAlt: "Ray-traced render: colored room with a mirror sphere and a glass sphere",
    },
    {
      title: "Mobile Clicker Game",
      icon: Smartphone,
      description: "Clicker-style mobile game with enemy waves, a level system and data fetched from an API.",
      stack: ["Java", "Android"],
      type: "Bachelor’s — Limoges",
    },
    {
      title: "Pokémon-style game",
      icon: Swords,
      description: "Command-line game built as a team: class design, documentation and debugging.",
      stack: ["OOP"],
      type: "Bachelor’s — Limoges",
    },
    {
      title: "Yahtzee",
      icon: Dices,
      description: "Multiplayer Yahtzee game with two modes: command line and graphical interface.",
      stack: ["C++", "SFML"],
      type: "University project",
    },
  ],
};
