"use client";

import { whatsappChatLink } from "@/lib/contact";
import WhatsAppSendIcon from "@/components/WhatsAppSendIcon";

export default function EnquirySection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const fd = new FormData(form);
    const fullName = String(fd.get("fullName") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const vehicle = String(fd.get("vehicle") ?? "").trim();
    const notes = String(fd.get("notes") ?? "").trim();
    const serviceEl = form.elements.namedItem("service") as HTMLSelectElement;
    const serviceLabel = serviceEl?.options[serviceEl.selectedIndex]?.text?.trim() ?? "";

    const text = [
      "Hello Blackout Car Rental,",
      "",
      "I would like a tailored quote:",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${serviceLabel}`,
      `Vehicle: ${vehicle || "—"}`,
      `Notes: ${notes || "—"}`,
    ].join("\n");

    window.open(whatsappChatLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="enquiry" className="relative min-h-[100vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background: luxury cars */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      {/* Frosted glass form card - wider, no scroll */}
      <div data-animate="scale" className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl"
        style={{
          background: "linear-gradient(180deg, rgba(30,30,30,0.85) 0%, rgba(45,35,30,0.88) 50%, rgba(30,30,30,0.85) 100%)",
        }}
      >
        <div className="p-6 sm:p-8">
          <p className="text-[#a3a3a3] text-xs font-medium uppercase tracking-widest">
            Get in Touch
          </p>
          <h2 className="mt-1 text-white text-2xl sm:text-3xl font-bold">
            Make an enquiry
          </h2>
          <p className="mt-2 text-[#a3a3a3] text-sm">
            Tell us what you need. We reply fast with availability and a tailored quote.
          </p>

          <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="enq-name" className="mb-1 block text-xs font-medium text-[#d4d4d4]">
                  Full name *
                </label>
                <input
                  id="enq-name"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-white/15 bg-[rgba(38,38,38,0.9)] px-3 py-2.5 text-sm text-white placeholder-[#737373] focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              <div>
                <label htmlFor="enq-email" className="mb-1 block text-xs font-medium text-[#d4d4d4]">
                  Email address *
                </label>
                <input
                  id="enq-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full rounded-lg border border-white/15 bg-[rgba(38,38,38,0.9)] px-3 py-2.5 text-sm text-white placeholder-[#737373] focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="enq-phone" className="mb-1 block text-xs font-medium text-[#d4d4d4]">
                  Phone number *
                </label>
                <input
                  id="enq-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full rounded-lg border border-white/15 bg-[rgba(38,38,38,0.9)] px-3 py-2.5 text-sm text-white placeholder-[#737373] focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              <div>
                <label htmlFor="enq-service" className="mb-1 block text-xs font-medium text-[#d4d4d4]">
                  Service required *
                </label>
                <select
                  id="enq-service"
                  name="service"
                  required
                  className="w-full rounded-lg border border-white/15 bg-[rgba(38,38,38,0.9)] px-3 py-2.5 text-sm text-white focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 [&>option]:bg-[#262626]"
                >
                  <option value="">Select a service</option>
                  <option value="self-drive">Self-drive prestige hire</option>
                  <option value="chauffeur">Chauffeured experiences</option>
                  <option value="airport">Airport transfers</option>
                  <option value="weddings">Weddings</option>
                  <option value="formals">School Formals</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="enq-vehicle" className="mb-1 block text-xs font-medium text-[#d4d4d4]">
                Preferred vehicle or class
              </label>
              <input
                id="enq-vehicle"
                name="vehicle"
                type="text"
                placeholder="e.g., Porsche 911, Executive sedan, Sports car"
                className="w-full rounded-lg border border-white/15 bg-[rgba(38,38,38,0.9)] px-3 py-2.5 text-sm text-white placeholder-[#737373] focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
            <div>
              <label htmlFor="enq-notes" className="mb-1 block text-xs font-medium text-[#d4d4d4]">
                Additional notes
              </label>
              <textarea
                id="enq-notes"
                name="notes"
                rows={2}
                placeholder="Tell us about your dates, special requirements, or any questions you have."
                className="w-full rounded-lg border border-white/15 bg-[rgba(38,38,38,0.9)] px-3 py-2.5 text-sm text-white placeholder-[#737373] focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#20bd5a]"
            >
              <WhatsAppSendIcon />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
