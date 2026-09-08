"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Lenis owns the page scroll, so the instance and the scroll lock both live at
 * module scope rather than in context.
 *
 * The reason is ordering: React flushes child effects before parent effects, so
 * anything below <SmoothScroll> (the preloader, the nav) mounts and asks for a
 * scroll lock *before* Lenis has been constructed. A ref or context value would
 * still be null at that point and the lock would silently do nothing. Keeping
 * the state here lets a pending lock be re-applied the moment Lenis exists.
 */
let instance: Lenis | null = null;
let lockCount = 0;

/** Reconcile the DOM with the current lock count. Safe to call at any time. */
function applyLock() {
  if (typeof document === "undefined") return;
  const locked = lockCount > 0;
  document.body.style.overflow = locked ? "hidden" : "";
  if (locked) instance?.stop();
  else instance?.start();
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    instance = lenis;
    // A child may already hold a lock taken before this ran.
    applyLock();

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, []);

  return <>{children}</>;
}

/**
 * Hold the page still while `active` is true. Counted, so overlapping holders
 * (the intro curtain and the mobile menu) cannot release each other's lock.
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    lockCount += 1;
    applyLock();
    return () => {
      lockCount -= 1;
      applyLock();
    };
  }, [active]);
}

/** Scroll to a section id, honouring Lenis when it is running. */
export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  if (instance) {
    instance.scrollTo(target, { offset: -1, duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
