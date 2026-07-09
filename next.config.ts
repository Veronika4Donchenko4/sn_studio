import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Content-Security-Policy.
 * - `script-src` allows 'unsafe-eval' only in development (required by the
 *   Next.js fast-refresh runtime). Production stays without it.
 * - `style-src` allows 'unsafe-inline' because Next.js + next/font inject
 *   small inline <style> blocks at runtime.
 * - Fonts are self-hosted by next/font, so font-src is locked to 'self'.
 */
const csp = [
  `default-src 'self'`,
  // Vercel Analytics / Speed Insights loader is served from va.vercel-scripts.com;
  // its beacons post to the same-origin /_vercel/* endpoints.
  `script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com${isDev ? " 'unsafe-eval'" : ""}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: blob:`,
  `font-src 'self'`,
  `connect-src 'self' https://va.vercel-scripts.com`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `frame-src 'none'`,
  `base-uri 'self'`,
  `object-src 'none'`,
  `upgrade-insecure-requests`,
]
  .join("; ")
  .trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Isolate our browsing context from cross-origin openers.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Block legacy Adobe cross-domain policy files.
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Lint is run explicitly via `npm run lint`; keep production builds
  // from being blocked by stylistic rules.
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
