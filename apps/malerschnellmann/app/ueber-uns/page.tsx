"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const team = [
  {
    name: "Silvan Schnellmann",
    role: "Geschäftsführer & Inhaber",
    image: "/images/team/silvan-schnellmann.jpeg",
    quote: "Mit Freude und Farben unterwegs für Sie – dieses Motto lebe ich täglich.",
  },
  {
    name: "Melodie",
    role: "Leiterin Betriebsklima",
    image: "/images/team/melodie.jpg",
    quote: "Für gute Stimmung sorge ich.",
  },
  {
    name: "Felix Zingg",
    role: "Freelancer",
    image: "/images/team/felix-zingg.jpg",
    quote: "Zuverlässig und mit Leidenschaft bei der Arbeit.",
  },
];

const values = [
  {
    title: "Qualität",
    description:
      "Wir setzen ausschliesslich hochwertige, langlebige Materialien ein und führen jede Arbeit mit grösster Sorgfalt aus.",
  },
  {
    title: "Fachkompetenz",
    description:
      "25 Jahre Erfahrung in allen Bereichen des Malerhandwerks – von der Planung bis zur letzten Pinselstroh.",
  },
  {
    title: "Freundlichkeit",
    description:
      "Silvan Schnellmann persönlich nimmt Ihren Anruf entgegen. Direkt, ehrlich, auf Augenhöhe.",
  },
  {
    title: "Nachhaltigkeit",
    description:
      "Wir sind umweltzertifiziert und bevorzugen ökologische Produkte, welche die strengsten Umwelt- und Gesundheitsstandards erfüllen.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1A1714] pt-28 md:pt-40 pb-14 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/gallery/exterior/ext-20.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714] via-[#1A1714]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-px bg-[#C8551A]" />
              <span className="label text-[#C8551A]">Über uns</span>
            </div>
            <h1 className="font-serif text-display text-white leading-[0.95] mb-8 max-w-3xl">
              Ein Handwerksbetrieb{" "}
              <span className="text-[#C8551A]">mit Seele.</span>
            </h1>
            <p className="text-[#7A7068] text-lg max-w-lg leading-relaxed font-sans">
              Seit 25 Jahren stehen Silvan Schnellmann und sein Team für
              Qualität, Fachkompetenz und echte Freundlichkeit — im Kanton
              Zug und der ganzen Schweiz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story section */}
      <section className="px-6 lg:px-12 py-12 md:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E2D9]">
            <Image
              src="/images/team/silvan-schnellmann.jpeg"
              alt="Silvan Schnellmann – Inhaber Maler Schnellmann Zug"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Offset label */}
            <div className="absolute bottom-0 right-0 bg-[#C8551A] text-white px-6 py-4 max-w-xs">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1">
                Inhaber
              </p>
              <p className="font-serif text-lg">Silvan Schnellmann</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6"
        >
          <blockquote className="font-serif text-2xl md:text-3xl text-[#1A1714] leading-relaxed">
            &ldquo;Mit Freude und Farben unterwegs für Sie – dieses Motto leben
            wir täglich. Seit 25 Jahren.&rdquo;
          </blockquote>
          <div className="space-y-4 text-[#6B6460] leading-relaxed">
            <p>
              Unseren Fokus legen wir auf Qualität, Fachkompetenz und
              Freundlichkeit. Gerne beraten wir Sie persönlich und finden mit
              Ihnen gemeinsam Ihre Farbgestaltung zum Wohlfühlen.
            </p>
            <p>
              Wir verfügen über die erforderlichen Qualifikationen und das
              Know-how in allen Bereichen der Malerarbeiten – von der Planung
              bis zur Ausführung.
            </p>
            <p>
              Für Sie sind wir in der ganzen Schweiz unterwegs – unser
              zentraler Standort liegt im Kanton Zug. Wir arbeiten mit
              hochwertigen und ökologischen Produkten, welche die strengsten
              Umwelt- und Gesundheitsschutzstandards erfüllen.
            </p>
            <p>
              Haben Sie Fragen?{" "}
              <a
                href="tel:+41417416502"
                className="text-[#C8551A] hover:underline"
              >
                Rufen Sie uns an
              </a>{" "}
              – Silvan Schnellmann persönlich wird Ihren Anruf entgegennehmen.
            </p>
          </div>
        </motion.div>
      </section>


      {/* CTA */}
      <div className="bg-[#C8551A] py-14 md:py-20 px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Lernen Sie uns persönlich kennen.
          </h2>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#C8551A] font-medium hover:bg-[#F8F3EB] transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </motion.div>
      </div>
    </>
  );
}
