import { Minus, Plus } from "./icons";

export interface FaqItem {
  q: string;
  a: string;
}

/** Native <details> — keyboard and screen-reader friendly with no script. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-[19px] font-semibold leading-snug text-forest marker:hidden [&::-webkit-details-marker]:hidden sm:text-[22px]">
            {item.q}
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-[1.5px] border-forest/30 text-forest transition-colors duration-300 group-open:border-forest group-open:bg-forest group-open:text-on-forest">
              <Plus className="h-4 w-4 group-open:hidden" />
              <Minus className="hidden h-4 w-4 group-open:block" />
            </span>
          </summary>
          <p className="max-w-[68ch] pb-6 pr-14 text-[16px] leading-[1.7] text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
