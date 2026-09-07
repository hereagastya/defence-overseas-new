import type { IconProps } from "./types";

export function DocumentIcon({ className, strokeWidth = 1.6, ...props }: IconProps) {
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
      <rect x="3" y="4" width="18" height="14" rx="1" />
      <path d="M3 9h18M9 4v5" />
    </svg>
  );
}
