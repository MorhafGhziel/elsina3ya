"use client";

import { missionBlocks } from "../lib/content";
import { motion } from "framer-motion";

export function OriginsSection() {
  return (
    <section
      id="story"
      className="relative isolate overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(21, 97, 109, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 125, 0, 0.06) 0%, transparent 50%),
              linear-gradient(180deg, #001524 0%, #000a12 100%)
            `,
          }}
        />
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 236, 209, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 236, 209, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#ff7d00]/5 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#15616d]/5 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center sm:mb-20"
        >
          <div className="mb-6 inline-block rounded-full border border-[#ffecd1]/20 bg-[#001524]/60 px-6 py-2.5 backdrop-blur-sm">
            <span className="text-sm font-semibold text-[#ffecd1]">من نحن</span>
          </div>
        </motion.div>

        <div className="grid gap-6 text-right sm:gap-8 lg:grid-cols-3" dir="rtl">
          {missionBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ffecd1]/10 bg-linear-to-br from-[#001524]/60 to-[#001524]/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 hover:border-[#ff7d00]/50 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff7d00]/20"
            >
              <div
                className="absolute inset-0 bg-linear-to-br from-[#ff7d00]/0 to-[#ff7d00]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 125, 0, 0.15) 0%, transparent 100%)`,
                }}
              />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-[#ff7d00]/20 px-4 py-1.5">
                  <span className="text-xs font-bold text-[#ff7d00]">{block.label}</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold leading-tight text-[#ffecd1] sm:text-3xl">
                  {block.title}
                </h3>
                <p className="leading-relaxed text-[#ffecd1]/70">
                  {block.body}
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
