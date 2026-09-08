"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../lib/cn";
import { contact, nav, site } from "../lib/content";
import { ease } from "../lib/motion";
import { Arrow } from "../ui/Interactive";
import { scrollToSection, useScrollLock } from "../ui/SmoothScroll";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(nav[0].id);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 320,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section owns the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Hold the page behind the mobile sheet. Counted, so this cannot release
  // the intro curtain's lock on mount.
  useScrollLock(open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      setOpen(false);
      // Let the sheet finish closing before the scroll starts.
      window.setTimeout(() => scrollToSection(id), open ? 240 : 0);
    },
    [open]
  );

  return (
    <>
      <a
        href="#about"
        onClick={(e) => go(e, "about")}
        className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[100] focus:bg-flare focus:px-4 focus:py-2 focus:text-ink"
      >
        تخطَّ إلى المحتوى
      </a>

      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled ? "bg-ink/85 backdrop-blur-xl" : "bg-transparent"
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: ease.expo, delay: 0.15 }}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 sm:h-20">
          {/* Wordmark */}
          <a
            href="#hero"
            onClick={(e) => go(e, "hero")}
            className="relative z-10 flex shrink-0 items-center"
            aria-label={site.name}
          >
            <Image
              src="/images/snaya_logo2323.png"
              alt={site.name}
              width={132}
              height={40}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="التنقل الرئيسي">
            {nav.slice(1, -1).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                data-active={active === item.id}
                className={cn(
                  "link-wipe text-sm transition-colors duration-300",
                  active === item.id ? "text-flare" : "text-bone/60 hover:text-bone"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 border border-flare px-5 py-2.5 text-sm font-semibold text-flare transition-colors duration-400 hover:bg-flare hover:text-ink sm:inline-flex"
            >
              تواصل معنا
              <Arrow className="size-3.5" />
            </a>

            {/* Mobile trigger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              className="relative z-10 flex size-11 flex-col items-center justify-center gap-[7px] lg:hidden"
            >
              <motion.span
                className="block h-px w-6 bg-bone"
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: ease.expo }}
              />
              <motion.span
                className="block h-px w-6 bg-bone"
                animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: ease.expo }}
              />
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <motion.div
          aria-hidden
          className="h-px origin-right bg-flare"
          style={{ scaleX: progress }}
        />
        <div
          aria-hidden
          className={cn(
            "h-px w-full transition-opacity duration-500",
            scrolled ? "bg-rule-dark opacity-100" : "opacity-0"
          )}
        />
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-ink lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: ease.expo }}
          >
            <div className="blueprint absolute inset-0 opacity-40" aria-hidden />

            <nav
              className="shell relative flex flex-1 flex-col justify-center gap-1 pt-20"
              aria-label="قائمة الجوال"
            >
              {nav.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => go(e, item.id)}
                  className="group flex items-baseline gap-4 border-b border-rule-dark py-4"
                >
                  <motion.span
                    className="flex items-baseline gap-4"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: ease.expo, delay: 0.18 + i * 0.05 }}
                  >
                    <span className="tech-sm tech text-flare/70">{item.index}</span>
                    <span
                      className={cn(
                        "text-3xl font-semibold transition-colors duration-300 sm:text-4xl",
                        active === item.id ? "text-flare" : "text-bone group-hover:text-flare"
                      )}
                    >
                      {item.label}
                    </span>
                  </motion.span>
                </a>
              ))}
            </nav>

            <motion.div
              className="shell relative flex flex-wrap items-center justify-between gap-4 pb-10 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a href={`mailto:${contact.email}`} className="tech text-bone/60" dir="ltr">
                {contact.email}
              </a>
              <a href={`tel:${contact.phoneDial}`} className="tech text-bone/60" dir="ltr">
                {contact.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
