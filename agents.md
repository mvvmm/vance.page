# Personal Website — vance.page

Portfolio and blog built with Next.js 16 (App Router), deployed to Cloudflare Workers via OpenNext.

## Architecture

Server-rendered Next.js app with static generation for blog posts and project pages. Uses `next-themes` for dark mode, MDX for blog content, and Tailwind CSS v4 with OKLCH color variables.

## Project Structure

```
app/
├── layout.tsx                  # Root layout (ThemeProvider, Navbar, Footer)
├── page.tsx                    # Home/About page
├── globals.css                 # Tailwind v4, OKLCH theming, prose styles
├── blog/
│   ├── page.tsx                # Blog index
│   └── [slug]/page.tsx         # Dynamic blog post (MDX, generateStaticParams)
├── projects/
│   ├── page.tsx                # Projects index with cover image grid
│   ├── layout.tsx              # Projects layout with header
│   ├── imax-near-me/page.tsx
│   ├── omnibin/page.tsx
│   ├── generative-art-playground/page.tsx
│   └── masahiro-lamarsh/page.tsx
├── experience/page.tsx         # Work history timeline
├── contact/page.tsx
├── sitemap.ts                  # Dynamic sitemap (static routes + blog posts)
└── robots.ts
components/
├── navbar.tsx                  # Nav with active link detection (client)
├── footer.tsx
├── theme-toggle.tsx            # Dark/light toggle (client, next-themes)
├── photo.tsx                   # Profile photo with grayscale effect
├── love.tsx                    # Interactive heart animation (client)
├── opengraph-image.tsx         # Base OG image generator
├── mdx/
│   ├── figure.tsx              # Code block with copy button overlay
│   ├── pre.tsx                 # Custom pre tag with copy button
│   └── note.tsx                # Info box component
├── logos/                      # GitHub, Apple, Instagram icons
└── ui/button.tsx               # CVA button (shadcn/ui pattern)
lib/
├── routes.ts                   # Centralized routes, slugs, nav items
├── links.ts                    # External URLs (personal, company, project)
├── blog.ts                     # MDX helpers (getAllPosts, getPostBySlug)
├── utils.ts                    # cn() class merger
└── themes/cursor-dark.json     # Custom Shiki theme for code blocks
content/
└── blog/*.mdx                  # Blog posts with gray-matter frontmatter
public/
├── projects/                   # Project cover images
├── experience-logos/            # Company logos
└── vance-morrison.png          # Profile photo
```

## Key Conventions

- **Routing**: All routes centralized in `lib/routes.ts`, external links in `lib/links.ts`
- **Styling**: Tailwind v4 with OKLCH CSS variables for light/dark themes. Prose from `@tailwindcss/typography`.
- **Blog**: MDX files in `content/blog/` with frontmatter (title, date, description). Rendered with `next-mdx-remote` and rehype plugins (slug, autolink-headings, pretty-code with Shiki).
- **OG images**: Each route has an `opengraph-image.tsx` using `generateOpengraphImage()` from `components/opengraph-image.tsx`
- **Components**: Server components by default, `"use client"` only where needed (navbar, theme toggle, love animation)
- **Formatting**: Prettier with tabs, 100 char width, trailing commas (`.prettierrc.json`)

## Stack

Next.js 16, React 19, TypeScript, Tailwind v4, MDX, Shiki, next-themes, Cloudflare Workers (OpenNext), pnpm

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start local dev server |
| `pnpm build` | Next.js production build |
| `pnpm worker-build` | OpenNext build for Cloudflare |
| `pnpm deploy` | Build and deploy to Cloudflare Workers |
| `pnpm lint` | ESLint check |
