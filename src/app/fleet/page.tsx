import Link from "next/link";

export const metadata = {
  title: "Premium Luxury Car Rental Fleet | Velo Rentals",
  description:
    "Discover our premium luxury car rental fleet across Brisbane, Gold Coast, and Sunshine Coast. From high-performance sports cars and exotic supercars to executive sedans and luxury SUVs.",
};

export default function FleetPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Premium Luxury Car Rental Fleet
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Discover our premium luxury car rental fleet across Brisbane, Gold Coast, and Sunshine Coast. From high-performance sports cars and exotic supercars to executive sedans and luxury SUVs.
        </p>
        <div className="mt-12 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-300">All</span>
          <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-300">Recommended</span>
        </div>
        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-12 text-center">
          <p className="text-zinc-500">Fleet listings can be added here (cars, filters, images).</p>
          <Link href="/" className="mt-4 inline-block text-[#c9a227] hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
