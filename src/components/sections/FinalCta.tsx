import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { getCallLink, getWhatsAppLink } from "@/lib/contact";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[radial-gradient(120%_140%_at_50%_0%,var(--color-ink-3)_0%,var(--color-ink)_62%)] py-24 text-center sm:py-[110px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(198,161,91,0.25),transparent_70%)]"
      />

      <Container className="relative z-10">
        <Reveal>
          <Eyebrow light>Let&apos;s Talk</Eyebrow>
          <h2 className="mx-auto max-w-[16ch] font-serif text-[clamp(30px,4.4vw,48px)] font-semibold text-cream">
            Ready to explore what&apos;s possible?
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-[17px] leading-[1.65] text-cream/70">
            Talk to the Defence Overseas team and take the first step toward your international
            education journey.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href={getWhatsAppLink()} target="_blank" rel="noopener" size="lg">
              <WhatsAppIcon />
              WhatsApp Us
            </Button>
            <Button href={getCallLink()} variant="outline-light" size="lg">
              <PhoneIcon />
              Call Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
