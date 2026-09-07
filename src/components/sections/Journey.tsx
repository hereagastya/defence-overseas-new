import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JOURNEY_STEPS } from "@/content/site-content";

export function Journey() {
  return (
    <section id="journey" className="bg-cream-2 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Process"
            title="You don't have to figure this out alone."
            description="Every student's path looks a little different, but the journey generally follows the same milestones — and we're with you at each one."
          />
        </Reveal>

        <ol className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-6">
          {JOURNEY_STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={(i % 6) * 60}
              className="relative rounded-card border border-ink/[0.06] bg-white pb-[22px] pl-[18px] pr-[18px] pt-[26px] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card"
            >
              <span className="mb-3.5 block font-serif text-[15px] font-semibold text-gold-dark">
                {step.number}
              </span>
              <h3 className="mb-2 font-serif text-lg font-semibold text-ink">{step.title}</h3>
              <p className="text-[13.5px] leading-[1.55] text-muted">{step.description}</p>

              {i !== JOURNEY_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-18px] top-[34px] hidden h-[1.5px] w-[18px] bg-[repeating-linear-gradient(to_right,var(--color-gold)_0_5px,transparent_5px_9px)] lg:block"
                />
              )}
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
