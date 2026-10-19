import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import ArticleStub from '../src/ArticleStub'
import { articleRegistry } from '../src/articles/registry'
import { ARTICLE_STUB_BODIES } from '../src/articles/stub-content'
import { CASE_STUDY_NARRATIVES } from '../src/articles/case-study-narratives'

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message)
}

const ids = articleRegistry.map((article) => article.id)
assert(ids.length === 12, `Expected 12 project case studies, found ${ids.length}`)
assert(new Set(ids).size === ids.length, 'Article ids must be unique')
const slugs = articleRegistry.flatMap((article) => [article.slugs.es, article.slugs.en])
assert(slugs.length === 24, `Expected 24 localized routes, found ${slugs.length}`)
assert(new Set(slugs).size === slugs.length, 'Localized article routes must be unique')
assert(ids.includes('enrivo'), 'Enrivo must have a bilingual case-study route')
assert(
  JSON.stringify(Object.keys(ARTICLE_STUB_BODIES).sort()) === JSON.stringify([...ids].sort()),
  'Every case-study body must have a matching article route, and vice versa',
)
assert(
  JSON.stringify(Object.keys(CASE_STUDY_NARRATIVES).sort()) === JSON.stringify([...ids].sort()),
  'Every case-study narrative must have a matching article route, and vice versa',
)
const completeCopy = JSON.stringify({ bodies: ARTICLE_STUB_BODIES, narratives: CASE_STUDY_NARRATIVES })
assert(!/https?:\/\/(?:www\.)?esdrujula\.es/i.test(completeCopy), 'Do not link to Esdrujula’s compromised domain')
assert(!/play\.google\.com\/store\/apps\/details\?id=com\.raulalvarez\.munfordapp/i.test(completeCopy), 'Do not claim the unavailable Munford store listing')
const powermarkCopy = JSON.stringify({ body: ARTICLE_STUB_BODIES.powermark, narrative: CASE_STUDY_NARRATIVES.powermark })
assert(!/\b(?:65|90|94|97|9,500)\s?%?\b/.test(powermarkCopy), 'PowerMark copy must not publish unverified performance metrics')

// Atlantis has no accessible prototype image or repository; request an owner-supplied asset.
const screenshotExceptions = new Map([['atlantis', 'No public prototype screenshot was found']])

for (const id of ids) {
  for (const lang of ['es', 'en'] as const) {
    const body = ARTICLE_STUB_BODIES[id]?.[lang]
    assert(body, `${id} is missing ${lang} page copy`)
    const screenshots = body.screenshots ?? []
    assert(screenshots.length > 0 || screenshotExceptions.has(id), `${id} (${lang}) needs a project screenshot`)
    for (const screenshot of screenshots) {
      assert(screenshot.src.startsWith('/articles/'), `${id} (${lang}) screenshot must use a local article asset`)
      assert(screenshot.alt.trim(), `${id} (${lang}) screenshot needs alt text`)
      assert(screenshot.caption.trim(), `${id} (${lang}) screenshot needs a caption`)
    }
    const narrative = CASE_STUDY_NARRATIVES[id]?.[lang]
    assert(narrative, `${id} is missing ${lang} case narrative`)
    assert(narrative.heading.trim(), `${id} (${lang}) is missing its case-story heading`)
    assert(narrative.lead.trim(), `${id} (${lang}) is missing its case-story lead`)
    assert((narrative.sections?.length ?? 0) >= 3, `${id} (${lang}) needs at least three story sections`)
    for (const section of narrative.sections) {
      assert(section.title.trim(), `${id} (${lang}) has a story section without a title`)
      assert(section.body.trim(), `${id} (${lang}) has an empty story section`)
    }
  }
}

function renderArticle(slug: string, lang: 'es' | 'en') {
  return renderToStaticMarkup(
    createElement(
      MemoryRouter,
      { initialEntries: [`/${slug}`] },
      createElement(ArticleStub, { lang }),
    ),
  )
}

function screenshotGridClasses(markup: string, articleId: string) {
  const sectionStart = markup.indexOf(`aria-labelledby="stub-shots-${articleId}"`)
  assert(sectionStart >= 0, `${articleId} render must include its screenshot section`)
  const sectionEnd = markup.indexOf('</section>', sectionStart)
  const section = markup.slice(sectionStart, sectionEnd)
  const grid = section.match(/<div class="grid items-start gap-6([^"]*)">/)
  assert(grid, `${articleId} screenshot section must include its gallery grid`)
  return grid[1]
}

const enrivoHtml = renderArticle('enrivo', 'es')
assert(
  !screenshotGridClasses(enrivoHtml, 'enrivo').includes('md:grid-cols-2'),
  'A single screenshot should use the full article width, not leave an empty desktop column',
)
const cityhuntsHtml = renderArticle('cityhunts', 'es')
assert(
  screenshotGridClasses(cityhuntsHtml, 'cityhunts').includes('md:grid-cols-2'),
  'Multiple screenshots should retain the two-column desktop gallery',
)

console.log(`Validated ${ids.length} bilingual case studies and their story sections.`)
