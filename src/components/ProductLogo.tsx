"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductLogoProps {
  name: string;
  logo: string;
  variant?: "wide" | "strip";
  className?: string;
}

export default function ProductLogo({
  name,
  logo,
  variant = "wide",
  className,
}: ProductLogoProps) {
  const [failed, setFailed] = useState(false);

  const isStrip = variant === "strip";

  if (failed) {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold",
          isStrip ? "h-10 px-4 text-sm" : "h-12 px-4 text-base",
          className,
        )}
        aria-hidden
      >
        {name}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center justify-start rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden",
        isStrip
          ? "h-11 px-4 py-2 min-w-[100px] max-w-[160px]"
          : "h-12 px-3 py-2 min-w-[120px] max-w-[180px]",
        className,
      )}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={isStrip ? 140 : 160}
        height={isStrip ? 32 : 40}
        className={cn(
          "w-auto max-w-full object-contain object-left",
          isStrip ? "h-6" : "h-7",
        )}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
