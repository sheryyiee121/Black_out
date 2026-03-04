"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source src="/videos/13103349_1920_1080_60fps.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8 text-center">
        <p className="text-white text-sm sm:text-base font-medium uppercase tracking-widest mb-4">
          Blackout Rentals
        </p>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight max-w-4xl">
          Premium Luxury Car Hire Brisbane
        </h1>
        <p className="mt-6 max-w-2xl text-white text-base sm:text-lg font-normal opacity-90">
          Rent a car that matches the occasion. Professional chauffeurs, VIP cars and self-drive luxury car rentals across Brisbane, Gold Coast, Sunshine Coast and Noosa Heads. Effortless from first enquiry to handover.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#enquiry"
            className="rounded-xl px-8 py-3.5 text-base font-medium text-[#171717] transition hover:opacity-90"
            style={{ background: "rgb(255, 255, 255)" }}
          >
            Enquire now
          </Link>
          <Link
            href="/fleet"
            className="rounded-xl px-8 py-3.5 text-base font-medium text-white transition hover:opacity-90"
            style={{ background: "rgba(0, 0, 0, 0.6)" }}
          >
            Explore the fleet
          </Link>
        </div>
      </div>
    </section>
  );
}
