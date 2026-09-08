"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { values } from "../lib/content";
import { ease } from "../lib/motion";
import { useMediaQuery } from "../lib/useMediaQuery";
import { CornerTicks } from "../ui/Graphics";
import { SectionHead } from "../ui/SectionHead";

/**
 * Sticky stack: each value card parks under the previous one and shrinks
 * slightly, so the five build into a physical pile as you scroll.
 */
export function Values() {
  const stackable = useMediaQuery("(min-width: 768px)");

  return (
    <section id="values" className="relative bg-ink">
      <div className="shell py-24 sm:py-32 lg:pt-40">
        <SectionHead
          index={values.index}
          kicker={values.kicker}
          latin={values.latin}
          headline={values.headline}
          className="max-w-3xl"
        />
      </div>

      <div className="shell pb-24 sm:pb-32 lg:pb-40">
        {values.items.map((item, i) => (
          <ValueCard
            key={item.no}
            item={item}
            i={i}
            total={values.items.length}
            stackable={stackable}
          />
        ))}
      </div>
    </section>
  );
}

function ValueCard({
  item,
  i,
  total,
  stackable,
}: {
  item: (typeof values.items)[number];
  i: number;
  total: number;
  stackable: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.35", "end 0.1"],
  });

  // Cards below the top of the pile recede a little.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const dim = useTransform(scrollYProgress, [0, 1], [1, 0.55]);

  return (
    <div
      ref={ref}
      className={stackable ? "sticky" : undefined}
      style={
        stackable
          ? { top: `calc(6rem + ${i * 1.5}rem)`, zIndex: i + 1 }
          : undefined
      }
    >
      {/*
        The entrance tween lives on its own wrapper. Sharing an element with
        the scroll-derived `scale`/`opacity` below would mean two writers for
        the same properties, and since the card enters the viewport *because*
        the user is scrolling, the scroll values would overwrite the tween
        mid-flight and the card would pop instead of fade.
      */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: ease.expo }}
      >
      <motion.article
        className="group relative mb-6 overflow-hidden border border-rule-dark bg-ink-2"
        style={stackable ? { scale, opacity: dim } : undefined}
      >
        <CornerTicks tone="dark" />

        {/* Index bar down the reading edge */}
        <span
          aria-hidden
          className="absolute inset-y-0 end-0 w-1 bg-flare/25 transition-colors duration-500 group-hover:bg-flare"
        />

        <div className="grid gap-6 p-8 sm:p-12 md:grid-cols-[auto_1fr_1.3fr] md:items-center md:gap-12 lg:p-16">
          <span className="display text-5xl text-flare md:text-7xl" dir="ltr">
            {item.no}
          </span>

          <h3 className="display text-3xl text-bone md:text-4xl lg:text-5xl">
            {item.title}
          </h3>

          <p className="prose-ar max-w-xl text-base text-bone/55 lg:text-lg">
            {item.body}
          </p>
        </div>

        <span className="tech absolute bottom-5 start-8 text-bone/25" dir="ltr">
          {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </motion.article>
      </motion.div>
    </div>
  );
}
