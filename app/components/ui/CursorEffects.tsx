"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CursorEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = "0";
    }
    if (cursorFollowerRef.current) {
      cursorFollowerRef.current.style.opacity = "0";
    }

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
        gsap.to(cursorRef.current, {
          x: mouseX,
          y: mouseY,
          xPercent: -50,
          yPercent: -50,
          duration: 0.1,
          ease: "power2.out",
        });
      }

      if (cursorFollowerRef.current) {
        cursorFollowerRef.current.style.opacity = "1";
        gsap.to(cursorFollowerRef.current, {
          x: mouseX,
          y: mouseY,
          xPercent: -50,
          yPercent: -50,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (Math.random() > 0.95 && particlesRef.current) {
        const particle = document.createElement("div");
        particle.className = "cursor-particle";
        particle.style.left = `${mouseX}px`;
        particle.style.top = `${mouseY}px`;
        particlesRef.current.appendChild(particle);

        gsap.to(particle, {
          opacity: 0,
          scale: 2,
          y: mouseY - 50,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            particle.remove();
          },
        });
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current && cursorFollowerRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
        gsap.to(cursorFollowerRef.current, {
          scale: 1.5,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current && cursorFollowerRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
        gsap.to(cursorFollowerRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button']"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{ 
          left: 0, 
          top: 0,
          opacity: 0
        }}
      >
        <div className="w-full h-full rounded-full bg-[#FF4700]" />
      </div>

      <div
        ref={cursorFollowerRef}
        className="fixed w-10 h-10 pointer-events-none z-[9998] hidden lg:block"
        style={{ 
          left: 0, 
          top: 0,
          opacity: 0
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-[#FF4700] opacity-50" />
      </div>

      <div
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none z-[9997] hidden lg:block"
      />

      <style jsx>{`
        .cursor-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #FF4700;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
}

