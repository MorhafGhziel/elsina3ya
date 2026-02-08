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
      {/* Hero-exclusive layered background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Central aurora bloom */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] md:w-[1200px] md:h-[1200px]"
          style={{
            background: "radial-gradient(circle, rgba(255, 71, 0, 0.12) 0%, rgba(255, 92, 0, 0.06) 25%, rgba(255, 157, 51, 0.02) 50%, transparent 70%)",
          }}
        />

        {/* Rotating rays */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] md:w-[1400px] md:h-[1400px] opacity-[0.04]"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,71,0,1) 2deg, transparent 4deg, transparent 30deg, rgba(255,71,0,1) 32deg, transparent 34deg, transparent 60deg, rgba(255,157,51,1) 62deg, transparent 64deg, transparent 90deg, rgba(255,71,0,0.8) 92deg, transparent 94deg, transparent 120deg, rgba(255,157,51,0.6) 122deg, transparent 124deg, transparent 150deg, rgba(255,71,0,1) 152deg, transparent 154deg, transparent 180deg, rgba(255,157,51,0.8) 182deg, transparent 184deg, transparent 210deg, rgba(255,71,0,0.6) 212deg, transparent 214deg, transparent 240deg, rgba(255,157,51,1) 242deg, transparent 244deg, transparent 270deg, rgba(255,71,0,0.8) 272deg, transparent 274deg, transparent 300deg, rgba(255,157,51,0.6) 302deg, transparent 304deg, transparent 330deg, rgba(255,71,0,1) 332deg, transparent 334deg, transparent 360deg)",
          }}
        />

        {/* Orbit ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-[#FF4700]/[0.07]"
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF4700]/40 shadow-[0_0_12px_rgba(255,71,0,0.5)]" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff9d33]/30 shadow-[0_0_8px_rgba(255,157,51,0.4)]" />
        </motion.div>

        {/* Second orbit ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full border border-white/[0.03]"
        >
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
        </motion.div>

        {/* Floating particles */}
        {[
          { top: "15%", left: "20%", size: 3, delay: 0, dur: 8 },
          { top: "25%", left: "75%", size: 2, delay: 2, dur: 10 },
          { top: "60%", left: "15%", size: 2, delay: 4, dur: 9 },
          { top: "70%", left: "80%", size: 3, delay: 1, dur: 7 },
          { top: "40%", left: "90%", size: 2, delay: 3, dur: 11 },
          { top: "80%", left: "40%", size: 2, delay: 5, dur: 8 },
          { top: "10%", left: "50%", size: 2, delay: 2, dur: 12 },
          { top: "50%", left: "5%", size: 3, delay: 6, dur: 9 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FF4700]"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

        {/* Horizontal light streak */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "200%", opacity: [0, 0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" }}
          className="absolute top-[45%] w-[300px] h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,71,0,0.4), transparent)",
          }}
        />
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
            boxShadow: "0 20px 40px -12px rgba(255, 71, 0, 0.3)",
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/60 to-transparent" />
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/60 to-transparent" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#FF4700]/30 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4700] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4700]"></span>
          </span>
          <span className="text-sm text-[#FF4700] font-medium">
            صنّاع الأثر في العالم الرقمي
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-relaxed"
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
            className="px-8 py-4 bg-[#FF4700] text-[#080c14] rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#FF4700]/50"
          >
            ابدأ رحلتك الآن
          </a>

          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("story");
            }}
            className="px-8 py-4 glass border border-[#FF4700]/30 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:border-[#FF4700] hover:bg-[#FF4700]/10"
          >
            اكتشف خدماتنا | قصتنا
          </a>
        </motion.div>
      </div>
    </section>
  );
}
