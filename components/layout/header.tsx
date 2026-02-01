"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { companyInfo } from "@/content/locations"

const navigation = [
  { name: "Leistungen", href: "/leistungen" },
  { name: "Für wen", href: "/fuer-wen" },
  { name: "Team", href: "/team" },
  { name: "FAQ", href: "/faq" },
  { name: "Standorte", href: "/standorte" },
  { name: "Kontakt", href: "/kontakt" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Diagnostiq – Startseite">
            <Image
              src="/images/logo.svg"
              alt="Diagnostiq Radiologie"
              width={160}
              height={44}
              className={`h-8 w-auto lg:h-10 transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Hauptnavigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  scrolled
                    ? "text-primary hover:text-accent hover:bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={`font-semibold ${
                scrolled
                  ? "text-primary hover:text-accent hover:bg-secondary"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <a href={`tel:${companyInfo.phoneClean}`} aria-label="Anrufen">
                <Phone className="mr-1.5 h-4 w-4" />
                Anrufen
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={`font-semibold ${
                scrolled
                  ? "text-green-700 hover:text-green-800 hover:bg-green-50"
                  : "text-green-300 hover:text-green-200 hover:bg-white/10"
              }`}
            >
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Anfrage"
              >
                <MessageCircle className="mr-1.5 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="sm"
              asChild
              className="brand-gradient border-0 shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow font-bold text-sm px-5"
            >
              <a
                href={companyInfo.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-1.5 h-4 w-4" />
                Termin buchen
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className={`h-10 w-10 ${
                scrolled ? "text-accent" : "text-white"
              }`}
            >
              <a href={`tel:${companyInfo.phoneClean}`} aria-label="Anrufen">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 ${
                    scrolled ? "text-primary" : "text-white"
                  }`}
                  aria-label="Menü öffnen"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px] p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-5 border-b border-border">
                    <Image
                      src="/images/logo.svg"
                      alt="Diagnostiq"
                      width={130}
                      height={36}
                      className="h-8 w-auto"
                    />
                  </div>
                  <nav className="flex-1 px-4 py-6 space-y-1" aria-label="Mobile Navigation">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3.5 text-base font-semibold text-primary rounded-lg hover:bg-secondary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-5 space-y-3 border-t border-border bg-secondary/50">
                    <Button asChild className="w-full brand-gradient border-0 h-13 text-base font-bold shadow-lg">
                      <a
                        href={companyInfo.doctolibUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Termin buchen
                      </a>
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" asChild className="h-12 font-semibold text-primary">
                        <a href={`tel:${companyInfo.phoneClean}`}>
                          <Phone className="mr-1.5 h-4 w-4" />
                          Anrufen
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="h-12 font-semibold text-green-700 border-green-300 hover:bg-green-50">
                        <a
                          href={companyInfo.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-1.5 h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
