import type { Metadata } from "next"
import { MapPin, Clock, Phone, Mail, MessageCircle, Construction, Check, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { locations, companyInfo } from "@/content/locations"
import { createMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = createMetadata({
  title: "Standorte – Reutlingen & Stuttgart (Coming Soon)",
  description:
    "Diagnostiq Radiologie in Reutlingen: Burkhardt+Weber-Straße 26. Neuer Standort Stuttgart ab April 2026. Barrierefrei, zentral gelegen.",
  path: "/standorte",
})

export default function StandortePage() {
  const reutlingen = locations.find((l) => l.slug === "reutlingen")!
  const stuttgart = locations.find((l) => l.slug === "stuttgart")!

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Start", url: "https://www.diagnostiq.de" },
              { name: "Standorte", url: "https://www.diagnostiq.de/standorte" },
            ])
          ),
        }}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Standorte
            </p>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">
              Radiologie in Ihrer Nähe
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Unsere Praxis in Reutlingen bietet das gesamte Spektrum moderner radiologischer
              Diagnostik. Ab April 2026 auch in Stuttgart.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Reutlingen */}
          <div className="rounded-2xl border border-accent/30 p-8 lg:p-12 shadow-sm">
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">{reutlingen.name}</h2>
                <p className="text-muted-foreground mt-1">Ihr Standort für MRT, CT und Prävention</p>
              </div>
              <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 text-sm px-4 py-1.5">
                Geöffnet
              </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary/50 mb-4">
                    Kontakt & Adresse
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{reutlingen.address.street}, {reutlingen.address.zip} {reutlingen.address.city}</span>
                    </div>
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <Clock className="h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{reutlingen.openingHours}</span>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                      <a href={`tel:${companyInfo.phoneClean}`} className="text-muted-foreground hover:text-accent transition-colors">
                        {reutlingen.phone}
                      </a>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                      <a href={`mailto:${companyInfo.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                        {reutlingen.email}
                      </a>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <MessageCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                      <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                        WhatsApp: {companyInfo.whatsappDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild className="brand-gradient text-white border-0 hover:opacity-90">
                    <a href={companyInfo.doctolibUrl} target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-4 w-4" />
                      Termin buchen
                    </a>
                  </Button>
                  {reutlingen.mapsUrl && (
                    <Button variant="outline" asChild>
                      <a href={reutlingen.mapsUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin className="mr-2 h-4 w-4" />
                        Route planen
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary/50 mb-4">
                  Leistungen & Ausstattung
                </h3>
                <ul className="space-y-3 mb-6">
                  {reutlingen.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-primary/80">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary/50 mb-4 mt-6">
                  Besonderheiten
                </h3>
                <ul className="space-y-3">
                  {reutlingen.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-primary/80">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stuttgart */}
          <div className="rounded-2xl border border-border bg-muted/30 p-8 lg:p-12">
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">{stuttgart.name}</h2>
                <p className="text-muted-foreground mt-1">MRT & CT – geplante Eröffnung {stuttgart.openingDate}</p>
              </div>
              <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200 text-sm px-4 py-1.5">
                Coming soon
              </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <Construction className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {stuttgart.description}
                  </p>
                </div>
                <div className="flex gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-muted-foreground/50" />
                  <span>{stuttgart.address.street}, {stuttgart.address.zip} {stuttgart.address.city}</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary/50 mb-4">
                  Geplante Ausstattung
                </h3>
                <ul className="space-y-3">
                  {stuttgart.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-primary/60">
                      <Check className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
