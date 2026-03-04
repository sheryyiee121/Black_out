"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/journal", label: "Journal" },
  { href: "/#enquiry", label: "Contact" },
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
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{
        background: "rgb(255, 255, 255)",
        borderColor: "rgb(227, 227, 227)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        {/* Left - Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo/Blackout_Rental_Logo-removebg-preview.png"
            alt="Blackout Rental"
            width={300}
            height={100}
            className="h-20 w-auto object-contain object-left brightness-0 sm:h-20"
            priority
          />
        </Link>

        {/* Center - Nav links in rounded container */}
        <nav
          className="hidden md:flex items-center justify-center gap-8 px-5 py-1.5 rounded-full"
          style={{
            background: "rgba(245, 245, 245, 0.5)",
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
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="tel:1300887174"
            className="flex items-center gap-1.5 text-sm font-medium transition hover:opacity-80"
            style={{ color: "rgb(115, 115, 115)" }}
          >
            <PhoneIcon />
            <span>1300 887 174</span>
          </a>
          <Link
            href="/#enquiry"
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
            <a href="tel:1300887174" className="flex items-center gap-2 text-base font-medium text-[#737373]">
              <PhoneIcon />
              1300 887 174
            </a>
            <Link
              href="/#enquiry"
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
