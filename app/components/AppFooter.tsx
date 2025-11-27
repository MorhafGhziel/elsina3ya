"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AppFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[#ffecd1]/10 py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(21, 97, 109, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 125, 0, 0.1) 0%, transparent 50%),
              linear-gradient(180deg, #000a12 0%, #001524 100%)
            `,
          }}
        />

        {/* Main 3D perspective grid */}
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 125, 0, 0.15) 1.5px, transparent 1.5px),
                linear-gradient(90deg, rgba(255, 125, 0, 0.15) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "80px 80px",
              backgroundPosition: "center center",
              animation: "gridPulse 4s ease-in-out infinite",
              transform: "rotateX(60deg) scale(1.5)",
              transformOrigin: "center center",
              opacity: 0.4,
            }}
          />
        </div>

        {/* Secondary animated grid layer */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 236, 209, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 236, 209, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              animation: "gridMove 20s linear infinite",
            }}
          />
        </div>

        {/* Diagonal animated lines */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(255, 125, 0, 0.3) 40px,
                rgba(255, 125, 0, 0.3) 42px
              )`,
              animation: "slideRight 30s linear infinite",
            }}
          />
        </div>

        {/* Grid dots at intersections */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255, 125, 0, 0.6) 1.5px, transparent 1.5px)`,
              backgroundSize: "80px 80px",
              backgroundPosition: "0 0",
              animation: "dotPulse 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* Glowing horizontal scan lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 4px,
              rgba(255, 125, 0, 0.1) 4px,
              rgba(255, 125, 0, 0.1) 5px
            )`,
            animation: "scanlines 8s linear infinite",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#ff7d00]/15 blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#15616d]/15 blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Vignette effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(0, 10, 18, 0.8) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]"
        >
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-4xl font-black text-transparent bg-clip-text bg-linear-to-br from-[#ffecd1] via-[#ffecd1] to-[#ff7d00]">
                الصناعية
              </h3>
              <p className="text-xl font-bold text-[#ffecd1]">
                نرتب ظهورك ونضمن تأثيرك
              </p>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#ffecd1]/70">
              الصناعية متخصصة في تمكين صُنّاع المحتوى والمؤثرين، وتطوير حضور
              العلامات التجارية عبر محتوى رقمي مستدام.
            </p>
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#ff7d00]/30 bg-[#ff7d00]/10 px-6 py-3 text-sm font-bold text-[#ffecd1] backdrop-blur-sm transition-all duration-300 hover:border-[#ff7d00] hover:bg-[#ff7d00] hover:text-white hover:shadow-lg hover:shadow-[#ff7d00]/30"
            >
              <span>تواصل معنا</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </Link>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-[#ffecd1]">
              روابط سريعة
            </h4>
            <ul className="space-y-4">
              {[
                { label: "قصتنا", href: "#story" },
                { label: "الخدمات", href: "#services" },
                { label: "القيم", href: "#values" },
                { label: "وجوهنا", href: "#faces" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#ffecd1]/70 transition-colors hover:text-[#ff7d00]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-[#ffecd1]">
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@alsina3ya.com"
                  className="text-sm text-[#ffecd1]/70 transition-colors hover:text-[#ff7d00]"
                >
                  info@alsina3ya.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+966500000000"
                  className="text-sm text-[#ffecd1]/70 transition-colors hover:text-[#ff7d00]"
                >
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                {[
                  { name: "Twitter", href: "#" },
                  { name: "Instagram", href: "#" },
                  { name: "LinkedIn", href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="rounded-full border border-[#ffecd1]/20 bg-[#001524]/60 p-2.5 text-[#ffecd1]/70 backdrop-blur-sm transition-all hover:border-[#ff7d00] hover:bg-[#ff7d00]/10 hover:text-[#ff7d00]"
                    aria-label={social.name}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                    </svg>
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
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
