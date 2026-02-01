"use client"

import { Shield, CreditCard, HardHat, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const audiences = [
  {
    icon: Shield,
    title: "Privatversicherte",
    description:
      "Direkte Terminbuchung ohne Überweisung. Alle Leistungen werden direkt mit Ihrer privaten Krankenversicherung abgerechnet.",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: CreditCard,
    title: "Selbstzahler",
    description:
      "Auch als gesetzlich Versicherter haben Sie Zugang zu allen unseren Leistungen. Transparente Abrechnung nach GOÄ.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: HardHat,
    title: "Berufsgenossenschaften (BG)",
    description:
      "Bei Arbeits- und Wegeunfällen: schnelle Diagnostik und Abrechnung über die zuständige Berufsgenossenschaft.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function ForWhom() {
  return (
    <section className="py-28 bg-secondary relative overflow-hidden" aria-labelledby="for-whom-heading">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #AD66CB 0%, transparent 70%)" }}
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
            Für wen
          </p>
          <h2 id="for-whom-heading" className="text-3xl font-extrabold text-primary sm:text-5xl text-balance">
            Ihre Radiologie – für alle, die Wert auf Qualität legen
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {audiences.map((item) => (
            <motion.div
              key={item.title}
              className="group bg-white rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 card-glow relative overflow-hidden"
              variants={cardVariants}
            >
              {/* Subtle gradient glow on hover */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl`} />

              <div className="relative">
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/10 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <item.icon className="h-7 w-7 text-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/fuer-wen"
            className="inline-flex items-center text-base font-bold text-accent hover:underline group"
          >
            So läuft es bei uns ab
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
