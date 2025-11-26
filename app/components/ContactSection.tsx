"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7d00]/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-block rounded-full border border-[#ffecd1]/20 bg-[#001524]/50 px-6 py-2 backdrop-blur-sm">
            <span className="text-sm text-[#ffecd1]/70">التواصل</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-[#ffecd1] sm:text-5xl">
            جاهزون نبدأ معك
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#ffecd1]/70">
            اكتب لنا فكرة المشروع أو نوع التعاون، وبنتواصل معك خلال 48 ساعة
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-[#ffecd1]/10 bg-gradient-to-br from-[#001524]/90 to-[#15616d]/30 p-8 backdrop-blur-sm sm:p-12"
        >
          {/* Decorative gradient */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#ff7d00]/20 blur-3xl" />
          
          <form className="relative z-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#ffecd1]/90">
                  الاسم
                </label>
                <input
                  type="text"
                  placeholder="اسمك أو اسم الشركة"
                  className="w-full rounded-2xl border border-[#ffecd1]/20 bg-[#001524]/50 px-5 py-3.5 text-[#ffecd1] placeholder:text-[#ffecd1]/40 backdrop-blur-sm transition-all focus:border-[#ff7d00] focus:outline-none focus:ring-2 focus:ring-[#ff7d00]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#ffecd1]/90">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-[#ffecd1]/20 bg-[#001524]/50 px-5 py-3.5 text-[#ffecd1] placeholder:text-[#ffecd1]/40 backdrop-blur-sm transition-all focus:border-[#ff7d00] focus:outline-none focus:ring-2 focus:ring-[#ff7d00]/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#ffecd1]/90">
                نوع التعاون
              </label>
              <select className="w-full rounded-2xl border border-[#ffecd1]/20 bg-[#001524]/50 px-5 py-3.5 text-[#ffecd1] backdrop-blur-sm transition-all focus:border-[#ff7d00] focus:outline-none focus:ring-2 focus:ring-[#ff7d00]/20">
                <option className="bg-[#001524]">إدارة مؤثر</option>
                <option className="bg-[#001524]">حملة شركة</option>
                <option className="bg-[#001524]">إنتاج محتوى</option>
                <option className="bg-[#001524]">استشارات</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#ffecd1]/90">
                تفاصيل المشروع
              </label>
              <textarea
                placeholder="أخبرنا عن مشروعك أو فكرتك..."
                rows={5}
                className="w-full rounded-2xl border border-[#ffecd1]/20 bg-[#001524]/50 px-5 py-3.5 text-[#ffecd1] placeholder:text-[#ffecd1]/40 backdrop-blur-sm transition-all focus:border-[#ff7d00] focus:outline-none focus:ring-2 focus:ring-[#ff7d00]/20"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-full bg-[#ff7d00] px-8 py-4 text-lg font-semibold text-[#001524] transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ff7d00]/40"
            >
              <span className="relative z-10">أرسل الطلب</span>
              <div className="absolute inset-0 -z-0 bg-[#ffecd1] opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

