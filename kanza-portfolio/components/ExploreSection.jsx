"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import texture from "@/assets/ForegraoundBG.png";
import orange from "@/assets/hoverbg.png";
import RevealBackground from "./RevealBackground";

const cycle = ["explore", "design"];
const tools = ["Figma", "Ai", "Ps", "Ae", "Canva", "P"];
const aiTools = ["GPT", "✳", "MJ", "v0", "∞"];

function ToolTile({ label, index }) {
  const colors = [
    "bg-[#15b986] text-white",
    "bg-[#351006] text-[#ffad18]",
    "bg-[#062544] text-[#38adf5]",
    "bg-[#151067] text-[#a5a1ff]",
    "bg-[#00aeb5] text-white",
    "bg-[#ca432c] text-white",
  ];

  return (
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-black shadow-sm sm:h-11 sm:w-11 ${colors[index % colors.length]}`}
    >
      {label}
    </span>
  );
}

function ExploreIcon({ word }) {
  if (word === "design") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 56 56"
        className="h-12 w-12 text-[#f35b0b] sm:h-14 sm:w-14"
        fill="none"
      >
        <path
          d="M28 5c-12 0-21 8-21 19 0 9 7 13 12 13h4c2 0 3 2 2 4-2 4 0 8 5 8 12 0 20-11 20-23S40 5 28 5Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17" cy="21" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="27" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="38" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="41" cy="30" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 56 56"
      className="h-12 w-12 text-[#59616b] sm:h-14 sm:w-14"
      fill="none"
    >
      <path
        d="M28 5c8 10 11 19 9 29l-9 12-9-12C17 24 20 15 28 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="m19 29-7 7 9 1m16-8 7 7-9 1M24 44l4 7 4-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoCard({ label, icon, title, children }) {
  return (
    <article className="rounded-[20px] border border-white/35 bg-[#bbb8b4]/65 p-4 shadow-[inset_0_2px_10px_rgba(40,38,36,0.1)] backdrop-blur-sm sm:p-5">
      <p className="flex items-center gap-2 text-xs font-semibold text-[#453a35]">
        <span aria-hidden="true" className="text-[#68717b]">{icon}</span>
        {label}
      </p>
      <h3 className="mt-2 text-base font-bold leading-snug text-[#f35b0b] sm:text-lg">
        {title}
      </h3>
      <p className="mt-1.5 text-xs leading-[1.55] text-[#433c38] sm:text-[13px]">
        {children}
      </p>
    </article>
  );
}

export default function ExploreSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const word = cycle[wordIndex];

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const timer = window.setInterval(
      () => setWordIndex((index) => (index + 1) % cycle.length),
      2800,
    );
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section
      id="explore"
      aria-labelledby="explore-title"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-5 py-14 text-[#3d302c] sm:px-8 sm:py-16"
    >
      <RevealBackground grey={texture} orange={orange} radius={145} feather={95} />
      <div className="relative z-10 mx-auto w-full max-w-[1000px]">
        <div className="mb-7 text-center sm:mb-9">
          <h2
            id="explore-title"
            className="mt-1 text-[clamp(2.1rem,5.8vw,2.9rem)] font-bold leading-tight tracking-[-0.045em]"
          >
            The more I{" "}
            <span className="inline-flex items-center gap-2 whitespace-nowrap text-[#6d7782]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {word}
                </motion.span>
              </AnimatePresence>
              <motion.span
                key={`${word}-icon`}
                initial={{ opacity: 0, rotate: -18, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                <ExploreIcon word={word} />
              </motion.span>
            </span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard label="Currently Working" icon="◷" title="UI/UX Designer">
            Specializing in mobile app design and creating intuitive,
            user-centered digital experiences. Focused on seamless user
            journeys, clean interfaces, and functional design solutions.
          </InfoCard>
          <InfoCard
            label="Currently Exploring"
            icon="▦"
            title="AI Tools & AI-Integrated Design"
          >
            Exploring AI-powered tools to streamline workflows, enhance
            creativity, accelerate prototyping, and create smarter experiences.
          </InfoCard>
          <InfoCard label="Education" icon="▱" title="MPhil in Physics">
            Session: 2018 – 2020
            <br />
            CGPA: 3.65
            <br />
            Bronze Medalist
          </InfoCard>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-[20px] border border-white/35 bg-[#bbb8b4]/65 p-4 shadow-[inset_0_2px_10px_rgba(40,38,36,0.1)] backdrop-blur-sm sm:p-5">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#453a35]">
              <span className="flex items-center gap-2">◷ My Toolkit</span>
              <span className="text-[9px] tracking-widest text-[#68717b]">6 TOOLS</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {tools.map((tool, index) => (
                <ToolTile key={tool} label={tool} index={index} />
              ))}
            </div>
          </article>
          <article className="rounded-[20px] border border-white/35 bg-[#bbb8b4]/65 p-4 shadow-[inset_0_2px_10px_rgba(40,38,36,0.1)] backdrop-blur-sm sm:p-5">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#453a35]">
              <span className="flex items-center gap-2">◷ AI Workflow</span>
              <span className="text-[9px] tracking-widest text-[#68717b]">5 TOOLS</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {aiTools.map((tool, index) => (
                <ToolTile key={tool} label={tool} index={index + 1} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
