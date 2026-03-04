import Image from "next/image";

const features = [
  {
    title: "Fast & Easy Booking",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Many Pickup Locations",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "No Booking Charges",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 18v-6" />
        <path d="M9 15l3 3 3-3" />
      </svg>
    ),
  },
];

export default function WelcomeSection() {
  return (
    <section className="bg-white border-t border-[rgb(227,227,227)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-[#737373] text-xs sm:text-sm font-medium uppercase tracking-widest mb-4">
              Are you looking for rent a car near me?
            </p>
            <h2 className="text-[#171717] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Welcome to{" "}
              <span className="text-[rgb(249,115,22)]">Blackout Car rental</span>
            </h2>
            <p className="mt-5 text-[#737373] text-base leading-relaxed max-w-lg">
              Rent a car and get free airport pick-and-drop service. We offer our services in Brisbane, Gold Coast and Sunshine Coast at competitive rates!
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="flex flex-col items-start">
                  <span className="text-[#171717]" aria-hidden>
                    {f.icon}
                  </span>
                  <p className="mt-3 text-[#171717] text-sm font-medium uppercase tracking-wide leading-snug">
                    {f.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-lg lg:ml-auto">
            <Image
              src="/customs/pexels-shkrabaanthony-7144185.jpg"
              alt="Blackout Car Rental - Professional service"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
