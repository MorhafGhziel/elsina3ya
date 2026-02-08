"use client";

import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    href: "https://www.instagram.com/alsnaya_sa",
  },
  {
    name: "Twitter",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] grain-overlay">
      {/* Hazard tape top border */}
      <div className="hazard-tape" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12" dir="rtl">
          {/* Brand and Mission Section */}
          <div className="text-right">
            <Link href="#hero" className="inline-block mb-4">
              <Image
                src="/images/snlogo.png"
                alt="الصناعية"
                width={200}
                height={64}
                className="h-16 w-auto"
              />
            </Link>
            <div className="h-0.5 bg-[#FF4800]/30 w-40 mb-6"></div>
            <p className="text-[#FFF6F3]/50 leading-relaxed mb-6 text-sm">
              صنّاع الأثر في العالم الرقمي. نرتّب ظهورك، ونصنع تأثيرك.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF4800]/10 border border-[#FF4800]/30 rounded flex items-center justify-center text-[#FFF6F3] hover:text-[#FF4800] hover:border-[#FF4800] transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-right">
            <h3 className="text-[#FFF6F3] font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#story" className="text-[#FFF6F3]/50 hover:text-[#FF4800] transition-colors text-sm">
                  قصتنا
                </Link>
              </li>
              <li>
                <Link href="#mission" className="text-[#FFF6F3]/50 hover:text-[#FF4800] transition-colors text-sm">
                  رسالتنا
                </Link>
              </li>
              <li>
                <Link href="#vision" className="text-[#FFF6F3]/50 hover:text-[#FF4800] transition-colors text-sm">
                  رؤيتنا
                </Link>
              </li>
              <li>
                <Link href="#values" className="text-[#FFF6F3]/50 hover:text-[#FF4800] transition-colors text-sm">
                  قيمنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-right">
            <h3 className="text-[#FFF6F3] font-bold text-lg mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#FF4800]/10 border border-[#FF4800]/30 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF4800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-[#FFF6F3]/50 text-sm">الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF4800]/10 border border-[#FF4800]/30 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF4800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:Info@snaya.sa" className="text-[#FFF6F3]/50 hover:text-[#FF4800] transition-colors text-sm">
                  Info@snaya.sa
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF4800]/10 border border-[#FF4800]/30 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF4800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:0571077778" className="text-[#FFF6F3]/50 hover:text-[#FF4800] transition-colors text-sm">
                  +966 571077778
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Chevron/gear decorative separator */}
        <div className="flex justify-center mb-8">
          <span className="text-[#FF4800] text-lg font-black tracking-[0.3em] opacity-30">
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
          </span>
        </div>

        <div className="pt-8 border-t border-[#FF4800]/15">
          <div className="text-center text-[#FFF6F3]/40 text-sm">
            &copy; 2026 الصناعية. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}
