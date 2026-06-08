import { Suspense } from "react";
import Link from "next/link";
import {
  BugIcon,
  GlobeIcon,
  LayoutPanelTopIcon,
  MoveUpRightIcon,
  PaintbrushIcon,
  PencilRulerIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  SparklesIcon,
  TabletSmartphoneIcon,
  WrenchIcon,
  CheckCircle2Icon,
  XCircleIcon,
  InfoIcon,
} from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import ServiceCard from "./_components/ServiceCard";
import StatusBanner from "./_components/StatusBanner";
import type { BookableService } from "./_components/BookServiceButton";

type Service = BookableService & {
  unit?: "fixed" | "hour";
  features: string[];
  icon: React.ReactNode;
  badge?: string;
};

const services: Service[] = [
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    price: 250000,
    currency: "BDT",
    unit: "fixed",
    description:
      "End-to-end native & cross-platform mobile apps for iOS and Android — designed for performance, scalability, and great UX.",
    features: [
      "Native iOS + Android, or cross-platform (React Native / Flutter)",
      "Push notifications & offline support",
      "App Store + Play Store submission",
      "3 months of free post-launch support",
    ],
    icon: <TabletSmartphoneIcon className="size-7 text-primary" />,
    badge: "Popular",
  },
  {
    id: "website-development",
    title: "Website Development",
    price: 300000,
    currency: "BDT",
    unit: "fixed",
    description:
      "Lightning-fast, SEO-friendly marketing sites, dashboards and web apps built with Next.js, React, and modern tooling.",
    features: [
      "Custom responsive UI/UX",
      "SEO + Core Web Vitals optimization",
      "CMS integration (Sanity, Strapi, etc.)",
      "CI/CD + analytics setup",
    ],
    icon: <GlobeIcon className="size-7 text-primary" />,
    badge: "Popular",
  },
  {
    id: "ecommerce-store",
    title: "E-commerce Store",
    price: 450000,
    currency: "BDT",
    unit: "fixed",
    description:
      "Full-featured online stores with payments, inventory, and order management — ready to start selling from day one.",
    features: [
      "Product catalog & inventory",
      "Payment gateway integration (bKash, Nagad, cards)",
      "Order & shipping management",
      "Customer accounts & analytics",
    ],
    icon: <ShoppingCartIcon className="size-7 text-primary" />,
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    price: 80000,
    currency: "BDT",
    unit: "fixed",
    description:
      "Beautiful, conversion-focused product design — from research and wireframes to a polished, production-ready Figma file.",
    features: [
      "User research & journey maps",
      "Wireframes + interactive prototype",
      "Full design system in Figma",
      "Unlimited design revisions",
    ],
    icon: <PaintbrushIcon className="size-7 text-primary" />,
  },
  {
    id: "saas-mvp",
    title: "SaaS MVP Build",
    price: 500000,
    currency: "BDT",
    unit: "fixed",
    description:
      "Take your SaaS idea to a production-ready MVP — auth, billing, multi-tenant backend, and an admin dashboard included.",
    features: [
      "Multi-tenant architecture",
      "Auth, billing & subscription management",
      "Admin dashboard + analytics",
      "Production deployment on Cloudflare",
    ],
    icon: <LayoutPanelTopIcon className="size-7 text-primary" />,
    badge: "New",
  },
  {
    id: "api-backend",
    title: "API & Backend Development",
    price: 200000,
    currency: "BDT",
    unit: "fixed",
    description:
      "Scalable REST, GraphQL or tRPC APIs with a managed database, caching, background jobs, and rock-solid auth.",
    features: [
      "REST, GraphQL, or tRPC endpoints",
      "PostgreSQL / MongoDB schema design",
      "Auth, rate-limiting & caching",
      "OpenAPI / GraphQL documentation",
    ],
    icon: <ShieldCheckIcon className="size-7 text-primary" />,
  },
  {
    id: "bug-fixing",
    title: "Bug Fixing & Maintenance",
    price: 1500,
    currency: "BDT",
    unit: "hour",
    description:
      "Stuck on a tricky bug, broken build, or production incident? Get an experienced engineer on call, billed by the hour.",
    features: [
      "Triage & root-cause analysis",
      "Production hot-fixes",
      "Performance profiling",
      "Hourly reporting & time logs",
    ],
    icon: <BugIcon className="size-7 text-primary" />,
  },
  {
    id: "code-review",
    title: "Code Review & Consulting",
    price: 3000,
    currency: "BDT",
    unit: "hour",
    description:
      "A senior engineer reviews your codebase, identifies risks, and gives you a clear, actionable improvement plan.",
    features: [
      "Architecture & security review",
      "Refactor & modernization plan",
      "1:1 video walkthrough",
      "Written report with priorities",
    ],
    icon: <PencilRulerIcon className="size-7 text-primary" />,
  },
  {
    id: "devops-setup",
    title: "DevOps & Cloud Setup",
    price: 120000,
    currency: "BDT",
    unit: "fixed",
    description:
      "Get your project on a solid, automated cloud foundation — CI/CD, monitoring, secrets, and zero-downtime deploys.",
    features: [
      "CI/CD pipelines (GitHub Actions, etc.)",
      "Cloudflare / AWS / Vercel setup",
      "Monitoring, logs & alerts",
      "Staging + production environments",
    ],
    icon: <WrenchIcon className="size-7 text-primary" />,
  },
  {
    id: "tech-workshop",
    title: "1-on-1 Tech Workshop",
    price: 5000,
    currency: "BDT",
    unit: "hour",
    description:
      "Personalized, hands-on coaching on Next.js, React, TypeScript, GraphQL, or whatever your team is trying to learn.",
    features: [
      "Live screen-share sessions",
      "Tailored to your codebase",
      "Q&A and follow-up notes",
      "Session recordings included",
    ],
    icon: <SparklesIcon className="size-7 text-primary" />,
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* Hero Section */}
      <div className="relative flex w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
        />
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs font-medium text-neutral-300 mb-6">
            <CheckCircle2Icon className="size-3.5 text-primary" />
            Transparent pricing. Pay securely with{" "}
            <span className="text-primary font-semibold">
              Graphland Payment Gateway
            </span>
            .
          </p>
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
            Our{" "}
            <Highlighter action="highlight" color="var(--primary)">
              <span className="text-black">Products & Services</span>
            </Highlighter>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg font-normal text-neutral-300">
            Pick a service, book it in under a minute, and pay securely
            online. No back-and-forth, no hidden fees.
          </p>
        </div>
      </div>

      {/* Status banner — shown when redirected back from the payment gateway */}
      <Suspense fallback={null}>
        <StatusBanner />
      </Suspense>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 pt-4">
            <div className="mb-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-100 mb-2">
                Browse all services
              </h2>
              <p className="text-sm lg:text-base text-neutral-400">
                {services.length} services available • Fixed prices &
                hourly rates
              </p>
            </div>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-neutral-300 hover:text-primary transition-colors"
            >
              Need something custom? Get in touch
              <MoveUpRightIcon className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Trust section */}
      <section className="py-20 lg:py-24 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-100 mb-4">
              How booking works
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A few clicks and you&apos;re done. Here&apos;s what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Pick a service",
                description:
                  "Choose from the catalog above. Fixed price or hourly — you see the cost up-front.",
                icon: <CheckCircle2Icon className="size-5 text-primary" />,
              },
              {
                step: "2",
                title: "Book & pay securely",
                description:
                  "We create an invoice through the Graphland Payment Gateway and redirect you to a secure checkout.",
                icon: <ShieldCheckIcon className="size-5 text-primary" />,
              },
              {
                step: "3",
                title: "We get to work",
                description:
                  "Once payment is confirmed, our team reaches out within 1 business day to kick off the project.",
                icon: <InfoIcon className="size-5 text-primary" />,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary font-bold text-sm">
                    {item.step}
                  </span>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-neutral-500 inline-flex items-center gap-2">
              <XCircleIcon className="size-4" />
              Need to cancel? See our{" "}
              <Link
                href="/refund"
                className="text-primary hover:underline font-medium"
              >
                Return & Refund Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
