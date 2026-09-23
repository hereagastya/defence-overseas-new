/**
 * Site-wide facts. Anything marked PLACEHOLDER is awaiting real details from
 * Defence Overseas — replace here and every page updates.
 */
export const SITE = {
  name: "Defence Overseas",
  tagline: "Your gateway to global opportunities",
  url: "https://defenceoverseas.com",
  city: "Pune, Maharashtra",
  // Social handles below are still placeholders — replace with the real profile URLs.
  addressLines: ["Neco Garden Road, Viman Nagar", "Pune, Maharashtra 411014, India"],
  hours: "Mon – Sat, 10:00 – 19:00",
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
} as const;

/**
 * Client-supplied figures from the business briefing. Not independently
 * verified — confirm each one before it is published widely. The briefing's
 * "success rate" claim is deliberately omitted until it can be substantiated.
 */
export const CLAIMS = {
  years: "10+",
  students: "5,000+",
  universities: "50+",
  countries: "15+",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const STUDY_NAV: (NavItem & { blurb: string })[] = [
  { label: "MBBS Abroad", href: "/study-abroad/mbbs", blurb: "Medicine in Europe, start to finish" },
  { label: "BTech Abroad", href: "/study-abroad/btech", blurb: "Undergraduate engineering" },
  { label: "MTech Abroad", href: "/study-abroad/mtech", blurb: "Research-led postgraduate study" },
  { label: "MBA Abroad", href: "/study-abroad/mba", blurb: "Top-tier business schools" },
  { label: "Other Courses", href: "/study-abroad/other-courses", blurb: "Nursing, data, design and more" },
];

export const MAIN_NAV: NavItem[] = [
  { label: "Learn German", href: "/learn-german" },
  { label: "Ex-Servicemen", href: "/ex-servicemen" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_GROUPS: { title: string; links: NavItem[] }[] = [
  { title: "Study abroad", links: STUDY_NAV },
  {
    title: "Programmes",
    links: [
      { label: "Learn German (Toss International)", href: "/learn-german" },
      { label: "Ex-Servicemen & Agniveers", href: "/ex-servicemen" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book free counselling", href: "/contact#counselling" },
    ],
  },
];
