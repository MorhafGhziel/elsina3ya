"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { ease } from "../lib/motion";

/* ------------------------------------------------------------------ */
/* Magnetic wrapper                                                     */
/* ------------------------------------------------------------------ */

/** Pulls its child toward the pointer while hovered. */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.6 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.6 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
      y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    },
    [reduced, strength, x, y]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                              */
/* ------------------------------------------------------------------ */

type ActionProps = {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: "solid" | "outline";
  tone?: "dark" | "light";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
};

/**
 * Square-cornered CTA. The label swaps for a copy of itself on hover so the
 * motion reads as a mechanical shutter rather than a fade.
 */
export function Action({
  children,
  href,
  onClick,
  variant = "solid",
  tone = "dark",
  className,
  external,
  type = "button",
  disabled,
}: ActionProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden px-8 py-4 text-base font-semibold transition-colors duration-500 disabled:cursor-not-allowed disabled:opacity-50";

  const skin =
    variant === "solid"
      ? "bg-flare text-ink hover:text-bone"
      : tone === "dark"
        ? "border border-rule-dark text-bone hover:text-ink"
        : "border border-rule-light text-soot hover:text-bone";

  const fill =
    variant === "solid"
      ? "bg-ink"
      : tone === "dark"
        ? "bg-flare"
        : "bg-soot";

  const inner = (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100",
          fill
        )}
      />
      <span className="relative flex items-center gap-3">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(base, skin, className)}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn(base, skin, className)}>
      {inner}
    </button>
  );
}

/** Arrow that points along the reading direction (RTL: leftwards). */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn(
        "size-4 shrink-0 rotate-180 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1 rtl:group-hover:translate-x-1",
        className
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Counter                                                              */
/* ------------------------------------------------------------------ */

/**
 * Counts up to `value` the first time it scrolls into view.
 * The running number lives in a MotionValue, so ticking it does not
 * re-render the React tree sixty times a second.
 */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const raw = useMotionValue(0);
  const shown = useTransform(raw, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!isInView) return;
    if (reduced) {
      raw.set(value);
      return;
    }
    const controls = animate(raw, value, { duration: 1.8, ease: ease.expo });
    return () => controls.stop();
  }, [isInView, reduced, value, raw]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)} dir="ltr">
      <motion.span>{shown}</motion.span>
      {suffix}
    </span>
  );
}
