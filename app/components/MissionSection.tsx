"use client";

import { missionBlocks, howWeWork } from "../constants/content";
import { motion } from "framer-motion";

export function MissionSection() {
  const mission = missionBlocks[2] as typeof missionBlocks[2] & { subtitle: string };

  return (
    <section id="mission" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#FF4700]/5 to-transparent blur-3xl" />
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
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF4700] to-[#FF4700]/50 flex items-center justify-center shadow-lg shadow-[#FF4700]/30">
              <svg
                className="w-8 h-8 text-[#0a2a40]"
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

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#ffecd1] leading-relaxed relative inline-block mb-6">
            {mission.title}
          </h2>

          {/* Subtitle Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#FF4700]/10 border border-[#FF4700]/30">
              <span className="text-lg text-[#FF4700]">
                {mission.subtitle}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Mission Content */}
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

          {/* How We Work Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#ffecd1]">
              كيف نشتغل؟
            </h3>
          </motion.div>

          {/* How We Work Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8" dir="rtl">
            {howWeWork.map((step, index) => (
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
                <div className="relative overflow-hidden rounded-3xl border border-[#ffecd1]/20 bg-gradient-to-br from-[#0a2a40]/80 to-[#0a2a40]/60 backdrop-blur-xl p-8 h-full transition-all duration-500 hover:border-[#FF4700]/50 hover:shadow-2xl hover:shadow-[#FF4700]/20">
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#FF4700]/20 border border-[#FF4700]/50 flex items-center justify-center">
                    <span className="text-[#FF4700] font-bold">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 mt-8">{step.icon}</div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-[#FF4700] mb-3">
                    {step.title}
                  </h4>

                  {/* Text */}
                  <p className="text-lg text-[#ffecd1]/80 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
