"use client";

import { useEffect, useRef } from "react";

// Base (unlit) tile color and the muted violet-indigo crest color (#6d5cc4).
const BASE = { r: 18, g: 18, b: 18 };
const CREST = { r: 109, g: 92, b: 196 };

const TILE = 38; // rounded square size in CSS px
const GAP = 6; // gap between tiles
const RADIUS = 9; // corner radius

export default function ScalesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    const step = TILE + GAP;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / step) + 1;
      rows = Math.ceil(height / step) + 1;
    };

    const roundRect = (x: number, y: number) => {
      ctx.beginPath();
      ctx.moveTo(x + RADIUS, y);
      ctx.arcTo(x + TILE, y, x + TILE, y + TILE, RADIUS);
      ctx.arcTo(x + TILE, y + TILE, x, y + TILE, RADIUS);
      ctx.arcTo(x, y + TILE, x, y, RADIUS);
      ctx.arcTo(x, y, x + TILE, y, RADIUS);
      ctx.closePath();
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      // Tile grid with diagonal wave.
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const phase = i * 0.55 + j * 0.75 - t;
          const wave = (Math.sin(phase) + 1) / 2; // 0..1
          const glow = Math.pow(wave, 2.4); // subtle: only the crest lights up

          const r = Math.round(BASE.r + (CREST.r - BASE.r) * glow);
          const g = Math.round(BASE.g + (CREST.g - BASE.g) * glow);
          const b = Math.round(BASE.b + (CREST.b - BASE.b) * glow);

          const x = i * step;
          const y = j * step;
          roundRect(x, y);
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fill();

          // Thin muted-lavender edge on lit tiles only.
          if (glow > 0.04) {
            ctx.strokeStyle = `rgba(157,142,201,${glow})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // One large soft radial sheen drawn over the whole grid, drifting slowly.
      const sheenR = width * 0.34;
      const cx = width * 0.5 + Math.sin(t * 0.4) * width * 0.22;
      const cy = height * 0.5 + Math.cos(t * 0.32) * height * 0.22;
      const sheen = ctx.createRadialGradient(cx, cy, 0, cx, cy, sheenR);
      sheen.addColorStop(0, "rgba(255,255,255,0.4)");
      sheen.addColorStop(0.45, "rgba(109,92,196,0.15)");
      sheen.addColorStop(1, "rgba(109,92,196,0)");
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = sheen;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
    };

    let start = 0;
    const loop = (now: number) => {
      if (!start) start = now;
      draw((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };

    resize();

    if (reduceMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      if (reduceMotion) draw(0);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const maskGradient =
    "linear-gradient(to right, transparent 0%, transparent 45%, rgba(0,0,0,0.5) 70%, #000 100%)";

  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] md:block"
      aria-hidden
      style={{
        maskImage: maskGradient,
        WebkitMaskImage: maskGradient,
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Extra dark overlay to deepen the fade toward the text (left). */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(to right, #000 0%, rgba(0,0,0,0.6) 35%, transparent 70%)",
        }}
      />
    </div>
  );
}
