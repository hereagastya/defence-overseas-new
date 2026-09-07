import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: React.ReactNode;
  /** Use on dark section backgrounds (e.g. the final CTA). */
  light?: boolean;
  className?: string;
}

export function Eyebrow({ children, light = false, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "mb-3.5 text-[13px] font-semibold uppercase tracking-[0.14em]",
        light ? "text-gold-light" : "text-gold-dark",
        className
      )}
    >
      {children}
    </p>
  );
}
