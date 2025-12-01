<script lang="ts">
  import { getTranslations, getLocalizedPath, type Locale } from "../../i18n";

  interface Props {
    lang?: Locale;
    title?: string;
    backHref?: string;
    showDownloads?: boolean;
  }

  let {
    lang = "de",
    title = "",
    backHref = "/",
    showDownloads = false
  }: Props = $props();

  const t = getTranslations(lang);
</script>

<header class="app-grid py-6">
  <div class="app-text-column">
    <div class="flex items-center justify-between">
      <!-- Left: Back button + Title -->
      <div class="flex items-center gap-4">
        <a
          href={getLocalizedPath(backHref, lang)}
          class="flex items-center gap-2 text-sm cv-text-secondary hover:text-foreground transition-colors"
        >
          <span aria-hidden="true">←</span>
          <span>{t.nav.home}</span>
        </a>
        {#if title}
          <span class="cv-text-meta">·</span>
          <span class="text-sm font-medium">{title}</span>
        {/if}
      </div>

      <!-- Right: Optional download links -->
      {#if showDownloads}
        <div class="flex items-center gap-4 text-sm">
          <a
            href="/api/cv/pdf?lang=de"
            class="cv-text-secondary hover:text-foreground transition-colors"
          >
            PDF (DE)
          </a>
          <a
            href="/api/cv/pdf?lang=en"
            class="cv-text-secondary hover:text-foreground transition-colors"
          >
            PDF (EN)
          </a>
        </div>
      {/if}
    </div>
  </div>
</header>
