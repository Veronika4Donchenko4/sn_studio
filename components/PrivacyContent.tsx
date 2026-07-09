"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "@/lib/i18n";
import { CONTACT_DETAILS } from "@/lib/content";
import Footer from "./Footer";

export default function PrivacyContent() {
  const t = useT();
  const p = t.privacy;

  const sections = [
    { title: p.analyticsTitle, body: p.analyticsBody },
    { title: p.contactTitle, body: p.contactBody },
    { title: p.cookiesTitle, body: p.cookiesBody },
    { title: p.questionsTitle, body: p.questionsBody },
  ];

  return (
    <>
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
            href="/"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            ← {p.back}
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
        <div className="glow pointer-events-none absolute inset-0" aria-hidden />
        <section className="container-content relative">
          <h1 className="display text-4xl sm:text-5xl md:text-6xl">{p.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {p.intro}
          </p>

          <div className="mt-14 max-w-2xl space-y-10 border-t border-white/10 pt-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-serif text-xl text-white">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-zinc-400">{s.body}</p>
              </div>
            ))}

            <p className="text-zinc-400">
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="text-white underline underline-offset-4 hover:opacity-80"
              >
                {CONTACT_DETAILS.email}
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
