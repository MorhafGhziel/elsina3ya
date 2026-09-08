"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../lib/cn";
import { ease, inView } from "../lib/motion";

/**
 * Hazard tape — the brand's diagonal safety stripe.
 * Used as a section seam, never as decoration on every card.
 */
export function HazardTape({
  className,
  height = 14,
  bar = 9,
}: {
  className?: string;
  height?: number;
  bar?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("hazard w-full", className)}
      style={{ height, ["--bar" as string]: `${bar}px` }}
    />
  );
}

/**
 * Chevron strip — the 》》》 run that flanks headlines and captions
 * throughout the identity manual. Purely decorative.
 */
export function Chevrons({
  count = 5,
  className,
  size = 14,
  animated = false,
}: {
  count?: number;
  className?: string;
  size?: number;
  animated?: boolean;
}) {
  return (
    // Colour comes from `currentColor`, so a call site can recolour the run
    // with a plain text-* class instead of fighting a hardcoded default.
    <span
      aria-hidden
      className={cn("inline-flex items-center gap-[0.15em]", className)}
      dir="ltr"
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 12 20"
          style={{ width: size * 0.6, height: size }}
          fill="currentColor"
          initial={animated ? { opacity: 0.25 } : false}
          animate={animated ? { opacity: [0.25, 1, 0.25] } : undefined}
          transition={
            animated
              ? { duration: 1.6, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }
              : undefined
          }
        >
          <path d="M0 0 L8 10 L0 20 L4 20 L12 10 L4 0 Z" />
        </motion.svg>
      ))}
    </span>
  );
}

/** Corner registration ticks — the "technical drawing" cue on framed blocks. */
export function CornerTicks({ tone = "flare" }: { tone?: "flare" | "dark" | "light" }) {
  const color =
    tone === "flare" ? "bg-flare" : tone === "dark" ? "bg-rule-dark" : "bg-rule-light";
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      {[
        "top-0 left-0",
        "top-0 right-0",
        "bottom-0 left-0",
        "bottom-0 right-0",
      ].map((pos) => (
        <span key={pos} className={cn("absolute h-2 w-2", pos)}>
          <span className={cn("absolute inset-x-0 top-0 h-px", color)} />
          <span className={cn("absolute inset-y-0 left-0 w-px", color)} />
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Safety pictograms lifted from the brand key visual                   */
/* ------------------------------------------------------------------ */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * Glyphs are stored as raw path data rather than elements so the draw-on
 * animation can be attached to each <path> individually.
 *
 * `pathLength` must never be animated on a wrapping <g>: framer-motion writes
 * `stroke-dasharray` alongside it, `<g>` ignores `pathLength` so the value is
 * never normalised, and `stroke-dasharray` *inherits* — which leaves every
 * child path permanently dashed rather than drawn.
 */
const glyphs: Record<string, string[]> = {
  warning: ["M24 9 42 39H6L24 9Z", "M24 20v9", "M24 33.5h.02"],
  umbrella: [
    "M6 26a18 18 0 0 1 36 0c-3-2.5-6-2.5-9 0-3-2.5-6-2.5-9 0-3-2.5-6-2.5-9 0-3-2.5-6-2.5-9 0Z",
    "M24 26v11a4 4 0 0 1-8 0",
    "M24 8V5",
  ],
  flame: [
    "M24 6c1.5 6-3 8.5-6 12s-4 6.5-4 10a10 10 0 0 0 20 0c0-4.5-2.5-7.5-4.5-10.5C29 16 30 12.5 30 12.5 28 15 26.5 15.5 25.5 14 24 11.5 24 8.5 24 6Z",
    "M24 40a5 5 0 0 1-3-9c1.5 2 3 2 4.5 0a5 5 0 0 1-1.5 9Z",
  ],
};

/** Framed pictogram with its Arabic label beneath — straight from the brand sheet. */
export function Pictogram({
  glyph,
  label,
  latin,
  index = 0,
}: {
  glyph: string;
  label: string;
  latin: string;
  index?: number;
}) {
  return (
    <motion.figure
      className="group m-0 flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.8, ease: ease.expo, delay: index * 0.12 }}
    >
      <div className="relative flex size-24 items-center justify-center border border-flare text-flare transition-colors duration-500 group-hover:bg-flare group-hover:text-ink sm:size-28">
        <svg viewBox="0 0 48 48" className="size-11 sm:size-12" aria-hidden>
          {glyphs[glyph].map((d, i) => (
            <motion.path
              key={d}
              d={d}
              {...strokeProps}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={inView}
              transition={{
                duration: 1.1,
                ease: ease.expo,
                delay: 0.2 + index * 0.12 + i * 0.12,
              }}
            />
          ))}
        </svg>
      </div>
      <figcaption className="text-center">
        <span className="block text-lg font-semibold text-flare">{label}</span>
        <span className="tech-sm tech mt-1 block text-bone/35">{latin}</span>
      </figcaption>
    </motion.figure>
  );
}

/**
 * The oval rosette mark, flanked by the 20 / 26 year split exactly as the
 * identity manual sets it.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)} dir="ltr">
      <span className="tech-sm tech opacity-80">20</span>
      <Image
        src="/images/snlogo.png"
        alt=""
        width={80}
        height={37}
        className="h-auto w-full max-w-[4.5rem]"
      />
      <span className="tech-sm tech opacity-80">26</span>
    </span>
  );
}

/**
 * Rotating certification stamp: the brand's "MADE WITH IMPACT" ring set
 * around the rosette mark. The ring spins, the mark stays upright.
 */
export function Stamp({ className }: { className?: string }) {
  const text = "MADE WITH IMPACT · صنع في الصناعية · ";
  return (
    <div aria-hidden className={cn("relative", className)}>
      <motion.svg
        viewBox="0 0 120 120"
        className="size-full text-flare"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id="stamp-ring"
            d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
            fill="none"
          />
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <text
          fill="currentColor"
          style={{
            fontFamily: "var(--font-cond)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
          }}
        >
          <textPath href="#stamp-ring" startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>

      <span className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/snlogo.png"
          alt=""
          width={60}
          height={28}
          className="w-[46%]"
        />
      </span>
    </div>
  );
}

/** Small pulsing status dot used beside eyebrow labels. */
export function StatusDot() {
  return (
    <motion.span
      aria-hidden
      className="inline-block size-1.5 shrink-0 bg-flare"
      animate={{ opacity: [1, 0.25, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
