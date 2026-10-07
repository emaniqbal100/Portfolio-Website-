"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function RevealBackground({
  grey,
  orange,
  radius = 220,
  feather = 160,
  priority = false,
}) {
  const sectionRef = useRef(null);
  const greyRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const greyEl = greyRef.current;
    if (!section || !greyEl) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // touch devices: effect off, grey hamesha visible

    const current = { x: -9999, y: -9999 };
    const target = { x: -9999, y: -9999 };
    let raf = 0;

    const tick = () => {
      current.x += (target.x - current.x) * 0.2;
      current.y += (target.y - current.y) * 0.2;
      greyEl.style.setProperty("--mx", `${current.x}px`);
      greyEl.style.setProperty("--my", `${current.y}px`);

      if (Math.abs(target.x - current.x) < 0.5 && Math.abs(target.y - current.y) < 0.5) {
        current.x = target.x;
        current.y = target.y;
        greyEl.style.setProperty("--mx", `${current.x}px`);
        greyEl.style.setProperty("--my", `${current.y}px`);
        raf = 0;
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      const isInside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;

      if (!isInside) {
        if (target.x !== -9999) {
          target.x = -9999;
          target.y = -9999;
          if (!raf) raf = requestAnimationFrame(tick);
        }
        return;
      }

      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      if (!raf) {
        current.x = target.x;
        current.y = target.y;
        greyEl.style.setProperty("--mx", `${current.x}px`);
        greyEl.style.setProperty("--my", `${current.y}px`);
      }
    };

    window.addEventListener("pointermove", onMove);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={sectionRef} className="absolute inset-0 overflow-hidden">
      {/* neeche: orange watercolor (hoverbg), hamesha maujood */}
      <Image src={orange} alt="" fill priority={priority} className="object-cover" />

      {/* upar: grey texture (ForegraoundBG), cursor ke pas gol hissa "kat" jata hai */}
      <div
        ref={greyRef}
        className="absolute inset-0"
        style={{
          WebkitMaskImage: `radial-gradient(${radius}px circle at var(--mx, -9999px) var(--my, -9999px), transparent 0, transparent ${radius}px, #000 ${radius + feather}px, #000 100%)`,
          maskImage: `radial-gradient(${radius}px circle at var(--mx, -9999px) var(--my, -9999px), transparent 0, transparent ${radius}px, #000 ${radius + feather}px, #000 100%)`,
        }}
      >
        <Image src={grey} alt="" fill priority={priority} className="object-cover" />
      </div>
    </div>
  );
}