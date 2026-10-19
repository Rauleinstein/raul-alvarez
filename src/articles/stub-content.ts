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
  'custodio-digital': {
    es: {
      kicker: 'Custodio Digital · custodio.digital',
      intro:
        'Custodio Digital es un spin-off de **Aircury** orientado a **administraciones y fuerzas de seguridad**: cadena de custodia digital **inalterable**, claves únicas por dispositivo incautado (evita mezclar activos entre investigaciones), metadatos (imágenes, vídeo, geolocalización) en el registro, despliegue **on-premise** en el centro de datos del organismo e integración con **HSM**. El producto se declara alineado con **RGPD**, **MiCA**, **ISO/IEC 27001** y el **Esquema Nacional de Seguridad (ENS)**. Lideré el producto como **CTO** junto al equipo en Granada (sede en Calle Recogidas 35).',
      tech: [
        'AWS',
        'HSM',
        'RBAC',
        'Multisig',
        'Trazabilidad / auditoría',
        'On-premise',
        'ENS · ISO 27001 · MiCA / RGPD',
        'Symfony / Node',
      ],
      links: [
        { label: 'Sitio público', href: 'https://custodio.digital' },
        { label: 'Aircury', href: 'https://www.aircury.com' },
        { label: 'Contacto Custodio (info@custodio.digital)', href: 'mailto:info@custodio.digital' },
      ],
      cta: 'Estoy redactando el caso técnico completo (arquitectura, amenazas mitigadas y lecciones). Si te interesa profundizar o una charla con el equipo, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Qué problema resuelve Custodio Digital?',
          a: 'Da trazabilidad verificable del decomiso a la transferencia final de criptoactivos y evidencias asociadas, con controles institucionales (roles, aprobaciones, custodia de claves en HSM) y opción on-premise.',
        },
        {
          q: '¿Cuál fue tu rol?',
          a: 'Como CTO lideré la visión de producto, la arquitectura técnica y la coordinación con stakeholders; el write-up largo detallará decisiones y trade-offs.',
        },
        {
          q: '¿Hay documentación pública del caso?',
          a: 'Esta página resume el caso técnico con capturas del sitio público; el artículo largo ampliará arquitectura y aprendizajes.',
        },
        {
          q: '¿Dónde está la empresa?',
          a: 'Según el sitio público, la sede está en Calle Recogidas 35, 1A, 18005 Granada, España, con contacto telefónico +34 623 002 236.',
        },
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
        'Custodio Digital is an **Aircury** spin-off built for **governments and law enforcement**: an **unalterable** digital chain of custody, **unique private keys per seized device** (so assets from different investigations do not mix), optional **metadata** (images, video, geolocation) in the record, **on-premise** deployment in the agency’s data centre, and **HSM** integration. The public positioning cites alignment with **GDPR**, **MiCA**, **ISO/IEC 27001**, and Spain’s **National Security Framework (ENS)**. I led the product as **CTO** with the Granada-based team (office at Calle Recogidas 35).',
      tech: [
        'AWS',
        'HSM',
        'RBAC',
        'Multisig',
        'Traceability / audit',
        'On-premise',
        'ENS · ISO 27001 · MiCA / GDPR',
        'Symfony / Node',
      ],
      links: [
        { label: 'Public site', href: 'https://custodio.digital' },
        { label: 'Aircury', href: 'https://www.aircury.com' },
        { label: 'Custodio contact (info@custodio.digital)', href: 'mailto:info@custodio.digital' },
      ],
      cta: 'A full technical write-up (architecture, threat model, and lessons learned) is in progress. For a deeper walkthrough, email me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        {
          q: 'What problem does Custodio solve?',
          a: 'It provides verifiable traceability from seizure through final transfer of crypto assets and related evidence, with institutional controls (roles, approvals, HSM-backed keys) and optional on-premise hosting.',
        },
        {
          q: 'What was your role?',
          a: 'As CTO I owned product direction, technical architecture, and stakeholder alignment; the long-form case study will document concrete decisions.',
        },
        {
          q: 'Is there public documentation yet?',
          a: 'This page summarizes the case study with screenshots from the public marketing site; a longer article will add architecture detail.',
        },
        {
          q: 'Where is the company based?',
          a: 'Per the public site: Calle Recogidas 35, 1A, 18005 Granada, Spain; phone +34 623 002 236.',
        },
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
        'En el ecosistema **Smartgrade**, **Powermark** es su herramienta de **auto-corrección con IA**: según su página pública en Reino Unido, orienta a reducir el tiempo de corrección (clientes citan ahorros del **65 % al 90 %** frente al marcado manual), marca en tiempo real evaluaciones **HeadStart Primary** Reading y GPS u otras **online personalizadas**, con precisión declarada típicamente **94–97 %**, sin enviar **datos identificables** de alumnos a los modelos, con **informes agregados** para clase/cohorte y **moderación y anulación** por el profesorado (respuestas de baja confianza destacadas). En **Aircury** diseñé y supervisé la pila **PowerMark** (**OCR** + **PLN**) integrada con Smartgrade para respuestas manuscritas y test: inferencia, calidad de datos y despliegue con equipos pedagógicos.',
      tech: [
        'OCR',
        'PLN / NLP',
        'Auto-corrección asistida',
        'Moderación docente',
        'Privacidad y cumplimiento',
        'Integración EdTech',
        'Observabilidad',
      ],
      links: [
        {
          label: 'Powermark — Smartgrade UK (página oficial)',
          href: 'https://www.smartgrade.co.uk/solutions/ai-auto-marking',
        },
        { label: 'Smartgrade', href: 'https://www.smartgrade.com' },
        { label: 'Aircury', href: 'https://www.aircury.com' },
      ],
      cta: 'El caso largo (métricas propias, evaluación del modelo y operación en aula) está en preparación. Colaboración o demo: me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Powermark y PowerMark son lo mismo?',
          a: 'Powermark es el nombre comercial del producto Smartgrade para auto-corrección con IA. PowerMark es la línea de trabajo en Aircury (OCR y PLN) integrada con esa plataforma.',
        },
        {
          q: '¿Qué precisión comunica Smartgrade?',
          a: 'En su documentación pública indican objetivo de más del 94 % donde hay guías de corrección detalladas; citan un ensayo grande (HeadStart Reading y GPS, ~9.500 respuestas) con 97 % de acierto del IA frente a 94 % del marcado docente. La precisión puede bajar si la pregunta es ambigua o la rúbrica es menos estricta.',
        },
        {
          q: '¿Cómo limitan riesgos habituales de la IA?',
          a: 'Smartgrade describe puntuaciones de confianza por respuesta, revisión prioritaria del profesorado, muestreo aleatorio y comprobación experta; afirman no usar los datos para entrenar modelos y no enviar PII a LLMs externos.',
        },
        {
          q: '¿Qué hiciste tú en PowerMark?',
          a: 'Arquitectura y supervisión de pipelines de inferencia, calidad de datos y despliegue seguro alineado con equipos pedagógicos; el artículo extenso detallará alcance y límites.',
        },
        {
          q: '¿Y los exámenes en papel?',
          a: 'Según Smartgrade UK, la siguiente fase es marcar evaluaciones escaneadas en papel; ofrecen piloto y contacto comercial para participar.',
        },
      ],
      screenshotsHeading: 'Capturas — Powermark (Smartgrade UK)',
      screenshots: [
        {
          src: '/articles/powermark/powermark1.png',
          alt: 'Smartgrade UK: hero de Powermark con titular sobre reducir horas de corrección y cuatro tarjetas de valor (precisión, carga de trabajo, seguridad, feedback).',
          caption:
            'Propuesta de valor — corrección en momentos, precisión en tiempo real (94–97 % citados), ahorro de tiempo (65–90 % según clientes), sin PII hacia modelos de IA, informes de clase/cohorte.',
          width: 1373,
          height: 966,
        },
        {
          src: '/articles/powermark/powermark2.png',
          alt: 'Smartgrade UK: sección «How does Powermark work?» con cuatro pasos (Marketplace, envío online, IA con baja confianza marcada, informes agregados).',
          caption:
            'Flujo — evaluación habilitada para IA, entrega online, marcado automático con respuestas dudosas arriba del informe, informes agregados y de debilidades.',
          width: 1462,
          height: 923,
        },
      ],
    },
    en: {
      kicker: 'PowerMark · Aircury × Smartgrade (Powermark)',
      intro:
        'Within **Smartgrade**, **Powermark** is their **AI auto-marking** product: per Smartgrade’s UK marketing site, it targets a sharp drop in marking time (customers report **65–90 %** savings vs traditional marking), **real-time** marking for **HeadStart Primary** Reading and GPS or **custom online** papers, typically **94–97 %** accuracy, **no personally identifiable information** sent to AI models, **aggregated** class and cohort feedback, and **teacher moderation and override** (low-confidence answers surfaced first). At **Aircury** I designed and oversaw the **PowerMark** stack (**OCR** + **NLP**) integrated with Smartgrade for handwritten responses and tests—inference, data quality, and rollout with pedagogical teams.',
      tech: [
        'OCR',
        'NLP',
        'AI-assisted marking',
        'Teacher moderation',
        'Privacy & compliance',
        'EdTech integration',
        'Observability',
      ],
      links: [
        {
          label: 'Powermark — Smartgrade UK (official page)',
          href: 'https://www.smartgrade.co.uk/solutions/ai-auto-marking',
        },
        { label: 'Smartgrade', href: 'https://www.smartgrade.com' },
        { label: 'Aircury', href: 'https://www.aircury.com' },
      ],
      cta: 'A long-form case study (our own metrics, model evaluation, and classroom operations) is in preparation. Partnerships or a walkthrough: me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        {
          q: 'Are Powermark and PowerMark the same thing?',
          a: 'Powermark is Smartgrade’s product name for AI auto-marking. PowerMark is Aircury’s OCR+NLP work integrated with that platform.',
        },
        {
          q: 'What accuracy does Smartgrade publish?',
          a: 'They aim for 94%+ where marking guidance is detailed, and cite a large HeadStart Reading and GPS sample (~9,500 responses) at 97% AI accuracy vs 94% for teachers. Accuracy can fall into the 80–90% range when questions or guidance are weaker.',
        },
        {
          q: 'How do they mitigate common AI risks?',
          a: 'They describe per-answer confidence scoring, priority teacher review, random sampling with expert checks, and tight mark schemes; they state student data is not used for model training and PII is not passed to external LLMs.',
        },
        {
          q: 'What was your role on PowerMark?',
          a: 'I owned inference pipeline design and oversight, data quality, and safe rollout with pedagogical stakeholders; the full article will spell out scope and limits.',
        },
        {
          q: 'What about paper assessments?',
          a: 'Smartgrade UK positions scanned paper marking as the next Powermark phase and invites schools/MATs to join a pilot via their sales channel.',
        },
      ],
      screenshotsHeading: 'Screenshots — Powermark (Smartgrade UK)',
      screenshots: [
        {
          src: '/articles/powermark/powermark1.png',
          alt: 'Smartgrade UK Powermark hero: headline on marking time and four value cards (accuracy, workload, secure AI, personalised feedback).',
          caption:
            'Value proposition — marking in moments, real-time accuracy (94–97% as stated on-page), time savings (65–90% per customer reports), no PII to AI models, class and cohort reporting.',
          width: 1373,
          height: 966,
        },
        {
          src: '/articles/powermark/powermark2.png',
          alt: 'Smartgrade UK “How does Powermark work?” with four steps: marketplace assessment, online submission, AI with low-confidence flags, aggregated teacher reports.',
          caption:
            'Flow — AI-enabled assessment from the Marketplace, online attempt, auto-marking with doubtful answers surfaced for review, aggregated and misconception-focused reports.',
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
      cta: 'En Granada, la ruta se disfruta en unas 1–2 horas, con flexibilidad para parar y explorar. CityHunts también ofrece creación de aventuras personalizadas con IA.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Hay que instalar una app?', a: 'No. La experiencia se abre en el navegador del móvil.' },
        { q: '¿Se necesita reservar hora o contratar un guía?', a: 'No. Es una experiencia autoguiada que puedes empezar cuando te venga bien.' },
        { q: '¿Qué ofrece la ruta de Granada?', a: 'Un recorrido flexible por el centro y el Albaicín, con pistas y retos en lugares reales. La ruta dura aproximadamente 1–2 horas.' },
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
      cta: 'The Granada hunt takes about 1–2 hours, with room to pause and explore. CityHunts also offers AI-powered creation for custom adventures.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Do I need to install an app?', a: 'No. The experience runs in your mobile browser.' },
        { q: 'Do I need to book a time or hire a guide?', a: 'No. It is self-guided, so you can start when it suits you.' },
        { q: 'What is included in the Granada hunt?', a: 'A flexible route through central Granada and the Albaicín, with clues and challenges at real places. It takes about 1–2 hours.' },
        { q: 'What did you work on?', a: 'I contributed to the architecture and product. This page does not claim specific metrics or a more detailed individual scope.' },
      ],
    },
  },
  munford: {
    es: {
      kicker: 'El Caso Munford · Android',
      intro:
        'App Android para una exposición fotográfica con **juego de crimen** interactivo: narrativa, pruebas y recorrido físico. Proyecto creativo-técnico previo a mi foco actual en IA.',
      tech: ['Android', 'JavaScript', 'UX narrativa'],
      links: [
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.raulalvarez.munfordapp',
        },
      ],
      cta: 'Un caso retro con aprendizajes de publicación y mantenimiento llegará aquí. Curiosidad técnica: me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Sigue disponible en Play Store?', a: 'Sí; el artículo largo cubrirá stack, decisiones y métricas si aplica.' },
        { q: '¿Relación con tu trabajo actual?', a: 'Es parte de mi trayectoria de producto digital; hoy lidero IA en Aircury.' },
      ],
    },
    en: {
      kicker: 'El Caso Munford · Android',
      intro:
        'Android app for a photography exhibition with an interactive **crime game**: narrative, clues, and a physical walkthrough. A creative-technical project before my current AI focus.',
      tech: ['Android', 'JavaScript', 'Narrative UX'],
      links: [
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.raulalvarez.munfordapp',
        },
      ],
      cta: 'A retro case study on shipping and maintenance is planned. Questions: me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Is it still on the Play Store?', a: 'Yes; the long article will cover stack and metrics where relevant.' },
        { q: 'How does it relate to today’s work?', a: 'It’s part of my digital product path; I now lead AI at Aircury.' },
      ],
    },
  },
  'feria-libro-granada': {
    es: {
      kicker: 'Feria del Libro de Granada · ferialibrogranada.es',
      intro:
        'Desarrollo y evolución del **sitio institucional** de la feria: agenda, noticias y contenidos para público general. Prioricé **rendimiento**, claridad de información y un front mantenible junto al stack **PHP** del proyecto.',
      tech: ['PHP', 'Frontend', 'Contenidos', 'Web pública'],
      links: [{ label: 'Sitio de la feria', href: 'https://ferialibrogranada.es' }],
      cta: 'Este resumen sustituye métricas internas por un enfoque de portfolio. Para colaboraciones similares: me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Qué alcance cubría?', a: 'Implementación web orientada a difusión del evento y soporte a contenidos editoriales.' },
        { q: '¿Stack concreto?', a: 'PHP y capa de presentación según el proyecto; el artículo largo detallará módulos si aplica.' },
      ],
    },
    en: {
      kicker: 'Granada Book Fair · ferialibrogranada.es',
      intro:
        'Delivery and iteration on the fair’s **public website**: schedule, news, and editorial content for a broad audience. Focus on **performance**, clear IA, and a maintainable **PHP**-based front.',
      tech: ['PHP', 'Frontend', 'Content', 'Public web'],
      links: [{ label: 'Fair website', href: 'https://ferialibrogranada.es' }],
      cta: 'Portfolio-safe summary without undisclosed metrics. Similar work: me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'What was in scope?', a: 'Web delivery supporting event communication and editorial publishing.' },
        { q: 'Which stack?', a: 'PHP plus presentation layer as used in the project; a longer write-up can name modules if useful.' },
      ],
    },
  },
  'cgv-seguros': {
    es: {
      kicker: 'CGV Seguros · cgvseguros.com',
      intro:
        'Sitio **corporativo** para mediación de seguros: mensaje claro de servicios, confianza y contacto. Trabajo de **maquetación**, estructura de contenidos y despliegue estable del proyecto web.',
      tech: ['Web', 'Corporate', 'Contenidos'],
      links: [{ label: 'CGV Seguros', href: 'https://cgvseguros.com' }],
      cta: 'Notas ampliadas bajo petición (arquitectura de información, accesibilidad). me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Tipo de proyecto?', a: 'Web orientada a presencia comercial y captación de consultas, no producto asegurador propio.' },
        { q: '¿Integraciones?', a: 'Este stub resume el caso; integraciones concretas se documentan si el cliente lo autoriza.' },
      ],
    },
    en: {
      kicker: 'CGV Seguros · cgvseguros.com',
      intro:
        '**Corporate** brokerage site: clear services narrative, trust signals, and contact paths. **Layout**, content structure, and stable delivery for the public web.',
      tech: ['Web', 'Corporate', 'Content'],
      links: [{ label: 'CGV Seguros', href: 'https://cgvseguros.com' }],
      cta: 'Extended notes on IA and accessibility available on request. me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'What kind of build?', a: 'Marketing-oriented corporate web for an insurance mediation business.' },
        { q: 'Third-party integrations?', a: 'Summarized here; specifics only with client approval.' },
      ],
    },
  },
  'esdrujula-ediciones': {
    es: {
      kicker: 'Esdrújula Ediciones · esdrujula.es',
      intro:
        'Web para **editorial**: catálogo, noticias y tono de marca alineado con lectores. Equilibrio entre **identidad visual** legible y rendimiento en dispositivos móviles.',
      tech: ['Web', 'Editorial', 'UX lectura'],
      links: [{ label: 'Esdrújula Ediciones', href: 'https://esdrujula.es' }],
      cta: 'Si buscas un perfil técnico para publishing digital, escribe a me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Incluye tienda online?', a: 'Este caso resume el sitio editorial público; comercio electrónico detallado no forma parte de este stub.' },
        { q: '¿CMS?', a: 'El detalle de CMS o flujo editorial puede ampliarse en conversación bajo NDA si aplica.' },
      ],
    },
    en: {
      kicker: 'Esdrújula Ediciones · esdrujula.es',
      intro:
        'Publisher **website**: catalog, news, and brand tone for readers. Balance of **visual identity** and mobile-friendly performance.',
      tech: ['Web', 'Publishing', 'Reading UX'],
      links: [{ label: 'Esdrújula Ediciones', href: 'https://esdrujula.es' }],
      cta: 'For digital publishing engineering roles, me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Was e-commerce in scope?', a: 'This stub covers the public editorial site; deeper commerce scope isn’t claimed here.' },
        { q: 'Which CMS?', a: 'Can be discussed under NDA if still relevant to stakeholders.' },
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
    },
  },
  atlantis: {
    es: {
      kicker: 'Atlantis · ETSIIT UGR',
      intro:
        '**Proyecto académico** (2º premio, Desafío Tecnológico ETSIIT): prototipo orientado al **control de asistencia** en eventos, combinando hardware y lógica de sistema. Base de mi trayectoria en **ingeniería** antes del salto a producto web a escala.',
      tech: ['Hardware', 'Prototipo', 'Eventos', 'UGR'],
      links: [{ label: 'ETSIIT — Universidad de Granada', href: 'https://etsiit.ugr.es' }],
      cta: 'Documentación del reto académico enlazada desde la escuela; preguntas técnicas retrospectivas: me@raul-alvarez.es.',
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
      cta: 'Challenge documentation lives with the school; retrospective questions: me@raul-alvarez.es.',
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
        '**Omega Protocol** es un juego **incremental / de estrategia** con atmósfera de **horror cósmico**, disponible en **iOS y Android** (referencia de versión pública **v1.1.0** según el sitio del proyecto). Combina progresión a largo plazo, decisiones tácticas y narrativa sombría.',
      tech: ['Incremental', 'Strategy', 'Mobile', 'Cosmic horror'],
      links: [{ label: 'Sitio del juego', href: 'https://omega-protocol.net' }],
      cta: 'Información factual tomada del sitio público; no reclamo métricas de negocio. Contacto: me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Es free-to-play?', a: 'Detalles de monetización y tiendas en el sitio oficial del juego.' },
        { q: '¿Tu rol fue solo desarrollo?', a: 'Este caso resume participación a alto nivel; el detalle por disciplina se puede ampliar bajo interés mutuo.' },
      ],
    },
    en: {
      kicker: 'Omega Protocol · omega-protocol.net',
      intro:
        '**Omega Protocol** is an **incremental strategy** game with **cosmic-horror** tone, shipped on **iOS and Android** (public **v1.1.0** reference per the project site). Long-horizon progression, tactical choices, and a dark narrative frame.',
      tech: ['Incremental', 'Strategy', 'Mobile', 'Cosmic horror'],
      links: [{ label: 'Game website', href: 'https://omega-protocol.net' }],
      cta: 'Facts sourced from the public site; no undisclosed business metrics. me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Monetization model?', a: 'See the official game site and store listings for authoritative detail.' },
        { q: 'Exact role breakdown?', a: 'High-level portfolio summary only; happy to clarify scope in conversation.' },
      ],
    },
  },
  dungeonkeeper: {
    es: {
      kicker: 'DungeonKeeper · monorepo privado',
      intro:
        '**DungeonKeeper** es un kit digital para **partidas de rol en mesa**: aplicación **React Native / Expo** para jugadores, **API Node (Express)** con **MongoDB**, panel **Next.js** para administración, asistentes de **IA y voz**, y **reglas en PDF** integradas en el flujo. Pensado como producto cohesionado en un **monorepo**, no como scripts sueltos.',
      tech: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'IA / voz'],
      links: [],
      cta: 'No enlazo repositorio público (enlace previo no disponible). Resumen basado en README interno; ampliación bajo confidencialidad si interesa. me@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Hay demo o capturas públicas?', a: 'Este stub es portfolio-safe; material visual se comparte con acuerdo explícito.' },
        { q: '¿Qué parte es IA?', a: 'Asistentes y voz orientados a facilitar la sesión; detalle técnico en conversación.' },
      ],
    },
    en: {
      kicker: 'DungeonKeeper · private monorepo',
      intro:
        '**DungeonKeeper** is a digital kit for **tabletop RPG sessions**: **React Native / Expo** player app, **Node (Express)** API on **MongoDB**, **Next.js** admin, **AI and voice** helpers, and **PDF rules** wired into the flow. Built as one coherent **monorepo** rather than ad-hoc scripts.',
      tech: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'AI / voice'],
      links: [],
      cta: 'No public GitHub link (prior URL was unavailable). Summary reflects a README-style brief; NDA-friendly deep dives on request. me@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Public demo or screenshots?', a: 'This stub stays portfolio-safe; visuals only with explicit agreement.' },
        { q: 'Where does AI show up?', a: 'Session assistance and voice UX; technical depth in direct conversation.' },
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
