import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArticleLayout } from './articles/components'
import {
  DISPLAY_NAME,
  EMAIL,
  GOOGLE_PLAY_DEVELOPER_ID,
  GOOGLE_PLAY_DEVELOPER_URL,
  SITE_HOST,
} from './site'

export const privacyContent = {
  es: {
    slug: 'privacidad',
    altSlug: 'privacy',
    seo: {
      title: `Política de Privacidad | ${SITE_HOST}`,
      description: `Política de privacidad de ${SITE_HOST}. Cómo se recopilan y utilizan los datos del sitio web y del asistente de IA.`,
    },
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 2 de julio de 2026',
    intro: `Esta política describe cómo ${DISPLAY_NAME} ("nosotros") recopila, utiliza y protege la información cuando visitas ${SITE_HOST}.`,
    sections: [
      {
        heading: 'Responsable del tratamiento',
        body: `${DISPLAY_NAME} es el responsable del tratamiento de los datos personales recogidos a través de este sitio web. Para consultas relacionadas con privacidad, puedes contactarnos en ${EMAIL}.`,
      },
      {
        heading: 'Qué datos recopilamos',
        items: [
          'Datos de navegación: información técnica y de uso anónima (páginas visitadas, duración de la sesión, tipo de dispositivo y navegador) para mejorar el rendimiento del sitio.',
          'Mensajes del asistente de IA: si utilizas el chat del sitio, los mensajes se procesan para generar respuestas. No solicitamos datos personales identificables.',
          'Audio del modo voz: si activas el modo voz, el audio se procesa en tiempo real y no se almacena de forma permanente.',
        ],
      },
      {
        heading: 'Cómo utilizamos los datos',
        items: [
          'Proporcionar y mejorar las funcionalidades del sitio web.',
          'Generar respuestas contextuales a través del asistente de IA sobre la experiencia profesional publicada en el sitio.',
          'Analizar patrones de uso agregados para mejorar el rendimiento y la experiencia de usuario.',
          'Detectar y prevenir usos indebidos o abusivos del asistente de IA.',
        ],
      },
      {
        heading: 'Base legal',
        body: 'Tratamos los datos sobre la base del interés legítimo en operar y mejorar el sitio web, y en responder a las consultas realizadas a través del asistente de IA. Cuando sea aplicable, también nos basamos en tu consentimiento (por ejemplo, al activar el modo voz).',
      },
      {
        heading: 'Terceros',
        items: [
          'Anthropic (Claude): procesa los mensajes del chat para generar respuestas.',
          'OpenAI (Realtime API): procesa el audio del modo voz para conversación en tiempo real.',
          'Langfuse: almacena trazas anonimizadas de conversaciones para observabilidad y mejora de calidad.',
          'Vercel: aloja el sitio web y proporciona analíticas de uso agregadas.',
        ],
      },
      {
        heading: 'Cookies y almacenamiento local',
        body: 'Este sitio no utiliza cookies de seguimiento ni cookies de publicidad de terceros. Solo se utiliza el almacenamiento local del navegador (localStorage) para preferencias de interfaz, como el tema visual. No almacenamos información personal en cookies.',
      },
      {
        heading: 'Conservación de datos',
        body: 'Los datos de analítica se conservan de forma agregada y anónima. Las trazas de conversación del asistente se almacenan de forma anonimizada durante el tiempo necesario para mejorar la calidad del servicio y detectar abusos.',
      },
      {
        heading: 'Tus derechos',
        body: 'Si resides en el Espacio Económico Europeo, tienes derecho a acceder, rectificar, suprimir, limitar u oponerte al tratamiento de tus datos personales, así como a solicitar la portabilidad de los mismos. Para ejercer estos derechos, escríbenos a la dirección de contacto indicada abajo.',
      },
      {
        heading: 'Menores de edad',
        body: 'Este sitio no está dirigido a menores de 16 años y no recopilamos deliberadamente información de menores.',
      },
      {
        heading: 'Cambios en esta política',
        body: 'Podemos actualizar esta política de privacidad ocasionalmente. La fecha de la última actualización se indica al inicio de esta página.',
      },
      {
        heading: 'Contacto',
        body: 'Para cualquier consulta sobre privacidad, puedes escribir a:',
        email: EMAIL,
      },
    ],
    backHome: 'Volver al inicio',
  },
  en: {
    slug: 'privacy',
    altSlug: 'privacidad',
    seo: {
      title: `Privacy Policy | ${SITE_HOST}`,
      description: `Privacy policy for ${SITE_HOST}. How website and AI assistant data is collected and used.`,
    },
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: July 2, 2026',
    intro: `This policy describes how ${DISPLAY_NAME} ("we") collects, uses, and protects information when you visit ${SITE_HOST}.`,
    sections: [
      {
        heading: 'Data controller',
        body: `${DISPLAY_NAME} is the data controller for personal data collected through this website. For privacy-related inquiries, contact us at ${EMAIL}.`,
      },
      {
        heading: 'What data we collect',
        items: [
          'Browsing data: anonymous technical and usage information (pages visited, session duration, device and browser type) to improve site performance.',
          'AI assistant messages: if you use the site chat, messages are processed to generate responses. We do not request personally identifiable information.',
          'Voice mode audio: if you enable voice mode, audio is processed in real time and is not permanently stored.',
        ],
      },
      {
        heading: 'How we use data',
        items: [
          'Provide and improve website functionality.',
          'Generate contextual responses through the AI assistant about professional experience published on the site.',
          'Analyze aggregated usage patterns to improve performance and user experience.',
          'Detect and prevent misuse or abuse of the AI assistant.',
        ],
      },
      {
        heading: 'Legal basis',
        body: 'We process data based on legitimate interest in operating and improving the website, and in responding to inquiries made through the AI assistant. Where applicable, we also rely on your consent (for example, when enabling voice mode).',
      },
      {
        heading: 'Third parties',
        items: [
          'Anthropic (Claude): processes chat messages to generate responses.',
          'OpenAI (Realtime API): processes voice mode audio for real-time conversation.',
          'Langfuse: stores anonymized conversation traces for observability and quality improvement.',
          'Vercel: hosts the website and provides aggregated usage analytics.',
        ],
      },
      {
        heading: 'Cookies and local storage',
        body: 'This site does not use tracking cookies or third-party advertising cookies. Only browser localStorage is used for interface preferences, such as the visual theme. We do not store personal information in cookies.',
      },
      {
        heading: 'Data retention',
        body: 'Analytics data is retained in aggregated, anonymous form. Assistant conversation traces are stored in anonymized form for as long as needed to improve service quality and detect abuse.',
      },
      {
        heading: 'Your rights',
        body: 'If you are in the European Economic Area, you have the right to access, rectify, erase, restrict, or object to the processing of your personal data, and to request data portability. To exercise these rights, contact us at the address below.',
      },
      {
        heading: 'Children',
        body: 'This site is not directed at children under 16, and we do not knowingly collect information from children.',
      },
      {
        heading: 'Changes to this policy',
        body: 'We may update this privacy policy from time to time. The date of the last update is shown at the top of this page.',
      },
      {
        heading: 'Contact',
        body: 'For any privacy-related inquiries, you can write to:',
        email: EMAIL,
      },
    ],
    backHome: 'Back to home',
  },
} as const

export type PrivacyLang = keyof typeof privacyContent

interface PrivacySection {
  heading: string
  items?: readonly string[]
  body?: string
  email?: string
}

export default function PrivacyPolicy({ lang = 'es' }: { lang?: PrivacyLang }) {
  const t = privacyContent[lang]

  useEffect(() => {
    document.title = t.seo.title

    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement
    if (!robots) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      document.head.appendChild(robots)
    }
    robots.content = 'noindex, nofollow'

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (canonical) canonical.href = `https://${SITE_HOST}/${t.slug}`

    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement
    if (desc) desc.content = t.seo.description

    return () => {
      robots.content = 'index, follow'
    }
  }, [lang, t.seo.title, t.seo.description, t.slug])

  return (
    <ArticleLayout lang={lang}>
      <header className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
          {t.title}
        </h1>
        <p className="text-sm text-muted-foreground">{t.lastUpdated}</p>
      </header>

      <article className="prose-custom">
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          {t.intro}
        </p>

        {(t.sections as readonly PrivacySection[]).map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              {section.heading}
            </h2>

            {section.items && (
              <ul className="space-y-2 mb-4">
                {section.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base text-muted-foreground">
                    <span className="text-primary font-bold shrink-0 mt-0.5">{'●'}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.body && (
              <p className="text-base text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            )}

            {section.email && (
              <p className="mt-2">
                <a
                  href={`mailto:${section.email}`}
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  {section.email}
                </a>
              </p>
            )}
          </section>
        ))}

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to={lang === 'es' ? '/' : '/en'}
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            {'← '}{t.backHome}
          </Link>
        </div>
      </article>
    </ArticleLayout>
  )
}
