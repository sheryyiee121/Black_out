import Link from "next/link";
import Image from "next/image";

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

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/contact", label: "Contact" },
];

const servicesLinks = [
  { href: "/services/self-hire", label: "Self-drive prestige hire" },
  { href: "/services/chauffeur", label: "Chauffeured experiences" },
  { href: "/services/airport-transfers", label: "Airport transfers" },
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
                <a href="tel:1300887174" data-animate-icon className="flex items-center gap-3 text-[#525252] hover:text-[#171717] transition">
                  <PhoneIcon />
                  <span className="text-sm"><span className="text-[#737373]">Phone</span> 1300 887 174</span>
                </a>
                <a href="mailto:contact@blackoutcarrental.com" data-animate-icon className="flex items-center gap-3 text-[#525252] hover:text-[#171717] transition">
                  <EmailIcon />
                  <span className="text-sm"><span className="text-[#737373]">Email</span> contact@blackoutcarrental.com</span>
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
              {companyLinks.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <Link href={link.href} className="text-sm text-[#737373] hover:text-[#171717] transition">
                    {link.label}
                  </Link>
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
