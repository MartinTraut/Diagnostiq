import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, Check, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/content/services"
import { companyInfo } from "@/content/locations"
import { getBreadcrumbSchema } from "@/lib/structured-data"

const service = services.find((s) => s.slug === "praevention-ganzkoerper-mrt")!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "https://www.diagnostiq.de/leistungen/praevention-ganzkoerper-mrt" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "https://www.diagnostiq.de/leistungen/praevention-ganzkoerper-mrt",
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

export default function PraeventionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Start", url: "https://www.diagnostiq.de" },
              { name: "Leistungen", url: "https://www.diagnostiq.de/leistungen" },
              {
                name: "Prävention & Ganzkörper-MRT",
                url: "https://www.diagnostiq.de/leistungen/praevention-ganzkoerper-mrt",
              },
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
                    Beratungstermin buchen
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

      {/* Why prevention */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 mx-auto mb-6">
              <Heart className="h-7 w-7 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Früherkennung rettet Leben
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Viele Erkrankungen entwickeln sich schleichend und bleiben lange symptomlos.
              Mit unserem Präventionsprogramm erkennen Sie Risiken frühzeitig – in einer
              einzigen, umfassenden Untersuchung ohne Strahlenbelastung.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {service.areas.map((area) => (
              <div
                key={area.slug}
                className="rounded-2xl border border-border p-8 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">{area.title}</h3>
                <ul className="space-y-3">
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
            Ganzkörper-MRT in Reutlingen
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Vereinbaren Sie jetzt Ihren Beratungstermin für eine umfassende Vorsorge
            mit Ganzkörper-MRT und persönlicher ärztlicher Beratung.
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
