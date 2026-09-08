"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "../lib/content";
import { ease } from "../lib/motion";
import { Chevrons } from "./Graphics";
import { useScrollLock } from "./SmoothScroll";

const SHUTTERS = 6;
const KEY = "alsinaiyah:intro-played";
const RUN_MS = 1500;

/**
 * Touching sessionStorage throws outright when a browser blocks site data
 * (Safari's "Block All Cookies", some embedded webviews, sandboxed iframes).
 * An uncaught throw here would abort the effect before the curtain is ever
 * dismissed, leaving a full-screen black panel over the site — so both reads
 * and writes degrade to "just play the intro every time".
 */
function hasPlayed() {
  try {
    return Boolean(sessionStorage.getItem(KEY));
  } catch {
    return false;
  }
}

function markPlayed() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* not persistable — the intro simply replays next navigation */
  }
}

/**
 * Intro curtain: a counter runs to 100 behind the wordmark, then the panel
 * breaks into vertical shutters that lift away.
 *
 * It renders on the server and on frame one so there is never a flash of
 * unstyled page. Every state change happens inside the animation loop, which
 * also lets a repeat visitor (or a reduced-motion visitor) clear it on the
 * first frame instead of sitting through the sequence again.
 */
export function Preloader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useScrollLock(!done);

  useEffect(() => {
    const skip = hasPlayed() || reduced;

    const started = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      if (skip) {
        markPlayed();
        setDone(true);
        return;
      }

      const t = Math.min(1, (now - started) / RUN_MS);
      // Ease-out so the last digits linger a beat.
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        markPlayed();
        setDone(true);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div key="preloader" className="fixed inset-0 z-[90]" aria-hidden>
          {/* Shutters — each lifts on its own beat */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: SHUTTERS }).map((_, i) => (
              <motion.span
                key={i}
                className="h-full flex-1 bg-ink"
                exit={{
                  y: "-100%",
                  transition: { duration: 0.9, ease: ease.expo, delay: i * 0.055 },
                }}
              />
            ))}
          </div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-7 px-6"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <Image
              src="/images/snlogo.png"
              alt=""
              width={96}
              height={45}
              priority
              className="w-20 sm:w-24"
            />

            <span className="overflow-hidden pb-[0.16em] -mb-[0.16em]">
              <motion.span
                className="display display-lg block text-bone"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: ease.expo, delay: 0.08 }}
              >
                {site.name}
              </motion.span>
            </span>

            {/* Progress bar that fills with hazard tape */}
            <div className="relative h-2 w-56 overflow-hidden border border-flare/30 sm:w-72">
              <motion.span
                className="hazard absolute inset-y-0 right-0 block"
                style={{ ["--bar" as string]: "5px" }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            <div className="flex items-center gap-4">
              <Chevrons count={3} size={11} className="text-flare" />
              <span className="tech text-bone/50" dir="ltr">
                {site.latin} — {String(count).padStart(3, "0")}
              </span>
              <Chevrons count={3} size={11} className="text-flare" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
