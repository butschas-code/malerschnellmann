"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/galerie", label: "Galerie" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/bewertungen", label: "Bewertungen" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_0_0_#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <Image
              src="/images/logo.png"
              alt="Maler Schnellmann Zug"
              width={200}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 stroke-underline ${
                    active
                      ? "text-[#C8551A] active"
                      : "text-[#1A1714] hover:text-[#C8551A]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className="ml-4 px-5 py-2.5 bg-[#C8551A] text-white text-sm font-medium tracking-wide hover:bg-[#A33E0E] transition-colors duration-200"
            >
              Offerte anfragen
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative z-10 flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menü"
          >
            <span
              className={`block h-0.5 w-6 bg-[#1A1714] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1A1714] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1A1714] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#FDFAF6] flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-serif text-[#1A1714] hover:text-[#C8551A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-10 pt-10 border-t border-[#E8E2D9] space-y-5">
              <Link
                href="/kontakt"
                className="block w-full text-center py-3.5 bg-[#C8551A] text-white font-sans font-medium text-sm tracking-wide hover:bg-[#A33E0E] transition-colors"
              >
                Offerte anfragen →
              </Link>
              <div>
                <p className="text-sm text-[#6B6460]">Maler Schnellmann Zug</p>
                <a
                  href="tel:+41417416502"
                  className="text-xl font-medium text-[#C8551A] mt-1 block"
                >
                  041 741 65 02
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
