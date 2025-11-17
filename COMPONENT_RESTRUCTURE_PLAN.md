# Component Restructure Progress

## Goal
Reorganize components from `src/components/*` and `src/lib/components/*` into a clean, feature-based structure within `src/components/`.

## Target Structure
```
src/components/
├── cv/              # CV-related components (4 files)
│   ├── cv-header.svelte
│   ├── cv-work-listing.svelte
│   ├── cv-education-listing.svelte
│   └── listing-content.svelte
├── layout/          # Shared layout components (2 files)
│   ├── site-footer.svelte
│   └── project-logo-list.svelte
├── marketing/       # Service page components (5 files ONLY)
│   ├── pricing-section.svelte
│   ├── examples-grid.svelte
│   ├── process-section.svelte
│   ├── faq-section.svelte
│   └── service-card.svelte
└── sections/        # Homepage sections (3 files)
    ├── about-section.astro
    ├── projects-section.astro
    └── technologies-section.astro
```

## What's Been Done (in /Users/wiese/Dev/wiesson.dev)

### ✅ Files Moved
- `cv-header.svelte` → `src/components/cv/`
- `listing-content.svelte` → `src/components/cv/`
- `project-logo-list.svelte` → `src/components/layout/`
- `site-footer.svelte` → `src/components/layout/`
- `about-section.astro` → `src/components/sections/`
- `technologies-section.astro` → `src/components/sections/`

### ✅ Files Deleted
- `src/components/hero.astro` (unused)
- `src/components/projects-section.astro` (duplicate)
- `src/components/services-section.astro` (unused)
- `src/lib/components/contact-form.svelte` (unused)
- `src/lib/components/cv-education-listing.svelte` (duplicate)
- `src/lib/components/cv-work-listing.svelte` (duplicate)

### ⚠️ Issues
- `cv-education-listing.svelte` and `cv-work-listing.svelte` exist in `src/components/cv/` but are newer versions from the worktree (dated Nov 17 08:45) with updated imports
- These files have already been updated with correct imports in the worktree but not in the actual project

## What Still Needs to Be Done

### 1. Delete 33 Unused Marketing Components
The marketing folder currently has 38 files but should only have 5. Delete these:

```bash
cd /Users/wiese/Dev/wiesson.dev/src/components/marketing

# Delete unused files
rm broker-cooperation.svelte
rm broker-cta-new.svelte
rm broker-expose-service.svelte
rm coming-soon.svelte
rm CTA.svelte
rm DualValueProps.svelte
rm expose-detailed-process.svelte
rm expose-integrations.svelte
rm expose-pricing.svelte
rm ExposeROICalculator.svelte
rm ExposeSuccessStories.svelte
rm ExposeTrustSignals.svelte
rm faq-new.svelte
rm features-new.svelte
rm Features.svelte
rm hero-modern.svelte
rm hero-v2.svelte
rm how-it-works-new.svelte
rm HowItWorks.svelte
rm HowItWorksDual.svelte
rm legal-page.svelte
rm metadata.svelte
rm mini-value-props.svelte
rm NetworkEffect.svelte
rm newsletter-section.svelte
rm page-header.svelte
rm partner-logos.svelte
rm services-carousel.svelte
rm site-footer.svelte
rm site-header.svelte
rm testimonials-masonry.svelte
rm testimonials-new.svelte
rm Testimonials.svelte
```

**Keep only these 5 files:**
- `examples-grid.svelte`
- `faq-section.svelte`
- `pricing-section.svelte`
- `process-section.svelte`
- `service-card.svelte`

### 2. Create `src/components/sections/projects-section.astro`

The file was deleted by mistake. It needs to be recreated:

```astro
---
import ProjectLogoList from "$components/layout/project-logo-list.svelte";
---

<section id="projects" class="app-grid py-16 scroll-mt-16">
  <div class="app-text-column">
    <h2 class="cv-h2 mb-6">Kunden & Projekte</h2>
  </div>
  <div class="app-wide-column">
    <!-- Section Title -->

    <!-- Logo Grid -->
    <ProjectLogoList />
  </div>
</section>
```

### 3. Update Import Statements in Components

#### Update `src/components/cv/cv-work-listing.svelte`
Change line 3 from:
```svelte
import ListingContent from "$lib/components/listing-content.svelte";
```
To:
```svelte
import ListingContent from "$components/cv/listing-content.svelte";
```

#### Update `src/components/cv/cv-education-listing.svelte`
Change line 3 from:
```svelte
import ListingContent from "$lib/components/listing-content.svelte";
```
To:
```svelte
import ListingContent from "$components/cv/listing-content.svelte";
```

### 4. Clean Up Empty Directory
```bash
rmdir /Users/wiese/Dev/wiesson.dev/src/lib/components
```

## Import Statements Already Updated (in Pages/Layouts)

These files have already been updated with the correct imports:
- ✅ `src/pages/index.astro`
- ✅ `src/pages/cv/index.astro`
- ✅ `src/layouts/base-layout.astro`

## Verification Steps

After completing the above:

1. **Check file structure:**
```bash
cd /Users/wiese/Dev/wiesson.dev
tree src/components -L 2
```

2. **Verify no linter errors:**
```bash
npm run build
# or
npm run check
```

3. **Restart dev server:**
```bash
npm run dev
```

4. **Test these pages:**
   - `/` (homepage)
   - `/cv` (CV page)
   - `/services` (services pages)

## Path Aliases (Already Configured)

The `$components` alias is already set up in:
- `tsconfig.json` 
- `astro.config.js`

No changes needed there.

## Summary

**Total components before:** 54 files (across src/components and src/lib/components)
**Total components after:** 17 files (organized in src/components with subfolders)
**Files deleted:** 37 unused components

