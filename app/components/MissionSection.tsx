"use client";

import { missionBlocks, howWeWork } from "../constants/content";
import { motion } from "framer-motion";

export function MissionSection() {
  const mission = missionBlocks[2] as typeof missionBlocks[2] & { subtitle: string };

  return (
    <section id="mission" className="relative py-24 sm:py-32 overflow-hidden bg-[#FFF6F3]">
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

          {/* Industrial icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#FF4800] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#111111] leading-relaxed relative inline-block mb-6">
            {mission.title}
          </h2>

          {/* Subtitle Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#FF4800]/10 border border-[#FF4800]/30">
              <span className="text-lg text-[#FF4800]">
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
              <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#111111] font-medium">
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
            <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">
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
                {/* Industrial card */}
                <div className="relative overflow-hidden rounded-2xl bg-[#111111] border border-[#FF4800]/15 h-full transition-all duration-500 hover:border-[#FF4800]/50 hover:shadow-2xl hover:shadow-[#FF4800]/10">
                  {/* Hazard stripe top */}
                  <div className="hazard-tape-thin" />

                  <div className="p-8">
                    {/* Number Badge */}
                    <div className="absolute top-12 left-4 w-10 h-10 rounded-full bg-[#FF4800] flex items-center justify-center">
                      <span className="text-[#111111] font-bold">
                        {index + 1}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="text-6xl mb-6 mt-4">{step.icon}</div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-[#FF4800] mb-3">
                      {step.title}
                    </h4>

                    {/* Text */}
                    <p className="text-lg text-[#FFF6F3]/80 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hazard tape divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 hazard-tape-thin" />
    </section>
  );
}
