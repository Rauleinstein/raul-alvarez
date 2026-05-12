export type AboutLang = 'es' | 'en'

/** About / entity page — aligned with LinkedIn CV (May 2026) */
export const aboutContent = {
  es: {
    slug: 'sobre-mi',
    altSlug: 'about',
    seo: {
      title: 'Raúl Álvarez Hinojosa | Sobre mí · AI Architect · raul-alvarez.es',
      description:
        'Head of AI Architecture en Aircury (Granada). Custodio Digital, PowerMark, CityHunts. Trayectoria Chess24, ByBubbly, RedEduca. C2 inglés Trinity, Professional Scrum Master.',
    },
    heading: 'Raúl Álvarez Hinojosa',
    subtitle: 'AI Architect · AI Solutions Engineer · Head of AI @ Aircury',
    location: 'Granada, España · remoto EU',
    lastUpdated: 'Mayo 2026',
    bio: [
      'Lidero la arquitectura de IA en **Aircury** (Granada): sistemas LLM en producción, evaluación y guardrails, flujos agénticos y RAG, además de pipelines **OCR + PLN** para producto educativo (**PowerMark**) y entornos de alta exigencia operativa.',
      'Fui **CTO** de **Custodio Digital**, spin-off de custodia institucional de activos digitales (RBAC, multisig, trazabilidad). Antes: **Chess24** (plataforma ajedrez), **ByBubbly** (Oslo, vending + full‑stack) y prácticas en **RedEduca**.',
      'Ingeniería de Telecomunicación (trayectoria **ETSIIT UGR**). Certificación **C2** inglés (Trinity 2024) y **Professional Scrum Master** (Scrum.org). Abierto a roles remotos de AI architecture / AI solutions leadership.',
    ],
    seeking: 'Roles remotos: AI Architect, AI Solutions Engineer, liderazgo técnico en IA (EU / compatible TZ).',
    roles: [
      'AI system design & LLM production',
      'Agentic workflows & RAG',
      'OCR/NLP & integrations',
      'Security-minded architecture',
    ],
    timelineHeading: 'Trayectoria',
    timeline: [
      {
        period: '2022 — presente',
        role: 'Full Stack → Team Leader → Head of Artificial Intelligence',
        company: 'Aircury',
        desc: 'Granada · Custodio Digital (CTO spin-off), PowerMark (EdTech IA), Windsor, ScholarPack, Compass+ y plataforma interna.',
      },
      { period: '2020 — 2022', role: 'Software Engineer', company: 'Chess24', desc: 'Producto y backend en escala global de ajedrez online.' },
      { period: '2015 — 2020', role: 'Full stack / software owner', company: 'ByBubbly AS (Oslo)', desc: 'App iOS vending, PHP + MySQL, AngularJS; adopción de Scrum en toda la empresa.' },
      { period: '2014', role: 'Prácticas — desarrollo web', company: 'RedEduca', desc: 'PHP, HTML5, CSS3, JavaScript, jQuery.' },
    ],
    projectsHeading: 'Casos técnicos en este sitio',
    projects: [
      { name: 'Custodio Digital', desc: 'Custodia institucional y rol como CTO.', href: '/custodio-digital' },
      { name: 'PowerMark', desc: 'OCR + PLN y Smartgrade.', href: '/powermark' },
      { name: 'CityHunts', desc: 'Experiencias urbanas gamificadas (2025).', href: '/cityhunts' },
      { name: 'El Caso Munford', desc: 'App Android — juego de crimen.', href: '/el-caso-munford' },
    ],
    certificationsHeading: 'Certificaciones',
    certifications: [
      { org: 'Trinity College London', items: ['C2 English Certificate (2024)'] },
      { org: 'Scrum.org', items: ['Professional Scrum Master (2023)'] },
    ],
    educationHeading: 'Educación',
    education: [
      'Ingeniería de Telecomunicación (trayectoria) — ETSIIT, Universidad de Granada. Proyecto Atlantis — 2º premio Desafío Tecnológico ETSIIT (2014).',
    ],
    pressHeading: 'Prensa',
    press: [] as { title: string; publisher: string; date: string; href: string }[],
    communityHeading: 'Comunidad',
    community: [] as { title: string; platform: string; href: string }[],
    faqHeading: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿En qué consiste tu rol actual en Aircury?',
        a: 'Diseño y dirección técnica de iniciativas de IA: arquitectura, calidad, despliegue y alineación con producto — incluyendo entregas como PowerMark y la spin-off Custodio Digital.',
      },
      {
        q: '¿Custodio Digital sigue activo?',
        a: 'Sí; es un proyecto de custodia de activos digitales con foco institucional. Hay un caso técnico en /custodio-digital y seguiré ampliándolo.',
      },
      {
        q: '¿Cómo te contacto?',
        a: 'Email hola@raul-alvarez.es o LinkedIn (enlace abajo).',
      },
      {
        q: '¿Trabajas remoto?',
        a: 'Sí — Granada como base, remoto EU y franjas compatibles con clientes.',
      },
    ],
    connectHeading: 'Conectar',
    email: 'hola@raul-alvarez.es',
  },
  en: {
    slug: 'about',
    altSlug: 'sobre-mi',
    seo: {
      title: 'Raúl Álvarez Hinojosa | About · AI Architect · raul-alvarez.es',
      description:
        'Head of AI Architecture at Aircury (Granada). Custodio Digital, PowerMark, CityHunts. Chess24, ByBubbly, RedEduca. Trinity C2 English, Professional Scrum Master.',
    },
    heading: 'Raúl Álvarez Hinojosa',
    subtitle: 'AI Architect · AI Solutions Engineer · Head of AI @ Aircury',
    location: 'Granada, Spain · EU remote',
    lastUpdated: 'May 2026',
    bio: [
      'I lead AI architecture at **Aircury** (Granada): production LLM systems, evals & guardrails, agentic workflows and RAG, plus **OCR + NLP** pipelines for EdTech (**PowerMark**) and operationally demanding products.',
      'I was **CTO** of **Custodio Digital**, an Aircury spin-off for institutional digital-asset custody (RBAC, multisig, traceability). Previously **Chess24**, **ByBubbly** (Oslo — vending, full‑stack ownership), and an internship at **RedEduca**.',
      'Telecommunications engineering path (**ETSIIT, University of Granada**). **C2** English (Trinity 2024) and **Professional Scrum Master** (Scrum.org). Open to remote AI architecture / AI solutions leadership roles.',
    ],
    seeking: 'Remote roles: AI Architect, AI Solutions Engineer, technical leadership in AI (EU / compatible time zones).',
    roles: [
      'AI system design & LLM production',
      'Agentic workflows & RAG',
      'OCR/NLP & integrations',
      'Security-minded architecture',
    ],
    timelineHeading: 'Experience',
    timeline: [
      {
        period: '2022 — present',
        role: 'Full Stack → Team Leader → Head of Artificial Intelligence',
        company: 'Aircury',
        desc: 'Granada · Custodio Digital (CTO spin-off), PowerMark (AI EdTech), Windsor, ScholarPack, Compass+, and internal platform work.',
      },
      { period: '2020 — 2022', role: 'Software Engineer', company: 'Chess24', desc: 'Product and backend for global online chess.' },
      { period: '2015 — 2020', role: 'Full stack / software owner', company: 'ByBubbly AS (Oslo)', desc: 'iOS vending app, PHP + MySQL, AngularJS; rolled out Scrum company-wide.' },
      { period: '2014', role: 'Intern — web development', company: 'RedEduca', desc: 'PHP, HTML5, CSS3, JavaScript, jQuery.' },
    ],
    projectsHeading: 'Case studies on this site',
    projects: [
      { name: 'Custodio Digital', desc: 'Institutional custody and CTO role.', href: '/custodio-digital-en' },
      { name: 'PowerMark', desc: 'OCR + NLP with Smartgrade.', href: '/powermark-en' },
      { name: 'CityHunts', desc: 'Gamified city experiences (2025).', href: '/cityhunts-en' },
      { name: 'El Caso Munford', desc: 'Android crime-game app.', href: '/el-caso-munford-en' },
    ],
    certificationsHeading: 'Certifications',
    certifications: [
      { org: 'Trinity College London', items: ['C2 English Certificate (2024)'] },
      { org: 'Scrum.org', items: ['Professional Scrum Master (2023)'] },
    ],
    educationHeading: 'Education',
    education: [
      'Telecommunications Engineering (path) — ETSIIT, University of Granada. Atlantis project — 2nd prize, ETSIIT technology challenge (2014).',
    ],
    pressHeading: 'Press',
    press: [] as { title: string; publisher: string; date: string; href: string }[],
    communityHeading: 'Community',
    community: [] as { title: string; platform: string; href: string }[],
    faqHeading: 'Frequently asked questions',
    faq: [
      {
        q: 'What do you do today at Aircury?',
        a: 'Technical direction for AI initiatives: architecture, quality, rollout, and product alignment — including PowerMark and the Custodio Digital spin-off.',
      },
      {
        q: 'Is Custodio Digital still active?',
        a: 'Yes; it focuses on institutional digital-asset custody. There is a technical write-up at /custodio-digital-en that I keep expanding.',
      },
      {
        q: 'How can I contact you?',
        a: 'Email hola@raul-alvarez.es or LinkedIn (link below).',
      },
      {
        q: 'Do you work remotely?',
        a: 'Yes — Granada as home base, EU remote and compatible time zones for clients.',
      },
    ],
    connectHeading: 'Connect',
    email: 'hola@raul-alvarez.es',
  },
} as const
