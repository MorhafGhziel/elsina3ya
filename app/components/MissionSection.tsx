"use client";

import { missionBlocks } from "../constants/content";
import { motion } from "framer-motion";

export function MissionSection() {
  const mission = missionBlocks[2];

  const missionPoints = [
    { icon: "🎯", text: "نجمع صنّاع المحتوى في ورشة واحدة" },
    { icon: "⚡", text: "ننظّم ظهورهم بشكل احترافي" },
    { icon: "🤝", text: "نربطهم بالعلامات التجارية المناسبة" },
  ];

  return (
    <section id="mission" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ff7d00]/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Title with Target Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center relative"
        >
          {/* Simple Icon */}
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#ffecd1] leading-tight relative inline-block mb-6">
            {mission.title}
          </h2>

          {/* Subtitle Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#ff7d00]/10 border border-[#ff7d00]/30">
              <span className="text-lg text-[#ff7d00]">
                شغل وكالة، مو شغل نص كم
              </span>
            </div>
          </div>
        </motion.div>

        {/* Mission Content - Cards Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Main Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
            dir="rtl"
          >
            <div className="inline-block relative">
              <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#ffecd1] font-medium">
                {mission.body}
              </p>
            </div>
          </motion.div>

          {/* Mission Points Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-20" dir="rtl">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl border border-[#ffecd1]/20 bg-gradient-to-br from-[#001524]/80 to-[#001524]/60 backdrop-blur-xl p-8 h-full transition-all duration-500 hover:border-[#ff7d00]/50 hover:shadow-2xl hover:shadow-[#ff7d00]/20">
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#ff7d00]/20 border border-[#ff7d00]/50 flex items-center justify-center">
                    <span className="text-[#ff7d00] font-bold">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 mt-8">{point.icon}</div>

                  {/* Text */}
                  <p className="text-xl sm:text-2xl text-[#ffecd1] leading-relaxed font-medium">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff7d00]/10 via-[#ff7d00]/20 to-[#ff7d00]/10 border border-[#ff7d00]/30">
              <div className="w-3 h-3 rounded-full bg-[#ff7d00]" />
              <span className="text-lg text-[#ffecd1]">
                ورشة احترافية لصناعة المحتوى
              </span>
              <div className="w-3 h-3 rounded-full bg-[#ff7d00]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
