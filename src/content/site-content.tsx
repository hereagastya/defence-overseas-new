import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons/types";
import { MortarboardIcon } from "@/components/icons/MortarboardIcon";
import { DocumentIcon } from "@/components/icons/DocumentIcon";
import { PennantIcon } from "@/components/icons/PennantIcon";
import { IdCardIcon } from "@/components/icons/IdCardIcon";
import { PersonIcon } from "@/components/icons/PersonIcon";
import { GlobeLineIcon } from "@/components/icons/GlobeLineIcon";
import { FocusIcon } from "@/components/icons/FocusIcon";

type Icon = ComponentType<IconProps>;

export interface TrustItem {
  label: string;
  icon: Icon;
}

export const TRUST_ITEMS: TrustItem[] = [
  { label: "Experienced Counsellors", icon: MortarboardIcon },
  { label: "University & Programme Guidance", icon: DocumentIcon },
  { label: "Application & Admission Support", icon: PennantIcon },
  { label: "Visa Assistance", icon: IdCardIcon },
];

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  { number: "01", title: "Explore", description: "Understand your options across countries, courses and universities." },
  { number: "02", title: "Choose", description: "Shortlist programmes that genuinely fit your goals and profile." },
  { number: "03", title: "Apply", description: "Put together applications that represent you well." },
  { number: "04", title: "Get Admitted", description: "Navigate offers, decisions and next steps with support." },
  { number: "05", title: "Prepare", description: "Work through visas, documentation and pre-departure planning." },
  { number: "06", title: "Begin", description: "Start your international education journey." },
];

export interface WhyUsItem {
  icon: Icon;
  title: string;
  description: string;
}

/**
 * Exactly 5 items by design: the desktop grid centers the 4th and 5th
 * cards beneath the first three (see WhyUs.tsx). Adjust that layout
 * logic if this list ever needs a different length.
 */
export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    icon: PersonIcon,
    title: "Personalised Guidance",
    description: "Recommendations shaped by your goals, academic profile and budget — not a one-size-fits-all list.",
  },
  {
    icon: GlobeLineIcon,
    title: "Clarity on Your Options",
    description: "Understand universities, courses and countries without wading through it all on your own.",
  },
  {
    icon: PennantIcon,
    title: "Application & Admission Support",
    description: "Get support putting together applications and understanding admission decisions.",
  },
  {
    icon: IdCardIcon,
    title: "Visa & Process Guidance",
    description: "Guidance through documentation and visa processes, explained one step at a time.",
  },
  {
    icon: FocusIcon,
    title: "Support Throughout",
    description: "From your first conversation to departure, there's always someone to ask.",
  },
];

export const HERO_MICRO_ITEMS: string[] = [
  "Universities & programmes",
  "Applications & admissions",
  "Visa guidance",
];
