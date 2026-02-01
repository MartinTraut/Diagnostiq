import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/content/services"
import { companyInfo } from "@/content/locations"
import { getBreadcrumbSchema } from "@/lib/structured-data"

const service = services.find((s) => s.slug === "ct")!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "https://www.diagnostiq.de/leistungen/ct" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "https://www.diagnostiq.de/leistungen/ct",
    siteName: "Diagnostiq Radiologie",
    locale: "de_DE",
    type: "website",
    images: [{ url: `https://www.diagnostiq.de${service.image}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: service.metaTitle,
    description: service.metaDescription,
  },
}

export default function CTPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Start", url: "https://www.diagnostiq.de" },
              { name: "Leistungen", url: "https://www.diagnostiq.de/leistungen" },
              { name: "CT", url: "https://www.diagnostiq.de/leistungen/ct" },
            ])
          ),
        }}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <Link
                href="/leistungen"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-4"
              >
                <ArrowRight className="mr-1 h-4 w-4 rotate-180" />
                Alle Leistungen
              </Link>
              <h1 className="text-4xl font-bold text-primary sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {service.heroDescription}
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  asChild
                  className="brand-gradient text-white border-0 shadow-lg hover:opacity-90 transition-opacity h-14 px-8"
                >
                  <a href={companyInfo.doctolibUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    CT-Termin buchen
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-12 text-center">
            CT-Untersuchungen im Überblick
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.areas.map((area) => (
              <div
                key={area.slug}
                className="rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            CT-Termin in Reutlingen vereinbaren
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Schnelle CT-Diagnostik mit persönlicher ärztlicher Befundung.
            In der Regel innerhalb von 24 Stunden.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="brand-gradient text-white border-0 shadow-lg hover:opacity-90 h-14 px-8"
            >
              <a href={companyInfo.doctolibUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Online buchen
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
