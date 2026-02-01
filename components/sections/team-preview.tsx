"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { teamMembers } from "@/content/team"
import { motion } from "framer-motion"

export function TeamPreview() {
  return (
    <section className="py-28 bg-white relative overflow-hidden" aria-labelledby="team-heading">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full opacity-[0.03] -translate-y-1/2"
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
            Unser Team
          </p>
          <h2 id="team-heading" className="text-3xl font-extrabold text-primary sm:text-5xl text-balance">
            Persönlich geführt, wissenschaftlich fundiert
          </h2>
          <p className="mt-6 text-lg text-foreground/60 leading-relaxed">
            Bei Diagnostiq werden Sie von erfahrenen Spezialisten betreut, die modernste
            Diagnostik mit persönlicher Zuwendung verbinden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="group rounded-2xl border border-border bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 card-glow"
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" as const }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <p className="text-sm font-semibold text-accent mt-1">{member.title}</p>
                    <p className="text-sm text-foreground/50 mt-0.5">{member.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 ml-4">
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
                <p className="text-foreground/60 mt-4 leading-relaxed line-clamp-3">
                  {member.bio[0]}
                </p>
              </div>
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
            href="/team"
            className="inline-flex items-center text-base font-bold text-accent hover:underline group"
          >
            Mehr über unser Team
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
