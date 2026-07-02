import type { Project } from "@/lib/content";

/**
 * Renders a lightweight, English-only UI mockup for a project card.
 * All labels here are intentionally hardcoded in English regardless of the
 * site's active language (per design requirement).
 */
export default function ProjectMockup({ project }: { project: Project }) {
  const [from, to] = project.accent;
  const gradient = `linear-gradient(135deg, ${from}, ${to})`;

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-surface-2 p-6">
      <div className="absolute inset-0 opacity-20" style={{ background: gradient }} aria-hidden />
      {project.type === "mobile" ? (
        <PhoneMockup title={project.screenTitle} accent={from} />
      ) : (
        <BrowserMockup name={project.name} title={project.screenTitle} accent={from} />
      )}
    </div>
  );
}

function PhoneMockup({ title, accent }: { title: string; accent: string }) {
  return (
    <div className="relative z-10 h-[210px] w-[120px] rounded-[18px] border border-white/15 bg-black p-2 shadow-2xl">
      <div className="mx-auto mb-2 mt-1 h-1 w-8 rounded-full bg-white/20" />
      <div className="rounded-md px-1">
        <p className="text-[8px] text-zinc-500">Good morning</p>
        <p className="text-[10px] font-medium text-white">{title}</p>
      </div>
      <div className="mt-2 space-y-1.5 px-1">
        <div className="h-9 rounded-md" style={{ background: accent, opacity: 0.85 }} />
        {["Overview", "Progress", "History"].map((row) => (
          <div key={row} className="flex items-center gap-1.5 rounded-md bg-white/5 p-1.5">
            <div className="h-3 w-3 rounded-sm" style={{ background: accent }} />
            <span className="text-[7px] text-zinc-300">{row}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-2 bottom-2 flex justify-around rounded-md bg-white/5 py-1.5">
        {["Home", "Stats", "Profile"].map((tab, i) => (
          <span
            key={tab}
            className="text-[6px]"
            style={{ color: i === 0 ? accent : "#71717a" }}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}

function BrowserMockup({
  name,
  title,
  accent,
}: {
  name: string;
  title: string;
  accent: string;
}) {
  return (
    <div className="relative z-10 w-full max-w-[260px] overflow-hidden rounded-lg border border-white/15 bg-black shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-2.5 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 truncate rounded bg-white/5 px-2 py-0.5 text-[7px] text-zinc-500">
          app.{name.toLowerCase()}.com
        </span>
      </div>
      <div className="flex">
        <div className="w-1/3 space-y-1.5 border-r border-white/10 p-2">
          {["Dashboard", "Projects", "Reports", "Settings"].map((nav, i) => (
            <div
              key={nav}
              className="rounded px-1.5 py-1 text-[7px]"
              style={
                i === 0
                  ? { background: accent, color: "#fff" }
                  : { color: "#a1a1aa" }
              }
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-1.5 p-2">
          <p className="text-[8px] font-medium text-white">{title}</p>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-8 rounded" style={{ background: accent, opacity: 0.8 }} />
            <div className="h-8 rounded bg-white/10" />
            <div className="h-8 rounded bg-white/10" />
            <div className="h-8 rounded bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
