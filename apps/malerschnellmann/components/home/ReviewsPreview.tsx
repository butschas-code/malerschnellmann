"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { reviews, averageRating } from "@/data/reviews";

const featured = reviews.slice(0, 3);

export function ReviewsPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#F5EFE3] py-24 md:py-36 overflow-hidden">
      {/* Giant quote mark */}
      <div
        className="absolute top-0 right-8 md:right-16 font-serif text-[22vw] text-[#E4DDD4] leading-none pointer-events-none select-none"
        aria-hidden
      >
        „
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="block w-8 h-px bg-[#C8551A]" />
          <span className="label text-[#C8551A]">Bewertungen</span>
          <span className="block w-8 h-px bg-[#C8551A]" />
        </motion.div>

        {/* Pullquote carousel */}
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl md:text-3xl text-[#1A1714] leading-snug"
              style={{ letterSpacing: "-0.01em" }}
            >
              „{featured[active].text}"
            </motion.blockquote>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.footer
              key={`footer-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-8 flex items-center gap-5"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className={`w-4 h-4 ${s <= featured[active].rating ? "text-[#C8551A]" : "text-[#E4DDD4]"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-sans text-sm font-medium text-[#1A1714]">{featured[active].author}</span>
              <span className="label text-[#7A7068]">Google</span>
            </motion.footer>
          </AnimatePresence>

          {/* Nav dots + arrows */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-px transition-all duration-300 ${i === active ? "w-10 bg-[#C8551A]" : "w-4 bg-[#C8551A]/30 hover:bg-[#C8551A]/60"}`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2 ml-auto">
              <button
                onClick={() => setActive((a) => (a - 1 + featured.length) % featured.length)}
                className="w-10 h-10 border border-[#C8551A]/30 text-[#C8551A] hover:bg-[#C8551A] hover:text-white transition-colors duration-200 font-sans text-sm flex items-center justify-center"
              >
                ←
              </button>
              <button
                onClick={() => setActive((a) => (a + 1) % featured.length)}
                className="w-10 h-10 border border-[#C8551A]/30 text-[#C8551A] hover:bg-[#C8551A] hover:text-white transition-colors duration-200 font-sans text-sm flex items-center justify-center"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row: avg rating + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 pt-10 border-t border-[#E4DDD4] flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-serif text-5xl text-[#1A1714]">{averageRating.toFixed(1)}</span>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-[#C8551A]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="label text-[#7A7068]">{reviews.length} Google Bewertungen</span>
            </div>
          </div>

          <Link
            href="/bewertungen"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#1A1714]/20 text-[#1A1714] font-sans font-medium text-sm tracking-wide hover:bg-[#1A1714] hover:text-white hover:border-[#1A1714] transition-all duration-300"
          >
            Alle Bewertungen lesen →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
