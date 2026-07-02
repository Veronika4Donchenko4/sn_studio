"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/lib/i18n";
import { CONTACT_DETAILS } from "@/lib/content";
import FadeIn from "./ui/FadeIn";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const t = useT();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
      company: String(fd.get("company") ?? ""), // honeypot
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-white/30";
  const labelClass =
    "mb-2 block text-xs uppercase tracking-wide text-zinc-500";

  return (
    <section id="contact" className="container-content py-28 sm:py-36">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <p className="eyebrow">{t.contact.label}</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-5 max-w-md text-zinc-400">{t.contact.desc}</p>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="text-xs uppercase tracking-wide text-zinc-500">
                {t.contact.emailLabel}
              </dt>
              <dd className="mt-1 text-white">
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:underline">
                  {CONTACT_DETAILS.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-zinc-500">
                {t.contact.locationLabel}
              </dt>
              <dd className="mt-1 text-white">{t.contact.locationValue}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-zinc-500">
                {t.contact.telegramLabel}
              </dt>
              <dd className="mt-1 text-white">{CONTACT_DETAILS.telegram}</dd>
            </div>
          </dl>
        </FadeIn>

        <FadeIn>
          <div className="nk-card">
          <form
            onSubmit={handleSubmit}
            className="nk-card-inner relative p-6 sm:p-8"
            noValidate
          >
            {/* Honeypot: hidden from users, must stay empty. */}
            <div className="absolute left-[-9999px]" aria-hidden>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  placeholder={t.contact.formNamePh}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  {t.contact.formEmail}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  placeholder={t.contact.formEmailPh}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="projectType" className={labelClass}>
                {t.contact.formProjectType}
              </label>
              <select id="projectType" name="projectType" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  {t.contact.formProjectTypePh}
                </option>
                <option value="mobile">{t.contact.typeMobile}</option>
                <option value="web">{t.contact.typeWeb}</option>
                <option value="both">{t.contact.typeBoth}</option>
                <option value="design">{t.contact.typeDesign}</option>
                <option value="other">{t.contact.typeOther}</option>
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="budget" className={labelClass}>
                {t.contact.formBudget}
              </label>
              <select id="budget" name="budget" defaultValue="" className={fieldClass}>
                <option value="">{t.contact.formBudgetPh}</option>
                <option value="<2k">{t.contact.budget1}</option>
                <option value="2-5k">$2,000 – $5,000</option>
                <option value="5-10k">$5,000 – $10,000</option>
                <option value="10k+">$10,000+</option>
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className={labelClass}>
                {t.contact.formMessage}
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder={t.contact.formMessagePh}
                className={`${fieldClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? t.contact.sending : t.contact.formSubmit}
            </button>

            <p
              aria-live="polite"
              className={`mt-4 min-h-[1.25rem] text-sm ${
                status === "success"
                  ? "text-emerald-400"
                  : status === "error"
                    ? "text-red-400"
                    : "text-transparent"
              }`}
            >
              {status === "success"
                ? t.contact.success
                : status === "error"
                  ? t.contact.error
                  : "placeholder"}
            </p>
          </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
