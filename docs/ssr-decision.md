# SSR / Prerender Decision

Current setup: Vite + React SPA. Googlebot renders JavaScript, so the site
is indexable as-is. However, social crawlers (LinkedIn, Slack, iMessage) and
some search crawlers do not execute JS — they will see a blank `<div id="root">`.
The Phase 1 meta tags mitigate this for social sharing, but prerendering the
HTML would also improve Time-to-First-Byte and Core Web Vitals scores.

## Options

| Option | Estimated effort | Pros | Cons |
|---|---|---|---|
| **`vite-plugin-ssg`** | ~2 hours | Stays on Vite + React with no refactor; just generates static HTML snapshots at build time | One extra plugin to keep updated; not true SSR (no per-request rendering); limited to static routes |
| **Migrate to Astro (React islands)** | ~1 day | Best performance — zero JS shipped by default; only interactive components hydrate; excellent Core Web Vitals | Full refactor of component file structure; routing and layouts change; team needs to learn Astro conventions |
| **Migrate to Next.js App Router** | ~1–2 days | SSR by default; familiar React model; strong ecosystem and hosting support (Vercel) | Heavier runtime overhead; vendor proximity to Vercel; more complex build pipeline than current Vite setup |

## Recommendation

For a single-page portfolio with no dynamic routes, **`vite-plugin-ssg`** is
the highest-value, lowest-risk path. It adds one build step that snapshots the
rendered HTML, which is enough for crawler visibility and LCP improvement,
without touching any component code.

Astro is worth considering if you later add a blog or project case-study pages
(content-heavy static routes where zero-JS really pays off).

## How to proceed with `vite-plugin-ssg`

1. `npm install vite-plugin-ssg`
2. Rename `src/main.tsx` → `src/main.ts` and export a `ViteSSG` app factory
3. Update `vite.config.ts` to add the `ViteSSG` plugin
4. Run `npm run build` — static HTML files appear in `dist/`
5. Verify with `curl http://localhost:4173/ | grep "<h1"` that HTML is present

No component code changes needed.

---

*To execute any option, confirm your choice and this doc will be updated with
step-by-step implementation.*
