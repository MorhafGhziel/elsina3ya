"use client";

import { missionBlocks } from "../lib/content";
import { motion } from "framer-motion";

export function OriginsSection() {
  return (
    <section
      id="story"
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
          <div className="mb-4 inline-block rounded-full border border-[#ffecd1]/20 bg-[#001524]/50 px-6 py-2 backdrop-blur-sm">
            <span className="text-sm text-[#ffecd1]/70">من نحن</span>
          </div>
        </motion.div>

        <div className="grid gap-8 text-right lg:grid-cols-3" dir="rtl">
          {missionBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-[#ffecd1]/10 bg-gradient-to-br from-[#001524]/80 to-[#15616d]/20 p-8 backdrop-blur-sm transition-all hover:border-[#ff7d00]/50 hover:shadow-2xl hover:shadow-[#ff7d00]/10"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7d00]/0 to-[#ff7d00]/10 opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-[#ff7d00]/20 px-4 py-1.5">
                  <span className="text-xs font-medium text-[#ff7d00]">{block.label}</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#ffecd1]">
                  {block.title}
                </h3>
                <p className="leading-relaxed text-[#ffecd1]/70">
                  {block.body}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#ff7d00]/5 blur-2xl transition-all group-hover:bg-[#ff7d00]/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

