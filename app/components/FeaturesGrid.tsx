"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "إدارة المواهب",
    description: "نحوّل المؤثر من فرد يعمل وحده إلى كيان إعلامي مُدار باحتراف",
    gradient: "from-[#ff7d00] to-[#ff9d33]",
  },
  {
    icon: "🎬",
    title: "إنتاج المحتوى",
    description: "محتوى احترافي بجودة شركات الإنتاج الكبيرة",
    gradient: "from-[#ff9d33] to-[#ff7d00]",
  },
  {
    icon: "📊",
    title: "تحليل الأداء",
    description: "تحليل دقيق لأداء المحتوى وتقارير شهرية مفصلة",
    gradient: "from-[#ff7d00] to-[#ffffff]",
  },
  {
    icon: "🤝",
    title: "ربط العلامات",
    description: "نربط الشركات بالمؤثر المناسب لتحقيق أفضل النتائج",
    gradient: "from-[#ffffff] to-[#ff7d00]",
  },
  {
    icon: "💡",
    title: "استراتيجية المحتوى",
    description: "خطط محتوى شهرية مبتكرة تواكب ثقافة اليوم",
    gradient: "from-[#ff7d00] to-[#ff9d33]",
  },
  {
    icon: "🚀",
    title: "النمو المستدام",
    description: "نمو مستمر ودخل أعلى مع إدارة كاملة",
    gradient: "from-[#ff9d33] to-[#ffffff]",
  },
];

export function FeaturesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #ff7d00 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black gradient-text mb-6 leading-tight pb-2 overflow-visible">
            خدماتنا المميزة
          </h2>
          <p className="text-xl text-[#8892a6] max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات لتمكين صُنّاع المحتوى والعلامات التجارية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full glass-strong p-8 rounded-3xl border border-[#ff7d00]/20 hover:border-[#ff7d00]/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff7d00]/20 to-[#ff7d00]/5 border border-[#ff7d00]/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff7d00] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#8892a6] leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute -inset-1 bg-gradient-to-br from-[#ff7d00]/0 via-[#ff7d00]/5 to-[#ff7d00]/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

