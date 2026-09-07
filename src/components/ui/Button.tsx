import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "outline" | "outline-light" | "dark";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

const BASE =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold transition-all duration-[250ms] ease-in-out [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:shrink-0 [&_svg]:fill-current";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-br from-gold-light via-gold to-gold-dark text-ink shadow-[0_12px_30px_-10px_rgba(198,161,91,0.55)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_rgba(198,161,91,0.65)] active:translate-y-0",
  outline:
    "border-[1.5px] border-ink/[0.18] text-ink hover:-translate-y-0.5 hover:border-ink hover:bg-ink/5",
  "outline-light":
    "border-[1.5px] border-cream/35 text-cream hover:-translate-y-0.5 hover:border-cream hover:bg-cream/10",
  dark: "bg-ink text-cream hover:-translate-y-0.5 hover:bg-ink-2",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-5 py-[10px] text-sm",
  md: "px-[26px] py-[14px] text-[15px]",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(BASE, VARIANT_STYLES[variant], SIZE_STYLES[size], className)} {...props}>
      {children}
    </a>
  );
}
