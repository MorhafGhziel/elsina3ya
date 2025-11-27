"use client";

import { motion } from "framer-motion";

export function ContactSection() {

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Section - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-[#ff7d00]">تواصل</span>
              <span className="text-[#ffecd1]"> معنا.</span>
            </h2>
            <p className="text-xl sm:text-2xl text-[#ffecd1]/70 leading-relaxed">
              أخبرنا عنك وعن مشروعك
            </p>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="أخبرنا اسمك!"
                className="w-full rounded-2xl border border-[#ffecd1]/20 bg-[#001524]/50 px-6 py-4 text-[#ffecd1] placeholder:text-[#ffecd1]/40 backdrop-blur-sm transition-all focus:border-[#ff7d00] focus:outline-none focus:ring-2 focus:ring-[#ff7d00]/20"
              />
              
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full rounded-2xl border border-[#ffecd1]/20 bg-[#001524]/50 px-6 py-4 text-[#ffecd1] placeholder:text-[#ffecd1]/40 backdrop-blur-sm transition-all focus:border-[#ff7d00] focus:outline-none focus:ring-2 focus:ring-[#ff7d00]/20"
              />
              
              <input
                type="tel"
                placeholder="رقم هاتفك"
                className="w-full rounded-2xl border border-[#ffecd1]/20 bg-[#001524]/50 px-6 py-4 text-[#ffecd1] placeholder:text-[#ffecd1]/40 backdrop-blur-sm transition-all focus:border-[#ff7d00] focus:outline-none focus:ring-2 focus:ring-[#ff7d00]/20"
              />
              
              <textarea
                placeholder="ما هو متطلبك؟"
                rows={4}
                className="w-full rounded-2xl border border-[#ffecd1]/20 bg-[#001524]/50 px-6 py-4 text-[#ffecd1] placeholder:text-[#ffecd1]/40 backdrop-blur-sm transition-all focus:border-[#ff7d00] focus:outline-none focus:ring-2 focus:ring-[#ff7d00]/20 resize-none"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#ffecd1] px-8 py-4 text-lg font-bold text-[#001524] transition-all duration-300 hover:bg-[#ffecd1]/90 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ffecd1]/20"
              >
                أرسل الاستفسار
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
