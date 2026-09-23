import { Arch, Stamp } from "@/components/ui/decor";
import { Button } from "@/components/ui/Button";
import { PlanRoute } from "./PlanRoute";
import { getWhatsAppLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/icons";

export function HomeHero() {
  return (
    <section className="px-3 pb-16 pt-3 sm:px-5 lg:pb-20">
      <div className="on-dark relative mx-auto max-w-[1400px] rounded-[36px] bg-forest text-on-forest sm:rounded-[44px]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-10 pt-12 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-6 lg:pb-32 lg:pt-16">
          <div className="animate-rise">
            <h1 className="text-[clamp(44px,6.2vw,88px)] font-bold leading-[0.94] tracking-[-0.035em]">
              Your way abroad, <span className="text-gold">planned like a mission.</span>
            </h1>
            <p className="mt-7 max-w-[52ch] text-[clamp(17px,1.5vw,20px)] leading-relaxed text-on-forest-muted">
              Defence Overseas guides Indian students, and the armed-forces community, from the first counselling call to the
              first day on campus — MBBS, engineering, MBA, German language and more.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact#counselling" variant="gold" size="lg" arrow>
                Book free counselling
              </Button>
              <Button href={getWhatsAppLink()} variant="outline-light" size="lg">
                <WhatsAppIcon className="lead" />
                WhatsApp us
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] animate-rise [animation-delay:150ms] lg:max-w-none">
            <Arch
              src="/images/hero-campus.jpg"
              alt="A student walking across a university campus in autumn"
              sizes="(min-width: 1024px) 34vw, 80vw"
              priority
              position="62% 50%"
              className="aspect-[4/5] w-full"
            />
            <div className="absolute -bottom-7 -left-4 h-[132px] w-[132px] animate-float rounded-full bg-forest sm:-left-8 sm:h-[150px] sm:w-[150px]">
              <Stamp tone="gold" />
            </div>
          </div>
        </div>

        <div className="px-4 pb-6 sm:px-8 lg:absolute lg:inset-x-0 lg:bottom-0 lg:translate-y-1/2 lg:pb-0">
          <PlanRoute />
        </div>
      </div>
    </section>
  );
}

