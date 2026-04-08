import Link from "next/link";
import Image from "next/image";
import { FLEET_CARS } from "@/data/fleet";
import { notFound } from "next/navigation";
import CarEnquiryForm from "@/components/CarEnquiryForm";
import { PHONE_TEL_HREF, SNAPCHAT_HREF, whatsappChatLink } from "@/lib/contact";

export async function generateStaticParams() {
  return FLEET_CARS.map((car) => ({ id: car.id }));
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SpecIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#737373]">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export default async function FleetDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = FLEET_CARS.find((c) => c.id === id);
  if (!car) notFound();

  const bodyText = car.longDescription ?? car.description;
  const location = car.location ?? "Brisbane";

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/#fleet" className="inline-block text-sm font-medium text-[#737373] hover:text-[#171717] mb-8">
          ← Back to fleet
        </Link>

        {/* Title, tagline, description */}
        <h1 className="text-[#171717] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Rent a {car.name} in {location}
        </h1>
        {car.tagline && (
          <p className="mt-2 text-[#737373] text-lg">
            {car.tagline}
          </p>
        )}
        <p className="mt-4 text-[#525252] leading-relaxed max-w-3xl">
          {bodyText}
        </p>

        {/* Large car image - rounded top */}
        <div className="mt-10 rounded-t-2xl overflow-hidden border border-b-0 border-[rgb(227,227,227)] aspect-[16/10] sm:aspect-[2/1] relative bg-[rgba(245,245,245,0.5)]">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
          />
        </div>

        {/* Two columns: Contact + Specs | Quick enquiry */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 mt-12">
          {/* Left: Contact us + Car Specification */}
          <div className="space-y-10">
            <div className="rounded-2xl border border-[rgb(227,227,227)] bg-white p-6 sm:p-8">
              <h2 className="text-[#171717] text-xl font-bold text-center">Contact us</h2>
              <p className="mt-2 text-center text-sm text-[#737373]">Insurance included · Crypto accepted</p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <a
                  href={PHONE_TEL_HREF}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#171717] bg-white px-5 py-3 text-sm font-medium text-[#171717] hover:bg-[#171717] hover:text-white transition"
                >
                  <PhoneIcon />
                  Call
                </a>
                <a
                  href={whatsappChatLink(
                    `Hello Blackout Car Rental, I'm interested in renting the ${car.name} in ${location}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-medium text-white hover:bg-[#20bd5a] transition"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
                <a
                  href={SNAPCHAT_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#171717] bg-white px-5 py-3 text-sm font-medium text-[#171717] hover:bg-[#fafafa] transition"
                >
                  Snapchat (@Blackoutrental)
                </a>
              </div>
            </div>

            {car.specs && car.specs.length > 0 && (
              <div className="rounded-2xl border border-[rgb(227,227,227)] bg-white p-6 sm:p-8">
                <h2 className="text-[#171717] text-xl font-bold text-center mb-6">Car Specification</h2>
                <ul className="space-y-4">
                  {car.specs.map((spec) => (
                    <li key={spec.label} className="flex items-center gap-3">
                      <SpecIcon />
                      <span className="text-[#737373] text-sm">{spec.label}</span>
                      <span className="text-[#171717] text-sm font-medium ml-auto">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: Quick enquiry */}
          <div className="rounded-2xl border border-[rgb(227,227,227)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-[rgb(249,115,22)]" aria-hidden />
              <span className="text-xs font-medium uppercase tracking-wider text-[#737373]">Get a quote</span>
            </div>
            <h2 className="text-[#171717] text-xl font-bold">Quick enquiry</h2>
            <p className="mt-2 text-sm text-[#737373]">
              Interested in the {car.name}? We&apos;ll get back to you fast.
            </p>
            <div className="mt-6">
              <CarEnquiryForm carName={car.name} />
            </div>
          </div>
        </div>

        {/* Car Features - pills */}
        {car.features && car.features.length > 0 && (
          <div className="mt-12">
            <h2 className="text-[#171717] text-xl font-bold mb-6">Car Features</h2>
            <div className="rounded-2xl border border-[rgb(227,227,227)] bg-white p-6 sm:p-8">
              <div className="flex flex-wrap gap-3">
                {car.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-2 rounded-xl bg-[rgba(245,245,245,0.6)] px-4 py-2.5 text-sm font-medium text-[#171717] border border-[rgba(227,227,227,0.6)]"
                  >
                    <SpecIcon />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
