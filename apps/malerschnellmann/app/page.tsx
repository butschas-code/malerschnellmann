import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Statement } from "@/components/home/Statement";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Ablauf } from "@/components/home/Ablauf";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";

export const metadata: Metadata = {
  title: "Startseite",
  description:
    "Maler Schnellmann Zug – mit Freude und Farbe unterwegs für Sie seit 25 Jahren. Malerarbeiten im Innen- und Aussenbereich, Kanton Zug.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Statement />
      <ServicesPreview />
      <Ablauf />
      <ReviewsPreview />
    </>
  );
}
