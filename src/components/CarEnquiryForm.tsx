"use client";

import { whatsappChatLink } from "@/lib/contact";
import WhatsAppSendIcon from "@/components/WhatsAppSendIcon";

export default function CarEnquiryForm({ carName }: { carName: string }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const fd = new FormData(form);
    const customerName = String(fd.get("customerName") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const text = [
      "Hello Blackout Car Rental,",
      "",
      `I'm enquiring about: ${carName}`,
      "",
      `Name: ${customerName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Message: ${message || "—"}`,
    ].join("\n");

    window.open(whatsappChatLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="car-enq-name" className="mb-1 block text-sm font-medium text-[#171717]">
          Name *
        </label>
        <input
          id="car-enq-name"
          name="customerName"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-xl border border-[rgb(227,227,227)] bg-white px-4 py-3 text-[#171717] placeholder-[#737373] focus:border-[#171717] focus:outline-none focus:ring-1 focus:ring-[#171717]"
        />
      </div>
      <div>
        <label htmlFor="car-enq-email" className="mb-1 block text-sm font-medium text-[#171717]">
          Email *
        </label>
        <input
          id="car-enq-email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full rounded-xl border border-[rgb(227,227,227)] bg-white px-4 py-3 text-[#171717] placeholder-[#737373] focus:border-[#171717] focus:outline-none focus:ring-1 focus:ring-[#171717]"
        />
      </div>
      <div>
        <label htmlFor="car-enq-phone" className="mb-1 block text-sm font-medium text-[#171717]">
          Phone *
        </label>
        <input
          id="car-enq-phone"
          name="phone"
          type="tel"
          required
          placeholder="Your phone number"
          className="w-full rounded-xl border border-[rgb(227,227,227)] bg-white px-4 py-3 text-[#171717] placeholder-[#737373] focus:border-[#171717] focus:outline-none focus:ring-1 focus:ring-[#171717]"
        />
      </div>
      <div>
        <label htmlFor="car-enq-message" className="mb-1 block text-sm font-medium text-[#171717]">
          Message (optional)
        </label>
        <textarea
          id="car-enq-message"
          name="message"
          rows={3}
          placeholder="Any special requirements..."
          className="w-full rounded-xl border border-[rgb(227,227,227)] bg-white px-4 py-3 text-[#171717] placeholder-[#737373] focus:border-[#171717] focus:outline-none focus:ring-1 focus:ring-[#171717] resize-none"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
      >
        <WhatsAppSendIcon />
        Send via WhatsApp
      </button>
    </form>
  );
}
