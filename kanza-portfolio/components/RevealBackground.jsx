"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Do layers: neeche orange texture (hamesha maujood), upar grey texture.
 * Grey ke upar ek radial-gradient mask lagti hai jo cursor ki position
 * follow karti hai — us gol area mein grey "kat" jata hai aur orange
 * neeche se dikhta hai. Baaki jagah grey normal visible rehta hai.
 */
export default function RevealBackground({ grey, orange, radius = 220, feather = 160 }) {
  const sectionRef = useRef(null);
  const greyRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const greyEl = greyRef.current;
    if (!section || !greyEl) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // touch devices: effect off, grey hamesha visible

    const cur = { x: -9999, y: -9999 };
    const tgt = { x: -9999, y: -9999 };
    let raf = 0;

    const tick = () => {
      cur.x += (tgt.x - cur.x) * 0.15;
      cur.y += (tgt.y - cur.y) * 0.15;
      greyEl.style.setProperty("--mx", `${cur.x}px`);
      greyEl.style.setProperty("--my", `${cur.y}px`);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      tgt.x = e.clientX - r.left;
      tgt.y = e.clientY - r.top;
    };
    const onLeave = () => {
      tgt.x = -9999;
      tgt.y = -9999;
    };

    window.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={sectionRef} className="absolute inset-0 overflow-hidden">
      {/* neeche: orange watercolor (hoverbg), hamesha maujood */}
      <Image src={orange} alt="" fill priority className="object-cover" />

      {/* upar: grey texture (ForegraoundBG), cursor ke pas gol hissa "kat" jata hai */}
      <div
        ref={greyRef}
        className="absolute inset-0"
        style={{
          WebkitMaskImage: `radial-gradient(${radius}px circle at var(--mx, -9999px) var(--my, -9999px), transparent 0, transparent ${radius}px, #000 ${radius + feather}px, #000 100%)`,
          maskImage: `radial-gradient(${radius}px circle at var(--mx, -9999px) var(--my, -9999px), transparent 0, transparent ${radius}px, #000 ${radius + feather}px, #000 100%)`,
        }}
      >
        <Image src={grey} alt="" fill className="object-cover" />
      </div>
    </div>
  );
}