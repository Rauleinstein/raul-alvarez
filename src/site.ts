/** Site identity — single source of truth for raul-alvarez.es */
export const SITE_URL = 'https://raul-alvarez.es' as const
export const SITE_HOST = 'raul-alvarez.es'
export const SITE_NAME = 'raul-alvarez'
export const DISPLAY_NAME = 'Raúl Álvarez Hinojosa'
export const EMAIL = 'me@raul-alvarez.es'
export const HANDLE = '@raulalhi'
export const GOOGLE_PLAY_DEVELOPER_ID = 'RaulAlHi' as const
export const GOOGLE_PLAY_DEVELOPER_URL =
  `https://play.google.com/store/apps/developer?id=${GOOGLE_PLAY_DEVELOPER_ID}` as const
export const LINKEDIN_URL = 'https://www.linkedin.com/in/raulalvarezhinojosa/'
export const GITHUB_URL = 'https://github.com/Rauleinstein'
export const CV_PDF_HREFS = {
  es: '/raul_alvarez_cv_es.pdf',
  en: '/raul_alvarez_cv.pdf',
} as const

export function getCvPdfHref(lang: keyof typeof CV_PDF_HREFS) {
  return CV_PDF_HREFS[lang]
}

/** Upstream template this site was forked from */
export const FORK_SOURCE_URL = 'https://github.com/santifer/cv-santiago' as const
export const FORK_SOURCE_REPO = 'santifer/cv-santiago' as const

/** SameAs for JSON-LD */
export const socialSameAs: string[] = [LINKEDIN_URL, GITHUB_URL]
