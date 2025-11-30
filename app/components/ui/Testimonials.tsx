"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    name: "أبو عمر",
    role: "صانع محتوى",
    content:
      "الصناعية غيرت حياتي المهنية بالكامل. من مجرد شخص ينشر فيديوهات إلى علامة تجارية قوية مع فريق محترف يدعمني.",
    avatar: "👨‍💼",
    rating: 5,
  },
  {
    name: "سارة أحمد",
    role: "مديرة تسويق",
    content:
      "تعاونا مع الصناعية لحملة إطلاق منتجنا الجديد. النتائج تجاوزت توقعاتنا والمحتوى كان احترافي بشكل لا يصدق.",
    avatar: "👩‍💼",
    rating: 5,
  },
  {
    name: "محمد العلي",
    role: "مؤثر رقمي",
    content:
      "أفضل قرار اتخذته هو الانضمام للصناعية. الدعم المستمر والفرص المتاحة ساعدتني أنمي قاعدة متابعيني بشكل كبير.",
    avatar: "🎭",
    rating: 5,
  },
  {
    name: "ليلى خالد",
    role: "رئيسة علامة تجارية",
    content:
      "الصناعية فهمت رؤيتنا وربطتنا بالمؤثرين المناسبين. الحملات معهم دائماً ناجحة ومدروسة بعناية.",
    avatar: "👩‍💻",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 125, 0, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black gradient-text mb-6 leading-tight pb-2 overflow-visible">
            آراء شركائنا
          </h2>
          <p className="text-xl text-[#8892a6] max-w-2xl mx-auto">
            اكتشف كيف ساعدنا صُنّاع المحتوى والعلامات التجارية على النجاح
          </p>
        </motion.div>

        {/* Main testimonial display */}
        <div className="relative min-h-[400px] mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="glass-strong p-10 md:p-16 rounded-3xl border border-[#ff7d00]/30 hover:border-[#ff7d00]/60 transition-all">
                {/* Quote icon */}
                <div className="absolute top-8 right-8 text-6xl text-[#ff7d00]/20">
                  "
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex justify-center gap-2 mb-8">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-[#ff7d00] text-2xl"
                        >
                          ★
                        </motion.span>
                      )
                    )}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-2xl md:text-3xl text-white text-center leading-relaxed mb-12 font-light">
                    {testimonials[currentIndex].content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff7d00] to-[#ff9d33] text-3xl">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-[#8892a6]">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="group w-14 h-14 flex items-center justify-center rounded-full glass border border-[#ff7d00]/30 hover:border-[#ff7d00] hover:bg-[#ff7d00]/10 transition-all hover:scale-110"
          >
            <span className="text-[#ff7d00] text-2xl group-hover:scale-125 transition-transform">
              →
            </span>
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-12 bg-[#ff7d00]"
                    : "w-2 bg-[#ff7d00]/30 hover:bg-[#ff7d00]/60"
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="group w-14 h-14 flex items-center justify-center rounded-full glass border border-[#ff7d00]/30 hover:border-[#ff7d00] hover:bg-[#ff7d00]/10 transition-all hover:scale-110"
          >
            <span className="text-[#ff7d00] text-2xl group-hover:scale-125 transition-transform">
              ←
            </span>
          </button>
        </div>

        {/* All testimonials grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.02 }}
              className={`glass p-6 rounded-2xl border text-right transition-all ${
                index === currentIndex
                  ? "border-[#ff7d00] bg-[#ff7d00]/10"
                  : "border-[#ff7d00]/20 hover:border-[#ff7d00]/50"
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff7d00] to-[#ff9d33] text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 text-right">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-[#8892a6]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#8892a6] line-clamp-2">
                {testimonial.content}
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

