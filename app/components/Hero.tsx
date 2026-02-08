"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const smoothScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const navHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const marqueeText = "نصقل الموهبة . نصنع الأثر . نوصل النقاط . ";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Hero background image with duotone */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Orange duotone overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(255, 72, 0, 0.35) 0%, rgba(17, 17, 17, 0.85) 70%, #111111 100%)",
            mixBlendMode: "multiply",
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#111111]/50" />
        {/* Grain texture */}
        <div className="grain-overlay absolute inset-0" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Dark backdrop panel for readability */}
        <div className="relative inline-block w-full max-w-4xl mx-auto">
          <div className="absolute -inset-x-8 -inset-y-6 bg-[#111111]/70 backdrop-blur-md rounded-3xl border border-white/[0.04]" />

          <div className="relative z-10 py-10 px-4">
            {/* Chevron decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 flex justify-center"
            >
              <span className="text-[#FF4800] text-2xl md:text-3xl font-black tracking-[0.3em] opacity-60">
                &gt;&gt;&gt;&gt;&gt;
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF4800]/40 bg-[#111111]/60 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4800] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4800]"></span>
              </span>
              <span className="text-sm text-[#FF4800] font-medium">
                صنّاع الأثر في العالم الرقمي
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-relaxed"
            >
              <span className="block mb-2 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                نرتّب ظهورك
              </span>
              <span
                className="block relative inline-block"
                style={{
                  background: "linear-gradient(180deg, #FF4800 0%, #ff6a28 50%, #FF4800 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 4px 20px rgba(255,72,0,0.4))",
                }}
              >
                ونصنع تأثيرك
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl text-[#FFF6F3]/80 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            >
              في الصناعية، نجمع صنّاع المحتوى والمؤثرين في ورشة احترافية واحدة،
              ننظّم حضورهم الرقمي، ونربطهم بالعلامات التجارية المناسبة؛ لصناعة تأثير
              حقيقي ومستدام
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("contact");
                }}
                className="px-8 py-4 bg-[#FF4800] text-[#111111] rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#FF4800]/50"
              >
                ابدأ رحلتك الآن
              </a>

              <a
                href="#story"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("story");
                }}
                className="px-8 py-4 border-2 border-[#FF4800]/40 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:border-[#FF4800] hover:bg-[#FF4800]/10 bg-[#111111]/40"
              >
                اكتشف خدماتنا | قصتنا
              </a>
            </motion.div>

            {/* Chevron decorative bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex justify-center"
            >
              <span className="text-[#FF4800] text-2xl md:text-3xl font-black tracking-[0.3em] opacity-40">
                &gt;&gt;&gt;&gt;&gt;
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee scrolling text strip — seamless infinite loop */}
      <div className="relative z-10 bg-[#FF4800] py-3 overflow-hidden" dir="ltr">
        <div
          className="inline-flex whitespace-nowrap"
          style={{ animation: "marquee 25s linear infinite" }}
        >
          {[0, 1].map((half) => (
            <span key={half} className="inline-flex items-center shrink-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} className="text-[#111111] font-bold text-lg mx-6">
                  نصقل الموهبة
                  <span className="inline-block mx-3 opacity-50">&#x25C6;</span>
                  نصنع الأثر
                  <span className="inline-block mx-3 opacity-50">&#x25C6;</span>
                  نوصل النقاط
                  <span className="inline-block mx-3 opacity-50">&#x25C6;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Hazard tape divider */}
      <div className="relative z-10 hazard-tape" />
    </section>
  );
}
