# ESE-J Engineering Ltd: website

Next.js 15 (App Router) + TypeScript, plain CSS.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Don't run `npm run build` while `npm run dev` is running, because both write to `.next`.
If the dev server shows "Cannot find module './NNN.js'", stop it, delete `.next`, and start it again.

## Production

```bash
npm run build && npm start
```

Deploy by importing the repo into Vercel (zero config).

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero slider, services, about, why us, clients, process, projects, certifications, CTA |
| `/about` | Story, mission & vision, CEO message (`#leadership`), timeline, team, process (`#process`) |
| `/services` | All services |
| `/services/[slug]` | One page per service (6), generated from `lib/content.ts` |
| `/gallery` | Filterable gallery + before & after |
| `/certifications` | HSE commitments + certificate scans |
| `/contact` | Contact cards, quote form (WhatsApp / email), FAQ |

## Where things live

| What | Where |
| --- | --- |
| All copy: services, clients, timeline, FAQs, certifications, contact details, menu | `lib/content.ts` |
| Header + mega menu + mobile drawer | `components/Header.tsx` |
| Design tokens (colours, radius, fonts) and all styles | `app/globals.css` (top `:root` block) |
| Company photos & certificate scans | `public/img/` |
| Nigerian site photos (Wikimedia Commons, credited on `/credits`) | `public/img/ng/`, credits in `lib/content.ts` → `photoCredits` |
| Before & after house photos (section hidden until filled) | `lib/content.ts` → `beforeAfter` |
| Company registration (CAC, RC, TIN) | `lib/content.ts` → `company`, shown by `components/CompanyFacts.tsx` |
| Client logos | `public/img/clients/` |
| Downloadable company profile | `public/ese-j-company-profile.pdf` |

## SEO

| What | Where |
| --- | --- |
| Business details for Google/Maps/AI (name, address, phone, socials) | `lib/content.ts` → `company` (**add `socials` once profiles exist**) |
| Structured data (GeneralContractor, Service, FAQ, Breadcrumbs) | `lib/seo.ts`, rendered by `components/JsonLd.tsx` |
| Per-page titles, descriptions, canonical URLs, share cards | `pageMetadata()` in `lib/seo.ts` |
| Sitemap / robots (AI crawlers explicitly allowed) | `app/sitemap.ts`, `app/robots.ts` → `/sitemap.xml`, `/robots.txt` |
| Share image (WhatsApp, LinkedIn, X, Facebook) | `app/opengraph-image.tsx` |
| Plain-language summary for AI assistants | `public/llms.txt` |
| Logo files | `public/brand/` |

Environment variables (set in Vercel → Settings → Environment Variables):

- `NEXT_PUBLIC_SITE_URL`: defaults to `https://www.esejengineering.com`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: code from Google Search Console (HTML tag method)
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`: code from Bing Webmaster Tools
