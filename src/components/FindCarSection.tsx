import Link from "next/link";

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5 shrink-0">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function FindCarSection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          data-animate="scale"
          className="relative overflow-hidden rounded-[28px] min-h-[420px] sm:min-h-[480px] flex flex-col items-center justify-center text-center px-8 py-20 sm:px-14 sm:py-24 shadow-xl border border-[rgba(227,227,227,0.6)]"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=85)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient: image visible at top, soft fade at bottom for text */}
          <div
            className="absolute inset-0 rounded-[28px]"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.92) 100%)",
            }}
            aria-hidden
          />
          <div className="relative z-10">
            <h2 className="text-[#171717] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-3xl mx-auto tracking-tight">
              Let&apos;s find the right car for you.
            </h2>
            <p className="mt-5 text-[#525252] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Browse our luxury car rentals or enquire about car hire in Brisbane, Gold Coast or Sunshine Coast. We reply within the hour.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/#fleet"
                data-icon-arrow
                className="inline-flex items-center rounded-xl px-7 py-4 text-base font-semibold text-white bg-[#171717] hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore the fleet
                <ArrowRight />
              </Link>
              <Link
                href="/#enquiry"
                data-icon-arrow
                className="inline-flex items-center rounded-xl px-7 py-4 text-base font-semibold text-[#171717] bg-white/95 backdrop-blur-sm border-2 border-[#171717] hover:bg-[#171717] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Enquire now
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
