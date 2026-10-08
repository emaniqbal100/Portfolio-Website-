"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "@/assets/mainimage.png";

const ORANGE = "#ff6a00";

const navItems = [
  { key: "home", href: "#home", label: "Home", icon: HomeIcon },
  { key: "portfolio", href: "#portfolio", label: "Portfolio", icon: PortfolioIcon },
  { key: "career", href: "#career", label: "Career journey", icon: CareerIcon },
  { key: "about", href: "#about", label: "About me", icon: CareerIcon },
  { key: "explore", href: "#explore", label: "Explore", icon: ExploreIcon },
  { key: "contact", href: "#contact", label: "Let's connect", icon: ConnectIcon },
];

const portfolioLinks = [
  { label: "UI/UX", href: "#case-studies", icon: DesignIcon },
  { label: "Mobile Apps", href: "#mobile-apps", icon: MobileIcon },
  { label: "Websites", href: "#websites", icon: WebsiteIcon },
  { label: "Case Study", href: "#case-studies", icon: CaseStudyIcon },
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

function ExploreIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path d="m4 17 5-5 3 3 7-8" stroke={active ? "#fff" : "#8a8a93"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7h5v5" stroke={active ? "#fff" : "#8a8a93"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
      <path d="m4 17 9-9 4 4-9 9H4v-4Zm11-11 2-2 4 4-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
      <rect x="6" y="2.8" width="12" height="18.4" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 18h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 8h18M7 6h.01M10 6h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CaseStudyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
      <path d="M5 3h10l4 4v14H5V3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 3v5h5M8 12h8M8 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [expanded, setExpanded] = useState(false);

  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setExpanded(false);
    }
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: -16, y: "-50%" }}
      animate={{ opacity: 1, x: 0, y: "-50%", width: expanded ? 264 : 60 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onPointerEnter={() => setExpanded(true)}
      onPointerLeave={() => setExpanded(false)}
      onFocusCapture={() => setExpanded(true)}
      onBlurCapture={handleBlur}
      className="fixed left-4 top-1/2 z-50 flex max-h-[calc(100svh-32px)] flex-col overflow-hidden rounded-[22px] bg-[#211c1a] py-2.5 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.5)]"
    >
      <a
        href="#home"
        onClick={() => setActive("home")}
        className={`mx-2.5 mb-1 flex h-10 shrink-0 items-center rounded-xl transition-colors ${
          expanded ? "gap-3 px-2" : "justify-center"
        }`}
        aria-label="Kanza Iqbal, home"
        title="Kanza Iqbal"
      >
        <Image
          src={profile}
          alt=""
          width={32}
          height={32}
          className="h-9 w-9 shrink-0 rounded-full bg-[#f6eee7] object-cover"
        />
        {expanded && (
          <span className="whitespace-nowrap text-xs font-semibold text-white">
            Kanza Iqbal
          </span>
        )}
      </a>

      <nav aria-label="Main navigation" className="min-h-0 overflow-y-auto px-2">
        <div className="flex flex-col gap-1">
          {navItems.map(({ key, href, label, icon: Icon }) => {
            const isActive = active === key;
            return (
              <div key={key}>
                <a
                  href={href}
                  onClick={() => setActive(key)}
                  title={expanded ? undefined : label}
                  aria-label={label}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex h-10 shrink-0 items-center rounded-lg transition-colors hover:bg-white/10 ${
                    expanded ? "gap-3 px-2.5" : "justify-center"
                  }`}
                  style={{ background: isActive ? "#ffffff12" : "transparent" }}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      isActive ? "bg-[#4a3b35]" : ""
                    }`}
                    style={isActive ? { color: ORANGE } : undefined}
                  >
                    <Icon active={isActive} />
                  </span>
                  {expanded && (
                    <span
                      className={`whitespace-nowrap text-xs ${
                        isActive ? "font-semibold text-white" : "text-[#d5ccc6]"
                      }`}
                    >
                      {label}
                    </span>
                  )}
                </a>
                {expanded && key === "portfolio" && (
                  <div className="mb-1 ml-4 mt-1 border-l border-white/15 pb-1 pl-2">
                    {portfolioLinks.map(({ label: itemLabel, href: itemHref, icon: ItemIcon }) => (
                      <a
                        key={itemLabel}
                        href={itemHref}
                        onClick={() => setActive("portfolio")}
                        className="flex h-8 items-center gap-2 rounded-md px-1.5 text-[11px] text-[#c8bfba] transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <ItemIcon />
                        <span className="whitespace-nowrap">{itemLabel}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      <div
        className={`mx-2.5 mt-1 flex h-8 shrink-0 items-center ${
          expanded ? "gap-2 px-2" : "justify-center"
        }`}
        title="Available for work"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
        {expanded && (
          <span className="whitespace-nowrap text-[10px] font-semibold text-emerald-400">
            Available for work
          </span>
        )}
      </div>
    </motion.aside>
  );
}
