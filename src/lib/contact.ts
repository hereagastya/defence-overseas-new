/**
 * Single source of truth for contact channels. Replace the placeholders and
 * every WhatsApp / call control across the site updates.
 */
export const CONTACT_CONFIG = {
  whatsappNumber: "918591879668",
  phoneNumber: "+918591879668",
  phoneDisplay: "+91 85918 79668", // how the number is printed on the page
  email: "defenceoverseas@gmail.com",
  whatsappMessage: "Hi Defence Overseas, I'd like to know more about studying abroad.",
} as const;

export function getWhatsAppLink(message: string = CONTACT_CONFIG.whatsappMessage): string {
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getCallLink(): string {
  return `tel:${CONTACT_CONFIG.phoneNumber}`;
}

export function getMailLink(): string | null {
  return CONTACT_CONFIG.email.includes("@") ? `mailto:${CONTACT_CONFIG.email}` : null;
}
