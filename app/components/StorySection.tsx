"use client";

import { missionBlocks } from "../constants/content";
import { motion } from "framer-motion";

export function StorySection() {
  const story = missionBlocks[0];

  return (
    <section id="story" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#ff7d00]/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ffecd1]/5 to-transparent blur-3xl"
        />
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
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#ff7d00] to-transparent mx-auto mb-6"
          />
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#ffecd1] leading-tight pb-2 overflow-visible relative inline-block">
            {story.title}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-8 text-6xl text-[#ff7d00]/30"
            >
              ✦
            </motion.span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#ff7d00] to-transparent mx-auto mt-6"
          />
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
              
              {/* Floating Orbs */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 right-10 w-24 h-24 rounded-full bg-[#ff7d00]/10 blur-2xl"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-[#ffecd1]/5 blur-2xl"
              />

              {/* Content */}
              <div className="relative z-10 p-12 sm:p-16 lg:p-20" dir="rtl">
                {/* Quote Mark */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-8 right-8 text-9xl font-bold text-[#ff7d00] opacity-10 select-none"
                >
                  "
                </motion.div>

                {/* Text with Animation */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#ffecd1] font-medium relative z-10"
                >
                  {story.body}
                </motion.p>

                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "120px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-1 bg-gradient-to-r from-[#ff7d00] to-transparent mt-10"
                />
              </div>

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7d00]/0 via-[#ff7d00]/0 to-[#ff7d00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Floating Side Elements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -left-6 top-1/4 w-12 h-48 bg-gradient-to-b from-[#ff7d00]/20 to-transparent rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -right-6 bottom-1/4 w-12 h-48 bg-gradient-to-t from-[#ff7d00]/20 to-transparent rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

