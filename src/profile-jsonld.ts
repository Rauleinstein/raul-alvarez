import { DISPLAY_NAME, EMAIL, SITE_URL, socialSameAs } from './site'

/** Shared ProfilePage + Person JSON-LD for About and prerender */
export const aboutProfilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateModified: '2026-05-12',
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: DISPLAY_NAME,
    alternateName: ['Raúl Alvarez', 'Rauleinstein'],
    url: SITE_URL,
    image: `${SITE_URL}/raul-alvarez.png`,
    email: EMAIL,
    jobTitle: ['AI Architect', 'AI Solutions Engineer', 'Head of AI Architecture @ Aircury'],
    knowsAbout: [
      { '@type': 'Thing', name: 'Artificial intelligence', url: 'https://en.wikipedia.org/wiki/Artificial_intelligence' },
      { '@type': 'Thing', name: 'Large language model', url: 'https://en.wikipedia.org/wiki/Large_language_model' },
      { '@type': 'Thing', name: 'Retrieval-augmented generation' },
      { '@type': 'Thing', name: 'Optical character recognition' },
      { '@type': 'Thing', name: 'Natural language processing' },
      { '@type': 'Thing', name: 'Digital asset custody' },
      { '@type': 'Thing', name: 'Role-based access control' },
      { '@type': 'SoftwareApplication', name: 'React', url: 'https://react.dev' },
      { '@type': 'SoftwareApplication', name: 'Vue.js', url: 'https://vuejs.org' },
      { '@type': 'SoftwareApplication', name: 'Node.js', url: 'https://nodejs.org' },
      { '@type': 'SoftwareApplication', name: 'Amazon Web Services', url: 'https://aws.amazon.com' },
      { '@type': 'SoftwareApplication', name: 'Kubernetes', url: 'https://kubernetes.io' },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'C2 English Certificate',
        recognizedBy: { '@type': 'Organization', name: 'Trinity College London' },
        url: 'https://certificates.trinitycollege.com/8d6399ec-8c00-4db3-90bb-b9d23981d648',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Professional Scrum Master',
        recognizedBy: { '@type': 'Organization', name: 'Scrum.org' },
        url: 'https://www.scrum.org/',
      },
    ],
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'Universidad de Granada — ETSIIT', address: { '@type': 'PostalAddress', addressLocality: 'Granada', addressCountry: 'ES' } },
    ],
    sameAs: socialSameAs,
    address: { '@type': 'PostalAddress', addressLocality: 'Granada', addressCountry: 'ES' },
  },
} as const
