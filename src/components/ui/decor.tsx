import Image from "next/image";
import { useId } from "react";
import { cn } from "@/lib/cn";

/**
 * A service-ribbon band: the striped ribbon worn beside a medal, in the crest
 * colours. Flat, hard-edged stripes — used as the site's divider.
 */
export function Ribbon({ className, tall = false }: { className?: string; tall?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(tall ? "h-4" : "h-2.5", "w-full", className)}
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, #17382a 0 22px, #d9a93a 22px 27px, #6e1f2f 27px 41px, #d9a93a 41px 46px, #17382a 46px 68px)",
      }}
    />
  );
}

/** Circular passport-style stamp with the house name set around its rim. */
export function Stamp({ className, tone = "gold" }: { className?: string; tone?: "gold" | "maroon" | "forest" }) {
  const id = useId();
  const color = tone === "gold" ? "text-gold" : tone === "maroon" ? "text-maroon" : "text-forest";
  return (
    <svg viewBox="0 0 200 200" className={cn("h-full w-full", color, className)} role="img" aria-label="Defence Overseas, Pune, India">
      <defs>
        <path id={id} d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="52" fill="none" stroke="currentColor" strokeWidth="1" />
      <text className="font-crest" fill="currentColor" fontSize="14" fontWeight="600">
        <textPath href={`#${id}`} startOffset="0" textLength="446" lengthAdjust="spacing">
          DEFENCE OVERSEAS · STUDY ABROAD · PUNE · INDIA ·
        </textPath>
      </text>
      {/* eight-point compass star */}
      <path
        fill="currentColor"
        d="M100 58 107 93 142 100 107 107 100 142 93 107 58 100 93 93Z"
      />
    </svg>
  );
}

/** A photograph in an arched frame — a window, a doorway, a gateway. */
export function Arch({
  src,
  alt,
  className,
  sizes,
  priority = false,
  position = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
  position?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-forest-mid", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={priority}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}

