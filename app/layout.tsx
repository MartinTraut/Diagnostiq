import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CtaBar } from "@/components/layout/cta-bar"
import { getOrganizationSchema, getMedicalClinicSchema, getLocalBusinessSchema } from "@/lib/structured-data"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Diagnostiq – Radiologie Reutlingen | MRT & CT Privatpraxis",
    template: "%s | Diagnostiq Radiologie",
  },
  description:
    "Privatpraxis für Radiologie in Reutlingen. MRT, CT, Ganzkörper-MRT – präzise Diagnostik mit persönlicher Betreuung. Termin i.d.R. in 24h.",
  metadataBase: new URL("https://www.diagnostiq.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Diagnostiq – Radiologie Reutlingen | MRT & CT Privatpraxis",
    description:
      "Privatpraxis für Radiologie in Reutlingen. MRT, CT, Ganzkörper-MRT – präzise Diagnostik mit persönlicher Betreuung.",
    url: "https://www.diagnostiq.de",
    siteName: "Diagnostiq Radiologie",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/treated.webp",
        width: 1200,
        height: 630,
        alt: "Diagnostiq Radiologie Reutlingen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnostiq – Radiologie Reutlingen | MRT & CT Privatpraxis",
    description:
      "Privatpraxis für Radiologie in Reutlingen. MRT, CT, Ganzkörper-MRT – Termin i.d.R. in 24h.",
    images: ["/images/treated.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getMedicalClinicSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pb-16 lg:pb-0">{children}</main>
        <Footer />
        <CtaBar />
      </body>
    </html>
  )
}
