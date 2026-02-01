"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, HelpCircle } from "lucide-react"
import { faqItems } from "@/content/faq"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function FaqPreview() {
  const previewItems = faqItems.slice(0, 5)

  return (
    <section className="py-28 relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Split background: left image area dark, right content area light */}
      <div className="absolute inset-0 bg-secondary" />

      {/* Decorative accents */}
      <div
        className="absolute top-20 right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #8666FC 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-20 left-[5%] w-[200px] h-[200px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #AD66CB 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header - full width centered */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-12 h-1 rounded-full mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #AD66CB, #8666FC, #64AAF1)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Häufige Fragen
          </p>
          <h2 id="faq-heading" className="text-3xl font-extrabold text-primary sm:text-5xl text-balance">
            Wir beantworten Ihre Fragen
          </h2>
          <p className="mt-6 text-lg text-foreground/60 leading-relaxed">
            Von der Terminbuchung über den Ablauf bis zu den Kosten – hier finden Sie
            Antworten auf die häufigsten Fragen unserer Patienten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16 items-start">
          {/* Left column: Image + CTA */}
          <motion.div
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Image card with overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/faq-img.webp"
                  alt="Diagnostiq Beratung"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              </div>

              {/* Overlay card */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
                    <HelpCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{faqItems.length}+ Fragen</p>
                    <p className="text-white/70 text-sm">beantwortet</p>
                  </div>
                </div>
                <Link
                  href="/faq"
                  className="inline-flex items-center text-sm font-bold text-white hover:text-white/80 group/link mt-2"
                >
                  Alle Fragen anzeigen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right column: Accordion */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {previewItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="bg-white rounded-2xl border border-border px-6 data-[state=open]:shadow-xl data-[state=open]:shadow-accent/5 data-[state=open]:border-accent/30 transition-all duration-300 hover:border-accent/20 hover:shadow-md group/item"
                  >
                    <AccordionTrigger className="text-left text-[15px] font-semibold text-primary hover:text-accent py-5 hover:no-underline gap-4">
                      <span className="flex items-center gap-4">
                        <span
                          className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                          style={{ background: "linear-gradient(135deg, #AD66CB, #8666FC, #64AAF1)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{item.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/60 leading-relaxed pb-5 pl-12">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Mobile CTA */}
            <motion.div
              className="mt-8 text-center lg:text-left lg:hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/faq"
                className="inline-flex items-center text-base font-bold text-accent hover:underline group"
              >
                Alle {faqItems.length} Fragen anzeigen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
