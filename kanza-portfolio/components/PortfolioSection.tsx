"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import portfolioIllustration from "@/assets/portofiloMain.png";
import texture from "@/assets/ForegraoundBG.png";
import orange from "@/assets/hoverbg.png";
import RevealBackground from "./RevealBackground";

export default function PortfolioSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.8,
  });
  const containerScale = useTransform(smoothProgress, [0, 1], [0.68, 1]);
  const containerY = useTransform(smoothProgress, [0, 1], [130, 0]);
  const containerOpacity = useTransform(smoothProgress, [0, 1], [0.16, 1]);
  const backgroundDim = useTransform(smoothProgress, [0, 1], [0, 0.32]);

  return (
    <section
      ref={sectionRef}
      id="portfolio-intro"
      aria-labelledby="portfolio-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-12 sm:px-8"
    >
      <RevealBackground grey={texture} orange={orange} radius={150} feather={100} />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[#282321]"
        style={{ opacity: prefersReducedMotion ? 0.12 : backgroundDim }}
      />

      <motion.div
        className="relative z-10 w-full max-w-[740px] rounded-[24px] border border-white/25 bg-[#b9b6b2]/55 px-7 py-9 shadow-[inset_0_2px_12px_rgba(40,38,36,0.18),0_12px_32px_rgba(45,42,39,0.12)] backdrop-blur-[2px] sm:rounded-[26px] sm:px-[54px] sm:py-[54px]"
        style={
          prefersReducedMotion
            ? undefined
            : {
                scale: containerScale,
                y: containerY,
                opacity: containerOpacity,
              }
        }
      >
        <div className="mb-4 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#68717b] sm:text-sm">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
          >
            <path
              d="m14.5 5.5 4 4M4 20l4.4-.9L19.2 8.3a2.8 2.8 0 0 0-4-4L4.4 15.1 4 20Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
          <span>Portfolio</span>
        </div>

        <h2
          id="portfolio-title"
          className="max-w-[560px] text-[clamp(2.5rem,7vw,3.3rem)] font-bold leading-[1.16] tracking-[-0.04em] text-[#6d7782]"
        >
          <span className="text-[#f35b0b]">Curiosity</span> sparks
          <br />
          Ideas....
        </h2>

        <div className="relative mx-auto my-6 aspect-[668/320] w-full sm:my-4">
          <Image
            src={portfolioIllustration}
            alt="A curious designer turning an idea into a colorful digital product"
            fill
            sizes="(max-width: 640px) 90vw, 620px"
            className="object-contain"
            priority
          />
        </div>

        <p className="text-right text-[clamp(2.2rem,6.6vw,3rem)] font-bold leading-[1.15] tracking-[-0.045em] text-[#3d302c]">
          <span className="text-[#6d7782]">Design</span> brings them to
          <br />
          <span className="text-[#f35b0b]">LIFE</span>
        </p>
      </motion.div>
    </section>
  );
}