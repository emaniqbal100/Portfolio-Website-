"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import containerArtwork from "@/assets/container.png";
import Hero from "./Hero";
import PortfolioSection from "./PortfolioSection";

const clamp01 = (value) => Math.min(1, Math.max(0, value));

export default function HeroPortfolio() {
  const portfolioPanelRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const artworkOpacity = useMotionValue(0);
  const artworkScale = useMotionValue(0.86);

  useEffect(() => {
    const panel = portfolioPanelRef.current;
    if (!panel) return undefined;

    const updateArtwork = () => {
      const viewportHeight = window.innerHeight;
      const panelProgress = clamp01(
        (viewportHeight - panel.getBoundingClientRect().top) / viewportHeight,
      );
      const entranceProgress = clamp01(window.scrollY / (viewportHeight * 0.34));

      artworkOpacity.set(
        prefersReducedMotion ? 1 : entranceProgress * (1 - panelProgress),
      );
      artworkScale.set(prefersReducedMotion ? 1 : 0.86 + entranceProgress * 0.14);
    };

    updateArtwork();
    window.addEventListener("scroll", updateArtwork, { passive: true });
    window.addEventListener("resize", updateArtwork);

    return () => {
      window.removeEventListener("scroll", updateArtwork);
      window.removeEventListener("resize", updateArtwork);
    };
  }, [artworkOpacity, artworkScale, prefersReducedMotion]);

  return (
    <div className="relative isolate">
      <Hero />
      <PortfolioSection panelRef={portfolioPanelRef} />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[calc(100svh_-_232px)] z-[5] w-[clamp(190px,18.5vw,260px)]"
        style={
          prefersReducedMotion
            ? { opacity: 0 }
            : { opacity: artworkOpacity, scale: artworkScale }
        }
      >
        <Image
          src={containerArtwork}
          alt=""
          sizes="(min-width: 1400px) 260px, 18.5vw"
          className="h-auto w-full drop-shadow-[0_24px_48px_rgba(30,24,20,0.18)]"
        />
      </motion.div>
    </div>
  );
}
