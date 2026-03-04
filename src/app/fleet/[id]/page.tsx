import Link from "next/link";
import Image from "next/image";
import { FLEET_CARS } from "@/data/fleet";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return FLEET_CARS.map((car) => ({ id: car.id }));
}

export default async function FleetDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = FLEET_CARS.find((c) => c.id === id);
  if (!car) notFound();

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/#fleet" className="inline-block text-sm font-medium text-[#737373] hover:text-[#171717] mb-8">
          ← Back to fleet
        </Link>
        <div className="rounded-2xl overflow-hidden border border-[rgb(227,227,227)] shadow-sm">
          <div className="relative aspect-[16/9] bg-[rgba(245,245,245,0.5)]">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <div className="p-8">
            <h1 className="text-[#171717] text-2xl sm:text-3xl font-semibold">
              {car.name}
              {car.plate && <span className="block text-lg font-normal text-[#737373] mt-1">{car.plate}</span>}
            </h1>
            <p className="mt-4 text-[#737373] leading-relaxed">{car.description}</p>
            <Link
              href="/#enquiry"
              className="mt-6 inline-flex rounded-xl px-6 py-3 text-sm font-medium text-white bg-black hover:opacity-90 transition"
            >
              Enquire about this vehicle
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
