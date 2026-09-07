/**
 * Decorative animated illustration — a dotted globe with flight-path
 * arcs — used in place of a stock photo so the hero never depends on
 * imagery that isn't available yet. Swap this component out for a real
 * <Image> later without touching Hero.tsx's layout.
 */
export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center" aria-hidden="true">
      <svg
        viewBox="0 0 480 480"
        role="img"
        aria-label="Illustration of international routes"
        className="h-auto w-full max-w-[460px] origin-[240px_240px] animate-spin-slow"
      >
        <circle cx="240" cy="240" r="170" className="fill-none stroke-ink/10" strokeWidth={1.2} />
        <circle cx="240" cy="240" r="130" className="fill-none stroke-gold/30" strokeWidth={1.2} />
        <ellipse cx="240" cy="240" rx="170" ry="60" className="fill-none stroke-ink/10" strokeWidth={1} />
        <ellipse cx="240" cy="240" rx="170" ry="110" className="fill-none stroke-ink/10" strokeWidth={1} />
        <ellipse cx="240" cy="240" rx="60" ry="170" className="fill-none stroke-ink/10" strokeWidth={1} />
        <ellipse cx="240" cy="240" rx="110" ry="170" className="fill-none stroke-ink/10" strokeWidth={1} />
        <path
          d="M110 300 Q 240 120 370 200"
          className="fill-none stroke-gold-dark animate-dash"
          strokeWidth={1.6}
          strokeDasharray="6 7"
          strokeLinecap="round"
        />
        <path
          d="M140 160 Q 240 340 360 320"
          className="fill-none stroke-ink-3/50 animate-dash-reverse"
          strokeWidth={1.6}
          strokeDasharray="6 7"
          strokeLinecap="round"
        />
        <circle cx="110" cy="300" r="5" className="fill-gold" />
        <circle cx="370" cy="200" r="5" className="fill-gold" />
        <circle cx="140" cy="160" r="5" className="fill-gold" />
        <circle cx="360" cy="320" r="5" className="fill-gold" />
        <circle cx="240" cy="240" r="6" className="fill-ink" />
      </svg>

      <div className="animate-float absolute left-[-2%] top-[4%] flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-4 py-2.5 text-xs font-semibold text-ink shadow-card backdrop-blur-md lg:left-[-4%] lg:top-[10%] lg:text-[13px]">
        <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-gold" />
        Personalised Guidance
      </div>
      <div className="animate-float-delay absolute bottom-[6%] right-[-2%] flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-4 py-2.5 text-xs font-semibold text-ink shadow-card backdrop-blur-md lg:bottom-[12%] lg:right-[-6%] lg:text-[13px]">
        <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-gold" />
        Visa &amp; Process Support
      </div>
    </div>
  );
}
