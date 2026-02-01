import type { Metadata } from "next"
import { companyInfo } from "@/content/locations"
import { createMetadata } from "@/lib/metadata"

export const metadata: Metadata = createMetadata({
  title: "Impressum",
  description: "Impressum der Diagnostiq Radiologie Team Ärzte GmbH, Wannenstraße 16, 70199 Stuttgart.",
  path: "/impressum",
  noIndex: false,
})

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl mb-12">Impressum</h1>

        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              {companyInfo.name}
              <br />
              {companyInfo.legalAddress.street}
              <br />
              {companyInfo.legalAddress.zip} {companyInfo.legalAddress.city}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Vertreten durch</h2>
            <p>Geschäftsführer: {companyInfo.managingDirectors.join(", ")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Kontakt</h2>
            <p>
              Telefon: {companyInfo.phone}
              <br />
              E-Mail:{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-accent hover:underline">
                {companyInfo.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Arzt / Facharzt für Radiologie
              <br />
              Zuständige Kammer: Landesärztekammer Baden-Württemberg
              <br />
              Verliehen in: Bundesrepublik Deutschland
            </p>
            <p className="mt-2">
              Es gelten folgende berufsrechtliche Regelungen:
              <br />
              Berufsordnung der Landesärztekammer Baden-Württemberg
              <br />
              Heilberufe-Kammergesetz Baden-Württemberg
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Aufsichtsbehörde</h2>
            <p>Landesärztekammer Baden-Württemberg</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
              wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
              den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
              ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
              Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
              zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
