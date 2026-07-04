"use client";

import { MoveUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Gigs", href: "/gigs" },
    // { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-bold text-xl text-neutral-100 flex items-center gap-2"
          >
            <Image src="/logo.png" width={40} height={40} alt="logo" />
            <p>Graphland</p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-300 hover:text-neutral-100 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}

            <Button asChild>
              <Link href={"/contact"} className="text-black!">
                <MoveUpRightIcon />
                <span>Let&apos;s Talk</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <div
                className={`w-5 h-0.5 bg-neutral-200 transition-all duration-200 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <div
                className={`w-5 h-0.5 bg-neutral-200 transition-all duration-200 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`w-5 h-0.5 bg-neutral-200 transition-all duration-200 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-800">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-900 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
