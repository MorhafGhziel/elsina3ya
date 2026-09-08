"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { services } from "../lib/content";
import { ease, inView } from "../lib/motion";
import { CornerTicks } from "../ui/Graphics";
import { SectionHead } from "../ui/SectionHead";

type Item = (typeof services.items)[number];

export function Services() {
  return (
    <section id="services" className="relative bg-ink">
      <div className="shell pt-24 sm:pt-32 lg:pt-40">
        <SectionHead
          index={services.index}
          kicker={services.kicker}
          latin={services.latin}
          headline={services.headline}
          className="max-w-3xl"
        />
      </div>

      {/*
        Both rails render; CSS picks one. Choosing in JS instead would mean the
        server always emitted the short mobile rail, and hydration on desktop
        would then insert the pinned rail's ~3 viewports of height into the
        middle of the document — a large layout shift that also breaks deep
        links and browser scroll restoration.
      */}
      <div className="lg:hidden">
        <SwipeRail />
      </div>
      <div className="hidden lg:block">
        <PinnedRail />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop: the section pins and the rail travels sideways              */
/* ------------------------------------------------------------------ */

function PinnedRail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  // Measure how far the rail must travel to show its last card.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 42,
    restDelta: 0.0005,
  });

  // RTL: the rail extends leftwards, so it slides to the right to advance.
  const x = useTransform(smooth, [0, 1], [0, distance]);
  const barScale = useTransform(smooth, [0, 1], [0.06, 1]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    return smooth.on("change", (v) => {
      setIndex(Math.min(services.items.length - 1, Math.floor(v * services.items.length)));
    });
  }, [smooth]);

  return (
    <div
      ref={sectionRef}
      style={{ height: `${services.items.length * 55}vh` }}
      className="relative mt-16"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <motion.div ref={trackRef} className="flex w-max gap-6 px-[var(--gutter)]" style={{ x }}>
          {services.items.map((item, i) => (
            <Card key={item.no} item={item} i={i} />
          ))}
          <EndCap />
        </motion.div>

        {/* Rail progress */}
        <div className="shell mt-14 flex items-center gap-6">
          <span className="tech text-flare" dir="ltr">
            {String(index + 1).padStart(2, "0")} / {String(services.items.length).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-rule-dark">
            <motion.span
              className="block h-px origin-right bg-flare"
              style={{ scaleX: barScale }}
            />
          </div>
          <span className="tech text-bone/35" dir="ltr">
            SCROLL TO ADVANCE
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile: a native snap carousel — swiping beats pinning on touch      */
/* ------------------------------------------------------------------ */

function SwipeRail() {
  return (
    <div className="mt-12 pb-24">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {services.items.map((item, i) => (
          <Card key={item.no} item={item} i={i} compact />
        ))}
      </div>
      <p className="shell tech text-bone/35" dir="ltr">
        SWIPE →
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Card({ item, i, compact }: { item: Item; i: number; compact?: boolean }) {
  return (
    <motion.article
      className={cn(
        "group relative flex shrink-0 snap-start flex-col justify-between overflow-hidden border border-rule-dark bg-ink-2 p-8 sm:p-10",
        compact ? "h-[26rem] w-[80vw] max-w-sm" : "h-[30rem] w-[24rem] xl:w-[28rem]"
      )}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.8, ease: ease.expo, delay: Math.min(i, 3) * 0.07 }}
    >
      {/* Orange fill rises on hover */}
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-flare transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
      />
      <CornerTicks tone="dark" />

      <div className="relative">
        <span
          className="display block text-6xl text-flare transition-colors duration-500 group-hover:text-ink sm:text-7xl"
          dir="ltr"
        >
          {item.no}
        </span>
        <span
          aria-hidden
          className="mt-6 block h-px w-full bg-rule-dark transition-colors duration-500 group-hover:bg-ink/25"
        />
      </div>

      <div className="relative">
        <h3 className="text-2xl font-semibold leading-snug text-bone transition-colors duration-500 group-hover:text-ink sm:text-[1.75rem]">
          {item.title}
        </h3>
        <p className="prose-ar mt-4 text-sm text-bone/50 transition-colors duration-500 group-hover:text-ink/75 sm:text-base">
          {item.body}
        </p>
      </div>
    </motion.article>
  );
}

/** Closing panel at the end of the rail so it does not just stop. */
function EndCap() {
  return (
    <div className="relative flex h-[30rem] w-[20rem] shrink-0 flex-col items-center justify-center gap-5 border border-flare/40 bg-ink px-8 text-center">
      <span className="display text-3xl text-bone">وباقي أكثر</span>
      <p className="text-sm text-bone/50">
        كل باقة تُبنى على حالة العميل، مو على قالب جاهز.
      </p>
      <span className="tech text-flare" dir="ltr">
        TAILORED PER CLIENT
      </span>
    </div>
  );
}
