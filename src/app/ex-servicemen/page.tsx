import type { Metadata } from "next";
import { PageHero } from "@/components/service/ServicePage";
import { MedalRibbon } from "@/components/sections/HomeSections";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Faq } from "@/components/ui/Faq";
import { H2, Lead } from "@/components/ui/type";
import { Check } from "@/components/ui/icons";
import { LeadForm } from "@/components/forms/LeadForm";
import { CONTACT_CONFIG, getCallLink, getWhatsAppLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Ex-Servicemen & Agniveers",
  description:
    "Personalised mentorship, priority job placement abroad and higher-education guidance for ex-defence personnel, Agniveers and their families.",
};

const OFFER = [
  { title: "Personalised mentorship", text: "A counsellor who understands service life and translates it into what universities and employers value." },
  { title: "Priority job placement abroad", text: "Placement support that maps your rank, years of service and skills to roles overseas." },
  { title: "Higher-education guidance", text: "Degrees and diplomas abroad, chosen around where you want to go next." },
  { title: "A global network", text: "Connections with employers, institutions and other veterans who have made the move." },
  { title: "Family assistance", text: "Programmes for spouses and children, so the whole family moves forward together." },
];

const FAQS = [
  { q: "Why does the form ask for my rank and years of service?", a: "Placement eligibility and seniority mapping depend on your service record. It lets us build a roadmap that fits you instead of a generic brochure." },
  { q: "Is this only for retired personnel?", a: "No. It's for ex-servicemen, Agniveers finishing their tenure, and their families." },
  { q: "What do I receive after I submit the form?", a: "A personalised roadmap: the study, language or job routes that fit your profile, and the next steps for each." },
];

export default function ExServicemenPage() {
  return (
    <>
      <PageHero
        tone="maroon"
        title="You served. Now let us plan what comes next."
        summary="Defence Overseas was founded by someone from the defence community. This programme is ours to give back — personalised mentorship, priority job placement abroad and higher-education guidance for ex-servicemen, Agniveers and their families."
        image="/images/final-cta-bg.jpg"
        imageAlt="A wing above golden clouds at sunset"
        glance={[
          { label: "For", value: "Ex-servicemen, Agniveers and families" },
          { label: "What you get", value: "A personalised roadmap, not a brochure" },
          { label: "Routes", value: "Jobs abroad, higher study, German language" },
          { label: "First step", value: "A short service profile" },
        ]}
        actions={
          <>
            <Button href="#roadmap" variant="gold" size="lg" arrow>
              Get my roadmap
            </Button>
            <Button href={getWhatsAppLink("Hi, I'm from the defence community and would like to know about the ex-servicemen programme.")} variant="outline-light" size="lg">
              Ask on WhatsApp
            </Button>
          </>
        }
      />

      <section className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <H2>What the programme offers.</H2>
            <Lead className="mt-6">Built around service records, not classroom marks — because your experience is the asset.</Lead>
          </Reveal>
          <ul className="divide-y divide-line border-y border-line">
            {OFFER.map((o, i) => (
              <Reveal as="li" key={o.title} delay={i * 80} className="flex gap-5 py-7">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-maroon text-white">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-[24px] font-bold leading-tight tracking-tight text-forest">{o.title}</h3>
                  <p className="mt-2 max-w-[52ch] text-[16px] leading-relaxed text-muted">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Roadmap questionnaire */}
      <section id="roadmap" className="px-3 py-3 sm:px-5">
        <div className="on-dark mx-auto max-w-[1400px] rounded-[36px] bg-maroon text-white sm:rounded-[44px]">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <h2 className="text-[clamp(38px,5.2vw,68px)] font-bold leading-[0.98] tracking-[-0.035em]">
                  Your service record shapes your roadmap.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 max-w-[44ch] text-[18px] leading-relaxed text-white/80">
                  Rank, years of service, qualification and where you want to go — five minutes of detail, and a counsellor from our
                  ex-servicemen desk builds a route around it.
                </p>
                <p className="mt-8 text-[16px] text-white/80">
                  Rather speak first?{" "}
                  <a href={getCallLink()} className="tabular font-bold text-gold underline decoration-gold/40 hover:decoration-gold">
                    {CONTACT_CONFIG.phoneDisplay}
                  </a>
                </p>
              </Reveal>
              <Reveal delay={200} className="mt-12 hidden lg:block">
                <MedalRibbon className="origin-top-left scale-[0.6]" />
              </Reveal>
            </div>
            <Reveal delay={150}>
              <LeadForm kind="roadmap" notch="maroon" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <H2>Go further with German.</H2>
            <Lead className="mt-6">
              Germany and other German-speaking countries hire from abroad. Our Toss International wing teaches the language — with free
              placement support at the end.
            </Lead>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/learn-german" variant="forest" arrow>
                Learn German
              </Button>
              <Button href="/study-abroad" variant="outline">
                See study routes
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={FAQS} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
