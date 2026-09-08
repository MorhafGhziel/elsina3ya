"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { about, pictograms } from "../lib/content";
import { ease, inView } from "../lib/motion";
import { CornerTicks, Pictogram } from "../ui/Graphics";
import { Counter } from "../ui/Interactive";
import { Reveal, Rule, WordFlood } from "../ui/Reveal";
import { SectionHead } from "../ui/SectionHead";

export function About() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ["start 0.85", "end 0.55"],
  });

  // The quote's underline needs its own target: the body block above finishes
  // its range before the quote is even on screen, so sharing it would leave
  // the rule already at full width by the time anyone saw it.
  const quoteRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: quoteProgress } = useScroll({
    target: quoteRef,
    offset: ["start 0.9", "end 0.7"],
  });
  const quoteWidth = useTransform(quoteProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="relative bg-paper text-soot">
      <div className="blueprint-light absolute inset-0 opacity-40" aria-hidden />

      <div className="shell relative py-24 sm:py-32 lg:py-40">
        <SectionHead
          index={about.index}
          kicker={about.kicker}
          latin={about.latin}
          headline={about.headline}
          tone="light"
          className="max-w-4xl"
        />

        {/* Body copy — words brighten as the block passes through */}
        <div ref={bodyRef} className="mt-16 grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <WordFlood
            text={about.body}
            progress={scrollYProgress}
            className="prose-ar max-w-3xl text-lg font-light text-soot sm:text-xl lg:text-2xl"
          />

          {/* Vertical index tick, desktop only */}
          <Reveal className="hidden lg:block">
            <div className="flex h-full flex-col items-center justify-between gap-6 border-s border-rule-light ps-8">
              <span className="tech text-soot/40" dir="ltr">
                EST. 2026
              </span>
              <span className="tech text-soot/40" dir="ltr">
                RIYADH · KSA
              </span>
            </div>
          </Reveal>
        </div>

        {/* Pull quote */}
        <div ref={quoteRef}>
        <Reveal className="relative mt-20 border border-rule-light bg-paper-2/50 p-8 sm:p-12 lg:p-16">
          <CornerTicks tone="flare" />
          <motion.span
            aria-hidden
            className="absolute inset-y-0 end-0 w-1 origin-top bg-flare"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={inView}
            transition={{ duration: 1, ease: ease.expo }}
          />
          <p className="display display-md max-w-4xl text-soot">
            {about.quote}
          </p>
          <motion.div
            aria-hidden
            className="mt-8 h-px bg-flare"
            style={{ width: quoteWidth }}
          />
        </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-px border-y border-rule-light sm:grid-cols-3">
          {about.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.1}
              className="py-8 sm:border-s sm:border-rule-light sm:px-8 sm:first:border-s-0 sm:first:ps-0"
            >
              <div className="display text-5xl text-flare sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <Rule tone="light" className="my-4" delay={0.2 + i * 0.1} />
              <p className="text-sm text-soot/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---- Pictogram band: hard cut back to black ------------------- */}
      <div className="relative bg-ink py-16 sm:py-20">
        <div className="shell">
          <Reveal className="mb-12 text-center">
            <span className="tech text-bone/40" dir="ltr">
              THE HOUSE RULES
            </span>
          </Reveal>
          <div className="mx-auto flex max-w-3xl items-start justify-center gap-10 sm:gap-20">
            {pictograms.map((p, i) => (
              <Pictogram
                key={p.id}
                glyph={p.id}
                label={p.label}
                latin={p.latin}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
