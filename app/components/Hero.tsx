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

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-br from-[#ff7d00]/30 to-transparent" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-[#ff9d33]/20 to-transparent" />
      </div>

      {/* Person Image 1 - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-4 top-24 md:right-8 md:top-32 lg:right-16 lg:top-40 z-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 20px 40px -12px rgba(255, 125, 0, 0.3)",
          }}
        >
          <Image
            src="/images/person/person-1.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Person Image 2 - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute left-4 top-24 sm:left-8 md:bottom-32 md:top-auto lg:left-16 lg:bottom-40 z-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="relative w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 20px 40px -12px rgba(255, 157, 51, 0.3)",
          }}
        >
          <Image
            src="/images/person/person-2.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/50 to-transparent" />
        </motion.div>
      </motion.div>

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
            صنّاع الأثر في العالم الرقمي
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-tight"
        >
          <span className="block gradient-text mb-2">نرتّب ظهورك</span>
          <span className="block gradient-text-orange">ونصنع تأثيرك</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-[#8892a6] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          في الصناعية، نجمع صنّاع المحتوى والمؤثرين في ورشة احترافية واحدة،
          ننظّم حضورهم الرقمي، ونربطهم بالعلامات التجارية المناسبة؛ لصناعة تأثير
          حقيقي ومستدام
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("contact");
            }}
            className="px-8 py-4 bg-[#ff7d00] text-[#0a0e1a] rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#ff7d00]/50"
          >
            ابدأ رحلتك الآن
          </a>

          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("story");
            }}
            className="px-8 py-4 glass border border-[#ff7d00]/30 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:border-[#ff7d00] hover:bg-[#ff7d00]/10"
          >
            اكتشف خدماتنا | قصتنا
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0e1a] to-transparent pointer-events-none" />
    </section>
  );
}
