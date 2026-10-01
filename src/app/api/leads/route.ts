import { FORMS, type FormKind } from "@/content/forms";
import { normalisePhone, validateLead, type LeadValues } from "@/lib/leads";

type Lead = { kind: FormKind; values: LeadValues; page: string; receivedAt: string };

/**
 * Forwards every lead to a CRM via a plain webhook, so it works with
 * whichever CRM the team ends up using — nearly all of them (Zoho, HubSpot,
 * Pipedrive, monday.com, or a Zapier/Make "catch hook" in front of anything
 * else) accept a generic incoming webhook. Configure it with two env vars:
 *
 *   CRM_WEBHOOK_URL   — required to enable forwarding; unset = no-op.
 *   CRM_WEBHOOK_TOKEN — optional, sent as `Authorization: Bearer <token>`.
 *
 * A slow or failing CRM must never block the visitor's submission, so this
 * is awaited with a short timeout and any failure is only logged — the lead
 * is always accepted for the visitor once their own input is valid.
 */
async function forwardToCrm(lead: Lead): Promise<void> {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CRM_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.CRM_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify({ source: "defenceoverseas.com", ...lead, fields: lead.values }),
      signal: controller.signal,
    });
    if (res.ok) {
      console.info("[lead] CRM webhook delivered", res.status);
    } else {
      console.error("[lead] CRM webhook rejected the lead", res.status, await res.text().catch(() => ""));
    }
  } catch (err) {
    console.error("[lead] CRM webhook failed", err);
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Lead intake. Validates the submission, forwards it to the CRM webhook when
 * configured, and always logs it server-side as a fallback record.
 */
async function storeLead(lead: Lead) {
  console.info("[lead]", JSON.stringify(lead));
  await forwardToCrm(lead);
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
