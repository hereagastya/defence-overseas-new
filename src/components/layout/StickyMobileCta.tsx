import { Button } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getCallLink, getWhatsAppLink } from "@/lib/contact";

/** Fixed bottom bar keeping WhatsApp/Call one tap away on small screens. */
export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] flex gap-2.5 border-t border-ink/[0.08] bg-cream/92 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_-12px_rgba(11,15,26,0.2)] backdrop-blur-md lg:hidden">
      <Button href={getWhatsAppLink()} target="_blank" rel="noopener" size="sm" className="flex-1">
        <WhatsAppIcon className="h-[17px] w-[17px]" />
        WhatsApp
      </Button>
      <Button href={getCallLink()} variant="dark" size="sm" className="flex-1">
        <PhoneIcon className="h-[17px] w-[17px]" />
        Call
      </Button>
    </div>
  );
}
