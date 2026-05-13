/** Bilingual body copy for stub case-study pages + prerender JSON-LD FAQ */
export type StubScreenshot = {
  src: string
  alt: string
  caption: string
  width?: number
  height?: number
}

export type StubLangBlock = {
  kicker: string
  intro: string
  tech: string[]
  links: readonly { label: string; href: string }[]
  cta: string
  faqHeading: string
  faq: readonly { q: string; a: string }[]
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
      cta: 'A full technical write-up (architecture, threat model, and lessons learned) is in progress. For a deeper walkthrough, email hola@raul-alvarez.es.',
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
      cta: 'El caso largo (métricas propias, evaluación del modelo y operación en aula) está en preparación. Colaboración o demo: hola@raul-alvarez.es.',
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
      cta: 'A long-form case study (our own metrics, model evaluation, and classroom operations) is in preparation. Partnerships or a walkthrough: hola@raul-alvarez.es.',
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
      kicker: 'CityHunts · 2025',
      intro:
        '**CityHunts** son experiencias urbanas gamificadas: recorridos, pistas y narrativa en móvil. Contribuí a arquitectura **React / Node**, producto y despliegue.',
      tech: ['React', 'Node.js', 'Producto', 'Mapas / UX'],
      links: [],
      cta: 'Pronto publicaré capturas, flujo de usuario y decisiones técnicas. Contacto: hola@raul-alvarez.es.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        { q: '¿Está disponible la app?', a: 'El write-up enlazará stores o web pública cuando haya lanzamiento estable.' },
        { q: '¿Tu rol exacto?', a: 'Lo detallaré en el caso largo (frontend, backend o liderazgo técnico según fase).' },
      ],
    },
    en: {
      kicker: 'CityHunts · 2025',
      intro:
        '**CityHunts** are gamified city experiences: routes, clues, and narrative on mobile. I contributed across **React / Node** architecture, product, and rollout.',
      tech: ['React', 'Node.js', 'Product', 'Maps / UX'],
      links: [],
      cta: 'Screenshots, UX flow, and technical notes will follow. Contact: hola@raul-alvarez.es.',
      faqHeading: 'FAQ',
      faq: [
        { q: 'Is the app available?', a: 'The full article will link stores or the public web once stable.' },
        { q: 'What was your exact role?', a: 'The long-form case study will spell out scope by phase.' },
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
      cta: 'Un caso retro con aprendizajes de publicación y mantenimiento llegará aquí. Curiosidad técnica: hola@raul-alvarez.es.',
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
      cta: 'A retro case study on shipping and maintenance is planned. Questions: hola@raul-alvarez.es.',
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
      cta: 'Este resumen sustituye métricas internas por un enfoque de portfolio. Para colaboraciones similares: hola@raul-alvarez.es.',
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
      cta: 'Portfolio-safe summary without undisclosed metrics. Similar work: hola@raul-alvarez.es.',
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
      cta: 'Notas ampliadas bajo petición (arquitectura de información, accesibilidad). hola@raul-alvarez.es.',
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
      cta: 'Extended notes on IA and accessibility available on request. hola@raul-alvarez.es.',
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
      cta: 'Si buscas un perfil técnico para publishing digital, escribe a hola@raul-alvarez.es.',
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
      cta: 'For digital publishing engineering roles, hola@raul-alvarez.es.',
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
      cta: 'Sin cifras confidenciales; el interés comercial o técnico se ve en conversación. hola@raul-alvarez.es.',
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
      cta: 'No undisclosed business metrics here. hola@raul-alvarez.es.',
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
      cta: 'Documentación del reto académico enlazada desde la escuela; preguntas técnicas retrospectivas: hola@raul-alvarez.es.',
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
      cta: 'Challenge documentation lives with the school; retrospective questions: hola@raul-alvarez.es.',
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
      cta: 'Información factual tomada del sitio público; no reclamo métricas de negocio. Contacto: hola@raul-alvarez.es.',
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
      cta: 'Facts sourced from the public site; no undisclosed business metrics. hola@raul-alvarez.es.',
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
      cta: 'No enlazo repositorio público (enlace previo no disponible). Resumen basado en README interno; ampliación bajo confidencialidad si interesa. hola@raul-alvarez.es.',
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
      cta: 'No public GitHub link (prior URL was unavailable). Summary reflects a README-style brief; NDA-friendly deep dives on request. hola@raul-alvarez.es.',
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
