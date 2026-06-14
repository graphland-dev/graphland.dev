import {
  ArrowUpRightIcon,
  BadgeCheckIcon,
  ClockIcon,
  MoveUpRightIcon,
} from "lucide-react";
import Link from "next/link";
import type { Product } from "@/data/products";
import { isExternalHref } from "@/data/products";
import ProductLogo from "./ProductLogo";
import SpotlightCard from "./ui/SpotlightCard";

const statusLabels: Record<Product["status"], string> = {
  live: "Available",
  beta: "Beta",
  "coming-soon": "Coming soon",
};

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const external = isExternalHref(product.href);
  const ctaLabel = external ? "Visit website" : "View product";

  const ctaContent = (
    <>
      <span className="border-b-2 pb-1 mr-2 group-hover/btn:border-primary">
        {ctaLabel}
      </span>
      {external ? (
        <ArrowUpRightIcon className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
      ) : (
        <MoveUpRightIcon className="size-4 group-hover/btn:translate-x-1 -group-hover/btn:translate-y-1 transition-transform duration-200" />
      )}
    </>
  );

  return (
    <SpotlightCard
      className="group flex flex-col gap-5 justify-between h-full"
      spotlightColor="rgba(223, 249, 74, 0.6)"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <ProductLogo name={product.name} logo={product.logo} />
          <div className="flex flex-wrap items-center justify-end gap-2">
            {product.badge && (
              <span className="text-xs font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30 rounded-full px-2.5 py-1">
                {product.badge}
              </span>
            )}
            <span
              className={`text-xs font-medium rounded-full px-2.5 py-1 border ${
                product.status === "live"
                  ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                  : product.status === "beta"
                    ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                    : "bg-neutral-800 text-neutral-400 border-neutral-700"
              }`}
            >
              {product.status === "coming-soon" ? (
                <span className="inline-flex items-center gap-1">
                  <ClockIcon className="size-3" />
                  {statusLabels[product.status]}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1">
                  {product.status === "live" && (
                    <BadgeCheckIcon className="size-3" />
                  )}
                  {statusLabels[product.status]}
                </span>
              )}
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
            {product.category}
          </p>
          <h3 className="text-2xl font-bold text-neutral-100 mb-2">
            {product.name}
          </h3>
          <p
            className={`font-medium text-primary leading-relaxed ${
              compact ? "text-sm line-clamp-2" : "text-sm mb-3"
            }`}
          >
            {product.tagline}
          </p>
          {!compact && (
            <p className="text-neutral-400 text-sm leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {!compact && (
          <ul className="space-y-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-neutral-300"
              >
                <span className="mt-1.5 inline-block size-1.5 rounded-full bg-primary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {external ? (
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium transition-colors duration-200 group/btn pt-2 border-t border-neutral-800"
        >
          {ctaContent}
        </a>
      ) : (
        <Link
          href={product.href}
          className="inline-flex items-center font-medium transition-colors duration-200 group/btn pt-2 border-t border-neutral-800"
        >
          {ctaContent}
        </Link>
      )}
    </SpotlightCard>
  );
}
