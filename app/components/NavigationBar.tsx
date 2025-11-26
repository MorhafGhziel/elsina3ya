"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "قصتنا", href: "#story" },
  { label: "الخدمات", href: "#services" },
  { label: "القيم", href: "#values" },
  { label: "وجوهنا", href: "#faces" },
  { label: "تواصل", href: "#contact" },
];

export function NavigationBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-4 z-50 flex w-[min(92%,1100px)] -translate-x-1/2 items-center justify-between gap-6 rounded-full border border-[#ffecd1]/10 bg-[#001524]/90 px-6 py-4 shadow-2xl shadow-black/20 backdrop-blur-2xl"
    >
      <Link href="#hero" className="text-xl font-bold tracking-wide text-[#ffecd1] transition-colors hover:text-[#ff7d00]">
        الصناعية
      </Link>
      <div className="hidden items-center gap-8 text-sm text-[#ffecd1]/70 md:flex">
        {navItems.map((item) => (
          <Link 
            key={item.label} 
            href={item.href} 
            className="transition-colors hover:text-[#ff7d00]"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link
        href="#contact"
        className="rounded-full bg-[#ff7d00] px-6 py-2.5 text-sm font-semibold text-[#001524] transition-all hover:-translate-y-0.5 hover:bg-[#ffecd1] hover:shadow-lg hover:shadow-[#ff7d00]/30"
      >
        ابدأ معنا
      </Link>
    </motion.nav>
  );
}

