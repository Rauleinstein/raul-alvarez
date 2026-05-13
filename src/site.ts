/** Site identity — single source of truth for raul-alvarez.es */
export const SITE_URL = 'https://raul-alvarez.es' as const
export const SITE_HOST = 'raul-alvarez.es'
export const SITE_NAME = 'raul-alvarez'
export const DISPLAY_NAME = 'Raúl Álvarez Hinojosa'
export const EMAIL = 'me@raul-alvarez.es'
export const HANDLE = '@raulalhi'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/raulalvarezhinojosa/'
export const GITHUB_URL = 'https://github.com/Rauleinstein'

/** Upstream template this site was forked from */
export const FORK_SOURCE_URL = 'https://github.com/santifer/cv-santiago' as const
export const FORK_SOURCE_REPO = 'santifer/cv-santiago' as const

/** SameAs for JSON-LD */
export const socialSameAs: string[] = [LINKEDIN_URL, GITHUB_URL]
