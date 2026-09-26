# Kanza Iqbal — Portfolio (Hero Section)

Next.js 14 (App Router) + Tailwind CSS + Framer Motion build of the hero
section (Frame 1) from the Figma design, with floating-badge entrance/float
animation inspired by shriramsivakumar.vercel.app.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's here

- `app/layout.js` — fonts (Fraunces + Inter via next/font/google) and global shell
- `app/page.js` — renders the Hero
- `components/Hero.jsx` — the whole hero: image collage, orange splash,
  portrait, name/title/CTA, and the 6 floating badge cards
- `app/globals.css` — Tailwind entry + reduced-motion support

## Notes

- Collage and portrait images are Unsplash placeholders — swap the URLs in
  `components/Hero.jsx` (`collageImages` array and the portrait `Image` src)
  for the real photos.
- Animation: one orchestrated entrance (staggered fade/slide-up for every
  badge + the portrait + the splash), then each badge gets a slow, subtle
  continuous float loop — same idea as the inspiration site.
- Colors/type live in `tailwind.config.js` (`clay`, `ink`, `cream` etc.) —
  tweak there to match the Figma tokens exactly once you have them.
- Next section (Frame 2 / "I'm Kanza" light layout) isn't built yet — say the
  word and I'll add it as its own section/component.
