import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* One drawing language: 24px grid, 1.75 stroke, round caps and joins. */
function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Stroke>
);

export const ArrowUpRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Stroke>
);

export const Check = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Stroke>
);

export const Plus = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 5v14M5 12h14" />
  </Stroke>
);

export const Minus = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 12h14" />
  </Stroke>
);

export const Chevron = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m6 9 6 6 6-6" />
  </Stroke>
);

export const MenuIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 8h16M4 16h16" />
  </Stroke>
);

export const CloseIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Stroke>
);

export const PhoneIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M6.6 3.5h2.7l1.4 3.9-1.9 1.3a11 11 0 0 0 5.5 5.5l1.3-1.9 3.9 1.4v2.7a1.8 1.8 0 0 1-1.9 1.8A14.8 14.8 0 0 1 4.8 5.4 1.8 1.8 0 0 1 6.6 3.5Z" />
  </Stroke>
);

export const MailIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
  </Stroke>
);

export const PinIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 20.5s6-5.2 6-10.2a6 6 0 1 0-12 0c0 5 6 10.2 6 10.2Z" />
    <circle cx="12" cy="10.2" r="2.1" />
  </Stroke>
);

export const ClockIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Stroke>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.2 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8.9-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3a.4.4 0 0 0 0-.4c-.1-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.6 2.6 0 0 0-.8 1.9 4.5 4.5 0 0 0 .9 2.4 10 10 0 0 0 3.9 3.4c1.4.6 1.9.6 2.6.5a2.2 2.2 0 0 0 1.4-1 1.8 1.8 0 0 0 .1-1c-.1-.1-.2-.2-.4-.3Z" />
  </svg>
);

/* Subject marks — used on service rows and pages. */
export const StethoscopeIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M6 3.5v6a4 4 0 0 0 8 0v-6M4.5 3.5H8M12 3.5h3.5" />
    <path d="M10 13.5v1.5a4.5 4.5 0 0 0 9 0v-2" />
    <circle cx="19" cy="11.2" r="1.7" />
  </Stroke>
);

export const CogIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
  </Stroke>
);

export const FlaskIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M9.5 3.5h5M10.5 3.5v5.2L5 18a1.6 1.6 0 0 0 1.4 2.5h11.2A1.6 1.6 0 0 0 19 18l-5.5-9.3V3.5" />
    <path d="M7.8 14.5h8.4" />
  </Stroke>
);

export const BriefcaseIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
    <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M3.5 12.5h17" />
  </Stroke>
);

export const CompassIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </Stroke>
);

export const BookIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 4.5h10.5A2.5 2.5 0 0 1 18 7v12.5H7.5A2.5 2.5 0 0 1 5 17V4.5Z" />
    <path d="M5 17a2.5 2.5 0 0 1 2.5-2.5H18" />
  </Stroke>
);

export const ChatIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16.5h-6l-4.5 3.5v-3.5H5A1.5 1.5 0 0 1 3.5 15V7A1.5 1.5 0 0 1 5 5.5Z" />
  </Stroke>
);

export const StarIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m12 4 2.4 5 5.4.7-4 3.7 1 5.4L12 16.2l-4.8 2.6 1-5.4-4-3.7 5.4-.7L12 4Z" />
  </Stroke>
);

export const ShieldIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 3.5 5 6v5.5c0 4.2 2.8 7 7 9 4.2-2 7-4.8 7-9V6l-7-2.5Z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </Stroke>
);
