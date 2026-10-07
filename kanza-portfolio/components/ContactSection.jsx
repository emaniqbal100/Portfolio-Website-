"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import portrait from "@/assets/mainimage.png";
import texture from "@/assets/ForegraoundBG.png";
import orange from "@/assets/hoverbg.png";
import RevealBackground from "./RevealBackground";

const projectTypes = [
  "SaaS / Dashboard",
  "Mobile app",
  "Website",
  "Brand identity",
  "Design system",
  "UX audit",
];

export default function ContactSection() {
  const [projectType, setProjectType] = useState(projectTypes[0]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry: ${projectType}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nBudget: ${formData.get("budget")}\n\n${formData.get("message")}`,
    );
    window.location.href = `mailto:kannyqb@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative flex min-h-screen items-center overflow-hidden px-5 py-16 sm:px-8 lg:px-12"
    >
      <RevealBackground grey={texture} orange={orange} radius={145} feather={95} />
      <div className="relative z-10 mx-auto grid w-full max-w-[1120px] items-center gap-10 md:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.17em] text-[#68717b]">
            <span aria-hidden="true">●</span> Contact
          </div>
          <h2
            id="contact-title"
            className="text-[clamp(2.9rem,7.3vw,4.8rem)] font-bold leading-[0.97] tracking-[-0.055em] text-[#3d302c]"
          >
            Give me a half-
            <br />
            formed idea.
            <br />
            <span className="text-[#f35b0b]">
              I&apos;ll make it
              <br />
              a product.
            </span>
          </h2>
          <div className="mt-7 flex items-center gap-3">
            <Image
              src={portrait}
              alt="Kanza Iqbal"
              width={54}
              height={54}
              className="h-[54px] w-[54px] rounded-full bg-[#f35b0b] object-contain"
            />
            <div>
              <p className="text-sm font-semibold text-[#68717b]">Kanza Iqbal</p>
              <p className="text-xs text-[#68717b]">
                <span className="mr-1 text-emerald-500">●</span>Usually replies
                within a day
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:kannyqb@gmail.com"
              className="rounded-xl border border-[#f35b0b] px-4 py-3 font-semibold text-[#f35b0b] transition-colors hover:bg-[#f35b0b] hover:text-white"
            >
              Book a free 15-min call
            </a>
            <a
              href="mailto:kannyqb@gmail.com"
              className="rounded-xl border border-white/70 px-4 py-3 text-[#68717b] hover:border-[#f35b0b]"
            >
              kannyqb@gmail.com
            </a>
          </div>
          <nav aria-label="Social links" className="mt-6 flex flex-wrap gap-4 text-xs text-[#68717b]">
            {["LinkedIn", "Behance", "99designs", "Upwork"].map((label) => (
              <a
                key={label}
                href="mailto:kannyqb@gmail.com"
                className="transition-colors hover:text-[#f35b0b]"
              >
                {label} ↗
              </a>
            ))}
          </nav>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-[22px] border border-white/35 bg-[#bebbb7]/60 p-5 shadow-[inset_0_2px_12px_rgba(40,38,36,0.12),0_12px_28px_rgba(50,46,43,0.1)] backdrop-blur-sm sm:p-7"
        >
          <fieldset>
            <legend className="mb-2 text-xs font-semibold text-[#3d302c]">
              What are we building?
            </legend>
            <div className="flex flex-wrap gap-1.5">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  aria-pressed={projectType === type}
                  onClick={() => setProjectType(type)}
                  className={`rounded-full border px-3 py-1.5 text-[11px] transition-colors ${
                    projectType === type
                      ? "border-[#f35b0b] bg-[#f35b0b] text-white"
                      : "border-white/50 text-[#3d302c] hover:border-[#f35b0b]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <label className="text-xs font-semibold text-[#3d302c]">
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                className="mt-1.5 w-full rounded-xl border border-white/50 bg-white/45 px-3 py-2.5 font-normal outline-none placeholder:text-[#858c94] focus:border-[#f35b0b]"
                placeholder="Your name"
              />
            </label>
            <label className="text-xs font-semibold text-[#3d302c]">
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1.5 w-full rounded-xl border border-white/50 bg-white/45 px-3 py-2.5 font-normal outline-none placeholder:text-[#858c94] focus:border-[#f35b0b]"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-4 block text-xs font-semibold text-[#3d302c]">
            Budget
            <select
              name="budget"
              className="mt-1.5 w-full rounded-xl border border-white/50 bg-white/45 px-3 py-2.5 font-normal outline-none focus:border-[#f35b0b]"
            >
              <option>Under $1K</option>
              <option>$1K – $3K</option>
              <option>$3K – $5K</option>
              <option>$5K+</option>
              <option>Let&apos;s discuss</option>
            </select>
          </label>

          <label className="mt-4 block text-xs font-semibold text-[#3d302c]">
            Tell me about it
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1.5 w-full resize-y rounded-xl border border-white/50 bg-white/45 px-3 py-2.5 font-normal outline-none placeholder:text-[#858c94] focus:border-[#f35b0b]"
              placeholder="The product, the problem, and where you are stuck..."
            />
          </label>
          <button
            type="submit"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#f35b0b] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d84d06]"
          >
            Send message <span aria-hidden="true">↗</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
