import type { Metadata } from "next"

const BASE_URL = "https://www.diagnostiq.de"

export function createMetadata({
  title,
  description,
  path = "",
  image = "/images/treated.webp",
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
}): Metadata {
  const url = `${BASE_URL}${path}`

  return {
    title,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Diagnostiq Radiologie",
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${image}`],
    },
  }
}
