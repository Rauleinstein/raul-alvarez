/** Only the unqualified homepage is eligible. Explicit routes and manual choices win. */
export function getAutomaticLanguagePath(
  pathname: string,
  languages: readonly string[],
  timeZone: string,
  hasManualChoice: boolean,
): '/en' | null {
  if (pathname !== '/' || hasManualChoice) return null
  const ukTimeZones = ['Europe/London', 'Europe/Belfast', 'GB', 'GB-Eire']
  const prefersEnglish = languages[0]?.toLowerCase().split('-')[0] === 'en'
  return ukTimeZones.includes(timeZone) || prefersEnglish ? '/en' : null
}
