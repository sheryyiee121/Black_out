"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationWrapper({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const refresh = () => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    const t = setTimeout(refresh, 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up elements
      gsap.utils.toArray<HTMLElement>("[data-animate=fade-up]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Fade in
      gsap.utils.toArray<HTMLElement>("[data-animate=fade-in]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Stagger children (e.g. cards, list items)
      gsap.utils.toArray<HTMLElement>("[data-animate=stagger]").forEach((parent) => {
        const children = parent.querySelectorAll("[data-animate-item]");
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: parent,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Scale in
      gsap.utils.toArray<HTMLElement>("[data-animate=scale]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Slide from left
      gsap.utils.toArray<HTMLElement>("[data-animate=slide-left]").forEach((el) => {
        gsap.fromTo(
          el,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Slide from right
      gsap.utils.toArray<HTMLElement>("[data-animate=slide-right]").forEach((el) => {
        gsap.fromTo(
          el,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Icon pop - scale + bounce + slight rotation on entrance
      gsap.utils.toArray<HTMLElement>("[data-animate=icon-pop]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0, rotation: -20, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Icon stagger - stagger children with icon-pop effect
      gsap.utils.toArray<HTMLElement>("[data-animate=icon-stagger]").forEach((parent) => {
        const children = parent.querySelectorAll("[data-animate-icon]");
        gsap.fromTo(
          children,
          { scale: 0, rotation: -15, opacity: 0, y: 20 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: parent,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Icon float - subtle continuous float (for decorative icons)
      gsap.utils.toArray<HTMLElement>("[data-animate=icon-float]").forEach((el) => {
        gsap.to(el, {
          y: -6,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Button arrow hover: add hover listeners for arrows that slide right
      gsap.utils.toArray<HTMLElement>("[data-icon-arrow]").forEach((el) => {
        const arrow = el.querySelector("svg");
        if (!arrow) return;
        el.addEventListener("mouseenter", () => {
          gsap.to(arrow, { x: 4, duration: 0.25, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(arrow, { x: 0, duration: 0.25, ease: "power2.out" });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}
