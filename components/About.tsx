"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import FadeIn from "./ui/FadeIn";

export default function About() {
  const t = useT();

  return (
    <section id="about" className="container-content py-28 sm:py-36">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn className="order-2 lg:order-1">
          <p className="eyebrow">{t.about.label}</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            {t.about.titleLine1}
            <br />
            {t.about.titleLine2}
          </h2>
          <div className="mt-6 space-y-4 text-zinc-400">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <div className="mt-8 flex gap-8 border-t border-white/10 pt-8">
            {[
              { initial: "N", name: "Nika", role: t.about.founder1Role },
              { initial: "S", name: "Sarkhan", role: t.about.founder2Role },
            ].map((f) => (
              <div key={f.name} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 font-serif text-sm text-white">
                  {f.initial}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{f.name}</p>
                  <p className="text-xs text-zinc-500">{f.role}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="order-1 lg:order-2">
          <div className="nk-card mx-auto w-full max-w-xs lg:ml-auto lg:mr-0">
            <div className="nk-card-inner relative aspect-[4/5]">
              <Image
                src="/team-photo.png"
                alt="Nika & Sarkhan, co-founders of Niksar"
                fill
                sizes="320px"
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-emerald-400" />
                {t.about.badge}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
