"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ORANGE = "#ff6a00";

const navItems = [
  { key: "home", href: "#home", label: "Home", icon: HomeIcon },
  { key: "portfolio", href: "#portfolio", label: "Portfolio", icon: PortfolioIcon },
  { key: "career", href: "#career", label: "Career journey", icon: CareerIcon },
  { key: "about", href: "#about", label: "About me", icon: CareerIcon },
  { key: "explore", href: "#explore", label: "What I explore", icon: PortfolioIcon },
  { key: "contact", href: "#contact", label: "Let's connect", icon: ConnectIcon },
];

function HomeIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9"
        stroke={active ? "#fff" : "#8a8a93"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PortfolioIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" stroke={active ? "#fff" : "#8a8a93"} strokeWidth="1.8" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" stroke={active ? "#fff" : "#8a8a93"} strokeWidth="1.8" />
    </svg>
  );
}
function CareerIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke={active ? "#fff" : "#8a8a93"} strokeWidth="1.8" />
      <path d="m15 9-4.5 2.5L8 16l4.5-2.5L15 9Z" stroke={active ? "#fff" : "#8a8a93"} strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function ConnectIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M4 5.5h16v10H9l-4 3.5v-3.5H4v-10Z"
        stroke={active ? "#fff" : "#8a8a93"}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <motion.aside
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-[28px] bg-[#1c1a1f] px-2.5 py-4 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.5)] md:flex"
    >
      <div
        className="mb-1 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
        style={{ background: ORANGE }}
        title="Kanza Iqbal"
      >
        KI
      </div>

      <nav className="flex flex-col items-center gap-1.5">
        {navItems.map(({ key, href, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <a
              key={key}
              href={href}
              onClick={() => setActive(key)}
              title={label}
              aria-label={label}
              aria-current={isActive ? "location" : undefined}
              className="flex h-9 w-9 items-center justify-center rounded-xl transition-colors"
              style={{ background: isActive ? ORANGE : "transparent" }}
            >
              <Icon active={isActive} />
            </a>
          );
        })}
      </nav>

      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" title="Available for work" />
    </motion.aside>
  );
}