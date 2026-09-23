import type { ComponentType, SVGProps } from "react";
import type { FaqItem } from "@/components/ui/Faq";
import type { FormKind } from "@/content/forms";
import { BookIcon, BriefcaseIcon, CogIcon, CompassIcon, FlaskIcon, ShieldIcon, StethoscopeIcon } from "@/components/ui/icons";

export interface Step {
  title: string;
  text: string;
}

export interface Point {
  title: string;
  text: string;
}

export interface ServiceDef {
  slug: string;
  href: string;
  title: string;
  /** Short line used in lists and menus. */
  blurb: string;
  headline: string;
  summary: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: string;
  imageAlt: string;
  tone: "forest" | "maroon";
  glance: { label: string; value: string }[];
  whyTitle: string;
  why: Point[];
  eligibility: string[];
  eligibilityNote?: string;
  eligibilityCta: string;
  stepsTitle: string;
  steps: Step[];
  faqs: FaqItem[];
  formKind: FormKind;
  formTitle: string;
  formBlurb: string;
  formCourse: string;
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "mbbs",
    href: "/study-abroad/mbbs",
    title: "MBBS Abroad",
    blurb: "Six-year medical degrees in Europe, with support from the first call to landing day.",
    headline: "MBBS in Europe — a strategic choice for Indian students.",
    summary:
      "Medicine is a long road. We walk the whole of it with you — free counselling, admission, visa, loans and scholarships guidance, accommodation and the paperwork in between.",
    icon: StethoscopeIcon,
    image: "/images/university-library.jpg",
    imageAlt: "A grand university library reading room",
    tone: "forest",
    glance: [
      { label: "Programme", value: "Six years, ending in a full internship year" },
      { label: "Entry", value: "10+2 with Physics, Chemistry, Biology" },
      { label: "NEET", value: "Required if you plan to practise in India" },
      { label: "Support", value: "Counselling to accommodation, end to end" },
    ],
    whyTitle: "Why students choose Europe for medicine",
    why: [
      { title: "Recognised degrees", text: "Universities recognised worldwide — and we help you verify each one before you commit." },
      { title: "A familiar feel", text: "Welcoming, culturally comfortable study environments for students far from home." },
      { title: "Licensing preparation", text: "FMGE and NExT training support for students who plan to return and practise in India." },
      { title: "A sensible budget", text: "Often more affordable overall than private medical colleges in India, with loans and scholarships guidance." },
    ],
    eligibility: [
      "10+2 with Physics, Chemistry and Biology",
      "Minimum age as set by your destination country",
      "English-medium schooling preferred",
      "NEET qualification, if you intend to practise in India",
    ],
    eligibilityCta: "Check my eligibility",
    stepsTitle: "From first call to first lecture",
    steps: [
      { title: "Free counselling", text: "We understand your marks, budget and goals, and explain your real options." },
      { title: "University & admission", text: "A shortlist that fits you, then a complete admission application." },
      { title: "Offer & visa paperwork", text: "Documents, offer letter and the visa process handled with you." },
      { title: "Money & housing", text: "Loans and scholarships guidance, plus secure accommodation." },
      { title: "Fly out & settle in", text: "Travel planning and support through those first weeks abroad." },
    ],
    faqs: [
      { q: "Is NEET compulsory?", a: "If you plan to practise in India after your degree, NEET qualification is required. Your counsellor will confirm the rule that applies to your target country and timeline." },
      { q: "How long is the programme?", a: "MBBS abroad is typically a six-year programme: pre-clinical years, clinical rotations, and a final internship year." },
      { q: "Do you help with visas, loans and accommodation?", a: "Yes. Support covers the visa process and paperwork, guidance on education loans and scholarships, and secure accommodation." },
      { q: "How do I know a university is recognised?", a: "We help you check a university's recognition, and your eligibility to practise afterwards, before you commit. Bring your questions to the free session." },
      { q: "What does the first counselling session cost?", a: "Nothing. Counselling is free, and you'll get an honest view of your options before any commitment." },
    ],
    formKind: "brochure",
    formTitle: "Get the MBBS brochure",
    formBlurb: "Fees, eligibility and the full admission process, sent to you directly.",
    formCourse: "MBBS Abroad",
  },
  {
    slug: "btech",
    href: "/study-abroad/btech",
    title: "BTech Abroad",
    blurb: "Undergraduate engineering with global recognition, real labs and industry exposure.",
    headline: "Engineering degrees that travel with you.",
    summary:
      "A guided four-step journey from application to departure — with honest advice on which programmes actually suit your profile.",
    icon: CogIcon,
    image: "/images/university-architecture.jpg",
    imageAlt: "A historic university building at sunset",
    tone: "forest",
    glance: [
      { label: "Level", value: "Undergraduate engineering" },
      { label: "Entry", value: "10+2 with Physics, Chemistry, Mathematics" },
      { label: "Language", value: "English proficiency test usually required" },
      { label: "Process", value: "Four steps, apply to fly-out" },
    ],
    whyTitle: "What a BTech abroad gives you",
    why: [
      { title: "Global recognition", text: "Degrees that carry weight with employers and universities around the world." },
      { title: "Industry connections", text: "Programmes closely tied to the industries you'll work in." },
      { title: "Research and labs", text: "Access to advanced laboratories and research-led teaching." },
      { title: "Student life", text: "An international campus, internships and a wider network from day one." },
    ],
    eligibility: [
      "10+2 with Physics, Chemistry and Mathematics",
      "A minimum aggregate, set by each university",
      "English proficiency test scores (accepted tests vary by university)",
    ],
    eligibilityCta: "Check my eligibility",
    stepsTitle: "Four steps to your first semester",
    steps: [
      { title: "Apply online", text: "We shortlist programmes and prepare your applications." },
      { title: "Receive your offer", text: "Your offer letter arrives; we help you compare and accept." },
      { title: "Visa process", text: "Documents, funds proof and the visa application, step by step." },
      { title: "Fly out", text: "Travel, arrival and settling in, with support on the ground." },
    ],
    faqs: [
      { q: "What do I need to apply?", a: "Generally 10+2 with Physics, Chemistry and Mathematics, a minimum aggregate set by each university, and proof of English proficiency." },
      { q: "Are scholarships available?", a: "Many universities offer merit-based scholarships. We guide you on the ones you may qualify for and how to apply." },
      { q: "Can I work on internships or placements?", a: "Many programmes include internship and placement opportunities with technology companies. Details vary by university and country." },
    ],
    formKind: "eligibility",
    formTitle: "Check my BTech eligibility",
    formBlurb: "Share your profile and we'll tell you honestly what fits.",
    formCourse: "BTech Abroad",
  },
  {
    slug: "mtech",
    href: "/study-abroad/mtech",
    title: "MTech Abroad",
    blurb: "Postgraduate engineering built around research, funding and a strong statement of purpose.",
    headline: "Go deeper: postgraduate engineering, built around research.",
    summary:
      "A master's abroad is won on the strength of your profile and your story. We help you shape both — from shortlisting to the statement of purpose to funding.",
    icon: FlaskIcon,
    image: "/images/hero-campus.jpg",
    imageAlt: "A student walking across a university campus in autumn",
    tone: "forest",
    glance: [
      { label: "Level", value: "Postgraduate engineering" },
      { label: "Focus", value: "Research and specialisation" },
      { label: "Key documents", value: "Statement of purpose, transcripts, references" },
      { label: "Process", value: "Five stages, evaluation to departure" },
    ],
    whyTitle: "What sets an MTech abroad apart",
    why: [
      { title: "Research ambition", text: "Work alongside active research groups on problems that matter." },
      { title: "A sharper SOP", text: "We help you craft a statement of purpose that reads like you, not a template." },
      { title: "Funding guidance", text: "Scholarship and funding options mapped early, so cost never surprises you." },
      { title: "Global network", text: "Labs, faculty and peers that open doors well beyond graduation." },
    ],
    eligibility: [
      "A relevant undergraduate engineering degree",
      "Strong academic record in your discipline",
      "English proficiency test scores",
      "A clear statement of purpose and supporting documents",
    ],
    eligibilityCta: "Book a profile evaluation",
    stepsTitle: "Five stages, one plan",
    steps: [
      { title: "Profile evaluation", text: "We review your record and shortlist universities that fit your goals." },
      { title: "Application & SOP", text: "Applications assembled, with your statement of purpose crafted properly." },
      { title: "Offer letter", text: "Compare offers and choose with a clear head." },
      { title: "Visa & funding", text: "Visa process and scholarship or funding applications, together." },
      { title: "Departure", text: "Pre-departure preparation and support as you land." },
    ],
    faqs: [
      { q: "How important is the statement of purpose?", a: "Very. For postgraduate admissions it's often the clearest way to show your research direction and motivation. We work through drafts with you." },
      { q: "Can I get funding for an MTech abroad?", a: "Scholarships and funding are available at many universities. We map the options early and guide you through applications." },
    ],
    formKind: "eligibility",
    formTitle: "Book a profile evaluation",
    formBlurb: "Tell us about your degree and goals. We'll tell you where you stand.",
    formCourse: "MTech Abroad",
  },
  {
    slug: "mba",
    href: "/study-abroad/mba",
    title: "MBA Abroad",
    blurb: "Top business schools, with alumni mentoring, interview preparation and scholarship support.",
    headline: "An MBA abroad, planned stage by stage.",
    summary:
      "Our premium line — profile assessment, school shortlisting, essays, interviews and scholarships, with alumni mentoring at admits to leading business schools.",
    icon: BriefcaseIcon,
    image: "/images/dest-switzerland.jpg",
    imageAlt: "The Matterhorn glowing at sunrise above an alpine valley",
    tone: "maroon",
    glance: [
      { label: "Level", value: "Postgraduate business" },
      { label: "Typical profile", value: "Graduate with some work experience" },
      { label: "Tests", value: "GMAT or GRE scores" },
      { label: "Process", value: "Five admissions stages" },
    ],
    whyTitle: "Why an MBA abroad",
    why: [
      { title: "Career acceleration", text: "A step-change in role, industry or geography." },
      { title: "Global recruiters", text: "Access to employers who recruit across borders." },
      { title: "Leadership development", text: "Programmes built to grow how you lead, not just what you know." },
      { title: "Scholarship return", text: "Support that improves the return on a significant investment." },
    ],
    eligibility: [
      "A bachelor's degree",
      "Typically a few years of work experience",
      "GMAT or GRE score",
      "English proficiency scores",
    ],
    eligibilityCta: "Book a profile assessment",
    stepsTitle: "The five-stage admissions process",
    steps: [
      { title: "Profile assessment", text: "An honest look at your background, goals and competitiveness." },
      { title: "School shortlisting", text: "A balanced list of business schools, matched to your profile." },
      { title: "Application & essays", text: "Applications and essays shaped to tell your story clearly." },
      { title: "Interview preparation", text: "Mock interviews and coaching before the real thing." },
      { title: "Scholarship support", text: "Applications for scholarships and funding, alongside admission." },
    ],
    faqs: [
      { q: "Do I need work experience?", a: "Most top programmes expect a few years of work experience. Your counsellor will tell you how your profile compares for the schools you have in mind." },
      { q: "Do I need a GMAT or GRE score?", a: "Most business schools ask for one of the two. We'll confirm requirements school by school." },
    ],
    formKind: "eligibility",
    formTitle: "Book a profile assessment",
    formBlurb: "Share your background and we'll map your MBA route.",
    formCourse: "MBA Abroad",
  },
  {
    slug: "other-courses",
    href: "/study-abroad/other-courses",
    title: "Other Courses",
    blurb: "Nursing, data science, pharmacy, design, hospitality and more.",
    headline: "Not on the list? There's probably a route abroad.",
    summary:
      "Plenty of good careers begin outside the four headline degrees. If it's a professional course, ask us — we'll tell you honestly where it can take you.",
    icon: CompassIcon,
    image: "/images/dest-sweden.jpg",
    imageAlt: "Stockholm at sunset with the old town on the water",
    tone: "forest",
    glance: [
      { label: "Fields", value: "Health, technology, design, business, hospitality" },
      { label: "Levels", value: "Undergraduate and postgraduate" },
      { label: "Support", value: "Shortlisting, applications, visa, funding" },
      { label: "Start", value: "Free counselling" },
    ],
    whyTitle: "Why look beyond the usual degrees",
    why: [
      { title: "Recognised worldwide", text: "Qualifications valued by employers across countries." },
      { title: "Career acceleration", text: "Routes into growing fields, faster than you might expect." },
      { title: "Research and technology", text: "Access to labs, equipment and expertise that may not exist at home." },
      { title: "International networks", text: "Peers and mentors who become your professional circle." },
    ],
    eligibility: [
      "Requirements vary by course and country",
      "Your qualifications and marks to date",
      "English proficiency, where the course is taught in English",
    ],
    eligibilityNote: "Tell us the course you have in mind and we'll confirm exactly what it needs.",
    eligibilityCta: "Ask about a course",
    stepsTitle: "How we work on any course",
    steps: [
      { title: "Understand your goal", text: "What you want to study, and what you want it to lead to." },
      { title: "Match programmes", text: "Universities and courses that genuinely fit your profile." },
      { title: "Apply & visa", text: "Applications, offer letters and visa paperwork, handled with you." },
      { title: "Depart", text: "Funding, travel and settling-in support." },
    ],
    faqs: [
      { q: "Which courses do you cover?", a: "Nursing, data science and AI, pharmacy, biotechnology, hospitality and tourism, specialised engineering, design and architecture, and more. If it's not listed, ask." },
      { q: "How do I get started?", a: "Book a free counselling session. Tell us the course you're thinking about and we'll take it from there." },
    ],
    formKind: "counselling",
    formTitle: "Tell us the course you want",
    formBlurb: "A counsellor will call and explain your real options.",
    formCourse: "Other professional course",
  },
];

export function getService(slug: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** The two non-degree lines, listed alongside the academic ones on the home page. */
export const SPECIAL_LINES = [
  {
    title: "Learn German",
    href: "/learn-german",
    blurb: "A1 to C2 with Goethe-certified trainers, live classes and free placement support.",
    icon: BookIcon,
    brand: "Toss International",
  },
  {
    title: "Ex-Servicemen & Agniveers",
    href: "/ex-servicemen",
    blurb: "Mentorship, jobs abroad and higher education — for those who served, and their families.",
    icon: ShieldIcon,
    brand: "Defence Overseas",
  },
] as const;

/* MBBS-only detail */
export const MBBS_PHASES = [
  { title: "Pre-clinical years", text: "The foundations: anatomy, physiology and the basic medical sciences." },
  { title: "Clinical rotations", text: "Hospital-based training across specialities, learning from patients." },
  { title: "Final internship year", text: "Supervised practice that turns a student into a doctor." },
];

export const MBBS_DOCUMENTS = [
  "Passport, valid for the length of your studies",
  "Class 10 and 12 marksheets and certificates",
  "NEET scorecard, if applicable",
  "Passport-size photographs",
  "Any additional documents your chosen university asks for",
];

export const MBBS_CAREERS = [
  "General practitioner",
  "Hospitalist",
  "Specialist physician or surgeon",
  "Medical researcher",
  "Public health professional",
  "Practising internationally",
];

export const MBBS_COUNTRIES = ["Germany", "Poland", "Georgia", "Switzerland", "Belgium", "Sweden"];
