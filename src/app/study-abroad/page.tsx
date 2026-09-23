import type { Metadata } from "next";
import { PageHero } from "@/components/service/ServicePage";
import { CounsellingBand, ServiceIndex } from "@/components/sections/HomeSections";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Study Abroad",
  description: "MBBS, BTech, MTech, MBA and other professional courses abroad — guided from counselling to landing.",
};

export default function StudyAbroadPage() {
  return (
    <>
      <PageHero
        title="Five ways to study abroad."
        summary="Whichever degree you're aiming for, the route is the same: an honest conversation, a shortlist that fits, and a team beside you until you land."
        image="/images/university-architecture.jpg"
        imageAlt="A historic university building at sunset"
        actions={
          <Button href="/contact#counselling" variant="gold" size="lg" arrow>
            Book free counselling
          </Button>
        }
      />
      <ServiceIndex
        academicOnly
        title="Choose your degree."
        lead="Each route has its own eligibility, timeline and funding. Open the one you're considering, or start with a free session."
      />
      <CounsellingBand />
    </>
  );
}
