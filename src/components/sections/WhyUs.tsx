import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_US_ITEMS } from "@/content/site-content";

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Why Defence Overseas" title="Guidance that's actually built around you." />
        </Reveal>

        {/*
          6-col grid at lg lets the 4th/5th cards center under the first
          three (2-col span each, offset via col-start). This centering
          assumes exactly 5 items — see the note on WHY_US_ITEMS.
        */}
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-6">
          {WHY_US_ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 6) * 60}
              className={cn(
                "rounded-panel border border-ink/[0.06] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft",
                "lg:col-span-2",
                i === 3 && "lg:col-start-2",
                i === 4 && "lg:col-start-4"
              )}
            >
              <item.icon className="mb-5 h-[30px] w-[30px] text-gold-dark" strokeWidth={1.5} />
              <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-ink">{item.title}</h3>
              <p className="text-[14.5px] leading-[1.65] text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
