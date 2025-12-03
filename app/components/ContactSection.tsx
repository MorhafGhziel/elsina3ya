"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.error("API Error:", data);
        setSubmitStatus({
          type: "error",
          message:
            data.error ||
            "حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى لاحقاً.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 125, 0, 0.2) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 157, 51, 0.15) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 125, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 125, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating Person Image 1 - Far Right Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 6 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-20 right-0 sm:right-2 md:right-4 lg:right-8 xl:right-16 z-0 pointer-events-none"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [6, 3, 6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded-[2rem] overflow-hidden"
            style={{
              boxShadow:
                "0 30px 60px -15px rgba(255, 125, 0, 0.5), inset 0 0 0 2px rgba(255, 125, 0, 0.15)",
            }}
          >
            <Image
              src="/images/person/person-3.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff7d00]/15 via-transparent to-[#ff9d33]/15 z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0e1a]/70 to-transparent z-10" />
          </motion.div>
        </motion.div>

        {/* Floating Person Image 2 - Far Left Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, rotate: -7 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-20 left-0 sm:left-2 md:left-4 lg:left-8 xl:left-16 z-0 pointer-events-none"
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [-7, -4, -7],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="relative w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded-[2rem] overflow-hidden"
            style={{
              boxShadow:
                "0 30px 60px -15px rgba(255, 157, 51, 0.5), inset 0 0 0 2px rgba(255, 157, 51, 0.15)",
            }}
          >
            <Image
              src="/images/person/person-4.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-[#ff9d33]/15 via-transparent to-[#ff7d00]/15 z-10" />
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#0a0e1a]/70 to-transparent z-10" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#ff7d00]/30 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7d00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7d00]"></span>
            </span>
            <span className="text-sm text-[#ff7d00] font-medium">
              تواصل معنا
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black gradient-text mb-6 leading-tight pb-2 overflow-visible">
            جاهز لتحويل <br />
            <span className="gradient-text-orange">حضورك الرقمي؟</span>
          </h2>

          <p className="text-xl text-[#8892a6] max-w-2xl mx-auto leading-relaxed">
            انضم إلى مئات صُنّاع المحتوى والعلامات التجارية الذين اختاروا
            الصناعية لتحقيق أهدافهم الرقمية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-strong p-8 md:p-12 rounded-3xl border border-[#ff7d00]/30"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-right">
              أرسل لنا رسالة
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#8892a6] mb-2 text-right"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-[#ff7d00]/20 text-white placeholder:text-[#8892a6] focus:border-[#ff7d00] focus:outline-none transition-all bg-[#0a0e1a]/50"
                  placeholder="اسمك الكامل"
                  dir="rtl"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#8892a6] mb-2 text-right"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-[#ff7d00]/20 text-white placeholder:text-[#8892a6] focus:border-[#ff7d00] focus:outline-none transition-all bg-[#0a0e1a]/50"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#8892a6] mb-2 text-right"
                >
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass border border-[#ff7d00]/20 text-white placeholder:text-[#8892a6] focus:border-[#ff7d00] focus:outline-none transition-all bg-[#0a0e1a]/50"
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#8892a6] mb-2 text-right"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl glass border border-[#ff7d00]/20 text-white placeholder:text-[#8892a6] focus:border-[#ff7d00] focus:outline-none transition-all bg-[#0a0e1a]/50 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                  dir="rtl"
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/50 text-green-400"
                      : "bg-red-500/20 border border-red-500/50 text-red-400"
                  }`}
                >
                  <p className="text-sm text-right">{submitStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-10 py-5 bg-gradient-to-r from-[#ff7d00] to-[#ff9d33] text-[#0a0e1a] rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#ff7d00]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                  {!isSubmitting && (
                    <span className="group-hover:-translate-x-1 transition-transform">
                      ←
                    </span>
                  )}
                </span>
                {!isSubmitting && (
                  <motion.div
                    animate={{
                      x: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8"
            dir="rtl"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                معلومات التواصل
              </h3>
              <p className="text-[#8892a6] leading-relaxed mb-8">
                نحن هنا لمساعدتك. تواصل معنا عبر أي من القنوات التالية وسنكون
                سعداء بالرد عليك في أقرب وقت ممكن.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, x: -10 }}
                className="glass p-6 rounded-2xl border border-[#ff7d00]/20 hover:border-[#ff7d00]/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff7d00] to-[#ff9d33] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">
                      البريد الإلكتروني
                    </h4>
                    <a
                      href="mailto:Info@snaya.sa"
                      className="text-[#ff7d00] hover:text-[#ff9d33] transition-colors"
                    >
                      Info@snaya.sa
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: -10 }}
                className="glass p-6 rounded-2xl border border-[#ff7d00]/20 hover:border-[#ff7d00]/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff7d00] to-[#ff9d33] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">رقم الهاتف</h4>
                    <a
                      href="tel:0571077778"
                      className="text-[#ff7d00] hover:text-[#ff9d33] transition-colors"
                    >
                      571077778 966+
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: -10 }}
                className="glass p-6 rounded-2xl border border-[#ff7d00]/20 hover:border-[#ff7d00]/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff7d00] to-[#ff9d33] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">العنوان</h4>
                    <p className="text-[#8892a6]">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#ff7d00]/20">
              <div className="flex flex-wrap items-center gap-6 text-[#8892a6] text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff7d00]">✓</span>
                  <span>موثوق من 100+ عميل</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff7d00]">✓</span>
                  <span>تقييم 5.0 نجوم</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff7d00]">✓</span>
                  <span>دعم باللغة العربية</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
