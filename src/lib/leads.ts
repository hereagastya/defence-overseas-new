import { FORMS, type FormKind } from "@/content/forms";

export type LeadValues = Record<string, string>;
export type LeadErrors = Record<string, string>;

/** Normalises an Indian mobile number to 10 digits, or returns null if it isn't one. */
export function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/[\s\-().]/g, "").replace(/^(\+?91|0)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the form (instant feedback) and the API route (the real check). */
export function validateLead(kind: FormKind, values: LeadValues): LeadErrors {
  const errors: LeadErrors = {};
  for (const field of FORMS[kind].fields) {
    const value = (values[field.name] ?? "").trim();
    if (field.required && !value) {
      errors[field.name] = field.type === "pills" ? "Please choose one." : `${field.label} is required.`;
      continue;
    }
    if (!value) continue;
    if (field.type === "tel" && !normalisePhone(value)) errors[field.name] = "Enter a 10-digit Indian mobile number.";
    if (field.type === "email" && !EMAIL_RE.test(value)) errors[field.name] = "That email doesn't look right.";
    if (field.options && field.type !== "text" && !field.options.includes(value)) errors[field.name] = "Please pick from the list.";
    if (value.length > 2000) errors[field.name] = "That's too long.";
  }
  return errors;
}
