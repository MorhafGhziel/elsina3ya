"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { cn } from "../lib/cn";

/**
 * How many times `children` must repeat so the ticker never runs dry.
 *
 * A marquee loops by rendering its content twice and wrapping at the halfway
 * point. That only works if one half is at least as wide as the visible box —
 * otherwise the track runs out mid-loop and a blank gap scrolls past. Short
 * content (a few words on a wide desktop) hits this constantly, so the number
 * of repeats is measured rather than assumed.
 *
 * Returns the repeat count for ONE half; the caller renders twice that many.
 */
function useMarqueeFill(
  boxRef: RefObject<HTMLDivElement | null>,
  groupRef: RefObject<HTMLDivElement | null>
) {
  const [copies, setCopies] = useState(2);

  useEffect(() => {
    const box = boxRef.current;
    const group = groupRef.current;
    if (!box || !group) return;

    // ResizeObserver fires once on observe, which covers the initial measure —
    // so nothing has to set state synchronously from this effect body.
    const observer = new ResizeObserver(() => {
      const unit = group.offsetWidth;
      const width = box.offsetWidth;
      if (!unit || !width) return;
      // Cover the box, plus one spare group so the seam stays off screen.
      setCopies(Math.max(2, Math.ceil(width / unit) + 1));
    });

    observer.observe(box);
    observer.observe(group);
    return () => observer.disconnect();
  }, [boxRef, groupRef]);

  return copies;
}

/** Render `children` `count` times; `groupRef` tags the first for measurement. */
function Groups({
  count,
  groupRef,
  children,
}: {
  count: number;
  groupRef?: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={groupRef && i === 0 ? groupRef : undefined}
          className="flex shrink-0"
        >
          {children}
        </div>
      ))}
    </>
  );
}

/**
 * Infinite ticker whose speed and direction react to scroll velocity.
 * Scrolling down pushes it along; scrolling up drags it back.
 */
export function VelocityMarquee({
  children,
  baseSpeed = 40,
  className,
  reverse = false,
}: {
  children: ReactNode;
  /** Idle pixels per second. */
  baseSpeed?: number;
  className?: string;
  reverse?: boolean;
}) {
  const reduced = useReducedMotion();
  const boxRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const copies = useMarqueeFill(boxRef, groupRef);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 380 });
  const velocityBoost = useTransform(smoothVelocity, [-2000, 0, 2000], [-4, 0, 4], {
    clamp: false,
  });

  const direction = reverse ? 1 : -1;

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;

    // The track holds two identical halves, so wrapping at 50% is seamless.
    const half = track.scrollWidth / 2;
    if (!half) return;

    const boost = velocityBoost.get();
    const speed = baseSpeed * (1 + Math.abs(boost));
    // Scrolling up (negative velocity) drags the ticker backwards.
    const sign = boost < -0.5 ? -1 : 1;

    const next = x.get() + direction * sign * speed * (delta / 1000);
    // Keep x inside (-half, 0] so the track never runs out of content.
    x.set(((next % half) - half) % half);
  });

  return (
    <div ref={boxRef} className={cn("relative w-full overflow-hidden", className)} dir="ltr">
      <motion.div ref={trackRef} className="marquee-track" style={{ x }}>
        <Groups count={copies} groupRef={groupRef}>
          {children}
        </Groups>
        <Groups count={copies}>
          {children}
        </Groups>
      </motion.div>
    </div>
  );
}

/**
 * Ticker for cases that do not need scroll reactivity.
 * `duration` is seconds for one full pass of a single copy, so the perceived
 * speed stays constant however many copies are needed to fill the box.
 */
export function LoopMarquee({
  children,
  duration = 28,
  reverse = false,
  className,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const boxRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  const copies = useMarqueeFill(boxRef, groupRef);

  return (
    <div ref={boxRef} className={cn("relative w-full overflow-hidden", className)} dir="ltr">
      <motion.div
        className="marquee-track"
        animate={reduced ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: (duration * copies) / 2, ease: "linear", repeat: Infinity }}
      >
        <Groups count={copies} groupRef={groupRef}>
          {children}
        </Groups>
        <Groups count={copies}>
          {children}
        </Groups>
      </motion.div>
    </div>
  );
}
