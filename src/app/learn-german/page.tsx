import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/service/ServicePage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Faq } from "@/components/ui/Faq";
import { H2, Lead } from "@/components/ui/type";
import { ArrowUpRight } from "@/components/ui/icons";
import { LeadForm } from "@/components/forms/LeadForm";
import { getWhatsAppLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Learn German — Toss International",
  description:
    "German language training from A1 to C2 with Goethe-certified trainers, live classes, Goethe / TestDaF / DSH preparation and free placement assistance.",
};

const LEVELS = [
  { code: "A1", name: "Beginner", text: "First words, greetings, everyday basics." },
  { code: "A2", name: "Elementary", text: "Simple conversations and familiar topics." },
  { code: "B1", name: "Intermediate", text: "Handle most everyday and travel situations." },
  { code: "B2", name: "Upper-intermediate", text: "Fluent, independent use — the usual bar for study." },
  { code: "C1", name: "Advanced", text: "Complex, nuanced language for work and academia." },
  { code: "C2", name: "Proficient", text: "Near-native command of the language." },
];

const PERKS = [
  { title: "Goethe-certified trainers", text: "Learn from trainers who hold the certification, not just fluent speakers." },
  { title: "Live, interactive classes", text: "Real-time teaching with group discussion — with batch timings that flex around school, college or work." },
  { title: "A recognised certificate", text: "An internationally recognised certificate on completion of your course." },
  { title: "Free placement support", text: "Placement assistance and job support after you finish — at no extra charge." },
];

const FAQS = [
  { q: "Do I need any German to begin?", a: "No. Complete beginners start at A1 and move up level by level." },
  { q: "Which exams do you prepare me for?", a: "Goethe, TestDaF and DSH. Exam preparation is built into the training." },
  { q: "How long does each level take?", a: "Each level has a fixed number of training hours covering instruction, group discussion and exam preparation. Your counsellor will share the schedule for your batch." },
  { q: "What happens after the course?", a: "You receive a completion certificate, plus free placement assistance and job support." },
];

export default function LearnGermanPage() {
  return (
    <>
      <PageHero
        crumb={{ label: "Toss International — a sub unit of Defence Overseas", href: "/" }}
        title="Learn German. Open the door to Germany."
        summary="Structured training from A1 to C2, taught live by Goethe-certified trainers — with exam preparation, a recognised certificate and free placement support once you finish."
        image="/images/dest-germany.jpg"
        imageAlt="Heidelberg castle and old bridge glowing at night"
        imagePosition="42% 50%"
        glance={[
          { label: "Levels", value: "A1 through C2" },
          { label: "Exam prep", value: "Goethe · TestDaF · DSH" },
          { label: "Trainers", value: "Goethe-certified" },
          { label: "After the course", value: "Free placement support" },
        ]}
        actions={
          <>
            <Button href="#demo" variant="gold" size="lg" arrow>
              Book a free demo class
            </Button>
            <Button href="#callback" variant="outline-light" size="lg">
              Request a call back
            </Button>
          </>
        }
      />

      {/* CEFR ladder */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <Reveal>
              <H2>Six levels. One staircase.</H2>
            </Reveal>
            <Reveal delay={100}>
              <Lead>
                Every level has fixed training hours covering instruction, group discussion and exam preparation — so you always know
                what you&apos;re climbing toward.
              </Lead>
            </Reveal>
          </div>

          <ol className="mt-16 grid grid-cols-2 items-end gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {LEVELS.map((l, i) => (
              <Reveal as="li" key={l.code} delay={i * 90}>
                <div
                  className="flex flex-col justify-between rounded-[24px] bg-forest p-6 text-on-forest"
                  style={{ minHeight: `${190 + i * 42}px` }}
                >
                  <span className="font-display text-[clamp(44px,5vw,64px)] font-bold leading-none tracking-tight text-gold">{l.code}</span>
                  <div>
                    <p className="font-display text-[19px] font-bold leading-tight">{l.name}</p>
                    <p className="mt-2 text-[14px] leading-snug text-on-forest-muted">{l.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Perks */}
      <section className="px-3 py-3 sm:px-5">
        <div className="mx-auto max-w-[1400px] rounded-[36px] bg-mist sm:rounded-[44px]">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
            <Reveal>
              <H2>Why train with Toss International.</H2>
              <ul className="mt-8 flex flex-wrap gap-3">
                {["Goethe", "TestDaF", "DSH"].map((exam) => (
                  <li key={exam} className="rounded-full bg-forest px-5 py-2.5 font-display text-[18px] font-semibold text-on-forest">
                    {exam} prep
                  </li>
                ))}
              </ul>
            </Reveal>
            <dl className="divide-y divide-forest/15 border-y border-forest/15">
              {PERKS.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} className="grid gap-2 py-7 sm:grid-cols-[0.8fr_1.2fr] sm:gap-8">
                  <dt className="font-display text-[24px] font-bold leading-tight tracking-tight text-forest">{p.title}</dt>
                  <dd className="text-[16px] leading-relaxed text-muted">{p.text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Cross-sell: language leads to Germany */}
      <section className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <Reveal>
            <H2>German is the first step. Germany is the destination.</H2>
            <Lead className="mt-6">
              Planning MBBS, engineering or a job in a German-speaking country? Learn the language and plan the move with the same team
              — one conversation, one plan.
            </Lead>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y divide-line border-y border-line">
              {[
                { label: "MBBS Abroad", href: "/study-abroad/mbbs" },
                { label: "BTech Abroad", href: "/study-abroad/btech" },
                { label: "MTech Abroad", href: "/study-abroad/mtech" },
                { label: "Jobs abroad for ex-servicemen", href: "/ex-servicemen" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group/l flex items-center justify-between py-5 font-display text-[24px] font-bold tracking-tight text-forest">
                    {l.label}
                    <span className="grid h-10 w-10 place-items-center rounded-full border-[1.5px] border-forest/25 transition-colors duration-300 group-hover/l:border-gold group-hover/l:bg-gold">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Demo class */}
      <section id="demo" className="px-3 py-3 sm:px-5">
        <div className="mx-auto max-w-[1400px] rounded-[36px] bg-gold text-forest-deep sm:rounded-[44px]">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <Reveal>
                <h2 className="text-[clamp(38px,5.4vw,72px)] font-bold leading-[0.98] tracking-[-0.035em]">Sit in on a class first.</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 max-w-[44ch] text-[18px] leading-relaxed text-forest-deep/85">
                  Your first German class is free. Meet the trainers, see how a live session runs, and decide with no pressure.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <LeadForm kind="demo" notch="gold" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brochure + call back */}
      <section id="callback" className="py-24 lg:py-32">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <LeadForm kind="brochure" defaults={{ course: "German language training" }} notch="paper" className="border border-line" />
          </Reveal>
          <Reveal delay={120}>
            <LeadForm kind="callback" notch="paper" className="border border-line" />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <H2>Before you enrol.</H2>
            <p className="mt-6">
              <Button href={getWhatsAppLink("Hi, I'd like to know about German classes.")} variant="outline" size="md">
                Ask on WhatsApp
              </Button>
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={FAQS} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
