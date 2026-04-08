import type { Metadata } from "next";
import Link from "next/link";
import FleetPageGrid from "@/components/FleetPageGrid";

export const metadata: Metadata = {
  title: "Our Fleet | Blackout Car Rental",
  description:
    "Browse every car available from Blackout Car Rental—SUVs, utes, sedans and people movers in Islamabad, Lahore and Multan.",
};

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-sm font-medium text-[#737373]">
          <Link href="/" className="transition hover:text-[#171717]">
            Home
          </Link>
          <span className="mx-2 text-[#d4d4d4]">/</span>
          <span className="text-[#171717]">Fleet</span>
        </p>
        <FleetPageGrid />
      </div>
    </main>
  );
}
