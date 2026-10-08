"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import texture from "@/assets/ForegraoundBG.png";
import orange from "@/assets/hoverbg.png";
import RevealBackground from "./RevealBackground";

const roles = [
  {
    company: "TERAFORT",
    title: "UI / UX Designer",
    date: "JULY 2026 – PRESENT",
    location: "LAHORE, PAKISTAN",
    bullets: [
      "Mobile UI/UX Designer focused on turning real user problems into simple, intuitive digital experiences.",
      "I design thoughtful, user-centered products backed by strong UX decisions and meaningful case studies.",
    ],
  },
  {
    company: "DESIGNS BY ALI",
    title: "UI Designer",
    date: "SEPTEMBER 2024 – RECENT",
    location: "REMOTE",
    bullets: [
      "Created clean, responsive interfaces and reusable components for digital products.",
      "Worked with teams to turn early concepts into polished design solutions.",
    ],
  },
  {
    company: "ASAPP STUDIO",
    title: "UI / UX Designer | Product Designer",
    date: "SEPTEMBER 2025 – JUNE 2026",
    location: "LAHORE, PAKISTAN",
    bullets: [
      "Designed user flows, prototypes, and high-fidelity product interfaces.",
      "Partnered with collaborators to make product experiences clearer and easier to use.",
    ],
  },
];

export default function CareerSection() {
  const [openRole, setOpenRole] = useState(0);

  return (
    <section
      id="career"
      aria-labelledby="career-title"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 sm:px-10 lg:px-14"
    >
      <RevealBackground grey={texture} orange={orange} radius={145} feather={95} />
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-4 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.17em] text-[#68717b]">
            <span aria-hidden="true">▣</span>
            Career journey
          </div>
          <h2
            id="career-title"
            className="text-[clamp(3rem,7.5vw,5.2rem)] font-bold leading-[1.02] tracking-[-0.055em] text-[#3d302c]"
          >
            Where I&apos;ve
            <br />
            <span className="text-[#f35b0b]">Delivered!</span>
          </h2>
          <p className="mt-5 max-w-[440px] text-[17px] leading-[1.7] text-[#6d7782]">
            2 years and 1 month of experience across studios, agencies, and
            global platforms, focused on solving real user problems through
            thoughtful UX and intuitive UI.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-3 rounded-xl border border-[#f35b0b] px-4 py-2 text-sm font-semibold text-[#f35b0b] transition-colors hover:bg-[#f35b0b] hover:text-white"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </motion.div>

        <div className="relative space-y-1 border-l border-white/80 pl-7 sm:pl-10">
          {roles.map((role, index) => {
            const isOpen = openRole === index;
            return (
              <motion.article
                key={role.company}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative py-2"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[34px] top-6 h-3 w-3 rounded-full border-2 border-white sm:-left-[47px] ${
                    isOpen ? "bg-[#f35b0b]" : "bg-[#ffd7c4]"
                  }`}
                />
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenRole(isOpen ? -1 : index)}
                  className={`w-full text-left transition-all ${
                    isOpen
                      ? "rounded-[20px] border border-white/45 bg-[#c2bfbb]/60 p-4 shadow-[inset_0_2px_10px_rgba(40,38,36,0.1)] sm:p-5"
                      : "px-4 py-3"
                  }`}
                >
                  <span className="flex items-start justify-between gap-4">
                    <span>
                      <span className="block text-lg font-bold text-[#3d302c]">
                        {role.company}
                      </span>
                      <span className="mt-0.5 block text-base font-semibold text-[#f35b0b]">
                        {role.title}
                      </span>
                      <span className="mt-1 block text-[10px] font-medium tracking-[0.11em] text-[#68717b]">
                        {role.date} · {role.location}
                      </span>
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#a6a19c] text-base text-[#47413d]">
                      {isOpen ? "×" : "+"}
                    </span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mx-4 border-t border-[#918b84]/40 pb-3 pt-3 sm:mx-5">
                        <p className="mb-2 text-[11px] text-[#68717b]">
                          Design Services
                        </p>
                        <ul className="space-y-2">
                          {role.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-2 text-[13px] leading-relaxed text-[#34302f]"
                            >
                              <span className="text-[#f35b0b]">•</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
