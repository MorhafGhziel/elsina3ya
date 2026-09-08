"use client";

import { cn } from "../lib/cn";
import { MaskLines, Reveal, Rule } from "./Reveal";

/**
 * The recurring section masthead: index, Arabic kicker, Latin sub-label,
 * then the display headline. Kept identical everywhere so the page reads
 * like one document rather than a stack of unrelated blocks.
 */
export function SectionHead({
  index,
  kicker,
  latin,
  headline,
  tone = "dark",
  align = "start",
  className,
}: {
  index: string;
  kicker: string;
  latin: string;
  headline: string;
  tone?: "dark" | "light";
  align?: "start" | "center";
  className?: string;
}) {
  const muted = tone === "dark" ? "text-bone/45" : "text-soot/45";
  const strong = tone === "dark" ? "text-bone" : "text-soot";

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="tech text-flare" dir="ltr">
            [{index}]
          </span>
          <span className={cn("text-sm font-medium", strong)}>{kicker}</span>
          <span className={cn("tech-sm tech", muted)} dir="ltr">
            {latin}
          </span>
        </div>
      </Reveal>

      <Rule tone={tone} className="my-6" delay={0.1} />

      <h2 className={cn("display display-lg", strong)}>
        <MaskLines lines={[headline]} delay={0.15} />
      </h2>
    </div>
  );
}
