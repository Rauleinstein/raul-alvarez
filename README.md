# raul-alvarez.es

**[:gb: English](#overview)** | **[:es: Español](#es-resumen)**

> Bilingual personal site and CV for **Raúl Álvarez Hinojosa** — AI Architect & AI Solutions Engineer (Granada). React 19, TypeScript, Vite 7, Tailwind v4, prerendered HTML, JSON-LD, and Vercel Analytics.

[![Live site](https://img.shields.io/badge/site-raul--alvarez.es-orange?style=flat-square)](https://raul-alvarez.es)

---

## Overview

Static-first portfolio with Spanish and English routes, lazy-loaded case-study pages, optional ambient audio, and a build pipeline that type-checks, bundles with Vite, generates `sitemap.xml`, prerenders pages, and validates prerender output.

**Highlights**

- **Bilingual** — `/` and `/en` for the home CV; `/sobre-mi` / `/about`; `/privacidad` / `/privacy`
- **Case studies** — Registered in `src/articles/registry.ts`; content via `ArticleStub` + shared SEO helpers (`json-ld`, `use-article-seo`)
- **Performance & SEO** — Pre-render + hydrate, `llms.txt` validation script, article validation, sitemap generation
- **Identity** — Centralized in `src/site.ts` (canonical URL, email, social links)

---

## Tech stack

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-000000?style=flat&logoColor=white)

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server (default: [localhost:5173](http://localhost:5173)) |
| `npm run build` | `tsc -b` → Vite build → sitemap → prerender → validate prerender |
| `npm run preview` | Local preview of production build |
| `npm run lint` | ESLint |
| `npm run validate-llms-txt` | Check `llms.txt` consistency |
| `npm run validate-articles` | SEO checks for articles (`--fix` with `validate-articles:fix`) |

Additional tooling under `scripts/` (e.g. stats, diagnostics) can be run with `npx tsx` where needed; they are not all wired as `npm` scripts.

---

## Quick start

```bash
git clone https://github.com/Rauleinstein/raul-alvarez.git
cd raul-alvarez
npm install
npm run dev
```

No API keys are required for local development of the static site.

---

## Project structure

```
src/
├── App.tsx              # Home CV (timeline, skills, projects)
├── main.tsx             # Router, lazy articles, hydration entry
├── GlobalNav.tsx
├── AboutPage.tsx        # /sobre-mi, /about
├── PrivacyPolicy.tsx    # /privacidad, /privacy
├── MusicToggle.tsx      # Optional ambient audio
├── site.ts              # Canonical URLs, email, social links
├── i18n.ts              # UI copy (ES/EN)
├── articles/
│   ├── registry.ts      # Article routes, SEO, JSON-LD metadata
│   ├── components.tsx
│   ├── json-ld.ts
│   └── use-article-seo.ts
├── ArticleStub.tsx      # Case study shell (registry-driven)
└── …

scripts/
├── generate-sitemap.ts
├── prerender.tsx
├── validate-prerender.ts
├── validate-articles.ts
├── validate-llms-txt.ts
└── …

public/                  # Static assets, fonts, OG image
```

---

## Case studies (routes)

Articles are defined in `src/articles/registry.ts` (slug pairs ES / EN).

| Topic | Spanish slug | English slug |
|-------|--------------|--------------|
| Custodio Digital | `/custodio-digital` | `/custodio-digital-en` |
| PowerMark | `/powermark` | `/powermark-en` |
| CityHunts | `/cityhunts` | `/cityhunts-en` |
| El caso Munford | `/el-caso-munford` | `/el-caso-munford-en` |
| Feria del Libro Granada | `/feria-libro-granada` | `/feria-libro-granada-en` |
| CGV Seguros | `/cgv-seguros` | `/cgv-seguros-en` |
| Esdrújula Ediciones | `/esdrujula-ediciones` | `/esdrujula-ediciones-en` |
| Entradas y Tickets | `/entradasytickets` | `/entradasytickets-en` |
| Atlantis | `/atlantis` | `/atlantis-en` |
| Omega Protocol | `/omega-protocol` | `/omega-protocol-en` |
| DungeonKeeper | `/dungeonkeeper` | `/dungeonkeeper-en` |

---

## License

MIT — see [LICENSE](LICENSE).

---

## Connect

[![Website](https://img.shields.io/badge/raul--alvarez.es-000?style=for-the-badge&logo=safari&logoColor=white)](https://raul-alvarez.es)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raulalvarezhinojosa/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rauleinstein)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:me@raul-alvarez.es)

---

---

# :es: Resumen

> Sitio personal y CV bilingüe de **Raúl Álvarez Hinojosa** — AI Architect & AI Solutions Engineer (Granada). React 19, TypeScript, Vite 7, Tailwind v4, HTML prerenderizado, JSON-LD y Vercel Analytics.

[![Sitio en vivo](https://img.shields.io/badge/sitio-raul--alvarez.es-orange?style=flat-square)](https://raul-alvarez.es)

---

## Qué es

Portfolio pensado como sitio estático con rutas en español e inglés, páginas de caso de estudio cargadas de forma diferida, audio ambiente opcional y un pipeline de build que valida tipos, genera `sitemap.xml`, prerenderiza y valida el resultado.

**Destacados**

- **Bilingüe** — `/` y `/en` para el CV; `/sobre-mi` / `/about`; `/privacidad` / `/privacy`
- **Casos de estudio** — Registro en `src/articles/registry.ts`; contenido vía `ArticleStub` y utilidades SEO compartidas
- **Rendimiento y SEO** — Prerender + hidratación, script de validación de `llms.txt`, validación de artículos, sitemap
- **Identidad** — Centralizada en `src/site.ts` (URL canónica, email, redes)

---

## Stack

Mismas insignias que en la sección en inglés: React 19, TypeScript, Vite 7, Tailwind v4, Motion.

---

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo Vite |
| `npm run build` | Typecheck + build + sitemap + prerender + validación |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | ESLint |
| `npm run validate-llms-txt` | Validar coherencia de `llms.txt` |
| `npm run validate-articles` | Validación SEO de artículos (`validate-articles:fix` para correcciones automáticas donde aplique) |

---

## Inicio rápido

```bash
git clone https://github.com/Rauleinstein/raul-alvarez.git
cd raul-alvarez
npm install
npm run dev
```

Para el sitio estático no hace falta configurar variables de entorno en local.

---

## Estructura y casos de estudio

La estructura de carpetas principal coincide con la sección en inglés. Las rutas de cada caso están en `src/articles/registry.ts` (tabla de slugs arriba).

---

## Licencia

MIT — ver [LICENSE](LICENSE).

---

## Contacto

Mismos enlaces que en la sección **Connect** arriba: [raul-alvarez.es](https://raul-alvarez.es), [LinkedIn](https://www.linkedin.com/in/raulalvarezhinojosa/), [GitHub](https://github.com/Rauleinstein), [me@raul-alvarez.es](mailto:me@raul-alvarez.es).
