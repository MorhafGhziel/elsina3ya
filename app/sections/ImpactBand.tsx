"use client";

import Image from "next/image";
import { site } from "../lib/content";
import { HazardTape } from "../ui/Graphics";
import { VelocityMarquee } from "../ui/Marquee";

/**
 * The one volt-yellow moment on the page — the identity manual's yellow
 * ALSINAIYAH block, turned into a full-bleed endline band. Deliberately the
 * only place this colour appears, so it lands as a jolt rather than decoration.
 */
export function ImpactBand() {
  return (
    <section aria-label={site.endline} className="relative">
      <HazardTape height={10} bar={7} />

      <div className="scanlines bg-volt py-8 sm:py-10">
        <VelocityMarquee baseSpeed={52} reverse>
          <span className="flex shrink-0 items-center gap-8 px-8">
            <span className="cond text-[13vw] leading-none text-ink sm:text-[9vw]">
              {site.endline}
            </span>
            <Image
              src="/images/snlogo.png"
              alt=""
              width={120}
              height={56}
              className="w-[7vw] min-w-14 brightness-0"
            />
          </span>
        </VelocityMarquee>
      </div>

      <HazardTape height={10} bar={7} />
    </section>
  );
}
