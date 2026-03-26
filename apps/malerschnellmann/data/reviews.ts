export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  source: "google";
}

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Andrea M.",
    rating: 5,
    date: "2024-11-15",
    text: "Silvan und sein Team haben unsere Wohnung in Zug wunderschön gestrichen. Sehr sauber, pünktlich und die Qualität ist top. Besonders beeindruckt hat uns der Urlaubsservice – wir kamen nach Hause und alles war perfekt erledigt. Sehr empfehlenswert!",
    source: "google",
  },
  {
    id: "r2",
    author: "Thomas K.",
    rating: 5,
    date: "2024-09-03",
    text: "Hervorragende Arbeit an unserer Fassade. Silvan ist sehr professionell, berät kompetent und hält was er verspricht. Die Ausführung war einwandfrei und der Preis absolut fair. Wir werden Maler Schnellmann sicher wieder beauftragen.",
    source: "google",
  },
  {
    id: "r3",
    author: "Claudia B.",
    rating: 5,
    date: "2024-07-22",
    text: "Bin absolut begeistert! Das Team ist freundlich, arbeitet sehr ordentlich und das Ergebnis übertrifft alle Erwartungen. Die dekorativen Malerarbeiten im Wohnzimmer sind ein echter Hingucker. Danke Silvan!",
    source: "google",
  },
  {
    id: "r4",
    author: "Markus R.",
    rating: 5,
    date: "2024-05-10",
    text: "Top Handwerker. Silvan hat persönlich die Beratung übernommen und mir geholfen die richtige Farbe für unser Büro zu finden. Die Arbeit war schnell, sauber und das Resultat ist professionell. Klare Empfehlung!",
    source: "google",
  },
  {
    id: "r5",
    author: "Petra S.",
    rating: 5,
    date: "2024-03-18",
    text: "Wir haben Maler Schnellmann für die Renovation unseres Hauses engagiert. Innen- und Aussenarbeiten wurden professionell und mit viel Sorgfalt durchgeführt. Das Motto 'mit Freude und Farbe' spürt man wirklich in der Arbeit.",
    source: "google",
  },
  {
    id: "r6",
    author: "Stefan L.",
    rating: 5,
    date: "2024-01-29",
    text: "Schnell, zuverlässig und qualitativ hochwertig. Silvan ist ein echter Profi – er hat unsere Schimmelpilzprobleme fachgerecht behandelt und danach noch die Zimmer frisch gestrichen. Alles tiptop!",
    source: "google",
  },
  {
    id: "r7",
    author: "Monika F.",
    rating: 5,
    date: "2023-11-05",
    text: "Sehr empfehlenswert! Der Urlaubsservice ist genial – wir haben morgens die Schlüssel übergeben und abends hatten wir frisch renovierte Zimmer. Das Team hat sogar die Möbel wieder perfekt aufgestellt.",
    source: "google",
  },
  {
    id: "r8",
    author: "Daniel H.",
    rating: 4,
    date: "2023-09-14",
    text: "Sehr gute Arbeit an unserem Mehrfamilienhaus in Zug. Professionelle Beratung und saubere Ausführung. Leicht verzögert gestartet, aber dafür umso besser abgeliefert. Gerne wieder!",
    source: "google",
  },
];

export const averageRating =
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
