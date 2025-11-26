"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroBackground } from "./HeroBackground";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const xImageRef = useRef<HTMLDivElement>(null);
  const youtubeImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Enable hardware acceleration for better performance
    gsap.config({ force3D: true });

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 150,
            scale: 0.7,
            filter: "blur(20px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power4.out",
            delay: 0.3,
          }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.5,
          }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.8,
          }
        );
      }

      if (buttonsRef.current) {
        const buttons = buttonsRef.current.children;
        gsap.fromTo(
          buttons,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 1.1,
            stagger: 0.1,
          }
        );

        Array.from(buttons).forEach((button) => {
          const btn = button as HTMLElement;

          if (btn.classList.contains("hero-button-primary")) {
            btn.addEventListener("mouseenter", () => {
              gsap.to(btn, {
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 125, 0, 0.2)",
                duration: 0.15,
                ease: "power1.out",
              });
            });

            btn.addEventListener("mouseleave", () => {
              gsap.to(btn, {
                scale: 1,
                boxShadow: "0 0 0 rgba(255, 125, 0, 0)",
                duration: 0.12,
                ease: "power1.in",
              });
            });
          }

          if (btn.classList.contains("hero-button-secondary")) {
            btn.addEventListener("mouseenter", () => {
              gsap.to(btn, {
                scale: 1.05,
                borderColor: "rgba(255, 125, 0, 0.6)",
                backgroundColor: "rgba(255, 125, 0, 0.15)",
                duration: 0.15,
                ease: "power1.out",
              });
            });

            btn.addEventListener("mouseleave", () => {
              gsap.to(btn, {
                scale: 1,
                borderColor: "rgba(255, 236, 209, 0.3)",
                backgroundColor: "rgba(0, 21, 36, 0.4)",
                duration: 0.12,
                ease: "power1.in",
              });
            });
          }
        });
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 1.4,
            stagger: 0.15,
          }
        );

        Array.from(cards).forEach((card) => {
          const cardEl = card as HTMLElement;
          const icon = cardEl.querySelector("div");

          cardEl.addEventListener("mouseenter", () => {
            gsap.to(cardEl, {
              y: -8,
              scale: 1.03,
              borderColor: "rgba(255, 125, 0, 0.4)",
              backgroundColor: "rgba(0, 21, 36, 0.6)",
              duration: 0.4,
              ease: "power2.out",
            });

            if (icon) {
              gsap.to(icon, {
                scale: 1.2,
                rotation: 360,
                duration: 0.5,
                ease: "back.out(1.7)",
              });
            }
          });

          cardEl.addEventListener("mouseleave", () => {
            gsap.to(cardEl, {
              y: 0,
              scale: 1,
              borderColor: "rgba(255, 236, 209, 0.1)",
              backgroundColor: "rgba(0, 21, 36, 0.4)",
              duration: 0.35,
              ease: "power2.in",
            });

            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: "power2.in",
              });
            }
          });
        });
      }

      if (youtubeImageRef.current) {
        gsap.to(youtubeImageRef.current, {
          y: "+=20",
          rotation: "+=5",
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          force3D: true,
        });
      }

      if (xImageRef.current) {
        gsap.to(xImageRef.current, {
          y: "+=25",
          rotation: "-=5",
          duration: 3.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          force3D: true,
        });
      }

      if (youtubeImageRef.current) {
        gsap.to(youtubeImageRef.current, {
          scale: 0.2,
          x: -400,
          y: -250,
          rotation: -60,
          opacity: 0.2,
          ease: "power1.inOut",
          force3D: true,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      if (xImageRef.current) {
        gsap.to(xImageRef.current, {
          scale: 2.2,
          x: 200,
          y: -200,
          rotation: 30,
          ease: "power1.inOut",
          force3D: true,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      gsap.to(heroRef.current, {
        y: -100,
        opacity: 0,
        ease: "power1.inOut",
        force3D: true,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate h-screen overflow-x-hidden overflow-y-visible pt-16 pb-8 sm:pt-20 sm:pb-12 will-change-transform"
      style={{ transform: "translateZ(0)" }}
    >
      <HeroBackground />

      <div className="absolute left-0 top-0 z-10 h-full w-full max-w-[600px] pointer-events-none">
        <div className="relative h-full w-full pointer-events-none">
          <div
            ref={xImageRef}
            className="absolute top-[25%] left-[200px] sm:left-[300px] lg:left-[400px] -rotate-12 will-change-transform"
            style={{ transform: "translateZ(0)" }}
          >
            <Image
              src="/images/x.png"
              alt="X"
              width={500}
              height={500}
              className="h-40 w-40 sm:h-60 sm:w-60 lg:h-96 lg:w-96 object-contain"
              priority
            />
          </div>
          <div
            ref={youtubeImageRef}
            className="absolute top-[10%] left-[10px] sm:left-[20px] lg:left-[28px] rotate-18 will-change-transform"
            style={{ transform: "translateZ(0)" }}
          >
            <Image
              src="/images/youtube.png"
              alt="YouTube"
              width={500}
              height={500}
              className="h-40 w-40 sm:h-60 sm:w-60 lg:h-96 lg:w-96 object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-center px-5 py-12 sm:px-6 sm:py-16 lg:px-8 text-center md:text-right">
        <div className="mb-6 sm:mb-6 lg:mb-8 overflow-visible">
          <h1
            ref={titleRef}
            className="relative inline-block overflow-visible text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(4rem,15vw,12rem)] font-black leading-[1.05] tracking-tight"
            style={{ opacity: 0 }}
          >
            <span className="block overflow-visible bg-linear-to-br from-[#ffecd1] via-[#ffecd1] to-[#ff7d00] bg-clip-text text-transparent">
              الصناعية
            </span>
          </h1>
        </div>

        <h2
          ref={subtitleRef}
          className="mb-4 sm:mb-5 lg:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(1.5rem,4vw,3rem)] font-bold leading-[1.2] text-[#ffecd1] max-w-full sm:max-w-4xl mx-auto md:mx-0"
          style={{ opacity: 0 }}
        >
          نرتب ظهورك ونضمن تأثيرك
        </h2>

        <p
          ref={textRef}
          className="mb-8 sm:mb-10 lg:mb-12 max-w-full sm:max-w-2xl text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-[1.7] text-[#ffecd1]/70 mx-auto md:mx-0"
          style={{ opacity: 0 }}
        >
          الصناعية بتكون معك بمشوارك الإعلامي كاملاً، ندعمك بحضور قوي على
          السوشيال ميديا، ونشغل حسابك بشكل احترافي، ونبني لك بروفايل إعلامي يعرف
          الناس عليك بشكل رهيب
        </p>

        <div
          ref={buttonsRef}
          className="mb-8 sm:mb-10 lg:mb-12 flex flex-row items-center justify-center md:justify-end gap-3 sm:gap-4 relative z-30"
        >
          <Link
            href="#contact"
            className="hero-button-primary group relative cursor-pointer overflow-hidden rounded-full bg-[#ff7d00] px-6 py-3.5 sm:px-8 sm:py-3 lg:px-10 lg:py-3.5 text-sm sm:text-base font-bold text-white text-center flex-1 sm:flex-none"
            style={{ opacity: 0, pointerEvents: "auto" }}
          >
            <span className="relative z-10">ابدأ رحلتك الآن</span>
            <div className="absolute inset-0 z-0 bg-linear-to-r from-[#ff7d00] to-[#ffecd1] opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
          </Link>
          <Link
            href="#services"
            className="hero-button-secondary relative cursor-pointer rounded-full border border-[#ffecd1]/30 bg-[#001524]/40 px-6 py-3.5 sm:px-8 sm:py-3 lg:px-10 lg:py-3.5 text-sm sm:text-base font-bold text-[#ffecd1] backdrop-blur-sm transition-all duration-150 text-center flex-1 sm:flex-none"
            style={{ opacity: 0, pointerEvents: "auto" }}
          >
            اكتشف خدماتنا
          </Link>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-3 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            { label: "إدارة المواهب", icon: "✦", color: "#ff7d00" },
            { label: "إنتاج المحتوى", icon: "◆", color: "#15616d" },
            { label: "إدارة الحملات", icon: "✧", color: "#ffecd1" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl border border-[#ffecd1]/10 bg-linear-to-br from-[#001524]/60 to-[#001524]/40 p-5 sm:p-5 lg:p-8 backdrop-blur-md transition-all duration-500 hover:border-[#ff7d00]/50 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff7d00]/20"
            >
              <div
                className="absolute inset-0 bg-linear-to-br from-[#ff7d00]/0 to-[#ff7d00]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20 0%, transparent 100%)`,
                }}
              />

              <div className="relative z-10 flex flex-col items-center justify-center text-center sm:items-start sm:text-right">
                <div
                  className="mb-2 sm:mb-3 lg:mb-4 text-2xl sm:text-4xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#ffecd1]">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
