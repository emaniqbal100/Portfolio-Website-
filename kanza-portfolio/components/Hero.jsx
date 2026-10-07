"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Poppins } from "next/font/google";
import heroBg from "@/assets/HEROBG.png";
import orangeBg from "@/assets/hoverbg.png";
import cardImg from "@/assets/Group 10.png";
import RevealBackground from "./RevealBackground";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

const ORANGE = "#ff6a00";
const DARK = "#3b302b";
const GRAY = "#6b7078";

const u = (k) => `calc(var(--w) * ${k})`;
const text = { fontSize: u(0.0458), lineHeight: 1.35 };

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

function Float({ children, delay = 0, distance = 6, duration = 5, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay: delay + 1, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- icons ---------- */
function IconCircle({ children }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{ width: u(0.068), height: u(0.068), background: ORANGE }}
    >
      {children}
    </span>
  );
}

const IconDots = () => (
  <IconCircle>
    <svg viewBox="0 0 24 24" width="62%" height="62%" fill="#fff">
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  </IconCircle>
);

const IconCheck = () => (
  <IconCircle>
    <svg viewBox="0 0 24 24" width="56%" height="56%" fill="none">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconCircle>
);

const IconQuestion = () => (
  <IconCircle>
    <span className="font-bold leading-none text-white" style={{ fontSize: u(0.04) }}>?</span>
  </IconCircle>
);

const IconGlobe = () => (
  <svg viewBox="0 0 32 32" fill="none" className="shrink-0" style={{ width: u(0.075), height: u(0.075) }}>
    <circle cx="14" cy="14" r="11" stroke={ORANGE} strokeWidth="2.6" />
    <path
      d="M3.5 14h21M14 3c3.2 3.2 4.8 6.8 4.8 11S17.2 21.8 14 25M14 3c-3.2 3.2-4.8 6.8-4.8 11S10.8 21.8 14 25"
      stroke={ORANGE}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path d="M18 17l11 4.2-4.6 1.8-1.8 4.6L18 17Z" fill={ORANGE} stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

const IconChart = () => (
  <span
    className="flex shrink-0 items-center justify-center rounded-2xl"
    style={{ width: u(0.085), height: u(0.085), background: ORANGE }}
  >
    <svg viewBox="0 0 32 32" width="60%" height="60%" fill="none">
      <rect x="4" y="6" width="24" height="16" rx="3" stroke="#fff" strokeWidth="2" />
      <path d="M9 18v-4M15 18V10M21 18v-7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M13 26h6M16 22v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </span>
);

const IconThought = () => (
  <span className="relative flex shrink-0 items-center justify-center" style={{ width: u(0.085), height: u(0.085) }}>
    <svg viewBox="0 0 40 40" width="100%" height="100%" fill="none">
      <ellipse cx="18" cy="15" rx="12" ry="10" fill={ORANGE} />
      <circle cx="10" cy="27" r="3.4" fill={ORANGE} />
      <circle cx="6" cy="33" r="1.9" fill={ORANGE} />
    </svg>
  </span>
);

/* ---------- typewriter ---------- */
function useTypewriter(frames, { speed = 95, pause = 1800 } = {}) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [count, setCount] = useState(0);
  const frame = frames[frameIndex];
  const total = frame.lines.reduce((n, line) => n + line.reduce((m, seg) => m + seg.text.length, 0), 0);

  useEffect(() => {
    setCount(0);
  }, [frameIndex]);

  useEffect(() => {
    if (count < total) {
      const t = setTimeout(() => setCount((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setFrameIndex((i) => (i + 1) % frames.length), pause);
    return () => clearTimeout(t);
  }, [count, total, speed, pause, frames.length]);

  let remaining = count;
  const lines = frame.lines.map((line) =>
    line.map((seg) => {
      const take = Math.max(0, Math.min(seg.text.length, remaining));
      remaining -= seg.text.length;
      return { ...seg, text: seg.text.slice(0, take) };
    })
  );

  return { lines, icon: frame.icon, typing: count < total };
}

// Har line index ke liye, SAB frames mein se sabse lamba text nikalta hai —
// isi se "ghost" banti hai jo box ki width hamesha max par lock rakhti hai.
function longestLines(frames) {
  const lineCount = Math.max(...frames.map((f) => f.lines.length));
  const out = [];
  for (let i = 0; i < lineCount; i++) {
    let best = "";
    frames.forEach((f) => {
      const line = f.lines[i];
      if (!line) return;
      const joined = line.map((s) => s.text).join("");
      if (joined.length > best.length) best = joined;
    });
    out.push(best);
  }
  return out;
}

/* ghost = invisible full-width text (reserves space), overlay = asal typing jo dikhti hai */
function TypedLines({ lines, typing, ghost }) {
  return (
    <span className="relative block">
      {ghost && (
        <span className="invisible block" aria-hidden="true">
          {ghost.map((t, i) => (
            <span key={i} className="block">
              {t || "\u00A0"}
            </span>
          ))}
        </span>
      )}
      <span className={ghost ? "absolute inset-0 block" : "block"}>
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.map((seg, si) => (
              <span key={si} style={{ color: seg.color, fontWeight: seg.bold ? 700 : 600 }}>
                {seg.text}
              </span>
            ))}
            {li === lines.length - 1 && typing && (
              <span className="ml-0.5 inline-block animate-pulse" style={{ color: ORANGE }}>
                |
              </span>
            )}
          </span>
        ))}
      </span>
    </span>
  );
}

/* ---------- border glow ---------- */
const CARD_RADIUS = 0.068;

function useBorderGlow(hostRef, glowRef) {
  useEffect(() => {
    const host = hostRef.current;
    const glow = glowRef.current;
    if (!host || !glow) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cur = { x: 0, y: 0 };
    const tgt = { x: 0, y: 0 };
    let raf = 0;
    let shown = false;

    const tick = () => {
      cur.x += (tgt.x - cur.x) * 0.2;
      cur.y += (tgt.y - cur.y) * 0.2;
      glow.style.setProperty("--mx", `${cur.x}px`);
      glow.style.setProperty("--my", `${cur.y}px`);
      const moving = Math.abs(tgt.x - cur.x) > 0.5 || Math.abs(tgt.y - cur.y) > 0.5;
      raf = moving ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e) => {
      const r = host.getBoundingClientRect();
      const dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right);
      const dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom);
      const near = Math.hypot(dx, dy) < 160;
      tgt.x = e.clientX - r.left;
      tgt.y = e.clientY - r.top;
      if (near && !shown) {
        cur.x = tgt.x;
        cur.y = tgt.y;
      }
      shown = near;
      glow.style.opacity = near ? "1" : "0";
      if (near && !raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      shown = false;
      glow.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [hostRef, glowRef]);
}

function BorderGlow({ glowRef }) {
  const ring = (thickness) => ({
    position: "absolute",
    inset: 0,
    padding: thickness,
    borderRadius: u(CARD_RADIUS),
    background: `radial-gradient(${u(0.36)} circle at var(--mx, -999px) var(--my, -999px), rgba(255,106,0,1), rgba(255,140,60,0.55) 35%, rgba(255,106,0,0) 70%)`,
    WebkitMaskImage: "linear-gradient(#000,#000), linear-gradient(#000,#000)",
    WebkitMaskClip: "content-box, border-box",
    WebkitMaskComposite: "xor",
    maskImage: "linear-gradient(#000,#000), linear-gradient(#000,#000)",
    maskClip: "content-box, border-box",
    maskComposite: "exclude",
  });

  return (
    <span
      ref={glowRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
      style={{ opacity: 0 }}
    >
      <span style={{ ...ring(4), filter: "blur(7px)", opacity: 0.85 }} />
      <span style={ring(2)} />
    </span>
  );
}

/* ---------- badge shell ---------- */
function Badge({ l, t, w, h, x, y, floatDelay, padX = 0.048, padY = 0.038, gap = 0.031, children }) {
  return (
    <motion.div
      variants={fadeUp(x, y)}
      style={{ "--l": l, "--t": t, "--bw": w }}
      className="z-20 w-full md:absolute md:left-[var(--l)] md:top-[var(--t)] md:w-[var(--bw)]"
    >
      <Float
        delay={floatDelay}
        className="flex w-full items-center justify-between bg-white"
        style={{
          borderRadius: u(0.069),
          padding: `${u(padY)} ${u(padX)}`,
          gap: u(gap),
          height: h ? u(h) : undefined,
          boxShadow: "0 12px 30px -10px rgba(0,0,0,0.25)",
        }}
      >
        {children}
      </Float>
    </motion.div>
  );
}

/* ---------- frame data ---------- */
const ideasFrames = [
  {
    icon: <IconDots />,
    lines: [
      [
        { text: "Turning ideas ", color: GRAY },
        { text: "into", color: ORANGE },
      ],
      [{ text: "intuitive experiences", color: DARK }],
    ],
  },
];
const ideasGhost = longestLines(ideasFrames);

const availableFrames = [
  {
    icon: <IconCheck />,
    lines: [
      [
        { text: "Available", color: DARK, bold: true },
        { text: " for work", color: GRAY },
      ],
    ],
  },
];
const availableGhost = longestLines(availableFrames);

const statFrames = [
  {
    icon: <IconGlobe />,
    lines: [
      [{ text: "2+", color: ORANGE, bold: true }],
      [{ text: "Years experience", color: DARK }],
    ],
  },
  {
    icon: <IconChart />,
    lines: [
      [{ text: "20+", color: ORANGE, bold: true }],
      [{ text: "Projects Delievered", color: DARK }],
    ],
  },
];
const statGhostBig = longestLines([{ lines: [statFrames[0].lines[0]] }, { lines: [statFrames[1].lines[0]] }]);
const statGhostLabel = longestLines([{ lines: [statFrames[0].lines[1]] }, { lines: [statFrames[1].lines[1]] }]);

const whyFrames = [
  {
    icon: <IconQuestion />,
    lines: [
      [
        { text: "Are you Still ", color: DARK },
        { text: "asking", color: GRAY },
      ],
      [{ text: "Why", color: GRAY }],
    ],
  },
  {
    icon: <IconThought />,
    lines: [
      [
        { text: "Designs", color: DARK, bold: true },
        { text: " with users", color: GRAY },
      ],
      [
        { text: "in ", color: GRAY },
        { text: "mind", color: ORANGE, bold: true },
      ],
    ],
  },
];
const whyGhost = longestLines(whyFrames);

/* ---------- typed badges ---------- */
function IdeasBadge(props) {
  const { lines, icon, typing } = useTypewriter(ideasFrames);
  return (
    <Badge {...props}>
      <p className="whitespace-nowrap font-semibold" style={text}>
        <TypedLines lines={lines} typing={typing} ghost={ideasGhost} />
      </p>
      {icon}
    </Badge>
  );
}

function AvailableBadge(props) {
  const { lines, icon, typing } = useTypewriter(availableFrames);
  return (
    <Badge {...props}>
      <p className="whitespace-nowrap font-semibold" style={text}>
        <TypedLines lines={lines} typing={typing} ghost={availableGhost} />
      </p>
      {icon}
    </Badge>
  );
}

function StatBadge(props) {
  const { lines, icon, typing } = useTypewriter(statFrames);
  return (
    <Badge {...props}>
      <div className="text-right whitespace-nowrap" style={{ fontSize: u(0.0458) }}>
        <div style={{ fontSize: u(0.0763), lineHeight: 1.1 }}>
          <TypedLines lines={[lines[0]]} typing={false} ghost={statGhostBig} />
        </div>
        <div className="font-semibold" style={{ lineHeight: 1.35 }}>
          <TypedLines lines={[lines[1]]} typing={typing} ghost={statGhostLabel} />
        </div>
      </div>
      {icon}
    </Badge>
  );
}

function WhyBadge(props) {
  const { lines, icon, typing } = useTypewriter(whyFrames);
  return (
    <Badge {...props}>
      <p className="whitespace-nowrap font-semibold" style={text}>
        <TypedLines lines={lines} typing={typing} ghost={whyGhost} />
      </p>
      {icon}
    </Badge>
  );
}

export default function Hero() {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const heroRef = useRef(null);
  useBorderGlow(cardRef, glowRef);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scrollDim = useTransform(scrollYProgress, [0, 0.55, 1], [0, 0.2, 0.42]);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen overflow-hidden bg-ink">
      <RevealBackground
        grey={heroBg}
        orange={orangeBg}
        radius={135}
        feather={95}
        priority
        fadeOutAt="#portfolio-intro"
      />
      <div className="absolute inset-0 bg-ink/30" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[#171311]"
        style={{ opacity: scrollDim }}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={`${poppins.className} relative z-10 mx-auto grid min-h-[calc(100svh-84px)] w-full place-items-center px-4 py-10 [--w:min(78vw,320px)] md:[--w:clamp(260px,min(28.5vw,calc((100svh_-_180px)*0.643)),440px)]`}
      >
        <h1 className="sr-only">Kanza Iqbal — UI UX &amp; Product Designer</h1>

        <div className="relative flex w-[var(--w)] flex-col gap-3 md:block">
          <motion.div ref={cardRef} variants={fadeUp(0, 24)} className="relative z-10">
            <Image
              src={cardImg}
              alt="Kanza Iqbal — UI UX & Product Designer"
              priority
              sizes="(min-width: 768px) 440px, 320px"
              className="h-auto w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
            />
            <BorderGlow glowRef={glowRef} />
          </motion.div>

          <IdeasBadge l="-52.7%" t="8%" w="70.6%" x={-30} y={-10} floatDelay={0.1} />

          <AvailableBadge l="74.9%" t="17%" w="82%" x={30} y={-10} floatDelay={0.25} />

          <StatBadge l="-67.4%" t="43%" w="63.5%" h={0.2137} padX={0.038} padY={0.038} gap={0.038} x={-30} y={10} floatDelay={0.4} />

          <WhyBadge l="84.3%" t="52%" w="82%" x={30} y={10} floatDelay={0.55} />
        </div>
      </motion.div>
    </section>
  );
} 