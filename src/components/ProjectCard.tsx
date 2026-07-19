import { ArrowUpRightIcon, BriefcaseIcon } from "lucide-react";
import type { Project } from "@/data/projects";
import SpotlightCard from "./ui/SpotlightCard";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <SpotlightCard
      className="group flex flex-col gap-5 justify-between h-full"
      spotlightColor="rgba(223, 249, 74, 0.6)"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs uppercase tracking-wider text-neutral-500">
            {project.category}
          </p>
          {project.client && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30 rounded-full px-2.5 py-1">
              <BriefcaseIcon className="size-3" />
              Client work
            </span>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-neutral-100 mb-2">
            {project.name}
          </h3>
          <p className="text-sm font-medium text-primary leading-relaxed mb-3">
            {project.tagline}
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul className="space-y-2">
          {project.deliverables.map((deliverable) => (
            <li
              key={deliverable}
              className="flex items-start gap-2 text-sm text-neutral-300"
            >
              <span className="mt-1.5 inline-block size-1.5 rounded-full bg-primary shrink-0" />
              <span>{deliverable}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-full px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
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
