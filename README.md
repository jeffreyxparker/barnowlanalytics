# barnowlanalytics.com

Single-page marketing site for Barn Owl Analytics (organic influencer incrementality measurement).
Next.js 15 (App Router) + Tailwind + a few shadcn/ui primitives. Hosted on Firebase App Hosting (`apphosting.yaml`).

- Copy source of truth: `content/site-content.md`
- Sections: `src/components/sections/*`, in page order in `src/app/page.tsx`
- Charts: `src/components/charts/lift-chart.tsx` (inline SVG + CSS animation, honours `prefers-reduced-motion`), geometry in `src/lib/chart-geometry.ts`
- OG image: generated at build time by `src/app/opengraph-image.tsx`
- Image credits: `CREDITS.md`

```bash
npm install
npm run dev      # http://localhost:9002
npm run build && npm run start
npm run lint
```

The previous DTC/survey site is preserved at tag `legacy-dtc-site`.
