import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { UNIVERSITY_SHOWCASE } from "@/content/site-content";

export function UniversityShowcase() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Where It Leads</Eyebrow>
            <h2 className="font-serif text-[clamp(28px,3.6vw,42px)] font-semibold leading-[1.15] tracking-[-0.01em] text-ink">
              Real campuses. Real classrooms. A real future.
            </h2>
            <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.65] text-muted">
              Studying abroad means stepping into environments built for serious learning —
              grand libraries, historic lecture halls and communities of students from
              everywhere. Defence Overseas helps you find where you genuinely fit.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {UNIVERSITY_SHOWCASE.map((item, i) => (
              <div key={item.src} className={i === 1 ? "sm:translate-y-10" : undefined}>
                <Reveal delay={i * 100}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-panel shadow-card">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 45vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
                    <p className="absolute inset-x-4 bottom-4 text-[13px] font-semibold leading-snug text-cream">
                      {item.caption}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
