import type { ZodIssue } from "zod";

export const CONTACT_FORM_FIELDS = [
  "name",
  "email",
  "projectType",
  "budget",
  "message",
] as const;

export type ContactFormField = (typeof CONTACT_FORM_FIELDS)[number];

export type ContactValidationCode =
  | "required"
  | "too_long"
  | "too_short"
  | "invalid_email"
  | "invalid_option";

export type ContactFieldErrors = Partial<
  Record<ContactFormField, ContactValidationCode[]>
>;

export type ContactValidationResponse = {
  error: "validation_failed";
  fieldErrors: ContactFieldErrors;
};

const FIELD_SET = new Set<string>(CONTACT_FORM_FIELDS);

function isContactField(value: unknown): value is ContactFormField {
  return typeof value === "string" && FIELD_SET.has(value);
}

function pushCode(
  errors: ContactFieldErrors,
  field: ContactFormField,
  code: ContactValidationCode,
) {
  const existing = errors[field] ?? [];
  if (!existing.includes(code)) {
    errors[field] = [...existing, code];
  }
}

/** Map authoritative Zod issues to stable codes for i18n lookup. */
export function mapContactZodIssues(issues: ZodIssue[]): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  for (const issue of issues) {
    const field = issue.path[0];
    if (!isContactField(field)) continue;

    switch (issue.code) {
      case "too_small":
        if (issue.type === "string" && issue.minimum === 1) {
          pushCode(errors, field, "required");
        } else if (issue.type === "string") {
          pushCode(errors, field, "too_short");
        }
        break;
      case "too_big":
        pushCode(errors, field, "too_long");
        break;
      case "invalid_string":
        if (issue.validation === "email") {
          pushCode(errors, field, "invalid_email");
        }
        break;
      case "invalid_type":
        if (issue.received === "undefined" || issue.received === "null") {
          pushCode(
            errors,
            field,
            field === "projectType" || field === "budget"
              ? "invalid_option"
              : "required",
          );
        }
        break;
      case "invalid_enum_value":
        pushCode(errors, field, "invalid_option");
        break;
    }
  }

  return errors;
}
