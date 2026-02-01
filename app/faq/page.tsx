import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqItems } from "@/content/faq"
import { companyInfo } from "@/content/locations"
import { createMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data"

export const metadata: Metadata = createMetadata({
  title: "FAQ – Häufige Fragen zur Radiologie",
  description:
    "Antworten auf häufige Fragen: Überweisung, Kosten, Ablauf, Laborwerte und mehr. Diagnostiq Radiologie Reutlingen.",
  path: "/faq",
})

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Start", url: "https://www.diagnostiq.de" },
              { name: "FAQ", url: "https://www.diagnostiq.de/faq" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema()),
        }}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Häufige Fragen
            </p>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">
              Wir beantworten Ihre Fragen
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Alles, was Sie vor Ihrem Besuch bei Diagnostiq wissen sollten – von der
              Terminbuchung über den Ablauf bis zu den Kosten.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border px-6 data-[state=open]:shadow-sm data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left font-medium text-primary hover:text-accent py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary">
            Noch Fragen? Wir helfen gerne.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Kontaktieren Sie uns per WhatsApp, telefonisch oder per E-Mail.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="brand-gradient text-white border-0 shadow-lg hover:opacity-90 h-14 px-8"
            >
              <a href={companyInfo.doctolibUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Termin buchen
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-green-700 border-green-200 hover:bg-green-50">
              <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
