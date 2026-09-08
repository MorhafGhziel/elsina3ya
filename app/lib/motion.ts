import type { Variants } from "framer-motion";

/** The house easing curve — long tail, no bounce. Mirrors --ease-out-expo in CSS. */
export const ease = { expo: [0.16, 1, 0.3, 1] } as const;

/** Viewport config used by every scroll-triggered section. */
export const inView = { once: true, amount: 0.25, margin: "0px 0px -8% 0px" } as const;

/** Parent that staggers its children in reading order. */
export const stagger = (gap = 0.07, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

/** Text or block sliding up from behind a mask edge. */
export const riseIn: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.05, ease: ease.expo } },
};

/** Generic fade + lift for cards and paragraphs. */
export const lift: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: ease.expo } },
};

/** Hairline rule drawing itself from the reading edge (RTL: right to left). */
export const drawRule: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.1, ease: ease.expo } },
};
