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
      {/* Diagonal Lines Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(255, 125, 0, 0.5) 0px, rgba(255, 125, 0, 0.5) 2px, transparent 2px, transparent 60px)`,
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-32 h-32 border-4 border-[#ff7d00]/10 rounded-lg rotate-45"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-40 h-40 border-4 border-[#ffecd1]/5"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Title with Target Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center relative"
        >
          {/* Animated Target Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              {/* Pulsing Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-[#ff7d00]"
                  style={{ padding: `${i * 20}px` }}
                />
              ))}

              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#ff7d00] to-[#ff7d00]/50 flex items-center justify-center shadow-2xl shadow-[#ff7d00]/50">
                <svg
                  className="w-12 h-12 text-[#001524]"
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
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#ffecd1] leading-tight relative inline-block mb-6">
            {mission.title}
          </h2>

          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-[#ff7d00]/10 border border-[#ff7d00]/30">
              <span className="text-lg text-[#ff7d00]">
                شغل وكالة، مو شغل نص كم
              </span>
            </div>
          </motion.div>
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
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff7d00] to-transparent"
              />
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
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#ff7d00]/20 border border-[#ff7d00]/50 flex items-center justify-center"
                  >
                    <span className="text-[#ff7d00] font-bold">
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-6 mt-8"
                  >
                    {point.icon}
                  </motion.div>

                  {/* Text */}
                  <p className="text-xl sm:text-2xl text-[#ffecd1] leading-relaxed font-medium">
                    {point.text}
                  </p>

                  {/* Animated Border on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, rgba(255, 125, 0, 0.1) 0%, transparent 100%)`,
                    }}
                  />

                  {/* Glowing Orb */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#ff7d00]/10 blur-2xl transition-all duration-500 group-hover:bg-[#ff7d00]/20 group-hover:scale-150" />
                </div>

                {/* Connecting Line (except for last card) */}
                {index < missionPoints.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 + index * 0.2 }}
                    className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-l from-[#ff7d00]/50 to-transparent -translate-y-1/2 origin-right"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom Accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff7d00]/10 via-[#ff7d00]/20 to-[#ff7d00]/10 border border-[#ff7d00]/30">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-[#ff7d00]"
              />
              <span className="text-lg text-[#ffecd1]">
                ورشة احترافية لصناعة المحتوى
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="w-3 h-3 rounded-full bg-[#ff7d00]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
