"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../lib/cn";
import { offer } from "../lib/content";
import { ease, inView } from "../lib/motion";
import { Reveal } from "../ui/Reveal";
import { SectionHead } from "../ui/SectionHead";

export function Offer() {
  const [active, setActive] = useState(0);
  const track = offer.tracks[active];

  return (
    <section id="offer" className="relative bg-paper text-soot">
      <div className="blueprint-light absolute inset-0 opacity-30" aria-hidden />

      <div className="shell relative py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index={offer.index}
            kicker={offer.kicker}
            latin={offer.latin}
            headline={offer.headline}
            tone="light"
            className="max-w-2xl"
          />

          {/* Track switch */}
          <Reveal delay={0.2}>
            <div
              role="tablist"
              aria-label="اختر المسار"
              className="flex shrink-0 border border-rule-light"
            >
              {offer.tracks.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative px-6 py-4 text-sm font-semibold transition-colors duration-400 sm:px-8",
                    active === i ? "text-paper" : "text-soot/60 hover:text-soot"
                  )}
                >
                  {active === i && (
                    <motion.span
                      layoutId="offer-tab"
                      className="absolute inset-0 bg-soot"
                      transition={{ duration: 0.5, ease: ease.expo }}
                    />
                  )}
                  <span className="relative">{t.tab}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: ease.expo }}
            className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
          >
            {/* Promise */}
            <div>
              <span className="tech text-flare" dir="ltr">
                {track.latin}
              </span>
              <p className="display display-md mt-5 text-soot">{track.promise}</p>

              <ul className="mt-8 space-y-4">
                {track.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    className="flex gap-4 border-t border-rule-light pt-4"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: ease.expo, delay: 0.1 + i * 0.08 }}
                  >
                    <span className="mt-2.5 block size-1.5 shrink-0 bg-flare" aria-hidden />
                    <span className="prose-ar text-base text-soot/70">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Deliverables checklist */}
            <div>
              <div className="mb-5 flex items-baseline justify-between">
                <span className="tech text-soot/40" dir="ltr">
                  DELIVERABLES
                </span>
                <span className="tech text-soot/40" dir="ltr">
                  {String(track.items.length).padStart(2, "0")} ITEMS
                </span>
              </div>

              <ul className="grid gap-px border border-rule-light bg-rule-light sm:grid-cols-2">
                {track.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="group flex items-center gap-4 bg-paper px-5 py-4 transition-colors duration-400 hover:bg-soot"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={inView}
                    transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.04 }}
                  >
                    <span
                      className="tech-sm tech shrink-0 text-flare"
                      dir="ltr"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-soot transition-colors duration-400 group-hover:text-paper">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
