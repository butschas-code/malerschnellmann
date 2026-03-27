export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  items?: string[];
}

export const services: Service[] = [
  {
    id: "malerarbeiten",
    number: "01",
    title: "Malerarbeiten Innen & Aussen",
    description:
      "Kompetente Ausführung aller Malerarbeiten – vom Erstanstrich bis zur kompletten Renovierung. Innen wie aussen, für Private und Gewerbe.",
    items: [
      "Allgemeine Malerarbeiten im Innen- und Aussenbereich",
      "Beschichtungen aller Art",
      "Dekorative Malerarbeiten",
      "Lasurarbeiten und Holzschutz",
    ],
  },
  {
    id: "dekorativ",
    number: "02",
    title: "Dekorative Beschichtungen",
    description:
      "Gestalterische Malerarbeiten, die Räume zum Leben erwecken. Individuelle Farbkonzepte, Spachteltechniken und besondere Wandgestaltungen.",
    items: [
      "Dekorative Wandgestaltung",
      "Betonkosmetik",
      "Bodenbeschichtungen",
      "Bodenmarkierungen",
    ],
  },
  {
    id: "denkmalpflege",
    number: "03",
    title: "Denkmalpflege",
    description:
      "Fachgerechte Restaurierung und Pflege historischer Bausubstanz. Mit dem nötigen Respekt vor der Geschichte und modernsten Methoden.",
    items: [
      "Restaurierungsarbeiten",
      "Historisch korrekte Farbgebung",
      "Schadstoffsanierung",
    ],
  },
  {
    id: "schutz",
    number: "04",
    title: "Graffiti- & Vogelschutz",
    description:
      "Professionelle Schutzsysteme gegen Vandalismus und Taubenbefall. Langfristige Lösungen für Fassaden und Flächen.",
    items: [
      "Graffiti-Schutzversiegelung",
      "Anti-Graffiti-Behandlung",
      "Vogelschutzinstallationen",
    ],
  },
  {
    id: "schimmel",
    number: "05",
    title: "Schimmelpilzbehandlung",
    description:
      "Fachgerechte Diagnose und Beseitigung von Schimmelpilz. Nachhaltige Behandlung, die das Problem dauerhaft löst – nicht nur kaschiert.",
    items: [
      "Schimmelpilzdiagnose",
      "Professionelle Sanierung",
      "Nachhaltige Schutzbehandlung",
    ],
  },
  {
    id: "urlaubsservice",
    number: "06",
    title: "Urlaubsservice",
    description:
      "Renovierung während Ihrer Abwesenheit – Sie reisen ab, wir machen Ihr Zuhause schön. Kein Schmutz, kein Lärm, kein Stress. Sie kehren zurück in ein frisch renoviertes Ambiente.",
    items: [
      "Möbel rücken und abdecken",
      "Malerarbeiten während Ihrer Abwesenheit",
      "Reinigung und Aufräumen nach Abschluss",
      "Optional: Pflanzen giessen, Briefkasten leeren, Haustierpflege",
    ],
  },
];

export const ablauf = [
  {
    step: "01",
    title: "Beratung",
    description:
      "Silvan Schnellmann kommt persönlich zu Ihnen. Wir besprechen Ihre Wünsche, begutachten die Situation und finden gemeinsam das perfekte Farbkonzept.",
  },
  {
    step: "02",
    title: "Offerte",
    description:
      "Sie erhalten eine transparente, detaillierte Offerte – ohne versteckte Kosten. Klare Termine, klare Leistungen.",
  },
  {
    step: "03",
    title: "Ausführung",
    description:
      "Unser Team führt die Arbeiten sauber, pünktlich und mit höchster Sorgfalt aus. Bis zur letzten Pinselstroh.",
  },
];
