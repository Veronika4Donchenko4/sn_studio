"use client";

import { useT } from "@/lib/i18n";
import type { Project } from "@/lib/content";
import ProjectMockup from "./ProjectMockup";

export default function ProjectCard({ project }: { project: Project }) {
  const t = useT();
  const desc = t.projects.items[project.id];

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-black transition-colors hover:border-white/25">
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ProjectMockup project={project} />
        </div>
        <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-wide text-zinc-300 backdrop-blur">
          {project.type === "mobile" ? t.projects.tabMobile : t.projects.tabWeb}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-white">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-zinc-500"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
