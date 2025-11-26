"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AppFooter() {
  return (
    <footer className="relative mt-24 border-t border-[#ffecd1]/10 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]"
        >
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-3xl font-bold text-[#ffecd1]">الصناعية</h3>
              <p className="text-lg text-[#ffecd1]/70">
                نرتب ظهورك ونضمن تأثيرك
              </p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#ffecd1]/60">
              الصناعية متخصصة في تمكين صُنّاع المحتوى والمؤثرين، وتطوير حضور العلامات التجارية عبر محتوى رقمي مستدام.
            </p>
            <div className="flex gap-4">
              <Link
                href="#contact"
                className="rounded-full border border-[#ffecd1]/20 bg-[#001524]/50 px-6 py-2.5 text-sm font-medium text-[#ffecd1] backdrop-blur-sm transition-all hover:border-[#ff7d00] hover:bg-[#ff7d00]/10"
              >
                تواصل معنا
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#ffecd1]/50">
              روابط سريعة
            </h4>
            <nav className="space-y-3">
              {[
                { label: "قصتنا", href: "#story" },
                { label: "الخدمات", href: "#services" },
                { label: "القيم", href: "#values" },
                { label: "وجوهنا", href: "#faces" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-[#ffecd1]/70 transition-colors hover:text-[#ff7d00]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#ffecd1]/50">
              تواصل
            </h4>
            <div className="space-y-3 text-sm text-[#ffecd1]/70">
              <p>hello@alsina3ya.studio</p>
              <p className="leading-relaxed">
                نعمل على تمكين المواهب<br />
                وصناعة التأثير الرقمي
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#ffecd1]/10 pt-8 text-sm text-[#ffecd1]/50 sm:flex-row"
        >
          <p>© {new Date().getFullYear()} الصناعية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-[#ff7d00]">
              الخصوصية
            </Link>
            <Link href="#" className="transition-colors hover:text-[#ff7d00]">
              الشروط
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

