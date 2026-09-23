import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ServiceDef } from "@/content/services";
import { MBBS_CAREERS, MBBS_DOCUMENTS, MBBS_PHASES } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Arch, Stamp } from "@/components/ui/decor";
import { Button } from "@/components/ui/Button";
import { Faq } from "@/components/ui/Faq";
import { H2, Lead } from "@/components/ui/type";
import { Check } from "@/components/ui/icons";
import { RouteSteps } from "@/components/sections/RouteSteps";
import { DestinationArches } from "@/components/sections/HomeSections";
import { LeadForm } from "@/components/forms/LeadForm";
import { getWhatsAppLink } from "@/lib/contact";

/** Shared hero panel used by service, German and ex-servicemen pages. */
export function PageHero({
  tone = "forest",
  crumb,
  title,
  summary,
  actions,
  image,
  imageAlt,
  imagePosition,
  glance,
}: {
  tone?: "forest" | "maroon";
  crumb?: { label: string; href: string };
  title: React.ReactNode;
  summary: string;
  actions: React.ReactNode;
  /** Omit for a page led by the house stamp instead of a photograph. */
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  glance?: { label: string; value: string }[];
}) {
  return (
    <section className={cn("px-3 pt-3 sm:px-5", glance ? "pb-24 lg:pb-28" : "pb-10")}>
      <div
        className={cn(
          "on-dark relative mx-auto max-w-[1400px] rounded-[36px] text-on-forest sm:rounded-[44px]",
          tone === "forest" ? "bg-forest" : "bg-maroon text-white"
        )}
      >
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-12 pt-10 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-10 lg:pb-28 lg:pt-14">
          <div className="animate-rise">
            {crumb && (
              <Link href={crumb.href} className={cn("mb-6 inline-block text-[14px] font-semibold hover:text-gold", tone === "forest" ? "text-on-forest-muted" : "text-white/70")}>
                &larr; {crumb.label}
              </Link>
            )}
            <h1 className="text-[clamp(40px,6vw,88px)] font-bold leading-[0.96] tracking-[-0.035em]">{title}</h1>
            <p className={cn("mt-6 max-w-[54ch] text-[clamp(17px,1.4vw,19px)] leading-relaxed", tone === "forest" ? "text-on-forest-muted" : "text-white/80")}>
              {summary}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>
          </div>
          <div className="mx-auto w-full max-w-[340px] animate-rise [animation-delay:150ms] lg:max-w-none">
            {image ? (
              <Arch src={image} alt={imageAlt ?? ""} sizes="(min-width: 1024px) 28vw, 70vw" priority position={imagePosition} className="aspect-[4/5] w-full" />
            ) : (
              <div className="mx-auto aspect-square w-full max-w-[300px] animate-float">
                <Stamp tone="gold" />
              </div>
            )}
          </div>
        </div>

        {glance && (
          <div className="px-4 pb-6 sm:px-8 lg:absolute lg:inset-x-0 lg:bottom-0 lg:translate-y-1/2 lg:pb-0">
            <dl className="mx-auto grid max-w-[1100px] gap-px overflow-hidden rounded-[28px] bg-line text-ink shadow-lift sm:grid-cols-2 lg:grid-cols-4">
              {glance.map((g) => (
                <div key={g.label} className="bg-white px-6 py-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{g.label}</dt>
                  <dd className="mt-1.5 font-display text-[18px] font-semibold leading-snug text-forest">{g.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}

export function ServicePage({ service }: { service: ServiceDef }) {
  const isMbbs = service.slug === "mbbs";

  return (
    <>
      <PageHero
        tone={service.tone}
        crumb={{ label: "All study-abroad routes", href: "/study-abroad" }}
        title={service.headline}
        summary={service.summary}
        image={service.image}
        imageAlt={service.imageAlt}
        glance={service.glance}
        actions={
          <>
            <Button href="#enquire" variant="gold" size="lg" arrow>
              {service.formKind === "brochure" ? "Get the brochure" : service.eligibilityCta}
            </Button>
            <Button href={getWhatsAppLink(`Hi, I'd like to know more about ${service.title}.`)} variant="outline-light" size="lg">
              Ask on WhatsApp
            </Button>
          </>
        }
      />

      {/* Why */}
      <section className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <H2>{service.whyTitle}</H2>
          </Reveal>
          <dl className="divide-y divide-line border-y border-line">
            {service.why.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="grid gap-2 py-7 sm:grid-cols-[0.8fr_1.2fr] sm:gap-8">
                <dt className="font-display text-[24px] font-bold leading-tight tracking-tight text-forest">{p.title}</dt>
                <dd className="text-[16px] leading-relaxed text-muted">{p.text}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Eligibility */}
      <section className="px-3 py-3 sm:px-5">
        <div className="mx-auto max-w-[1400px] rounded-[36px] bg-mist sm:rounded-[44px]">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
            <Reveal>
              <H2>Who can apply</H2>
              {service.eligibilityNote && <Lead className="mt-5">{service.eligibilityNote}</Lead>}
              <div className="mt-9">
                <Button href="#enquire" variant="forest" size="lg" arrow>
                  {service.eligibilityCta}
                </Button>
              </div>
            </Reveal>
            <ul className="space-y-4">
              {service.eligibility.map((line, i) => (
                <Reveal as="li" key={line} delay={i * 80} className="flex items-start gap-4 rounded-[22px] bg-white px-6 py-5 text-[17px] font-medium leading-snug text-ink">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest text-on-forest">
                    <Check className="h-4 w-4" />
                  </span>
                  {line}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <H2 className="max-w-[18ch]">{service.stepsTitle}</H2>
          </Reveal>
          <div className="mt-16">
            <RouteSteps steps={service.steps} />
          </div>
        </Container>
      </section>

      {isMbbs && <MbbsDetail />}

      {/* Enquiry */}
      <section id="enquire" className="px-3 py-3 sm:px-5">
        <div className="on-dark mx-auto max-w-[1400px] rounded-[36px] bg-forest text-on-forest sm:rounded-[44px]">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <Reveal>
                <H2 dark>Ready to take the first step?</H2>
              </Reveal>
              <Reveal delay={100}>
                <Lead dark className="mt-6">
                  Share a few details and a counsellor will get back to you. No fee for the first conversation, and no pressure.
                </Lead>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <LeadForm
                kind={service.formKind}
                defaults={{ course: service.formCourse }}
                title={service.formTitle}
                blurb={service.formBlurb}
                notch="forest"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <H2>Good questions.</H2>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={service.faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function MbbsDetail() {
  return (
    <>
      <section className="bg-mist py-24 lg:py-32">
        <Container>
          <Reveal>
            <H2 className="max-w-[20ch]">The six-year road, in three phases.</H2>
          </Reveal>
          <ol className="mt-14 grid gap-4 lg:grid-cols-[1fr_1.4fr_1fr]">
            {MBBS_PHASES.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 120}
                className={cn(
                  "rounded-[28px] p-8",
                  i === 0 && "bg-white",
                  i === 1 && "bg-forest text-on-forest",
                  i === 2 && "bg-gold text-forest-deep"
                )}
              >
                <h3 className="font-display text-[26px] font-bold leading-tight tracking-tight">{p.title}</h3>
                <p className={cn("mt-3 max-w-[34ch] text-[16px] leading-relaxed", i === 1 ? "text-on-forest-muted" : i === 2 ? "text-forest-deep/85" : "text-muted")}>
                  {p.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <H2 className="text-[clamp(30px,3.6vw,46px)]">Documents to keep ready</H2>
            </Reveal>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {MBBS_DOCUMENTS.map((d, i) => (
                <Reveal as="li" key={d} delay={i * 60} className="flex items-center gap-4 py-4 text-[17px] text-ink">
                  <Check className="h-5 w-5 shrink-0 text-forest" />
                  {d}
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <H2 className="text-[clamp(30px,3.6vw,46px)]">Where the degree can lead</H2>
            </Reveal>
            <ul className="mt-8 flex flex-wrap gap-3">
              {MBBS_CAREERS.map((c, i) => (
                <Reveal as="li" key={c} delay={i * 60}>
                  <span className="inline-block rounded-full border-[1.5px] border-forest/30 px-5 py-3 font-display text-[18px] font-semibold text-forest">
                    {c}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <DestinationArches />
    </>
  );
}
