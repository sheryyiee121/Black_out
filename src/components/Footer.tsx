import Link from "next/link";
import Image from "next/image";
import {
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SNAPCHAT_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_PREFILL_INTRO,
  whatsappChatLink,
} from "@/lib/contact";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#737373]">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#737373]">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const companyLinks: { href: string; label: string; external?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/contact", label: "Contact" },
  { href: whatsappChatLink(WHATSAPP_PREFILL_INTRO), label: "WhatsApp", external: true },
];

const servicesLinks = [
  { href: "/services", label: "All services" },
  { href: "/fleet", label: "Our fleet" },
  { href: "/#enquiry", label: "Make an enquiry" },
];

const locationLinks = [
  { href: "/#fleet", label: "Car rental Islamabad" },
  { href: "/#fleet", label: "Car rental Lahore" },
  { href: "/#fleet", label: "Car rental Multan" },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: "rgb(255, 255, 255)", borderColor: "rgb(227, 227, 227)" }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Top: Logo + tagline + description */}
        <div data-animate="fade-up" className="text-center max-w-2xl mx-auto">
          <Link href="/" className="inline-block">
            <Image
              src="/logo/Blackout_Rental_Logo-removebg-preview.png"
              alt="Blackout Car Rental"
              width={300}
              height={100}
              className="h-30 w-auto object-contain brightness-0 mx-auto"
            />
          </Link>
          <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#171717]">Prestige in Motion</p>
          <p className="mt-4 text-[#525252] text-sm leading-relaxed">
            Premium car rental experience in Islamabad, Lahore and Multan. From SUVs to prestige hire, we deliver quality mobility solutions with seamless service from enquiry to handover. Experience our fleet with professional service standards.
          </p>
        </div>

        {/* Middle: Get in Touch + Follow Us */}
        <div data-animate="icon-stagger" className="mt-12 rounded-2xl px-6 py-8 sm:px-10 sm:py-10" style={{ background: "rgba(245, 245, 245, 0.8)" }}>
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-[#171717] font-bold text-base">Get in Touch</h3>
              <div className="mt-4 space-y-3">
                <a href={PHONE_TEL_HREF} data-animate-icon className="flex items-center gap-3 text-[#525252] hover:text-[#171717] transition">
                  <PhoneIcon />
                  <span className="text-sm"><span className="text-[#737373]">Phone</span> {PHONE_DISPLAY}</span>
                </a>
                <a href="mailto:contact@blackoutcarrental.com" data-animate-icon className="flex items-center gap-3 text-[#525252] hover:text-[#171717] transition">
                  <EmailIcon />
                  <span className="text-sm"><span className="text-[#737373]">Email</span> contact@blackoutcarrental.com</span>
                </a>
                <a href={whatsappChatLink(WHATSAPP_PREFILL_INTRO)} target="_blank" rel="noopener noreferrer" data-animate-icon className="flex items-center gap-3 text-[#525252] hover:text-[#171717] transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-sm"><span className="text-[#737373]">WhatsApp</span> {WHATSAPP_DISPLAY}</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-[#171717] font-bold text-base">Follow Us</h3>
              <div className="mt-4 flex gap-3">
                {/* Facebook */}
                <a href="https://facebook.com" data-animate-icon target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg text-[#171717] hover:bg-white transition" style={{ background: "rgba(227, 227, 227, 0.6)" }} aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" data-animate-icon target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg text-[#171717] hover:bg-white transition" style={{ background: "rgba(227, 227, 227, 0.6)" }} aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={SNAPCHAT_HREF}
                  data-animate-icon
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-[#171717] hover:bg-white transition"
                  style={{ background: "rgba(227, 227, 227, 0.6)" }}
                  aria-label="Snapchat @Blackoutrental"
                  title="@Blackoutrental"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.089.19 0 .813-.092 1.25-.38.27-.168.603-.08.768.192.163.27.075.615-.192.78-.71.464-1.593.64-2.157.64-.19 0-.332-.015-.43-.032-.1 1.42-.72 3.056-2.32 4.092-.37.24-.78.43-1.23.56 1.26 1.32 2.56 1.86 4.35 1.86.39 0 .76-.04 1.13-.12.36-.07.72-.18 1.06-.32.32-.14.5-.48.37-.82-.14-.33-.51-.48-.84-.34-.28.12-.58.21-.89.28-.29.07-.59.11-.89.11-1.42 0-2.67-.52-3.84-1.57-.34-.3-.69-.51-1.06-.66-.38-.16-.78-.24-1.19-.24h-.31c-.25 0-.49.04-.72.1-.35.09-.69.25-1 .48-.5.4-.89.9-1.19 1.46-.15.28-.49.39-.77.24-.29-.15-.39-.49-.24-.77.35-.66.84-1.25 1.44-1.73.18-.15.27-.38.23-.61-.05-.24-.24-.43-.48-.48-.89-.19-1.75-.64-2.48-1.36-.73-.73-1.18-1.59-1.36-2.48-.05-.24-.24-.43-.48-.48-.24-.05-.46.05-.61.23-.48.6-1.07 1.09-1.73 1.44-.28.15-.62.05-.77-.24-.15-.29-.05-.62.24-.77.56-.3 1.06-.69 1.46-1.19.23-.31.39-.65.48-1 .06-.23.1-.47.1-.72v-.31c0-.41-.08-.81-.24-1.19-.15-.37-.36-.72-.66-1.06-1.05-1.17-1.57-2.42-1.57-3.84 0-.3.04-.6.11-.89.07-.31.16-.61.28-.89.14-.33-.01-.7-.34-.84-.33-.13-.68.03-.82.37-.12.33-.21.67-.28 1.01-.07.37-.11.75-.11 1.13 0 1.79.54 3.09 1.86 4.35.13-.45.32-.86.56-1.23 1.036-1.6 2.672-2.22 4.092-2.32-.017-.098-.032-.24-.032-.43 0-.564.176-1.447.64-2.157.165-.267.51-.355.78-.192.27.165.36.498.192.768-.288.437-.38 1.06-.38 1.25-.001.198.044.326.089.401.165-.008.33-.018.51-.03l.06-.003c1.628-.104 3.654-.23 4.847.299 3.545 1.583 3.821 4.94 3.821 5.93 0 1.03-.46 2.1-1.28 3.02-.82.92-2.04 1.63-3.55 2.05-1.52.42-3.29.51-5.18.21-1.89-.3-3.83-1.02-5.5-2.2-1.67-1.18-2.96-2.81-3.62-4.76-.66-1.95-.58-4.16.31-6.18C5.86 1.07 10.316.793 12.206.793z" />
                  </svg>
                </a>
              </div>
              <p className="mt-4 text-[#737373] text-sm max-w-xs">
                Stay updated with our latest fleet additions and exclusive offers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Three columns - Company, Services, Locations */}
        <div data-animate="fade-in" className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h4 className="text-[#171717] font-bold text-sm uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#737373] hover:text-[#171717] transition"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-[#737373] hover:text-[#171717] transition">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#171717] font-bold text-sm uppercase tracking-wide mb-4">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <Link href={link.href} className="text-sm text-[#737373] hover:text-[#171717] transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#171717] font-bold text-sm uppercase tracking-wide mb-4">Locations</h4>
            <ul className="space-y-3">
              {locationLinks.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <Link href={link.href} className="text-sm text-[#737373] hover:text-[#171717] transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-8 border-t text-center text-sm text-[#737373]" style={{ borderColor: "rgba(227, 227, 227, 0.6)" }}>
          © {new Date().getFullYear()} Blackout Car Rental. Premium car rental in Islamabad, Lahore & Multan.
        </div>
      </div>
    </footer>
  );
}
