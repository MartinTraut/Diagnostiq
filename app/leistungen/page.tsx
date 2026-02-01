import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { services } from "@/content/services"
import { createMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = createMetadata({
  title: "Leistungen – MRT, CT & Prävention | Diagnostiq Reutlingen",
  description:
    "MRT, CT und Ganzkörper-MRT in Reutlingen. Modernste Diagnostik mit persönlicher Betreuung. Alle Leistungen im Überblick.",
  path: "/leistungen",
})

export default function LeistungenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Start", url: "https://www.diagnostiq.de" },
              { name: "Leistungen", url: "https://www.diagnostiq.de/leistungen" },
            ])
          ),
        }}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Unsere Leistungen
            </p>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">
              Modernste Diagnostik für präzise Antworten
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Von der MRT ohne Strahlenbelastung über schnelle CT-Diagnostik bis zur
              umfassenden Ganzkörper-Vorsorge – bei Diagnostiq in Reutlingen erwartet Sie
              präzise Bildgebung mit persönlicher ärztlicher Beratung.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {service.heroDescription}
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.areas.map((area) => (
                      <div
                        key={area.slug}
                        className="flex items-start gap-2 text-sm text-primary/80"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {area.title}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="inline-flex items-center mt-6 text-sm font-medium text-accent hover:underline"
                  >
                    {service.shortTitle} im Detail
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
