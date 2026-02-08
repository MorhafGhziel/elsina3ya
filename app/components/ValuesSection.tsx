"use client";

import { motion } from "framer-motion";
import { coreValues } from "../constants/content";

/* Brand-specific icons: fire, umbrella, warning triangle, gears, collaboration */
const valueIcons = [
  // Creativity - Fire
  <svg key="fire" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
  </svg>,
  // Impact - Lightning/bolt
  <svg key="impact" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Trust - Shield/umbrella
  <svg key="trust" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Belonging - Warning triangle / community
  <svg key="belonging" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Collaboration - Gears
  <svg key="gears" className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.58 1.69-.98l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64L19.43 12.97Z"/>
  </svg>,
];

export function ValuesSection() {
  return (
    <section id="values" className="relative py-24 sm:py-32 overflow-hidden bg-[#111111] grain-overlay">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center relative"
        >
          {/* Chevron decoration */}
          <div className="mb-4">
            <span className="text-[#FF4800] text-xl font-black tracking-[0.3em] opacity-40">
              &gt;&gt;&gt;&gt;&gt;
            </span>
          </div>

          <h2 className="mb-6 text-5xl sm:text-6xl lg:text-8xl font-bold text-[#FFF6F3]">
            القيم
          </h2>

          <p className="mx-auto max-w-3xl text-xl sm:text-2xl text-[#FFF6F3]/60 font-medium">
            الإبداع – التأثير – الموثوقية – الانتماء – التعاون
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5" dir="rtl">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
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
              }}
              className="group relative"
            >
              {/* Industrial card */}
              <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#FF4800]/15 h-full transition-all duration-500 hover:border-[#FF4800]/50 hover:shadow-2xl hover:shadow-[#FF4800]/20">
                {/* Hazard stripe top */}
                <div className="hazard-tape-thin" />

                <div className="p-8">
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#FF4800]/15 border border-[#FF4800]/25 text-[#FF4800]">
                        {valueIcons[index]}
                      </div>

                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FF4800] text-[#111111] flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-2xl font-bold text-[#FFF6F3] group-hover:text-[#FF4800] transition-colors duration-300">
                      {value.title}
                    </h3>

                    {/* Divider */}
                    <div className="h-0.5 bg-[#FF4800]/30 mb-4" />

                    {/* Description */}
                    <p className="text-base leading-relaxed text-[#FFF6F3]/70">
                      {value.body}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 flex justify-center">
          <span className="text-[#FF4800] text-xl font-black tracking-[0.3em] opacity-30">
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
          </span>
        </div>
      </div>
    </section>
  );
}
