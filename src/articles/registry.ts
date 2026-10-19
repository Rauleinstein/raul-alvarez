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
    id: 'enrivo',
    slugs: { es: 'enrivo', en: 'enrivo-en' },
    titles: { es: 'Enrivo', en: 'Enrivo' },
    seo: {
      es: {
        title: 'Enrivo — enriquecimiento de contactos con IA',
        description: 'Caso de Enrivo: investigación de datos B2B con fuentes públicas, evidencia y aprobación humana antes de sincronizar con Mailchimp.',
      },
      en: {
        title: 'Enrivo — AI contact enrichment for Mailchimp',
        description: 'Enrivo case study: public-source B2B research with evidence and human approval before changes sync to Mailchimp.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'enrivo',
    seoMeta: {
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      keywords: ['Enrivo', 'Mailchimp', 'AI contact enrichment', 'B2B data', 'public sources', 'human review', 'PostgreSQL', 'Next.js', 'contact research', 'data quality'],
      articleType: 'TechArticle',
      articleTags: 'Enrivo,Mailchimp,AI,contact enrichment,B2B',
      images: [OG],
      about: [
        { '@type': 'SoftwareApplication', name: 'Enrivo', url: 'https://enrivo.raul-alvarez.es/' },
        { '@type': 'Thing', name: 'Human-reviewed contact enrichment' },
      ],
      citation: [{ '@type': 'WebSite', name: 'Enrivo', url: 'https://enrivo.raul-alvarez.es/' }],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Mailchimp' },
        { '@type': 'SoftwareApplication', name: 'Next.js' },
        { '@type': 'SoftwareApplication', name: 'PostgreSQL' },
      ],
    },
  },
  {
    id: 'custodio-digital',
    slugs: { es: 'custodio-digital', en: 'custodio-digital-en' },
    titles: { es: 'Custodio Digital', en: 'Custodio Digital' },
    seo: {
      es: {
        title: 'Custodio Digital — custodia institucional de activos digitales | Raúl Álvarez',
        description:
          'Caso de Custodio Digital: custodia institucional de activos digitales, trazabilidad, HSM, despliegue on-premise y rol de CTO.',
      },
      en: {
        title: 'Custodio Digital — institutional digital asset custody | Raúl Álvarez',
        description:
          'Custodio Digital case study: institutional digital-asset custody, traceability, HSM, on-premise deployment, and CTO role.',
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
      dateModified: '2026-10-19',
      keywords: [
        'Custodio Digital',
        'digital asset custody',
        'HSM',
        'ENS',
        'MiCA',
        'GDPR',
        'Aircury',
        'Granada',
        'law enforcement custody',
        'institutional security',
        'CTO',
      ],
      articleType: 'TechArticle',
      articleTags: 'custody,security,Aircury,Granada,HSM,on-premise',
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
          'PowerMark en Aircury y Powermark en Smartgrade: OCR/PLN, marcado de evaluaciones online y revisión docente, sin métricas no verificadas.',
      },
      en: {
        title: 'PowerMark — Powermark (Smartgrade UK), OCR+NLP & AI marking | Raúl Álvarez',
        description:
          'PowerMark at Aircury and Powermark at Smartgrade: OCR/NLP, online assessment marking, and teacher review, without unverified metrics.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    ragReady: false,
    ogImage: OG,
    heroImage: OG,
    component: () => import('../ArticleStub.tsx'),
    xDefaultSlug: 'powermark',
    seoMeta: {
      datePublished: '2026-05-12',
      dateModified: '2026-10-19',
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
      images: [OG],
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
        title: 'CityHunts — rutas urbanas interactivas, React y Supabase | Raúl Álvarez',
        description: 'Caso técnico de CityHunts: aventuras autoguiadas con mapas, pistas y progreso móvil, creadas con React, TypeScript, Supabase y Stripe.',
      },
      en: {
        title: 'CityHunts — interactive city hunts with React & Supabase | Raúl Álvarez',
        description: 'CityHunts case study: self-guided city adventures with maps, clues, and mobile progress, built with React, TypeScript, Supabase, and Stripe.',
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
      dateModified: '2026-10-19',
      keywords: ['CityHunts', 'React', 'TypeScript', 'Vite', 'Supabase', 'Leaflet', 'Stripe', 'mobile web', 'urban scavenger hunts', 'AI hunt generation', 'Granada'],
      articleType: 'TechArticle',
      articleTags: 'CityHunts,React,TypeScript,Vite,Supabase,Leaflet,Stripe,AI hunt generation,Granada',
      images: [
        OG,
        'https://raul-alvarez.es/articles/cityhunts/discover-hunts.webp',
        'https://raul-alvarez.es/articles/cityhunts/hunt-detail.webp',
        'https://raul-alvarez.es/articles/cityhunts/gameplay-challenge.webp',
        'https://raul-alvarez.es/articles/cityhunts/ai-hunt-generator.webp',
      ],
      about: [
        { '@type': 'SoftwareApplication', name: 'CityHunts', url: 'https://cityhunts.net/' },
        { '@type': 'Thing', name: 'Location-based urban adventures' },
      ],
      citation: [{ '@type': 'WebPage', name: 'CityHunts product website', url: 'https://cityhunts.net/' }],
      mentions: [
        { '@type': 'SoftwareSourceCode', name: 'React' },
        { '@type': 'SoftwareSourceCode', name: 'TypeScript' },
        { '@type': 'SoftwareSourceCode', name: 'Vite' },
        { '@type': 'SoftwareApplication', name: 'Supabase' },
        { '@type': 'SoftwareApplication', name: 'Leaflet' },
        { '@type': 'SoftwareApplication', name: 'Stripe' },
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
          'App Android para una exposición fotográfica y un juego de crimen interactivo, documentada en el repositorio público.',
      },
      en: {
        title: 'El Caso Munford — Android crime-game app | Raúl Álvarez',
        description:
          'Android app for a photography exhibition and interactive crime game, documented in the public repository.',
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
      dateModified: '2026-10-19',
      keywords: [
        'El Caso Munford',
        'Android app',
        'crime game',
        'PhoneGap',
        'interactive narrative',
        'Raúl Álvarez',
        'Granada',
        'photography exhibition',
        'mobile UX',
        'JavaScript',
      ],
      articleType: 'TechArticle',
      articleTags: 'Android,crime game,narrative UX',
      images: [OG],
      about: [{ '@type': 'Thing', name: 'El Caso Munford Android app' }],
      citation: [
        {
          '@type': 'SoftwareApplication',
          name: 'El Caso Munford source repository',
          url: 'https://github.com/Rauleinstein/MumfordApp',
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
          'Caso: sitio de la Feria del Libro de Granada — programación cultural, contenidos y experiencia pública.',
      },
      en: {
        title: 'Granada Book Fair — institutional website | Raúl',
        description:
          'Granada Book Fair case study: cultural programme, editorial content, and public website experience.',
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
      dateModified: '2026-10-19',
      keywords: [
        'Feria del Libro',
        'Granada',
        'web institucional',
        'editorial events',
        'content site',
        'ferialibrogranada',
        'cultural website',
      ],
      articleType: 'TechArticle',
      articleTags: 'Granada,book-fair,culture,web',
      images: [OG],
      about: [
        { '@type': 'Organization', name: 'Feria del Libro de Granada', url: 'https://ferialibrogranada.es' },
        { '@type': 'Thing', name: 'Public cultural website' },
      ],
      citation: [{ '@type': 'WebSite', name: 'Feria del Libro de Granada', url: 'https://ferialibrogranada.es' }],
      mentions: [
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
      dateModified: '2026-10-19',
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
        { '@type': 'Thing', name: 'Insurance brokerage website' },
        { '@type': 'Thing', name: 'Insurance services' },
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
      dateModified: '2026-10-19',
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
        { '@type': 'Organization', name: 'Esdrújula Ediciones' },
        { '@type': 'Thing', name: 'Publisher digital presence' },
      ],
      citation: [{ '@type': 'WebPage', name: 'Esdrújula Ediciones exhibitor profile', url: 'https://ferialibrogranada.es/expositor/esdrujula-libreria/' }],
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
      dateModified: '2026-10-19',
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
      dateModified: '2026-10-19',
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
        { '@type': 'Thing', name: 'Hardware prototype' },
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
          'Juego incremental móvil de estrategia y horror cósmico, con simulación continua y progreso sin conexión.',
      },
      en: {
        title: 'Omega Protocol — mobile strategy game | Raúl',
        description:
          'Mobile incremental strategy game with cosmic horror, continuous simulation, and offline progress.',
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
      dateModified: '2026-10-19',
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
    titles: { es: 'MeepleHelper', en: 'MeepleHelper' },
    seo: {
      es: {
        title: 'MeepleHelper — asistente de juegos de mesa | Raúl Álvarez',
        description:
          'Asistente de juegos de mesa con app React Native/Expo, API Node/Express, panel Next.js y búsqueda de reglamentos PDF.',
      },
      en: {
        title: 'MeepleHelper — board-game assistant | Raúl Álvarez',
        description:
          'Board-game assistant with a React Native/Expo app, Node/Express API, Next.js dashboard, and PDF rulebook search.',
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
      dateModified: '2026-10-19',
      keywords: [
        'MeepleHelper',
        'DungeonKeeper',
        'React Native',
        'Expo',
        'Node.js',
        'Express',
        'MongoDB',
        'Redis',
        'Next.js',
        'AI',
        'voice',
        'monorepo',
      ],
      articleType: 'TechArticle',
      articleTags: 'monorepo,mobile,AI,tabletop',
      images: [OG],
      about: [
        { '@type': 'SoftwareApplication', name: 'MeepleHelper' },
        { '@type': 'Thing', name: 'Digital tabletop assistant' },
      ],
      citation: [{ '@type': 'WebPage', name: 'MeepleHelper portfolio case', url: 'https://raul-alvarez.es/dungeonkeeper' }],
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
