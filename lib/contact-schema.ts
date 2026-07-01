import { z } from "zod";

/**
 * Shared contact-form schema. Used both for typing the client form and for
 * authoritative server-side validation in the API route.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(200),
  projectType: z.enum(["mobile", "web", "both", "design", "other"]),
  // Budget is optional; empty string is treated as "not provided".
  budget: z
    .enum(["<2k", "2-5k", "5-10k", "10k+", ""])
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  message: z.string().trim().min(10, "Message is too short").max(5000),
  // Honeypot — must stay empty. Bots tend to fill every field.
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
