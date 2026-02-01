import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo, locations } from "@/content/locations"
import { createMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = createMetadata({
  title: "Kontakt – Termin, WhatsApp, Telefon",
  description:
    "Kontaktieren Sie Diagnostiq Radiologie Reutlingen: Online-Termin über Doctolib, WhatsApp, Telefon oder E-Mail. Mo–Fr 8–18 Uhr.",
  path: "/kontakt",
})

export default function KontaktPage() {
  const reutlingen = locations.find((l) => l.slug === "reutlingen")!

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Start", url: "https://www.diagnostiq.de" },
              { name: "Kontakt", url: "https://www.diagnostiq.de/kontakt" },
            ])
          ),
        }}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Kontakt
            </p>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">
              So erreichen Sie uns
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Buchen Sie Ihren Termin online, per WhatsApp, telefonisch oder per E-Mail.
              Wir sind werktags von 8:00 bis 18:00 Uhr für Sie erreichbar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* Doctolib */}
            <a
              href={companyInfo.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-md transition-all text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient mx-auto mb-4">
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <h2 className="font-semibold text-primary mb-1">Online buchen</h2>
              <p className="text-sm text-muted-foreground">Über Doctolib</p>
              <p className="text-xs text-accent mt-2 font-medium group-hover:underline">
                Termin vereinbaren
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border p-6 hover:border-green-300 hover:shadow-md transition-all text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 mx-auto mb-4">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <h2 className="font-semibold text-primary mb-1">WhatsApp</h2>
              <p className="text-sm text-muted-foreground">{companyInfo.whatsappDisplay}</p>
              <p className="text-xs text-green-600 mt-2 font-medium group-hover:underline">
                Nachricht senden
              </p>
            </a>

            {/* Telefon */}
            <a
              href={`tel:${companyInfo.phoneClean}`}
              className="group rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-md transition-all text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary mx-auto mb-4">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <h2 className="font-semibold text-primary mb-1">Telefon</h2>
              <p className="text-sm text-muted-foreground">{companyInfo.phone}</p>
              <p className="text-xs text-accent mt-2 font-medium group-hover:underline">
                Jetzt anrufen
              </p>
            </a>

            {/* E-Mail */}
            <a
              href={`mailto:${companyInfo.email}`}
              className="group rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-md transition-all text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 mx-auto mb-4">
                <Mail className="h-7 w-7 text-accent" />
              </div>
              <h2 className="font-semibold text-primary mb-1">E-Mail</h2>
              <p className="text-sm text-muted-foreground">{companyInfo.email}</p>
              <p className="text-xs text-accent mt-2 font-medium group-hover:underline">
                E-Mail schreiben
              </p>
            </a>
          </div>

          {/* Details */}
          <div className="rounded-2xl border border-border p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-semibold text-primary mb-6">
                  Standort Reutlingen
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-medium text-primary">{reutlingen.address.street}</p>
                      <p>{reutlingen.address.zip} {reutlingen.address.city}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-muted-foreground">
                    <Clock className="h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-medium text-primary">Öffnungszeiten</p>
                      <p>{companyInfo.openingHours}</p>
                    </div>
                  </div>
                </div>
                {reutlingen.mapsUrl && (
                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <a href={reutlingen.mapsUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin className="mr-2 h-4 w-4" />
                        In Google Maps öffnen
                      </a>
                    </Button>
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-6">
                  Social Media
                </h2>
                <div className="flex gap-4">
                  <a
                    href={companyInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border px-5 py-3 hover:border-accent/30 hover:shadow-sm transition-all"
                  >
                    <Instagram className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-primary">Instagram</span>
                  </a>
                  <a
                    href={companyInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border px-5 py-3 hover:border-accent/30 hover:shadow-sm transition-all"
                  >
                    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm font-medium text-primary">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
