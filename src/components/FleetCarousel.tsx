"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import FleetCarCard from "@/components/FleetCarCard";
import { FLEET_CARS, FLEET_CATEGORIES, type FleetCategory } from "@/data/fleet";

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

const CARD_WIDTH = 320;
const CARD_GAP = 40;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

export default function FleetCarousel() {
  const [activeCategory, setActiveCategory] = useState<FleetCategory>("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredCars = activeCategory === "All"
    ? FLEET_CARS
    : FLEET_CARS.filter((c) => c.category === activeCategory);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = typeof window !== "undefined" && window.innerWidth < 640 ? 280 + CARD_GAP : SCROLL_STEP;
    scrollRef.current.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section id="fleet" className="bg-white border-t border-[rgb(227,227,227)]">
      <div data-animate="fade-up" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Tabs + View All Fleet */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {FLEET_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full px-4 py-2 text-sm font-medium transition"
                style={{
                  background: activeCategory === cat ? "rgba(245, 245, 245, 0.8)" : "transparent",
                  color: activeCategory === cat ? "#171717" : "#737373",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <Link
            href="/fleet"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 shrink-0"
            style={{ background: "rgb(0, 0, 0)" }}
          >
            View All Fleet
            <ChevronRight />
          </Link>
        </div>

        <div className="mt-6 border-b border-[rgb(227,227,227)]" />

        {/* Horizontal scroll + arrows */}
        <div className="relative mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 shadow-md border border-[rgb(227,227,227)] flex items-center justify-center text-[#171717] hover:bg-white transition"
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 shadow-md border border-[rgb(227,227,227)] flex items-center justify-center text-[#171717] hover:bg-white transition"
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-12 scrollbar-hide scroll-smooth-carousel"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth",
              scrollPaddingInline: "0",
            }}
          >
            {filteredCars.map((car) => (
              <FleetCarCard key={car.id} car={car} variant="carousel" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
