"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { HeroCanvas } from "./ui/HeroCanvas";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <HeroCanvas />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, #ff7d00 0%, transparent 70%)",
            animation: "blob 7s infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #ff9d33 0%, transparent 70%)",
            animation: "blob 9s infinite",
            animationDelay: "2s",
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 125, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 125, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#ff7d00]/30 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7d00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7d00]"></span>
          </span>
          <span className="text-sm text-[#ff7d00] font-medium">
            الصناعية - صنّاع الأثر
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-tight pb-2 overflow-visible"
        >
          <span className="block gradient-text mb-2">نرتب ظهورك</span>
          <span className="block gradient-text-orange">ونضمن تأثيرك</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-[#8892a6] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          نجمع صنّاع المحتوى في ورشة واحدة، ننظّم ظهورهم، ونربطهم بالعلامات
          التجارية المناسبة
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="group relative px-8 py-4 bg-[#ff7d00] text-[#0a0e1a] rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#ff7d00]/50">
            <span className="relative z-10">ابدأ رحلتك الآن</span>
            <div className="absolute inset-0 bg-linear-to-r from-[#ff7d00] to-[#ff9d33] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button className="group px-8 py-4 glass border border-[#ff7d00]/30 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:border-[#ff7d00] hover:bg-[#ff7d00]/10">
            اكتشف خدماتنا
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              ←
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "100+", label: "صانع محتوى" },
            { value: "50+", label: "علامة تجارية" },
            { value: "1000+", label: "محتوى منتج" },
            { value: "5M+", label: "متابع" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl border border-[#ff7d00]/20 hover:border-[#ff7d00]/50 transition-all hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-orange mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#8892a6]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0e1a] to-transparent pointer-events-none" />
    </section>
  );
}
