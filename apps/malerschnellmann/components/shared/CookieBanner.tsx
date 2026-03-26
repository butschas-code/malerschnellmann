"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "110%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[200] bg-[#1A1714] border-t-2 border-[#C8551A]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            {/* Text */}
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <span className="hidden sm:flex mt-0.5 w-7 h-7 shrink-0 items-center justify-center rounded-full border border-[#C8551A]/40">
                <svg className="w-3.5 h-3.5 text-[#C8551A]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </span>
              <p className="text-sm text-[#B0A89E] leading-relaxed">
                <span className="text-white font-medium">Cookie-Hinweis: </span>
                Diese Website verwendet technisch notwendige Cookies.{" "}
                <Link
                  href="/datenschutz"
                  className="text-[#C8551A] hover:text-[#E0763A] underline underline-offset-2 decoration-[#C8551A]/40 transition-colors"
                >
                  Datenschutzerklärung
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="text-sm font-sans font-medium text-[#7A7068] hover:text-white transition-colors duration-200 px-4 py-2.5 border border-[#2D2A27] hover:border-[#7A7068]"
              >
                Nur notwendige
              </button>
              <button
                onClick={accept}
                className="text-sm font-sans font-medium px-6 py-2.5 bg-[#C8551A] text-white hover:bg-[#A33E0E] transition-colors duration-200"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
