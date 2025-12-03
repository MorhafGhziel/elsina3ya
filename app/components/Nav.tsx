"use client";

import { useState, useEffect } from "react";

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "hero";

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = navLinks[i].id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    const handleScroll = () => {
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -50% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    let timeoutId: NodeJS.Timeout;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      clearTimeout(timeoutId);

      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries.reduce((prev, current) => {
          const prevRatio = prev.intersectionRatio;
          const currentRatio = current.intersectionRatio;

          const prevTop = prev.boundingClientRect.top;
          const currentTop = current.boundingClientRect.top;

          if (currentTop < 200 && currentTop > 0) {
            return current;
          }
          if (prevTop < 200 && prevTop > 0) {
            return prev;
          }

          return currentRatio > prevRatio ? current : prev;
        });

        timeoutId = setTimeout(() => {
          if (mostVisible.target.id) {
            setActiveSection(mostVisible.target.id);
          }
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
      window.removeEventListener("scroll", handleScroll);
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
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm transition-colors duration-500 ease-in-out cursor-pointer ${
                    activeSection === link.id
                      ? "text-[#ff7d00] font-medium"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

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

            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="text-lg font-semibold text-white cursor-pointer"
            >
              الصناعية
            </a>
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
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xl transition-colors duration-500 ease-in-out cursor-pointer ${
                  activeSection === link.id
                    ? "text-[#ff7d00] font-semibold"
                    : "text-white/80 hover:text-white font-medium"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
