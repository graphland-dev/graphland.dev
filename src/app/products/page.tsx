import {
  BadgeCheckIcon,
  MoveUpRightIcon,
  SparklesIcon,
} from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Highlighter } from "@/components/magicui/highlighter";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/Spotlight";
import { getSortedProducts, products } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  const sortedProducts = getSortedProducts();
  const liveCount = products.filter((p) => p.status === "live").length;

  return (
    <div className="bg-neutral-950 min-h-screen">
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
            <SparklesIcon className="size-3.5 text-primary" />
            {liveCount} products available now
          </p>
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
            Graphland{" "}
            <Highlighter action="highlight" color="var(--primary)">
              <span className="text-black">Products</span>
            </Highlighter>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg font-normal text-neutral-300">
            Banik, StoreOS, waland, envland, and more — headless commerce,
            messaging, secrets, and business tools built by Graphland.
          </p>
        </div>
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 pt-4">
            <div className="mb-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-100 mb-2">
                Full product catalog
              </h2>
              <p className="text-sm lg:text-base text-neutral-400">
                {products.length} products • ERP, headless commerce, messaging & more
              </p>
            </div>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-neutral-300 hover:text-primary transition-colors"
            >
              Need a custom integration? Talk to us
              <MoveUpRightIcon className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <BadgeCheckIcon className="size-7 text-primary" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-100 mb-4">
            Need something tailored?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Our products share a common platform — we can customize modules,
            integrate with your stack, or build entirely new tools for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/gigs">Browse bookable services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
