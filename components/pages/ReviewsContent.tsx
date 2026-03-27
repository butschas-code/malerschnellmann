"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { reviews, averageRating } from "@/data/reviews";

const STAR = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

function StarRow({ rating, color = "#C8551A", size = 16 }: { rating: number; color?: string; size?: number }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(s => (
        <svg key={s} width={size} height={size} viewBox="0 0 20 20" fill={s <= rating ? color : "transparent"} stroke={color} strokeWidth="0.5">
          <path d={STAR}/>
        </svg>
      ))}
    </div>
  );
}

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctrl = animate(0, to, {
      duration: 1.6, ease: [0.16, 1, 0.3, 1],
      onUpdate: v => { if (ref.current) ref.current.textContent = v.toFixed(1); }
    });
    return ctrl.stop;
  }, [inView, to]);
  return <span ref={ref}>0.0</span>;
}

function Marquee() {
  const dupes = [...reviews, ...reviews, ...reviews];
  return (
    <div className="overflow-hidden bg-[#C8551A] py-3 select-none border-y border-[#A33E0E]">
      <motion.div className="flex gap-12 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
        {dupes.map((r, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span className="font-serif text-white/90 text-base italic">„{r.text.slice(0, 52)}…"</span>
            <span className="font-sans text-white/40 text-xs tracking-[0.2em] uppercase">{r.author}</span>
            <span className="text-white/20 text-xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Tilt card on mouse move
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const cardStyles = [
  { bg: "#FDFAF5", text: "#1A1714", muted: "#7A7068", star: "#C8551A", accent: "#C8551A", border: "#E4DDD4" },
  { bg: "#C8551A", text: "#FFFFFF", muted: "rgba(255,255,255,0.6)", star: "#FFFFFF", accent: "rgba(255,255,255,0.3)", border: "#A33E0E" },
  { bg: "#1A1714", text: "#FFFFFF", muted: "rgba(255,255,255,0.5)", star: "#C8551A", accent: "#2D2A27", border: "#2D2A27" },
  { bg: "#2D5A3D", text: "#FFFFFF", muted: "rgba(255,255,255,0.55)", star: "#A8D5B8", accent: "#244830", border: "#244830" },
  { bg: "#F5EFE3", text: "#1A1714", muted: "#7A7068", star: "#C8551A", accent: "#C8551A", border: "#E4DDD4" },
  { bg: "#2D2520", text: "#FFFFFF", muted: "rgba(255,255,255,0.5)", star: "#C8551A", accent: "#3A2E28", border: "#3A2E28" },
  { bg: "#C8551A", text: "#FFFFFF", muted: "rgba(255,255,255,0.6)", star: "#FFFFFF", accent: "rgba(255,255,255,0.3)", border: "#A33E0E" },
  { bg: "#1A1714", text: "#FFFFFF", muted: "rgba(255,255,255,0.5)", star: "#C8551A", accent: "#2D2A27", border: "#2D2A27" },
];

export function ReviewsContent() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative bg-[#1A1714] pt-28 md:pt-40 pb-14 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/gallery/interior/int-50.jpg" alt="" fill className="object-cover" priority/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714] via-[#1A1714]/80 to-transparent"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 via-transparent to-transparent"/>
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-px bg-[#C8551A]"/>
              <span className="label text-[#C8551A]">Bewertungen</span>
            </div>
            <h1 className="font-serif text-display text-white leading-[0.95] mb-10 max-w-3xl">
              Was unsere <span className="text-[#C8551A]">Kunden sagen.</span>
            </h1>
            <div className="flex items-center flex-wrap gap-4 md:gap-6">
              <span className="font-serif text-5xl md:text-7xl text-white leading-none"><CountUp to={averageRating}/></span>
              <div className="space-y-2">
                <StarRow rating={5} color="#C8551A" size={20}/>
                <p className="font-sans text-[#7A7068] text-sm">{reviews.length} Google Bewertungen</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────── */}
      <Marquee/>

      {/* ── Cards ─────────────────────────────────────────── */}
      <section className="bg-[#111109] px-3 sm:px-4 md:px-8 py-8 md:py-10">
        <div className="max-w-7xl mx-auto">

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-auto">

            {/* Card 0 — large featured, spans 7 cols */}
            {(() => { const s = cardStyles[0]; const r = reviews[0]; return (
              <motion.div key={r.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
                className="md:col-span-7">
                <TiltCard className="h-full">
                  <div className="h-full p-8 md:p-14 flex flex-col min-h-[280px] md:min-h-[420px]" style={{ background: s.bg }}>
                    <StarRow rating={r.rating} color={s.star} size={18}/>
                    <blockquote className="font-serif text-2xl md:text-4xl leading-snug mt-6 mb-auto flex-1"
                      style={{ color: s.text, letterSpacing: "-0.02em" }}>
                      „{r.text}"
                    </blockquote>
                    <div className="mt-10 pt-6 flex items-center justify-between" style={{ borderTop: `1px solid ${s.border}` }}>
                      <div>
                        <p className="font-sans font-bold text-sm" style={{ color: s.text }}>{r.author}</p>
                        <p className="font-sans text-xs mt-0.5" style={{ color: s.muted }}>
                          {new Date(r.date).toLocaleDateString("de-CH", { year: "numeric", month: "long" })}
                        </p>
                      </div>
                      <span className="label text-xs" style={{ color: s.muted }}>Google</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );})()}

            {/* Card 1 — spans 5 cols */}
            {(() => { const s = cardStyles[1]; const r = reviews[1]; return (
              <motion.div key={r.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16,1,0.3,1] }}
                className="md:col-span-5">
                <TiltCard className="h-full">
                  <div className="h-full p-7 md:p-10 flex flex-col min-h-[220px] md:min-h-[320px]" style={{ background: s.bg }}>
                    <StarRow rating={r.rating} color={s.star} size={16}/>
                    <blockquote className="font-serif text-xl md:text-3xl leading-snug mt-5 mb-auto flex-1"
                      style={{ color: s.text, letterSpacing: "-0.02em" }}>
                      „{r.text}"
                    </blockquote>
                    <div className="mt-8 pt-5 flex items-center justify-between" style={{ borderTop: `1px solid ${s.border}` }}>
                      <p className="font-sans font-bold text-sm" style={{ color: s.text }}>{r.author}</p>
                      <span className="label text-xs" style={{ color: s.muted }}>Google</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );})()}

            {/* Cards 2–4 — 3 equal columns */}
            {reviews.slice(2, 5).map((r, i) => { const s = cardStyles[i + 2]; return (
              <motion.div key={r.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
                className="md:col-span-4">
                <TiltCard className="h-full">
                  <div className="h-full p-8 flex flex-col min-h-[300px]" style={{ background: s.bg }}>
                    <StarRow rating={r.rating} color={s.star} size={15}/>
                    <blockquote className="font-serif text-xl leading-snug mt-4 mb-auto flex-1"
                      style={{ color: s.text, letterSpacing: "-0.01em" }}>
                      „{r.text}"
                    </blockquote>
                    <div className="mt-6 pt-4 flex items-center justify-between" style={{ borderTop: `1px solid ${s.border}` }}>
                      <div>
                        <p className="font-sans font-bold text-sm" style={{ color: s.text }}>{r.author}</p>
                        <p className="font-sans text-xs mt-0.5" style={{ color: s.muted }}>
                          {new Date(r.date).toLocaleDateString("de-CH", { year: "numeric", month: "long" })}
                        </p>
                      </div>
                      <span className="label text-xs" style={{ color: s.muted }}>Google</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );})}

            {/* Cards 5–7 — wide + two narrow */}
            {(() => { const s = cardStyles[5]; const r = reviews[5]; return (
              <motion.div key={r.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.16,1,0.3,1] }}
                className="md:col-span-5">
                <TiltCard className="h-full">
                  <div className="h-full p-8 flex flex-col min-h-[260px]" style={{ background: s.bg }}>
                    <StarRow rating={r.rating} color={s.star} size={15}/>
                    <blockquote className="font-serif text-xl leading-snug mt-4 mb-auto flex-1"
                      style={{ color: s.text, letterSpacing: "-0.01em" }}>
                      „{r.text}"
                    </blockquote>
                    <div className="mt-6 pt-4 flex items-center justify-between" style={{ borderTop: `1px solid ${s.border}` }}>
                      <p className="font-sans font-bold text-sm" style={{ color: s.text }}>{r.author}</p>
                      <span className="label text-xs" style={{ color: s.muted }}>Google</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );})()}

            {reviews.slice(6).map((r, i) => { const s = cardStyles[i + 6]; return (
              <motion.div key={r.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
                className="md:col-span-3 md:col-start-auto" style={{ gridColumn: i === 0 ? "7 / span 3" : undefined }}>
                <TiltCard className="h-full">
                  <div className="h-full p-8 flex flex-col min-h-[260px]" style={{ background: s.bg }}>
                    <StarRow rating={r.rating} color={s.star} size={15}/>
                    <blockquote className="font-serif text-xl leading-snug mt-4 mb-auto flex-1"
                      style={{ color: s.text, letterSpacing: "-0.01em" }}>
                      „{r.text}"
                    </blockquote>
                    <div className="mt-6 pt-4 flex items-center justify-between" style={{ borderTop: `1px solid ${s.border}` }}>
                      <p className="font-sans font-bold text-sm" style={{ color: s.text }}>{r.author}</p>
                      <span className="label text-xs" style={{ color: s.muted }}>Google</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );})}

          </div>
        </div>
      </section>
    </>
  );
}
