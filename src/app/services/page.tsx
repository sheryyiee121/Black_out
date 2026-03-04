import Link from "next/link";

const services = [
  { href: "/services/self-hire", title: "Self-drive luxury car hire", desc: "Daily, weekend or monthly rental" },
  { href: "/services/chauffeur", title: "Professional chauffeurs", desc: "Corporate events, special occasions" },
  { href: "/services/airport-transfers", title: "Airport transfers", desc: "BNE, OOL, MCY" },
  { href: "/services/weddings", title: "Weddings", desc: "Cars for the couple and family" },
  { href: "/services/formals", title: "School Formals", desc: "Premium car hire for formal nights" },
];

export const metadata = {
  title: "Services | Velo Rentals",
  description: "Luxury car hire services: self-drive, chauffeurs, airport transfers, weddings, school formals.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Whether it&apos;s a special occasion, corporate event or school formal, we curate the right premium car or chauffeur from our locations across Brisbane, Gold Coast, Sunshine Coast and Noosa Heads.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-[#c9a227]/50"
            >
              <h2 className="text-lg font-semibold text-white">{s.title}</h2>
              <p className="mt-1 text-sm text-zinc-400">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
