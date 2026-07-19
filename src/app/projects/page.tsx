'use client';

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { getSortedProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

interface BrowserWindow {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  project: string;
  rotation: number;
  zIndex: number;
}

export default function ProjectsPage() {
  const [browserWindows] = useState<BrowserWindow[]>([
    {
      id: 1,
      x: 12,
      y: 45,
      width: 280,
      height: 200,
      project: "FinTech Dashboard",
      rotation: -8,
      zIndex: 3
    },
    {
      id: 2,
      x: 35,
      y: 25,
      width: 320,
      height: 240,
      project: "Nyntax",
      rotation: 5,
      zIndex: 2
    },
    {
      id: 3,
      x: 65,
      y: 35,
      width: 300,
      height: 220,
      project: "Healthcare App",
      rotation: -3,
      zIndex: 1
    }
  ]);

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-32">
        {/* Simplified grid background */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient overlay for faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
              {/* Section label */}
              <div className="inline-block">
                <span className="text-purple-400 text-lg font-medium bg-purple-400/10 px-4 py-2 rounded-full border border-purple-400/20">
                  Our Work
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Built with{' '}
                <span className="inline-flex items-center">
                  <svg className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-red-500 animate-pulse mx-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </span>
                , Code,
                <br />
                and a Bit of Magic
              </h1>

              <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl leading-relaxed">
                Explore a curated collection of projects we&apos;ve built from sleek websites to
                powerful SaaS platforms and mobile apps. Each solution reflects our passion for
                design, development, and driving real impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
                <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium text-lg hover:bg-purple-700 transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in touch
                </button>
                <button className="px-8 py-4 border border-neutral-700 text-neutral-100 rounded-full font-medium text-lg hover:border-neutral-400 hover:bg-neutral-900 transition-all duration-200 flex items-center gap-2">
                  Read case studies
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side - Browser mockups */}
            <div className="flex-1 relative h-96 lg:h-[500px] w-full max-w-lg">
              {browserWindows.map((window) => (
                <div
                  key={window.id}
                  className="absolute bg-neutral-900 rounded-xl border border-neutral-800 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20"
                  style={{
                    left: `${window.x}%`,
                    top: `${window.y}%`,
                    width: `${window.width}px`,
                    height: `${window.height}px`,
                    transform: `rotate(${window.rotation}deg)`,
                    zIndex: window.zIndex,
                  }}
                >
                  {/* Browser header */}
                  <div className="flex items-center gap-2 p-3 border-b border-neutral-800">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 mx-4 h-2 bg-neutral-800 rounded"></div>
                  </div>

                  {/* Browser content */}
                  <div className="p-4 h-full">
                    {/* Header area */}
                    <div className="mb-4">
                      <div className="h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded mb-2 opacity-80"></div>
                      <div className="h-3 bg-neutral-700 rounded w-3/4 mb-1"></div>
                      <div className="h-3 bg-neutral-700 rounded w-1/2"></div>
                    </div>

                    {/* Content blocks */}
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="h-8 w-8 bg-neutral-700 rounded"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2 bg-neutral-700 rounded"></div>
                          <div className="h-2 bg-neutral-700 rounded w-2/3"></div>
                        </div>
                      </div>
                      <div className="h-16 bg-neutral-800 rounded"></div>
                      <div className="flex justify-between">
                        <div className="h-3 bg-neutral-700 rounded w-1/4"></div>
                        <div className="h-3 bg-purple-600 rounded w-1/4"></div>
                      </div>
                    </div>

                    {/* Project name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs text-neutral-400 font-medium text-center bg-neutral-950/50 backdrop-blur-sm rounded px-2 py-1">
                        {window.project}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects listing */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-100 mb-2">
              Selected work
            </h2>
            <p className="text-sm lg:text-base text-neutral-400">
              Client platforms and in-house products we&apos;ve designed, built,
              and shipped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {getSortedProjects().map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
