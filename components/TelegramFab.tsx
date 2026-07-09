/**
 * Floating Telegram contact button, fixed bottom-right on every page.
 * Pure CSS glow shimmer (disabled under prefers-reduced-motion via the
 * `motion-reduce:` variant). No client JS required.
 */
export default function TelegramFab() {
  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Soft violet glow halo behind the button. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-full bg-[radial-gradient(circle,rgba(139,92,196,0.55),transparent_70%)] blur-lg animate-shimmer motion-reduce:animate-none"
      />
      <a
        href="https://t.me/Nika_dns"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on Telegram"
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#9d8ec9]/25 text-white shadow-[0_8px_24px_rgba(109,92,196,0.3)] transition-[transform,box-shadow] duration-300 ease-out hover:scale-110 hover:shadow-[0_12px_32px_rgba(139,92,196,0.55)]"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(139,92,196,0.4), #0a0a0d 70%)",
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
        </svg>
      </a>
    </div>
  );
}
