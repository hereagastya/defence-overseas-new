import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-panel shadow-soft sm:aspect-[5/6]">
              <Image
                src="/images/hero-campus.jpg"
                alt="A student walking across a university campus in autumn"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-ink/0" />
            </div>

            <div className="animate-float absolute left-[-4%] top-[8%] flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2.5 text-xs font-semibold text-ink shadow-card backdrop-blur-md sm:text-[13px]">
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-gold" />
              Personalised Guidance
            </div>
            <div className="animate-float-delay absolute bottom-[8%] right-[-4%] flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2.5 text-xs font-semibold text-ink shadow-card backdrop-blur-md sm:text-[13px]">
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-gold" />
              Visa &amp; Process Support
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
