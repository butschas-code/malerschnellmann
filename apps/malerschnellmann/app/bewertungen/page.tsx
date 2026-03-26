import { reviews, averageRating } from "@/data/reviews";
import type { Metadata } from "next";
import { ReviewsContent } from "@/components/pages/ReviewsContent";

export const metadata: Metadata = {
  title: "Bewertungen",
  description:
    "Lesen Sie, was unsere Kunden über Maler Schnellmann Zug sagen. Google Bewertungen und Erfahrungsberichte.",
};

// JSON-LD for reviews
function ReviewsJsonLd() {
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Maler Schnellmann",
    url: "https://www.malerschnellmann.ch",
    telephone: "+41417416502",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lauriedhofweg 8",
      addressLocality: "Zug",
      postalCode: "6300",
      addressCountry: "CH",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      reviewCount: reviews.length,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
    />
  );
}

export default function BewertungenPage() {
  return (
    <>
      <ReviewsJsonLd />
      <ReviewsContent />
    </>
  );
}
