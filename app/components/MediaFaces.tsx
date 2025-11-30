"use client";

import { faces } from "../constants/content";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Face = {
  name: string;
  role: string;
  image: string;
};

const getRandomTransform = (index: number) => {
  const rotations = [-3, 2, -2, 3];
  const yOffsets = [-10, 10, -15, 15];
  return {
    rotation: rotations[index % rotations.length],
    yOffset: yOffsets[index % yOffsets.length],
  };
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export function MediaFaces() {
  const [shuffledFaces] = useState(() => shuffleArray(faces));

  return (
    <section id="faces" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#ff7d00]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#ff9d33]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center sm:mb-20"
        >
          <h2 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-[#ffecd1] leading-tight pb-2 overflow-visible">
            وجوهنا الإعلامية
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#ffecd1]/70">
            صنّاع محتوى يخلقون التأثير
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {shuffledFaces.map((face: Face, index: number) => {
            const { rotation, yOffset } = getRandomTransform(index);
            return (
              <motion.div
                key={face.name}
                initial={{ opacity: 0, y: 50 + yOffset, rotate: rotation }}
                whileInView={{ opacity: 1, y: yOffset, rotate: rotation }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: yOffset - 10,
                  rotate: 0,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ffecd1]/10 bg-linear-to-br from-[#001524]/80 to-[#001524]/40 backdrop-blur-md transition-all duration-500 hover:border-[#ff7d00]/50 hover:shadow-2xl hover:shadow-[#ff7d00]/30">
                  <div className="absolute inset-0 bg-linear-to-br from-[#ff7d00]/0 via-[#ff7d00]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />

                  <div className="relative z-10 p-6 sm:p-8 text-center">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative mx-auto mb-6 h-40 w-40 sm:h-48 sm:w-48"
                    >
                      <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#ff7d00] via-[#ff9d33] to-[#ff7d00] p-1">
                        <div className="relative h-full w-full rounded-full overflow-hidden bg-[#001524]">
                          <Image
                            src={face.image}
                            alt={face.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 160px, 192px"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-[#001524]/80 via-transparent to-transparent" />
                        </div>
                      </div>

                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.15 + 0.3,
                          type: "spring",
                        }}
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-[#ff7d00]/50 bg-[#001524] px-3 py-1.5 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="h-2 w-2 rounded-full bg-[#ff7d00]"
                          />
                          <span className="text-xs font-medium text-[#ffecd1]/90">
                            Active
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                      className="mb-2 text-2xl font-bold text-[#ffecd1]"
                    >
                      {face.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                      className="text-sm text-[#ffecd1]/70"
                    >
                      {face.role}
                    </motion.p>
                  </div>

                  <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#ff7d00]/5 blur-3xl transition-all duration-500 group-hover:bg-[#ff7d00]/15 group-hover:scale-150" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
