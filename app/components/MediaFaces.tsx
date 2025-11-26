"use client";

import { faces } from "../lib/content";
import { motion } from "framer-motion";

export function MediaFaces() {
  return (
    <section
      id="faces"
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
            <span className="text-sm text-[#ffecd1]/70">المواهب</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-[#ffecd1] sm:text-5xl">
            وجوهنا الإعلامية
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#ffecd1]/70">
            أبو عمر – عادل – للي – فواز
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {faces.map((face, index) => (
            <motion.div
              key={face.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-[#ffecd1]/10 bg-gradient-to-br from-[#001524]/80 to-[#15616d]/20 p-8 text-center backdrop-blur-sm transition-all hover:border-[#ff7d00]/50 hover:shadow-2xl hover:shadow-[#ff7d00]/10"
            >
              {/* Decorative gradient */}
              <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#ff7d00]/20 blur-3xl transition-all group-hover:bg-[#ff7d00]/30" />
              
              <div className="relative z-10">
                {/* Avatar */}
                <div className="relative mx-auto mb-6 h-32 w-32">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-[#ff7d00] via-[#15616d] to-[#ffecd1] p-1">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#001524]">
                      <span className="text-3xl font-bold text-[#ffecd1]">
                        {face.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Active badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-[#ff7d00]/50 bg-[#001524] px-3 py-1">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-[#ff7d00]" />
                      <span className="text-xs font-medium text-[#ffecd1]/80">Active</span>
                    </div>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="mb-2 text-2xl font-bold text-[#ffecd1]">
                  {face.name}
                </h3>
                <p className="text-sm text-[#ffecd1]/70">
                  {face.role}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#ff7d00] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

