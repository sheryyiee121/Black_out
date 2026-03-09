import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Blackout Car Rental",
  description:
    "Contact Blackout Car Rental for self-drive and chauffeur bookings. Call, email, or send your enquiry.",
};

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-white pt-24 sm:pt-28">
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#171717] bg-[#171717] text-white">
          <div className="grid gap-10 px-6 py-10 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:items-end lg:px-12">
            <div>
              <p className="inline-flex rounded-full border border-[#f97316]/40 bg-[#f97316]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#fdba74]">
                Contact Blackout
              </p>
              <h1 className="mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                Book your car in minutes.
                <span className="block text-[#fdba74]">We reply fast on every enquiry.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#d4d4d4] sm:text-base">
                Tell us your pickup city, rental dates, and preferred vehicle. Our team will confirm availability and share the best package.
              </p>
            </div>
            <div className="space-y-3">
              <a href="tel:1300887174" className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm transition hover:border-[#f97316]/50 hover:bg-white/10">
                <span className="text-[#fdba74]"><PhoneIcon /></span>
                <span>1300 887 174</span>
              </a>
              <a href="mailto:contact@blackoutcarrental.com" className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm transition hover:border-[#f97316]/50 hover:bg-white/10">
                <span className="text-[#fdba74]"><MailIcon /></span>
                <span>contact@blackoutcarrental.com</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm">
                <span className="text-[#fdba74]"><ClockIcon /></span>
                <span>Mon - Sun, 8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="rounded-3xl border border-[#e3e3e3] bg-[#fafafa] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f97316]">Send Enquiry</p>
          <h2 className="mt-2 text-2xl font-bold text-[#171717]">Tell us your requirements</h2>
          <p className="mt-2 text-sm text-[#525252]">Simple form, quick response. We usually reply within a short time.</p>

          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-[#262626]">Full name *</label>
                <input id="contact-name" type="text" required placeholder="Your full name" className="w-full rounded-xl border border-[#d4d4d4] bg-white px-3.5 py-3 text-sm text-[#171717] placeholder-[#a3a3a3] outline-none transition focus:border-[#f97316]" />
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-[#262626]">Phone number *</label>
                <input id="contact-phone" type="tel" required placeholder="+92 3XX XXX XXXX" className="w-full rounded-xl border border-[#d4d4d4] bg-white px-3.5 py-3 text-sm text-[#171717] placeholder-[#a3a3a3] outline-none transition focus:border-[#f97316]" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-[#262626]">Email *</label>
              <input id="contact-email" type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-[#d4d4d4] bg-white px-3.5 py-3 text-sm text-[#171717] placeholder-[#a3a3a3] outline-none transition focus:border-[#f97316]" />
            </div>
            <div>
              <label htmlFor="contact-service" className="mb-1.5 block text-sm font-medium text-[#262626]">Service *</label>
              <select id="contact-service" required className="w-full rounded-xl border border-[#d4d4d4] bg-white px-3.5 py-3 text-sm text-[#171717] outline-none transition focus:border-[#f97316]">
                <option value="">Select service</option>
                <option value="self-drive">Self-drive car rental</option>
                <option value="chauffeur">Chauffeur service</option>
                <option value="wedding">Wedding booking</option>
                <option value="airport">Airport transfer</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-[#262626]">Message</label>
              <textarea id="contact-message" rows={4} placeholder="Pickup location, dates, preferred car..." className="w-full resize-none rounded-xl border border-[#d4d4d4] bg-white px-3.5 py-3 text-sm text-[#171717] placeholder-[#a3a3a3] outline-none transition focus:border-[#f97316]" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f97316]">
              Submit enquiry
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-[#e3e3e3]">
            <iframe
              title="Blackout Car Rental location"
              src="https://maps.google.com/maps?q=Islamabad&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full"
            />
          </div>
          <div className="rounded-3xl border border-[#e3e3e3] bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#171717]">Why contact us?</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#525252]">
              <li className="rounded-xl border border-[#f0f0f0] bg-[#fcfcfc] px-4 py-3">Fast booking confirmation</li>
              <li className="rounded-xl border border-[#f0f0f0] bg-[#fcfcfc] px-4 py-3">Transparent rental pricing</li>
              <li className="rounded-xl border border-[#f0f0f0] bg-[#fcfcfc] px-4 py-3">Clean, premium cars with verified documents</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
