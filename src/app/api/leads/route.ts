import { FORMS, type FormKind } from "@/content/forms";
import { normalisePhone, validateLead, type LeadValues } from "@/lib/leads";

/**
 * Lead intake. Validates the submission and hands it to `storeLead`.
 *
 * TODO(backend): `storeLead` currently only logs. Point it at the real intake
 * system (database table, CRM webhook, or email) — every lead arrives tagged
 * with its `kind`, so the team knows which service it came from.
 */
async function storeLead(lead: { kind: FormKind; values: LeadValues; page: string; receivedAt: string }) {
  console.info("[lead]", JSON.stringify(lead));
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { kind, values, page, consent, company } = (body ?? {}) as {
    kind?: string;
    values?: LeadValues;
    page?: string;
    consent?: boolean;
    company?: string;
  };

  // Honeypot: real visitors never fill this in. Pretend success so bots move on.
  if (company) return Response.json({ ok: true });

  if (!kind || !(kind in FORMS) || !values || typeof values !== "object") {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  if (consent !== true) {
    return Response.json({ ok: false, error: "Consent is required." }, { status: 400 });
  }

  const formKind = kind as FormKind;
  const clean: LeadValues = {};
  for (const field of FORMS[formKind].fields) {
    const raw = values[field.name];
    if (typeof raw === "string") clean[field.name] = raw.trim().slice(0, 2000);
  }

  const errors = validateLead(formKind, clean);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }
  if (clean.phone) clean.phone = normalisePhone(clean.phone) ?? clean.phone;

  await storeLead({
    kind: formKind,
    values: clean,
    page: typeof page === "string" ? page.slice(0, 200) : "",
    receivedAt: new Date().toISOString(),
  });

  return Response.json({ ok: true });
}
