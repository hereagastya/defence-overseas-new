import Link from "next/link";
import { CLAIMS } from "@/content/site";
import { DESTINATIONS, TESTIMONIALS } from "@/content/home";
import { SERVICES, SPECIAL_LINES } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Arch } from "@/components/ui/decor";
import { Button } from "@/components/ui/Button";
import { H2, Lead } from "@/components/ui/type";
import { ArrowUpRight, Check } from "@/components/ui/icons";
import { LeadForm } from "@/components/forms/LeadForm";
import { CONTACT_CONFIG, getCallLink } from "@/lib/contact";

/* ---------- Services: an index, not a card grid ---------- */

export function ServiceIndex({
  academicOnly = false,
  title = "Seven ways abroad. One team beside you.",
  lead = "Pick the road that fits — a degree, a language, a second career after service. The support around it stays the same.",
}: {
  academicOnly?: boolean;
  title?: string;
  lead?: string;
}) {
  const rows = [
    ...SERVICES.map((s) => ({ title: s.title, blurb: s.blurb, href: s.href, icon: s.icon, brand: null as string | null })),
    ...(academicOnly
      ? []
      : SPECIAL_LINES.map((s) => ({ title: s.title, blurb: s.blurb, href: s.href, icon: s.icon, brand: s.brand === "Toss International" ? s.brand : null }))),
  ];
  return (
    <section className="pb-24 pt-8 lg:pt-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <Reveal>
            <H2>{title}</H2>
          </Reveal>
          <Reveal delay={100}>
            <Lead>{lead}</Lead>
          </Reveal>
        </div>

        <ul className="mt-14 border-t border-line">
          {rows.map((row, i) => (
            <Reveal as="li" key={row.href} delay={i * 50} className="border-b border-line">
              <Link
                href={row.href}
                className="group/row -mx-3 grid items-center gap-x-8 gap-y-2 rounded-[28px] px-3 py-6 transition-colors duration-300 ease-[var(--ease-out-expo)] hover:bg-forest sm:-mx-6 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_auto] sm:px-6 sm:py-7"
              >
                <span className="flex items-center gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-mist text-forest transition-colors duration-300 group-hover/row:bg-gold group-hover/row:text-forest-deep">
                    <row.icon className="h-7 w-7" />
                  </span>
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-display text-[clamp(26px,3.2vw,40px)] font-bold leading-none tracking-[-0.025em] text-forest transition-colors duration-300 group-hover/row:text-on-forest">
                      {row.title}
                    </span>
                    {row.brand && (
                      <span className="rounded-full border border-forest/25 px-3 py-1 text-[12px] font-semibold text-forest transition-colors duration-300 group-hover/row:border-on-forest/40 group-hover/row:text-on-forest">
                        {row.brand}
                      </span>
                    )}
                  </span>
                </span>
                <span className="max-w-[46ch] text-[16px] leading-relaxed text-muted transition-colors duration-300 group-hover/row:text-on-forest-muted sm:pl-0">
                  {row.blurb}
                </span>
                <span className="hidden h-12 w-12 place-items-center rounded-full border-[1.5px] border-forest/25 text-forest transition-[background-color,color,border-color,transform] duration-300 group-hover/row:rotate-0 group-hover/row:border-gold group-hover/row:bg-gold group-hover/row:text-forest-deep sm:grid">
                  <ArrowUpRight className="h-6 w-6" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- Counselling: the primary conversion, high on the page ---------- */

export function CounsellingBand({ id = "counselling" }: { id?: string }) {
  return (
    <section id={id} className="px-3 py-3 sm:px-5">
      <div className="mx-auto max-w-[1400px] rounded-[36px] bg-gold text-forest-deep sm:rounded-[44px]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <Reveal>
              <h2 className="text-[clamp(38px,5.4vw,72px)] font-bold leading-[0.98] tracking-[-0.035em]">
                Talk to a counsellor before you decide anything.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-forest-deep/85">
                Free, honest and no-pressure. Tell us where you are; we&apos;ll tell you what&apos;s realistic.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ol className="mt-10 space-y-5">
                {[
                  "You share a few details.",
                  "A counsellor calls you back.",
                  "You leave with a clear plan — and the choice stays yours.",
                ].map((line, i) => (
                  <li key={line} className="flex items-start gap-4 text-[17px] font-medium">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-deep font-display text-[15px] font-bold text-gold">
                      {i + 1}
                    </span>
                    <span className="pt-1">{line}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-10 text-[16px]">
                Prefer to talk now?{" "}
                <a href={getCallLink()} className="tabular font-bold underline decoration-forest-deep/40 hover:decoration-forest-deep">
                  {CONTACT_CONFIG.phoneDisplay}
                </a>
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <LeadForm kind="counselling" notch="gold" prefillFromUrl />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Destinations: a colonnade of arches ---------- */

export function DestinationArches() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <Reveal>
            <H2>Gateways to study in Europe.</H2>
          </Reveal>
          <Reveal delay={100}>
            <Lead>
              Our primary destination is Europe. The right country depends on your course, your budget and your goals — not on the
              postcard.
            </Lead>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-5">
          {DESTINATIONS.map((d, i) => (
            <Reveal as="li" key={d.country} delay={i * 90} className={i % 2 === 1 ? "lg:mt-14" : ""}>
              <Link href="/study-abroad/mbbs" className="group/arch block">
                <Arch
                  src={d.image}
                  alt={d.alt}
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 46vw"
                  position={d.position}
                  className="aspect-[3/4.4] w-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/arch:-translate-y-2"
                />
                <p className="mt-4 font-display text-[22px] font-bold tracking-tight text-forest">{d.country}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- Defence community band ---------- */

export function DefenceBand() {
  const benefits = [
    "Personalised mentorship",
    "Priority job placement abroad",
    "Guidance for higher education",
    "A global network",
    "Assistance for the whole family",
  ];
  return (
    <section className="px-3 py-3 sm:px-5">
      <div className="on-dark relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-maroon text-white sm:rounded-[44px]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <Reveal>
              <h2 className="text-[clamp(38px,5.4vw,76px)] font-bold leading-[0.98] tracking-[-0.035em]">
                The service doesn&apos;t end at retirement.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-[52ch] text-[18px] leading-relaxed text-white/80">
                Defence Overseas was founded by someone from the defence community. So we built a programme for those who
                served — and the families who served alongside them.
              </p>
              <ul className="mt-9 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[16px] font-medium">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-maroon-deep">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/ex-servicemen" variant="gold" size="lg" arrow>
                  See the ex-servicemen programme
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150} className="hidden lg:block">
            <MedalRibbon />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** A large medal ribbon with a star — the defence community's own visual language. */
export function MedalRibbon({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <div className="relative mx-auto h-[420px] w-[260px]">
        <div
          className="absolute inset-0 rounded-b-[6px] rounded-t-[6px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #17382a 0 34px, #d9a93a 34px 42px, #f7f9f5 42px 50px, #d9a93a 50px 58px, #17382a 58px 92px)",
            clipPath: "polygon(0 0, 100% 0, 100% 92%, 50% 100%, 0 92%)",
          }}
        />
        <svg viewBox="0 0 100 100" className="absolute left-1/2 top-[38%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-gold drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]">
          <circle cx="50" cy="50" r="46" fill="#6e1f2f" stroke="currentColor" strokeWidth="3" />
          <path fill="currentColor" d="M50 12 58 42 88 50 58 58 50 88 42 58 12 50 42 42Z" />
        </svg>
      </div>
    </div>
  );
}

/* ---------- Claims as a sentence, not a stat grid ---------- */

export function ClaimsSentence() {
  const mark = "underline decoration-gold decoration-[7px] underline-offset-[7px]";
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <p className="max-w-[26ch] font-display text-[clamp(34px,5.6vw,76px)] font-bold leading-[1.04] tracking-[-0.03em] text-forest sm:max-w-none">
            <span className="tabular">
              Over <span className={mark}>{CLAIMS.years} years</span> guiding Indian families abroad —{" "}
              <span className={mark}>{CLAIMS.students}</span> students placed across <span className={mark}>{CLAIMS.countries}</span>{" "}
              countries, through <span className={mark}>{CLAIMS.universities}</span> partner universities.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Testimonials (placeholders until real ones arrive) ---------- */

export function Testimonials() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <Container>
        <Reveal>
          <H2>In their own words.</H2>
        </Reveal>
        <ul className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 100} className="w-[86%] shrink-0 snap-start sm:w-[60%] lg:w-auto">
              <figure className="flex h-full flex-col justify-between rounded-[28px] bg-white p-8 sm:p-10">
                <span aria-hidden="true" className="block h-10 font-display text-[88px] font-bold leading-[0.9] text-gold">
                  &ldquo;
                </span>
                <blockquote className="mt-6 font-display text-[22px] font-semibold leading-snug tracking-tight text-forest">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-5">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-[14px] text-muted">{t.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

