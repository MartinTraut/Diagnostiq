export interface Location {
  name: string
  slug: string
  status: "active" | "coming-soon"
  address: {
    street: string
    zip: string
    city: string
  }
  phone?: string
  email?: string
  whatsapp?: string
  openingHours?: string
  services: string[]
  features: string[]
  mapsUrl?: string
  openingDate?: string
  description: string
}

export const locations: Location[] = [
  {
    name: "Diagnostiq Reutlingen",
    slug: "reutlingen",
    status: "active",
    address: {
      street: "Burkhardt+Weber-Straße 26",
      zip: "72760",
      city: "Reutlingen",
    },
    phone: "07121 355 2840",
    email: "anfrage@diagnostiq.de",
    whatsapp: "4915151506809",
    openingHours: "Mo–Fr 8:00–18:00 Uhr",
    services: ["MRT", "CT", "Ganzkörper-MRT", "Präventionsberatung", "Schmerztherapie"],
    features: [
      "Modernste 3-Tesla-MRT-Technologie",
      "Barrierefrei zugänglich",
      "Parkhaus direkt nebenan",
      "Termin in der Regel innerhalb von 24 Stunden",
    ],
    mapsUrl: "https://maps.app.goo.gl/iFHLU4uWPXmrJusNA",
    description:
      "Unser Standort in Reutlingen bietet Ihnen das gesamte Spektrum moderner radiologischer Diagnostik in ruhiger, angenehmer Atmosphäre.",
  },
  {
    name: "Diagnostiq Stuttgart",
    slug: "stuttgart",
    status: "coming-soon",
    address: {
      street: "Wannenstraße 16",
      zip: "70199",
      city: "Stuttgart",
    },
    services: ["MRT", "CT"],
    features: [
      "Barrierefrei geplant",
      "Modernste Gerätetechnik",
      "Zentrale Lage in Stuttgart",
    ],
    openingDate: "April 2026",
    description:
      "Unser neuer Standort in Stuttgart befindet sich derzeit im Aufbau. Ab April 2026 bieten wir Ihnen auch in Stuttgart modernste MRT- und CT-Diagnostik.",
  },
]

export const companyInfo = {
  name: "Diagnostiq Radiologie Team Ärzte GmbH",
  legalAddress: {
    street: "Wannenstraße 16",
    zip: "70199",
    city: "Stuttgart",
  },
  phone: "07121 / 355 2840",
  phoneClean: "071213552840",
  email: "anfrage@diagnostiq.de",
  whatsapp: "4915151506809",
  whatsappDisplay: "+49 151 515 06809",
  managingDirectors: ["Prof. Dr. med. Thomas Henzler", "Sebastian Dieterle"],
  doctolibUrl: "https://www.doctolib.de/radiologie-zentrum/reutlingen/diagnostiq",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=4915151506809&text&app_absent=0",
  instagramUrl: "https://www.instagram.com/diagnostiq_radiologie/",
  linkedinUrl: "https://www.linkedin.com/company/diagnostiq-radiologie-pr%C3%A4vention/",
  openingHours: "Mo–Fr 8:00–18:00 Uhr",
}
