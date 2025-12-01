<script lang="ts">
  import { getTranslations, getLocalizedPath, type Locale } from "../../i18n";
  import { getCvProfile } from "../../lib/config/cv";

  interface Props {
    lang?: Locale;
    showNav?: boolean;
    showIntro?: boolean;
  }

  let { lang = "de", showNav = true, showIntro = true }: Props = $props();
  const t = getTranslations(lang);
  const profile = getCvProfile(lang);
</script>

<header class="app-grid py-6">
  <div class="app-text-column space-y-6">
    <!-- Nav row: Photo + Name / CV link -->
    <div class="flex items-center justify-between">
      <a href={getLocalizedPath("/", lang)} class="flex items-center gap-3 group">
        <img
          src="/assets/arne-neu-quadratisch.jpeg"
          alt="Arne Wiese"
          class="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span class="font-medium text-foreground">Arne Wiese</span>
      </a>

      {#if showNav}
        <a
          href={getLocalizedPath("/cv", lang)}
          class="text-sm cv-text-secondary hover:text-foreground transition-colors"
        >
          {t.nav.cv}
        </a>
      {/if}
    </div>

    <!-- Intro block -->
    {#if showIntro}
      <div class="space-y-1">
        <p class="text-sm cv-text-secondary">
          {profile.title} · {lang === "en" ? "Meerbusch, Germany" : "Meerbusch, Deutschland"}
        </p>
        <p class="text-xs cv-text-meta">
          {profile.education}
        </p>
        <p class="text-sm cv-text-secondary mt-2">
          {profile.intro}
        </p>
        <p class="text-sm cv-text-meta mt-2">
          <a href={`mailto:${profile.email}`} class="hover:text-foreground transition-colors">{profile.email}</a>
          <span class="mx-1">·</span>
          <a href={`https://${profile.website}`} class="hover:text-foreground transition-colors">{profile.website}</a>
        </p>
      </div>
    {/if}
  </div>
</header>
