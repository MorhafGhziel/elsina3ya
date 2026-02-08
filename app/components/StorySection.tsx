"use client";

import { missionBlocks } from "../constants/content";
import { motion } from "framer-motion";

export function StorySection() {
  const story = missionBlocks[0] as typeof missionBlocks[0] & { quote: string };

  return (
    <section id="story" className="relative py-24 sm:py-32 overflow-hidden bg-[#FFF6F3]">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center relative"
        >
          {/* Chevron decoration */}
          <div className="mb-4">
            <span className="text-[#FF4800] text-xl font-black tracking-[0.3em] opacity-40">
              &gt;&gt;&gt;&gt;&gt;
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#111111] leading-relaxed pb-2">
            {story.title}
          </h2>
        </motion.div>

        {/* Story Content */}
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            {/* Main Content Card - industrial style */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111111] border border-[#FF4800]/15">
              {/* Hazard stripe top */}
              <div className="hazard-tape-thin" />

              {/* Content */}
              <div className="relative z-10 p-12 sm:p-16 lg:p-20" dir="rtl">
                {/* Quote Mark */}
                <div className="absolute top-8 right-8 text-9xl font-bold text-[#FF4800] opacity-10 select-none">
                  &ldquo;
                </div>

                {/* Text */}
                <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#FFF6F3] font-medium relative z-10">
                  {story.body}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="inline-block px-8 py-5 rounded-2xl bg-[#FF4800]/10 border border-[#FF4800]/30">
              <p className="text-lg sm:text-xl text-[#FF4800] font-medium" dir="rtl">
                &ldquo;{story.quote}&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hazard tape divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 hazard-tape-thin" />
    </section>
  );
}
