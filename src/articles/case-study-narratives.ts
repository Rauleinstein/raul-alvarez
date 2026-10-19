export type CaseStudySection = {
  title: string
  body: string
}

export type CaseStudyNarrative = {
  heading: string
  lead: string
  linksHeading: string
  sections: readonly CaseStudySection[]
}

type BilingualCaseStudy = { es: CaseStudyNarrative; en: CaseStudyNarrative }

export const CASE_STUDY_NARRATIVES: Record<string, BilingualCaseStudy> = {
  enrivo: {
    es: {
      heading: 'Del trabajo manual a un flujo revisable',
      lead: 'Enrivo ayuda a completar información útil sobre contactos B2B sin quitarle el control a quien mantiene la audiencia. El producto propone datos respaldados por fuentes públicas; la persona decide qué llega a Mailchimp.',
      linksHeading: 'Producto y referencias',
      sections: [
        { title: 'El problema', body: 'Los equipos suelen tener contactos, pero no siempre el contexto necesario para segmentarlos. Investigar empresa, cargo, sector y ubicación a mano convierte cada campo vacío en una pequeña tarea repetida.' },
        { title: 'Diseñar con una barrera humana', body: 'El flujo importa una audiencia o un archivo, deja elegir qué campos investigar y muestra propuestas con evidencia y nivel de confianza. Nada se sincroniza hasta que alguien revisa y aprueba cada cambio.' },
        { title: 'Construir el trabajo de fondo', body: 'El historial de desarrollo pasa de un MVP a un agente de investigación por registro, con ejecuciones en segundo plano, reintentos y evaluación. La aplicación usa Next.js, TypeScript, PostgreSQL y Drizzle; Mailchimp se conecta por usuario y los cambios aprobados se escriben de vuelta.' },
        { title: 'Un alcance deliberadamente medido', body: 'La web pública presenta Enrivo como producto de acceso anticipado. Por eso este caso no atribuye resultados de clientes ni cifras de precisión; la demostración pública usa datos ficticios.' },
      ],
    },
    en: {
      heading: 'From manual research to reviewed enrichment',
      lead: 'Enrivo helps B2B teams add useful context to contacts without taking control away from audience owners. It proposes values backed by public sources. People decide what reaches Mailchimp.',
      linksHeading: 'Product and references',
      sections: [
        { title: 'The problem', body: 'Teams often have contacts but lack context for useful segmentation. Researching company, role, industry, and location by hand turns each empty field into repeated work.' },
        { title: 'Keep a human approval step', body: 'The workflow imports an audience or file, lets users choose fields, and shows proposals with evidence and confidence. Nothing syncs until a person reviews and approves each change.' },
        { title: 'Build the background work', body: 'The commit history moves from an MVP to a record-level research agent, background runs, retries, and evaluation. The app uses Next.js, TypeScript, PostgreSQL, and Drizzle. Mailchimp connects per user, and only approved changes are written back.' },
        { title: 'Keep the claims measured', body: 'The public site presents Enrivo as an early-access product. This case makes no customer-result or accuracy claims. Its public demo uses fictional data.' },
      ],
    },
  },
  cityhunts: {
    es: {
      heading: 'Convertir una caminata en un juego',
      lead: 'CityHunts lleva la exploración urbana al navegador del móvil. La ruta combina lugares reales, pistas y retos, sin exigir una app instalada ni un guía en directo.',
      linksHeading: 'Producto y rutas públicas',
      sections: [
        { title: 'Partir de la ciudad real', body: 'El reto de producto era hacer que una visita se sintiera como una aventura, no como una lista de puntos en un mapa. Cada pista conduce a un lugar que el jugador puede observar y recorrer a pie.' },
        { title: 'Un ciclo claro para jugar', body: 'La persona explora rutas, consulta la historia y el punto de inicio, resuelve una pista en el lugar y sigue su progreso. La interfaz ofrece pistas de ayuda y permite responder desde el teléfono.' },
        { title: 'Una base para descubrir y crear', body: 'La aplicación combina React, TypeScript y Vite con Supabase para datos, autenticación y almacenamiento. Leaflet representa ubicaciones; Stripe gestiona los pagos de experiencias y de creación con IA.' },
        { title: 'Iterar sobre el recorrido completo', body: 'El historial añade creación de rutas con IA, acceso de prueba para jugadores invitados, tarjetas para compartir la finalización y valoraciones posteriores. También ajusta la vista móvil para priorizar el inicio y mostrar antes el acertijo.' },
      ],
    },
    en: {
      heading: 'Turn a walk into a game',
      lead: 'CityHunts brings urban exploration to a phone browser. Each route combines real places, clues, and challenges. Players do not need an installed app or a live guide.',
      linksHeading: 'Product and public hunts',
      sections: [
        { title: 'Start with the real city', body: 'The product challenge was to make a visit feel like an adventure, not a list of map pins. Each clue leads to a place that players can observe and explore on foot.' },
        { title: 'Make the play loop clear', body: 'Players discover routes, preview the story and starting point, solve a clue on location, and track progress. The interface offers hints and accepts answers on a phone.' },
        { title: 'Support discovery and creation', body: 'The app combines React, TypeScript, and Vite with Supabase for data, authentication, and storage. Leaflet displays locations. Stripe handles payments for hunts and AI creation.' },
        { title: 'Improve the full journey', body: 'The commit history adds AI hunt creation, trial access for guest players, shareable completion cards, and post-hunt ratings. It also revises the mobile view to put the start action first and surface the riddle sooner.' },
      ],
    },
  },
  'custodio-digital': {
    es: {
      heading: 'Trazabilidad para activos digitales bajo custodia',
      lead: 'Custodio Digital aborda un problema institucional: seguir cada activo digital intervenido desde su incautación hasta su transferencia, junto con la evidencia que documenta el proceso.',
      linksHeading: 'Producto y organización',
      sections: [
        { title: 'El reto de custodia', body: 'Una investigación necesita separar activos, actuaciones y evidencias. La solución debe conservar quién hizo qué y cuándo, sin mezclar dispositivos ni casos.' },
        { title: 'Registrar el ciclo completo', body: 'El producto describe una cadena de custodia digital verificable, con transacciones, documentos, informes, imágenes, vídeo y geolocalización asociados a cada fase.' },
        { title: 'Diseñar límites de seguridad', body: 'El sitio del producto describe claves privadas únicas por dispositivo, despliegue en el centro de datos institucional e integración con módulos HSM. También presenta alineación con RGPD, MiCA, ISO/IEC 27001 y ENS.' },
        { title: 'Liderar producto y dirección técnica', body: 'Como CTO, lideré el producto junto al equipo. Este resumen se limita a las capacidades descritas públicamente y no publica métricas operativas ni detalles internos.' },
      ],
    },
    en: {
      heading: 'Traceability for digital assets in custody',
      lead: 'Custodio Digital addresses an institutional problem: track each intervened digital asset from seizure through transfer, together with evidence of the process.',
      linksHeading: 'Product and organisation',
      sections: [
        { title: 'The custody challenge', body: 'An investigation must keep assets, actions, and evidence separate. The system must preserve who did what and when, without mixing devices or cases.' },
        { title: 'Record the full lifecycle', body: 'The product describes a verifiable digital chain of custody. It links transactions, documents, reports, images, video, and geolocation to each stage.' },
        { title: 'Design security boundaries', body: 'The product site describes unique private keys per device, deployment in an institution’s own data centre, and HSM integration. It also states alignment with GDPR, MiCA, ISO/IEC 27001, and Spain’s ENS.' },
        { title: 'Lead product and technical direction', body: 'As CTO, I led the product with the team. This summary stays within publicly described capabilities and does not publish operational metrics or internal details.' },
      ],
    },
  },
  powermark: {
    es: {
      heading: 'Evaluación asistida, con el profesorado al mando',
      lead: 'PowerMark fue una línea de trabajo de IA educativa en Aircury, integrada con Smartgrade. El objetivo era reducir tareas repetitivas sin convertir una decisión automatizada en una nota incuestionable.',
      linksHeading: 'Producto y referencias',
      sections: [
        { title: 'Separar corrección de aprendizaje', body: 'Una evaluación debe producir una marca y ayudar a entender qué necesita atención. El producto público de Smartgrade combina corrección con informes agregados para clase y cohorte.' },
        { title: 'Mantener la revisión docente', body: 'La página pública describe respuestas de baja confianza señaladas para revisión y la posibilidad de que el profesorado modere o anule resultados. También presenta límites de privacidad para los datos enviados a modelos de IA.' },
        { title: 'Conectar OCR y lenguaje', body: 'En Aircury diseñé y supervisé la línea PowerMark de OCR y PLN para respuestas manuscritas y pruebas, junto con integración, calidad de datos y despliegue. Smartgrade presenta actualmente la corrección online; el marcado de papel escaneado figura como siguiente fase.' },
        { title: 'No confundir producto y métricas', body: 'Powermark es el producto de Smartgrade; PowerMark identifica el trabajo de Aircury descrito en este portfolio. No incluyo porcentajes de precisión ni ahorros de tiempo.' },
      ],
    },
    en: {
      heading: 'AI-assisted assessment, with teachers in control',
      lead: 'PowerMark was an education-AI workstream at Aircury, integrated with Smartgrade. The goal was to reduce repetitive work without making an automated decision an unquestioned grade.',
      linksHeading: 'Product and references',
      sections: [
        { title: 'Connect marking with learning', body: 'An assessment must produce a mark and help people see what needs attention. Smartgrade’s public product page combines marking with aggregated class and cohort reports.' },
        { title: 'Keep teachers in the review loop', body: 'The public page describes low-confidence answers flagged for review and teacher moderation or override. It also states privacy limits for data sent to AI models.' },
        { title: 'Connect OCR and language processing', body: 'At Aircury, I designed and oversaw the PowerMark OCR and NLP work for handwritten responses and tests, plus integration, data quality, and delivery. Smartgrade currently presents online marking; scanned-paper marking is listed as a later phase.' },
        { title: 'Keep product claims distinct', body: 'Powermark is Smartgrade’s product. PowerMark names the Aircury work described in this portfolio. I do not claim accuracy percentages or time savings.' },
      ],
    },
  },
  munford: {
    es: {
      heading: 'Una exposición fotográfica convertida en misterio',
      lead: 'El Caso Munford llevó una historia de crimen a un recorrido presencial. La aplicación acompañaba al visitante entre fotografías, pistas y decisiones, en vez de separar la experiencia física de la digital.',
      linksHeading: 'Repositorio y referencias',
      sections: [
        { title: 'Dar un papel al visitante', body: 'La experiencia invitaba a mirar con atención y avanzar por un caso. El móvil servía como guía narrativa durante la visita, no como un catálogo de imágenes.' },
        { title: 'Iterar sobre el ritmo', body: 'El historial del proyecto registra cambios en el flujo, controles, texto, puntuación y reproducción de audio. Esas iteraciones conectaban la lectura de pistas con la siguiente acción.' },
        { title: 'Empaquetar una experiencia móvil', body: 'La aplicación usa JavaScript y tecnologías PhoneGap/Cordova para llevar la interfaz web a Android. El repositorio también conserva configuración para plataformas móviles.' },
        { title: 'Una pieza de producto temprana', body: 'El caso documenta cómo una narrativa física puede apoyarse en una app sencilla. Enlazo el repositorio público y no afirmo que la ficha de tienda siga activa.' },
      ],
    },
    en: {
      heading: 'Turn a photography exhibition into a mystery',
      lead: 'El Caso Munford brought a crime story into a physical exhibition. The app guided visitors through photographs, clues, and choices instead of separating the visit from the digital experience.',
      linksHeading: 'Repository and references',
      sections: [
        { title: 'Give visitors an active role', body: 'The experience invited visitors to look closely and progress through a case. The phone acted as a narrative guide, not as a gallery catalogue.' },
        { title: 'Iterate on the pace', body: 'The project history records changes to the flow, controls, text, scoring, and audio playback. These iterations connected clue reading to the next action.' },
        { title: 'Package a mobile experience', body: 'The app uses JavaScript and PhoneGap/Cordova technology to bring a web interface to Android. The repository also keeps configuration for mobile platforms.' },
        { title: 'An early product lesson', body: 'The case shows how a physical narrative can use a focused mobile companion. I link the public repository and make no claim that a store listing remains active.' },
      ],
    },
  },
  'feria-libro-granada': {
    es: {
      heading: 'Una puerta digital a la programación cultural',
      lead: 'La web de la Feria del Libro de Granada sirve a lectores, editoriales y visitantes que necesitan encontrar programación y actividades sin conocer de antemano toda la feria.',
      linksHeading: 'Feria y programa público',
      sections: [
        { title: 'Ordenar información temporal', body: 'La feria concentra actos que cambian por día y por espacio. El sitio debe ayudar a pasar de una edición y su tema general a una actividad concreta.' },
        { title: 'Combinar agenda y contenido editorial', body: 'La página pública reúne programación, publicaciones y materiales descargables. Las fichas de actividad dan contexto a los actos más allá de una hora en el calendario.' },
        { title: 'Trabajar para públicos distintos', body: 'La estructura debe ser útil para quien busca una firma, una presentación o información general, además de para quienes participan en la organización.' },
        { title: 'Un caso web, sin stack supuesto', body: 'Desarrollé el sitio institucional de la feria. Este caso se centra en la experiencia pública y no atribuye un stack técnico, mejoras de rendimiento ni cifras que no estén verificadas.' },
      ],
    },
    en: {
      heading: 'A digital gateway to the cultural programme',
      lead: 'The Granada Book Fair website serves readers, publishers, and visitors who need to find events without knowing the whole fair in advance.',
      linksHeading: 'Fair and public programme',
      sections: [
        { title: 'Organise time-based information', body: 'The fair hosts events across days and venues. The site must help visitors move from an edition and its theme to a specific activity.' },
        { title: 'Combine the schedule with editorial content', body: 'The public site brings together the programme, articles, and downloadable material. Event pages give context beyond a time slot in a calendar.' },
        { title: 'Serve different audiences', body: 'The structure must help people find a book signing, a presentation, or general information. It must also support the people who organise the event.' },
        { title: 'A web case without guessed technology', body: 'I developed the fair’s institutional website. This case focuses on the public experience and does not claim an unverified stack, performance gains, or metrics.' },
      ],
    },
  },
  'cgv-seguros': {
    es: {
      heading: 'Hacer comprensible una oferta de mediación',
      lead: 'CGV Seguros necesitaba una presencia web corporativa que explicara su papel como correduría, mostrara sus áreas de cobertura y facilitara el contacto con clientes potenciales.',
      linksHeading: 'Sitio público',
      sections: [
        { title: 'Empezar por la confianza', body: 'La página presenta asesoramiento personalizado y el compromiso de acompañar al cliente. Ese mensaje debe ser claro antes de pedirle que explore productos.' },
        { title: 'Agrupar por necesidades', body: 'El sitio organiza contenidos sobre seguros de hogar, automóvil, vida, responsabilidad civil, agricultura y pequeñas empresas. Así, una oferta amplia se vuelve más fácil de recorrer.' },
        { title: 'Mostrar el siguiente paso', body: 'La página combina información sobre colaboradores, ubicación y formulario de contacto. El visitante puede entender el servicio y decidir cómo continuar.' },
        { title: 'Un sitio corporativo, no un producto asegurador', body: 'Mi trabajo cubrió la estructura y presentación web descritas en el portfolio. No atribuyo integraciones concretas ni resultados comerciales.' },
      ],
    },
    en: {
      heading: 'Make an insurance brokerage offer easier to understand',
      lead: 'CGV Seguros needed a corporate web presence that explained its brokerage role, showed its areas of cover, and made contact easier for prospective clients.',
      linksHeading: 'Public website',
      sections: [
        { title: 'Start with trust', body: 'The page presents personal advice and a commitment to support clients. That message should be clear before visitors explore specific policies.' },
        { title: 'Group content by need', body: 'The site organises information about home, motor, life, liability, agricultural, and small-business insurance. This makes a broad offer easier to browse.' },
        { title: 'Show the next step', body: 'The page combines partner information, location details, and a contact form. Visitors can understand the service and choose how to proceed.' },
        { title: 'A corporate site, not an insurance product', body: 'My work covered the web structure and presentation described in the portfolio. I make no claim about specific integrations or commercial results.' },
      ],
    },
  },
  'esdrujula-ediciones': {
    es: {
      heading: 'Dar una identidad digital a una editorial independiente',
      lead: 'Esdrújula Ediciones necesitaba presentar su catálogo y su voz editorial, no limitarse a listar libros. La ficha pública de la Feria describe una editorial que busca diferenciar sus obras y ofrecer muestras de lectura.',
      linksHeading: 'Referencia editorial pública',
      sections: [
        { title: 'Empezar por la identidad', body: 'La editorial se define por una selección y un tono propios. La web debe transmitir esa diferencia antes de conducir al lector a un título concreto.' },
        { title: 'Organizar el descubrimiento', body: 'El portfolio existente describe un catálogo y noticias. Esa estructura ayuda a presentar títulos y novedades sin atribuir un CMS o un sistema de tienda.' },
        { title: 'Invitar a leer antes de comprar', body: 'La ficha de la Feria menciona noticias, redes sociales y capítulos iniciales descargables. Son formas de acercar al lector a las obras antes de la compra.' },
        { title: 'Mantener la tecnología fuera de las conjeturas', body: 'Mi contribución fue al proyecto web editorial descrito en el portfolio. No afirmo un CMS, una arquitectura de tienda ni métricas sin una fuente fiable.' },
      ],
    },
    en: {
      heading: 'Give an independent publisher a digital identity',
      lead: 'Esdrújula Ediciones needed to present its catalogue and editorial voice, not only list books. The fair’s public profile describes a publisher that seeks distinctive work and offers reading samples.',
      linksHeading: 'Public publishing reference',
      sections: [
        { title: 'Start with the publisher’s identity', body: 'The publisher is defined by its selection and tone. The website must communicate that difference before leading readers to an individual title.' },
        { title: 'Organise discovery', body: 'The existing portfolio describes a catalogue and news. This structure presents titles and updates without assuming a CMS or shop system.' },
        { title: 'Invite readers to sample the work', body: 'The fair’s profile mentions news, social channels, and downloadable opening chapters. These help readers explore books before buying.' },
        { title: 'Keep technology claims grounded', body: 'My contribution covered the publishing web project described in the portfolio. I make no claim about its CMS, shop architecture, or metrics without reliable evidence.' },
      ],
    },
  },
  entradasytickets: {
    es: {
      heading: 'De descubrir un evento a elegir una entrada',
      lead: 'EntradasyTickets reúne información del evento y opciones de entrada en un recorrido web. La prioridad es que la persona pueda decidir con datos claros antes de iniciar la compra.',
      linksHeading: 'Plataforma y evento de ejemplo',
      sections: [
        { title: 'Dar contexto antes del checkout', body: 'Una ficha de evento necesita responder lo básico: qué ocurre, cuándo, dónde y qué condiciones aplican. La página pública muestra esos datos junto a la oferta de entradas.' },
        { title: 'Hacer visible la elección', body: 'El visitante puede revisar la información del evento, elegir una opción disponible y continuar hacia la acción de compra. No atribuyo proveedores de pago ni detalles internos.' },
        { title: 'Servir a eventos distintos', body: 'La plataforma publica eventos con contenido y requisitos propios. Cada ficha aporta el contexto necesario para que la persona entienda la experiencia que compra.' },
        { title: 'Un flujo comercial verificable', body: 'El portfolio describe el proyecto como plataforma de ticketing. Este caso no afirma ventas, conversiones ni volumen de eventos.' },
      ],
    },
    en: {
      heading: 'Move from event discovery to a ticket choice',
      lead: 'EntradasyTickets brings event details and ticket options into one web journey. The priority is to help people make an informed choice before checkout.',
      linksHeading: 'Platform and example event',
      sections: [
        { title: 'Give context before checkout', body: 'An event page must answer the basics: what happens, when, where, and under which terms. The public page shows these details with ticket options.' },
        { title: 'Make the choice visible', body: 'Visitors can review an event, choose an available option, and continue to the purchase action. I make no claim about payment providers or internal systems.' },
        { title: 'Support different events', body: 'The platform lists events with their own content and requirements. Each page gives people enough context to understand what they are buying.' },
        { title: 'A verifiable commerce flow', body: 'The portfolio describes this project as a ticketing platform. This case makes no claim about sales, conversion, or event volume.' },
      ],
    },
  },
  atlantis: {
    es: {
      heading: 'Un prototipo de asistencia para eventos',
      lead: 'La ficha actual del portfolio describe Atlantis como un dispositivo de control de asistencia para eventos, presentado en el Desafío Tecnológico de la ETSIIT de la Universidad de Granada.',
      linksHeading: 'Institución académica',
      sections: [
        { title: 'Trasladar el problema al espacio físico', body: 'El proyecto parte de una necesidad concreta: registrar asistencia durante un evento, no solo administrar una lista desde una pantalla.' },
        { title: 'Construir un prototipo hardware', body: 'La descripción disponible identifica un dispositivo y una solución orientada al control de asistencia. No especifica sensores, conectividad ni componentes.' },
        { title: 'Mantener el alcance honesto', body: 'No encontré una ficha pública del prototipo ni un repositorio accesible. Por eso no añado detalles de implementación, pruebas o resultados.' },
        { title: 'Un primer hito de ingeniería', body: 'El portfolio registra un segundo premio en el reto de la ETSIIT. Este resumen conserva ese dato y no inventa métricas ni atribuciones de equipo.' },
      ],
    },
    en: {
      heading: 'An attendance prototype for events',
      lead: 'The current portfolio entry describes Atlantis as an event-attendance device presented at the ETSIIT Technology Challenge at the University of Granada.',
      linksHeading: 'Academic institution',
      sections: [
        { title: 'Move the problem into the venue', body: 'The project starts with a specific need: record attendance during an event, not only manage a list on a screen.' },
        { title: 'Build a hardware prototype', body: 'The available description identifies a device for attendance tracking. It does not specify sensors, connectivity, or components.' },
        { title: 'Keep the scope honest', body: 'I found no public prototype page or accessible repository. This case adds no implementation, testing, or performance claims.' },
        { title: 'An early engineering milestone', body: 'The portfolio records a second prize in the ETSIIT challenge. This summary keeps that detail and invents no metrics or team attribution.' },
      ],
    },
  },
  'omega-protocol': {
    es: {
      heading: 'Simular una fábrica cósmica que sigue avanzando',
      lead: 'Omega Protocol es un juego incremental de estrategia y horror cósmico. El jugador controla una IA que debe generar recursos, explorar los restos del universo y reiniciar el ciclo cósmico.',
      linksHeading: 'Juego y plataformas',
      sections: [
        { title: 'Construir una progresión legible', body: 'La partida empieza con producción mínima. El jugador transforma recursos, desbloquea investigación y automatiza tareas para abrir nuevas opciones.' },
        { title: 'Conectar sistemas de juego', body: 'La experiencia combina producción, árbol de investigación, exploración, combate, habilidades y automatización. La narrativa presenta esas mecánicas como protocolos de una IA superviviente.' },
        { title: 'Hacer fiable la simulación', body: 'El historial registra una transición desde controladores de recursos a un motor de simulación continua. Las pruebas cubren progresión; el cálculo de tiempo sin conexión tiene límites para evitar saltos de producción.' },
        { title: 'Entregar y monetizar en móvil', body: 'El juego usa React Native, Expo, TypeScript y Zustand, con guardado local y pruebas Playwright. El historial también registra anuncios recompensados en ciclos de producción y combate; no afirmo ingresos.' },
      ],
    },
    en: {
      heading: 'Simulate a cosmic factory that keeps moving',
      lead: 'Omega Protocol is an incremental strategy game with a cosmic-horror setting. Players control an AI that must generate resources, explore the remains of the universe, and restart the cosmic cycle.',
      linksHeading: 'Game and platforms',
      sections: [
        { title: 'Build a legible progression loop', body: 'The game starts with minimal production. Players convert resources, unlock research, and automate tasks to open new options.' },
        { title: 'Connect the game systems', body: 'The experience combines production, research, exploration, combat, skills, and automation. The story frames these mechanics as protocols for a surviving AI.' },
        { title: 'Make the simulation reliable', body: 'The commit history records a move from resource controllers to a continuous simulation engine. Tests cover progression. Offline catch-up uses limits to prevent production jumps.' },
        { title: 'Ship and monetise on mobile', body: 'The game uses React Native, Expo, TypeScript, and Zustand, with local saves and Playwright tests. The history also records rewarded ads in production and combat loops. I make no revenue claim.' },
      ],
    },
  },
  dungeonkeeper: {
    es: {
      heading: 'De DungeonKeeper a MeepleHelper',
      lead: 'El proyecto nació como asistente de voz para juegos de mesa y evolucionó a MeepleHelper: una aplicación móvil, un backend y un panel para preparar y acompañar partidas.',
      linksHeading: 'Resumen del proyecto',
      sections: [
        { title: 'Resolver la fricción de las reglas', body: 'Consultar un reglamento puede interrumpir una partida. MeepleHelper procesa manuales PDF y permite buscar reglas con respuestas que apuntan a su fuente.' },
        { title: 'Acompañar una sesión completa', body: 'La aplicación móvil reúne voz, sesiones, temporizadores, jugadores y puntuación. El asistente ayuda a resolver preguntas sin sacar a la mesa del juego.' },
        { title: 'Separar responsabilidades', body: 'La arquitectura combina React Native y Expo en móvil, una API Node.js/Express/TypeScript con MongoDB y Redis, y un panel Next.js. El backend procesa archivos PDF y usa embeddings para recuperar reglas con citas.' },
        { title: 'Evolucionar la ingesta de juegos', body: 'El historial reciente añade importación de manuales, confirmación de la ficha de BoardGameGeek y reglas versionadas por edición. El repositorio permanece privado, así que no enlazo código ni datos operativos.' },
      ],
    },
    en: {
      heading: 'From DungeonKeeper to MeepleHelper',
      lead: 'The project began as a voice assistant for board games and evolved into MeepleHelper: a mobile app, backend, and dashboard for preparing and supporting game sessions.',
      linksHeading: 'Project summary',
      sections: [
        { title: 'Reduce friction around rules', body: 'Looking up a rule can interrupt a game. MeepleHelper processes PDF rulebooks and supports rule search with answers linked to their source.' },
        { title: 'Support a full game session', body: 'The mobile app brings together voice, sessions, timers, players, and scoring. The assistant helps resolve questions without pulling the table out of the game.' },
        { title: 'Separate system responsibilities', body: 'The architecture combines React Native and Expo on mobile, a Node.js/Express/TypeScript API with MongoDB and Redis, and a Next.js dashboard. The backend processes PDFs and uses embeddings to retrieve cited rules.' },
        { title: 'Improve game intake', body: 'Recent commits add rulebook import, confirmation of the BoardGameGeek listing, and rulebooks versioned by edition. The repository is private, so I link no code or operational data.' },
      ],
    },
  },
}
