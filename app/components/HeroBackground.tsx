"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      
      container.style.setProperty("--mouse-x", `${x}%`);
      container.style.setProperty("--mouse-y", `${y}%`);
    };

    // Only listen to mouse move within the hero section
    const heroSection = container.closest('section#hero');
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
      return () => heroSection.removeEventListener("mousemove", handleMouseMove);
    }
    
    return () => {};
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 125, 0, 0.15) 0%, transparent 45%),
          radial-gradient(circle at 20% 30%, rgba(21, 97, 109, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 125, 0, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, #000a12 0%, #001524 100%)
        `,
      }}
    >
      {/* Main 3D perspective grid with enhanced visibility */}
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

      {/* Diagonal animated lines for depth */}
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

      {/* Floating orbs with enhanced glow */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#ff7d00]/15 blur-[120px] animate-pulse" />
      <div 
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#15616d]/15 blur-[120px] animate-pulse" 
        style={{ animationDelay: "1s" }} 
      />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0, 10, 18, 0.8) 100%)",
        }}
      />
      
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes slideRight {
          0% { transform: translateX(-80px); }
          100% { transform: translateX(0); }
        }

        @keyframes dotPulse {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 0.4;
            transform: scale(1.1);
          }
        }

        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(20px); }
        }
      `}</style>
    </div>
  );
}

