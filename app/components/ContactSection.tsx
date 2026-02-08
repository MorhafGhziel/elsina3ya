"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const whatsappNumber = "966571077778";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl bg-gradient-to-br from-[#FF4700]/20 to-transparent" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-[#ff9d33]/15 to-transparent" />
      </div>

      {/* Person Image 3 - Far Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-20 right-0 sm:right-4 md:right-8 lg:right-16 z-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 20px 40px -12px rgba(255, 71, 0, 0.3)",
          }}
        >
          <Image
            src="/images/person/person-3.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Person Image 4 - Far Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-20 left-0 sm:left-4 md:left-8 lg:left-16 z-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="relative w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 20px 40px -12px rgba(255, 157, 51, 0.3)",
          }}
        >
          <Image
            src="/images/person/person-4.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/50 to-transparent" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#FF4700]/30 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4700] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4700]"></span>
            </span>
            <span className="text-sm text-[#FF4700] font-medium">
              تواصل معنا
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black gradient-text mb-6 leading-relaxed pb-2 overflow-visible">
            جاهز تصنع <br />
            <span className="gradient-text-orange">حضورك الرقمي؟</span>
          </h2>

          <p className="text-xl text-[#8892a6] max-w-2xl mx-auto leading-relaxed">
            انضم إلى مئات صنّاع المحتوى والعلامات التجارية الذين اختاروا
            الصناعية لتحقيق أهدافهم الرقمية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-strong p-8 md:p-10 rounded-3xl border border-[#FF4700]/30"
            dir="rtl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              تقدر توصلنا من هنا
            </h3>

            <div className="space-y-5">
              <motion.a
                href="mailto:Info@snaya.sa"
                whileHover={{ scale: 1.02 }}
                className="glass p-5 rounded-2xl border border-[#FF4700]/20 hover:border-[#FF4700]/50 transition-all flex items-center gap-4 cursor-pointer"
              >
                <div className="flex-1">
                  <p className="text-[#8892a6] text-sm mb-1">البريد الإلكتروني</p>
                  <p className="text-white font-semibold" dir="ltr">Info@snaya.sa</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF4700] to-[#ff9d33] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0a0e1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </motion.a>

              <motion.a
                href="tel:+966571077778"
                whileHover={{ scale: 1.02 }}
                className="glass p-5 rounded-2xl border border-[#FF4700]/20 hover:border-[#FF4700]/50 transition-all flex items-center gap-4 cursor-pointer"
              >
                <div className="flex-1">
                  <p className="text-[#8892a6] text-sm mb-1">الهاتف</p>
                  <p className="text-white font-semibold" dir="ltr">+966 571 077 778</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF4700] to-[#ff9d33] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0a0e1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass p-5 rounded-2xl border border-[#FF4700]/20 hover:border-[#FF4700]/50 transition-all flex items-center gap-4"
              >
                <div className="flex-1">
                  <p className="text-[#8892a6] text-sm mb-1">العنوان</p>
                  <p className="text-white font-semibold">الرياض، المملكة العربية السعودية</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF4700] to-[#ff9d33] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0a0e1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* WhatsApp CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-strong p-8 md:p-10 rounded-3xl border border-[#FF4700]/30 flex flex-col items-center justify-center text-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mb-8"
            >
              <svg className="w-11 h-11 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              راسلنا مباشرة
            </h3>

            <p className="text-[#8892a6] leading-relaxed mb-10 max-w-sm">
              فريقنا جاهز يساعدك، أرسل لنا رسالة على الواتساب ونرد عليك بأسرع وقت
            </p>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full max-w-sm px-10 py-5 bg-gradient-to-r from-[#FF4700] to-[#ff9d33] text-[#0a0e1a] rounded-full font-bold text-lg transition-all hover:shadow-xl hover:shadow-[#FF4700]/50 flex items-center justify-center gap-3"
            >
              <span>تواصل عبر الواتساب</span>
              <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
          dir="rtl"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#8892a6] text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#FF4700]">&#10003;</span>
              <span>موثوق من 100+ عميل</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FF4700]">&#10003;</span>
              <span>تقييم 5.0 نجوم</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FF4700]">&#10003;</span>
              <span>دعم باللغة العربية</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
