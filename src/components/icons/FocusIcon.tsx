import type { IconProps } from "./types";

export function FocusIcon({ className, strokeWidth = 1.5, ...props }: IconProps) {
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
      <path d="M12 2v20M2 12h20" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
