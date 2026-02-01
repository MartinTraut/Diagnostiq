"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { services } from "@/content/services"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function ServicesOverview() {
  return (
    <section className="py-28 bg-white relative overflow-hidden" aria-labelledby="services-heading">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #8666FC 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
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
            Unsere Leistungen
          </p>
          <h2 id="services-heading" className="text-3xl font-extrabold text-primary sm:text-5xl text-balance">
            Präzise Diagnostik für Ihre Gesundheit
          </h2>
          <p className="mt-6 text-lg text-foreground/60 leading-relaxed">
            Von der MRT ohne Strahlenbelastung über hochpräzise CT-Diagnostik bis zur
            umfassenden Ganzkörper-Vorsorge – immer mit persönlicher ärztlicher Beratung.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={cardVariants}>
              <Link
                href={`/leistungen/${service.slug}`}
                className="group block h-full rounded-2xl border border-border bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30 hover:-translate-y-2 card-glow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <span className="absolute bottom-4 left-5 text-white font-bold text-xl drop-shadow-lg">
                    {service.shortTitle}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-primary text-lg mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-bold text-accent group-hover:gap-3 transition-all duration-300">
                    Mehr erfahren
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
