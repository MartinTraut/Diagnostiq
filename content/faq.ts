export interface FAQItem {
  question: string
  answer: string
  category: string
}

export const faqItems: FAQItem[] = [
  {
    question: "Brauche ich eine Überweisung?",
    answer:
      "Für Privatversicherte und Selbstzahler ist keine Überweisung erforderlich. Für Untersuchungen über die Berufsgenossenschaft (BG) benötigen wir einen Überweisungsschein oder D-Arzt-Bericht. Sie können direkt einen Termin bei uns buchen.",
    category: "Allgemein",
  },
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer:
      "In der Regel können wir Ihnen innerhalb von 24 Stunden einen Termin anbieten. Buchen Sie bequem online über Doctolib, per WhatsApp, telefonisch oder per E-Mail.",
    category: "Termin",
  },
  {
    question: "Welche Versicherungen werden akzeptiert?",
    answer:
      "Wir behandeln Privatversicherte, Selbstzahler (auch gesetzlich Versicherte) und Patienten der Berufsgenossenschaften (BG) bei Arbeits- und Wegeunfällen.",
    category: "Kosten",
  },
  {
    question: "Wie läuft eine MRT-Untersuchung ab?",
    answer:
      "Nach der Anmeldung führen wir ein kurzes Vorgespräch. Die eigentliche MRT-Untersuchung dauert je nach Region 20–45 Minuten. Sie liegen dabei bequem in unserem modernen MRT-Gerät. Anschließend besprechen wir die Ergebnisse persönlich mit Ihnen.",
    category: "Untersuchung",
  },
  {
    question: "Muss ich Laborwerte mitbringen?",
    answer:
      "Für bestimmte Untersuchungen mit Kontrastmittel benötigen wir aktuelle Nierenwerte (Kreatinin). Bitte bringen Sie, falls vorhanden, aktuelle Laborergebnisse mit. Bei der Terminbuchung informieren wir Sie, ob Laborwerte erforderlich sind.",
    category: "Vorbereitung",
  },
  {
    question: "Ist die Praxis barrierefrei?",
    answer:
      "Ja, unser Standort in Reutlingen ist barrierefrei zugänglich. Parkplätze befinden sich in direkter Nähe. Auch unser neuer Standort in Stuttgart wird barrierefrei gestaltet.",
    category: "Standort",
  },
  {
    question: "Wie erhalte ich meinen Befund?",
    answer:
      "Den Befund besprechen wir in der Regel direkt nach der Untersuchung persönlich mit Ihnen. Den schriftlichen Befund und die Bilder erhalten Sie digital und können auch an Ihren überweisenden Arzt übermittelt werden.",
    category: "Befund",
  },
  {
    question: "Kann ich als gesetzlich Versicherter kommen?",
    answer:
      "Ja, gesetzlich Versicherte können als Selbstzahler alle unsere Leistungen in Anspruch nehmen. Wir beraten Sie gerne vorab zu den Kosten. Bei Arbeits- oder Wegeunfällen erfolgt die Abrechnung über die Berufsgenossenschaft.",
    category: "Kosten",
  },
  {
    question: "Was kostet eine MRT-Untersuchung als Selbstzahler?",
    answer:
      "Die Kosten richten sich nach der untersuchten Region und werden nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet. Gerne informieren wir Sie vorab über die zu erwartenden Kosten – kontaktieren Sie uns einfach.",
    category: "Kosten",
  },
  {
    question: "Gibt es Parkplätze?",
    answer:
      "Ja, direkt neben unserem Standort in Reutlingen befindet sich ein Parkhaus. Die Anfahrt ist unkompliziert. Details finden Sie auf unserer Standortseite.",
    category: "Standort",
  },
]
