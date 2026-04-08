import Image from "next/image";
import Link from "next/link";
import type { FleetCar } from "@/data/fleet";

type Props = {
  car: FleetCar;
  /** Fixed width for horizontal carousel */
  variant?: "carousel" | "grid";
};

export default function FleetCarCard({ car, variant = "grid" }: Props) {
  const widthClass =
    variant === "carousel"
      ? "shrink-0 w-[280px] sm:w-[320px]"
      : "w-full max-w-md mx-auto sm:max-w-none";

  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-[rgb(227,227,227)] bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[rgba(227,227,227,0.8)] hover:shadow-xl ${widthClass}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[rgba(245,245,245,0.5)]">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes={variant === "carousel" ? "(max-width: 640px) 280px, 320px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">{car.category}</p>
        <h3 className="mt-1 text-lg leading-tight font-medium text-[#171717]">
          {car.name}
          {car.plate && (
            <span className="mt-0.5 block text-sm font-normal text-[#737373]">{car.plate}</span>
          )}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-snug text-[#737373]">{car.description}</p>
        <Link
          href={`/fleet/${car.id}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
          style={{ background: "rgb(0, 0, 0)" }}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
