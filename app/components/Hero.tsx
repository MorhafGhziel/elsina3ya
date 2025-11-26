"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#15616d]/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#ff7d00]/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#ffecd1]/20 bg-[#001524]/50 px-6 py-3 backdrop-blur-sm"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#ff7d00]" />
            <span className="text-sm text-[#ffecd1]/80">ورشة التأثير الرقمي</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-5xl font-bold leading-tight tracking-tight text-[#ffecd1] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            الصناعية
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 text-2xl font-medium leading-relaxed text-[#ffecd1]/90 sm:text-3xl md:text-4xl"
          >
            نرتب ظهورك ونضمن تأثيرك
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-[#ffecd1]/70 sm:text-xl"
          >
            الصناعية بتكون معك بمشوارك الإعلامي كاملاً، ندعمك بحضور قوي على السوشيال ميديا، ونشغل حسابك بشكل احترافي، ونبني لك بروفايل إعلامي يعرف الناس عليك بشكل رهيب
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap flex-row-reverse items-center justify-center gap-4"
          >
            <Link
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-[#ff7d00] px-10 py-4 text-base font-semibold text-[#001524] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#ff7d00]/40"
            >
              <span className="relative z-10">ابدأ رحلتك الآن</span>
              <div className="absolute inset-0 -z-0 bg-[#ffecd1] opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="#services"
              className="rounded-full border border-[#ffecd1]/30 bg-transparent px-10 py-4 text-base font-semibold text-[#ffecd1] backdrop-blur-sm transition-all hover:border-[#ff7d00] hover:bg-[#ff7d00]/10"
            >
              اكتشف خدماتنا
            </Link>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              { label: "إدارة المواهب", icon: "✦" },
              { label: "إنتاج المحتوى", icon: "◆" },
              { label: "إدارة الحملات", icon: "✧" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + idx * 0.1, duration: 0.8 }}
                className="rounded-2xl border border-[#ffecd1]/10 bg-[#001524]/40 p-6 backdrop-blur-sm"
              >
                <div className="mb-2 text-2xl text-[#ff7d00]">{item.icon}</div>
                <p className="text-sm text-[#ffecd1]/80">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

