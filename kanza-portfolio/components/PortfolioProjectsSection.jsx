"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import texture from "@/assets/ForegraoundBG.png";
import orange from "@/assets/hoverbg.png";
import RevealBackground from "./RevealBackground";
import caseStudyArtwork from "@/assets/Group.png";
import websiteArtwork from "@/assets/webDesign.png";
import dashboardArtwork from "@/assets/OBJECTS.png";
import mobileArtwork from "@/assets/Mobile.png";
import pencilArtwork from "@/assets/Pencil.png";

const projects = [
  {
    title: "Case Studies",
    id: "case-studies",
    category: "Product · UX Strategy",
    description:
      "Thoughtful digital experiences built around users, business goals, and usability.",
    artwork: caseStudyArtwork,
    artworkAlt: "Illustrated product and UX case-study concepts",
    shape: "case",
    action: "Continue to UI UX Design",
  },
  {
    title: "Website Designs",
    id: "websites",
    category: "Web · Responsive · SaaS",
    description:
      "Modern responsive websites balancing aesthetics, usability, and conversion.",
    artwork: websiteArtwork,
    artworkAlt: "Website design and marketing strategy sketches",
    shape: "website",
    action: "Continue to Websites",
  },
  {
    title: "SAAS & Dashboard",
    category: "SaaS · Enterprise · Data Visualization",
    description:
      "Clear, scalable dashboards designed to turn complex data into actionable insights.",
    artwork: dashboardArtwork,
    artworkAlt: "Dashboard charts, data visualization and user-flow sketches",
    shape: "dashboard",
    action: "Continue to Dashboards",
  },
  {
    title: "Mobile Applications",
    id: "mobile-apps",
    category: "iOS · Android · Mobile UX",
    description:
      "Intuitive mobile products designed from user flows to polished interfaces.",
    artwork: mobileArtwork,
    artworkAlt: "Mobile app wireframes and interface sketches",
    shape: "mobile",
    action: "Continue to Mobile Applications",
  },
];

export default function PortfolioProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="portfolio"
      aria-label="Selected design work"
      className="relative flex min-h-screen items-center overflow-hidden px-5 py-12 sm:px-8 md:py-10 md:pl-[62px] md:pr-7"
    >
      <RevealBackground grey={texture} orange={orange} radius={145} feather={95} />
      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-4 md:grid-cols-[minmax(0,0.92fr)_64px_minmax(0,1fr)] md:grid-rows-[215px_64px_212px] md:gap-3 xl:grid-cols-[minmax(0,0.92fr)_64px_minmax(0,1fr)]">
        {projects.map((project, index) => {
          const placement = [
            "md:col-[1/3] md:row-[1/2]",
            "md:col-[3/4] md:row-[1/3]",
            "md:col-[1/2] md:row-[2/4]",
            "md:col-[2/4] md:row-[3/4]",
          ][index];

          return (
            <motion.article
              key={project.title}
              id={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`group relative grid min-h-[260px] overflow-hidden rounded-[20px] border border-[#77736f]/35 bg-[#c3bfbb]/65 p-5 shadow-[inset_0_2px_12px_rgba(40,38,36,0.11),0_10px_28px_rgba(50,46,43,0.09)] backdrop-blur-sm md:min-h-0 md:grid-cols-[1.15fr_0.85fr] md:gap-2 md:p-4 ${placement}`}
            >
              <div className="relative z-10 flex flex-col items-start">
                <h2 className="text-[clamp(1.2rem,2.1vw,1.5rem)] font-bold tracking-[-0.035em] text-[#f35b0b]">
                  {project.title}
                </h2>
                <p className="mt-1.5 text-[13px] font-semibold text-[#453a35] md:text-xs">
                  {project.category}
                </p>
                <p className="mt-2 max-w-[245px] text-xs leading-[1.55] text-[#707983] md:text-[11px]">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="mt-auto pt-4 text-xs font-medium text-[#ee5b11] transition-colors hover:text-[#a43b06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ee5b11] md:text-[10px]"
                >
                  {project.action}
                  <span aria-hidden="true" className="ml-2">→</span>
                </a>
              </div>
              <div className="relative mt-3 min-h-[150px] md:mt-0 md:min-h-0">
                <Image
                  src={project.artwork}
                  alt={project.artworkAlt}
                  fill
                  sizes="(max-width: 640px) 80vw, 28vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </motion.article>
          );
        })}

        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, x: -160, y: 64, scale: 0.18, rotate: -42 }
          }
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 42,
            damping: 16,
            mass: 0.95,
          }}
          className="hidden items-center justify-center md:col-[2/3] md:row-[2/3] md:flex"
        >
          <Image
            src={pencilArtwork}
            alt=""
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
