"use client";

import { useMemo, useState } from "react";
import { useT } from "@/lib/i18n";
import { PROJECTS, type ProjectType } from "@/lib/content";
import FadeIn from "./ui/FadeIn";
import ProjectCard from "./ProjectCard";

type Filter = "all" | ProjectType;

export default function Projects() {
  const t = useT();
  const [filter, setFilter] = useState<Filter>("all");

  const tabs: { key: Filter; label: string }[] = [
    { key: "all", label: t.projects.tabAll },
    { key: "mobile", label: t.projects.tabMobile },
    { key: "web", label: t.projects.tabWeb },
  ];

  const visible = useMemo(
    () => PROJECTS.filter((p) => filter === "all" || p.type === filter),
    [filter],
  );

  return (
    <section id="projects" className="container-content py-28 sm:py-36">
      <FadeIn>
        <p className="eyebrow">{t.projects.label}</p>
        <h2 className="display mt-4 text-4xl sm:text-5xl">{t.projects.title}</h2>
        <p className="mt-5 max-w-xl text-zinc-400">{t.projects.desc}</p>
      </FadeIn>

      <div className="mt-10 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key)}
            aria-pressed={filter === tab.key}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              filter === tab.key
                ? "border-white bg-white text-black"
                : "border-white/15 text-zinc-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
