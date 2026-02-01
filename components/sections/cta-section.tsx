"use client"

import { Calendar, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/content/locations"
import { motion } from "framer-motion"

export function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden" aria-label="Termin vereinbaren">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-primary" />
      <motion.div
        className="absolute inset-0 brand-gradient opacity-90"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl drop-shadow-lg text-balance">
            Ihr Termin – in der Regel innerhalb von 24 Stunden
          </h2>
          <p className="mt-6 text-white/85 text-xl leading-relaxed font-medium">
            Buchen Sie jetzt Ihren Termin – online, per WhatsApp oder telefonisch.
            Wir freuen uns auf Sie.
          </p>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/95 h-14 px-10 text-lg font-bold shadow-xl rounded-xl"
              >
                <a
                  href={companyInfo.doctolibUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Online buchen (Doctolib)
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                asChild
                className="bg-white/10 border border-white/25 text-white hover:bg-white/20 hover:border-white/40 backdrop-blur-md h-14 px-10 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                asChild
                className="bg-white/10 border border-white/25 text-white hover:bg-white/20 hover:border-white/40 backdrop-blur-md h-14 px-10 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <a href={`tel:${companyInfo.phoneClean}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Anrufen
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-white/50 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Erreichbar werktags 8:00–18:00 Uhr
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
