/** International digits only (no +, spaces, or 00 prefix) for wa.me / tel */
export const PHONE_NUMBER = "923155635323";

/** Shown in UI */
export const PHONE_DISPLAY = "+923155635323";

export const PHONE_TEL_HREF = `tel:+${PHONE_NUMBER}`;

export const WHATSAPP_NUMBER = PHONE_NUMBER;

export const WHATSAPP_DISPLAY = PHONE_DISPLAY;

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Opens chat with a short intro (floating button, header icon, etc.) */
export const WHATSAPP_PREFILL_INTRO =
  "Hello Blackout Car Rental, I would like to enquire about a car rental.";

export function whatsappChatLink(prefilledText?: string): string {
  const text = prefilledText?.trim();
  if (!text) return WHATSAPP_HREF;
  return `${WHATSAPP_HREF}?text=${encodeURIComponent(text)}`;
}

/** Snapchat username (add link) */
export const SNAPCHAT_USERNAME = "Blackoutrental";

export const SNAPCHAT_HREF = `https://www.snapchat.com/add/${SNAPCHAT_USERNAME}`;
