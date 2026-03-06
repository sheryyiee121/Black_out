import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationWrapper from "@/components/AnimationWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxury Car Hire Brisbane, Gold Coast & Sunshine Coast | Velo Rentals",
  description:
    "Rent a car that matches the occasion. Professional chauffeurs, VIP cars and self-drive luxury car rentals across Brisbane, Gold Coast, Sunshine Coast and Noosa Heads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-white text-[#171717] text-base font-normal antialiased`} style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Header />
        <AnimationWrapper>{children}</AnimationWrapper>
        <Footer />
      </body>
    </html>
  );
}
