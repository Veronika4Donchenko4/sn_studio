"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-white/10">
      <div className="container-content flex flex-col items-center justify-between gap-8 py-10 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
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
          <Link
            href="/privacy"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            {t.footer.privacy}
          </Link>
        </div>

        {/* WhatsApp: QR only. The raw number is never shown as text or in a link. */}
        <div className="flex items-center gap-3">
          <Image
            src="/whatsup.jpg"
            alt={t.footer.whatsappScan}
            width={56}
            height={56}
            className="shrink-0 rounded-lg border border-white/10 bg-white p-1"
          />
          <span className="max-w-[8rem] text-xs leading-relaxed text-zinc-500">
            {t.footer.whatsappScan}
          </span>
        </div>
      </div>
    </footer>
  );
}
