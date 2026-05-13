/**
 * Downloads site / app icons for portfolio project cards into public/logos/projects/.
 *
 * Run after changing scripts/project-logo-sources.json, then commit the generated files:
 *   npm run fetch-project-logos
 *
 * Not part of `npm run build` — remote hosts may block or change responses.
 */

import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const OUT_DIR = resolve(ROOT, 'public', 'logos', 'projects')
const MANIFEST = resolve(__dirname, 'project-logo-sources.json')

const UA =
  'Mozilla/5.0 (compatible; raul-alvarez-portfolio/1.0; +https://raul-alvarez.es) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

const TIMEOUT_MS = 25_000

interface SourceRow {
  logoId: string
  /** Page to scan for `<link rel="icon">` and `/favicon.ico`. */
  origin?: string
  /** Tried first (direct asset URLs when the site has no `<link rel="icon">` or origin is blocked). */
  prefetchUrls?: string[]
  /** If true and `origin` is a Play Store URL, prefer `og:image` from HTML when fetch succeeds. */
  playStoreAppIcon?: boolean
}

interface Manifest {
  sources: SourceRow[]
}

function extFromContentType(ct: string | null): string | null {
  if (!ct) return null
  const lower = ct.split(';')[0].trim().toLowerCase()
  if (lower === 'image/png') return '.png'
  if (lower === 'image/jpeg' || lower === 'image/jpg') return '.jpg'
  if (lower === 'image/webp') return '.webp'
  if (lower === 'image/svg+xml') return '.svg'
  if (lower === 'image/x-icon' || lower === 'image/vnd.microsoft.icon') return '.ico'
  return null
}

function extFromPath(pathname: string): string {
  const m = pathname.match(/\.(ico|png|jpg|jpeg|webp|svg)$/i)
  return m ? `.${m[1].toLowerCase()}` : ''
}

async function fetchBuffer(url: string): Promise<{ buf: Buffer; contentType: string | null; finalUrl: string }> {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: 'follow',
      headers: { 'User-Agent': UA, Accept: 'image/*,*/*;q=0.8' },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const ab = await res.arrayBuffer()
    return { buf: Buffer.from(ab), contentType: res.headers.get('content-type'), finalUrl: res.url }
  } finally {
    clearTimeout(t)
  }
}

async function fetchText(url: string): Promise<{ text: string; finalUrl: string }> {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: 'follow',
      headers: { 'User-Agent': UA, Accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8' },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const text = await res.text()
    return { text, finalUrl: res.url }
  } finally {
    clearTimeout(t)
  }
}

function extractOgImage(html: string): string | null {
  const m = html.match(/<meta[^>]+property=["']og:image["'][^>]*>/i)
  if (!m) return null
  const content = m[0].match(/content=["']([^"']+)["']/i)
  return content?.[1] ? content[1].replace(/&amp;/g, '&') : null
}

interface IconCandidate {
  href: string
  priority: number
}

function parseLinkIcons(html: string, pageUrl: string): IconCandidate[] {
  const base = new URL(pageUrl)
  const out: IconCandidate[] = []
  const linkTag = /<link\b[^>]*>/gi
  let m: RegExpExecArray | null
  while ((m = linkTag.exec(html))) {
    const tag = m[0]
    const relM = /\brel\s*=\s*["']([^"']+)["']/i.exec(tag)
    const hrefM = /\bhref\s*=\s*["']([^"']+)["']/i.exec(tag)
    if (!relM || !hrefM) continue
    const rel = relM[1].toLowerCase()
    const hrefRaw = hrefM[1].trim()
    if (!hrefRaw || hrefRaw.startsWith('data:')) continue

    let priority = 10
    if (rel.includes('apple-touch-icon')) priority = 0
    else if (rel.includes('mask-icon')) priority = 5
    else if (rel.includes('shortcut')) priority = 3
    else if (rel.includes('icon')) {
      priority = 2
      if (/type\s*=\s*["']image\/png["']/i.test(tag)) priority = 1
      if (/sizes\s*=\s*["'][^"']*192[^"']*["']/i.test(tag)) priority = 0.5
    } else continue

    let abs: string
    try {
      abs = new URL(hrefRaw, base).href
    } catch {
      continue
    }
    out.push({ href: abs, priority })
  }
  out.sort((a, b) => a.priority - b.priority)
  return out
}

async function discoverIconUrls(row: SourceRow): Promise<string[]> {
  const urls: string[] = []
  if (row.prefetchUrls?.length) {
    for (const u of row.prefetchUrls) {
      if (!urls.includes(u)) urls.push(u)
    }
  }

  if (!row.origin) return urls

  const { text, finalUrl } = await fetchText(row.origin)

  if (row.playStoreAppIcon) {
    const og = extractOgImage(text)
    if (og) {
      try {
        const abs = new URL(og, finalUrl).href
        if (!urls.includes(abs)) urls.push(abs)
      } catch {
        /* skip */
      }
    }
  }

  for (const c of parseLinkIcons(text, finalUrl)) {
    if (!urls.includes(c.href)) urls.push(c.href)
  }

  const fav = new URL('/favicon.ico', finalUrl).href
  if (!urls.includes(fav)) urls.push(fav)

  return urls
}

function pickExtension(url: string, contentType: string | null): string {
  try {
    const ext = extFromPath(new URL(url).pathname)
    if (ext) return ext
  } catch {
    /* */
  }
  return extFromContentType(contentType) ?? '.png'
}

async function saveLogo(logoId: string, tryUrls: string[]): Promise<void> {
  let lastErr: unknown
  for (const u of tryUrls) {
    try {
      const { buf, contentType, finalUrl } = await fetchBuffer(u)
      if (buf.length < 32) throw new Error('response too small')
      const ext = pickExtension(finalUrl, contentType)
      const filename = `${logoId}${ext}`
      const path = resolve(OUT_DIR, filename)
      writeFileSync(path, buf)
      console.log(`ok  ${logoId} <- ${u} (${buf.length}b) -> ${filename}`)
      return
    } catch (e) {
      lastErr = e
    }
  }
  throw new Error(`${logoId}: all candidates failed — last: ${String(lastErr)}`)
}

async function main(): Promise<void> {
  const allowMissing = process.argv.includes('--allow-missing')
  const raw = readFileSync(MANIFEST, 'utf8')
  const manifest = JSON.parse(raw) as Manifest
  mkdirSync(OUT_DIR, { recursive: true })

  const failures: string[] = []
  for (const row of manifest.sources) {
    if (!row.origin && !(row.prefetchUrls && row.prefetchUrls.length > 0)) {
      failures.push(`${row.logoId}: manifest row needs origin and/or prefetchUrls`)
      process.exitCode = 1
      continue
    }
    try {
      const candidates = await discoverIconUrls(row)
      await saveLogo(row.logoId, candidates)
    } catch (e) {
      const msg = `${row.logoId}: ${e instanceof Error ? e.message : String(e)}`
      console.error(`fail ${msg}`)
      failures.push(msg)
      if (!allowMissing) process.exitCode = 1
    }
  }

  if (failures.length && !allowMissing) {
    console.error(`\n${failures.length} failure(s). Fix manifest or use --allow-missing for partial assets.`)
    process.exit(1)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
