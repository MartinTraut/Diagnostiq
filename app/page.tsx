import { Hero } from "@/components/sections/hero"
import { ServicesOverview } from "@/components/sections/services-overview"
import { ForWhom } from "@/components/sections/for-whom"
import { TeamPreview } from "@/components/sections/team-preview"
import { FaqPreview } from "@/components/sections/faq-preview"
import { LocationsPreview } from "@/components/sections/locations-preview"
import { CtaSection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ForWhom />
      <TeamPreview />
      <FaqPreview />
      <LocationsPreview />
      <CtaSection />
    </>
  )
}
