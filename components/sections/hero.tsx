"use client"

import { Calendar, MessageCircle, Clock, Shield, Accessibility } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/content/locations"
import { motion } from "framer-motion"

const trustItems = [
  { icon: Clock, label: "Termin i.d.R. in 24h" },
  { icon: Shield, label: "Privat & Selbstzahler" },
  { icon: Accessibility, label: "Barrierefrei" },
]

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden" aria-label="Willkommen bei Diagnostiq">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          aria-hidden="true"
        >
          <source src="/images/DIA_Header_Clip.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0818] via-[#0d0818]/60 to-[#0d0818]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0818]/70 via-[#0d0818]/20 to-transparent" />
      </div>

      {/* Decorative floating accent shapes */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #8666FC 0%, transparent 70%)" }}
        animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-[25%] w-40 h-40 rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, #64AAF1 0%, transparent 70%)" }}
        animate={{ y: [15, -15, 15], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated accent line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-10"
        style={{ background: "linear-gradient(90deg, #AD66CB, #8666FC, #64AAF1)" }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
      />

      {/* Content pinned to bottom */}
      <div className="relative w-full pb-24 pt-40 lg:pb-32 lg:pt-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Accent bar */}
            <motion.div
              className="w-16 h-1 rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #AD66CB, #8666FC, #64AAF1)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <motion.p
              className="text-sm font-bold uppercase tracking-[0.25em] text-white/70 mb-4 drop-shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Privatpraxis für Radiologie in Reutlingen
            </motion.p>

            <motion.h1
              className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] text-balance"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Radiologie neu definiert –{" "}
              <span className="brand-gradient-text drop-shadow-none">
                Präzision trifft auf Menschlichkeit.
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl font-medium drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Modernste MRT- und CT-Diagnostik in ruhiger Atmosphäre. Persönlich geführt,
              digital organisiert, mit Terminen in der Regel innerhalb von 24 Stunden.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  asChild
                  className="brand-gradient border-0 shadow-[0_4px_30px_rgba(134,102,252,0.4)] hover:shadow-[0_4px_50px_rgba(134,102,252,0.6)] transition-all duration-300 h-14 px-10 text-base font-bold rounded-xl"
                >
                  <a
                    href={companyInfo.doctolibUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Termin vereinbaren
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  asChild
                  className="h-14 px-10 text-base font-semibold bg-white/10 border border-white/25 text-white hover:bg-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 rounded-xl"
                >
                  <a
                    href={companyInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Anfrage
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6">
              {trustItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 text-sm font-medium text-white/85 drop-shadow-md"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + i * 0.15 }}
                >
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/15"
                    whileHover={{ scale: 1.15, backgroundColor: "rgba(134,102,252,0.25)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <item.icon className="h-4.5 w-4.5 text-white" />
                  </motion.div>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
          Scrollen
        </motion.span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
