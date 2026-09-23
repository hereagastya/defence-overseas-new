import Link from "next/link";
import { getCallLink, getWhatsAppLink } from "@/lib/contact";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

/**
 * Always-reachable contact: round buttons on desktop, a full-width action bar
 * on phones — the conversation is where the sale happens.
 */
export function FloatingContact() {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
        <a
          href={getCallLink()}
          aria-label="Call Defence Overseas"
          className="grid h-14 w-14 place-items-center rounded-full bg-gold text-forest-deep shadow-lift transition-transform duration-300 ease-[var(--ease-out-expo)] hover:scale-105"
        >
          <PhoneIcon className="h-6 w-6" />
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-forest text-on-forest shadow-lift transition-transform duration-300 ease-[var(--ease-out-expo)] hover:scale-105"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-paper px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 lg:hidden">
        <a
          href={getCallLink()}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-[1.5px] border-forest/30 py-3 text-[15px] font-semibold text-forest"
        >
          <PhoneIcon className="h-5 w-5" />
          Call
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-forest py-3 text-[15px] font-semibold text-on-forest"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
        <Link href="/contact#counselling" className="flex flex-1 items-center justify-center rounded-full bg-gold py-3 text-[15px] font-semibold text-forest-deep">
          Free session
        </Link>
      </div>
    </>
  );
}
