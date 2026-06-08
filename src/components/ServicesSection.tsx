import {
  FigmaIcon,
  GlobeIcon,
  LayoutPanelTopIcon,
  MoveUpRightIcon,
  TabletSmartphoneIcon,
  PercentIcon,
  SparklesIcon,
} from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  path: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    path: "/services/web",
    description:
      "Graphland builds lightning-fast, scalable websites with Next.js and React—designed to look stunning, convert effectively, and deliver top performance with SEO in mind.",
    icon: <GlobeIcon className="size-8 text-primary" />,
  },
  {
    id: "2",
    title: "Native & Cross-Platform Mobile Apps",
    path: "/services/mobile",
    description:
      "We create sleek, high-performance mobile apps that work seamlessly on any device, helping your business reach users everywhere.",
    icon: <TabletSmartphoneIcon className="size-8 text-primary" />,
  },
  {
    id: "3",
    title: "User-Centered Design Solutions",
    path: "/services/design",
    description: "Great design is more than pixelsit's how users feel.",
    icon: <FigmaIcon className="size-8 text-primary" />,
  },
  {
    id: "4",
    title: "Scalable SaaS Solutions",
    path: "/services/saas",
    description:
      "We build scalable SaaS platforms designed for growth, reliability, and seamless user experiences.",
    icon: <LayoutPanelTopIcon className="size-8 text-primary" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            We specialize in creating digital solutions that drive business
            growth and deliver exceptional user experiences.
          </p>
        </div>

        {/* Prebook 1% & Pay 1% banner — applies to every service */}
        <div className="mb-12 lg:mb-16">
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="shrink-0 inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 border border-primary/30">
                <PercentIcon className="size-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-100 flex flex-wrap items-center gap-2">
                  Every service
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 text-primary border border-primary/40 px-2.5 py-0.5 text-sm font-semibold">
                    <SparklesIcon className="size-3.5" />
                    Prebook 1% & Pay 1%
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 mt-1.5 leading-relaxed">
                  Reserve any service by paying just{" "}
                  <span className="font-semibold text-neutral-100">1%</span>{" "}
                  upfront. Another{" "}
                  <span className="font-semibold text-neutral-100">1%</span>{" "}
                  is collected when work begins. Pay the remaining{" "}
                  <span className="font-semibold text-neutral-100">98%</span>{" "}
                  on delivery — no hidden fees, no risk.
                </p>
              </div>
              <Link
                href="/products"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                See all services
                <MoveUpRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <SpotlightCard
              key={service.id}
              className="group flex flex-col gap-3 justify-between"
              spotlightColor="rgba(223, 249, 74, 0.6)"
            >
              <div className="flex flex-col gap-3">
                {/* Icon */}
                {service.icon}

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted mb-8 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href={service.path}
                className="inline-flex items-center font-medium transition-colors duration-200 group/btn"
              >
                <span className="border-b-2 pb-1 mr-2 group-hover/btn:border-primary">
                  View Details
                </span>
                <MoveUpRightIcon className="size-4 group-hover/btn:translate-x-1 -group-hover/btn:translate-y-1 transition-transform duration-200" />
              </Link>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
