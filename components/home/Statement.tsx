"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-4%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["4%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative bg-[#F5EFE3] py-16 md:py-36 overflow-hidden select-none"
    >
      {/* Big background number */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <span
          className="font-serif text-[28vw] font-normal text-[#E4DDD4] leading-none"
          style={{ letterSpacing: "-0.04em" }}
        >
          25
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 text-center">
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="block w-8 h-px bg-[#C8551A]" />
          <span className="label text-[#C8551A]">Über uns</span>
          <span className="block w-8 h-px bg-[#C8551A]" />
        </motion.div>

        {/* Line 1 */}
        <div className="overflow-hidden">
          <motion.h2
            style={{ x: x1 }}
            className="font-serif text-headline text-[#1A1714] leading-[1.0]"
          >
            Gute Malerarbeiten
          </motion.h2>
        </div>

        {/* Line 2 — accent */}
        <div className="overflow-hidden">
          <motion.h2
            style={{ x: x2 }}
            className="font-serif text-headline text-[#C8551A] leading-[1.0]"
          >
            sieht man nicht.
          </motion.h2>
        </div>

        {/* Line 3 */}
        <div className="overflow-hidden">
          <motion.h2
            style={{ x: x1 }}
            className="font-serif text-headline text-[#1A1714] leading-[1.0]"
          >
            Man spürt sie.
          </motion.h2>
        </div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 text-[#7A7068] text-base md:text-lg max-w-xl mx-auto leading-relaxed font-sans"
        >
          Silvan Schnellmann und sein Team stehen für Qualität, Fachkompetenz
          und echte Freundlichkeit — seit 25 Jahren im Kanton Zug.
        </motion.p>

        {/* SVG paint stroke underline */}
        <motion.svg
          viewBox="0 0 400 12"
          className="mx-auto mt-8 w-48 overflow-visible"
          fill="none"
        >
          <motion.path
            d="M4 7 Q100 2 200 7 Q300 12 396 5"
            stroke="#C8551A"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          />
        </motion.svg>
      </div>
    </section>
  );
}
