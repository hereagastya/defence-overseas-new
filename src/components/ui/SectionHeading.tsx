import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-[620px] text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-serif text-[clamp(28px,3.6vw,42px)] font-semibold leading-[1.15] tracking-[-0.01em] text-ink">
        {title}
      </h2>
      {description && <p className="mt-4 text-[17px] leading-[1.6] text-muted">{description}</p>}
    </div>
  );
}
