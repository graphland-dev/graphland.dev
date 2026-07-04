export type ProductStatus = "live" | "beta" | "coming-soon";

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  features: string[];
  /** Public URL or internal route */
  href: string;
  /** Logo under public/images/products/logos/ */
  logo: string;
  featured: boolean;
  status: ProductStatus;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "banik",
    slug: "banik",
    name: "Banik",
    tagline: "ERP & POS built for Bangladeshi merchants",
    description:
      "Run sales, inventory, parties, payroll, and reports from one place — with POS, PDF exports, payment reminders, and multi-staff access.",
    category: "ERP / POS",
    features: [
      "Ledger, sales & expense tracking",
      "Inventory & party management",
      "Point of sale & business reports",
      "Payment reminders via WhatsApp & SMS",
    ],
    href: "https://banik.app",
    logo: "/images/products/logos/banik.svg",
    featured: true,
    status: "live",
    badge: "By Graphland",
  },
  {
    id: "storeos",
    slug: "storeos",
    name: "StoreOS",
    tagline: "Headless commerce that scales with you",
    description:
      "We run the backend — catalog, cart, checkout, orders, payments, and CDN. Multi-tenant by default, so you grow from one store to many without the infrastructure headache.",
    category: "Headless Commerce",
    features: [
      "REST & GraphQL APIs with Swagger docs",
      "@storeos/storefront-client TypeScript SDK",
      "Multi-tenant — one platform, many stores",
      "Auth, OTP, guest checkout & CDN media",
    ],
    href: "https://storeos.dev",
    logo: "/images/products/logos/storeos.png",
    featured: false,
    status: "live",
    badge: "REST & GraphQL live",
  },
  {
    id: "waland",
    slug: "waland",
    name: "waland",
    tagline: "WhatsApp SMS API for Bangladesh",
    description:
      "Send business updates, OTP alerts, reminders, and bulk campaigns via REST API — with templates, delivery reports, and webhooks.",
    category: "Messaging API",
    features: [
      "REST API with webhooks",
      "Bulk messaging & OTP delivery",
      "Message templates & campaigns",
      "Plans from BDT 480/month",
    ],
    href: "https://waland.dev",
    logo: "/images/products/logos/waland.png",
    featured: false,
    status: "live",
  },
  {
    id: "envland",
    slug: "envland",
    name: "envland",
    tagline: "Encrypted .env files for your whole team",
    description:
      "One source of truth for environment variables — pull, push, and diff secrets from the CLI with AES-256-GCM encryption at rest.",
    category: "Developer Tools",
    features: [
      "CLI-first pull, push & diff",
      "Dev, staging & prod environments",
      "AES-256-GCM encrypted storage",
      "Audit log & version history",
    ],
    href: "https://envland.dev",
    logo: "/images/products/logos/envland.png",
    featured: false,
    status: "live",
  },
  {
    id: "naiveform",
    slug: "naiveform",
    name: "NaiveForm",
    tagline: "Free drag-and-drop form builder",
    description:
      "Create, share, and collect responses with a modern form builder — unlimited forms, CSV export, webhooks, and API support.",
    category: "Forms",
    features: [
      "Drag-and-drop block editor",
      "Hosted links, embeds & API",
      "Real-time responses & CSV export",
      "Webhooks for every submission",
    ],
    href: "https://www.naiveform.com",
    logo: "/images/products/logos/naiveform.svg",
    featured: true,
    status: "live",
    badge: "Free forever",
  },
  {
    id: "identety",
    slug: "identety",
    name: "Identety",
    tagline: "Self-hosted authentication without MAU limits",
    description:
      "Secure, scalable identity management you can run yourself — unlimited users, full control, and no vendor lock-in.",
    category: "Authentication",
    features: [
      "Unlimited users on self-host",
      "Docker-ready deployment",
      "Full source & customization",
      "Developer-friendly auth flows",
    ],
    href: "https://identety.dev",
    logo: "/images/products/logos/identety.svg",
    featured: true,
    status: "live",
  },
  {
    id: "filejar",
    slug: "filejar",
    name: "filejar",
    tagline: "Simple file sharing for teams",
    description:
      "Share files without the friction of email attachments or messy links — built for fast handoffs between teams and clients.",
    category: "File Sharing",
    features: [
      "Quick upload & share links",
      "Team-friendly file handoffs",
      "Clean, minimal interface",
      "Built for everyday workflows",
    ],
    href: "https://filejar.dev",
    logo: "/images/products/logos/filejar.png",
    featured: false,
    status: "live",
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

/** Featured products first, preserving catalog order within each group. */
export function getSortedProducts(): Product[] {
  return [
    ...products.filter((p) => p.featured),
    ...products.filter((p) => !p.featured),
  ];
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
