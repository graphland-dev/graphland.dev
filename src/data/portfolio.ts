export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  /** Public URL, when the project has one */
  href?: string;
}

/**
 * Curated work shown on /portfolio.
 * Copy is limited to verified project facts — no metrics, clients, or dates.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "dinebd",
    name: "Dinebd",
    category: "Food delivery",
    description:
      "Food delivery ecosystem with customer and vendor mobile apps (React Native), a super admin portal, and a vendor/restaurant dashboard. Includes live order tracking, push notifications, automated vendor invoicing, catering orders, and table reservations.",
    stack: ["Node.js", "NestJS", "MongoDB", "React Native"],
  },
  {
    id: "reel-recruits",
    name: "Reel Recruits",
    category: "Recruitment",
    description:
      "Job portal where candidates apply by recording webcam video answers to a set of questions shown one at a time. Employers screen candidates by reviewing the video responses.",
    stack: ["Node.js", "NestJS", "MongoDB"],
    href: "https://www.reel-recruits.com/",
  },
  {
    id: "reservetable",
    name: "Reservetable",
    category: "SaaS",
    description:
      "Restaurant reservation SaaS where owners manage reservation requests in a dashboard and can build custom reservation forms, in the style of Google Forms. Pricing is tiered by features, with a super admin dashboard for subscriptions, orders, support, and analytics.",
    stack: ["NestJS", "GraphQL", "MongoDB", "Redis", "Next.js"],
  },
  {
    id: "electronthemes",
    name: "ElectronThemes",
    category: "Marketplace",
    description:
      "Online marketplace for digital products, including web templates and themes, with an admin panel for sales and storefront management.",
    stack: ["Next.js", "Laravel", "PostgreSQL", "Vue.js"],
    href: "https://electronthemes.com/",
  },
  {
    id: "curious-biker",
    name: "Curious Biker",
    category: "Media",
    description: "Bangladeshi bike news portal.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "tRPC"],
    href: "https://curiousbiker.com/",
  },
];
