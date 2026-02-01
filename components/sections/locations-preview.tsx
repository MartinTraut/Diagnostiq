"use client"

import { MapPin, Clock, Phone, ArrowRight, Construction } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { locations, companyInfo } from "@/content/locations"
import Link from "next/link"
import { motion } from "framer-motion"

export function LocationsPreview() {
  return (
    <section className="py-28 bg-white relative overflow-hidden" aria-labelledby="locations-heading">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #64AAF1 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
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
            Standorte
          </p>
          <h2 id="locations-heading" className="text-3xl font-extrabold text-primary sm:text-5xl">
            In Ihrer Nähe
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {locations.map((location, i) => (
            <motion.div
              key={location.slug}
              className={`rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
                location.status === "active"
                  ? "border-accent/20 bg-white shadow-sm card-glow"
                  : "border-border bg-muted/50 hover:shadow-md"
              }`}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Active location top gradient stripe */}
              {location.status === "active" && (
                <div className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: "linear-gradient(90deg, #AD66CB, #8666FC, #64AAF1)" }}
                />
              )}

              <div className="flex items-start justify-between mb-5">
                <h3 className="text-xl font-bold text-primary">{location.name}</h3>
                {location.status === "active" ? (
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-semibold">
                    <motion.span
                      className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Geöffnet
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200 font-semibold">
                    Coming soon
                  </Badge>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex gap-3 text-foreground/60">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span>
                    {location.address.street}, {location.address.zip} {location.address.city}
                  </span>
                </div>
                {location.openingHours && (
                  <div className="flex gap-3 text-foreground/60">
                    <Clock className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{location.openingHours}</span>
                  </div>
                )}
                {location.phone && (
                  <div className="flex gap-3 text-foreground/60">
                    <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                    <a href={`tel:${companyInfo.phoneClean}`} className="hover:text-accent transition-colors font-medium">
                      {location.phone}
                    </a>
                  </div>
                )}
                {location.openingDate && (
                  <div className="flex gap-3 text-foreground/60">
                    <Construction className="h-5 w-5 flex-shrink-0 text-amber-500" />
                    <span>Geplante Eröffnung: <strong>{location.openingDate}</strong></span>
                  </div>
                )}
              </div>

              <p className="text-foreground/60 leading-relaxed mb-6">
                {location.description}
              </p>

              {location.status === "active" && location.mapsUrl && (
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="outline" size="sm" asChild className="rounded-lg font-semibold">
                    <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-1.5 h-4 w-4" />
                      Route planen
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/standorte"
            className="inline-flex items-center text-base font-bold text-accent hover:underline group"
          >
            Alle Standortdetails
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
