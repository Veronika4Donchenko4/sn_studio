import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        surface: "#0a0a0a",
        "surface-2": "#101010",
        // Brand: violet-indigo. Mirrors the --nk-* CSS vars in globals.css.
        brand: {
          DEFAULT: "#6366f1",
          ring: "#6366f1",
          comet: "#a78bfa",
          "comet-bright": "#ede9fe",
          glow: "#7c3aed",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument)", "Newsreader", "Georgia", "serif"],
        display: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: [
          "var(--font-geist)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        // Soft glow shimmer for the floating Telegram button.
        shimmer: {
          "0%,100%": { opacity: "0.4", transform: "scale(0.92)" },
          "50%": { opacity: "0.75", transform: "scale(1.12)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "pulse-slow": "pulse 2.4s ease-in-out infinite",
        shimmer: "shimmer 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
