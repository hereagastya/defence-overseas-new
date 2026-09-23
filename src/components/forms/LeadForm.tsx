"use client";

import { Suspense, useId, useState } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import { FORMS, type FieldDef, type FormKind } from "@/content/forms";
import { validateLead, type LeadErrors, type LeadValues } from "@/lib/leads";
import { getWhatsAppLink } from "@/lib/contact";
import { Chevron, Check, ArrowRight, WhatsAppIcon } from "@/components/ui/icons";
import { Stamp } from "@/components/ui/decor";

interface LeadFormProps {
  kind: FormKind;
  /** Pre-selected values, e.g. the course a page is about. */
  defaults?: LeadValues;
  /** Read ?course=&country= from the URL (used on /contact). */
  prefillFromUrl?: boolean;
  /** Override the default heading. */
  title?: string;
  blurb?: string;
  /** Colour of the two ticket notches — match the section behind the form. */
  notch?: "gold" | "forest" | "mist" | "paper" | "maroon";
  className?: string;
}

const NOTCH: Record<NonNullable<LeadFormProps["notch"]>, string> = {
  gold: "bg-gold",
  forest: "bg-forest",
  mist: "bg-mist",
  paper: "bg-paper",
  maroon: "bg-maroon",
};

const URL_KEYS: Record<string, string> = { course: "course", country: "country", who: "applicant" };

export function LeadForm(props: LeadFormProps) {
  return (
    <Suspense fallback={<div className="min-h-[420px] rounded-[28px] bg-white" />}>
      <LeadFormInner {...props} />
    </Suspense>
  );
}

function LeadFormInner({ kind, defaults, prefillFromUrl, title, blurb, notch = "gold", className }: LeadFormProps) {
  const def = FORMS[kind];
  const params = useSearchParams();
  const formId = useId();

  const [values, setValues] = useState<LeadValues>(() => {
    const initial: LeadValues = { ...defaults };
    if (prefillFromUrl) {
      for (const [param, field] of Object.entries(URL_KEYS)) {
        const value = params.get(param);
        const fieldDef = def.fields.find((f) => f.name === field);
        if (value && fieldDef && (!fieldDef.options || fieldDef.options.includes(value))) initial[field] = value;
      }
    }
    return initial;
  });
  const [errors, setErrors] = useState<LeadErrors>({});
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const set = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateLead(kind, values);
    const noConsent = !consent;
    setErrors(found);
    setConsentError(noConsent);
    if (Object.keys(found).length > 0 || noConsent) {
      const first = Object.keys(found)[0];
      if (first) document.getElementById(`${formId}-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    const honeypot = (event.currentTarget.elements.namedItem("company") as HTMLInputElement | null)?.value ?? "";
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, values, consent, company: honeypot, page: window.location.pathname }),
      });
      if (res.status === 422) {
        const data = (await res.json()) as { errors?: LeadErrors };
        setErrors(data.errors ?? {});
        setStatus("idle");
        return;
      }
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className={cn("relative overflow-hidden rounded-[28px] bg-white p-8 text-center text-ink sm:p-12", className)} role="status">
        <div className="pointer-events-none mx-auto h-40 w-40 animate-stamp-in">
          <Stamp tone="maroon" />
        </div>
        <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-forest">{def.successTitle}</h3>
        <p className="mx-auto mt-3 max-w-[38ch] text-[16px] leading-relaxed text-muted">{def.successBody}</p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[15px] font-semibold text-on-forest transition-colors duration-300 hover:bg-forest-mid"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Prefer WhatsApp? Message us
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("relative overflow-hidden rounded-[28px] bg-white text-ink", className)}
      aria-labelledby={`${formId}-title`}
    >
      <div className="px-6 pb-6 pt-8 sm:px-9">
        <h3 id={`${formId}-title`} className="font-display text-[28px] font-bold leading-tight tracking-tight text-forest sm:text-[32px]">
          {title ?? def.title}
        </h3>
        <p className="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-muted">{blurb ?? def.blurb}</p>
      </div>

      {/* Ticket perforation */}
      <div className="relative" aria-hidden="true">
        <div className="border-t-[2px] border-dashed border-line" />
        <span className={cn("absolute -left-4 -top-4 h-8 w-8 rounded-full", NOTCH[notch])} />
        <span className={cn("absolute -right-4 -top-4 h-8 w-8 rounded-full", NOTCH[notch])} />
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-5 px-6 pb-2 pt-7 sm:grid-cols-2 sm:px-9">
        {def.fields.map((field) => (
          <Field
            key={field.name}
            field={field}
            id={`${formId}-${field.name}`}
            value={values[field.name] ?? ""}
            error={errors[field.name]}
            onChange={(v) => set(field.name, v)}
          />
        ))}

        {/* honeypot */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-snug text-muted">
            <span className="relative mt-0.5 grid h-5 w-5 shrink-0 place-items-center">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (e.target.checked) setConsentError(false);
                }}
                className="peer absolute inset-0 h-5 w-5 cursor-pointer appearance-none rounded-md border-[1.5px] border-forest/40 bg-white checked:border-forest checked:bg-forest"
                aria-invalid={consentError}
              />
              <Check className="pointer-events-none relative h-3.5 w-3.5 text-on-forest opacity-0 peer-checked:opacity-100" />
            </span>
            <span>I agree to be contacted by Defence Overseas on call or WhatsApp about my enquiry.</span>
          </label>
          {consentError && (
            <p role="alert" className="mt-2 text-[13px] font-medium text-maroon">
              Please tick this so we can reach you.
            </p>
          )}
        </div>
      </div>

      <div className="px-6 pb-8 pt-4 sm:px-9">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group/btn inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-forest px-8 py-[18px] text-base font-semibold text-on-forest transition-[background-color,transform] duration-300 ease-[var(--ease-out-expo)] hover:bg-forest-mid active:scale-[0.99] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : def.submitLabel}
          {status !== "sending" && (
            <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-1" />
          )}
        </button>
        {status === "failed" && (
          <p role="alert" className="mt-3 text-center text-[14px] font-medium text-maroon">
            That didn&apos;t go through. Please try again, or message us on WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}

const CONTROL =
  "w-full rounded-xl border-[1.5px] border-line bg-paper px-4 text-[16px] text-ink placeholder:text-muted/70 transition-colors duration-200 hover:border-forest/40 focus:border-forest focus:bg-white focus:outline-none";

function Field({
  field,
  id,
  value,
  error,
  onChange,
}: {
  field: FieldDef;
  id: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const describedBy = error ? `${id}-error` : undefined;
  const invalid = error ? "border-maroon bg-white" : "";

  return (
    <div className={cn(field.wide && "sm:col-span-2")}>
      {field.type === "pills" ? (
        <fieldset aria-describedby={describedBy}>
          <legend className="mb-2 text-[13px] font-semibold text-forest">
            {field.label}
            {field.required && <span className="text-maroon"> *</span>}
          </legend>
          <div className="flex flex-wrap gap-2" role="radiogroup">
            {field.options?.map((option, i) => {
              const selected = value === option;
              return (
                <label
                  key={option}
                  className={cn(
                    "cursor-pointer rounded-full border-[1.5px] px-4 py-2.5 text-[14px] font-semibold transition-colors duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-forest",
                    selected ? "border-forest bg-forest text-on-forest" : "border-line bg-paper text-forest hover:border-forest/50"
                  )}
                >
                  <input
                    id={i === 0 ? id : undefined}
                    type="radio"
                    name={field.name}
                    value={option}
                    checked={selected}
                    onChange={() => onChange(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </fieldset>
      ) : (
        <>
          <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-forest">
            {field.label}
            {field.required && <span className="text-maroon"> *</span>}
          </label>
          {field.type === "select" ? (
            <div className="relative">
              <select
                id={id}
                name={field.name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-invalid={!!error}
                aria-describedby={describedBy}
                className={cn(CONTROL, invalid, "h-12 appearance-none pr-10", !value && "text-muted/80")}
              >
                <option value="">Select…</option>
                {field.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              <Chevron className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-forest" />
            </div>
          ) : field.type === "textarea" ? (
            <textarea
              id={id}
              name={field.name}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={field.placeholder}
              rows={4}
              aria-invalid={!!error}
              aria-describedby={describedBy}
              className={cn(CONTROL, invalid, "resize-y py-3")}
            />
          ) : (
            <input
              id={id}
              name={field.name}
              type={field.type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={field.placeholder}
              inputMode={field.type === "tel" ? "numeric" : field.type === "number" ? "numeric" : undefined}
              autoComplete={field.type === "tel" ? "tel" : field.type === "email" ? "email" : field.name === "name" ? "name" : "off"}
              aria-invalid={!!error}
              aria-describedby={describedBy}
              className={cn(CONTROL, invalid, "h-12")}
            />
          )}
        </>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[13px] font-medium text-maroon">
          {error}
        </p>
      )}
    </div>
  );
}
