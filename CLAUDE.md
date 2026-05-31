# Javer — Project Context for Claude Code

## What this is
Javer is a performance digital marketing agency (Edmonton & Calgary, Canada).
This is its marketing website — **Next.js 16, App Router, TypeScript, Turbopack**, deployed on **Vercel** via GitHub auto-deploy.

- **Live domain:** javer.ca (and www.javer.ca)
- **GitHub repo:** github.com/evolspirit88/javer (branch: `main`)
- **Hosting:** Vercel (auto-deploys on push to `main`)

## YOUR TASK
Port the **v5 design** from `/design-reference/javer-v5-preview.html` into the live Next.js codebase, using my UI/UX skill to elevate the polish where possible. The reference HTML is the source of truth for the look and the exact copy.

The current codebase (in `/app` and `/components`) has an OLDER version of the homepage. The v5 reference contains refinements that were never ported in. Bring the live code up to match the reference.

## KEY CHANGES the v5 reference contains (vs. what's likely in the repo)
1. **Hero wordmark is smaller** — `clamp(60px, 8.5vw, 110px)` (was much larger / screen-filling)
2. **Value-prop line above the fold** — "Data-driven marketing that delivers real, measurable growth." at `clamp(22px,2.4vw,32px)`, weight 700
3. **Nav is bigger** — logo `32px`, nav height `80px`, links `12px` weight `600`
4. **Pulsing urgency badge** — "Accepting new clients for Q3 2025" (forest-green pill, gold pulsing dot) in BOTH the hero and the final CTA section
5. **Stronger overlays** — hero/service/CTA gradients are darker so text never competes with the mountain photo
6. **Contact info (CRITICAL — update everywhere):**
   - Phone: **+1-780-860-3865**  → `tel:+17808603865`
   - Email: **markus.tran@wearejodigital.com**

## Design tokens (already in globals.css — keep these)
```
--ink:#0A0908  --ink2:#141210  --ink3:#1E1B17
--gold:#C9A96E --gold2:#E2C07A
--cream:#F5F0E8 --chalk:#FDFAF5
--forest:#2B4237 --forest2:#3D5E50
serif: 'Cormorant Garamond' (display, italic)
sans:  'DM Sans' (body)
```
Aesthetic: dark, cinematic, editorial. Mountain banner hero with Ken Burns zoom. Gold as the single accent. Grain texture overlay at .04 opacity.

## Site structure (15 routes — all must keep building clean)
```
app/
  page.tsx                        # homepage — main redesign target
  about/page.tsx
  process/page.tsx                # CLEAR methodology
  services/page.tsx
  services/web-design/page.tsx
  services/digital-strategy/page.tsx
  services/google-ads/page.tsx
  services/meta/page.tsx
  services/seo/page.tsx
  services/campaign-tracking/page.tsx
  services/advanced-analytics/page.tsx
  case-studies/page.tsx
  blog/page.tsx                   # Sanity-powered
  blog/[slug]/page.tsx            # Sanity-powered, lazy imports + env guards
  get-a-proposal/page.tsx         # 4-step form, client component
  studio/[[...tool]]/page.tsx     # Sanity Studio mount
components/
  Nav.tsx  Footer.tsx  Reveal.tsx  Stats.tsx  TrustBar.tsx
  PhotoStrip.tsx  FAQ.tsx  ServiceHero.tsx  ProgressBar.tsx
sanity/
  schemas/  lib/  (post, author, category, blockContent)
sanity.config.ts                  # basePath:'/studio' — DO NOT remove
```

## CMS — Sanity (already wired, don't break)
- Studio at javer.ca/studio. `sanity.config.ts` MUST keep `basePath: '/studio'`.
- Blog pages use **lazy Sanity imports + env-var guards** so the build succeeds even without env vars present. Preserve this pattern — it's what makes Vercel builds pass.
- Env vars (set in Vercel, not committed):
  `NEXT_PUBLIC_SANITY_PROJECT_ID=1q7iyzvr`
  `NEXT_PUBLIC_SANITY_DATASET=production`

## Build / deploy guardrails (LEARNED THE HARD WAY)
- **`next.config.ts`** must NOT contain an `eslint` key — Next 16 rejects it. ESLint rules are disabled via `.eslintrc.json` instead. Keep `typescript: { ignoreBuildErrors: true }` and `images.remotePatterns` for `images.unsplash.com`, `wearejodigital.com`, `cdn.sanity.io`.
- **Never commit an `out/` folder.** A stale `out/` (from a past `output:'export'`) makes Vercel serve old static files and causes 404s. It must stay deleted; `.gitignore` should include it.
- Don't set `output: 'export'` — this site uses Next's normal server/SSG output on Vercel.
- Verify `npm run build` passes locally before pushing.

## Images
- Mountain hero: `https://wearejodigital.com/wp-content/uploads/2024/02/Mountain-BG-min-scaled.jpg`
- Service/testimonial/strip photos: Unsplash CDN (see reference HTML for exact URLs)
- Homepage video embed: YouTube ID `G0ER7tFNxck` (placeholder — Markus may swap for own reel)

## Workflow
1. Read `/design-reference/javer-v5-preview.html` fully first.
2. Port section by section: Nav → Hero → TrustBar → Services → Video → Stats → PhotoStrip → Testimonials → Why → FAQ → CTA → Footer.
3. Keep components modular (the reference is one flat HTML file; the Next codebase splits into components).
4. Update ALL contact info to the new phone/email.
5. Run `npm run build`, fix anything, then commit + push to `main`.
