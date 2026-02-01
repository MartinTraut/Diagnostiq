import type { Metadata } from "next"
import Image from "next/image"
import { Check } from "lucide-react"
import { teamMembers } from "@/content/team"
import { createMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema, getPhysicianSchema } from "@/lib/structured-data"

export const metadata: Metadata = createMetadata({
  title: "Team – Prof. Dr. Henzler & Sebastian Dieterle",
  description:
    "Lernen Sie das Team hinter Diagnostiq kennen: Prof. Dr. Thomas Henzler (Facharzt für Radiologie) und Sebastian Dieterle (Geschäftsführer).",
  path: "/team",
})

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Start", url: "https://www.diagnostiq.de" },
              { name: "Team", url: "https://www.diagnostiq.de/team" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPhysicianSchema()),
        }}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Unser Team
            </p>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">
              Persönlich geführt, wissenschaftlich fundiert
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Hinter Diagnostiq stehen Menschen, die Radiologie neu denken: mit Präzision,
              Empathie und dem Anspruch, Ihnen die bestmögliche Diagnostik zu bieten.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-start ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                    {member.name}
                  </h2>
                  <p className="text-accent font-medium mt-1">{member.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{member.role}</p>

                  <div className="mt-6 space-y-4">
                    {member.bio.map((paragraph, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary/50 mb-4">
                      Schwerpunkte & Qualifikationen
                    </h3>
                    <ul className="space-y-3">
                      {member.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-sm text-primary/80">
                          <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
