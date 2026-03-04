import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "rgb(255, 255, 255)",
        borderColor: "rgb(227, 227, 227)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="text-lg font-semibold text-[#171717]">
              Velo Rentals
            </Link>
            <p className="mt-2 max-w-sm text-sm text-[#737373]">
              Luxury car hire across Brisbane, Gold Coast, Sunshine Coast and Noosa Heads.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Link href="/fleet" className="text-sm text-[#737373] hover:text-[#171717] transition">
              Fleet
            </Link>
            <Link href="/services" className="text-sm text-[#737373] hover:text-[#171717] transition">
              Services
            </Link>
            <Link href="/#enquiry" className="text-sm text-[#737373] hover:text-[#171717] transition">
              Enquire
            </Link>
          </div>
        </div>
        <div
          className="mt-8 border-t pt-8 text-sm text-[#737373]"
          style={{ borderColor: "rgba(227, 227, 227, 0.5)" }}
        >
          © {new Date().getFullYear()} Velo Rentals. Queensland luxury car hire.
        </div>
      </div>
    </footer>
  );
}
