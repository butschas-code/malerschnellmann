"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const words = ["Mit", "Freude", "und", "Farbe."];

const wordVariants = {
  hidden: { opacity: 0, y: "110%", rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: "0%",
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 0.9, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const springImgY = useSpring(imgY, { stiffness: 80, damping: 25 });

  return (
    <section
      ref={ref}
      className="grain relative min-h-screen bg-[#1A1714] overflow-hidden flex flex-col"
    >
      {/* Background image — right half, parallax */}
      <motion.div
        style={{ y: springImgY }}
        className="absolute inset-y-0 right-0 w-full md:w-[58%] will-change-transform"
      >
        <Image
          src="/images/gallery/exterior/ext-01.jpg"
          alt="Maler Schnellmann – Referenz Aussen"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 58vw"
        />
        {/* Dark gradient from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714] via-[#1A1714]/70 to-transparent" />
        {/* Dark gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col justify-center flex-1 px-6 md:px-14 lg:px-20 pt-14 md:pt-28 pb-12 md:pb-16 max-w-[1400px] mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="block w-8 h-px bg-[#C8551A]" />
          <span className="label text-[#C8551A]">Maler Schnellmann · Zug</span>
        </motion.div>

        {/* HEADLINE — word-by-word reveal */}
        <div
          style={{ perspective: "800px" }}
          className="overflow-hidden"
        >
          <h1 className="font-serif text-display text-white leading-[0.92] mb-0">
            {words.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.18em] last:mr-0">
                <motion.span
                  className="inline-block"
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ display: "inline-block" }}
                >
                  {word === "Farbe." ? (
                    <span className="text-[#C8551A]">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Animated rule */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          style={{ transformOrigin: "left" }}
          className="h-px bg-[#C8551A]/40 w-full max-w-md mt-8 mb-8"
        />

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#B0A89E] text-base md:text-lg max-w-sm leading-relaxed mb-10 font-sans"
        >
          Malerarbeiten mit Herzblut — seit 25 Jahren im Kanton Zug und der
          ganzen Schweiz.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Link
            href="/kontakt"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#C8551A] text-white font-sans font-medium text-sm tracking-wide overflow-hidden"
          >
            <span className="relative z-10">Offerte anfragen</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              →
            </motion.span>
            <span className="absolute inset-0 bg-[#A33E0E] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </Link>

          <Link
            href="/galerie"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-sans font-medium text-sm tracking-wide hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            Galerie ansehen
          </Link>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-auto pt-16 flex justify-end"
        >
          <div className="hidden md:flex flex-col items-center gap-2 text-[#7A7068]">
            <span className="label" style={{ writingMode: "vertical-rl" }}>
              Scrollen
            </span>
            <motion.div
              animate={{ scaleY: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-px h-12 bg-[#C8551A]/50 origin-top"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
