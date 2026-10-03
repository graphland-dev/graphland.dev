import type { Metadata } from "next";
import Link from "next/link";
import { MoveUpRightIcon } from "lucide-react";
import PortfolioCard from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/Spotlight";
import { portfolioProjects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portfolio | Graphland",
  description:
    "Selected Graphland projects: Dinebd, Reel Recruits, Reservetable, ElectronThemes, and Curious Biker.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <div className="relative flex w-full overflow-hidden bg-black/[0.96] antialiased">
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
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500 mb-6">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold text-neutral-100 md:text-6xl">
            Selected work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-neutral-400">
            Five selected projects across food delivery, recruitment,
            reservations, marketplaces, and media.
          </p>
        </div>
      </div>

      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-100 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-neutral-400 mb-8">
            Tell us what you want to build.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              <MoveUpRightIcon />
              Let&apos;s Talk
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
