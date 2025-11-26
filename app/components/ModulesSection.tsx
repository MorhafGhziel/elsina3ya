"use client";

import { servicesForInfluencers, servicesForCompanies, whatWeOffer } from "../lib/content";
import { motion } from "framer-motion";

export function ModulesSection() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#15616d]/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-block rounded-full border border-[#ffecd1]/20 bg-[#001524]/50 px-6 py-2 backdrop-blur-sm">
            <span className="text-sm text-[#ffecd1]/70">الخدمات</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-[#ffecd1] sm:text-5xl">
            وش نقدم لك بالصناعية؟
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#ffecd1]/70">
            الصناعية بتكون معك بمشوارك الإعلامي كاملاً، ندعمك بحضور قوي على السوشيال ميديا، ونشغل حسابك بشكل احترافي
          </p>
        </motion.div>

        {/* Services for Influencers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-[#ffecd1]/10 bg-gradient-to-br from-[#001524]/90 to-[#15616d]/30 p-10 backdrop-blur-sm transition-all hover:border-[#ff7d00]/50 hover:shadow-2xl hover:shadow-[#ff7d00]/20">
            {/* Decorative gradient */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#ff7d00]/20 blur-3xl transition-all group-hover:bg-[#ff7d00]/30" />
            
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
                    className="group/item flex items-start gap-3 rounded-2xl border border-[#ffecd1]/10 bg-[#001524]/50 p-4 backdrop-blur-sm transition-all hover:border-[#ff7d00]/50 hover:bg-[#ff7d00]/10"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#ff7d00] transition-transform group-hover/item:scale-125" />
                    <p className="text-sm text-[#ffecd1]/90">{service}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services for Companies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="group relative overflow-hidden rounded-3xl border border-[#ffecd1]/10 bg-gradient-to-br from-[#001524]/90 to-[#15616d]/30 p-10 backdrop-blur-sm transition-all hover:border-[#15616d]/50 hover:shadow-2xl hover:shadow-[#15616d]/20">
            {/* Decorative gradient */}
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#15616d]/20 blur-3xl transition-all group-hover:bg-[#15616d]/30" />
            
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
                    className="group/item flex items-start gap-3 rounded-2xl border border-[#ffecd1]/10 bg-[#001524]/50 p-4 backdrop-blur-sm transition-all hover:border-[#15616d]/50 hover:bg-[#15616d]/10"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#15616d] transition-transform group-hover/item:scale-125" />
                    <p className="text-sm text-[#ffecd1]/90">{service}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

