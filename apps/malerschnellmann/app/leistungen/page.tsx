"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const serviceImages: Record<string, string> = {
  malerarbeiten: "/images/gallery/exterior/ext-05.jpg",
  dekorativ:     "/images/gallery/interior/int-50.jpg",
  denkmalpflege: "/images/gallery/exterior/ext-01.jpg",
  schutz:        "/images/gallery/exterior/ext-22.jpg",
  schimmel:      "/images/gallery/interior/int-01.jpg",
  urlaubsservice: "/images/gallery/interior/int-40.jpg",
};

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1A1714] pt-28 md:pt-40 pb-14 md:pb-28 overflow-hidden">
        {/* Background image bleed */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/gallery/exterior/ext-07.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714] via-[#1A1714]/80 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-px bg-[#C8551A]" />
              <span className="label text-[#C8551A]">Leistungen</span>
            </div>
            <h1 className="font-serif text-display text-white leading-[0.95] mb-8 max-w-3xl">
              Alles aus einer Hand —{" "}
              <span className="text-[#C8551A]">mit Herzblut</span> und Handwerk.
            </h1>
            <p className="text-[#7A7068] text-lg max-w-xl leading-relaxed font-sans">
              Von der klassischen Innenrenovierung bis zum Fassadenschutz —
              Silvan Schnellmann und sein Team übernehmen Ihre Malerarbeiten
              mit höchster Sorgfalt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service sections — alternating image/text */}
      {services.map((service, i) => {
        const imgLeft = i % 2 === 0;
        const img = serviceImages[service.id];

        return (
          <section
            key={service.id}
            id={service.id}
            className={`flex flex-col ${imgLeft ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[520px]`}
          >
            {/* Image half */}
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full lg:w-[55%] min-h-[320px] lg:min-h-0 overflow-hidden"
            >
              <Image
                src={img}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              {/* Subtle dark gradient toward text side */}
              <div
                className={`absolute inset-0 ${
                  imgLeft
                    ? "bg-gradient-to-r from-transparent to-[#1A1714]/30"
                    : "bg-gradient-to-l from-transparent to-[#1A1714]/30"
                }`}
              />
            </motion.div>

            {/* Text half */}
            <motion.div
              initial={{ opacity: 0, x: imgLeft ? 32 : -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full lg:w-[45%] flex flex-col justify-center px-8 md:px-14 lg:px-16 py-16 overflow-hidden ${
                i % 2 === 0 ? "bg-[#1A1714]" : "bg-[#2D2520]"
              }`}
            >
              {/* Giant number watermark */}
              <span
                className="absolute right-6 bottom-4 font-serif text-[10rem] leading-none text-white/[0.04] pointer-events-none select-none"
                style={{ letterSpacing: "-0.04em" }}
                aria-hidden
              >
                {service.number}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="label text-[#C8551A]">{service.number}</span>
                  <span className="block flex-1 h-px bg-[#C8551A]/30" />
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-tight">
                  {service.title}
                </h2>

                <p className="font-sans text-[#7A7068] leading-relaxed mb-8">
                  {service.description}
                </p>

                {service.items && (
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-sans text-sm text-[#B0A89E]">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#C8551A] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </section>
        );
      })}

      {/* Eco banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#2D5A3D] py-20 px-6 md:px-14"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-5">
              <span className="block w-8 h-px bg-[#A8D5B8]" />
              <span className="label text-[#A8D5B8]">Nachhaltigkeit</span>
            </div>
            <p className="font-serif text-2xl md:text-3xl text-white leading-snug max-w-2xl">
              Wir sind umweltzertifiziert und arbeiten bevorzugt mit
              ökologischen Farben, die strengste Umwelt- und
              Gesundheitsschutzstandards erfüllen.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/kontakt"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-[#2D5A3D] font-sans font-medium text-sm tracking-wide overflow-hidden hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10">Offerte anfragen →</span>
              <span className="absolute inset-0 bg-[#1A3D27] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
