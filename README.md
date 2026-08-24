# NextGen Fitness — website (v2, with photography)

Marketing site for **NextGen Fitness**, Pocket D, Sector 39, Gurugram.

This is the photo version: it uses the gym's own images throughout, where the
earlier build used typography and gradients only.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.
The whole page is statically prerendered — there is no server, database or API.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where to change things

**`src/lib/site.ts` is the single source of truth.** Phone numbers, address, hours,
programs, facilities and stats all live there — edit that one file rather than hunting
through components.

### No pricing on this site

The site deliberately mentions **no prices, rates or fees anywhere**, and makes no
offer of a free trial or free session. Every call to action is an enquiry — visitors
are pointed at a phone call or a WhatsApp message, and rates are discussed there.

If you want to add a membership section with prices later, it needs a new component
plus a `#membership` entry in `navLinks`.

### Still to be filled in

Two things are placeholders. They were not published anywhere on the gym's Instagram,
so they are invented and **must be replaced before going live**. Both are marked
`PLACEHOLDER` in `src/lib/site.ts`:

| What | Where | Currently |
| --- | --- | --- |
| Opening hours | `site.hours` | Mon–Sat 5:00 AM–10:30 PM, Sun 7:00 AM–12:00 PM |
| Headline stats | `stats` | 500+ members, 10+ trainers, 4.8★ |

Everything else — the address, the three phone numbers, the Instagram handle, and the
equipment listed under Facilities — is taken from the gym's actual Instagram profile
and posts.

## How the enquiry form works

`src/components/EnquiryForm.tsx` has **no backend**. It validates the name and phone
number, composes a prefilled message, and opens `wa.me` so the enquiry lands in the
gym's WhatsApp. To point it at a different number, change `site.whatsapp` (country
code + number, no `+`); to change the prefilled text, edit `enquiryMessage`.

If you later want enquiries emailed or stored instead, replace the `window.open` call
with a POST to a route handler under `src/app/api/`.

## Photography

All imagery comes from the gym's own Instagram (`@nextgenfitnessoficial`) — no
stock. Stills were pulled from their reels with `ffmpeg` and cropped so that the
burned-in story stickers ("Sector 39 (Gurgaon)") and the "NEXT GEN Fitness"
watermark fall outside the frame.

| File | Used by | Notes |
| --- | --- | --- |
| `public/video/hero.mp4` | Hero background | 2.0 MB, silent, looping; desktop only |
| `public/video/hero-poster.jpg` | Hero still | Shown on mobile and before the clip plays |
| `public/posts/post-*.jpg` | Instagram section | The gym's own creatives, used whole |
| `public/photos/hero-floor.jpg` | (spare) | Kept as an alternative hero still |
| `public/photos/program-*.jpg` | Programs cards | 900×600, one per track |
| `public/photos/gym-*.jpg` | Gallery | 600×800 portrait, eight tiles |
| `public/logo.jpg` | Header, footer | The real profile badge, 512×512 |
| `src/app/icon.jpg` | Favicon | Generated from the logo |
| `src/app/opengraph-image.jpg` | Link previews | 1200×630 crop of the hero shot |

### The hero clip

`public/video/hero.mp4` is the gym's walkthrough reel, cut down for the web:

- **Cropped to a clean band.** The reel carries a "Sector 39 (Gurgaon)" sticker
  near the top and a "NEXTGEN Fitness" watermark at roughly y=920–985. The crop
  (`720×405` starting at y=508) sits between them, so neither appears on screen.
- **Trimmed past the exterior intro** so it opens on the floor, not the sky.
- **Silent, 26 s, H.264, faststart.** Audio is stripped — a background video
  must never make noise.
- **Desktop only.** `HeroMedia` mounts the `<video>` only above 768 px and only
  when the visitor hasn't asked for reduced motion, so phones load the poster
  and never fetch the 2 MB file.

### One image deliberately not used whole

The August carousel includes a slide reading *"Baad mai membership mehngi hojati
hai"*. Since the site carries no pricing, only the clean lower half of that
photo is used, as the `gym-smith.jpg` gallery tile. The other four creatives are
shown whole in the Instagram section.

Two things worth knowing before you swap images in:

- **Source frames are only 720×1280.** Nothing is displayed larger than that
  resolution can carry — the gallery tiles are portrait and the hero shot is
  darkened heavily, which is what hides the upscale. If you shoot proper photos
  later, drop them in at the same paths and the layouts will improve on their own.
- **Alt text lives in `src/lib/photos.ts`**, next to each `src`. Keep it
  descriptive if you change the pictures.

The 14 reels in the download were used only as a source of stills. If you ever
want a moving hero, the raw `.mp4` files are the place to start — but they run
3–20 MB each and would need compressing first.

## The logo

`src/components/Logo.tsx` uses the gym's real logo badge from `public/logo.jpg`,
rendered as a circle beside the wordmark.

The brand palette (teal `#52a0a9`, copper `#c9784a`, charcoal `#0b1216`) is defined as
Tailwind theme tokens in `src/app/globals.css`.

## Deploying

Any static-friendly host works — Vercel, Netlify or Cloudflare Pages. On Vercel it
deploys with no configuration.
