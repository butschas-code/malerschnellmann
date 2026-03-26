import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-3xl mx-auto">
      <h1 className="font-serif text-4xl text-[#1A1714] mb-10">Impressum</h1>

      <div className="space-y-8 text-[#6B6460] leading-relaxed">
        <section>
          <h2 className="font-semibold text-[#1A1714] mb-2">
            Verantwortlich für den Inhalt
          </h2>
          <address className="not-italic">
            <strong className="text-[#1A1714]">Maler Schnellmann</strong>
            <br />
            Silvan Schnellmann
            <br />
            Lauriedhofweg 8
            <br />
            6300 Zug
            <br />
            Schweiz
          </address>
        </section>

        <section>
          <h2 className="font-semibold text-[#1A1714] mb-2">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href="tel:+41417416502" className="text-[#C8551A] hover:underline">
              041 741 65 02
            </a>
          </p>
          <p>
            Mobil:{" "}
            <a href="tel:+41794195851" className="text-[#C8551A] hover:underline">
              079 419 58 51
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-[#1A1714] mb-2">
            Haftungsausschluss
          </h2>
          <p>
            Die Informationen auf dieser Website wurden sorgfältig zusammen­gestellt.
            Für Vollständigkeit, Richtigkeit und Aktualität übernehmen wir keine
            Gewähr. Für externe Links übernehmen wir keine Verantwortung.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-[#1A1714] mb-2">Urheberrecht</h2>
          <p>
            Alle Inhalte dieser Website (Texte, Bilder, Grafiken) sind
            urheberrechtlich geschützt. Eine Reproduktion ohne ausdrückliche
            schriftliche Genehmigung ist nicht gestattet.
          </p>
        </section>
      </div>
    </div>
  );
}
