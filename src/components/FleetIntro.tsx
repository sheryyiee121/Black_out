import Link from "next/link";

export default function FleetIntro() {
  return (
    <section className="relative">
      {/* White gradient fade - overlaps hero so transparent top reveals video, then fades to white */}
      <div
        className="absolute top-0 left-0 right-0 h-[18vh] w-full pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgb(255, 255, 255) 100%)",
        }}
        aria-hidden
      />

      <div data-animate="fade-up" className="relative z-10 mt-[18vh] bg-white mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-[#171717] text-4xl sm:text-5xl font-light tracking-tight">
          Our Fleet.
        </h2>
        <p className="mt-4 max-w-2xl text-[#737373] text-base font-normal">
          Browse Queensland&apos;s finest luxury hire cars: from exotic supercars and sport car hire to premium SUVs. Available for luxury car rental across Brisbane, Gold Coast, Sunshine Coast and Noosa.
        </p>
        <div className="mt-8">
          <Link
            href="/fleet"
            className="inline-flex items-center rounded-full text-sm font-medium text-[#171717] transition hover:opacity-80"
            style={{
              background: "rgba(245, 245, 245, 0.5)",
              padding: "0.5rem 1.25rem",
            }}
          >
            View All Fleet
          </Link>
        </div>
      </div>
    </section>
  );
}
