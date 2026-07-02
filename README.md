# Niksar

Marketing site for Niksar — a mobile & web product studio. Built with
Next.js (App Router) + TypeScript + Tailwind CSS, with a secure server-side
contact form powered by [Resend](https://resend.com).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** for styling (resend.com-inspired: pure black, serif display
  headings, muted gray body, thin low-opacity borders, subtle gradient glow)
- **Resend** for transactional email via a server-only API route
- **zod** for request validation
- EN / UK / RU language switching (client-side context, persisted to
  `localStorage`)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev                  # http://localhost:3000
```

## Environment variables

These are **server-only** and must never be exposed to the client (no
`NEXT_PUBLIC_` prefix):

| Variable         | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `RESEND_API_KEY` | API key from https://resend.com/api-keys                           |
| `CONTACT_TO`     | Inbox that receives contact-form submissions                       |
| `CONTACT_FROM`   | Verified sender, e.g. `Niksar <hello@yourdomain.com>`              |

Until you verify a domain in Resend you can use the sandbox sender
`onboarding@resend.dev`.

## Security

- The Resend API key is read only inside `app/api/contact/route.ts` and is
  never bundled into client code.
- The contact form posts to an internal API route (not a third-party form).
- Input is validated with zod; there's a honeypot field and a simple
  per-IP rate limit.
- Security headers (CSP, `X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`, HSTS) are set in `next.config.ts`.

## Project structure

```
app/                 App Router: layout, page, globals, /api/contact route
components/           Section + UI components
lib/i18n/             Typed EN/UK/RU dictionaries + LanguageProvider
lib/content.ts        Language-agnostic site data (projects, services, steps)
lib/contact-schema.ts Shared zod schema for the contact form
lib/rate-limit.ts     In-memory per-IP rate limiter
```

## Notes

- All project case mockups render an **English-only UI** by design, regardless
  of the active site language.
- The in-memory rate limiter is per-instance. For multi-instance deploys, swap
  it for a shared store (e.g. Upstash Redis).
