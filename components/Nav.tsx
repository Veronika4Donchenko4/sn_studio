"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useI18n, LOCALES, LOCALE_LABELS } from "@/lib/i18n";

const SECTIONS = ["services", "projects", "about", "process"] as const;

export default function Nav() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLabel: Record<(typeof SECTIONS)[number], string> = {
    services: t.nav.services,
    projects: t.nav.projects,
    about: t.nav.about,
    process: t.nav.process,
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="container-content flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 text-white">
          <Image
            src="/icon-192.png"
            alt="Niksar"
            width={30}
            height={30}
            className="rounded-md"
            priority
          />
          <span className="font-serif text-xl tracking-tight">NIKSAR</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {navLabel[s]}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            {t.nav.contact}
          </a>
          <LangSwitcher locale={locale} setLocale={setLocale} />
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-px w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="container-content flex flex-col gap-5 py-8">
            {SECTIONS.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="text-lg text-zinc-300 transition-colors hover:text-white"
              >
                {navLabel[s]}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-fit rounded-full bg-white px-5 py-2 text-sm font-medium text-black"
            >
              {t.nav.contact}
            </a>
            <div className="pt-2">
              <LangSwitcher locale={locale} setLocale={setLocale} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LangSwitcher({
  locale,
  setLocale,
}: {
  locale: string;
  setLocale: (l: (typeof LOCALES)[number]) => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 p-1">
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-2.5 py-1 text-xs tracking-wide transition-colors ${
            locale === l ? "bg-white text-black" : "text-zinc-400 hover:text-white"
          }`}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
