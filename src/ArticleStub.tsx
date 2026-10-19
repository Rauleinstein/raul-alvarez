import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { articleRegistry, type ArticleConfig } from './articles/registry'
import { ARTICLE_STUB_BODIES } from './articles/stub-content'
import { CASE_STUDY_NARRATIVES } from './articles/case-study-narratives'
import { useArticleSeo } from './articles/use-article-seo'
import { buildArticleJsonLd } from './articles/json-ld'
import { ArticleLayout, ArticleHeader, ArticleFooter, FaqSection, ArticleFigure } from './articles/components'
import { LINKEDIN_URL } from './site'

function parseBold(text: string): React.ReactNode[] {
  return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-primary font-semibold">{part}</strong> : part
  )
}

function ArticleStubLoaded({ lang, article }: { lang: 'es' | 'en'; article: ArticleConfig }) {
  const body = ARTICLE_STUB_BODIES[article.id][lang]
  const narrative = CASE_STUDY_NARRATIVES[article.id][lang]
  const seoMeta = article.seoMeta!

  const jsonLd = useMemo(() => {
    const url = `https://raul-alvarez.es/${article.slugs[lang]}`
    const altUrl = `https://raul-alvarez.es/${article.slugs[lang === 'es' ? 'en' : 'es']}`
    const articleSeo = article.seo[lang]
    return buildArticleJsonLd({
      lang,
      url,
      altUrl,
      headline: article.titles[lang],
      alternativeHeadline: articleSeo.title,
      description: articleSeo.description,
      datePublished: seoMeta.datePublished,
      dateModified: seoMeta.dateModified,
      keywords: [...seoMeta.keywords],
      images: seoMeta.images,
      breadcrumbHome: lang === 'es' ? 'Inicio' : 'Home',
      breadcrumbCurrent: article.titles[lang],
      faq: body.faq,
      articleType: seoMeta.articleType,
      about: seoMeta.about,
      extra: seoMeta.extra,
      citation: seoMeta.citation,
      isBasedOn: seoMeta.isBasedOn,
      mentions: seoMeta.mentions,
      discussionUrl: seoMeta.discussionUrl,
      relatedLink: seoMeta.relatedLink,
    })
  }, [article, body, lang, seoMeta])

  const ogImage = article.ogImage ?? 'https://raul-alvarez.es/og-image.webp'

  useArticleSeo({
    lang,
    slug: article.slugs[lang],
    altSlug: article.slugs[lang === 'es' ? 'en' : 'es'],
    title: article.seo[lang].title,
    description: article.seo[lang].description,
    image: ogImage,
    publishedTime: seoMeta.datePublished,
    modifiedTime: seoMeta.dateModified,
    articleTags: seoMeta.articleTags,
    jsonLd,
    xDefaultSlug: article.xDefaultSlug ?? article.slugs.es,
  })

  const readingText = [
    body.intro,
    body.cta,
    narrative.lead,
    ...narrative.sections.map((section) => `${section.title} ${section.body}`),
    body.architectureHeading ?? '',
    body.architectureIntro ?? '',
    ...(body.architecture ?? []).map((section) => `${section.title} ${section.description}`),
    body.screenshotsHeading ?? '',
    ...(body.screenshots ?? []).map((screenshot) => `${screenshot.title ?? ''} ${screenshot.description ?? ''} ${screenshot.caption}`),
    ...body.faq.map((item) => `${item.q} ${item.a}`),
  ].join(' ')
  const readingMinutes = Math.max(2, Math.ceil(readingText.trim().split(/\s+/).length / 220))
  const reading = lang === 'es' ? `${readingMinutes} min` : `${readingMinutes} min read`

  return (
    <ArticleLayout lang={lang}>
      <ArticleHeader
        editorId={`article-stub-${article.id}`}
        kicker={body.kicker}
        h1={article.titles[lang]}
        subtitle={body.subtitle ?? (lang === 'es' ? 'Resumen ejecutivo del caso técnico.' : 'Executive summary of the case study.')}
        date={seoMeta.dateModified}
        dateISO={seoMeta.dateModified}
        readingTime={reading}
        authorUrl={LINKEDIN_URL}
        lang={lang}
      />

      <div className="prose prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
        <p>{parseBold(body.intro)}</p>
      </div>

      <section className="mb-10" aria-labelledby={`stub-story-${article.id}`}>
        <h2 id={`stub-story-${article.id}`} className="text-lg font-semibold text-foreground mb-3 scroll-mt-20">
          {narrative.heading}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{narrative.lead}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {narrative.sections.map((section) => (
            <article key={section.title} className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground mb-2">{section.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-2 mb-8">
        {body.tech.map((t) => (
          <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
            {t}
          </span>
        ))}
      </div>

      {body.architectureHeading && body.architecture && body.architecture.length > 0 && (
        <section className="mb-10" aria-labelledby={`stub-architecture-${article.id}`}>
          <h2 id={`stub-architecture-${article.id}`} className="text-lg font-semibold text-foreground mb-3 scroll-mt-20">
            {body.architectureHeading}
          </h2>
          {body.architectureIntro && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{body.architectureIntro}</p>
          )}
          <div className="grid gap-4 md:grid-cols-2">
            {body.architecture.map((item) => (
              <article key={item.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {body.screenshotsHeading && body.screenshots && body.screenshots.length > 0 && (
        <section className="mb-10" aria-labelledby={`stub-shots-${article.id}`}>
          <h2 id={`stub-shots-${article.id}`} className="text-lg font-semibold text-foreground mb-4 scroll-mt-20">
            {body.screenshotsHeading}
          </h2>
          <div className={`grid items-start gap-6${body.screenshots.length > 1 ? ' md:grid-cols-2' : ''}`}>
            {body.screenshots.map((shot) => (
              <article key={shot.src} className="rounded-xl border border-border bg-card p-3">
                <ArticleFigure
                  src={shot.src}
                  alt={shot.alt}
                  title={shot.title}
                  caption={shot.caption}
                  width={shot.width ?? 1280}
                  height={shot.height ?? 800}
                  figureClassName="mb-3"
                />
                {shot.title && <h3 className="text-sm font-semibold text-foreground mb-2">{shot.title}</h3>}
                {shot.description && (
                  <p className="px-1 pb-2 text-sm text-muted-foreground leading-relaxed">{shot.description}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {body.links.length > 0 && (
        <section className="mb-10" aria-labelledby={`stub-links-${article.id}`}>
          <h2 id={`stub-links-${article.id}`} className="text-lg font-semibold text-foreground mb-3 scroll-mt-20">
            {narrative.linksHeading}
          </h2>
          <ul className="space-y-2">
            {body.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {l.label}
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="rounded-2xl border border-border bg-card p-6 mb-12">
        <p className="text-sm text-muted-foreground leading-relaxed">{body.cta}</p>
      </div>

      <FaqSection heading={body.faqHeading} items={body.faq} editorId={`stub-faq-${article.id}`} />

      <ArticleFooter lang={lang} editorId={`article-stub-footer-${article.id}`} />
    </ArticleLayout>
  )
}

export default function ArticleStub({ lang }: { lang: 'es' | 'en' }) {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '')

  const article = useMemo(
    () => articleRegistry.find((a) => a.slugs.es === slug || a.slugs.en === slug),
    [slug]
  )

  if (!article?.seoMeta) {
    return (
      <ArticleLayout lang={lang}>
        <p className="text-muted-foreground">{lang === 'es' ? 'Artículo no encontrado.' : 'Article not found.'}</p>
      </ArticleLayout>
    )
  }

  return <ArticleStubLoaded lang={lang} article={article} />
}
