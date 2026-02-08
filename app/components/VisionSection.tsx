"use client";

import { missionBlocks } from "../constants/content";
import { motion } from "framer-motion";

export function VisionSection() {
  const vision = missionBlocks[1];

  return (
    <section id="vision" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ff7d00]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Title Section with Eye Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center relative"
        >
          {/* Eye/Vision Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff7d00] to-[#ff7d00]/50 flex items-center justify-center shadow-lg shadow-[#ff7d00]/30">
              <svg
                className="w-8 h-8 text-[#001524]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#ffecd1] leading-tight relative inline-block">
            {vision.title}
          </h2>
        </motion.div>

        {/* Vision Content */}
        <div className="max-w-5xl mx-auto space-y-8" dir="rtl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-[#ff7d00]/20 border border-[#ff7d00]/50">
              <span className="text-xl sm:text-2xl font-bold text-[#ff7d00]">
                {vision.subtitle}
              </span>
            </div>
          </motion.div>

          {/* Main Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
            style={{ perspective: "1000px" }}
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#ff7d00]/30 bg-linear-to-br from-[#ff7d00]/10 via-[#001524]/90 to-[#001524]/80 backdrop-blur-xl p-10 sm:p-14 lg:p-16 shadow-2xl hover:shadow-[#ff7d00]/20 transition-all duration-500">
              <div className="relative z-10">
                <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#ffecd1] font-medium mb-12">
                  {vision.body}
                </p>

                {/* Three Pillars */}
                <div className="grid md:grid-cols-3 gap-6">
                  {vision.pillars.map((pillar: { title: string; body: string }, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      className="p-6 rounded-2xl bg-[#001524]/60 border border-[#ffecd1]/10 hover:border-[#ff7d00]/40 transition-all"
                    >
                      <h4 className="text-xl font-bold text-[#ff7d00] mb-3">
                        {pillar.title}
                      </h4>
                      <p className="text-[#ffecd1]/80 leading-relaxed">
                        {pillar.body}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
