import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_PREFILL_INTRO, whatsappChatLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Services | Blackout Car Rental",
  description:
    "Private hire, events, weddings, birthdays, ceremonies and more—premium cars across Islamabad, Lahore and Multan.",
};

type ServiceCard = {
  title: string;
  desc: string;
  tag: string;
  href?: string;
  isPrimary?: boolean;
};

const services: ServiceCard[] = [
  {
    title: "Private self-drive rent",
    desc: "Daily, weekly or longer—take the keys and drive yourself. SUVs, sedans and utes for personal use.",
    tag: "Self-drive",
  },
  {
    title: "Event & corporate rent",
    desc: "Product launches, corporate events, delegations and VIP movements—we match the right vehicle to your occasion.",
    tag: "Events",
  },
  {
    title: "Wedding & marriage",
    desc: "Bridal cars, family convoys and decorated options. Arrive in style on your big day.",
    tag: "Weddings",
  },
  {
    title: "Birthday celebrations",
    desc: "Surprise rides, party drop-offs and photo-ready cars to make birthdays memorable.",
    tag: "Birthdays",
  },
  {
    title: "Ceremonies & Nikkah",
    desc: "Respectful, punctual transport for oath ceremonies, Nikkah and family gatherings.",
    tag: "Ceremonies",
  },
  {
    title: "Chauffeur & VIP",
    desc: "Professional drivers in prestige vehicles when you prefer not to drive.",
    tag: "Chauffeur",
  },
  {
    title: "Airport transfers",
    desc: "Meet-and-greet style handovers for arrivals and departures with space for luggage.",
    tag: "Airport",
  },
  {
    title: "School formals & graduations",
    desc: "Stand-out cars for formal nights and graduation events.",
    tag: "Formals",
  },
  {
    title: "All cars available",
    desc: "Browse our full fleet—every model listed is available subject to dates. Get a tailored quote.",
    tag: "Fleet",
    href: "/fleet",
    isPrimary: true,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-sm font-medium text-[#737373]">
          <Link href="/" className="transition hover:text-[#171717]">
            Home
          </Link>
          <span className="mx-2 text-[#d4d4d4]">/</span>
          <span className="text-[#171717]">Services</span>
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-[#525252] leading-relaxed">
          From private weekend hire to weddings, birthdays and ceremonies—we cover every kind of
          premium car rental across Islamabad, Lahore and Multan. All fleet vehicles can be booked
          for these services where available.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/fleet"
            className="inline-flex items-center rounded-full bg-[#171717] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
          >
            View all cars
          </Link>
          <Link
            href="/#enquiry"
            className="inline-flex items-center rounded-full border-2 border-[#171717] bg-white px-5 py-2.5 text-sm font-medium text-[#171717] transition hover:bg-[#fafafa]"
          >
            Get a quote
          </Link>
          <a
            href={whatsappChatLink(WHATSAPP_PREFILL_INTRO)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
          >
            WhatsApp us
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const href = s.href ?? "/#enquiry";
            const className = `block h-full rounded-2xl border p-6 shadow-sm transition ${
              s.isPrimary
                ? "border-[#171717] bg-[rgba(245,245,245,0.5)] hover:bg-[rgba(245,245,245,0.85)]"
                : "border-[rgb(227,227,227)] bg-white hover:-translate-y-1 hover:shadow-lg"
            }`;
            return (
              <Link key={s.title} href={href} className={className}>
                <span className="inline-block rounded-full bg-[rgba(245,245,245,1)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#737373]">
                  {s.tag}
                </span>
                <h2 className="mt-4 text-xl font-bold text-[#171717]">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#525252]">{s.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#171717]">
                  {s.href === "/fleet" ? "Browse fleet →" : "Enquire now →"}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
