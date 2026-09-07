import type { IconProps } from "./types";

export function PennantIcon({ className, strokeWidth = 1.6, ...props }: IconProps) {
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
      <path d="M4 4h13l3 4-3 4H4z" />
      <path d="M4 12v8" />
    </svg>
  );
}
