"use client"

import { Phone, MessageCircle, Calendar } from "lucide-react"
import { companyInfo } from "@/content/locations"

export function CtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      {/* Gradient top line */}
      <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #AD66CB, #8666FC, #64AAF1)" }} />
      <div className="bg-white/95 backdrop-blur-lg border-t border-border/50 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 divide-x divide-border/50">
          <a
            href={companyInfo.doctolibUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-3.5 text-accent hover:bg-accent/5 transition-colors active:bg-accent/10"
            aria-label="Termin buchen über Doctolib"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-bold">Termin</span>
          </a>
          <a
            href={companyInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-3.5 text-green-600 hover:bg-green-50 transition-colors active:bg-green-100"
            aria-label="WhatsApp Anfrage"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-bold">WhatsApp</span>
          </a>
          <a
            href={`tel:${companyInfo.phoneClean}`}
            className="flex flex-col items-center gap-1 py-3.5 text-primary hover:bg-secondary transition-colors active:bg-secondary/80"
            aria-label="Anrufen"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs font-bold">Anrufen</span>
          </a>
        </div>
      </div>
    </div>
  )
}
