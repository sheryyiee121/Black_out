"use client";

import { useState } from "react";
import Link from "next/link";
import FleetCarCard from "@/components/FleetCarCard";
import { FLEET_CARS, FLEET_CATEGORIES, type FleetCategory } from "@/data/fleet";
import { WHATSAPP_PREFILL_INTRO, whatsappChatLink } from "@/lib/contact";

export default function FleetPageGrid() {
  const [activeCategory, setActiveCategory] = useState<FleetCategory>("All");

  const filtered =
    activeCategory === "All" ? FLEET_CARS : FLEET_CARS.filter((c) => c.category === activeCategory);

  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            Our fleet
          </h1>
          <p className="mt-3 max-w-2xl text-[#525252] leading-relaxed">
            Every vehicle below is available in Islamabad, Lahore and Multan. SUVs, utes, sedans and
            people movers—pick a car and reach out for dates and pricing.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/#enquiry"
            className="inline-flex items-center rounded-full bg-[#171717] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
          >
            Make an enquiry
          </Link>
          <a
            href={whatsappChatLink(WHATSAPP_PREFILL_INTRO)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-2 border-b border-[rgb(227,227,227)] pb-6">
        {FLEET_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className="rounded-full px-4 py-2 text-sm font-medium transition"
            style={{
              background: activeCategory === cat ? "rgba(245, 245, 245, 1)" : "transparent",
              color: activeCategory === cat ? "#171717" : "#737373",
              border: activeCategory === cat ? "1px solid rgb(227,227,227)" : "1px solid transparent",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-[#737373]">
        Showing {filtered.length} {filtered.length === 1 ? "vehicle" : "vehicles"}
        {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
      </p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((car) => (
          <FleetCarCard key={car.id} car={car} variant="grid" />
        ))}
      </div>
    </>
  );
}
