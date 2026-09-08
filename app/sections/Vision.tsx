"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { vision } from "../lib/content";
import { ease, inView } from "../lib/motion";
import { Chevrons } from "../ui/Graphics";
import { LoopMarquee } from "../ui/Marquee";
import { Reveal } from "../ui/Reveal";
import { SectionHead } from "../ui/SectionHead";

export function Vision() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // The ghost wordmark drifts against the scroll for depth.
  const ghostX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="vision" ref={ref} className="relative overflow-hidden bg-ink">
      {/* Oversized ghost wordmark behind the content */}
      <motion.div
        aria-hidden
        style={{ x: ghostX }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none"
      >
        <span className="display block whitespace-nowrap text-center text-[26vw] leading-none text-bone/[0.035]">
          {vision.kicker}
        </span>
      </motion.div>

      <div className="shell relative py-24 sm:py-32 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionHead
            index={vision.index}
            kicker={vision.kicker}
            latin={vision.latin}
            headline={vision.headline}
          />

          <div className="lg:pt-24">
            <Reveal>
              <p className="lede prose-ar max-w-xl text-bone/60">{vision.body}</p>
            </Reveal>

            {/* Pillars as a hairline table */}
            <ul className="mt-12 border-t border-rule-dark">
              {vision.pillars.map((pillar, i) => (
                <motion.li
                  key={pillar.title}
                  className="group relative border-b border-rule-dark"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={inView}
                  transition={{ duration: 0.8, ease: ease.expo, delay: i * 0.1 }}
                >
                  {/* Orange wash that wipes in on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-0 origin-right scale-x-0 bg-flare transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                  <div className="relative flex items-start gap-6 px-2 py-7 transition-colors duration-500 group-hover:text-ink sm:gap-10 sm:px-4">
                    <span className="tech mt-1.5 w-8 shrink-0 text-flare transition-colors duration-500 group-hover:text-ink" dir="ltr">
                      {pillar.index}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-bone transition-colors duration-500 group-hover:text-ink sm:text-2xl">
                        {pillar.title}
                      </h3>
                      <p className="prose-ar mt-2 max-w-md text-sm text-bone/50 transition-colors duration-500 group-hover:text-ink/70 sm:text-base">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Statement ribbon */}
      <div className="border-y border-rule-dark py-6">
        {/* One unit — the marquee repeats it as many times as the width needs. */}
        <LoopMarquee duration={34}>
          <span className="flex shrink-0 items-center gap-8 px-8">
            <span className="display text-3xl text-bone/25 sm:text-5xl">
              {vision.headline}
            </span>
            <Chevrons count={3} size={18} className="text-flare" />
          </span>
        </LoopMarquee>
      </div>
    </section>
  );
}
