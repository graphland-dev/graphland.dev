import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";
import { isExternalHref, getFeaturedProducts } from "@/data/products";
import ProductLogo from "./ProductLogo";
import { Button } from "./ui/button";

export default function ProductsSection() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-32 lg:py-40 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
            Our Products
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Software we build in-house — merchant ERP, headless commerce,
            WhatsApp APIs, forms, auth, and developer tools.
          </p>
        </div>

        <div className="flex flex-nowrap items-center justify-start md:justify-center gap-6 lg:gap-10 overflow-x-auto pb-2 scrollbar-none">
          {featuredProducts.map((product) => {
            const linkClassName =
              "shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200";

            if (isExternalHref(product.href)) {
              return (
                <a
                  key={product.id}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                  title={product.name}
                >
                  <ProductLogo
                    name={product.name}
                    logo={product.logo}
                    variant="strip"
                  />
                </a>
              );
            }

            return (
              <Link
                key={product.id}
                href={product.href}
                className={linkClassName}
                title={product.name}
              >
                <ProductLogo
                  name={product.name}
                  logo={product.logo}
                  variant="strip"
                />
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <Button asChild size="lg" variant="outline">
            <Link href="/products" className="gap-2">
              View all products
              <MoveUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
