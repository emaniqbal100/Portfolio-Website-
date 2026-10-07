import Image from "next/image";
import portfolioIllustration from "@/assets/portofiloMain.png";
import texture from "@/assets/ForegraoundBG.png";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio-intro"
      aria-labelledby="portfolio-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-12 sm:px-8"
    >
      <Image
        src={texture}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      <div className="relative z-10 w-full max-w-[576px] rounded-[20px] border border-white/25 bg-[#b9b6b2]/55 px-6 py-8 shadow-[inset_0_2px_12px_rgba(40,38,36,0.18),0_12px_32px_rgba(45,42,39,0.12)] backdrop-blur-[2px] sm:rounded-[22px] sm:px-[38px] sm:py-[42px]">
        <div className="mb-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#68717b] sm:text-[13px]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
          >
            <path
              d="m14.5 5.5 4 4M4 20l4.4-.9L19.2 8.3a2.8 2.8 0 0 0-4-4L4.4 15.1 4 20Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
          <span>Portfolio</span>
        </div>

        <h2
          id="portfolio-title"
          className="max-w-[440px] text-[clamp(2rem,6vw,2.45rem)] font-bold leading-[1.16] tracking-[-0.04em] text-[#6d7782]"
        >
          <span className="text-[#f35b0b]">Curiosity</span> sparks
          <br />
          Ideas....
        </h2>

        <div className="relative mx-auto my-5 aspect-[668/320] w-full sm:my-3">
          <Image
            src={portfolioIllustration}
            alt="A curious designer turning an idea into a colorful digital product"
            fill
            sizes="(max-width: 640px) 85vw, 500px"
            className="object-contain"
            priority
          />
        </div>

        <p className="text-right text-[clamp(1.7rem,5.6vw,2.3rem)] font-bold leading-[1.15] tracking-[-0.045em] text-[#3d302c]">
          <span className="text-[#6d7782]">Design</span> brings them to
          <br />
          <span className="text-[#f35b0b]">LIFE</span>
        </p>
      </div>
    </section>
  );
}