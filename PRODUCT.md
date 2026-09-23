# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: students roughly 17–25 who want to study abroad and are at the exploration/decision
stage — choosing a country, course, and university. Secondary: their parents, who are
evaluating whether the consultancy can be trusted with a major decision. Copy and design must
read clearly to both in the same sentence.

## Product Purpose

Defence Overseas is an overseas education consultancy. This surface (currently a single
landing page) exists to turn an interested student or parent into a WhatsApp or phone
conversation with the consultancy team. Success is a visitor understanding what Defence
Overseas does within a few seconds and contacting them — there is no lead form, portal, or
self-serve flow.

## Positioning

The differentiator is confirmed to be the guidance itself, not a specialization: staying with
the student across the whole journey (explore → choose → apply → admission → visa preparation
→ departure) rather than the process being confusing or handed off between disconnected
steps. No specific country/university specialization, exam-prep niche, or individual team
credential is claimed as the differentiator.

## Operating Context

- The only contact channels are WhatsApp and a phone call — no contact form, no chat widget,
  no email capture.
- This landing page is explicitly an interim artifact: a fast, polished single page while a
  "much larger, complete Defence Overseas website" is built separately later. It is
  structured (componentized Next.js, content kept separate from presentation) so it can grow
  into that fuller site rather than being thrown away.
- Deliberately out of scope for this surface: student portal, dashboard, blog/CMS, university
  database, authentication.

## Capabilities and Constraints

- Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4; deploy target is Vercel. This
  is an existing, already-decided choice, not open for reconsideration here.
- Contact details are placeholders pending the real numbers: `WHATSAPP_NUMBER_HERE` and
  `PHONE_NUMBER_HERE` in `src/lib/contact.ts` — every WhatsApp/Call control on the page reads
  from that one file.
- Hard constraint, confirmed by the client: never state or imply guaranteed admission,
  guaranteed visas, success percentages, specific university partnerships, years in business,
  team size, or testimonials. None of that is a confirmed fact, and inventing it is explicitly
  prohibited.

## Brand Commitments

- Name: "Defence Overseas."
- A real designed logo exists at `public/images/logo.webp`: a heraldic crest/seal mark — deep
  green ground, ornate gold border with flourished corners, a gold globe/compass-rose emblem
  (central star-topped spike, crossed arrow points, maroon accent), "DEFENCE OVERSEAS" set in
  serif gold capitals, tagline "STUDY ABROAD CONSULTANCY."
- **Open gap:** the shipped landing page's visual system (cream/ink-navy/gold minimalist
  palette, Fraunces + Inter typography, no green or maroon, no crest/ornate treatment) predates
  this logo and does not currently reflect it. Reconciling the two — or making a deliberate,
  confirmed call to keep the site's visual language distinct from the crest mark — is an open
  design decision, not yet resolved.
- Voice: clear, confident, human, aspirational, concise, professional. Avoid generic buzzwords
  ("world-class solutions," etc.) and avoid reading as a cheap template, a cluttered page, or a
  SaaS dashboard.

## Evidence on Hand

- No real business facts exist yet — no confirmed years in business, team size, destination
  specialization, accreditations, partnerships, or testimonials. Confirmed: nothing here should
  be invented. Current copy is intentionally qualitative ("experienced counsellors," "guidance
  across every step") rather than quantitative.
- Real photography: 8 Creative Commons–licensed photos are in place under `public/images/`
  (credited in `public/images/CREDITS.json`), standing in for real Defence Overseas photography
  until the business supplies its own.
- Real logo asset: `public/images/logo.webp` (see Brand Commitments).

## Product Principles

1. Never fabricate — no stats, guarantees, partnerships, or testimonials without real facts
   behind them.
2. The entire value proposition is guidance across the whole journey; every surface should
   reinforce "you're not doing this alone," not stack unverifiable claims.
3. WhatsApp and phone are the only conversion paths; every surface should make them fast to
   reach, especially on mobile.
4. Build for extension, not permanence — this is explicitly an interim single-page site meant
   to grow into a full multi-page Defence Overseas site later, so components, content, and
   config should stay reusable rather than one-off.
5. Speak to a 17–25-year-old student and a skeptical parent in the same sentence — clear and
   confident, not hypey.
