import { cn } from "@/lib/cn";

interface TypeProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

/** Section heading. The heading carries its own weight — no label above it. */
export function H2({ children, className, dark }: TypeProps) {
  return (
    <h2
      className={cn(
        "text-[clamp(34px,4.8vw,62px)] font-bold leading-[1.02] tracking-[-0.03em]",
        dark ? "text-on-forest" : "text-forest",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className, dark }: TypeProps) {
  return (
    <p className={cn("max-w-[56ch] text-[clamp(17px,1.4vw,19px)] leading-[1.7]", dark ? "text-on-forest-muted" : "text-muted", className)}>
      {children}
    </p>
  );
}
