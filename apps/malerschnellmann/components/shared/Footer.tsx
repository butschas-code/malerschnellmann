import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5EFE3] text-[#1A1714]">
      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {/* Brand */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Maler Schnellmann Zug"
            width={140}
            height={28}
            className="h-7 w-auto object-contain mb-4"
          />
          <p className="text-sm text-[#7A7068] leading-relaxed mt-3 max-w-xs">
            Mit Freude und Farbe unterwegs für Sie – seit 25 Jahren im Kanton
            Zug und der ganzen Schweiz.
          </p>
        </div>

        {/* NAP */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C8551A] mb-4">
            Kontakt
          </h3>
          <address className="not-italic text-sm text-[#7A7068] leading-relaxed space-y-1">
            <p>Silvan Schnellmann</p>
            <p>Lauriedhofweg 8</p>
            <p>6300 Zug</p>
          </address>
          <div className="mt-4 space-y-1">
            <a
              href="tel:+41417416502"
              className="block text-sm text-[#1A1714] hover:text-[#C8551A] transition-colors"
            >
              041 741 65 02
            </a>
            <a
              href="tel:+41794195851"
              className="block text-sm text-[#1A1714] hover:text-[#C8551A] transition-colors"
            >
              079 419 58 51
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C8551A] mb-4">
            Navigation
          </h3>
          <nav className="flex flex-col gap-2">
            {[
              { href: "/", label: "Startseite" },
              { href: "/leistungen", label: "Leistungen" },
              { href: "/galerie", label: "Galerie" },
              { href: "/ueber-uns", label: "Über uns" },
              { href: "/bewertungen", label: "Bewertungen" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#7A7068] hover:text-[#1A1714] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-[#E4DDD4] max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7068]">
        <p>
          © {currentYear} Maler Schnellmann – Silvan Schnellmann, Zug,
          Schweiz
        </p>
        <div className="flex gap-6">
          <Link
            href="/impressum"
            className="hover:text-[#1A1714] transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-[#1A1714] transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
