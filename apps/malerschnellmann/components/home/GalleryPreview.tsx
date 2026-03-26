"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";

// Pick a curated selection spanning both categories
const picks = [
  galleryImages[0],  // ext-01
  galleryImages[3],  // ext-04
  galleryImages[26], // int-01
  galleryImages[30], // int-05
  galleryImages[6],  // ext-07
  galleryImages[40], // int-15
];

export function GalleryPreview() {
  return (
    <section className="bg-[#1A1714] py-24 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="block w-8 h-px bg-[#C8551A]" />
              <span className="label text-[#C8551A]">Referenzen</span>
            </div>
            <h2 className="font-serif text-title text-white">
              Unsere Arbeiten
            </h2>
          </div>
          <Link
            href="/galerie"
            className="hidden md:flex items-center gap-3 text-sm font-sans font-medium text-[#7A7068] hover:text-white transition-colors group"
          >
            Galerie öffnen
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Full-bleed editorial grid */}
      <div className="grid grid-cols-12 grid-rows-2 gap-1 h-[70vw] max-h-[700px]">
        {/* Large left */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-5 row-span-2 relative overflow-hidden group"
        >
          <Image
            src={picks[0].src}
            alt={picks[0].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute bottom-5 left-5"
          >
            <span className="label text-[#C8551A]">Aussen</span>
          </motion.div>
        </motion.div>

        {/* Top middle */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-4 row-span-1 relative overflow-hidden group"
        >
          <Image
            src={picks[2].src}
            alt={picks[2].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="33vw"
          />
          <div className="absolute inset-0 bg-[#1A1714]/0 group-hover:bg-[#1A1714]/20 transition-colors duration-500" />
        </motion.div>

        {/* Top right */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-3 row-span-1 relative overflow-hidden group"
        >
          <Image
            src={picks[1].src}
            alt={picks[1].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="25vw"
          />
          <div className="absolute inset-0 bg-[#1A1714]/0 group-hover:bg-[#1A1714]/20 transition-colors duration-500" />
        </motion.div>

        {/* Bottom middle */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-2 row-span-1 relative overflow-hidden group"
        >
          <Image
            src={picks[4].src}
            alt={picks[4].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="16vw"
          />
        </motion.div>

        {/* Bottom middle-right */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-3 row-span-1 relative overflow-hidden group"
        >
          <Image
            src={picks[3].src}
            alt={picks[3].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 right-5">
            <span className="label text-[#7A7068]">Innen</span>
          </div>
        </motion.div>

        {/* Bottom far right — CTA block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="col-span-2 row-span-1 relative bg-[#C8551A] flex flex-col items-center justify-center group cursor-pointer"
        >
          <Link href="/galerie" className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <span className="font-serif text-white text-lg leading-tight">92<br/>Bilder</span>
            <span className="label text-white/70 mt-1">ansehen →</span>
          </Link>
        </motion.div>
      </div>

      {/* Mobile CTA */}
      <div className="px-6 md:px-14 mt-10 md:hidden">
        <Link
          href="/galerie"
          className="inline-flex items-center gap-3 text-sm font-sans font-medium text-[#C8551A]"
        >
          Galerie öffnen →
        </Link>
      </div>
    </section>
  );
}
