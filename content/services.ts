export interface ServiceArea {
  title: string
  slug: string
  items: string[]
}

export interface Service {
  title: string
  slug: string
  shortTitle: string
  description: string
  heroDescription: string
  image: string
  areas: ServiceArea[]
  metaTitle: string
  metaDescription: string
}

export const services: Service[] = [
  {
    title: "MRT – Magnetresonanztomographie",
    slug: "mrt",
    shortTitle: "MRT",
    description:
      "Hochauflösende Bildgebung ohne Strahlenbelastung – für präzise Diagnostik von Kopf bis Fuß.",
    heroDescription:
      "Unsere MRT-Untersuchungen nutzen modernste 3-Tesla-Technologie für detailreiche Aufnahmen – ganz ohne Strahlenbelastung. In ruhiger Atmosphäre erhalten Sie eine präzise Diagnostik mit persönlicher ärztlicher Beratung.",
    image: "/images/Wirbelsaeule.webp",
    areas: [
      {
        title: "Prostata mpMRT (PI-RADS)",
        slug: "prostata-mpmrt",
        items: [
          "Multiparametrische MRT der Prostata",
          "PI-RADS-Klassifikation zur Risikobewertung",
          "Frühzeitige Erkennung von Prostatakarzinomen",
          "Gezielte Biopsie-Planung",
        ],
      },
      {
        title: "Bewegungsapparat",
        slug: "bewegungsapparat",
        items: [
          "Gelenke (Knie, Schulter, Hüfte, Sprunggelenk)",
          "Wirbelsäule und Bandscheiben",
          "Sehnen, Bänder und Muskulatur",
          "Sportverletzungen und Überlastungsschäden",
        ],
      },
      {
        title: "Brust / Mamma-MRT",
        slug: "brust-mamma-mrt",
        items: [
          "Hochsensitive Brustdiagnostik",
          "Ergänzung zur Mammographie",
          "Implantatkontrolle",
          "Nachsorge und Früherkennung",
        ],
      },
      {
        title: "Herz & Gefäße (Kardio-MRT / Stress-MRT)",
        slug: "herz-gefaesse",
        items: [
          "Kardio-MRT zur Herzmuskelbeurteilung",
          "Stress-MRT (pharmakologische Belastung)",
          "Durchblutungsstörungen und Narbendiagnostik",
          "Gefäßdarstellung (MR-Angiographie)",
        ],
      },
      {
        title: "Onkologie & Organe",
        slug: "onkologie-organe",
        items: [
          "Leber, Nieren, Bauchspeicheldrüse",
          "Tumordiagnostik und Staging",
          "Therapiekontrolle und Nachsorge",
          "Ganzkörper-MRT in der Onkologie",
        ],
      },
      {
        title: "Mikrotherapie bei Rückenschmerzen",
        slug: "mikrotherapie",
        items: [
          "MRT-gesteuerte Schmerztherapie",
          "Periradikuläre Therapie (PRT)",
          "Facettengelenkinjektionen",
          "Minimalinvasiv, ambulant, präzise",
        ],
      },
    ],
    metaTitle: "MRT Reutlingen – Magnetresonanztomographie | Diagnostiq",
    metaDescription:
      "MRT in Reutlingen: Hochauflösende Bildgebung ohne Strahlung. Prostata-MRT, Kardio-MRT, Bewegungsapparat & mehr. Termin in 24h.",
  },
  {
    title: "CT – Computertomographie",
    slug: "ct",
    shortTitle: "CT",
    description:
      "Schnelle, hochpräzise Schnittbildgebung – für zeitkritische Diagnostik und gezielte Interventionen.",
    heroDescription:
      "Unsere CT-Untersuchungen liefern in Sekunden hochauflösende Schnittbilder. Mit modernster Dosisreduktion und persönlicher Befundung durch erfahrene Radiologen.",
    image: "/images/herz.webp",
    areas: [
      {
        title: "Herz & Gefäße",
        slug: "herz-gefaesse-ct",
        items: [
          "Kalkscore (Agatston-Score)",
          "CT-Koronarangiographie",
          "Herzinfarkt-Risikoabschätzung",
          "Aorta und periphere Gefäße",
        ],
      },
      {
        title: "Thorax / Lunge (Low-Dose-CT)",
        slug: "thorax-lunge",
        items: [
          "Lungenkrebs-Screening (Low-Dose)",
          "Lungenembolie-Ausschluss",
          "Interstitielle Lungenerkrankungen",
          "Mediastinum und Pleura",
        ],
      },
      {
        title: "Onkologie (Staging / Monitoring)",
        slug: "onkologie-ct",
        items: [
          "Tumorstaging und Ausbreitungsdiagnostik",
          "Therapiemonitoring (RECIST)",
          "Lymphknotenbeurteilung",
          "Nachsorgeuntersuchungen",
        ],
      },
      {
        title: "Abdomen / Becken",
        slug: "abdomen-becken",
        items: [
          "Bauchorgane (Leber, Nieren, Pankreas)",
          "Nierensteine und Harnwege",
          "Darmdiagnostik",
          "Beckenorgane",
        ],
      },
      {
        title: "Bewegungsapparat",
        slug: "bewegungsapparat-ct",
        items: [
          "Komplexe Frakturen und Knochendiagnostik",
          "Postoperative Kontrollen",
          "3D-Rekonstruktionen",
          "Wirbelsäule (Spondylolyse, Stenose)",
        ],
      },
      {
        title: "Schmerztherapie / Interventionen",
        slug: "schmerztherapie-ct",
        items: [
          "CT-gesteuerte Infiltrationstherapie",
          "Periradikuläre Therapie (PRT)",
          "Facettengelenkblockaden",
          "Punktionen und Drainagen",
        ],
      },
    ],
    metaTitle: "CT Reutlingen – Computertomographie | Diagnostiq",
    metaDescription:
      "CT in Reutlingen: Schnelle, hochpräzise Diagnostik. Kardio-CT, Low-Dose Lungen-CT, Schmerztherapie & Interventionen. Termin in 24h.",
  },
  {
    title: "Präventionsberatung & Ganzkörper-MRT",
    slug: "praevention-ganzkoerper-mrt",
    shortTitle: "Prävention",
    description:
      "Umfassende Vorsorge mit Ganzkörper-MRT und persönlicher ärztlicher Beratung – für Ihre Gesundheit von morgen.",
    heroDescription:
      "Unser Präventionsprogramm verbindet modernste Ganzkörper-MRT-Bildgebung mit einer ausführlichen ärztlichen Beratung. Erkennen Sie Risiken frühzeitig – bevor Symptome auftreten.",
    image: "/images/detected-early-img.webp",
    areas: [
      {
        title: "Ganzkörper-MRT",
        slug: "ganzkoerper-mrt",
        items: [
          "Kompletter Körperscan ohne Strahlenbelastung",
          "Früherkennung von Tumoren und Organveränderungen",
          "Gefäß- und Herzbeurteilung",
          "Wirbelsäule und Gelenke",
        ],
      },
      {
        title: "Ärztliche Beratung & Handlungsempfehlung",
        slug: "beratung",
        items: [
          "Ausführliches Arztgespräch nach der Untersuchung",
          "Individuelle Risikoanalyse",
          "Persönliche Handlungsempfehlungen",
          "Vernetzung mit Fachspezialisten bei Bedarf",
        ],
      },
    ],
    metaTitle: "Ganzkörper-MRT Reutlingen – Präventions-MRT | Diagnostiq",
    metaDescription:
      "Ganzkörper-MRT in Reutlingen zur Früherkennung. Umfassende Vorsorge mit ärztlicher Beratung. Jetzt Termin vereinbaren.",
  },
]
