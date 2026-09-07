import type { IconProps } from "./types";

export function MortarboardIcon({ className, strokeWidth = 1.6, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M4 10v6c0 1.5 3.5 4 8 4s8-2.5 8-4v-6" />
    </svg>
  );
}
