"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "قصتنا", href: "#story" },
  { label: "الخدمات", href: "#services" },
  { label: "القيم", href: "#values" },
  { label: "وجوهنا", href: "#faces" },
  { label: "تواصل", href: "#contact" },
];

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-6 z-50 flex w-[min(95%,1200px)] -translate-x-1/2 flex-row items-center justify-between gap-4 md:gap-8 rounded-full border border-[#ffecd1]/10 bg-[#001524]/95 px-4 md:px-8 py-1 backdrop-blur-xl"
      dir="ltr"
    >
      <Link
        href="#hero"
        className="text-lg font-bold text-[#ffecd1] transition-colors hover:text-[#ff7d00] order-first"
      >
        الصناعية
      </Link>

      <div className="hidden items-center gap-6 text-sm font-medium text-[#ffecd1]/60 md:flex md:flex-1 md:justify-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="transition-colors hover:text-[#ffecd1]"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Link
        href="#contact"
        className="hidden md:flex group relative items-center gap-2 overflow-hidden rounded-full border border-[#ff7d00]/30 bg-[#ff7d00]/10 px-4 py-2 text-sm font-semibold text-[#ffecd1] transition-all duration-300 hover:border-[#ff7d00] hover:bg-[#ff7d00] hover:text-white hover:shadow-lg hover:shadow-[#ff7d00]/30"
      >
        <span className="relative z-10">ابدأ معنا</span>
        <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff7d00] transition-all duration-300 group-hover:rotate-45 group-hover:scale-110">
          <svg
            className="h-3.5 w-3.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </Link>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#ff7d00]/20 border border-[#ff7d00]/30 text-[#ffecd1] transition-all hover:bg-[#ff7d00]/30"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-[#ffecd1]/10 bg-[#001524]/95 backdrop-blur-xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#ffecd1]/80 transition-colors hover:text-[#ffecd1] hover:bg-[#ff7d00]/10"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-4 py-2.5 rounded-full bg-[#ff7d00] text-sm font-bold text-white text-center transition-all hover:bg-[#ff9233]"
              >
                ابدأ معنا
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
