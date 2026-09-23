import { HomeHero } from "@/components/sections/HomeHero";
import {
  ClaimsSentence,
  CounsellingBand,
  DefenceBand,
  DestinationArches,
  ServiceIndex,
  Testimonials,
} from "@/components/sections/HomeSections";
import { RouteSteps } from "@/components/sections/RouteSteps";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Faq } from "@/components/ui/Faq";
import { H2, Lead } from "@/components/ui/type";
import { HOME_FAQS, JOURNEY } from "@/content/home";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServiceIndex />
      <CounsellingBand />

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <Reveal>
              <H2>From first call to first day, we stay on the route with you.</H2>
            </Reveal>
            <Reveal delay={100}>
              <Lead>Five stages. At every one, a real person who knows where you are and what comes next.</Lead>
            </Reveal>
          </div>
          <div className="mt-16">
            <RouteSteps steps={JOURNEY} />
          </div>
        </Container>
      </section>

      <DestinationArches />
      <ClaimsSentence />
      <DefenceBand />
      <Testimonials />

      <section className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <H2>Questions, answered plainly.</H2>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={HOME_FAQS} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
