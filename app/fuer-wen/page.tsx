import type { Metadata } from "next"
import Link from "next/link"
import { Shield, CreditCard, HardHat, Calendar, ClipboardList, Stethoscope, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/content/locations"
import { createMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = createMetadata({
  title: "Für wen – Privat, Selbstzahler & BG",
  description:
    "Radiologie für Privatversicherte, Selbstzahler und Berufsgenossenschaften in Reutlingen. So läuft Ihr Besuch bei Diagnostiq ab.",
  path: "/fuer-wen",
})

const audiences = [
  {
    icon: Shield,
    title: "Privatversicherte",
    description:
      "Als Privatpatient profitieren Sie bei uns von einer direkten Terminvergabe – in der Regel innerhalb von 24 Stunden. Sie benötigen keine Überweisung. Alle Leistungen werden direkt mit Ihrer privaten Krankenversicherung abgerechnet.",
    benefits: [
      "Keine Überweisung notwendig",
      "Direkte Abrechnung mit der PKV",
      "Schnelle Terminvergabe",
      "Persönliche Befundbesprechung",
    ],
  },
  {
    icon: CreditCard,
    title: "Selbstzahler",
    description:
      "Auch als gesetzlich Versicherter können Sie alle unsere Leistungen als Selbstzahler in Anspruch nehmen. Wir beraten Sie vorab transparent zu den Kosten, die nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet werden.",
    benefits: [
      "Alle Leistungen zugänglich",
      "Transparente Kostenauskunft vorab",
      "Abrechnung nach GOÄ",
      "Keine Wartezeiten auf Kassentermine",
    ],
  },
  {
    icon: HardHat,
    title: "Berufsgenossenschaften (BG)",
    description:
      "Bei Arbeits- und Wegeunfällen bieten wir Ihnen schnelle Diagnostik mit direkter Abrechnung über die zuständige Berufsgenossenschaft. Bitte bringen Sie den Überweisungsschein oder D-Arzt-Bericht mit.",
    benefits: [
      "Schnelle Diagnostik bei Unfällen",
      "Abrechnung über die BG",
      "Überweisungsschein/D-Arzt-Bericht mitbringen",
      "Alle bildgebenden Verfahren verfügbar",
    ],
  },
]

const processSteps = [
  {
    icon: Calendar,
    title: "Termin buchen",
    description:
      "Buchen Sie Ihren Termin bequem online über Doctolib, per WhatsApp, telefonisch oder per E-Mail. In der Regel erhalten Sie innerhalb von 24 Stunden einen Termin.",
  },
  {
    icon: ClipboardList,
    title: "Vorbereitung",
    description:
      "Bei der Buchung informieren wir Sie, ob Sie etwas mitbringen müssen (z.B. Laborwerte, Vorbefunde). Kommen Sie einfach zur vereinbarten Zeit in unsere Praxis.",
  },
  {
    icon: Stethoscope,
    title: "Untersuchung",
    description:
      "Nach einem kurzen Vorgespräch führen wir die Untersuchung in ruhiger, angenehmer Atmosphäre durch. Modernste Geräte sorgen für präzise Ergebnisse.",
  },
  {
    icon: FileText,
    title: "Befund & Beratung",
    description:
      "Die Ergebnisse besprechen wir in der Regel direkt persönlich mit Ihnen. Den schriftlichen Befund und die Bilder erhalten Sie digital.",
  },
]

export default function FuerWenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Start", url: "https://www.diagnostiq.de" },
              { name: "Für wen", url: "https://www.diagnostiq.de/fuer-wen" },
            ])
          ),
        }}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Für wen
            </p>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">
              Ihre Radiologie – für alle, die Wert auf Qualität legen
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ob Privatversicherte, Selbstzahler oder über die Berufsgenossenschaft –
              bei Diagnostiq erwartet Sie präzise Diagnostik mit persönlicher Betreuung.
            </p>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border p-8 lg:p-10"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-primary mb-3">{item.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm text-primary/80">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="process-heading" className="text-2xl font-bold text-primary sm:text-3xl">
              So läuft es bei uns ab
            </h2>
            <p className="mt-4 text-muted-foreground">
              Von der Terminbuchung bis zum Befund – in vier einfachen Schritten.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-border h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-white text-sm font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="brand-gradient text-white border-0 shadow-lg hover:opacity-90 h-14 px-8"
            >
              <a href={companyInfo.doctolibUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt Termin buchen
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
