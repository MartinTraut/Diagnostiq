export interface TeamMember {
  name: string
  title: string
  role: string
  image: string
  bio: string[]
  highlights: string[]
}

export const teamMembers: TeamMember[] = [
  {
    name: "Prof. Dr. med. Thomas Henzler",
    title: "Facharzt für Radiologie",
    role: "Ärztlicher Leiter & Geschäftsführer",
    image: "/images/tomas-henzler.webp",
    bio: [
      "Prof. Dr. med. Thomas Henzler ist Facharzt für Radiologie mit langjähriger Erfahrung in der diagnostischen und interventionellen Bildgebung. Als Universitätsprofessor verbindet er wissenschaftliche Exzellenz mit patientennaher Diagnostik.",
      "Seine Schwerpunkte liegen in der kardiovaskulären Bildgebung, der onkologischen Diagnostik und der muskuloskelettalen Radiologie. Er ist Autor zahlreicher wissenschaftlicher Publikationen und international anerkannter Experte auf seinem Gebiet.",
    ],
    highlights: [
      "Universitätsprofessor für Radiologie",
      "Schwerpunkt: Kardiovaskuläre & onkologische Bildgebung",
      "Zahlreiche wissenschaftliche Publikationen",
      "International anerkannter Experte",
      "Persönliche Befundung und Beratung",
    ],
  },
  {
    name: "Sebastian Dieterle",
    title: "Geschäftsführer",
    role: "Organisation & Digitalisierung",
    image: "/images/sebastian-dieterle.webp",
    bio: [
      "Sebastian Dieterle verantwortet die organisatorische und digitale Weiterentwicklung von Diagnostiq. Sein Fokus liegt auf der Schaffung effizienter Abläufe und einer exzellenten Patientenerfahrung – von der Online-Terminbuchung bis zur digitalen Befundübermittlung.",
      "Mit seiner Expertise in Praxismanagement und Digitalisierung sorgt er dafür, dass modernste Medizintechnik und reibungslose Prozesse Hand in Hand gehen.",
    ],
    highlights: [
      "Praxismanagement & Prozessoptimierung",
      "Digitalisierung der Patientenerfahrung",
      "Online-Terminbuchung & digitale Abläufe",
      "Effiziente Organisation für kurze Wartezeiten",
    ],
  },
]
