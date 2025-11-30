"use client";

import { motion } from "framer-motion";
import { coreValues } from "../constants/content";

export function ValuesSection() {
  return (
    <section id="values" className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center sm:mb-20"
        >
          <h2 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-[#ffecd1]">
            القيم
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#ffecd1]/70">
            الإبداع – التأثير – الموثوقية – الانتماء – التعاون
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ffecd1]/10 bg-linear-to-br from-[#001524]/60 to-[#001524]/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 hover:border-[#ff7d00]/50 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff7d00]/20"
            >
              <div
                className="absolute inset-0 bg-linear-to-br from-[#ff7d00]/0 to-[#ff7d00]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 125, 0, 0.15) 0%, transparent 100%)`,
                }}
              />

              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7d00]/20">
                  <span className="text-lg font-bold text-[#ff7d00]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#ffecd1]">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#ffecd1]/70">
                  {value.body}
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#ff7d00]/5 blur-2xl transition-all duration-500 group-hover:bg-[#ff7d00]/10 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
