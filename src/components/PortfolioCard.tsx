import { ArrowUpRightIcon } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";
import SpotlightCard from "./ui/SpotlightCard";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <SpotlightCard
      className="group flex flex-col gap-5 justify-between h-full"
      spotlightColor="rgba(223, 249, 74, 0.6)"
    >
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-wider text-neutral-500">
          {project.category}
        </p>

        <div>
          <h2 className="text-2xl font-bold text-neutral-100 mb-2">
            {project.name}
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="text-xs text-neutral-400 bg-neutral-950 border border-neutral-800 rounded-full px-2.5 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium transition-colors duration-200 group/btn pt-2 border-t border-neutral-800"
        >
          <span className="border-b-2 pb-1 mr-2 group-hover/btn:border-primary">
            Visit website
          </span>
          <ArrowUpRightIcon className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
        </a>
      )}
    </SpotlightCard>
  );
}
