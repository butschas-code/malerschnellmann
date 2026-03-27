"use client";

import { motion } from "framer-motion";
import { ablauf } from "@/data/services";

export function Ablauf() {
  return (
    <section className="bg-[#1A1714] py-14 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="block w-8 h-px bg-[#C8551A]" />
            <span className="label text-[#C8551A]">So einfach geht's</span>
          </div>
          <h2 className="font-serif text-title text-white">
            Ihr Weg zu neuer Farbe
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — drawn on scroll */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[#2D2A27]">
            <motion.div
              className="h-full bg-[#C8551A]/40 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {ablauf.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative md:px-10 first:pl-0 last:pr-0"
              >
                {/* Step dot on the line */}
                <div className="hidden md:block absolute -top-[6px] left-0 md:left-10 first:left-0 w-3 h-3 rounded-full bg-[#C8551A]" />

                {/* Step number */}
                <div
                  className="font-serif text-[#C8551A] text-5xl md:text-6xl leading-none mb-8 md:pt-10"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {step.step}
                </div>

                <h3 className="font-serif text-2xl text-white mb-4">
                  {step.title}
                </h3>

                <p className="font-sans text-sm text-[#7A7068] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/kontakt"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#C8551A] text-white font-sans font-medium text-sm tracking-wide overflow-hidden"
          >
            <span className="relative z-10">Jetzt Offerte anfragen</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              →
            </motion.span>
            <span className="absolute inset-0 bg-[#A33E0E] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
