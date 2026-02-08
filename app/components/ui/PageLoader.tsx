"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0e1a]"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 1.2, 1.5], rotate: 360, opacity: [1, 1, 0] }}
              transition={{
                duration: 2,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0"
            >
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#FF4700] to-transparent" />
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: [0, 1.2, 1.5], rotate: 450, opacity: [1, 1, 0] }}
              transition={{
                duration: 2,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.1,
              }}
              className="absolute inset-0"
            >
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#ff9d33] to-transparent" />
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 0.8, 0], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 1],
              }}
              className="w-3 h-3 rounded-full bg-[#FF4700] mx-auto"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="absolute bottom-32 text-[#ffecd1] text-sm font-medium tracking-wider"
          >
            الصناعية
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

