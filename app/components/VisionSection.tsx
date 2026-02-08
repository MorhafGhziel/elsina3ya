"use client";

import { missionBlocks } from "../constants/content";
import { motion } from "framer-motion";

export function VisionSection() {
  const vision = missionBlocks[1] as typeof missionBlocks[1] & { subtitle: string; pillars: { title: string; body: string }[] };

  return (
    <section id="vision" className="relative py-24 sm:py-32 overflow-hidden bg-[#111111] grain-overlay">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Title Section with Gear Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center relative"
        >
          {/* Gear/Cog Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#FF4800] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#111111]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.58 1.69-.98l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64L19.43 12.97Z"/>
              </svg>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#FFF6F3] leading-relaxed relative inline-block">
            {vision.title}
          </h2>
        </motion.div>

        {/* Vision Content */}
        <div className="max-w-5xl mx-auto space-y-8" dir="rtl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-[#FF4800]/20 border border-[#FF4800]/50">
              <span className="text-xl sm:text-2xl font-bold text-[#FF4800]">
                {vision.subtitle}
              </span>
            </div>
          </motion.div>

          {/* Main Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#FF4800]/15">
              {/* Hazard stripe top */}
              <div className="hazard-tape-thin" />

              <div className="relative z-10 p-10 sm:p-14 lg:p-16">
                <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#FFF6F3] font-medium mb-12">
                  {vision.body}
                </p>

                {/* Three Pillars */}
                <div className="grid md:grid-cols-3 gap-6">
                  {vision.pillars.map((pillar, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      className="p-6 rounded-xl bg-[#111111] border border-[#FF4800]/10 hover:border-[#FF4800]/40 transition-all"
                    >
                      <h4 className="text-xl font-bold text-[#FF4800] mb-3">
                        {pillar.title}
                      </h4>
                      <p className="text-[#FFF6F3]/70 leading-relaxed">
                        {pillar.body}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
