import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/content/navigation";
import { getCallLink, getWhatsAppLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-cream-2">
      <Container className="flex flex-wrap items-start justify-between gap-8 border-b border-ink/[0.08] py-10">
        <div>
          <a href="#top" className="font-serif text-lg font-semibold text-ink">
            Defence <span className="text-gold-dark">Overseas</span>
          </a>
          <p className="mt-2.5 max-w-[34ch] text-sm text-muted">
            Guidance for students pursuing an international education.
          </p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-6 self-center text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold-dark">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 self-center text-sm font-semibold">
          <a href={getWhatsAppLink()} target="_blank" rel="noopener" className="hover:text-gold-dark">
            WhatsApp Us
          </a>
          <a href={getCallLink()} className="hover:text-gold-dark">
            Call Us
          </a>
        </div>
      </Container>

      <Container className="py-[22px] pb-[100px] lg:pb-7">
        <p className="text-[13px] text-muted">
          &copy; {new Date().getFullYear()} Defence Overseas. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
