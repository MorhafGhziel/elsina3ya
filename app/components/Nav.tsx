"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "الرئيسية", href: "#hero", id: "hero" },
  { name: "قصتنا", href: "#story", id: "story" },
  { name: "الرؤية", href: "#vision", id: "vision" },
  { name: "رسالتنا", href: "#mission", id: "mission" },
  { name: "القيم", href: "#values", id: "values" },
  { name: "تواصل معنا", href: "#contact", id: "contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    let timeoutId: NodeJS.Timeout;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      clearTimeout(timeoutId);
      
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        
        timeoutId = setTimeout(() => {
          setActiveSection(mostVisible.target.id);
        }, 50);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      clearTimeout(timeoutId);
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-[#0a0e1a]/95 backdrop-blur-md px-6 py-3"
                : "px-0 py-0"
            }`}
          >
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors duration-500 ease-in-out ${
                    activeSection === link.id
                      ? "text-[#ff7d00]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link href="#hero" className="text-lg font-semibold text-white">
              الصناعية
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-[#0a0e1a]/95"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative h-full flex flex-col items-center justify-center gap-6 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl transition-colors duration-500 ease-in-out ${
                  activeSection === link.id
                    ? "text-[#ff7d00] font-semibold"
                    : "text-white/80 hover:text-white font-medium"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
