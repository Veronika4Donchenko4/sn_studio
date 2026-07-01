"use client";

import { useT } from "@/lib/i18n";
import { STATS } from "@/lib/content";
import Counter from "./ui/Counter";

export default function Hero() {
  const t = useT();

  return (
    <section className="relative overflow-hidden pb-24 pt-40 sm:pt-48">
      {/* Subtle gradient glow accent */}
      <div className="glow pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />

      <div className="container-content relative">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">
          <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-emerald-400" />
          {t.hero.badge}
        </div>

        <h1 className="display max-w-4xl text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
          {t.hero.titleLead}{" "}
          <em className="font-serif not-italic text-zinc-500">{t.hero.titleAccent}</em>{" "}
          {t.hero.titleTrail}
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">
          {t.hero.desc}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            {t.hero.cta2}
          </a>
        </div>

        <dl className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-10">
          {STATS.map((s) => (
            <div key={s.key}>
              <dt className="display text-4xl text-white sm:text-5xl">
                <Counter target={s.target} />
              </dt>
              <dd className="mt-2 text-sm text-zinc-500">{t.hero[s.key]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
