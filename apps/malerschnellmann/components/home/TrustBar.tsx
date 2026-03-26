"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) {
          ref.current.textContent = Math.round(v) + suffix;
        }
      },
    });
    return controls.stop;
  }, [inView, count, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 25, suffix: "+", label: "Jahre Erfahrung" },
  { value: 100, suffix: "%", label: "Ökologische Produkte" },
  { value: 92, suffix: "", label: "Referenz­projekte" },
  { value: 5, suffix: "★", label: "Google Bewertung" },
];

export function TrustBar() {
  return (
    <section className="bg-[#1A1714] border-b border-[#2D2A27]">
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2D2A27]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center py-8 md:py-10 px-4 md:px-6 gap-2 bg-[#1A1714]"
            >
              <span className="font-serif text-4xl md:text-5xl text-white leading-none" style={{ letterSpacing: "-0.02em" }}>
                <Counter to={stat.value} suffix={stat.suffix} />
              </span>
              <span className="label text-[#7A7068] mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
