"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const serviceImages = [
  "/images/gallery/exterior/ext-05.jpg",   // Malerarbeiten: scaffolding + Schnellmann banner
  "/images/gallery/interior/int-50.jpg",   // Dekorativ: colour swatches + gold rabbits
  "/images/gallery/exterior/ext-01.jpg",   // Denkmalpflege: historic pink stucco villa
  "/images/gallery/exterior/ext-22.jpg",   // Graffiti/Vogelschutz: clean sealed facade
  "/images/gallery/interior/int-01.jpg",   // Schimmel: interior being treated + repainted
  "/images/gallery/interior/int-40.jpg",   // Urlaubsservice: finished living room, teal walls
];

export function ServicesPreview() {
  return (
    <section className="bg-[#2D2520] py-14 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 md:mb-20"
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="block w-8 h-px bg-[#C8551A]" />
              <span className="label text-[#C8551A]">Leistungen</span>
            </div>
            <h2 className="font-serif text-title text-white">
              Was wir für Sie schaffen
            </h2>
          </div>
          <Link
            href="/leistungen"
            className="hidden md:flex items-center gap-3 text-sm font-sans font-medium text-[#7A7068] hover:text-white transition-colors group"
          >
            Alle Leistungen
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1714]">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#2D2520] hover:bg-[#3A2E28] transition-colors duration-500 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={serviceImages[i]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520] via-[#2D2520]/20 to-transparent" />
                {/* Number badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className="font-serif text-white/20 text-3xl leading-none"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1 p-6 md:p-7">
                <h3 className="font-serif text-xl text-white mb-3 group-hover:text-[#C8551A] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-[#7A7068] leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#C8551A] text-sm font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                  <span>Mehr erfahren</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:hidden"
        >
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-3 text-sm font-sans font-medium text-[#C8551A]"
          >
            Alle Leistungen →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
