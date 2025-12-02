"use client";

import { missionBlocks } from "../constants/content";
import { motion } from "framer-motion";

export function VisionSection() {
  const vision = missionBlocks[1];

  return (
    <section id="vision" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Radial Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255, 125, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Spotlight Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff7d00]/20 blur-[120px]"
      />

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
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-[#ff7d00] to-[#ff7d00]/50 flex items-center justify-center shadow-2xl shadow-[#ff7d00]/50">
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
              {/* Orbiting Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-[#ff7d00]/20 border-dashed"
                style={{ padding: "10px" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-[#ffecd1]/10 border-dotted"
                style={{ padding: "20px" }}
              />
            </div>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#ffecd1] leading-tight relative inline-block">
            {vision.title}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-4 left-0 right-0 h-2 bg-linear-to-r from-transparent via-[#ff7d00] to-transparent rounded-full"
            />
          </h2>
        </motion.div>

        {/* Vision Content - Stacked Cards Design */}
        <div className="max-w-5xl mx-auto space-y-8" dir="rtl">
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
              {/* Animated Grid Overlay */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 125, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 125, 0, 0.5) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>

              {/* Glowing Orb */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#ff7d00]/30 rounded-full blur-3xl"
              />

              <div className="relative z-10">
                {/* Highlight Key Phrase */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="inline-block mb-6 px-6 py-3 rounded-full bg-[#ff7d00]/20 border border-[#ff7d00]/50"
                >
                  <span className="text-xl sm:text-2xl font-bold text-[#ff7d00]">
                    صنّاع الأثر
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#ffecd1] font-medium"
                >
                  {vision.body}
                </motion.p>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-40 h-40 border-t-4 border-r-4 border-[#ff7d00]/20 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 border-b-4 border-l-4 border-[#ff7d00]/20 rounded-bl-3xl" />
            </div>

            {/* Shadow Layers for Depth */}
            <div className="absolute inset-0 bg-linear-to-br from-[#ff7d00]/5 to-transparent rounded-3xl transform translate-y-2 translate-x-2 -z-10 blur-sm" />
            <div className="absolute inset-0 bg-linear-to-br from-[#ff7d00]/3 to-transparent rounded-3xl transform translate-y-4 translate-x-4 -z-20 blur-md" />
          </motion.div>

          {/* Floating Accent Elements */}
          <div className="flex justify-center gap-4 flex-wrap">
            {["عبر تمكين المؤثرين", "ربطهم بالشركات", "تأثير رقمي حقيقي"].map(
              (text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-6 py-3 rounded-full bg-[#001524]/60 border border-[#ffecd1]/20 backdrop-blur-sm hover:border-[#ff7d00]/50 transition-all duration-300"
                >
                  <span className="text-sm sm:text-base text-[#ffecd1]/80">
                    {text}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
