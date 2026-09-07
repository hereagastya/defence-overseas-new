import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { HERO_MICRO_ITEMS } from "@/content/site-content";
import { getCallLink, getWhatsAppLink } from "@/lib/contact";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-2 pb-16 pt-[calc(var(--spacing-header)+40px)] sm:pb-24 sm:pt-[calc(var(--spacing-header)+64px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-56 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(198,161,91,0.22),transparent_70%)] blur-[10px]"
      />

      <Container className="relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <Reveal className="order-2 lg:order-none">
          <Eyebrow>Overseas Education Guidance</Eyebrow>
          <h1 className="max-w-[15ch] font-serif text-[clamp(36px,5.2vw,60px)] font-semibold leading-[1.08] tracking-[-0.01em] text-ink">
            Studying abroad shouldn&apos;t feel like guesswork.
          </h1>
          <p className="mt-[22px] max-w-[46ch] text-[clamp(16px,1.4vw,18.5px)] leading-[1.65] text-muted">
            Defence Overseas helps students find the right university, course and country — and stays
            with you from your first question through applications, admissions and visa preparation.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href={getWhatsAppLink()} target="_blank" rel="noopener" size="lg">
              <WhatsAppIcon />
              WhatsApp Us
            </Button>
            <Button href={getCallLink()} variant="outline" size="lg">
              <PhoneIcon />
              Call Us
            </Button>
          </div>

          <ul className="mt-[30px] flex flex-wrap gap-x-[22px] gap-y-2.5 text-sm text-muted" aria-label="What we help with">
            {HERO_MICRO_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="order-1 lg:order-none" delay={100}>
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}
