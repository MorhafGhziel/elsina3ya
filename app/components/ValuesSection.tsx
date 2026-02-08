"use client";

import { motion } from "framer-motion";
import { coreValues } from "../constants/content";

const valueIcons = [
  // Creativity
  <svg key="creativity" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  // Impact
  <svg key="impact" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Trust
  <svg key="trust" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Belonging
  <svg key="belonging" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Collaboration
  <svg key="collaboration" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
];

export function ValuesSection() {
  return (
    <section id="values" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Values — subtle cool surface */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(16, 24, 42, 0.6) 20%, rgba(16, 24, 42, 0.8) 50%, rgba(16, 24, 42, 0.6) 80%, transparent 100%)",
      }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FF4700]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center relative"
        >
          {/* Diamond Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FF4700] to-[#FF4700]/50 transform rotate-45 shadow-lg shadow-[#FF4700]/30">
              <div className="absolute inset-2 bg-[#0a2a40] transform" />
            </div>
          </div>

          <h2 className="mb-6 text-5xl sm:text-6xl lg:text-8xl font-bold text-[#ffecd1]">
            القيم
          </h2>
          
          <p className="mx-auto max-w-3xl text-xl sm:text-2xl text-[#ffecd1]/70 font-medium">
            الإبداع – التأثير – الموثوقية – الانتماء – التعاون
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5" dir="rtl">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 80, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: 5,
              }}
              style={{ perspective: '1000px' }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#ffecd1]/20 bg-gradient-to-br from-[#0a2a40]/90 to-[#0a2a40]/70 backdrop-blur-xl p-8 h-full transition-all duration-500 hover:border-[#FF4700]/60 hover:shadow-2xl hover:shadow-[#FF4700]/30">

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF4700]/30 to-[#FF4700]/10 border border-[#FF4700]/30 text-[#FF4700]">
                      {valueIcons[index]}
                    </div>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FF4700] text-[#0a2a40] flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-[#ffecd1] group-hover:text-[#FF4700] transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Divider */}
                  <div className="h-0.5 bg-gradient-to-r from-[#FF4700]/50 to-transparent mb-4" />

                  {/* Description */}
                  <p className="text-base leading-relaxed text-[#ffecd1]/80">
                    {value.body}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#FF4700]" />
            <div className="h-px w-16 bg-gradient-to-r from-[#FF4700] to-transparent" />
            <div className="w-3 h-3 rounded-full bg-[#FF4700]" />
            <div className="h-px w-16 bg-gradient-to-l from-[#FF4700] to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[#FF4700]" />
          </div>
        </div>
      </div>
    </section>
  );
}
