import type { Metadata } from "next";
import { PageHero } from "@/components/service/ServicePage";
import { CounsellingBand } from "@/components/sections/HomeSections";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { H2 } from "@/components/ui/type";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { LeadForm } from "@/components/forms/LeadForm";
import { CONTACT_CONFIG, getCallLink, getMailLink, getWhatsAppLink } from "@/lib/contact";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, WhatsApp or message Defence Overseas in Pune. Free counselling for students, families and the armed-forces community.",
};

export default function ContactPage() {
  const mail = getMailLink();
  return (
    <>
      <PageHero
        title="Let's talk."
        summary="The quickest way to get answers is a phone call or a WhatsApp message. Prefer to write? The forms below reach the same team."
        actions={
          <>
            <Button href={getCallLink()} variant="gold" size="lg">
              <PhoneIcon className="lead" />
              {CONTACT_CONFIG.phoneDisplay}
            </Button>
            <Button href={getWhatsAppLink()} variant="outline-light" size="lg">
              <WhatsAppIcon className="lead" />
              WhatsApp us
            </Button>
          </>
        }
      />

      <CounsellingBand />

      <section className="py-24 lg:py-32">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <H2>Find us, or write to us.</H2>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-10 space-y-6 text-[17px]">
                <li className="flex gap-4">
                  <PinIcon className="mt-1 h-6 w-6 shrink-0 text-gold-deep" />
                  <address className="not-italic leading-relaxed text-ink">
                    {SITE.addressLines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </li>
                <li className="flex gap-4">
                  <PhoneIcon className="mt-1 h-6 w-6 shrink-0 text-gold-deep" />
                  <a href={getCallLink()} className="tabular font-semibold text-forest hover:underline">
                    {CONTACT_CONFIG.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-4">
                  <MailIcon className="mt-1 h-6 w-6 shrink-0 text-gold-deep" />
                  {mail ? (
                    <a href={mail} className="font-semibold text-forest hover:underline">
                      {CONTACT_CONFIG.email}
                    </a>
                  ) : (
                    <span className="text-muted">Email address to be added</span>
                  )}
                </li>
                <li className="flex gap-4">
                  <ClockIcon className="mt-1 h-6 w-6 shrink-0 text-gold-deep" />
                  <span className="text-ink">{SITE.hours}</span>
                </li>
              </ul>
              <ul className="mt-10 flex flex-wrap gap-3">
                {SITE.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border-[1.5px] border-forest/30 px-5 py-2.5 text-[15px] font-semibold text-forest transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-on-forest"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <LeadForm kind="contact" notch="paper" className="border border-line" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
