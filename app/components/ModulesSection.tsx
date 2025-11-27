"use client";

import { servicesForInfluencers, servicesForCompanies, whatWeOffer } from "../lib/content";
import { motion } from "framer-motion";

export function ModulesSection() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center sm:mb-20"
        >
          <div className="mb-6 inline-block rounded-full border border-[#ffecd1]/20 bg-[#001524]/60 px-6 py-2.5 backdrop-blur-sm">
            <span className="text-sm font-semibold text-[#ffecd1]">الخدمات</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-[#ffecd1] sm:text-5xl">
            وش نقدم لك بالصناعية؟
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#ffecd1]/70">
            الصناعية بتكون معك بمشوارك الإعلامي كاملاً، ندعمك بحضور قوي على السوشيال ميديا، ونشغل حسابك بشكل احترافي
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ffecd1]/10 bg-linear-to-br from-[#001524]/60 to-[#001524]/40 p-8 sm:p-10 backdrop-blur-md transition-all duration-500 hover:border-[#ff7d00]/50 hover:shadow-2xl hover:shadow-[#ff7d00]/20">
            <div
              className="absolute inset-0 bg-linear-to-br from-[#ff7d00]/0 to-[#ff7d00]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, rgba(255, 125, 0, 0.15) 0%, transparent 100%)`,
              }}
            />
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="mb-4 inline-block rounded-full bg-[#ff7d00] px-5 py-2">
                  <span className="text-sm font-bold text-[#001524]">للمؤثرين</span>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-[#ffecd1]">
                  خدمات متكاملة لصناع المحتوى
                </h3>
                <p className="mb-6 text-lg text-[#ffecd1]/70">
                  {whatWeOffer.forInfluencers.title}
                </p>
                <div className="mb-8 space-y-2">
                  {whatWeOffer.forInfluencers.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#ff7d00]" />
                      <p className="text-[#ffecd1]/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {servicesForInfluencers.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="group/item flex items-start gap-3 rounded-xl border border-[#ffecd1]/10 bg-[#001524]/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#ff7d00]/50 hover:bg-[#ff7d00]/10"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#ff7d00] transition-transform group-hover/item:scale-125" />
                    <p className="text-sm text-[#ffecd1]/90">{service}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#ff7d00]/5 blur-3xl transition-all duration-500 group-hover:bg-[#ff7d00]/10 group-hover:scale-150" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ffecd1]/10 bg-linear-to-br from-[#001524]/60 to-[#001524]/40 p-8 sm:p-10 backdrop-blur-md transition-all duration-500 hover:border-[#15616d]/50 hover:shadow-2xl hover:shadow-[#15616d]/20">
            <div
              className="absolute inset-0 bg-linear-to-br from-[#15616d]/0 to-[#15616d]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, rgba(21, 97, 109, 0.15) 0%, transparent 100%)`,
              }}
            />
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="mb-4 inline-block rounded-full bg-[#15616d] px-5 py-2">
                  <span className="text-sm font-bold text-[#ffecd1]">للشركات</span>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-[#ffecd1]">
                  حلول ذكية للعلامات التجارية
                </h3>
                <p className="mb-6 text-lg text-[#ffecd1]/70">
                  {whatWeOffer.forCompanies.title}
                </p>
                <div className="mb-8 space-y-2">
                  {whatWeOffer.forCompanies.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#15616d]" />
                      <p className="text-[#ffecd1]/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {servicesForCompanies.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="group/item flex items-start gap-3 rounded-xl border border-[#ffecd1]/10 bg-[#001524]/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#15616d]/50 hover:bg-[#15616d]/10"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#15616d] transition-transform group-hover/item:scale-125" />
                    <p className="text-sm text-[#ffecd1]/90">{service}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#15616d]/5 blur-3xl transition-all duration-500 group-hover:bg-[#15616d]/10 group-hover:scale-150" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
