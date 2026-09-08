"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { hero, site, ticker } from "../lib/content";
import { ease } from "../lib/motion";
import { Chevrons, CornerTicks, HazardTape, Stamp, StatusDot } from "../ui/Graphics";
import { Action, Arrow, Magnetic } from "../ui/Interactive";
import { VelocityMarquee } from "../ui/Marquee";
import { MaskLines } from "../ui/Reveal";
import { scrollToSection } from "../ui/SmoothScroll";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The photo drifts slower than the page; the type leaves a touch faster.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const typeY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative isolate bg-ink">
      <div className="blueprint absolute inset-0 opacity-50" aria-hidden />

      <div className="relative grid min-h-[100svh] grid-cols-1 items-stretch lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---- Type column ------------------------------------------- */}
        <motion.div
          style={{ y: typeY, opacity: fade }}
          className="order-2 flex flex-col justify-center px-[var(--gutter)] pb-16 pt-10 lg:order-1 lg:py-32"
        >
          <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:ms-auto lg:max-w-none">
            <motion.div
              className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <Chevrons count={4} size={13} animated className="text-flare" />
              <span className="flex items-center gap-2.5 text-xs font-medium text-flare">
                <StatusDot />
                {hero.eyebrow}
              </span>
              <span className="tech text-bone/30" dir="ltr">
                {site.endline}
              </span>
            </motion.div>

            <h1 className="display display-xl text-bone">
              <MaskLines
                lines={hero.lines}
                accentIndex={hero.accentLine}
                animate="immediate"
                delay={0.4}
              />
            </h1>

            <motion.div
              className="mt-8 h-px w-full origin-right bg-rule-dark"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: ease.expo, delay: 0.9 }}
            />

            <motion.p
              className="lede prose-ar mt-8 max-w-xl text-bone/60"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: ease.expo, delay: 1 }}
            >
              {hero.body}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: ease.expo, delay: 1.15 }}
            >
              <Magnetic strength={0.28}>
                <Action
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  {hero.primaryCta}
                  <Arrow />
                </Action>
              </Magnetic>

              <Action
                href="#services"
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
              >
                {hero.secondaryCta}
              </Action>
            </motion.div>

            {/* Spec rail */}
            <motion.dl
              className="mt-14 grid max-w-xl grid-cols-3 gap-px border border-rule-dark bg-rule-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.3 }}
            >
              {hero.spec.map((s) => (
                <div key={s.k} className="bg-ink px-4 py-5">
                  <dt className="tech-sm tech text-flare/70" dir="ltr">
                    {s.k}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-bone/80">{s.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </motion.div>

        {/* ---- Image column ------------------------------------------ */}
        <div className="relative order-1 min-h-[52svh] overflow-hidden border-b border-rule-dark lg:order-2 lg:min-h-0 lg:border-b-0 lg:border-s">
          {/*
            Two separate scales: the parallax one follows the scroll, the
            nested one is the load-in zoom. On a single element the scroll
            value would clobber the intro tween the moment the visitor moved.
          */}
          <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: ease.expo, delay: 0.2 }}
            >
            <Image
              src="/images/hero.jpeg"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="duotone object-cover"
            />
            {/* Orange multiply pass — the brand's duotone signature */}
            <div
              aria-hidden
              className="absolute inset-0 bg-flare mix-blend-color"
              style={{ opacity: 0.55 }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #0C0C0C 2%, rgba(12,12,12,0.35) 45%, rgba(12,12,12,0.65) 100%)",
              }}
            />
            </motion.div>
          </motion.div>

          {/* Curtain that lifts off the photo on load */}
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-ink"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            style={{ originY: 0 }}
            transition={{ duration: 1.2, ease: ease.expo, delay: 0.15 }}
          />

          <CornerTicks />

          <Stamp className="absolute bottom-8 start-8 size-24 sm:size-28" />

          <motion.span
            className="tech absolute end-6 top-6 text-bone/50"
            dir="ltr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {site.latin} / {site.year}
          </motion.span>
        </div>
      </div>

      {/* ---- Scroll cue ---------------------------------------------- */}
      <motion.div
        className="pointer-events-none absolute bottom-28 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        style={{ opacity: fade }}
      >
        <span className="tech-sm tech text-bone/35" dir="ltr">
          SCROLL
        </span>
        <span className="relative block h-10 w-px overflow-hidden bg-rule-dark">
          <motion.span
            className="absolute inset-x-0 top-0 block h-4 bg-flare"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>

      {/* ---- Seam + ticker ------------------------------------------- */}
      <HazardTape height={12} />

      <div className="scanlines bg-flare py-3.5">
        <VelocityMarquee baseSpeed={34}>
          {ticker.map((phrase, i) => (
            <span
              key={`${phrase}-${i}`}
              className="flex shrink-0 items-center gap-6 px-6"
            >
              <span className="text-xl font-semibold whitespace-nowrap text-ink sm:text-2xl">
                {phrase}
              </span>
              <Chevrons count={2} size={12} className="text-ink/55" />
            </span>
          ))}
        </VelocityMarquee>
      </div>
    </section>
  );
}
