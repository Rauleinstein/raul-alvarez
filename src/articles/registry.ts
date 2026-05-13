import type { ComponentType } from 'react'

const OG = 'https://raul-alvarez.es/og-image.webp' as const

export interface ArticleSeo {
  title: string
  description: string
}

export interface ArticleSeoMeta {
  datePublished: string
  dateModified: string
  keywords: string[]
  articleType: 'Article' | 'TechArticle'
  articleTags: string
  images: string[]
  about: Array<Record<string, string>>
  extra?: Record<string, string>
  citation?: Array<{ '@type': string; name: string; url: string }>
  isBasedOn?: Record<string, unknown>
  mentions?: Array<Record<string, string>>
  discussionUrl?: string
  relatedLink?: string
}

export interface ArticleConfig {
  id: string
  slugs: { es: string; en: string }
  titles: { es: string; en: string }
  seo: { es: ArticleSeo; en: ArticleSeo }
  sectionLabels: { es: Record<string, string>; en: Record<string, string> }
  type: 'collab' | 'case-study' | 'bridge'
  ogImage?: string
  heroImage?: string
  component: () => Promise<{ default: ComponentType<{ lang: 'es' | 'en' }> }>
  xDefaultSlug?: string
  ragReady?: boolean
  i18nFile?: string
  seoMeta?: ArticleSeoMeta
}

export const articleRegistry: ArticleConfig[] = [
  {
    id: 'custodio-digital',
    slugs: { es: 'custodio-digital', en: 'custodio-digital-en' },
    titles: { es: 'Custodio Digital', en: 'Custodio Digital' },
    seo: {
      es: {
        title: 'Custodio Digital — custodia institucional de activos digitales | Raúl Álvarez',
        description:
          'Caso técnico: Custodio Digital (spin-off Aircury), cadena de custodia, HSM, on-premise, RBAC, ENS/MiCA/RGPD y rol de CTO. Granada / remoto.',
      },
      en: {
        title: 'Custodio Digital — institutional digital asset custody | Raúl Álvarez',
        description:
          'Case study: Custodio Digital (Aircury spin-off), chain of custody, HSM, on-premise, RBAC, ENS/MiCA/GDPR, and CTO role. Granada / remote.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: 'https://raul-alvarez.es/articles/custodio-digital/home-hero.jpg',
    heroImage: 'https://raul-alvarez.es/articles/custodio-digital/home-hero.jpg',
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'custodio-digital',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-13',
      keywords: [
        'Custodio Digital',
        'digital asset custody',
        'HSM',
        'ENS',
        'MiCA',
        'GDPR',
        'RBAC',
        'multisig',
        'Aircury',
        'Granada',
        'law enforcement custody',
        'institutional security',
        'AWS',
        'CTO',
      ],
      articleType: 'TechArticle',
      articleTags: 'custody,security,Aircury,Granada,RBAC,HSM',
      images: [
        'https://raul-alvarez.es/articles/custodio-digital/home-hero.jpg',
        'https://raul-alvarez.es/articles/custodio-digital/features-chain.jpg',
        'https://raul-alvarez.es/articles/custodio-digital/compliance-hsm.jpg',
      ],
      about: [
        { '@type': 'Organization', name: 'Aircury', url: 'https://www.aircury.com' },
        { '@type': 'Thing', name: 'Digital asset custody' },
      ],
      citation: [{ '@type': 'WebSite', name: 'Custodio Digital', url: 'https://custodio.digital' }],
      mentions: [
        { '@type': 'Organization', name: 'Aircury', url: 'https://www.aircury.com' },
        { '@type': 'Thing', name: 'Institutional digital custody' },
        { '@type': 'Thing', name: 'Hardware security module' },
      ],
    },
  },
  {
    id: 'powermark',
    slugs: { es: 'powermark', en: 'powermark-en' },
    titles: { es: 'PowerMark', en: 'PowerMark' },
    seo: {
      es: {
        title: 'PowerMark — Powermark (Smartgrade UK), OCR+PLN y auto-corrección | Raúl Álvarez',
        description:
          'PowerMark (Aircury) y Powermark (Smartgrade): auto-corrección con IA, OCR/PLN, moderación docente y capturas de la página oficial UK.',
      },
      en: {
        title: 'PowerMark — Powermark (Smartgrade UK), OCR+NLP & AI marking | Raúl Álvarez',
        description:
          'PowerMark (Aircury) and Smartgrade Powermark: AI auto-marking, OCR/NLP, teacher moderation, with screenshots from the official UK product page.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: 'https://raul-alvarez.es/articles/powermark/powermark1.png',
    heroImage: 'https://raul-alvarez.es/articles/powermark/powermark1.png',
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'powermark',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-13',
      keywords: [
        'PowerMark',
        'Powermark',
        'Smartgrade',
        'AI auto-marking',
        'OCR',
        'NLP',
        'EdTech',
        'Aircury',
        'HeadStart Primary',
        'teacher moderation',
        'assessment AI',
      ],
      articleType: 'TechArticle',
      articleTags: 'Powermark,Smartgrade,OCR,NLP,AI marking,Aircury,EdTech',
      images: [
        'https://raul-alvarez.es/articles/powermark/powermark1.png',
        'https://raul-alvarez.es/articles/powermark/powermark2.png',
      ],
      about: [
        { '@type': 'SoftwareApplication', name: 'Smartgrade', url: 'https://www.smartgrade.com' },
        { '@type': 'SoftwareApplication', name: 'Powermark', url: 'https://www.smartgrade.co.uk/solutions/ai-auto-marking' },
        { '@type': 'Thing', name: 'Educational assessment AI' },
      ],
      citation: [
        {
          '@type': 'WebPage',
          name: 'Powermark: AI Auto-Marking (Smartgrade UK)',
          url: 'https://www.smartgrade.co.uk/solutions/ai-auto-marking',
        },
      ],
      mentions: [
        { '@type': 'Organization', name: 'Aircury', url: 'https://www.aircury.com' },
        { '@type': 'Thing', name: 'OCR and NLP grading' },
        { '@type': 'Thing', name: 'AI auto-marking' },
      ],
    },
  },
  {
    id: 'cityhunts',
    slugs: { es: 'cityhunts', en: 'cityhunts-en' },
    titles: { es: 'CityHunts', en: 'CityHunts' },
    seo: {
      es: {
        title: 'CityHunts — experiencias urbanas gamificadas | Raúl Álvarez',
        description: 'CityHunts (2025): producto móvil React/Node y narrativa en la ciudad.',
      },
      en: {
        title: 'CityHunts — gamified city experiences | Raúl Álvarez',
        description: 'CityHunts (2025): mobile product with React/Node and urban narrative.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'cityhunts',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      keywords: ['CityHunts', 'gamification', 'React', 'Node.js', 'mobile UX', 'urban games', 'Granada'],
      articleType: 'Article',
      articleTags: 'CityHunts,gamification,React,Node',
      images: [OG],
      about: [{ '@type': 'Thing', name: 'Urban gamified experiences' }],
      citation: [{ '@type': 'WebPage', name: 'CityHunts case study', url: 'https://raul-alvarez.es/cityhunts' }],
      mentions: [
        { '@type': 'SoftwareSourceCode', name: 'React' },
        { '@type': 'SoftwareSourceCode', name: 'Node.js' },
      ],
    },
  },
  {
    id: 'munford',
    slugs: { es: 'el-caso-munford', en: 'el-caso-munford-en' },
    titles: { es: 'El Caso Munford', en: 'El Caso Munford' },
    seo: {
      es: {
        title: 'El Caso Munford — app Android (juego de crimen) | Raúl Álvarez',
        description:
          'App Android para exposición y juego interactivo; enlace a Google Play y notas de producto.',
      },
      en: {
        title: 'El Caso Munford — Android crime-game app | Raúl Álvarez',
        description:
          'Android app for a photography exhibition and interactive crime game; Play Store link.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'el-caso-munford',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      keywords: [
        'El Caso Munford',
        'Android app',
        'crime game',
        'Google Play',
        'interactive narrative',
        'Raúl Álvarez',
        'Granada',
        'photography exhibition',
        'mobile UX',
        'JavaScript',
      ],
      articleType: 'Article',
      articleTags: 'Android,crime game,narrative UX',
      images: [OG],
      about: [{ '@type': 'Thing', name: 'El Caso Munford Android app' }],
      citation: [
        {
          '@type': 'SoftwareApplication',
          name: 'El Caso Munford',
          url: 'https://play.google.com/store/apps/details?id=com.raulalvarez.munfordapp',
        },
      ],
      mentions: [
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Interactive narrative' },
      ],
    },
  },
  {
    id: 'feria-libro-granada',
    slugs: { es: 'feria-libro-granada', en: 'feria-libro-granada-en' },
    titles: { es: 'Feria del Libro de Granada', en: 'Granada Book Fair' },
    seo: {
      es: {
        title: 'Feria Libro Granada — web institucional | Raúl Álvarez',
        description:
          'Caso: sitio de la Feria del Libro de Granada — contenidos, rendimiento y mantenimiento del proyecto web.',
      },
      en: {
        title: 'Granada Book Fair — institutional website | Raúl',
        description:
          'Case: Granada Book Fair website — content structure, performance, and ongoing delivery for the public site.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'feria-libro-granada',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      keywords: [
        'Feria del Libro',
        'Granada',
        'PHP',
        'web institucional',
        'editorial events',
        'content site',
        'frontend',
        'ferialibrogranada',
        'cultural web',
        'responsive',
        'SEO',
      ],
      articleType: 'TechArticle',
      articleTags: 'Granada,book-fair,PHP,web',
      images: [OG],
      about: [
        { '@type': 'Organization', name: 'Feria del Libro de Granada', url: 'https://ferialibrogranada.es' },
        { '@type': 'Thing', name: 'Public cultural website' },
      ],
      citation: [{ '@type': 'WebSite', name: 'Feria del Libro de Granada', url: 'https://ferialibrogranada.es' }],
      mentions: [
        { '@type': 'Thing', name: 'PHP' },
        { '@type': 'Thing', name: 'Institutional web publishing' },
      ],
    },
  },
  {
    id: 'cgv-seguros',
    slugs: { es: 'cgv-seguros', en: 'cgv-seguros-en' },
    titles: { es: 'CGV Seguros', en: 'CGV Seguros' },
    seo: {
      es: {
        title: 'CGV Seguros — web corporativa | Raúl Álvarez',
        description: 'Caso: sitio corporativo de mediación de seguros — estructura, contenidos y entrega web.',
      },
      en: {
        title: 'CGV Seguros — corporate website | Raúl Álvarez',
        description: 'Case: insurance brokerage corporate site — structure, content, and reliable web delivery.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'cgv-seguros',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      keywords: [
        'CGV Seguros',
        'insurance',
        'corporate website',
        'mediation',
        'Granada',
        'web development',
        'content architecture',
        'frontend',
        'cgvseguros',
        'business site',
      ],
      articleType: 'TechArticle',
      articleTags: 'insurance,web,corporate',
      images: [OG],
      about: [
        { '@type': 'Organization', name: 'CGV Seguros', url: 'https://cgvseguros.com' },
        { '@type': 'Thing', name: 'Insurance brokerage web presence' },
      ],
      citation: [{ '@type': 'WebSite', name: 'CGV Seguros', url: 'https://cgvseguros.com' }],
      mentions: [
        { '@type': 'Thing', name: 'Corporate web stack' },
        { '@type': 'Thing', name: 'Content-led marketing site' },
      ],
    },
  },
  {
    id: 'esdrujula-ediciones',
    slugs: { es: 'esdrujula-ediciones', en: 'esdrujula-ediciones-en' },
    titles: { es: 'Esdrújula Ediciones', en: 'Esdrújula Ediciones' },
    seo: {
      es: {
        title: 'Esdrújula Ediciones — web editorial | Raúl Álvarez',
        description: 'Caso: sitio para editorial — catálogo, identidad y experiencia de lectura online.',
      },
      en: {
        title: 'Esdrújula Ediciones — publisher site | Raúl',
        description: 'Case: publisher website — catalog presentation, brand, and reader-friendly UX.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'esdrujula-ediciones',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      keywords: [
        'Esdrújula',
        'editorial',
        'publisher website',
        'books',
        'catalog',
        'Granada',
        'web design',
        'content',
        'esdrujula',
        'reading UX',
      ],
      articleType: 'TechArticle',
      articleTags: 'publishing,books,web',
      images: [OG],
      about: [
        { '@type': 'Organization', name: 'Esdrújula Ediciones', url: 'https://esdrujula.es' },
        { '@type': 'Thing', name: 'Publisher digital presence' },
      ],
      citation: [{ '@type': 'WebSite', name: 'Esdrújula Ediciones', url: 'https://esdrujula.es' }],
      mentions: [
        { '@type': 'Thing', name: 'Editorial catalog' },
        { '@type': 'Thing', name: 'Brand-led web' },
      ],
    },
  },
  {
    id: 'entradasytickets',
    slugs: { es: 'entradasytickets', en: 'entradasytickets-en' },
    titles: { es: 'EntradasyTickets', en: 'EntradasyTickets' },
    seo: {
      es: {
        title: 'EntradasyTickets — venta de entradas | Raúl',
        description: 'Caso: plataforma de ticketing — flujo de compra, catálogo de eventos y operación web.',
      },
      en: {
        title: 'EntradasyTickets — ticketing web | Raúl',
        description: 'Case: ticket sales platform — purchase flow, event catalog, and dependable web ops.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'entradasytickets',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      keywords: [
        'EntradasyTickets',
        'ticketing',
        'e-commerce',
        'events',
        'ticket sales',
        'web platform',
        'checkout',
        'catalog',
        'Spain',
        'online tickets',
      ],
      articleType: 'TechArticle',
      articleTags: 'ticketing,e-commerce,events',
      images: [OG],
      about: [
        { '@type': 'Organization', name: 'EntradasyTickets', url: 'https://entradasytickets.com' },
        { '@type': 'Thing', name: 'Online ticket commerce' },
      ],
      citation: [{ '@type': 'WebSite', name: 'EntradasyTickets', url: 'https://entradasytickets.com' }],
      mentions: [
        { '@type': 'Thing', name: 'E-commerce checkout' },
        { '@type': 'Thing', name: 'Event discovery UX' },
      ],
    },
  },
  {
    id: 'atlantis',
    slugs: { es: 'atlantis', en: 'atlantis-en' },
    titles: { es: 'Atlantis (ETSIIT UGR)', en: 'Atlantis (ETSIIT UGR)' },
    seo: {
      es: {
        title: 'Atlantis — control de asistencia UGR | Raúl',
        description:
          'Proyecto académico premiado: dispositivo para control de asistencia en eventos — Desafío Tecnológico ETSIIT.',
      },
      en: {
        title: 'Atlantis — UGR attendance device | Raúl',
        description:
          'Awarded academic project: hardware/software approach to event attendance — ETSIIT UGR technology challenge.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'atlantis',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      keywords: [
        'Atlantis',
        'ETSIIT',
        'UGR',
        'Granada',
        'hardware',
        'attendance',
        'events',
        'student project',
        'telecommunications',
        'prototype',
      ],
      articleType: 'TechArticle',
      articleTags: 'UGR,hardware,events',
      images: [OG],
      about: [
        { '@type': 'CollegeOrUniversity', name: 'Universidad de Granada', url: 'https://www.ugr.es' },
        { '@type': 'Thing', name: 'Event attendance system' },
      ],
      citation: [{ '@type': 'WebPage', name: 'ETSIIT UGR', url: 'https://etsiit.ugr.es' }],
      mentions: [
        { '@type': 'Thing', name: 'Embedded systems' },
        { '@type': 'Thing', name: 'Academic engineering project' },
      ],
    },
  },
  {
    id: 'omega-protocol',
    slugs: { es: 'omega-protocol', en: 'omega-protocol-en' },
    titles: { es: 'Omega Protocol', en: 'Omega Protocol' },
    seo: {
      es: {
        title: 'Omega Protocol — juego móvil | Raúl Álvarez',
        description:
          'Juego incremental de estrategia con atmósfera de horror cósmico; disponible en iOS y Android (v1.1.0).',
      },
      en: {
        title: 'Omega Protocol — mobile strategy game | Raúl',
        description:
          'Incremental strategy game with cosmic-horror tone; shipped on iOS and Android (v1.1.0).',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'omega-protocol',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      keywords: [
        'Omega Protocol',
        'mobile game',
        'incremental',
        'strategy',
        'cosmic horror',
        'iOS',
        'Android',
        'indie game',
        'omega-protocol',
        'game design',
      ],
      articleType: 'TechArticle',
      articleTags: 'mobile,game,strategy',
      images: [OG],
      about: [
        { '@type': 'VideoGame', name: 'Omega Protocol', url: 'https://omega-protocol.net' },
        { '@type': 'Thing', name: 'Incremental strategy gameplay' },
      ],
      citation: [{ '@type': 'WebSite', name: 'Omega Protocol', url: 'https://omega-protocol.net' }],
      mentions: [
        { '@type': 'Thing', name: 'Mobile game client' },
        { '@type': 'Thing', name: 'Cosmic horror narrative' },
      ],
    },
  },
  {
    id: 'dungeonkeeper',
    slugs: { es: 'dungeonkeeper', en: 'dungeonkeeper-en' },
    titles: { es: 'DungeonKeeper', en: 'DungeonKeeper' },
    seo: {
      es: {
        title: 'DungeonKeeper — kit digital de partida | Raúl',
        description:
          'Monorepo para partidas: app React Native/Expo, API Node/Express/MongoDB, admin Next.js, IA/voz y reglas en PDF.',
      },
      en: {
        title: 'DungeonKeeper — digital tabletop kit | Raúl',
        description:
          'Monorepo for tabletop play: React Native/Expo app, Node/Express/MongoDB API, Next.js admin, AI/voice, PDF rules.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'dungeonkeeper',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      keywords: [
        'DungeonKeeper',
        'React Native',
        'Expo',
        'Node.js',
        'Express',
        'MongoDB',
        'Next.js',
        'AI',
        'voice',
        'monorepo',
      ],
      articleType: 'TechArticle',
      articleTags: 'monorepo,mobile,AI,tabletop',
      images: [OG],
      about: [
        { '@type': 'SoftwareSourceCode', name: 'DungeonKeeper monorepo' },
        { '@type': 'Thing', name: 'Digital tabletop assistant' },
      ],
      citation: [{ '@type': 'WebPage', name: 'DungeonKeeper portfolio case', url: 'https://raul-alvarez.es/dungeonkeeper' }],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'React Native' },
        { '@type': 'SoftwareApplication', name: 'Next.js' },
      ],
    },
  },
]

export function getAltPaths(): Record<string, string> {
  const map: Record<string, string> = {
    '/': '/en',
    '/en': '/',
    '/sobre-mi': '/about',
    '/about': '/sobre-mi',
    '/privacidad': '/privacy',
    '/privacy': '/privacidad',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = `/${article.slugs.en}`
    map[`/${article.slugs.en}`] = `/${article.slugs.es}`
  }
  return map
}

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {
    '/': 'Portfolio de Raúl Álvarez',
    '/en': "Raúl Álvarez's Portfolio",
    '/sobre-mi': 'Sobre mí',
    '/about': 'About',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = article.titles.es
    map[`/${article.slugs.en}`] = article.titles.en
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {}
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = article.sectionLabels.es
    map[`/${article.slugs.en}`] = article.sectionLabels.en
  }
  return map
}

export function getEsSlugs(): Set<string> {
  const slugs = new Set<string>(['/', '/privacidad', '/sobre-mi'])
  for (const article of articleRegistry) {
    slugs.add(`/${article.slugs.es}`)
  }
  return slugs
}
