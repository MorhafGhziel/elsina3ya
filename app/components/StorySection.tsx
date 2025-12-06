"use client";

import { missionBlocks } from "../constants/content";
import { motion } from "framer-motion";

export function StorySection() {
  const story = missionBlocks[0];

  return (
    <section id="story" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#ff7d00]/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Title with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center relative"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#ffecd1] leading-tight pb-2">
            {story.title}
          </h2>
        </motion.div>

        {/* Story Content with Split Design */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            {/* Main Content Card */}
            <div className="relative overflow-hidden rounded-3xl border border-[#ffecd1]/20 bg-gradient-to-br from-[#001524]/80 to-[#001524]/60 backdrop-blur-xl">
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#ff7d00]/30 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#ff7d00]/30 rounded-br-3xl" />
              

              {/* Content */}
              <div className="relative z-10 p-12 sm:p-16 lg:p-20" dir="rtl">
                {/* Quote Mark */}
                <div className="absolute top-8 right-8 text-9xl font-bold text-[#ff7d00] opacity-10 select-none">
                  "
                </div>

                {/* Text */}
                <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#ffecd1] font-medium relative z-10">
                  {story.body}
                </p>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

