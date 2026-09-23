"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/cn";

interface RouteStepsProps {
  steps: { title: string; text: string }[];
  /** Set on dark sections. */
  dark?: boolean;
}

/**
 * The journey drawn as a route: numbered waypoints on a dashed line that
 * draws itself the first time it scrolls into view. Vertical on phones.
 */
export function RouteSteps({ steps, dark = false }: RouteStepsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const n = steps.length;
  const lineColor = dark ? "border-gold/60" : "border-forest/35";

  return (
    <div ref={ref} className="relative">
      {/* Horizontal route line (desktop) */}
      <div
        aria-hidden="true"
        className={cn("absolute top-[22px] hidden h-0 border-t-2 border-dashed lg:block", lineColor)}
        style={{
          left: 22,
          right: `calc(100% / ${n} - 22px)`,
          clipPath: drawn ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transition: "clip-path 1800ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <ol
        className="lg:grid lg:gap-6 lg:[grid-template-columns:repeat(var(--n),minmax(0,1fr))]"
        style={{ "--n": n } as CSSProperties}
      >
        {steps.map((step, i) => (
          <li
            key={step.title}
            className={cn(
              "relative pb-10 pl-16 transition-[opacity,transform] duration-[900ms] ease-[var(--ease-out-expo)] last:pb-0 lg:pb-0 lg:pl-0 lg:pt-16",
              drawn ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            )}
            style={{ transitionDelay: `${i * 160}ms` }}
          >
            {i < n - 1 && (
              <span aria-hidden="true" className={cn("absolute bottom-0 left-[21px] top-11 border-l-2 border-dashed lg:hidden", lineColor)} />
            )}
            <span
              className={cn(
                "absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full font-display text-[17px] font-bold",
                dark ? "bg-gold text-forest-deep" : "bg-forest text-on-forest"
              )}
            >
              {i + 1}
            </span>
            <h3 className={cn("font-display text-[22px] font-bold leading-tight tracking-tight", dark ? "text-on-forest" : "text-forest")}>
              {step.title}
            </h3>
            <p className={cn("mt-2 max-w-[30ch] text-[15px] leading-relaxed", dark ? "text-on-forest-muted" : "text-muted")}>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
