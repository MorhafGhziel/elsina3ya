"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { process } from "../lib/content";
import { ease, inView } from "../lib/motion";
import { Reveal } from "../ui/Reveal";
import { SectionHead } from "../ui/SectionHead";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  // A spine that draws itself down the list as you read.
  const spine = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative bg-paper text-soot">
      <div className="shell py-24 sm:py-32 lg:py-40">
        <SectionHead
          index={process.index}
          kicker={process.kicker}
          latin={process.latin}
          headline={process.headline}
          tone="light"
          className="max-w-3xl"
        />

        <div ref={ref} className="relative mt-20">
          {/* Spine */}
          <div
            aria-hidden
            className="absolute end-0 top-0 hidden h-full w-px bg-rule-light md:block"
          >
            <motion.span
              className="block h-full w-px origin-top bg-flare"
              style={{ scaleY: spine }}
            />
          </div>

          <ol className="md:pe-12">
            {process.steps.map((step, i) => (
              <motion.li
                key={step.no}
                className="group relative grid gap-4 border-b border-rule-light py-10 md:grid-cols-[auto_1fr_1.2fr] md:items-baseline md:gap-10 md:py-14"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.9, ease: ease.expo, delay: i * 0.08 }}
              >
                <span
                  className="display text-5xl text-soot/15 transition-colors duration-500 group-hover:text-flare md:text-7xl"
                  dir="ltr"
                >
                  {step.no}
                </span>

                <h3 className="text-2xl font-semibold text-soot md:text-3xl">
                  {step.title}
                </h3>

                <p className="prose-ar max-w-xl text-base text-soot/60 md:text-lg">
                  {step.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.2} className="mt-12">
          <p className="tech text-soot/40" dir="ltr">
            NO IMPROVISATION — EVERY STEP IS DOCUMENTED
          </p>
        </Reveal>
      </div>
    </section>
  );
}
