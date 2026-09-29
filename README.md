Defence Overseas website — Next.js (App Router), TypeScript, Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

`/` home · `/study-abroad` (+ `/mbbs`, `/btech`, `/mtech`, `/mba`, `/other-courses`) · `/learn-german`
(Toss International) · `/ex-servicemen` · `/about` · `/contact`

There is deliberately no payment flow.

## Before launch — replace the placeholders

| What | Where |
| --- | --- |
| Social profile URLs (Instagram, YouTube) | `src/content/site.ts` — channels confirmed, real URLs not yet supplied |
| Business figures (years, students, partners, countries) | `CLAIMS` in `src/content/site.ts` — confirmed by the client as provisional/placeholder ("imaginary for now"); swap in real figures once they exist |
| Testimonials (currently placeholders) | `src/content/home.ts` |
| Founder story (placeholder on About) | `src/app/about/page.tsx` |
| Toss International's own logo (currently reuses the Defence Overseas crest) | `public/images/`, referenced from `src/app/learn-german/page.tsx` |
| CRM webhook | see below |

Phone, WhatsApp, email and the Pune office address are already real (`src/lib/contact.ts`,
`src/content/site.ts`).

## Lead capture

All seven forms post to `POST /api/leads` (`src/app/api/leads/route.ts`), tagged by form `kind`
(`counselling`, `brochure`, `eligibility`, `demo`, `callback`, `roadmap`, `contact`). Input is
validated on the client and again on the server.

Every lead is always logged server-side, and is also forwarded to a CRM when `CRM_WEBHOOK_URL`
is set (see `.env.example`) — a plain webhook POST, so it works with whichever CRM the team ends
up using: Zoho CRM, HubSpot, Pipedrive and monday.com all accept a generic incoming webhook
directly, and a Zapier/Make "catch hook" works as a universal adapter in front of anything else.
Set `CRM_WEBHOOK_URL` (and optionally `CRM_WEBHOOK_TOKEN` for bearer-token auth) in the Vercel
project's environment variables. A failing or slow CRM never blocks the visitor's submission —
it's only logged.

## Structure

```
src/
  app/                  Routes, root layout, global theme tokens (globals.css)
  components/
    layout/             Header, Footer, FloatingContact
    sections/           Home hero + route planner, service index, destination arches, journey route…
    service/            Shared page hero and the study-route page template
    forms/              LeadForm — one config-driven form for every lead type
    ui/                 Button, Reveal, Faq, icons, decor (ribbon, stamp, arch), type
  content/              All copy and data (services, home, forms, site facts)
  lib/                  Contact config, lead validation, helpers
public/images/          Photography and logo (see CREDITS.json for photo licences)
```

## Photography

Photos are real Creative Commons images from Wikimedia Commons; photographer, licence and
source for each are in `public/images/CREDITS.json`. Replace any file with real Defence Overseas
photography — paths are referenced from `src/content/`.

## Deploying

Zero-config on [Vercel](https://vercel.com/new).
