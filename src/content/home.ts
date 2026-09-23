import type { FaqItem } from "@/components/ui/Faq";

export interface Destination {
  country: string;
  image: string;
  alt: string;
  /** Vertical focus of the crop inside the arch. */
  position?: string;
}

/** Countries named in the business briefing for MBBS study. */
export const DESTINATIONS: Destination[] = [
  { country: "Germany", image: "/images/dest-germany.jpg", alt: "Heidelberg castle and old bridge glowing at night", position: "40% 50%" },
  { country: "Poland", image: "/images/dest-poland.jpg", alt: "Kraków's Main Market Square and Cloth Hall from above", position: "42% 50%" },
  { country: "Georgia", image: "/images/dest-georgia.jpg", alt: "Tbilisi at dusk with the Peace Bridge lit", position: "40% 50%" },
  { country: "Switzerland", image: "/images/dest-switzerland.jpg", alt: "The Matterhorn glowing at sunrise", position: "56% 50%" },
  { country: "Belgium", image: "/images/dest-belgium.jpg", alt: "Brussels Grand Place at twilight", position: "50% 50%" },
  { country: "Sweden", image: "/images/dest-sweden.jpg", alt: "Stockholm at sunset", position: "62% 50%" },
];

export const JOURNEY = [
  { title: "Free counselling", text: "One honest conversation about your marks, budget and goals." },
  { title: "Shortlist", text: "Courses and universities that genuinely fit — not a generic list." },
  { title: "Apply", text: "Applications, documents and essays prepared and submitted with you." },
  { title: "Offer & visa", text: "Offer letters, funding proof and the visa process, one step at a time." },
  { title: "Fly out", text: "Travel, arrival and settling in — and we're still on the phone." },
];

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

/**
 * PLACEHOLDERS. Replace with real, consented student words before launch —
 * the design is built to carry three to six.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Replace this with a real student's words about their counselling, admission or visa experience.",
    name: "Student name",
    detail: "Course · Country",
  },
  {
    quote: "A parent's perspective works well here — what worried them before, and what changed.",
    name: "Parent name",
    detail: "Child's course · Country",
  },
  {
    quote: "For the ex-servicemen line, a veteran's own account of the roadmap and the move abroad.",
    name: "Veteran name",
    detail: "Rank · Programme",
  },
];

export const HOME_FAQS: FaqItem[] = [
  {
    q: "Is the first counselling session really free?",
    a: "Yes. Counselling is free. You get an honest view of your options before you commit to anything.",
  },
  {
    q: "Which courses and countries do you cover?",
    a: "MBBS, BTech, MTech, MBA and other professional courses, with Europe as our primary destination. We also run German language training and a dedicated programme for ex-servicemen and Agniveers.",
  },
  {
    q: "What does your support actually include?",
    a: "Counselling, university shortlisting, applications, offer letters, visa paperwork, guidance on loans and scholarships, accommodation, and support after you land.",
  },
  {
    q: "I'm from a defence family. Is there something specific for me?",
    a: "Yes. Our ex-servicemen programme offers personalised mentorship, job placement support abroad, higher-education guidance and family assistance. It starts with a short profile so we can map a roadmap for you.",
  },
  {
    q: "How do I get started?",
    a: "Book a free session using the form on this page, or call or WhatsApp us. A counsellor will take it from there.",
  },
];
