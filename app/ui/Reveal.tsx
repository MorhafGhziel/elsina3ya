"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { drawRule, ease, inView, lift, riseIn, stagger } from "../lib/motion";

/** Fade-and-lift a block once it enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "li" | "span";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={lift}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

/**
 * Display heading that reveals line by line from behind a mask.
 * Arabic ascenders/descenders overflow the em box, so each mask is padded
 * and the padding is pulled back with a negative margin.
 */
export function MaskLines({
  lines,
  className,
  accentIndex,
  delay = 0,
  animate = "inView",
}: {
  lines: readonly string[];
  className?: string;
  accentIndex?: number;
  delay?: number;
  animate?: "inView" | "immediate";
}) {
  const trigger =
    animate === "immediate"
      ? { animate: "show" as const }
      : { whileInView: "show" as const, viewport: inView };

  return (
    <motion.span
      className={cn("block", className)}
      initial="hidden"
      variants={stagger(0.08, delay)}
      {...trigger}
    >
      {lines.map((line, i) => (
        <span
          key={`${line}-${i}`}
          className="block overflow-hidden pb-[0.16em] -mb-[0.16em]"
        >
          <motion.span
            variants={riseIn}
            className={cn(
              "block",
              i === accentIndex && "text-flare"
            )}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** A hairline that draws itself in from the reading edge. */
export function Rule({
  className,
  tone = "dark",
  delay = 0,
}: {
  className?: string;
  tone?: "dark" | "light" | "flare";
  delay?: number;
}) {
  return (
    <motion.span
      aria-hidden
      className={cn(
        "block h-px w-full origin-right",
        tone === "dark" && "bg-rule-dark",
        tone === "light" && "bg-rule-light",
        tone === "flare" && "bg-flare",
        className
      )}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={drawRule}
      transition={{ delay }}
    />
  );
}

/**
 * Body copy that brightens word by word as it scrolls through the viewport.
 * Used once, on the manifesto — the one place worth the extra weight.
 */
export function WordFlood({
  text,
  className,
  progress,
}: {
  text: string;
  className?: string;
  progress: MotionValue<number>;
}) {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((word, i) => (
        <FloodWord
          key={`${word}-${i}`}
          progress={progress}
          start={i / words.length}
          end={Math.min(1, (i + 1.6) / words.length)}
        >
          {word}
        </FloodWord>
      ))}
    </p>
  );
}

function FloodWord({
  children,
  progress,
  start,
  end,
}: {
  children: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
      <span>&nbsp;</span>
    </motion.span>
  );
}

export { ease };
