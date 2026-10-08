# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: students roughly 17–25 who want to study abroad and are at the exploration/decision
stage — choosing a country, course, and university. Secondary: their parents, who are
evaluating whether the consultancy can be trusted with a major decision. A third audience,
served by its own page and lead form rather than folded into the first two: ex-servicemen,
Agniveers finishing their tenure, and their families, seeking jobs or higher education abroad
after service. Copy and design must read clearly across all of them.

## Product Purpose

Defence Overseas is an overseas education consultancy. The site (now a full multi-page build:
home, study-abroad hub + five degree pages, Learn German / Toss International, Ex-Servicemen &
Agniveers, About, Contact) exists to turn an interested student, parent, or veteran into a
WhatsApp or phone conversation, or a submitted lead form, with the consultancy team.

## Positioning

The differentiator is confirmed to be the guidance itself, not a specialization: staying with
the student across the whole journey (explore → choose → apply → admission → visa preparation
→ departure) rather than the process being confusing or handed off between disconnected
steps. No specific country/university specialization, exam-prep niche, or individual team
credential is claimed as the differentiator.

## Operating Context

- Contact channels: WhatsApp, phone call, and seven lead-capture forms (counselling, brochure,
  eligibility, German demo class, call-back, the ex-servicemen roadmap questionnaire, general
  contact), each tagged by `kind` so the team knows which service a lead is for.
- Real contact details are live: phone/WhatsApp `+91 85918 79668`, email
  `defenceoverseas@gmail.com`, office on Neco Garden Road, Viman Nagar, Pune 411014 — all set in
  `src/lib/contact.ts` and `src/content/site.ts`.
- No payment flow on this site, by explicit instruction — Razorpay collection (used after an
  offline quote, per the original business briefing) is out of scope here.
- Deliberately out of scope: student portal, dashboard, blog/CMS, university database,
  authentication.

## Capabilities and Constraints

- Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4; deploy target is Vercel.
- Leads POST to `/api/leads`, which validates, logs, and — when `CRM_WEBHOOK_URL` is set —
  forwards to the client's CRM via a generic webhook (works with Zoho, HubSpot, Pipedrive,
  monday.com, or a Zapier/Make catch-hook in front of anything else). Which CRM the client will
  actually use is not yet known.
- Business scale figures (`CLAIMS` in `src/content/site.ts`: years/students/universities/
  countries) are confirmed by the client to be **provisional placeholder numbers** ("imaginary
  for now" — an early-stage startup without audited figures), not verified facts. A specific
  "success rate" claim was deliberately left out regardless, since that class of claim is what
  advertising-standards bodies and unhappy customers actually check. This is a live, narrow
  exception to the "never fabricate" principle below — scoped to those four figures only, made
  explicitly by the client, and worth revisiting once real numbers exist.

## Brand Commitments

- Name: "Defence Overseas."
- A real designed logo exists at `public/images/logo.webp`: a heraldic crest/seal mark — deep
  green ground, ornate gold border with flourished corners, a gold globe/compass-rose emblem
  (central star-topped spike, crossed arrow points, maroon accent), "DEFENCE OVERSEAS" set in
  serif gold capitals, tagline "STUDY ABROAD CONSULTANCY."
- The site's visual system was rebuilt to match this crest: forest green / gold / maroon
  palette, Bricolage Grotesque + Figtree type, ticket-perforated forms, arched photo frames,
  and a passport-stamp motif. No open gap between the logo and the shipped design.
- Voice: clear, confident, human, aspirational, concise, professional. Avoid generic buzzwords
  ("world-class solutions," etc.) and avoid reading as a cheap template, a cluttered page, or a
  SaaS dashboard.

## Evidence on Hand

- Still pending from the client, all confirmed as "coming soon" rather than declined: real
  testimonials (currently placeholder quotes on the home page) and the Toss International
  sub-brand's own logo (using the Defence Overseas crest until then).
- The About page's founder section now carries real, finished copy (written by the model,
  explicitly invited to by the client) about the motivation behind the business — grounded only
  in confirmed facts (an officer founded it; "extend the spirit of service beyond uniform"). It
  deliberately does not name the founder, state a rank, unit, or years of service, or invent any
  specific personal history — a defence-service-record claim about a real, identifiable person
  is a materially different and higher-stakes kind of fabrication than the provisional business
  figures, especially given the ex-servicemen audience most likely to notice if it were invented.
  A real name, photo, and personal story from the founder would still improve this section and
  can replace this copy whenever supplied.
- Business scale figures are explicitly provisional placeholders — see Capabilities and
  Constraints.
- Real photography: destination and campus photos under `public/images/` are Creative
  Commons–licensed (credited in `public/images/CREDITS.json`), standing in until the business
  supplies its own.
- Real logo asset: `public/images/logo.webp`, `logo-crest.webp`, `logo-emblem.webp` (see Brand
  Commitments).
- Social: Instagram and YouTube confirmed as the real channels (no Facebook); actual profile
  URLs not yet supplied — placeholders in `src/content/site.ts`.

## Product Principles

1. Never fabricate — no guarantees, partnerships, testimonials, or success-rate claims without
   real facts behind them. The client has made one narrow, explicit exception for four
   round-number scale figures while the business is pre-launch (see Capabilities and
   Constraints) — that exception doesn't extend to any other claim.
2. The entire value proposition is guidance across the whole journey; every surface should
   reinforce "you're not doing this alone," not stack unverifiable claims.
3. WhatsApp, phone, and the seven lead forms are the conversion paths; every surface should
   make at least one of them fast to reach, especially on mobile.
4. Build for extension, not permanence — components, content, and config stay reusable (shared
   `PageHero`/`LeadForm`/service templates, content kept out of markup) so new service lines or
   pages don't require one-off rewrites.
5. Speak to a 17–25-year-old student and a skeptical parent in the same sentence — clear and
   confident, not hypey.
