import type { Metadata } from "next"
import { companyInfo } from "@/content/locations"
import { createMetadata } from "@/lib/metadata"

export const metadata: Metadata = createMetadata({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Diagnostiq Radiologie Team Ärzte GmbH.",
  path: "/datenschutz",
  noIndex: false,
})

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl mb-12">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              {companyInfo.name}
              <br />
              {companyInfo.legalAddress.street}
              <br />
              {companyInfo.legalAddress.zip} {companyInfo.legalAddress.city}
              <br />
              Telefon: {companyInfo.phone}
              <br />
              E-Mail:{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-accent hover:underline">
                {companyInfo.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch unserer Website werden automatisch Informationen durch den
              Browser übermittelt und in Server-Logfiles gespeichert. Diese Daten umfassen:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Verwendeter Browser und Betriebssystem</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            </ul>
            <p className="mt-2">
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung
              dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">
              3. Online-Terminbuchung über Doctolib
            </h2>
            <p>
              Für die Online-Terminbuchung nutzen wir den Dienst Doctolib. Bei der Buchung
              eines Termins werden personenbezogene Daten (z.B. Name, Kontaktdaten,
              Versicherungsstatus) an Doctolib übermittelt und dort verarbeitet. Doctolib
              verarbeitet diese Daten als Auftragsverarbeiter in unserem Auftrag und
              ausschließlich zum Zweck der Terminverwaltung.
            </p>
            <p className="mt-2">
              Weitere Informationen zum Datenschutz bei Doctolib finden Sie in der
              Datenschutzerklärung von Doctolib.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">
              4. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren, werden die von
              Ihnen übermittelten Daten (z.B. Name, Telefonnummer, E-Mail-Adresse,
              Nachrichteninhalt) zum Zweck der Bearbeitung Ihrer Anfrage gespeichert und
              verarbeitet. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">
              5. Cookies und Analyse-Tools
            </h2>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf
              Ihrem Endgerät gespeichert werden. Sie richten keinen Schaden an und
              enthalten keine Viren. Cookies dienen dazu, unser Angebot
              nutzerfreundlicher und effektiver zu gestalten.
            </p>
            <p className="mt-2">
              Wir verwenden Google Tag Manager zur Verwaltung von Website-Tags. Der
              Google Tag Manager selbst speichert keine personenbezogenen Daten.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">
              6. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
              Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder
              Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
              personenbezogene Daten können Sie sich jederzeit unter der im Impressum
              angegebenen Adresse an uns wenden.
            </p>
            <p className="mt-2">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Sie haben das Recht, Daten, die wir
              auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">
              7. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde im Falle
              datenschutzrechtlicher Verstöße zu beschweren. Zuständige Aufsichtsbehörde
              ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
              Baden-Württemberg.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">
              8. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung
              unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher
              Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
