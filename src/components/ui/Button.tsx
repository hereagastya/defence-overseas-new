import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";

export type ButtonVariant = "gold" | "forest" | "maroon" | "outline" | "outline-light";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  children: ReactNode;
}

const BASE =
  "group/btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold tracking-[-0.005em] transition-[transform,background-color,color,border-color] duration-300 ease-[var(--ease-out-expo)] active:scale-[0.98] [&_svg.lead]:h-[1.15em] [&_svg.lead]:w-[1.15em]";

export const buttonVariants: Record<ButtonVariant, string> = {
  gold: "bg-gold text-forest-deep hover:bg-gold-pale",
  forest: "bg-forest text-on-forest hover:bg-forest-mid",
  maroon: "bg-maroon text-white hover:bg-maroon-deep",
  outline: "border-[1.5px] border-forest/30 text-forest hover:border-forest hover:bg-forest hover:text-on-forest",
  "outline-light": "border-[1.5px] border-on-forest/40 text-on-forest hover:border-gold hover:bg-gold hover:text-forest-deep",
};

export const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3.5 text-[15px]",
  lg: "px-8 py-[18px] text-base",
};

export function Button({ href, variant = "forest", size = "md", arrow = false, className, children, ...props }: ButtonProps) {
  const classes = cn(BASE, buttonVariants[variant], buttonSizes[size], className);
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="lead transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-1" />
      )}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {content}
    </a>
  );
}
