"use client";

import { motion } from "framer-motion";
import { coreValues } from "../lib/content";

export function ValuesSection() {
  return (
    <section
      id="values"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-block rounded-full border border-[#ffecd1]/20 bg-[#001524]/50 px-6 py-2 backdrop-blur-sm">
            <span className="text-sm text-[#ffecd1]/70">القيم</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-[#ffecd1] sm:text-5xl">
            القيم التي نؤمن بها
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
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-[#ffecd1]/10 bg-gradient-to-br from-[#001524]/80 to-[#15616d]/20 p-8 backdrop-blur-sm transition-all hover:border-[#ff7d00]/50 hover:shadow-2xl hover:shadow-[#ff7d00]/10"
            >
              {/* Decorative gradient */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ff7d00]/10 blur-2xl transition-all group-hover:bg-[#ff7d00]/20" />
              
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7d00]/20">
                  <span className="text-lg font-bold text-[#ff7d00]">0{index + 1}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#ffecd1]">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#ffecd1]/70">
                  {value.body}
                </p>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#ff7d00] to-[#ffecd1] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

