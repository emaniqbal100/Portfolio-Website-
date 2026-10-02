"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "@/assets/Container1.png";
import slide2 from "@/assets/COntainer2.png";
import slide3 from "@/assets/COntainer3.png";

const slides = [slide1, slide2, slide3];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const go = (dir) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
     <div className="relative mx-auto w-full max-w-[5640px]">
      <div className="relative aspect-[600/598] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index]}
              alt={`Project ${index + 1} of ${slides.length}`}
              fill
              sizes="380px"
              className="object-contain"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="absolute bottom-[8%] left-[2%] h-[9%] w-[9%] rounded-full"
        />
        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="absolute bottom-[8%] right-[2%] h-[9%] w-[9%] rounded-full"
        />
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className="absolute bottom-[8%] h-[9%] w-[9%] rounded-full"
            style={{ left: `${40 + i * 10.5}%` }}
          />
        ))}
      </div>
    </div>
  );
}