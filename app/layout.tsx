import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { CookieBanner } from "@/components/shared/CookieBanner";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Maler Schnellmann Zug | Maler für Innen und Aussen",
    template: "%s | Maler Schnellmann",
  },
  description:
    "Mit Freude und Farbe unterwegs für Sie. Allgemeine Malerarbeiten im Innen- und Aussenbereich, Denkmalpflege, dekorative Beschichtungen, Graffiti-/Vogelschutz und Urlaubsservice im Kanton Zug und der ganzen Schweiz.",
  keywords: [
    "Maler Zug",
    "Malerarbeiten Zug",
    "Maler Schnellmann",
    "Innenanstrich Zug",
    "Fassadenanstrich Zug",
    "Denkmalpflege Zug",
    "Maler Kanton Zug",
  ],
  openGraph: {
    title: "Maler Schnellmann Zug | Maler für Innen und Aussen",
    description: "Mit Freude und Farbe unterwegs für Sie – seit 25 Jahren.",
    url: "https://www.malerschnellmann.ch",
    siteName: "Maler Schnellmann",
    locale: "de_CH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.malerschnellmann.ch",
  name: "Maler Schnellmann",
  description:
    "Mit Freude und Farbe unterwegs für Sie. Malerarbeiten im Innen- und Aussenbereich, Denkmalpflege, Graffiti-/Vogelschutz, Urlaubsservice.",
  url: "https://www.malerschnellmann.ch",
  telephone: "+41417416502",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lauriedhofweg 8",
    addressLocality: "Zug",
    postalCode: "6300",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.1661,
    longitude: 8.5161,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  priceRange: "CHF",
  image: "https://www.malerschnellmann.ch/images/logo.png",
  founder: {
    "@type": "Person",
    name: "Silvan Schnellmann",
    jobTitle: "Geschäftsführer & Inhaber",
  },
  areaServed: {
    "@type": "State",
    name: "Kanton Zug",
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Maler+Schnellmann+Zug",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-CH"
      className={`${dmSerifDisplay.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFAF6] text-[#1A1714] antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
