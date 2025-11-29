"use client";

import { faces } from "../lib/content";
import { motion } from "framer-motion";

export function MediaFaces() {
  return (
    <section
      id="faces"
      className="relative py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center sm:mb-20"
        >
          <h2 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-[#ffecd1]">
            وجوهنا الإعلامية
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#ffecd1]/70">
            أبو عمر – عادل – للي – فواز
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {faces.map((face, index) => (
            <motion.div
              key={face.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ffecd1]/10 bg-linear-to-br from-[#001524]/60 to-[#001524]/40 p-6 sm:p-8 text-center backdrop-blur-md transition-all duration-500 hover:border-[#ff7d00]/50 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff7d00]/20"
            >
              <div
                className="absolute inset-0 bg-linear-to-br from-[#ff7d00]/0 to-[#ff7d00]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 125, 0, 0.15) 0%, transparent 100%)`,
                }}
              />
              
              <div className="relative z-10">
                <div className="relative mx-auto mb-6 h-32 w-32">
                  <div className="h-full w-full rounded-full bg-linear-to-br from-[#ff7d00] via-[#15616d] to-[#ffecd1] p-1">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#001524]">
                      <span className="text-3xl font-bold text-[#ffecd1]">
                        {face.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-[#ff7d00]/50 bg-[#001524] px-3 py-1">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-[#ff7d00]" />
                      <span className="text-xs font-medium text-[#ffecd1]/80">Active</span>
                    </div>
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-[#ffecd1]">
                  {face.name}
                </h3>
                <p className="text-sm text-[#ffecd1]/70">
                  {face.role}
                </p>
              </div>

              <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#ff7d00]/5 blur-3xl transition-all duration-500 group-hover:bg-[#ff7d00]/10 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
