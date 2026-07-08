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
      description: `Política de privacidad de ${DISPLAY_NAME}. Cómo se recopilan y utilizan los datos del sitio web, del asistente de IA y de las apps en Google Play (${GOOGLE_PLAY_DEVELOPER_ID}).`,
    },
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 8 de julio de 2026',
    intro: `Esta política describe cómo ${DISPLAY_NAME} ("nosotros") recopila, utiliza y protege la información cuando visitas ${SITE_HOST} o utilizas nuestras aplicaciones móviles publicadas en Google Play bajo el desarrollador ${GOOGLE_PLAY_DEVELOPER_ID}.`,
    sections: [
      {
        heading: 'Responsable del tratamiento',
        body: `${DISPLAY_NAME} es el responsable del tratamiento de los datos personales recogidos a través de este sitio web y de las aplicaciones publicadas en Google Play bajo el desarrollador ${GOOGLE_PLAY_DEVELOPER_ID}. Para consultas relacionadas con privacidad, puedes contactarnos en ${EMAIL}.`,
      },
      {
        heading: 'Aplicaciones móviles (Google Play)',
        items: [
          `Esta política se aplica a todas las apps publicadas por ${DISPLAY_NAME} en Google Play bajo el desarrollador ${GOOGLE_PLAY_DEVELOPER_ID} (${GOOGLE_PLAY_DEVELOPER_URL}).`,
          'Cada app incluye además su propia declaración de seguridad de datos en la ficha de Google Play, que describe de forma específica qué datos recopila esa app.',
          'Omega Protocol (com.raulalvarez.omegaproject): no recopila ni comparte datos personales con terceros, según la declaración publicada en Google Play.',
          'Las apps pueden solicitar permisos del dispositivo (por ejemplo, almacenamiento o conectividad) únicamente cuando son necesarios para su funcionamiento. Esos permisos se muestran antes de la instalación y puedes revocarlos desde los ajustes de Android.',
          'El progreso de juego y las preferencias locales se almacenan en el dispositivo salvo que una app indique explícitamente lo contrario en su ficha de Play Store.',
        ],
      },
      {
        heading: 'Qué datos recopilamos',
        items: [
          'Sitio web — datos de navegación: información técnica y de uso anónima (páginas visitadas, duración de la sesión, tipo de dispositivo y navegador) para mejorar el rendimiento del sitio.',
          'Sitio web — mensajes del asistente de IA: si utilizas el chat del sitio, los mensajes se procesan para generar respuestas. No solicitamos datos personales identificables.',
          'Sitio web — audio del modo voz: si activas el modo voz, el audio se procesa en tiempo real y no se almacena de forma permanente.',
          'Apps móviles: en general minimizamos la recopilación de datos. Las prácticas concretas de cada app se detallan en su sección de seguridad de datos en Google Play y en el apartado anterior.',
        ],
      },
      {
        heading: 'Cómo utilizamos los datos',
        items: [
          'Proporcionar y mejorar las funcionalidades del sitio web y de las aplicaciones móviles.',
          'Generar respuestas contextuales a través del asistente de IA sobre la experiencia profesional publicada en el sitio.',
          'Analizar patrones de uso agregados para mejorar el rendimiento y la experiencia de usuario.',
          'Detectar y prevenir usos indebidos o abusivos del asistente de IA.',
          'Diagnosticar errores y mejorar la estabilidad de las apps móviles cuando sea necesario.',
        ],
      },
      {
        heading: 'Base legal',
        body: 'Tratamos los datos sobre la base del interés legítimo en operar y mejorar el sitio web y las aplicaciones móviles, y en responder a las consultas realizadas a través del asistente de IA. Cuando sea aplicable, también nos basamos en tu consentimiento (por ejemplo, al activar el modo voz o al conceder permisos en una app).',
      },
      {
        heading: 'Terceros',
        items: [
          'Anthropic (Claude): procesa los mensajes del chat del sitio web para generar respuestas.',
          'OpenAI (Realtime API): procesa el audio del modo voz del sitio web para conversación en tiempo real.',
          'Langfuse: almacena trazas anonimizadas de conversaciones del sitio web para observabilidad y mejora de calidad.',
          'Vercel: aloja el sitio web y proporciona analíticas de uso agregadas.',
          'Google (Google Play y servicios de Android): distribuye las apps, gestiona actualizaciones y puede procesar datos técnicos según sus propias políticas cuando utilizas Google Play o servicios del sistema.',
        ],
      },
      {
        heading: 'Cookies y almacenamiento local',
        body: 'El sitio web no utiliza cookies de seguimiento ni cookies de publicidad de terceros. Solo se utiliza el almacenamiento local del navegador (localStorage) para preferencias de interfaz, como el tema visual. Las apps móviles pueden utilizar almacenamiento local en el dispositivo para guardar progreso y preferencias. No almacenamos información personal identificable en cookies del sitio web.',
      },
      {
        heading: 'Conservación de datos',
        body: 'Los datos de analítica del sitio web se conservan de forma agregada y anónima. Las trazas de conversación del asistente se almacenan de forma anonimizada durante el tiempo necesario para mejorar la calidad del servicio y detectar abusos. Los datos de las apps móviles se conservan en el dispositivo o durante el tiempo indicado en la declaración de seguridad de datos de cada app en Google Play.',
      },
      {
        heading: 'Tus derechos',
        body: 'Si resides en el Espacio Económico Europeo, tienes derecho a acceder, rectificar, suprimir, limitar u oponerte al tratamiento de tus datos personales, así como a solicitar la portabilidad de los mismos. Para ejercer estos derechos, escríbenos a la dirección de contacto indicada abajo.',
      },
      {
        heading: 'Menores de edad',
        body: 'El sitio web y las aplicaciones móviles no están dirigidos a menores de 16 años y no recopilamos deliberadamente información de menores.',
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
      description: `Privacy policy for ${DISPLAY_NAME}. How website, AI assistant, and Google Play apps (${GOOGLE_PLAY_DEVELOPER_ID}) data is collected and used.`,
    },
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: July 8, 2026',
    intro: `This policy describes how ${DISPLAY_NAME} ("we") collects, uses, and protects information when you visit ${SITE_HOST} or use our mobile applications published on Google Play under developer ${GOOGLE_PLAY_DEVELOPER_ID}.`,
    sections: [
      {
        heading: 'Data controller',
        body: `${DISPLAY_NAME} is the data controller for personal data collected through this website and applications published on Google Play under developer ${GOOGLE_PLAY_DEVELOPER_ID}. For privacy-related inquiries, contact us at ${EMAIL}.`,
      },
      {
        heading: 'Mobile applications (Google Play)',
        items: [
          `This policy applies to all apps published by ${DISPLAY_NAME} on Google Play under developer ${GOOGLE_PLAY_DEVELOPER_ID} (${GOOGLE_PLAY_DEVELOPER_URL}).`,
          'Each app also includes its own data safety declaration on its Google Play listing, which describes what data that specific app collects.',
          'Omega Protocol (com.raulalvarez.omegaproject): does not collect or share personal data with third parties, per the declaration published on Google Play.',
          'Apps may request device permissions (for example, storage or network access) only when required for functionality. Permissions are shown before installation and can be revoked in Android settings.',
          'Game progress and local preferences are stored on the device unless an app explicitly states otherwise on its Play Store listing.',
        ],
      },
      {
        heading: 'What data we collect',
        items: [
          'Website — browsing data: anonymous technical and usage information (pages visited, session duration, device and browser type) to improve site performance.',
          'Website — AI assistant messages: if you use the site chat, messages are processed to generate responses. We do not request personally identifiable information.',
          'Website — voice mode audio: if you enable voice mode, audio is processed in real time and is not permanently stored.',
          'Mobile apps: we generally minimize data collection. Specific practices for each app are detailed in its Google Play data safety section and in the section above.',
        ],
      },
      {
        heading: 'How we use data',
        items: [
          'Provide and improve website and mobile application functionality.',
          'Generate contextual responses through the AI assistant about professional experience published on the site.',
          'Analyze aggregated usage patterns to improve performance and user experience.',
          'Detect and prevent misuse or abuse of the AI assistant.',
          'Diagnose errors and improve mobile app stability when necessary.',
        ],
      },
      {
        heading: 'Legal basis',
        body: 'We process data based on legitimate interest in operating and improving the website and mobile applications, and in responding to inquiries made through the AI assistant. Where applicable, we also rely on your consent (for example, when enabling voice mode or granting app permissions).',
      },
      {
        heading: 'Third parties',
        items: [
          'Anthropic (Claude): processes website chat messages to generate responses.',
          'OpenAI (Realtime API): processes website voice mode audio for real-time conversation.',
          'Langfuse: stores anonymized website conversation traces for observability and quality improvement.',
          'Vercel: hosts the website and provides aggregated usage analytics.',
          'Google (Google Play and Android services): distributes apps, manages updates, and may process technical data under its own policies when you use Google Play or system services.',
        ],
      },
      {
        heading: 'Cookies and local storage',
        body: 'The website does not use tracking cookies or third-party advertising cookies. Only browser localStorage is used for interface preferences, such as the visual theme. Mobile apps may use local device storage to save progress and preferences. We do not store personally identifiable information in website cookies.',
      },
      {
        heading: 'Data retention',
        body: 'Website analytics data is retained in aggregated, anonymous form. Assistant conversation traces are stored in anonymized form for as long as needed to improve service quality and detect abuse. Mobile app data is retained on the device or for the period stated in each app\'s Google Play data safety declaration.',
      },
      {
        heading: 'Your rights',
        body: 'If you are in the European Economic Area, you have the right to access, rectify, erase, restrict, or object to the processing of your personal data, and to request data portability. To exercise these rights, contact us at the address below.',
      },
      {
        heading: 'Children',
        body: 'The website and mobile applications are not directed at children under 16, and we do not knowingly collect information from children.',
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
