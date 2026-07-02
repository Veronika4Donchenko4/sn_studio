import { TECH_STACK } from "@/lib/content";

export default function TechStrip() {
  // Duplicate the list so the marquee can loop seamlessly (translateX -50%).
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative overflow-hidden border-y border-white/10 py-8">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent"
        aria-hidden
      />
      <ul className="flex w-max animate-marquee items-center gap-12">
        {items.map((tech, i) => (
          <li
            key={`${tech}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap text-sm text-zinc-500"
          >
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
