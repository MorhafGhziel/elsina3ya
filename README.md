# الصناعية — ALSINAIYAH

Marketing site for Alsinaiyah, a Saudi talent-and-content agency. Arabic-first
(RTL), built on the brand's industrial identity: safety orange on black,
hazard tape, technical labels, hard cuts between light and dark.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | Does                                  |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Dev server                            |
| `npm run build`     | Production build                      |
| `npm start`         | Serve the production build            |
| `npm run lint`      | ESLint                                |
| `npm run typecheck` | `tsc --noEmit`                        |

### Environment

The contact form posts to `/api/contact`, which sends mail through Resend.
Without these set the form returns a friendly error and nothing is sent; the
rest of the site — including `npm run build` — works normally.

```bash
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL="الصناعية <noreply@snaya.sa>"   # optional, has a default
```

The endpoint is public, so it escapes anything interpolated into the email,
strips line breaks out of the subject header, and carries a honeypot field
plus a per-IP throttle. **The throttle is in-process**: it resets on redeploy
and is per-instance on serverless, so it raises the cost of a mail-bomb
rather than preventing one. Move it to a shared store or a WAF rule if abuse
ever shows up.

## Layout of the code

```
app/
  layout.tsx          Document shell, metadata, font preloads
  page.tsx            Section order — the whole page in one glance
  globals.css         The design system: tokens, type scale, brand graphics
  lib/
    content.ts        Every string on the site. Copy never lives in a component.
    motion.ts         Shared easings and animation variants
    cn.ts             className joiner
    useMediaQuery.ts  SSR-safe media query hook
  ui/                 Reusable pieces (buttons, marquees, reveals, graphics)
  sections/           One file per band of the page
  api/contact/        Resend-backed contact endpoint
```

Two rules keep this tidy: **copy lives in `lib/content.ts`**, and **a visual
idiom used twice becomes a `ui/` component** rather than being pasted.

## Design system

Tokens live in the `@theme` block in `globals.css`, so they are available as
Tailwind utilities (`bg-ink`, `text-flare`, `border-rule-dark`, …).

| Token   | Value     | Role                                        |
| ------- | --------- | ------------------------------------------- |
| `ink`   | `#0C0C0C` | Primary canvas                              |
| `paper` | `#FFF6F3` | Light sections                              |
| `flare` | `#FF4800` | The brand orange — accents, fills, rules     |
| `volt`  | `#FEFF02` | Used exactly once, on the impact band       |

Type is **IBM Plex Sans Arabic** for Arabic and body, **Roboto Condensed**
for Latin technical labels (`.tech`) and the Latin endline (`.cond`) — both
self-hosted in `public/fonts`, subset by `unicode-range`.

Brand graphics are CSS utilities rather than images: `.hazard` (safety tape),
`.scanlines`, `.tag-shape` (the pentagon badge silhouette), `.blueprint`
(hairline grid), `.grain`, `.duotone`.

## Motion

Framer Motion throughout, Lenis for smooth scroll. The house curve is
`ease.expo` in `lib/motion.ts` — everything uses it so the page feels like one
object. Notable moments: the shutter preloader, scroll-velocity tickers, the
pinned horizontal services rail, and the sticky-stacking values cards.

Every effect is gated on `prefers-reduced-motion`: Lenis does not start, the
preloader clears on the first frame, marquees hold still, and the custom
cursor never renders.
