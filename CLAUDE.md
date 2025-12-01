# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install     # Install dependencies
pnpm run dev     # Start dev server
pnpm run build   # Build for production
pnpm run preview # Preview production build
```

## Architecture

**Astro 5 site with Svelte 5 components, Tailwind CSS v4, and i18n (de/en)**

### Tech Stack
- Astro 5 (static output) with Vercel adapter
- Svelte 5 for interactive components
- Tailwind CSS v4 with shadcn-svelte UI components (bits-ui)
- TypeScript with path aliases: `$lib`, `$components`, `$utils`, `$types`, `$data`, `$layouts`

### Project Structure
- `src/pages/` - Astro pages. German routes at root, English under `/en/`
- `src/layouts/` - Base layouts (base-layout.astro, blog-layout.astro)
- `src/components/` - Mixed Astro and Svelte components
  - `cv/` - CV-related components
  - `sections/` - Page section components
  - `marketing/` - Service/marketing components
  - `blog/` - Blog components
  - `layout/` - Site header/footer
- `src/lib/ui/` - shadcn-svelte UI component library
- `src/content/` - Astro content collections (blog, work, education with i18n variants)
- `src/i18n/` - Translations (de.json, en.json) with utility functions
- `src/styles/` - Global CSS (base.css, blog.css)

### Layout System

Uses a 3-column CSS grid defined in `src/styles/base.css`:

```css
.app-grid         /* Container: grid with 3 columns [1fr] [content] [1fr] */
.app-text-column  /* 65ch max-width for readable text */
.app-wide-column  /* 96ch max-width for cards/grids */
.app-full-column  /* Full viewport width */
```

Convention: Every top-level section starts with `.app-grid`.

### Content Collections

Defined in `src/content/config.ts`:
- `blog` - Blog posts with title, description, tags, dates, draft flag
- `work` / `work-en` - Work experience entries
- `education` / `education-en` - Education entries

### i18n

- Default locale: German (de) at root paths
- English: `/en/` prefix
- Use `getTranslations(locale)` from `src/i18n/index.ts`
- Translations in JSON files: `src/i18n/de.json`, `src/i18n/en.json`

### Styling

- Tailwind v4 with CSS variables for theming (light/dark)
- `cn()` utility in `$lib/utils.ts` for class merging
- Color scheme defined via CSS custom properties in base.css
