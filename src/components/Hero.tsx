"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(taglineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(descRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
      .fromTo(btnsRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3");
  }, []);

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
        <p ref={taglineRef} className="text-white text-sm sm:text-base font-medium uppercase tracking-widest mb-4">
          Blackout Car Rental
        </p>
        <h1 ref={titleRef} className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight max-w-4xl">
          Premium Luxury Car Hire Islamabad
        </h1>
        <p ref={descRef} className="mt-6 max-w-2xl text-white text-base sm:text-lg font-normal opacity-90">
          Rent a car that matches the occasion. Professional chauffeurs, VIP cars and self-drive luxury car rentals across Brisbane, Gold Coast, Sunshine Coast and Noosa Heads. Effortless from first enquiry to handover.
        </p>
        <div ref={btnsRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
