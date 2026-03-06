"use client";

export default function EnquirySection() {
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

          <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="enq-name" className="mb-1 block text-xs font-medium text-[#d4d4d4]">
                  Full name *
                </label>
                <input
                  id="enq-name"
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
                  type="tel"
                  required
                  placeholder="+61 40X XXX XXX"
                  className="w-full rounded-lg border border-white/15 bg-[rgba(38,38,38,0.9)] px-3 py-2.5 text-sm text-white placeholder-[#737373] focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              <div>
                <label htmlFor="enq-service" className="mb-1 block text-xs font-medium text-[#d4d4d4]">
                  Service required *
                </label>
                <select
                  id="enq-service"
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
                rows={2}
                placeholder="Tell us about your dates, special requirements, or any questions you have."
                className="w-full rounded-lg border border-white/15 bg-[rgba(38,38,38,0.9)] px-3 py-2.5 text-sm text-white placeholder-[#737373] focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 resize-none"
              />
            </div>
            <button
              type="submit"
              data-icon-arrow
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#171717] hover:bg-[#f5f5f5] transition mt-4"
            >
              Get my tailored quote
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#171717] text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
