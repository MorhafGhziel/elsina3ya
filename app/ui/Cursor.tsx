"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A crosshair cursor in difference blend mode: it reads as orange on the black
 * sections and inverts over the paper ones without any per-section wiring.
 *
 * Visibility is gated in CSS (`pointer-fine`, `motion-reduce`) rather than in
 * JavaScript, so touch and reduced-motion visitors never pay for it and the
 * component needs no mount-time state.
 */
export function Cursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 900, damping: 45, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 900, damping: 45, mass: 0.35 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a, button, input, textarea, [data-cursor]")));
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden mix-blend-difference pointer-fine:block motion-reduce:!hidden"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: active ? 1.9 : 1, rotate: active ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-flare" />
        <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-flare" />
      </motion.div>
    </motion.div>
  );
}
