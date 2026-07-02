"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "@/lib/i18n";
import type { Project } from "@/lib/content";
import Footer from "./Footer";
import FadeIn from "./ui/FadeIn";
import ProjectMockup from "./ProjectMockup";

export default function CaseStudy({ project }: { project: Project }) {
  const t = useT();
  const c = t.caseStudy;
  const subtitle = t.projects.items[project.id];
  const typeLabel =
    project.type === "mobile" ? t.projects.tabMobile : t.projects.tabWeb;

  const solutions = [
    { title: c.solution1Title, body: c.solution1Body },
    { title: c.solution2Title, body: c.solution2Body },
    { title: c.solution3Title, body: c.solution3Body },
  ];
  const results = [c.result1, c.result2, c.result3];

  return (
    <>
      {/* Slim top bar with brand + back link */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 py-3 backdrop-blur-xl">
        <div className="container-content flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <Image
              src="/icon-192.png"
              alt="Niksar"
              width={26}
              height={26}
              className="rounded-md"
            />
            <span className="font-serif text-lg tracking-tight">NIKSAR</span>
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            ← {c.back}
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
        <div className="glow pointer-events-none absolute inset-0" aria-hidden />

        {/* Hero */}
        <section className="container-content relative">
          <FadeIn>
            <p className="eyebrow">
              {c.eyebrow} · {typeLabel}
            </p>
            <h1 className="display mt-5 text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              {subtitle}
            </p>
          </FadeIn>

          {/* Cover mockup */}
          <FadeIn delay={80}>
            <div className="nk-card mt-12">
              <div className="nk-card-inner relative aspect-[16/9] overflow-hidden">
                <ProjectMockup project={project} />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Body: content + sticky quick-facts sidebar */}
        <section className="container-content relative mt-20 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="order-2 max-w-2xl lg:order-1">
            {/* The challenge */}
            <FadeIn as="div">
              <h2 className="display text-3xl sm:text-4xl">{c.challengeTitle}</h2>
              <p className="mt-5 leading-relaxed text-zinc-400">
                {c.challengeBody}
              </p>
            </FadeIn>

            {/* Key solutions */}
            <FadeIn as="div" className="mt-16">
              <h2 className="display text-3xl sm:text-4xl">
                {c.solutionsTitle}
              </h2>
              <p className="mt-5 leading-relaxed text-zinc-400">
                {c.solutionsIntro}
              </p>

              <div className="mt-10 space-y-14">
                {solutions.map((s, i) => (
                  <div key={s.title}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif text-2xl text-violet-300/70">
                        0{i + 1}
                      </span>
                      <h3 className="font-serif text-xl text-white">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-3 leading-relaxed text-zinc-400">
                      {s.body}
                    </p>
                    {/* Image / mockup slot */}
                    <div className="nk-card mt-6">
                      <div className="nk-card-inner relative aspect-[16/10] overflow-hidden">
                        <ProjectMockup project={project} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Result */}
            <FadeIn as="div" className="mt-16">
              <h2 className="display text-3xl sm:text-4xl">{c.resultTitle}</h2>
              <p className="mt-5 leading-relaxed text-zinc-400">
                {c.resultBody}
              </p>
              <ul className="mt-8 space-y-3">
                {results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-zinc-300">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                      aria-hidden
                    />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Quick facts */}
          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="eyebrow">{c.factsTitle}</p>
                <dl className="mt-6 space-y-5">
                  <Fact label={c.timeline} value={c.timelineValue} />
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-zinc-500">
                      {c.techStack}
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <Fact label={c.projectType} value={typeLabel} />
                  <Fact label={c.whatWeDid} value={c.whatWeDidValue} />
                </dl>
              </div>
            </div>
          </aside>
        </section>

        {/* CTA */}
        <section className="container-content relative mt-24">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-14 text-center sm:px-14">
              <h2 className="display text-3xl sm:text-4xl md:text-5xl">
                {c.ctaTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-zinc-400">
                {c.ctaBody}
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                {c.ctaButton}
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-zinc-500">{label}</dt>
      <dd className="mt-1 text-sm text-zinc-300">{value}</dd>
    </div>
  );
}
