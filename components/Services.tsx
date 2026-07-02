"use client";

import { useT } from "@/lib/i18n";
import { SERVICE_IDS } from "@/lib/content";
import FadeIn from "./ui/FadeIn";

export default function Services() {
  const t = useT();

  return (
    <section id="services" className="container-content py-28 sm:py-36">
      <FadeIn>
        <p className="eyebrow">{t.services.label}</p>
        <h2 className="display mt-4 text-4xl sm:text-5xl">{t.services.title}</h2>
        <p className="mt-5 max-w-xl text-zinc-400">{t.services.desc}</p>
      </FadeIn>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_IDS.map((id, i) => {
          const item = t.services.items[id];
          return (
            <FadeIn key={id} delay={(i % 3) * 80} className="h-full">
              <div className="nk-card h-full">
                <div className="nk-card-inner p-8">
                  <span className="font-mono text-xs text-zinc-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
