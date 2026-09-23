export type FieldType = "text" | "tel" | "email" | "number" | "select" | "textarea" | "pills";

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: readonly string[];
  /** Full-width on the two-column grid. */
  wide?: boolean;
}

export type FormKind =
  | "counselling"
  | "brochure"
  | "eligibility"
  | "demo"
  | "callback"
  | "roadmap"
  | "contact";

export interface FormDef {
  kind: FormKind;
  title: string;
  blurb: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  fields: FieldDef[];
}

export const COURSES = [
  "MBBS Abroad",
  "BTech Abroad",
  "MTech Abroad",
  "MBA Abroad",
  "Other professional course",
  "German language training",
  "Ex-servicemen / Agniveer programme",
] as const;

export const COUNTRIES = ["Germany", "Poland", "Georgia", "Switzerland", "Belgium", "Sweden", "Not sure yet"] as const;

const NAME: FieldDef = { name: "name", label: "Full name", type: "text", required: true, placeholder: "Your name" };
const PHONE: FieldDef = { name: "phone", label: "Mobile number", type: "tel", required: true, placeholder: "10-digit mobile number" };
const EMAIL: FieldDef = { name: "email", label: "Email", type: "email", placeholder: "you@example.com" };

export const FORMS: Record<FormKind, FormDef> = {
  counselling: {
    kind: "counselling",
    title: "Book free counselling",
    blurb: "Tell us where you are. A counsellor calls you back to plan the next step.",
    submitLabel: "Book my free session",
    successTitle: "Request received",
    successBody: "A Defence Overseas counsellor will call you on the number you shared. Keep your latest marksheets handy.",
    fields: [
      NAME,
      PHONE,
      EMAIL,
      { name: "course", label: "I'm interested in", type: "select", required: true, options: COURSES },
      { name: "country", label: "Preferred destination", type: "select", options: COUNTRIES },
      { name: "message", label: "Anything we should know?", type: "textarea", wide: true, placeholder: "Your marks, budget, timeline — whatever helps." },
    ],
  },
  brochure: {
    kind: "brochure",
    title: "Get the brochure",
    blurb: "Fees, eligibility and the full process, sent to you directly.",
    submitLabel: "Send me the brochure",
    successTitle: "Brochure on its way",
    successBody: "We'll send the brochure to your WhatsApp and email shortly. A counsellor may follow up to answer questions.",
    fields: [NAME, PHONE, EMAIL, { name: "course", label: "Course", type: "select", required: true, options: COURSES }],
  },
  eligibility: {
    kind: "eligibility",
    title: "Check my eligibility",
    blurb: "Share your profile and we'll tell you honestly what fits.",
    submitLabel: "Check my eligibility",
    successTitle: "Profile received",
    successBody: "A counsellor will review your profile and call you with an honest read on your options.",
    fields: [
      NAME,
      PHONE,
      EMAIL,
      { name: "course", label: "Course", type: "select", required: true, options: COURSES },
      { name: "qualification", label: "Latest qualification", type: "text", placeholder: "e.g. 12th PCM, B.E. Mechanical" },
      { name: "score", label: "Score / aggregate", type: "text", placeholder: "e.g. 78%" },
    ],
  },
  demo: {
    kind: "demo",
    title: "Book a free demo class",
    blurb: "Sit in on a live German class before you decide anything.",
    submitLabel: "Reserve my demo class",
    successTitle: "Demo class requested",
    successBody: "The Toss International team will confirm your demo class slot on the number you shared.",
    fields: [
      NAME,
      PHONE,
      EMAIL,
      {
        name: "level",
        label: "Where are you with German?",
        type: "select",
        options: ["Complete beginner", "A1", "A2", "B1", "B2", "C1 or above"],
      },
      { name: "goal", label: "Why German?", type: "select", options: ["Study in Germany", "Work / migration", "Personal interest", "Not sure yet"] },
      {
        name: "slot",
        label: "Preferred time",
        type: "pills",
        wide: true,
        options: ["Morning", "Afternoon", "Evening", "Weekend"],
      },
    ],
  },
  callback: {
    kind: "callback",
    title: "Request a call back",
    blurb: "Leave your number and the Toss team rings you.",
    submitLabel: "Call me back",
    successTitle: "We'll call you",
    successBody: "The Toss International team will call you back at your preferred time.",
    fields: [
      NAME,
      PHONE,
      { name: "slot", label: "Best time to call", type: "pills", wide: true, options: ["Morning", "Afternoon", "Evening"] },
    ],
  },
  roadmap: {
    kind: "roadmap",
    title: "Get your personalised roadmap",
    blurb: "Your service record shapes what's possible. Tell us about it and we'll map the route.",
    submitLabel: "Build my roadmap",
    successTitle: "Roadmap requested",
    successBody: "A counsellor from our ex-servicemen desk will review your service details and call you.",
    fields: [
      {
        name: "applicant",
        label: "This is for",
        type: "pills",
        wide: true,
        required: true,
        options: ["Ex-serviceman", "Agniveer", "Family member"],
      },
      NAME,
      PHONE,
      EMAIL,
      { name: "rank", label: "Rank", type: "text", placeholder: "e.g. Havildar, Lt Cdr" },
      { name: "years", label: "Total years of service", type: "number", placeholder: "e.g. 15" },
      {
        name: "qualification",
        label: "Educational qualification",
        type: "select",
        options: ["10th", "12th", "Diploma", "Graduate", "Post-graduate", "Other"],
      },
      { name: "field", label: "Preferred field for higher study", type: "text", placeholder: "e.g. Logistics, IT, Management" },
      {
        name: "jobInterest",
        label: "Interested in a job abroad?",
        type: "pills",
        wide: true,
        options: ["Yes", "Exploring", "Not right now"],
      },
    ],
  },
  contact: {
    kind: "contact",
    title: "Send us a message",
    blurb: "Questions about a course, a country or a process — ask away.",
    submitLabel: "Send message",
    successTitle: "Message received",
    successBody: "Thanks for writing. Someone from the team will reply on the number or email you shared.",
    fields: [NAME, PHONE, EMAIL, { name: "message", label: "Your message", type: "textarea", wide: true, required: true, placeholder: "How can we help?" }],
  },
};
