import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-3xl mx-auto">
      <h1 className="font-serif text-4xl text-[#1A1714] mb-10">
        Datenschutzerklärung
      </h1>

      <div className="space-y-8 text-[#6B6460] leading-relaxed">
        <section>
          <h2 className="font-semibold text-[#1A1714] mb-2">
            Verantwortliche Stelle
          </h2>
          <p>
            Maler Schnellmann, Silvan Schnellmann, Lauriedhofweg 8, 6300 Zug,
            Schweiz.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-[#1A1714] mb-2">
            Erhebung von Daten
          </h2>
          <p>
            Bei der Nutzung dieser Website werden automatisch technische Daten
            (IP-Adresse, Browser, Zugriffszeit) in Server-Logfiles erfasst.
            Diese Daten dienen ausschliesslich der technischen Verwaltung und
            werden nicht an Dritte weitergegeben.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-[#1A1714] mb-2">
            Kontaktformular
          </h2>
          <p>
            Wenn Sie uns per Kontaktformular eine Anfrage senden, werden die von
            Ihnen angegebenen Daten (Name, E-Mail, Telefon, Nachricht)
            ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet und nicht
            an Dritte weitergegeben.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-[#1A1714] mb-2">Google Maps</h2>
          <p>
            Diese Website verwendet Google Maps zur Darstellung einer Karte.
            Dabei werden Daten an Google LLC, 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA übertragen. Weitere Informationen
            finden Sie in der{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8551A] hover:underline"
            >
              Datenschutzerklärung von Google
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-[#1A1714] mb-2">Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
            Kontaktieren Sie uns unter den oben angegebenen Angaben.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-[#1A1714] mb-2">
            Anwendbares Recht
          </h2>
          <p>
            Es gilt Schweizer Datenschutzrecht (DSG). Bei Fragen wenden Sie
            sich an{" "}
            <a
              href="tel:+41417416502"
              className="text-[#C8551A] hover:underline"
            >
              041 741 65 02
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
