import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from "lucide-react"
import { companyInfo, locations } from "@/content/locations"

const footerNav = {
  leistungen: [
    { name: "MRT", href: "/leistungen/mrt" },
    { name: "CT", href: "/leistungen/ct" },
    { name: "Prävention & Ganzkörper-MRT", href: "/leistungen/praevention-ganzkoerper-mrt" },
    { name: "Alle Leistungen", href: "/leistungen" },
  ],
  praxis: [
    { name: "Team", href: "/team" },
    { name: "Für wen", href: "/fuer-wen" },
    { name: "FAQ", href: "/faq" },
    { name: "Standorte", href: "/standorte" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
}

export function Footer() {
  const reutlingen = locations.find((l) => l.slug === "reutlingen")!

  return (
    <footer className="bg-primary text-white relative overflow-hidden" role="contentinfo">
      {/* Gradient top border */}
      <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #AD66CB, #8666FC, #64AAF1)" }} />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse, #8666FC 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src="/images/logo.svg"
              alt="Diagnostiq"
              width={150}
              height={42}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="text-sm text-white/60 leading-relaxed">
              Radiologie neu definiert – Präzision trifft auf Menschlichkeit.
              Ihre Privatpraxis für Radiologie in Reutlingen.
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/70 transition-all duration-300 hover:bg-white/15 hover:text-white hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/70 transition-all duration-300 hover:bg-white/15 hover:text-white hover:scale-105"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {footerNav.leistungen.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Praxis */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
              Praxis
            </h3>
            <ul className="space-y-3">
              {footerNav.praxis.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="h-5 w-5 flex-shrink-0 text-white/40" />
                <span>
                  {reutlingen.address.street}
                  <br />
                  {reutlingen.address.zip} {reutlingen.address.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phoneClean}`}
                  className="flex gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-white/40" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-white/40" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Clock className="h-5 w-5 flex-shrink-0 text-white/40" />
                {companyInfo.openingHours}
              </li>
              <li>
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  <MessageCircle className="h-5 w-5 flex-shrink-0 text-white/40" />
                  WhatsApp: {companyInfo.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} {companyInfo.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {footerNav.rechtliches.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/35 hover:text-white/60 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
