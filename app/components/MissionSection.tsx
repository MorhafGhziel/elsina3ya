"use client";

import { missionBlocks } from "../constants/content";
import { motion } from "framer-motion";

export function MissionSection() {
  const mission = missionBlocks[2];

  return (
    <section id="mission" className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center sm:mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#ffecd1] leading-tight pb-2 overflow-visible">
            {mission.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ffecd1]/10 bg-linear-to-br from-[#001524]/60 to-[#001524]/40 p-8 sm:p-12 backdrop-blur-md transition-all duration-500 hover:border-[#ff7d00]/50 hover:shadow-2xl hover:shadow-[#ff7d00]/20 max-w-4xl mx-auto"
          dir="rtl"
        >
          <div
            className="absolute inset-0 bg-linear-to-br from-[#ff7d00]/0 to-[#ff7d00]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(135deg, rgba(255, 125, 0, 0.15) 0%, transparent 100%)`,
            }}
          />

          <div className="relative z-10">
            <p className="text-xl sm:text-2xl leading-relaxed text-[#ffecd1]/90">
              {mission.body}
            </p>
          </div>

          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#ff7d00]/5 blur-2xl transition-all duration-500 group-hover:bg-[#ff7d00]/10 group-hover:scale-150" />
        </motion.div>
      </div>
    </section>
  );
}

