export interface Project {
  id: string;
  slug: string;
  name: string;
  /** Client the project was delivered for; omit for in-house platforms */
  client?: string;
  tagline: string;
  description: string;
  category: string;
  /** What was shipped — apps, dashboards, integrations */
  deliverables: string[];
  stack: string[];
  /** Public URL, if the project is publicly visible */
  href?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "dinebd",
    slug: "dinebd",
    name: "DineBD",
    client: "DineBD",
    tagline: "Full infrastructure for a food-delivery chain",
    description:
      "End-to-end platform for a food-delivery chain — customer, partner, and rider apps backed by operations dashboards, all running on a microservice architecture designed and delivered by our team.",
    category: "Food Delivery",
    deliverables: [
      "Customer app — browsing, ordering & tracking",
      "Partner app — restaurant order management",
      "Rider app — dispatch & delivery workflows",
      "Operations dashboards on microservices",
    ],
    stack: ["TypeScript", "NestJS", "Microservices", "PostgreSQL", "Docker"],
    featured: true,
  },
  {
    id: "techdiary",
    slug: "techdiary",
    name: "TechDiary",
    tagline: "Bengali-language developer community platform",
    description:
      "A dev.to-style blogging platform for Bangladeshi developers — diaries, gists, topics, and an active Discord community, built and operated by Graphland.",
    category: "Developer Community",
    deliverables: [
      "Article publishing & rich editor",
      "Gists & topic taxonomy",
      "Community profiles & social features",
    ],
    stack: ["TypeScript", "Next.js", "PostgreSQL"],
    href: "https://www.techdiary.dev",
    featured: true,
  },
  // TODO: confirm real copy for the three projects below — names come from the
  // hero mockups; descriptions are placeholders and should be replaced with
  // actual client, scope, and stack details before shipping.
  {
    id: "nyntax",
    slug: "nyntax",
    name: "Nyntax",
    client: "Nyntax",
    tagline: "Custom software delivered for Nyntax",
    description:
      "Full-stack product development delivered for Nyntax — scope, integrations, and platform details to be published.",
    category: "Client Work",
    deliverables: ["Web application", "API & integrations"],
    stack: ["TypeScript", "React"],
    featured: false,
  },
  {
    id: "fintech-dashboard",
    slug: "fintech-dashboard",
    name: "FinTech Dashboard",
    tagline: "Financial operations dashboard",
    description:
      "Analytics and operations dashboard for a financial technology client — details to be published.",
    category: "FinTech",
    deliverables: ["Analytics dashboard", "Reporting & data pipelines"],
    stack: ["TypeScript", "React"],
    featured: false,
  },
  {
    id: "healthcare-app",
    slug: "healthcare-app",
    name: "Healthcare App",
    tagline: "Patient-facing healthcare application",
    description:
      "Mobile-first healthcare application for a client in the health sector — details to be published.",
    category: "Healthcare",
    deliverables: ["Patient app", "Provider dashboard"],
    stack: ["TypeScript", "React"],
    featured: false,
  },
];

/** Featured projects first, preserving catalog order within each group. */
export function getSortedProjects(): Project[] {
  return [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
