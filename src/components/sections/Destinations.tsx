import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DESTINATIONS } from "@/content/site-content";

export function Destinations() {
  return (
    <section className="bg-cream-2 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Where You Could Go"
            title="Your international future has options."
            description="A glimpse of the kind of places an international education can take you — the right fit depends on your goals, not just the destination."
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {DESTINATIONS.map((destination, i) => (
            <Reveal key={destination.country} delay={(i % 6) * 60}>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-card shadow-card transition-transform duration-300 hover:-translate-y-1.5">
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <p className="absolute inset-x-3 bottom-3 font-serif text-base font-semibold text-cream sm:text-lg">
                  {destination.country}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
