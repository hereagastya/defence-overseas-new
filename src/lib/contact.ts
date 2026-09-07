/**
 * Single source of truth for Defence Overseas contact details.
 * To go live, replace the two values below — every WhatsApp/Call
 * button across the site reads from here.
 */
export const CONTACT_CONFIG = {
  whatsappNumber: "WHATSAPP_NUMBER_HERE", // country code + number, digits only, e.g. "919876543210"
  phoneNumber: "PHONE_NUMBER_HERE", // e.g. "+919876543210"
  whatsappMessage: "Hi Defence Overseas, I'd like to know more about studying abroad.",
} as const;

export function getWhatsAppLink(message: string = CONTACT_CONFIG.whatsappMessage): string {
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getCallLink(): string {
  return `tel:${CONTACT_CONFIG.phoneNumber}`;
}
