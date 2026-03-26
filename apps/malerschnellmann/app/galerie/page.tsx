"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/gallery";

type Category = "all" | "exterior" | "interior";

const categories: { value: Category; label: string; count: number }[] = [
  { value: "all",      label: "Alle",   count: galleryImages.length },
  { value: "exterior", label: "Aussen", count: galleryImages.filter(i => i.category === "exterior").length },
  { value: "interior", label: "Innen",  count: galleryImages.filter(i => i.category === "interior").length },
];

// Assign aspect ratios to create visual rhythm across the grid
function aspectRatio(index: number): string {
  const pattern = [
    "4/3", "4/3", "3/4",
    "3/4", "4/3", "4/3",
    "4/3", "3/4", "4/3",
    "4/3", "4/3", "3/4",
  ];
  return pattern[index % pattern.length];
}

export default function GaleriePage() {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  // Keyboard navigation
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (lightbox === null) return;
    if (e.key === "ArrowRight") setLightbox(p => p !== null ? Math.min(filtered.length - 1, p + 1) : null);
    if (e.key === "ArrowLeft")  setLightbox(p => p !== null ? Math.max(0, p - 1) : null);
    if (e.key === "Escape")     setLightbox(null);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#1A1714] pt-28 md:pt-40 pb-14 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/gallery/exterior/ext-09.jpg"
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714] via-[#1A1714]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-px bg-[#C8551A]" />
              <span className="label text-[#C8551A]">Referenzen</span>
            </div>
            <h1 className="font-serif text-display text-white leading-[0.95] mb-8 max-w-3xl">
              Eindrücke unserer{" "}
              <span className="text-[#C8551A]">Arbeit.</span>
            </h1>
            <p className="text-[#7A7068] text-lg max-w-lg leading-relaxed font-sans">
              {galleryImages.length} Aufnahmen ausgeführter Malerarbeiten —
              innen und aussen, für Private und Gewerbe im Kanton Zug.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-1 mt-14"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => { setActive(cat.value); setLightbox(null); }}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium transition-all duration-200 border ${
                  active === cat.value
                    ? "bg-[#C8551A] border-[#C8551A] text-white"
                    : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                {cat.label}
                <span className={`label text-[0.55rem] ${active === cat.value ? "text-white/70" : "text-white/30"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Gallery grid ─────────────────────────────────────── */}
      <section className="bg-[#1A1714] px-4 md:px-8 pb-24 pt-6">
        <motion.div
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(i * 0.04, 0.5),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative break-inside-avoid overflow-hidden cursor-zoom-in group mb-3"
                style={{ aspectRatio: aspectRatio(i) }}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1A1714]/0 group-hover:bg-[#1A1714]/40 transition-all duration-400" />
                {/* Category pill */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <span className="label text-white/80 text-[0.55rem]">
                    {img.category === "exterior" ? "Aussen" : "Innen"}
                  </span>
                </div>
                {/* Expand icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-7 h-7 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col"
            onClick={() => setLightbox(null)}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 shrink-0" onClick={e => e.stopPropagation()}>
              <span className="label text-white/40 text-xs">
                {lightbox + 1} / {filtered.length}
              </span>
              <div className="flex items-center gap-6">
                <span className="label text-white/40 text-xs hidden md:block">
                  {filtered[lightbox].category === "exterior" ? "Aussen" : "Innen"}
                </span>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label="Schliessen"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center px-4 md:px-20 min-h-0" onClick={e => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightbox}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full max-h-[80vh]"
                >
                  <Image
                    src={filtered[lightbox].src}
                    alt={filtered[lightbox].alt}
                    fill
                    className="object-contain"
                    sizes="95vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom nav */}
            <div className="flex items-center justify-center gap-6 md:gap-8 py-6 shrink-0" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setLightbox(p => p !== null ? Math.max(0, p - 1) : null)}
                disabled={lightbox === 0}
                className="flex items-center gap-2 text-sm font-sans text-white/50 hover:text-white disabled:opacity-20 transition-colors min-w-[80px] justify-center py-2"
              >
                ← Zurück
              </button>
              {/* Dot strip — show 7 dots centered on current */}
              <div className="flex gap-1.5">
                {Array.from({ length: Math.min(7, filtered.length) }, (_, j) => {
                  const offset = Math.max(0, Math.min(filtered.length - 7, lightbox - 3));
                  const idx = offset + j;
                  return (
                    <button
                      key={idx}
                      onClick={() => setLightbox(idx)}
                      className={`rounded-full transition-all duration-200 ${
                        idx === lightbox
                          ? "w-4 h-1.5 bg-[#C8551A]"
                          : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  );
                })}
              </div>
              <button
                onClick={() => setLightbox(p => p !== null ? Math.min(filtered.length - 1, p + 1) : null)}
                disabled={lightbox === filtered.length - 1}
                className="flex items-center gap-2 text-sm font-sans text-white/50 hover:text-white disabled:opacity-20 transition-colors min-w-[80px] justify-center py-2"
              >
                Weiter →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
