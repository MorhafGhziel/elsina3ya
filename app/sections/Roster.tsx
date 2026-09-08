"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { roster } from "../lib/content";
import { inView } from "../lib/motion";
import { Chevrons, HazardTape } from "../ui/Graphics";
import { LoopMarquee } from "../ui/Marquee";
import { Reveal } from "../ui/Reveal";

/**
 * A band of faces from the roster. Portraits sit desaturated until hovered,
 * then snap to full colour — the "switch the lights on" moment.
 */
export function Roster() {
  return (
    <section className="relative bg-ink">
      <HazardTape height={10} bar={7} />

      <div className="shell pb-16 pt-20 sm:pt-24">
        <Reveal className="flex items-baseline justify-between gap-6">
          <h2 className="display display-md text-bone">{roster.kicker}</h2>
          <span className="tech text-flare" dir="ltr">
            {roster.latin}
          </span>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-px bg-rule-dark lg:grid-cols-4">
        {roster.faces.map((face, i) => (
          <motion.figure
            key={face.name}
            className="tag-shape-sm group relative m-0 aspect-[3/4] overflow-hidden bg-ink"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.9, delay: i * 0.08 }}
          >
            <Image
              src={face.image}
              alt={face.name}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="duotone object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:[filter:none]"
            />

            {/* Orange wash that clears on hover */}
            <span
              aria-hidden
              className="absolute inset-0 bg-flare opacity-30 mix-blend-color transition-opacity duration-700 group-hover:opacity-0"
            />
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/3"
              style={{
                background:
                  "linear-gradient(to top, #0C0C0C, rgba(12,12,12,0.5) 45%, transparent)",
              }}
            />

            <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <span className="block text-lg font-semibold text-bone sm:text-xl">
                {face.name}
              </span>
              <span className="tech-sm tech mt-1 block text-flare" dir="ltr">
                {face.role}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Name ribbon */}
      <div className="border-y border-rule-dark py-5">
        <LoopMarquee duration={26} reverse>
          {roster.faces.map((face) => (
            <span key={face.name} className="flex shrink-0 items-center gap-6 px-6">
              <span className="text-2xl font-semibold text-bone/30 sm:text-3xl">
                {face.name}
              </span>
              <Chevrons count={2} size={14} className="text-flare" />
            </span>
          ))}
        </LoopMarquee>
      </div>
    </section>
  );
}
