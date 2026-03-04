import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import FleetIntro from "@/components/FleetIntro";
import FleetCarousel from "@/components/FleetCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <section className="relative" style={{ marginTop: "-18vh" }}>
        <FleetIntro />
      </section>
      <FleetCarousel />
    </>
  );
}
