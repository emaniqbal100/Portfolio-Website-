"use client";

import greyBg from "@/assets/ForegraoundBG.png";
import orangeBg from "@/assets/hoverbg.png";
import RevealBackground from "./RevealBackground";
import Carousel from "./Crasoul";
import { motion } from "framer-motion";

const ORANGE = "#ff6a00";
const DARK = "#2b2521";
const WOOD = "#6b4423";
const INK = "#1c1a18";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } },
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function AboutSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10 lg:pl-20">
      <RevealBackground grey={greyBg} orange={orangeBg} radius={110} feather={70} />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2"
      >
        <div>
          <motion.div variants={fadeUp(0)} className="mb-2 flex items-center gap-3">
            <span className="text-2xl font-semibold" style={{ color: DARK }}>
              From
            </span>
            <svg width="26" height="26" viewBox="0 0 24 24" fill={ORANGE}>
              <path d="M21.5 2.5 2 11l7.2 2.8L12 21l2-6.8 7.5-11.7Z" />
            </svg>
            <svg width="90" height="34" viewBox="0 0 90 34" fill="none" className="hidden sm:block">
              <path
                d="M3 6c18 -4 34 2 48 10 10 6 18 10 28 11"
                stroke={DARK}
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M70 21l9 6-8 5"
                stroke={DARK}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="mb-3 text-5xl font-bold sm:text-7xl" style={{ color: ORANGE }}>
            Pixels to Product
          </motion.h2>

          {/* "I'm Kanza" — wooden ruler box */}
          <motion.div
            variants={fadeUp(0.1)}
            className="mb-3 block w-full max-w-xl overflow-hidden rounded-2xl border-[3px] bg-transparent"
            style={{ borderColor: WOOD }}
          >
            <div className="border-b-[3px] px-4 pb-2 pt-3" style={{ borderColor: WOOD }}>
              <svg viewBox="0 0 460 20" preserveAspectRatio="none" className="h-5 w-full">
                {Array.from({ length: 46 }, (_, i) => (
                  <line
                    key={i}
                    x1={i * 10}
                    x2={i * 10}
                    y1={20}
                    y2={i % 5 === 0 ? 4 : 11}
                    stroke={WOOD}
                    strokeWidth={i % 5 === 0 ? 2 : 1.3}
                    strokeLinecap="round"
                  />
                ))}
              </svg>
            </div>
            <div className="flex items-center gap-4 px-7 py-5">
              <h1 className="text-5xl font-extrabold tracking-wider sm:text-7xl" style={{ color: INK }}>
                I&rsquo;m Kanza
              </h1>
              <svg width="34" height="34" viewBox="0 0 34 34" className="shrink-0">
                <ellipse
                  cx="17"
                  cy="17"
                  rx="10"
                  ry="13"
                  stroke={WOOD}
                  strokeWidth="2.4"
                  fill="none"
                  transform="rotate(-10 17 17)"
                />
              </svg>
            </div>
          </motion.div>

          <motion.p variants={fadeUp(0.15)} className="mb-1.5 text-xl font-semibold sm:text-2xl" style={{ color: ORANGE }}>
            UI/UX &amp; Product Designer
          </motion.p>

          <motion.p variants={fadeUp(0.2)} className="mb-5 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: DARK }}>
            Designing simple, intuitive, and purposeful experiences for digital products. I work across UX
            research, interaction design, high-fidelity UI, prototyping, design systems, accessibility, and
            developer collaboration.
          </motion.p>

          <motion.a
            variants={fadeUp(0.25)}
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2.5 rounded-full border-2 px-8 py-3.5 text-base font-semibold transition-colors hover:bg-[var(--orange)] hover:text-white"
            style={{ borderColor: ORANGE, color: ORANGE, "--orange": ORANGE }}
          >
            Download my Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 3v13m0 0 5-5m-5 5-5-5M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>

          <motion.div variants={fadeUp(0.3)} className="mt-8 flex items-center gap-3">
            <span className="h-[2px] w-10" style={{ background: ORANGE }} />
            <span className="text-sm font-medium tracking-wide" style={{ color: DARK }}>
              KEEP SCROLLING
            </span>
          </motion.div>
        </div>

        <motion.div variants={fadeUp(0.2)} className="flex justify-center md:justify-end">
          <Carousel />
        </motion.div>
      </motion.div>
    </section>
  );
}