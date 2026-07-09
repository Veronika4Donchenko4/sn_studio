import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { rateLimit, pruneExpired } from "@/lib/rate-limit";

// This route must run on the Node.js runtime (Resend SDK) and never be cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  mobile: "Mobile app",
  web: "Website / Web app",
  both: "Mobile + Web",
  design: "UI/UX Design",
  other: "Other",
};

// Escape user-supplied values before embedding them in the HTML email body.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(req: Request): string {
  // Prefer `x-real-ip`, which the hosting platform (e.g. Vercel) sets to the
  // real connecting IP. The leftmost `x-forwarded-for` entry is
  // client-controllable — a request can inject a spoofed value that the proxy
  // then appends the real IP after — so it must not be trusted as the primary
  // source for a rate-limit key.
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return "unknown";
}

export async function POST(req: Request) {
  // 1. Rate limit per client IP (basic abuse protection).
  pruneExpired();
  const ip = getClientIp(req);
  const limited = rateLimit(`contact:${ip}`, 5, 60_000);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } },
    );
  }

  // 2. Parse and validate the body. Never trust the client.
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // 3. Honeypot tripped: pretend success so bots get no signal.
  if (data.company) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // 4. Server-only config. Keys are read from the environment, never the client.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    console.error("Contact route misconfigured: missing RESEND env vars.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const projectTypeLabel =
    PROJECT_TYPE_LABELS[data.projectType] ?? data.projectType;
  const budget = data.budget ?? "Not specified";

  const html = `
    <h2>New project inquiry: Niksar</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Project type:</strong> ${escapeHtml(projectTypeLabel)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
  `.trim();

  const text = [
    "New project inquiry: Niksar",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Project type: ${projectTypeLabel}`,
    `Budget: ${budget}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New inquiry from ${data.name}`,
      replyTo: data.email,
      html,
      text,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

// Reject other methods explicitly.
export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
