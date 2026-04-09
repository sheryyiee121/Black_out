"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL_HREF, WHATSAPP_PREFILL_INTRO, whatsappChatLink } from "@/lib/contact";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 ml-0.5">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 overflow-visible border-b backdrop-blur-md"
      style={{
        background: "rgb(255, 255, 255)",
        borderColor: "rgb(227, 227, 227)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        {/* Left - Logo: slightly larger than bar (overflows a bit) */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo/Blackout_Rental_Logo-removebg-preview.png"
            alt="Blackout Rental"
            width={300}
            height={100}
            className="h-24 w-auto object-contain object-left brightness-0 sm:h-28"
            priority
          />
        </Link>

        {/* Center - Nav links in rounded container */}
        <nav
          className="hidden md:flex items-center justify-center gap-8 px-5 py-1.5 rounded-full"
          style={{
            background: "rgba(245, 245, 245, 1.5)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center text-sm font-medium text-[#171717] transition hover:opacity-80"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown />}
            </Link>
          ))}
        </nav>

        {/* Right - Phone + Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={whatsappChatLink(WHATSAPP_PREFILL_INTRO)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105 hover:bg-[#20bd5a]"
            aria-label="WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href={PHONE_TEL_HREF}
            className="flex items-center gap-1.5 text-sm font-medium transition hover:opacity-80"
            style={{ color: "rgb(115, 115, 115)" }}
          >
            <PhoneIcon />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <Link
            href="/contact"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-white transition hover:opacity-90 shrink-0"
            style={{ background: "rgb(0, 0, 0)" }}
          >
            Enquire now
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 text-[#171717]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="border-t px-4 py-4 md:hidden"
          style={{
            background: "rgb(255, 255, 255)",
            borderColor: "rgb(227, 227, 227)",
          }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[#171717]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href={PHONE_TEL_HREF} className="flex items-center gap-2 text-base font-medium text-[#737373]">
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
            <a
              href={whatsappChatLink(WHATSAPP_PREFILL_INTRO)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-full px-4 py-1.5 text-center text-sm font-medium text-white mt-2"
              style={{ background: "rgb(0, 0, 0)" }}
              onClick={() => setMobileOpen(false)}
            >
              Enquire now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
