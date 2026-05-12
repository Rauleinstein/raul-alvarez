import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { articleRegistry, type ArticleConfig } from './articles/registry'
import { ARTICLE_STUB_BODIES } from './articles/stub-content'
import { useArticleSeo } from './articles/use-article-seo'
import { buildArticleJsonLd } from './articles/json-ld'
import { ArticleLayout, ArticleHeader, ArticleFooter, FaqSection } from './articles/components'
import { LINKEDIN_URL } from './site'

function parseBold(text: string): React.ReactNode[] {
  return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-primary font-semibold">{part}</strong> : part
  )
}

function ArticleStubLoaded({ lang, article }: { lang: 'es' | 'en'; article: ArticleConfig }) {
  const body = ARTICLE_STUB_BODIES[article.id][lang]
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

  const reading = lang === 'es' ? '2 min' : '2 min read'

  return (
    <ArticleLayout lang={lang}>
      <ArticleHeader
        editorId={`article-stub-${article.id}`}
        kicker={body.kicker}
        h1={article.titles[lang]}
        subtitle={lang === 'es' ? 'Resumen ejecutivo del caso técnico.' : 'Executive summary of the case study.'}
        date={seoMeta.dateModified}
        dateISO={seoMeta.dateModified}
        readingTime={reading}
        authorUrl={LINKEDIN_URL}
        lang={lang}
      />

      <div className="prose prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
        <p>{parseBold(body.intro)}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {body.tech.map((t) => (
          <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
            {t}
          </span>
        ))}
      </div>

      {body.links.length > 0 && (
        <ul className="mb-10 space-y-2">
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
