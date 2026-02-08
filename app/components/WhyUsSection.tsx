"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    title: "الإبداع المستمر",
    description: "نولد أفكارًا أصلية تواكب ثقافة اليوم وتتماهى مع العلامات التجارية",
    number: "01",
  },
  {
    title: "التأثير الحقيقي",
    description: "نحوّل التواجد الرقمي إلى نتائج ملموسة من نمو وانتشار وتأثير حقيقي",
    number: "02",
  },
  {
    title: "الموثوقية",
    description: "تشغيل شفّاف، عقود واضحة، وتقارير دورية تبني الثقة مع شركائنا",
    number: "03",
  },
  {
    title: "التعاون الفعّال",
    description: "نربط الشركات بالمؤثر المناسب ونبقي الجميع على مسار واحد",
    number: "04",
  },
];

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none bg-gradient-to-br from-[#FF4700]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full glass border border-[#FF4700]/30 mb-8"
          >
            <span className="text-[#FF4700] font-bold">لماذا الصناعية؟</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black gradient-text mb-6 leading-relaxed pb-2 overflow-visible">
            نحن مختلفون
          </h2>
          <p className="text-xl text-[#8892a6] max-w-3xl mx-auto leading-relaxed">
            نجمع بين إدارة المواهب وابتكار المحتوى الاستراتيجي في نموذج حديث يضمن
            النجاح المستدام
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full glass p-8 md:p-10 rounded-3xl border border-[#FF4700]/20 hover:border-[#FF4700] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 text-[150px] font-black text-[#FF4700]/5 leading-none group-hover:text-[#FF4700]/10 transition-colors">
                  {reason.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF4700]/20 border border-[#FF4700]/40 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                      <span className="text-[#FF4700] font-bold text-xl">
                        {reason.number}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#FF4700] transition-colors">
                      {reason.title}
                    </h3>
                  </div>

                  <p className="text-[#8892a6] text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4700]/0 via-[#FF4700]/5 to-[#FF4700]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { value: "98%", label: "معدل رضا العملاء" },
            { value: "3x", label: "نمو المتابعين" },
            { value: "24/7", label: "دعم مستمر" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-strong p-8 rounded-2xl border border-[#FF4700]/30 text-center hover:border-[#FF4700] transition-all"
            >
              <div className="text-5xl font-black gradient-text-orange mb-3">
                {stat.value}
              </div>
              <div className="text-[#8892a6] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

