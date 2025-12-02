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
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ff7d00' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#ff7d00]/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#ffecd1]/10 to-transparent rounded-full blur-3xl"
      />

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
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 bg-gradient-to-br from-[#ff7d00] to-[#ff7d00]/50 transform rotate-45 shadow-2xl shadow-[#ff7d00]/50"
              >
                <div className="absolute inset-2 bg-[#001524] transform" />
              </motion.div>
              {/* Orbiting Dots */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                  className="absolute inset-0"
                  style={{ transformOrigin: 'center' }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#ff7d00]" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="mb-6 text-5xl sm:text-6xl lg:text-8xl font-bold text-[#ffecd1]">
            القيم
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="mx-auto max-w-3xl text-xl sm:text-2xl text-[#ffecd1]/70 font-medium">
              الإبداع – التأثير – الموثوقية – الانتماء – التعاون
            </p>
          </motion.div>

          {/* Decorative Lines */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="h-1 bg-[#ff7d00]/50 rounded-full"
                style={{ width: `${(i + 1) * 10}px` }}
              />
            ))}
          </div>
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
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#ffecd1]/20 bg-gradient-to-br from-[#001524]/90 to-[#001524]/70 backdrop-blur-xl p-8 h-full transition-all duration-500 hover:border-[#ff7d00]/60 hover:shadow-2xl hover:shadow-[#ff7d00]/30">
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(255, 125, 0, 0.3) 25%, transparent 25%, transparent 75%, rgba(255, 125, 0, 0.3) 75%)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff7d00]/0 via-[#ff7d00]/0 to-[#ff7d00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon Container with Animation */}
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 relative"
                  >
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff7d00]/30 to-[#ff7d00]/10 border border-[#ff7d00]/30 text-[#ff7d00] relative overflow-hidden">
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="relative z-10">
                        {valueIcons[index]}
                      </div>
                    </div>
                    
                    {/* Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#ff7d00] text-[#001524] flex items-center justify-center font-bold text-sm shadow-lg"
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-[#ffecd1] group-hover:text-[#ff7d00] transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    className="h-0.5 bg-gradient-to-r from-[#ff7d00]/50 to-transparent mb-4 origin-right"
                  />

                  {/* Description */}
                  <p className="text-base leading-relaxed text-[#ffecd1]/80">
                    {value.body}
                  </p>
                </div>

                {/* Glowing Corner */}
                <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#ff7d00]/10 blur-3xl transition-all duration-500 group-hover:bg-[#ff7d00]/25 group-hover:scale-150" />
                
                {/* Top Left Accent */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#ff7d00]/20 rounded-tl-3xl" />
              </div>

              {/* Shadow Layer for Depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7d00]/5 to-transparent rounded-3xl transform translate-y-2 -z-10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#ff7d00]"
            />
            <div className="h-px w-16 bg-gradient-to-r from-[#ff7d00] to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-3 h-3 rounded-full bg-[#ff7d00]"
            />
            <div className="h-px w-16 bg-gradient-to-l from-[#ff7d00] to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="w-2 h-2 rounded-full bg-[#ff7d00]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
