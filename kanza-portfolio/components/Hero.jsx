"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroBg from "@/assets/HEROBG.png";
import cardBg from "@/assets/container.png";
import mainImage from "@/assets/mainimage.png";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = (x = 0, y = 20) => ({
  hidden: { opacity: 0, y, x, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
});

function Float({ children, delay = 0, distance = 6, duration = 5 }) {
  return (
    <motion.div
      className="flex items-center gap-2.5"
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay: delay + 1, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function Icon({ type }) {
  const base =
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay text-white";
  if (type === "check")
    return (
      <span className={base}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  if (type === "question") return <span className={`${base} text-sm font-bold`}>?</span>;
  if (type === "dots") return <span className={`${base} text-[10px] tracking-[2px]`}>•••</span>;
  if (type === "globe")
    return (
      <span className={base}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </span>
    );
  return null;
}

function Badge({ className, x, y, delay, children }) {
  return (
    <motion.div
      variants={fadeUp(x, y)}
      className={`absolute z-20 hidden origin-center items-center rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_14px_30px_-8px_rgba(0,0,0,0.25)] md:flex ${className}`}
    >
      <Float delay={delay}>{children}</Float>
    </motion.div>
  );
}

function MobileBadge({ children }) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-md">
      {children}
    </div>
  );
}

const badgeContent = {
  ideas: (
    <>
      <Icon type="dots" />
      <p className="max-w-[9.75rem] text-[13px] font-semibold leading-[1.25] text-ink">
        Turning ideas <span className="text-clay">into</span>
        <br />
        Intuitive experiences
      </p>
    </>
  ),
  experience: (
    <>
      <span className="font-display text-[1.85rem] font-semibold leading-none text-clay">2+</span>
      <p className="text-[13px] font-semibold leading-[1.2] text-ink">
        Years
        <br />
        experience
      </p>
      <Icon type="globe" />
    </>
  ),
  available: (
    <>
      <p className="whitespace-nowrap text-[13px] font-semibold text-ink">
        Available <span className="font-normal">for work</span>
      </p>
      <Icon type="check" />
    </>
  ),
  why: (
    <>
      <p className="max-w-[8.5rem] text-[13px] font-semibold leading-[1.25] text-ink">
        Are you Still
        <br />
        <span className="text-clay">asking</span> Why
      </p>
      <Icon type="question" />
    </>
  ),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-ink">
      <Image src={heroBg} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink/40" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16 sm:px-6"
      >
        <div className="flex w-full max-w-[640px] flex-col items-center">
          <motion.div
            variants={fadeUp(0, 24)}
            className="relative aspect-[524/748] w-[clamp(240px,58vw,380px)]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
              <Image src={cardBg} alt="" fill className="object-cover" />

              <div
                className="pointer-events-none absolute left-1/2 top-[10%] h-[48%] w-[78%] -translate-x-1/2 rounded-full bg-[#f4b48a]/70 blur-3xl"
                aria-hidden
              />

              <div className="relative flex h-full w-full flex-col items-center px-[10%] pb-[8%] pt-[12%]">
                <div className="relative aspect-square w-[72%]">
                  <Image
                    src={mainImage}
                    alt="Kanza Iqbal portrait"
                    fill
                    sizes="300px"
                    className="object-contain drop-shadow-[0_12px_24px_rgba(232,112,58,0.35)]"
                    priority
                  />
                </div>

                <div className="mt-auto w-full text-center">
                  <h1 className="font-display text-[clamp(1.5rem,5.2vw,2.35rem)] font-semibold text-ink">
                    Kanza Iqbal
                  </h1>
                  <a
                    href="#work"
                    className="mt-4 inline-block w-full rounded-full bg-clay py-3 text-[clamp(0.75rem,1.6vw,0.95rem)] font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-clayDark"
                  >
                    UI UX &amp; Product Designer
                  </a>
                </div>
              </div>
            </div>

            <Badge className="-left-[22%] top-[8%] sm:-left-[26%]" x={-30} y={-10} delay={0.1}>
              {badgeContent.ideas}
            </Badge>
            <Badge className="-left-[30%] top-[42%] sm:-left-[34%]" x={-30} y={10} delay={0.4}>
              {badgeContent.experience}
            </Badge>
            <Badge className="-right-[16%] top-[15%] sm:-right-[22%]" x={30} y={-10} delay={0.25}>
              {badgeContent.available}
            </Badge>
            <Badge className="-right-[20%] top-[52%] sm:-right-[24%]" x={30} y={10} delay={0.55}>
              {badgeContent.why}
            </Badge>
          </motion.div>

          <motion.div
            variants={fadeUp(0, 16)}
            className="mt-6 flex w-full max-w-[380px] flex-col gap-3 md:hidden"
          >
            <MobileBadge>{badgeContent.ideas}</MobileBadge>
            <MobileBadge>{badgeContent.experience}</MobileBadge>
            <MobileBadge>{badgeContent.available}</MobileBadge>
            <MobileBadge>{badgeContent.why}</MobileBadge>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
