"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-white/10">
      <div className="container-content flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Image
            src="/icon-192.png"
            alt="Niksar"
            width={22}
            height={22}
            className="rounded opacity-70"
          />
          <p className="text-sm text-zinc-500">{t.footer.text}</p>
        </div>
        <nav className="flex gap-6">
          {["GitHub", "LinkedIn", "Telegram"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
