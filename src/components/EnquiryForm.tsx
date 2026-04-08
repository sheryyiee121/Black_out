"use client";

import { whatsappChatLink } from "@/lib/contact";
import WhatsAppSendIcon from "@/components/WhatsAppSendIcon";

export default function EnquiryForm() {
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
    <form className="mx-auto max-w-xl space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="enquiry-full-name" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Full name *
        </label>
        <input
          id="enquiry-full-name"
          name="fullName"
          type="text"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="enquiry-email" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Email address *
        </label>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="enquiry-phone" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Phone number *
        </label>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          placeholder="+92 3XX XXXXXXX"
        />
      </div>
      <div>
        <label htmlFor="enquiry-service" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Service required *
        </label>
        <select
          id="enquiry-service"
          name="service"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
        >
          <option value="">Select a service</option>
          <option value="self-drive">Self-drive luxury car hire</option>
          <option value="chauffeur">Professional chauffeurs</option>
          <option value="airport">Airport transfers</option>
          <option value="weddings">Weddings</option>
          <option value="formals">School Formals</option>
        </select>
      </div>
      <div>
        <label htmlFor="enquiry-vehicle" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Preferred vehicle or class
        </label>
        <input
          id="enquiry-vehicle"
          name="vehicle"
          type="text"
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          placeholder="e.g. Lamborghini, SUV"
        />
      </div>
      <div>
        <label htmlFor="enquiry-notes" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Additional notes
        </label>
        <textarea
          id="enquiry-notes"
          name="notes"
          rows={4}
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          placeholder="Tell us about your occasion or requirements..."
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition hover:bg-[#20bd5a]"
      >
        <WhatsAppSendIcon />
        Send via WhatsApp
      </button>
    </form>
  );
}
