import Link from "next/link";
import { CONTACT_CONFIG, getCallLink, getMailLink, getWhatsAppLink } from "@/lib/contact";
import { FOOTER_GROUPS, SITE } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Ribbon } from "@/components/ui/decor";
import { Button } from "@/components/ui/Button";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Logo } from "./Header";

export function Footer() {
  const mail = getMailLink();
  return (
    <footer className="on-dark bg-forest-deep pb-28 text-on-forest lg:pb-0">
      <Ribbon tall />
      <Container className="pt-20">
        <div className="flex flex-col gap-8 border-b border-on-forest/15 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[16ch] font-display text-[clamp(40px,6vw,76px)] font-bold leading-[0.98] tracking-[-0.03em]">
            Ready when <span className="text-gold">you are.</span>
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact#counselling" variant="gold" size="lg" arrow>
              Book free counselling
            </Button>
            <Button href={getWhatsAppLink()} variant="outline-light" size="lg">
              <WhatsAppIcon className="lead" />
              WhatsApp us
            </Button>
          </div>
        </div>

        <div className="grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-[40ch] text-[15px] leading-relaxed text-on-forest-muted">
              {SITE.tagline}. Guidance for Indian students, families and the armed-forces community — from the first
              conversation to the first day abroad.
            </p>
            <ul className="mt-7 space-y-3 text-[15px]">
              <li>
                <a href={getCallLink()} className="inline-flex items-center gap-3 hover:text-gold">
                  <PhoneIcon className="h-5 w-5 text-gold" />
                  <span className="tabular">{CONTACT_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li>
                {mail ? (
                  <a href={mail} className="inline-flex items-center gap-3 hover:text-gold">
                    <MailIcon className="h-5 w-5 text-gold" />
                    {CONTACT_CONFIG.email}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-3 text-on-forest-muted">
                    <MailIcon className="h-5 w-5 text-gold" />
                    Email address to be added
                  </span>
                )}
              </li>
              <li className="inline-flex items-center gap-3 text-on-forest-muted">
                <PinIcon className="h-5 w-5 text-gold" />
                {SITE.city}, India
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">{group.title}</p>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="text-[15px] text-on-forest transition-colors hover:text-gold">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-on-forest/15 py-8 text-[13px] text-on-forest-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Defence Overseas. Toss International is a sub unit of Defence Overseas.
          </p>
          <ul className="flex gap-6">
            {SITE.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
