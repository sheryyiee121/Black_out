"use client";

export default function CarEnquiryForm({ carName }: { carName: string }) {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#171717]">
          Name *
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-xl border border-[rgb(227,227,227)] bg-white px-4 py-3 text-[#171717] placeholder-[#737373] focus:border-[#171717] focus:outline-none focus:ring-1 focus:ring-[#171717]"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#171717]">
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full rounded-xl border border-[rgb(227,227,227)] bg-white px-4 py-3 text-[#171717] placeholder-[#737373] focus:border-[#171717] focus:outline-none focus:ring-1 focus:ring-[#171717]"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#171717]">
          Phone *
        </label>
        <input
          id="phone"
          type="tel"
          required
          placeholder="Your phone number"
          className="w-full rounded-xl border border-[rgb(227,227,227)] bg-white px-4 py-3 text-[#171717] placeholder-[#737373] focus:border-[#171717] focus:outline-none focus:ring-1 focus:ring-[#171717]"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#171717]">
          Message (optional)
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Any special requirements..."
          className="w-full rounded-xl border border-[rgb(227,227,227)] bg-white px-4 py-3 text-[#171717] placeholder-[#737373] focus:border-[#171717] focus:outline-none focus:ring-1 focus:ring-[#171717] resize-none"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#171717] px-6 py-3.5 text-sm font-medium text-white hover:bg-black transition"
      >
        Send enquiry
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  );
}
