"use client";

import { useT } from "@/lib/i18n";
import FadeIn from "./ui/FadeIn";

export default function Rescue() {
  const t = useT();
  const points = [t.rescue.point1, t.rescue.point2, t.rescue.point3];

  return (
    <section id="rescue" className="container-content py-16 sm:py-20">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-white/[0.02] p-8 sm:p-12">
          {/* Accent glow to make the block feel highlighted. */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"
            aria-hidden
          />

          <div className="relative">
            <p className="eyebrow">{t.rescue.label}</p>
            <h2 className="display mt-4 max-w-3xl text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
              {t.rescue.title}
            </h2>
            <p className="mt-5 max-w-xl text-zinc-400">{t.rescue.lead}</p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/30 bg-violet-400/10 text-violet-200"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3.5 w-3.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              {t.rescue.cta}
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
