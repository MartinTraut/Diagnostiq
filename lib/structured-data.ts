import { companyInfo, locations } from "@/content/locations"
import { faqItems } from "@/content/faq"

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Diagnostiq",
    legalName: companyInfo.name,
    url: "https://www.diagnostiq.de",
    logo: "https://www.diagnostiq.de/images/logo.svg",
    description:
      "Radiologie neu definiert – Präzision trifft auf Menschlichkeit. Privatpraxis für Radiologie in Reutlingen und Stuttgart.",
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.legalAddress.street,
      postalCode: companyInfo.legalAddress.zip,
      addressLocality: companyInfo.legalAddress.city,
      addressCountry: "DE",
    },
    sameAs: [companyInfo.instagramUrl, companyInfo.linkedinUrl],
    founder: companyInfo.managingDirectors.map((name) => ({
      "@type": "Person",
      name,
    })),
  }
}

export function getMedicalClinicSchema() {
  const reutlingen = locations.find((l) => l.slug === "reutlingen")!
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://www.diagnostiq.de/#medical-clinic",
    name: "Diagnostiq Radiologie Reutlingen",
    description:
      "Privatpraxis für Radiologie in Reutlingen. MRT, CT, Ganzkörper-MRT und Präventionsberatung.",
    url: "https://www.diagnostiq.de",
    telephone: reutlingen.phone,
    email: reutlingen.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: reutlingen.address.street,
      postalCode: reutlingen.address.zip,
      addressLocality: reutlingen.address.city,
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.4977,
      longitude: 9.2015,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    medicalSpecialty: "Radiology",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Magnetresonanztomographie (MRT)",
        procedureType: "Diagnostic",
      },
      {
        "@type": "MedicalProcedure",
        name: "Computertomographie (CT)",
        procedureType: "Diagnostic",
      },
      {
        "@type": "MedicalProcedure",
        name: "Ganzkörper-MRT",
        procedureType: "Diagnostic",
      },
    ],
    isAccessibleForFree: false,
    priceRange: "$$",
    image: "https://www.diagnostiq.de/images/treated.webp",
    logo: "https://www.diagnostiq.de/images/logo.svg",
  }
}

export function getPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Prof. Dr. med. Thomas Henzler",
    jobTitle: "Facharzt für Radiologie",
    description:
      "Universitätsprofessor und Facharzt für Radiologie. Ärztlicher Leiter der Diagnostiq Radiologie in Reutlingen.",
    medicalSpecialty: "Radiology",
    worksFor: {
      "@type": "MedicalClinic",
      name: "Diagnostiq Radiologie",
      url: "https://www.diagnostiq.de",
    },
    image: "https://www.diagnostiq.de/images/tomas-henzler.webp",
    url: "https://www.diagnostiq.de/team",
  }
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getLocalBusinessSchema() {
  const reutlingen = locations.find((l) => l.slug === "reutlingen")!
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.diagnostiq.de/#local-business",
    name: "Diagnostiq Radiologie Reutlingen",
    description:
      "Radiologie Reutlingen – MRT, CT, Ganzkörper-MRT. Privatpraxis mit Terminen in der Regel innerhalb von 24 Stunden.",
    url: "https://www.diagnostiq.de",
    telephone: reutlingen.phone,
    email: reutlingen.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: reutlingen.address.street,
      postalCode: reutlingen.address.zip,
      addressLocality: reutlingen.address.city,
      addressCountry: "DE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    image: "https://www.diagnostiq.de/images/treated.webp",
    logo: "https://www.diagnostiq.de/images/logo.svg",
  }
}
