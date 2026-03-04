"use client";

export default function EnquiryForm() {
  return (
    <form className="mx-auto max-w-xl space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Full name *
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Email address *
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Phone number *
        </label>
        <input
          id="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          placeholder="04XX XXX XXX"
        />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Service required *
        </label>
        <select
          id="service"
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
        <label htmlFor="vehicle" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Preferred vehicle or class
        </label>
        <input
          id="vehicle"
          type="text"
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          placeholder="e.g. Lamborghini, SUV"
        />
      </div>
      <div>
        <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Additional notes
        </label>
        <textarea
          id="notes"
          rows={4}
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          placeholder="Tell us about your occasion or requirements..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[#c9a227] px-6 py-3.5 font-medium text-black transition hover:bg-amber-500"
      >
        Get my tailored quote
      </button>
    </form>
  );
}
