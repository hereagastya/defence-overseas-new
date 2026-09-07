import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TRUST_ITEMS } from "@/content/site-content";

export function TrustStrip() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal>
          <p className="mb-8 text-center text-sm font-semibold tracking-[0.04em] text-muted">
            Guidance across every step of the process
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, i) => (
            <Reveal
              key={item.label}
              delay={(i % 6) * 60}
              className="flex flex-col items-center gap-3 rounded-card border border-ink/[0.06] bg-white px-3.5 py-[22px] text-center text-[14.5px] font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <item.icon className="h-[26px] w-[26px] text-gold-dark" />
              <span>{item.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
