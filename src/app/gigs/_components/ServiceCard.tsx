import { ClockIcon, TagIcon } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { BookableService } from "./BookServiceButton";
import BookServiceButton from "./BookServiceButton";

interface ServiceCardProps {
  service: BookableService & {
    /** Hourly services display "1,500 BDT/hr" instead of a flat price */
    unit?: "fixed" | "hour";
    /** Sub-bullets that highlight what's included */
    features: string[];
    /** Lucide icon node */
    icon: React.ReactNode;
    /** Optional highlight tag (e.g. "Popular", "New") */
    badge?: string;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const isHourly = service.unit === "hour";

  return (
    <SpotlightCard
      className="group flex flex-col gap-6 justify-between"
      spotlightColor="rgba(223, 249, 74, 0.6)"
    >
      {/* Top: icon + badge + title + description */}
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="rounded-xl bg-primary/10 border border-primary/20 p-3 w-fit">
            {service.icon}
          </div>
          {service.badge && (
            <span style={{fontSize: "10px"}} className="!text-sm font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30 rounded-full px-2.5 py-1">
              {service.badge}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-neutral-100 mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-neutral-300"
            >
              <span className="mt-1.5 inline-block size-1.5 rounded-full bg-primary shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom: price + CTA */}
      <div className="flex flex-col gap-4 pt-2 border-t border-neutral-800">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-neutral-500 mb-1 flex items-center gap-1.5">
              {isHourly ? (
                <>
                  <ClockIcon className="size-3" /> Hourly rate
                </>
              ) : (
                <>
                  <TagIcon className="size-3" /> Starting at
                </>
              )}
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-extrabold text-neutral-100">
                {service.currency}{" "}
                {service.price.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
              {isHourly && (
                <span className="text-sm font-medium text-neutral-400">
                  /hr
                </span>
              )}
            </div>
          </div>
        </div>

        <BookServiceButton service={service} />
      </div>
    </SpotlightCard>
  );
}
