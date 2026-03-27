"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production: integrate with email service / form handler
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1A1714] pt-28 md:pt-40 pb-14 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/gallery/exterior/ext-25.jpg"
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
              <span className="label text-[#C8551A]">Kontakt</span>
            </div>
            <h1 className="font-serif text-display text-white leading-[0.95] mb-8 max-w-3xl">
              Lassen Sie uns{" "}
              <span className="text-[#C8551A]">miteinander sprechen.</span>
            </h1>
            <p className="text-[#7A7068] text-lg max-w-lg leading-relaxed font-sans">
              Silvan Schnellmann persönlich nimmt Ihren Anruf entgegen —
              oder senden Sie uns eine Nachricht.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="px-6 lg:px-12 py-12 md:py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-10"
        >
          {/* Phone */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8551A] mb-3">
              Telefon
            </p>
            <a
              href="tel:+41417416502"
              className="font-serif text-3xl text-[#1A1714] hover:text-[#C8551A] transition-colors block"
            >
              041 741 65 02
            </a>
            <a
              href="tel:+41794195851"
              className="font-serif text-2xl text-[#6B6460] hover:text-[#C8551A] transition-colors block mt-1"
            >
              079 419 58 51
            </a>
            <p className="text-sm text-[#6B6460] mt-2">
              Montag–Freitag, 07:00–18:00 Uhr
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8551A] mb-3">
              Adresse
            </p>
            <address className="not-italic font-serif text-2xl text-[#1A1714] leading-relaxed">
              Silvan Schnellmann
              <br />
              Lauriedhofweg 8
              <br />
              6300 Zug
            </address>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Maler+Schnellmann+Zug+Lauriedhofweg+8+6300+Zug"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[#C8551A] hover:text-[#A33E0E] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Route planen
            </a>
          </div>

          {/* Service area */}
          <div className="p-6 bg-[#F8F3EB] border-l-2 border-[#C8551A]">
            <p className="text-sm text-[#6B6460] leading-relaxed">
              <strong className="text-[#1A1714]">Einsatzgebiet:</strong> Kanton
              Zug und die ganze Schweiz – wir kommen zu Ihnen.
            </p>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20 bg-[#F8F3EB]">
              <div className="w-16 h-16 bg-[#C8551A] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="font-serif text-2xl text-[#1A1714] mb-3">
                Danke für die Nachricht!
              </h2>
              <p className="text-[#6B6460]">
                Wir melden uns so schnell wie möglich bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#6B6460] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-[#E8E2D9] bg-white text-[#1A1714] focus:outline-none focus:border-[#C8551A] transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#6B6460] mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-[#E8E2D9] bg-white text-[#1A1714] focus:outline-none focus:border-[#C8551A] transition-colors"
                  placeholder="ihre@email.ch"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#6B6460] mb-2">
                  Telefon (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-[#E8E2D9] bg-white text-[#1A1714] focus:outline-none focus:border-[#C8551A] transition-colors"
                  placeholder="+41 ..."
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#6B6460] mb-2">
                  Betreff
                </label>
                <select
                  name="subject"
                  className="w-full px-4 py-3 border border-[#E8E2D9] bg-white text-[#1A1714] focus:outline-none focus:border-[#C8551A] transition-colors"
                >
                  <option value="">Bitte wählen ...</option>
                  <option>Offerte anfragen</option>
                  <option>Beratungsgespräch</option>
                  <option>Urlaubsservice</option>
                  <option>Andere Anfrage</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#6B6460] mb-2">
                  Nachricht
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-[#E8E2D9] bg-white text-[#1A1714] focus:outline-none focus:border-[#C8551A] transition-colors resize-none"
                  placeholder="Beschreiben Sie Ihr Vorhaben ..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#C8551A] text-white font-medium hover:bg-[#A33E0E] transition-colors duration-200"
              >
                Nachricht senden
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </>
  );
}
