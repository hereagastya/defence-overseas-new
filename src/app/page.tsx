import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Journey } from "@/components/sections/Journey";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[999] focus:rounded-br-lg focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Journey />
        <WhyUs />
        <FinalCta />
      </main>

      <Footer />
      <StickyMobileCta />
    </>
  );
}
