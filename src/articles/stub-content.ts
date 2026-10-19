/** Bilingual body copy for stub case-study pages + prerender JSON-LD FAQ */
export type StubScreenshot = {
  src: string
  alt: string
  title?: string
  description?: string
  caption: string
  width?: number
  height?: number
}

export type StubArchitecture = {
  title: string
  description: string
}

export type StubLangBlock = {
  kicker: string
  subtitle?: string
  intro: string
  tech: string[]
  links: readonly { label: string; href: string }[]
  cta: string
  faqHeading: string
  faq: readonly { q: string; a: string }[]
  /** Optional technology stack explanation. */
  architectureHeading?: string
  architectureIntro?: string
  architecture?: readonly StubArchitecture[]
  /** Optional public-site captures (paths under `/public`). */
  screenshotsHeading?: string
  screenshots?: readonly StubScreenshot[]
}

export const ARTICLE_STUB_BODIES: Record<string, { es: StubLangBlock; en: StubLangBlock }> = {
  enrivo: {
    es: {
      kicker: 'Enrivo · enriquecimiento de contactos para Mailchimp',
      intro:
        '**Enrivo** investiga fuentes públicas para proponer empresa, cargo, sector y ubicación en contactos de Mailchimp. Cada sugerencia muestra evidencia y requiere aprobación antes de sincronizarse.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Mailchimp OAuth', 'Tareas en segundo plano', 'Stripe'],
      links: [{ label: 'Sitio público de Enrivo', href: 'https://enrivo.raul-alvarez.es/' }],
      cta: 'Para conversar sobre enriquecimiento de datos con revisión humana, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Qué campos puede proponer Enrivo?', a: 'La web pública muestra empresa, cargo, sector y ubicación como ejemplos de campos enriquecibles.' },
        { q: '¿Enrivo cambia Mailchimp automáticamente?', a: 'No. La persona revisa la evidencia y aprueba los cambios antes de sincronizarlos.' },
        { q: '¿Está disponible para todo el público?', a: 'La web pública invita a solicitar acceso anticipado.' },
      ],
      screenshotsHeading: 'Captura del producto',
      screenshots: [
        {
          src: '/articles/enrivo/enrivo.png',
          alt: 'Vista pública de Enrivo con un perfil de contacto de muestra y sus fuentes de evidencia.',
          title: 'Revisar una sugerencia',
          description: 'La página ilustra cómo una persona puede comprobar los datos propuestos y revisar las fuentes antes de aprobar la sincronización.',
          caption: 'Vista de producto publicada por Enrivo. El contacto y sus contadores son datos ilustrativos, no métricas de uso.',
          width: 1827,
          height: 964,
        },
      ],
    },
    en: {
      kicker: 'Enrivo · contact enrichment for Mailchimp',
      intro:
        '**Enrivo** researches public sources to propose company, role, industry, and location data for Mailchimp contacts. Each suggestion shows evidence and needs approval before sync.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Mailchimp OAuth', 'Background jobs', 'Stripe'],
      links: [{ label: 'Enrivo public site', href: 'https://enrivo.raul-alvarez.es/' }],
      cta: 'For a conversation about human-reviewed data enrichment, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Which fields can Enrivo suggest?', a: 'The public site shows company, job title, industry, and location as example fields.' },
        { q: 'Does Enrivo change Mailchimp automatically?', a: 'No. A person reviews the evidence and approves changes before sync.' },
        { q: 'Is it open to everyone?', a: 'The public site invites people to request early access.' },
      ],
      screenshotsHeading: 'Product preview',
      screenshots: [
        {
          src: '/articles/enrivo/enrivo.png',
          alt: 'Enrivo public-site preview with a sample contact profile and its evidence sources.',
          title: 'Review an enrichment suggestion',
          description: 'The page illustrates how a person can check proposed data and review its sources before approving a sync.',
          caption: 'Product preview from Enrivo’s public site. The contact and counters are illustrative, not usage metrics.',
          width: 1827,
          height: 964,
        },
      ],
    },
  },
  'custodio-digital': {
    es: {
      kicker: 'Custodio Digital · custodio.digital',
      intro:
        'Custodio Digital es un spin-off de **Aircury** para la custodia institucional de activos digitales. El sitio público describe una cadena de custodia, claves únicas por dispositivo, despliegue on-premise e integración HSM. Lideré producto como **CTO** junto al equipo.',
      tech: [
        'HSM',
        'Cadena de custodia',
        'Trazabilidad',
        'On-premise',
        'ENS · ISO 27001 · MiCA / RGPD',
      ],
      links: [
        { label: 'Sitio público', href: 'https://custodio.digital' },
        { label: 'Aircury', href: 'https://www.aircury.com' },
        { label: 'Contacto Custodio (info@custodio.digital)', href: 'mailto:info@custodio.digital' },
      ],
      cta: 'Para hablar de producto y custodia digital institucional, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Qué problema aborda?', a: 'Registrar y seguir activos digitales intervenidos y la evidencia asociada a cada fase de custodia.' },
        { q: '¿Cuál fue tu papel?', a: 'Lideré producto como CTO junto al equipo.' },
        { q: '¿Qué tecnologías se describen públicamente?', a: 'El sitio menciona HSM y despliegue on-premise. No atribuyo aquí una pila de software no publicada.' },
      ],
      screenshotsHeading: 'Capturas del sitio público',
      screenshots: [
        {
          src: '/articles/custodio-digital/home-hero.jpg',
          alt: 'Página principal de custodio.digital: propuesta de valor de custodia institucional.',
          caption: 'Inicio — mensaje de custodia integral y trazabilidad para administraciones.',
          width: 1280,
          height: 800,
        },
        {
          src: '/articles/custodio-digital/features-chain.jpg',
          alt: 'Sección de funcionalidades: cadena de custodia digital y claves únicas.',
          caption: 'Funciones — cadena de custodia inalterable y generación de claves por dispositivo.',
          width: 1280,
          height: 800,
        },
        {
          src: '/articles/custodio-digital/compliance-hsm.jpg',
          alt: 'Cumplimiento normativo e integración HSM en custodio.digital.',
          caption: 'Cumplimiento e infraestructura — RGPD, MiCA, ISO 27001, ENS y módulos HSM / on-premise.',
          width: 1280,
          height: 800,
        },
      ],
    },
    en: {
      kicker: 'Custodio Digital · custodio.digital',
      intro:
        'Custodio Digital is an **Aircury** spin-off for institutional digital-asset custody. Its public site describes a chain of custody, unique keys per device, on-premise deployment, and HSM integration. I led product as **CTO** with the team.',
      tech: [
        'HSM',
        'Chain of custody',
        'Traceability',
        'On-premise',
        'ENS · ISO 27001 · MiCA / GDPR',
      ],
      links: [
        { label: 'Public site', href: 'https://custodio.digital' },
        { label: 'Aircury', href: 'https://www.aircury.com' },
        { label: 'Custodio contact (info@custodio.digital)', href: 'mailto:info@custodio.digital' },
      ],
      cta: 'For a conversation about product and institutional digital custody, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'What problem does it address?', a: 'It records and tracks intervened digital assets and evidence linked to each custody stage.' },
        { q: 'What was your role?', a: 'I led product as CTO with the team.' },
        { q: 'Which technologies are public?', a: 'The site mentions HSM and on-premise deployment. I do not claim an unpublished software stack here.' },
      ],
      screenshotsHeading: 'Screenshots from the public site',
      screenshots: [
        {
          src: '/articles/custodio-digital/home-hero.jpg',
          alt: 'custodio.digital homepage: institutional digital asset custody positioning.',
          caption: 'Homepage — full-lifecycle custody and traceability messaging.',
          width: 1280,
          height: 800,
        },
        {
          src: '/articles/custodio-digital/features-chain.jpg',
          alt: 'Feature section: digital chain of custody and per-device key generation.',
          caption: 'Product features — unalterable chain of custody and unique keys per seized device.',
          width: 1280,
          height: 800,
        },
        {
          src: '/articles/custodio-digital/compliance-hsm.jpg',
          alt: 'Compliance and HSM integration section on custodio.digital.',
          caption: 'Compliance & infrastructure — GDPR, MiCA, ISO 27001, ENS, HSM, and on-premise delivery.',
          width: 1280,
          height: 800,
        },
      ],
    },
  },
  powermark: {
    es: {
      kicker: 'PowerMark · Aircury × Smartgrade (Powermark)',
      intro:
        '**PowerMark** fue una línea de trabajo de IA educativa en Aircury, integrada con Smartgrade. Diseñé y supervisé el trabajo de OCR y PLN para evaluación asistida. La página pública actual de Smartgrade describe marcado online y revisión docente; no atribuyo cifras de precisión ni ahorros.',
      tech: [
        'OCR',
        'PLN / NLP',
        'Auto-corrección asistida',
        'Moderación docente',
        'Privacidad y cumplimiento',
        'Integración EdTech',
      ],
      links: [
        {
          label: 'Powermark — Smartgrade UK (página oficial)',
          href: 'https://www.smartgrade.co.uk/solutions/ai-auto-marking',
        },
        { label: 'Smartgrade', href: 'https://www.smartgrade.com' },
        { label: 'Aircury', href: 'https://www.aircury.com' },
      ],
      cta: 'Para hablar de evaluación asistida y sistemas EdTech, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Powermark y PowerMark son lo mismo?', a: 'Powermark es el producto público de Smartgrade. PowerMark es el trabajo de Aircury descrito en este portfolio.' },
        { q: '¿Qué documenta la página pública actual?', a: 'Smartgrade presenta marcado de evaluaciones online y revisión docente de respuestas señaladas.' },
        { q: '¿El marcado de papel está disponible?', a: 'La página pública lo describe como una fase futura, no como una capacidad disponible.' },
        { q: '¿Cuál fue tu contribución?', a: 'Diseñé y supervisé trabajo de OCR y PLN, integración, calidad de datos y entrega.' },
      ],
      screenshotsHeading: 'Referencia pública del producto',
      screenshots: [
        {
          src: '/articles/powermark/powermark2.png',
          alt: 'Página pública actual de Smartgrade Powermark sobre evaluación online y revisión docente de respuestas señaladas.',
          title: 'Referencia pública de Smartgrade',
          description: 'La página actual describe Powermark. Se muestra como contexto, no como captura de la implementación anterior de PowerMark en Aircury.',
          caption: 'Captura de la página pública de Smartgrade; no es una pantalla de la versión anterior de PowerMark desarrollada en Aircury.',
          width: 1462,
          height: 923,
        },
      ],
    },
    en: {
      kicker: 'PowerMark · Aircury × Smartgrade (Powermark)',
      intro:
        '**PowerMark** was an education-AI workstream at Aircury, integrated with Smartgrade. I designed and oversaw OCR and NLP work for assisted assessment. Smartgrade’s current public page describes online marking and teacher review. I make no accuracy or time-saving claims.',
      tech: [
        'OCR',
        'NLP',
        'AI-assisted marking',
        'Teacher moderation',
        'Privacy & compliance',
        'EdTech integration',
      ],
      links: [
        {
          label: 'Powermark — Smartgrade UK (official page)',
          href: 'https://www.smartgrade.co.uk/solutions/ai-auto-marking',
        },
        { label: 'Smartgrade', href: 'https://www.smartgrade.com' },
        { label: 'Aircury', href: 'https://www.aircury.com' },
      ],
      cta: 'For a conversation about assisted assessment and EdTech systems, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Are Powermark and PowerMark the same?', a: 'Powermark is Smartgrade’s public product. PowerMark is the Aircury work described in this portfolio.' },
        { q: 'What does the current public page describe?', a: 'Smartgrade presents online assessment marking and teacher review of flagged answers.' },
        { q: 'Is paper marking available?', a: 'The public page describes it as a future phase, not an available feature.' },
        { q: 'What did you contribute?', a: 'I designed and oversaw OCR and NLP work, integration, data quality, and delivery.' },
      ],
      screenshotsHeading: 'Public product reference',
      screenshots: [
        {
          src: '/articles/powermark/powermark2.png',
          alt: 'Smartgrade’s current public Powermark page about online assessment and teacher review of flagged answers.',
          title: 'Smartgrade public reference',
          description: 'The current page describes Powermark. It provides context, not a screenshot of Aircury’s earlier PowerMark implementation.',
          caption: 'Capture of Smartgrade’s public page; it is not a screen from the earlier PowerMark work at Aircury.',
          width: 1462,
          height: 923,
        },
      ],
    },
  },
  cityhunts: {
    es: {
      kicker: 'CityHunts · Aventura urbana autoguiada',
      subtitle: 'Producto, arquitectura y flujos de juego de una plataforma de aventuras urbanas.',
      intro:
        '**CityHunts** convierte una caminata en una aventura interactiva: descubre rutas, visita lugares reales y resuelve pistas desde el móvil. No hace falta descargar una app ni seguir a un guía. Contribuí a la arquitectura y al producto; el stack actual combina una aplicación web en React con servicios backend de Supabase.',
      tech: ['React 18', 'TypeScript', 'Vite', 'Supabase', 'Leaflet', 'Stripe', 'Web móvil'],
      architectureHeading: 'Cómo está construido',
      architectureIntro: 'Una aplicación web ligera conecta la exploración en el móvil con mapas, progreso de juego y servicios de creación y pago.',
      architecture: [
        { title: 'Aplicación web', description: 'React 18 y TypeScript, compilados con Vite. Tailwind CSS da estilo a la interfaz y React Router gestiona rutas como explorar, jugar y crear.' },
        { title: 'Datos y servicios', description: 'Supabase aporta PostgreSQL, autenticación y almacenamiento. Sus Edge Functions gestionan procesos backend como generación de rutas y operaciones de pago.' },
        { title: 'Rutas con lugares reales', description: 'Leaflet y React Leaflet muestran mapas y ubicaciones. Cada aventura enlaza pistas con puntos concretos que el jugador visita a pie.' },
        { title: 'Creación y pagos', description: 'Stripe procesa los pagos de experiencias de pago y de la generación con IA. La generación y la gestión del checkout se coordinan mediante funciones backend.' },
      ],
      screenshotsHeading: 'Funciones del producto',
      screenshots: [
        {
          src: '/articles/cityhunts/discover-hunts.webp',
          alt: 'Página Explorar de CityHunts con búsqueda, controles de vista de cuadrícula y mapa, filtros y tarjetas de rutas.',
          title: 'Explorar aventuras',
          description: 'Busca rutas y filtra por destino. Cambia entre tarjetas y mapa; cada ficha muestra su ciudad, duración y dificultad.',
          caption: 'Captura de la página pública de exploración.',
          width: 1440,
          height: 1200,
        },
        {
          src: '/articles/cityhunts/hunt-detail.webp',
          alt: 'Ficha de una aventura de CityHunts en Milán con portada, duración, cinco ubicaciones, punto de inicio y botón para empezar.',
          title: 'Entender la ruta antes de jugar',
          description: 'La ficha reúne la historia, el punto de partida, la duración, la dificultad y el número de ubicaciones antes de comenzar.',
          caption: 'Ficha pública: The Secrets of the Visconti Serpent.',
          width: 1440,
          height: 1200,
        },
        {
          src: '/articles/cityhunts/gameplay-challenge.webp',
          alt: 'Pantalla de juego móvil con progreso, ubicación Duomo di Milano, una pista, botón de ayuda, campo de respuesta y acción para enviar.',
          title: 'Resolver pistas en el lugar',
          description: 'La pantalla de juego indica el progreso, guía al jugador hasta un lugar real y presenta una pregunta contextual. Se puede pedir una pista y enviar una respuesta.',
          caption: 'Captura de una ruta pública gratuita en modo de juego.',
          width: 880,
          height: 960,
        },
        {
          src: '/articles/cityhunts/ai-hunt-generator.webp',
          alt: 'Generador de aventuras con IA con campos para ciudad, idioma, cantidad de paradas, dirección creativa y resumen del precio.',
          title: 'Crear una aventura con IA',
          description: 'Configura ciudad o zona, idioma, número de paradas y una dirección creativa opcional. El precio se calcula por parada; la generación continúa después del checkout.',
          caption: 'Captura de la página pública de creación con IA.',
          width: 1440,
          height: 1200,
        },
      ],
      links: [
        { label: 'Visitar CityHunts', href: 'https://cityhunts.net/' },
        { label: 'Jugar la ruta de Granada', href: 'https://cityhunts.net/hunts/2c18ceea-ea38-47a7-b25b-c6b483691e2c/' },
        { label: 'Explorar rutas de Granada', href: 'https://cityhunts.net/granada/' },
      ],
      cta: 'CityHunts permite empezar una aventura desde el navegador del móvil y explorar a ritmo propio.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Hay que instalar una app?', a: 'No. La experiencia se abre en el navegador del móvil.' },
        { q: '¿Se necesita reservar hora o contratar un guía?', a: 'No. Es una experiencia autoguiada que puedes empezar cuando te venga bien.' },
        { q: '¿Qué ofrece la ruta de Granada?', a: 'Un recorrido por el centro y el Albaicín, con pistas y retos en lugares reales.' },
        { q: '¿Qué parte desarrollaste?', a: 'Contribuí a la arquitectura y al producto. Esta página no atribuye métricas ni responsabilidades individuales más específicas.' },
      ],
    },
    en: {
      kicker: 'CityHunts · Self-guided city adventures',
      subtitle: 'Product, architecture, and gameplay flows for a city-adventure platform.',
      intro:
        '**CityHunts** turns a walk into an interactive adventure: discover routes, visit real places, and solve clues on your phone. No app download or live guide is required. I contributed to the architecture and product; the current stack pairs a React web app with Supabase backend services.',
      tech: ['React 18', 'TypeScript', 'Vite', 'Supabase', 'Leaflet', 'Stripe', 'Mobile web'],
      architectureHeading: 'How it is built',
      architectureIntro: 'A lightweight web app connects mobile exploration with maps, game progress, and creation and payment services.',
      architecture: [
        { title: 'Web app', description: 'React 18 and TypeScript, built with Vite. Tailwind CSS styles the interface, and React Router handles routes for discovery, gameplay, and creation.' },
        { title: 'Data and services', description: 'Supabase provides PostgreSQL, authentication, and storage. Its Edge Functions handle backend processes such as route generation and payment operations.' },
        { title: 'Routes with real places', description: 'Leaflet and React Leaflet power maps and locations. Each adventure connects clues to specific places that players visit on foot.' },
        { title: 'Creation and payments', description: 'Stripe processes payments for paid hunts and AI generation. Backend functions coordinate generation and checkout operations.' },
      ],
      screenshotsHeading: 'Product features',
      screenshots: [
        {
          src: '/articles/cityhunts/discover-hunts.webp',
          alt: 'CityHunts Explore page with search, grid and map view controls, filters, and hunt cards.',
          title: 'Discover adventures',
          description: 'Search routes and filter by destination. Switch between cards and map; each listing shows its city, duration, and difficulty.',
          caption: 'Screenshot of the public hunt discovery page.',
          width: 1440,
          height: 1200,
        },
        {
          src: '/articles/cityhunts/hunt-detail.webp',
          alt: 'A CityHunts Milan adventure detail page showing its cover, duration, five locations, starting point, and start button.',
          title: 'Preview a route before playing',
          description: 'The detail page brings together the story, starting point, duration, difficulty, and number of locations before players begin.',
          caption: 'Public detail page: The Secrets of the Visconti Serpent.',
          width: 1440,
          height: 1200,
        },
        {
          src: '/articles/cityhunts/gameplay-challenge.webp',
          alt: 'Mobile gameplay screen showing progress, the Duomo di Milano location, a clue, hint button, answer field, and submit action.',
          title: 'Solve clues on location',
          description: 'The game screen tracks progress, guides players to a real place, and presents a contextual question. Players can request a hint and submit an answer.',
          caption: 'Screenshot of a public free hunt in gameplay.',
          width: 880,
          height: 960,
        },
        {
          src: '/articles/cityhunts/ai-hunt-generator.webp',
          alt: 'AI hunt generator with fields for city, language, number of stops, creative direction, and a price summary.',
          title: 'Create a hunt with AI',
          description: 'Choose a city or area, output language, number of stops, and optional creative direction. The price updates per stop; generation continues after checkout.',
          caption: 'Screenshot of the public AI creation page.',
          width: 1440,
          height: 1200,
        },
      ],
      links: [
        { label: 'Visit CityHunts', href: 'https://cityhunts.net/' },
        { label: 'Play the Granada hunt', href: 'https://cityhunts.net/hunts/2c18ceea-ea38-47a7-b25b-c6b483691e2c/' },
        { label: 'Explore Granada hunts', href: 'https://cityhunts.net/granada/' },
      ],
      cta: 'CityHunts lets players start an adventure in a phone browser and explore at their own pace.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Do I need to install an app?', a: 'No. The experience runs in your mobile browser.' },
        { q: 'Do I need to book a time or hire a guide?', a: 'No. It is self-guided, so you can start when it suits you.' },
        { q: 'What is included in the Granada hunt?', a: 'A route through central Granada and the Albaicín, with clues and challenges at real places.' },
        { q: 'What did you work on?', a: 'I contributed to the architecture and product. This page does not claim specific metrics or a more detailed individual scope.' },
      ],
    },
  },
  munford: {
    es: {
      kicker: 'El Caso Munford · Android',
      intro:
        'App Android para una exposición fotográfica con **juego de crimen** interactivo. La interfaz acompaña al visitante por una historia presencial con pistas y audio.',
      tech: ['Android', 'JavaScript', 'PhoneGap / Cordova', 'Audio'],
      links: [
        {
          label: 'Repositorio público en GitHub',
          href: 'https://github.com/Rauleinstein/MumfordApp',
        },
      ],
      cta: 'Para hablar de narrativa interactiva y experiencias móviles, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Se puede descargar desde una tienda?', a: 'No afirmo que la ficha de tienda siga activa. El repositorio público conserva el proyecto.' },
        { q: '¿Qué muestra el historial?', a: 'Iteraciones en controles, navegación, texto, puntuación y reproducción de audio.' },
      ],
      screenshotsHeading: 'Pantalla de la app',
      screenshots: [
        {
          src: '/articles/munford/intro.png',
          alt: 'Pantalla de bienvenida de El Caso Munford con la introducción del juego, el botón Empezar y el elenco.',
          title: 'Introducción al juego',
          description: 'La pantalla presenta la experiencia de misterio antes de iniciar la exposición interactiva.',
          caption: 'Captura del HTML del repositorio en vista web. Se usó un stub local de MobileAccessibility; no se simuló el comportamiento nativo de Cordova.',
          width: 390,
          height: 844,
        },
      ],
    },
    en: {
      kicker: 'El Caso Munford · Android',
      intro:
        'Android app for a photography exhibition with an interactive **crime game**. The interface guides visitors through an in-person story with clues and audio.',
      tech: ['Android', 'JavaScript', 'PhoneGap / Cordova', 'Audio'],
      links: [
        {
          label: 'Public GitHub repository',
          href: 'https://github.com/Rauleinstein/MumfordApp',
        },
      ],
      cta: 'For a conversation about interactive narrative and mobile experiences, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Can visitors download it from an app store?', a: 'I do not claim that a store listing remains active. The public repository preserves the project.' },
        { q: 'What does the history show?', a: 'Iterations on controls, navigation, text, scoring, and audio playback.' },
      ],
      screenshotsHeading: 'App screen',
      screenshots: [
        {
          src: '/articles/munford/intro.png',
          alt: 'El Caso Munford welcome screen with the game introduction, a start button, and the cast.',
          title: 'Game introduction',
          description: 'The screen introduces the mystery experience before the interactive exhibition begins.',
          caption: 'Browser capture of the repository’s HTML. A local MobileAccessibility stub was used; native Cordova behavior was not simulated.',
          width: 390,
          height: 844,
        },
      ],
    },
  },
  'feria-libro-granada': {
    es: {
      kicker: 'Feria del Libro de Granada · ferialibrogranada.es',
      intro:
        'Desarrollo del **sitio institucional** de la feria, con agenda, noticias y contenidos para público general. Este caso se centra en la experiencia pública y no atribuye un stack técnico.',
      tech: ['Web pública', 'Eventos culturales', 'Contenidos'],
      links: [{ label: 'Sitio de la feria', href: 'https://ferialibrogranada.es' }],
      cta: 'Para hablar de sitios culturales y publicación de contenidos, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Qué alcance cubría?', a: 'Implementación web orientada a difusión del evento y soporte a contenidos editoriales.' },
        { q: '¿Qué stack se utilizó?', a: 'No atribuyo tecnologías que no pude verificar en un repositorio accesible.' },
      ],
      screenshotsHeading: 'Referencia del sitio público actual',
      screenshots: [
        {
          src: '/articles/feria-libro-granada/homepage.webp',
          alt: 'Portada pública actual de la Feria del Libro de Granada con navegación a expositores y programación y una ilustración central.',
          title: 'Portada actual de la feria',
          description: 'La versión pública actual presenta la feria con una ilustración y accesos a expositores, programación y búsqueda.',
          caption: 'Captura de referencia del sitio público actual; no documenta la implementación original del proyecto.',
          width: 1440,
          height: 900,
        },
      ],
    },
    en: {
      kicker: 'Granada Book Fair · ferialibrogranada.es',
      intro:
        'I developed the fair’s **institutional website**, with a schedule, news, and content for a broad audience. This case focuses on the public experience and does not claim a technical stack.',
      tech: ['Public web', 'Cultural events', 'Content'],
      links: [{ label: 'Fair website', href: 'https://ferialibrogranada.es' }],
      cta: 'For a conversation about cultural websites and content publishing, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'What was in scope?', a: 'Web delivery supporting event communication and editorial publishing.' },
        { q: 'Which stack was used?', a: 'I do not name technologies that I could not verify in an accessible repository.' },
      ],
      screenshotsHeading: 'Current public-site reference',
      screenshots: [
        {
          src: '/articles/feria-libro-granada/homepage.webp',
          alt: 'The current public Granada Book Fair homepage, with navigation to exhibitors and programming and a central illustration.',
          title: 'Current fair homepage',
          description: 'The current public page introduces the fair through an illustration and links to exhibitors, programming, and search.',
          caption: 'Reference capture of the current public site; it does not document the original project implementation.',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  'cgv-seguros': {
    es: {
      kicker: 'CGV Seguros · cgvseguros.com',
      intro:
        'Sitio **corporativo** para una correduría de seguros. La web presenta sus áreas de cobertura, su propuesta de asesoramiento y vías de contacto.',
      tech: ['Web', 'Seguros', 'Contenidos'],
      links: [{ label: 'CGV Seguros', href: 'https://cgvseguros.com' }],
      cta: 'Para hablar de proyectos web corporativos, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Qué presenta el sitio?', a: 'Áreas de cobertura, información sobre la correduría y opciones de contacto.' },
        { q: '¿Se publican resultados comerciales?', a: 'No. Este caso no atribuye cifras de captación ni conversiones.' },
      ],
      screenshotsHeading: 'Referencia del sitio público actual',
      screenshots: [
        {
          src: '/articles/cgv-seguros/homepage.webp',
          alt: 'Portada pública actual de CGV Seguros con logotipo, navegación y presentación de la correduría.',
          title: 'Portada de CGV Seguros',
          description: 'La página presenta su oferta de seguros para particulares y empresas.',
          caption: 'Captura de referencia del sitio público actual; no acredita la implementación original del proyecto.',
          width: 1280,
          height: 640,
        },
      ],
    },
    en: {
      kicker: 'CGV Seguros · cgvseguros.com',
      intro:
        '**Corporate** website for an insurance brokerage. It presents areas of cover, its advisory offer, and contact options.',
      tech: ['Web', 'Insurance', 'Content'],
      links: [{ label: 'CGV Seguros', href: 'https://cgvseguros.com' }],
      cta: 'For a conversation about corporate web projects, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'What does the site present?', a: 'Areas of cover, information about the brokerage, and ways to get in touch.' },
        { q: 'Are commercial results published?', a: 'No. This case makes no lead-generation or conversion claims.' },
      ],
      screenshotsHeading: 'Current public-site reference',
      screenshots: [
        {
          src: '/articles/cgv-seguros/homepage.webp',
          alt: 'Current public CGV Seguros homepage with its logo, navigation, and brokerage introduction.',
          title: 'CGV Seguros homepage',
          description: 'The page presents insurance services for individuals and businesses.',
          caption: 'Reference capture of the current public site; it does not prove the original project implementation.',
          width: 1280,
          height: 640,
        },
      ],
    },
  },
  'esdrujula-ediciones': {
    es: {
      kicker: 'Esdrújula Ediciones · editorial independiente',
      intro:
        'Web para una **editorial independiente**, con catálogo y noticias. La ficha pública de la Feria describe además muestras de lectura para acercar las obras al público.',
      tech: ['Web', 'Editorial', 'UX lectura'],
      links: [{ label: 'Ficha en la Feria del Libro de Granada', href: 'https://ferialibrogranada.es/expositor/esdrujula-libreria/' }],
      cta: 'Para hablar de sitios editoriales y descubrimiento de catálogo, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Qué contenido presenta?', a: 'Catálogo, colecciones, autores y noticias; la ficha pública de la Feria menciona capítulos de muestra.' },
        { q: '¿Qué CMS o stack utiliza?', a: 'No atribuyo una plataforma técnica sin un repositorio accesible o una fuente pública fiable.' },
      ],
      screenshotsHeading: 'Ficha pública de la Feria',
      screenshots: [
        {
          src: '/articles/esdrujula-ediciones/exhibitor-page.png',
          alt: 'Perfil público de Esdrújula Librería en el sitio de la Feria del Libro de Granada, con su logotipo y descripción editorial.',
          title: 'Perfil de expositor',
          description: 'Esta captura procede del directorio de la Feria; no es el sitio original de la editorial.',
          caption: 'Ficha pública de expositor; referencia contextual, no captura de la web original de Esdrújula.',
          width: 1440,
          height: 900,
        },
      ],
    },
    en: {
      kicker: 'Esdrújula Ediciones · independent publisher',
      intro:
        'Website for an **independent publisher**, with a catalogue and news. The fair’s public profile also describes reading samples that help readers explore the books.',
      tech: ['Web', 'Publishing', 'Reading UX'],
      links: [{ label: 'Granada Book Fair exhibitor profile', href: 'https://ferialibrogranada.es/expositor/esdrujula-libreria/' }],
      cta: 'For a conversation about publisher websites and catalogue discovery, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'What content does it present?', a: 'The catalogue, collections, authors, and news. The fair profile mentions sample chapters.' },
        { q: 'Which CMS or stack does it use?', a: 'I do not name a platform without an accessible repository or reliable public source.' },
      ],
      screenshotsHeading: 'Public fair profile',
      screenshots: [
        {
          src: '/articles/esdrujula-ediciones/exhibitor-page.png',
          alt: 'Esdrújula Librería’s public profile on the Granada Book Fair site, with its logo and publisher description.',
          title: 'Exhibitor profile',
          description: 'This capture comes from the fair directory; it is not the publisher’s original website.',
          caption: 'Public exhibitor profile for context; not a screenshot of Esdrújula’s original website.',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  entradasytickets: {
    es: {
      kicker: 'EntradasyTickets · entradasytickets.com',
      intro:
        'Plataforma de **venta de entradas**: descubrimiento de eventos, flujo de compra y operación web. Enfoque en **fiabilidad** del recorrido de usuario y mantenimiento del front.',
      tech: ['E-commerce', 'Ticketing', 'Web'],
      links: [{ label: 'EntradasyTickets', href: 'https://entradasytickets.com' }],
      cta: 'Sin cifras confidenciales; el interés comercial o técnico se ve en conversación. me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Pasarela de pago?', a: 'Este resumen no detalla proveedores; el caso largo puede hacerlo con permiso.' },
        { q: '¿Solo frontend?', a: 'El alcance exacto por fase se describe en entrevista; aquí solo un resumen de portfolio.' },
      ],
      screenshotsHeading: 'Referencia de la página pública actual',
      screenshots: [
        {
          src: '/articles/entradasytickets/homepage-hero.webp',
          alt: 'Portada pública actual de EntradasyTickets con la cabecera y el evento Rainbowdolls Sevilla 2027.',
          title: 'Evento destacado',
          description: 'La captura muestra un evento destacado en la página pública actual.',
          caption: 'Captura de referencia del sitio público actual, recortada para excluir el control de cookies; no acredita la implementación original.',
          width: 1440,
          height: 622,
        },
      ],
    },
    en: {
      kicker: 'EntradasyTickets · entradasytickets.com',
      intro:
        '**Ticketing** platform: event discovery, purchase flow, and dependable web operations. Emphasis on **reliable** UX and sustainable front-end delivery.',
      tech: ['E-commerce', 'Ticketing', 'Web'],
      links: [{ label: 'EntradasyTickets', href: 'https://entradasytickets.com' }],
      cta: 'No undisclosed business metrics here. me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Payment providers?', a: 'Not specified in this stub; a deeper case needs stakeholder approval.' },
        { q: 'Full-stack scope?', a: 'Exact phase-by-phase scope is interview material; this page is a portfolio summary.' },
      ],
      screenshotsHeading: 'Current public-site reference',
      screenshots: [
        {
          src: '/articles/entradasytickets/homepage-hero.webp',
          alt: 'Current public EntradasyTickets homepage with the header and Rainbowdolls Sevilla 2027 event.',
          title: 'Featured event',
          description: 'The capture shows a featured event on the current public page.',
          caption: 'Reference capture of the current public site, cropped to remove the cookie control; it does not prove the original implementation.',
          width: 1440,
          height: 622,
        },
      ],
    },
  },
  atlantis: {
    es: {
      kicker: 'Atlantis · ETSIIT UGR',
      intro:
        '**Proyecto académico** (2º premio, Desafío Tecnológico ETSIIT): prototipo orientado al **control de asistencia** en eventos, combinando hardware y lógica de sistema. Base de mi trayectoria en **ingeniería** antes del salto a producto web a escala.',
      tech: ['Hardware', 'Prototipo', 'Eventos', 'UGR'],
      links: [{ label: 'ETSIIT — Universidad de Granada', href: 'https://etsiit.ugr.es' }],
      cta: 'No encontré una ficha pública del prototipo. Para hablar del proyecto descrito en el portfolio, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Hay demo pública?', a: 'Fue un reto académico; material público depende de archivo universitario.' },
        { q: '¿Código abierto?', a: 'No se enlaza repositorio aquí; el foco es el aprendizaje y el resultado del concurso.' },
      ],
    },
    en: {
      kicker: 'Atlantis · ETSIIT UGR',
      intro:
        '**Academic** project (2nd prize, ETSIIT technology challenge): prototype for **event attendance** tracking, mixing hardware concerns with system logic. Early **engineering** foundation before large-scale web product work.',
      tech: ['Hardware', 'Prototype', 'Events', 'UGR'],
      links: [{ label: 'ETSIIT — University of Granada', href: 'https://etsiit.ugr.es' }],
      cta: 'I found no public prototype page. For a conversation about the project described in this portfolio, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Is there a public demo?', a: 'It was a student challenge; public artifacts depend on university archives.' },
        { q: 'Open source?', a: 'No repo linked here; emphasis is learning and competition outcome.' },
      ],
    },
  },
  'omega-protocol': {
    es: {
      kicker: 'Omega Protocol · omega-protocol.net',
      intro:
        '**Omega Protocol** es un juego móvil incremental de estrategia y horror cósmico. El jugador dirige una IA que explora los restos del universo y automatiza su producción.',
      tech: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'AsyncStorage', 'AdMob'],
      links: [{ label: 'Sitio del juego', href: 'https://omega-protocol.net' }],
      cta: 'Para hablar de simulación, diseño de juegos móviles y monetización sin cifras no verificadas, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿En qué plataformas está disponible?', a: 'El sitio oficial enlaza las versiones móviles del juego.' },
        { q: '¿Qué reto técnico destaca?', a: 'El historial muestra la evolución hacia un motor de simulación continua y progreso sin conexión con límites.' },
      ],
      screenshotsHeading: 'Pantalla del juego',
      screenshots: [
        {
          src: '/articles/omega-protocol/gameplay.jpg',
          alt: 'Pantalla móvil de Omega Protocol con ranuras de habilidades, habilidades desbloqueadas y niveles representados con estrellas.',
          title: 'Gestionar habilidades',
          description: 'La pestaña de equipo muestra habilidades disponibles, rangos y ranuras bloqueadas.',
          caption: 'Captura de una pantalla del juego móvil procedente del repositorio del proyecto.',
          width: 576,
          height: 1280,
        },
      ],
    },
    en: {
      kicker: 'Omega Protocol · omega-protocol.net',
      intro:
        '**Omega Protocol** is a mobile incremental strategy game with a cosmic-horror setting. Players guide an AI through the remains of the universe and automate its production.',
      tech: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'AsyncStorage', 'AdMob'],
      links: [{ label: 'Game website', href: 'https://omega-protocol.net' }],
      cta: 'For a conversation about simulation, mobile game design, and monetisation without unsupported figures, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Which platforms are available?', a: 'The official site links to the mobile game listings.' },
        { q: 'Which technical challenge stands out?', a: 'The history shows a move to continuous simulation and bounded offline progress.' },
      ],
      screenshotsHeading: 'Game screen',
      screenshots: [
        {
          src: '/articles/omega-protocol/gameplay.jpg',
          alt: 'Omega Protocol mobile screen with skill slots, unlocked skills, and star-based ranks.',
          title: 'Manage skills',
          description: 'The equipment tab shows available skills, ranks, and locked slots.',
          caption: 'Capture of a mobile-game screen from the project repository.',
          width: 576,
          height: 1280,
        },
      ],
    },
  },
  dungeonkeeper: {
    es: {
      kicker: 'MeepleHelper · anteriormente DungeonKeeper',
      intro:
        '**MeepleHelper**, antes DungeonKeeper, ayuda a preparar y gestionar partidas de juegos de mesa. Incluye una app móvil, un asistente de voz y búsqueda de reglas en manuales PDF con referencias a su fuente.',
      tech: ['React Native', 'Expo', 'Node.js', 'Express', 'TypeScript', 'MongoDB', 'Redis', 'Next.js', 'RAG / PDF'],
      links: [],
      cta: 'El repositorio no es público, así que no enlazo código ni datos operativos. Para conversar sobre el proyecto, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Cómo ayuda con las reglas?', a: 'Procesa reglamentos PDF y recupera respuestas con referencias al contenido fuente.' },
        { q: '¿Qué incluye la arquitectura?', a: 'App React Native/Expo, API Node.js/Express, datos MongoDB y Redis, y un panel Next.js.' },
        { q: '¿Dónde está el código?', a: 'El repositorio es privado; este caso comparte un resumen de alto nivel.' },
      ],
      screenshotsHeading: 'Interfaz móvil',
      screenshots: [
        {
          src: '/articles/meeplehelper/game-selection.jpg',
          alt: 'Pantalla de selección de juegos de MeepleHelper con buscador, filtros de favoritos y recientes y una lista de juegos.',
          title: 'Elegir un juego',
          description: 'La pantalla permite buscar juegos de mesa y consultar la lista disponible antes de abrir una sesión.',
          caption: 'Captura de la interfaz móvil del proyecto, con títulos y miniaturas tal como aparecen en la app.',
          width: 576,
          height: 1280,
        },
      ],
    },
    en: {
      kicker: 'MeepleHelper · formerly DungeonKeeper',
      intro:
        '**MeepleHelper**, formerly DungeonKeeper, helps people prepare and manage board-game sessions. It combines a mobile app, voice assistant, and PDF rulebook search with source references.',
      tech: ['React Native', 'Expo', 'Node.js', 'Express', 'TypeScript', 'MongoDB', 'Redis', 'Next.js', 'RAG / PDF'],
      links: [],
      cta: 'The repository is private, so I do not link code or operational data. For a conversation about the project, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'How does it help with rules?', a: 'It processes PDF rulebooks and retrieves answers with references to source content.' },
        { q: 'What does the architecture include?', a: 'A React Native/Expo app, Node.js/Express API, MongoDB and Redis data, and a Next.js dashboard.' },
        { q: 'Where is the code?', a: 'The repository is private. This case shares a high-level summary.' },
      ],
      screenshotsHeading: 'Mobile interface',
      screenshots: [
        {
          src: '/articles/meeplehelper/game-selection.jpg',
          alt: 'MeepleHelper game-selection screen with search, favourites and recent filters, and a list of games.',
          title: 'Choose a game',
          description: 'The screen lets players search for board games and review the list before opening a session.',
          caption: 'Capture of the project’s mobile interface, showing titles and thumbnails as they appear in the app.',
          width: 576,
          height: 1280,
        },
      ],
    },
  },
}

/** Shape expected by scripts/prerender.tsx JSON-LD builder */
export function getStubPrerenderI18n(
  config: { id: string; titles: { es: string; en: string } },
  lang: 'es' | 'en'
) {
  const body = ARTICLE_STUB_BODIES[config.id][lang]
  return {
    header: { h1: config.titles[lang] },
    nav: {
      breadcrumbHome: lang === 'es' ? 'Inicio' : 'Home',
      breadcrumbCurrent: config.titles[lang],
    },
    faq: { items: body.faq },
  }
}
