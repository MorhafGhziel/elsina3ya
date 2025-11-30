"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = {
  company: {
    title: "الشركة",
    links: [
      { name: "من نحن", href: "#about" },
      { name: "قصتنا", href: "#story" },
      { name: "الفريق", href: "#team" },
      { name: "الوظائف", href: "#careers" },
    ],
  },
  services: {
    title: "الخدمات",
    links: [
      { name: "إدارة المواهب", href: "#talent" },
      { name: "إنتاج المحتوى", href: "#content" },
      { name: "التسويق الرقمي", href: "#marketing" },
      { name: "الاستشارات", href: "#consulting" },
    ],
  },
  resources: {
    title: "الموارد",
    links: [
      { name: "المدونة", href: "#blog" },
      { name: "دراسات الحالة", href: "#case-studies" },
      { name: "الأسئلة الشائعة", href: "#faq" },
      { name: "مركز المساعدة", href: "#help" },
    ],
  },
  legal: {
    title: "قانوني",
    links: [
      { name: "الشروط والأحكام", href: "#terms" },
      { name: "سياسة الخصوصية", href: "#privacy" },
      { name: "سياسة الاستخدام", href: "#usage" },
      { name: "اتصل بنا", href: "#contact" },
    ],
  },
};

const socialLinks = [
  { name: "Twitter", icon: "𝕏", href: "#" },
  { name: "Instagram", icon: "📷", href: "#" },
  { name: "LinkedIn", icon: "💼", href: "#" },
  { name: "YouTube", icon: "▶", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#ff7d00]/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(255, 125, 0, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16" dir="rtl">
          <div className="lg:col-span-1 text-right">
            <Link href="#hero" className="inline-block mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl font-black gradient-text">
                  الصناعية
                </span>
              </motion.div>
            </Link>
            <p className="text-[#8892a6] leading-relaxed mb-6">
              صنّاع الأثر في العالم الرقمي. نمكّن المؤثرين ونربط العلامات
              التجارية.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full glass border border-[#ff7d00]/30 flex items-center justify-center hover:border-[#ff7d00] hover:bg-[#ff7d00]/10 transition-all"
                >
                  <span>{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="text-right">
              <h3 className="text-white font-bold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#8892a6] hover:text-[#ff7d00] transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#ff7d00]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#8892a6] text-sm">
            <div className="order-2 md:order-1 text-center md:text-right">
              © 2024 الصناعية. جميع الحقوق محفوظة.
            </div>
            <div className="order-1 md:order-2 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="#privacy"
                className="hover:text-[#ff7d00] transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <Link
                href="#terms"
                className="hover:text-[#ff7d00] transition-colors"
              >
                الشروط والأحكام
              </Link>
              <Link
                href="#cookies"
                className="hover:text-[#ff7d00] transition-colors"
              >
                ملفات تعريف الارتباط
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff7d00] to-transparent opacity-50" />
    </footer>
  );
}

