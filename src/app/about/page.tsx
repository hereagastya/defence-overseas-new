import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/service/ServicePage";
import { ClaimsSentence } from "@/components/sections/HomeSections";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { H2, Lead } from "@/components/ui/type";

export const metadata: Metadata = {
  title: "About",
  description:
    "Defence Overseas was founded by someone from the defence community to extend the spirit of service beyond uniform and open global opportunities for India's youth and veterans.",
};

const DIFFERENTIATORS = [
  { title: "Expert guidance", text: "Counsellors who explain your real options — including the ones that aren't the most profitable for us." },
  { title: "A global network", text: "Relationships with universities and institutions across many countries." },
  { title: "End-to-end support", text: "Counselling, admission, visa, funding, accommodation and landing — one team, start to finish." },
  { title: "Trusted experience", text: "Integrity and personalised guidance as the standard, not the slogan." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Built by someone who knows what service means."
        summary="Defence Overseas began with a simple idea: extend the spirit of service beyond the uniform, and create meaningful opportunities for India's youth and veterans."
        actions={
          <>
            <Button href="/contact#counselling" variant="gold" size="lg" arrow>
              Talk to us
            </Button>
            <Button href="/ex-servicemen" variant="outline-light" size="lg">
              For ex-servicemen
            </Button>
          </>
        }
      />

      <section className="py-24 lg:py-32">
        <Container className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <H2 className="text-[clamp(30px,3.6vw,46px)]">Our vision</H2>
            <p className="mt-6 font-display text-[clamp(24px,2.6vw,34px)] font-semibold leading-[1.25] tracking-tight text-forest">
              To be the leading force in transforming lives through global education and career opportunities, bridging the gap
              between Indian talent and international excellence.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <H2 className="text-[clamp(30px,3.6vw,46px)]">Our mission</H2>
            <p className="mt-6 font-display text-[clamp(24px,2.6vw,34px)] font-semibold leading-[1.25] tracking-tight text-forest">
              Empowering individuals to achieve their dreams through quality education abroad — while maintaining the highest standards
              of integrity and personalised guidance.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Founder story — placeholder until real details are supplied */}
      <section className="px-3 py-3 sm:px-5">
        <div className="mx-auto max-w-[1400px] rounded-[36px] bg-mist sm:rounded-[44px]">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20 lg:py-24">
            <Reveal>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-forest">
                <Image src="/images/logo-crest.webp" alt="The Defence Overseas crest" fill sizes="380px" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <H2>Why a defence background changes how we work.</H2>
              <Lead className="mt-6">
                Discipline, duty and looking after your people are not slogans in the armed forces — they are the job. That is the
                standard we hold ourselves to with every student and every family.
              </Lead>
              <p className="mt-6 rounded-2xl border-[1.5px] border-dashed border-forest/30 px-5 py-4 text-[15px] leading-relaxed text-muted">
                Founder&apos;s name, service background and personal story to be added here.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <H2>What you can expect from us.</H2>
          </Reveal>
          <dl className="divide-y divide-line border-y border-line">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.title} delay={i * 80} className="grid gap-2 py-7 sm:grid-cols-[0.8fr_1.2fr] sm:gap-8">
                <dt className="font-display text-[24px] font-bold leading-tight tracking-tight text-forest">{d.title}</dt>
                <dd className="text-[16px] leading-relaxed text-muted">{d.text}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <ClaimsSentence />

      <section className="pb-24 lg:pb-32">
        <Container>
          <Reveal>
            <div className="grid gap-8 rounded-[36px] border border-line bg-white p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-tight tracking-tight text-forest">
                  Toss International
                </h2>
                <p className="mt-3 max-w-[60ch] text-[17px] leading-relaxed text-muted">
                  Our German-language training wing — a sub unit of Defence Overseas, with its own identity and Goethe-certified
                  trainers. It powers the language step for students and professionals heading to Germany.
                </p>
              </div>
              <Button href="/learn-german" variant="forest" size="lg" arrow>
                Explore German training
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
