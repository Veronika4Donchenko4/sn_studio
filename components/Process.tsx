"use client";

import { useT } from "@/lib/i18n";
import { STEP_IDS } from "@/lib/content";
import FadeIn from "./ui/FadeIn";

export default function Process() {
  const t = useT();

  return (
    <section id="process" className="container-content py-28 sm:py-36">
      <FadeIn>
        <p className="eyebrow">{t.process.label}</p>
        <h2 className="display mt-4 text-4xl sm:text-5xl">{t.process.title}</h2>
        <p className="mt-5 max-w-xl text-zinc-400">{t.process.desc}</p>
      </FadeIn>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEP_IDS.map((id, i) => {
          const step = t.process.steps[id];
          return (
            <FadeIn
              key={id}
              delay={i * 80}
              className="relative rounded-2xl border border-white/10 p-7 transition-colors hover:border-white/25"
            >
              <span className="display absolute right-5 top-4 text-4xl text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-serif text-xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {step.desc}
              </p>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
