<script lang="ts">
  import { getCvProfile } from "../../lib/config/cv";
  import type { Locale } from "../../i18n";

  interface Props {
    name: string;
    title: string;
    location?: string;
    imageUrl: string;
    lang?: Locale;
    showEducation?: boolean;
    showIntro?: boolean;
    showEmail?: boolean;
    showWebsite?: boolean;
  }

  let {
    name,
    title,
    location,
    imageUrl,
    lang = "de",
    showEducation = true,
    showIntro = true,
    showEmail = true,
    showWebsite = true,
  }: Props = $props();

  const profile = getCvProfile(lang);
  const education = profile.education;
  const intro = profile.intro;
  const email = profile.email;
  const website = profile.website;
</script>

<header class="app-grid py-16">
  <div
    class="app-text-column flex flex-col md:flex-row items-start gap-5 md:gap-6"
  >
    <!-- Circular Profile Photo -->
    <img
      src={imageUrl}
      alt={name}
      class="w-24 h-24 rounded-full object-cover shrink-0"
    />

    <!-- Text Content -->
    <div class="flex flex-col gap-2">
      <!-- Name -->
      <h1 class="text-xl font-normal cv-text-primary">
        {name}
      </h1>

      <!-- Title and Location -->
      <p class="text-sm cv-text-secondary">
        {title}
        {#if location}
          · {location}{/if}
      </p>

      <!-- Education -->
      {#if showEducation}
        <p class="text-xs cv-text-meta">
          {education}
        </p>
      {/if}

      {#if showIntro}
        <p class="text-sm cv-text-secondary">
          {intro}
        </p>
      {/if}

      <!-- Contact Links -->
      {#if showEmail || showWebsite}
        <div class="flex items-center gap-3 text-sm cv-text-meta">
          {#if showEmail}
            <a href={`mailto:${email}`} class="hover:underline">
              {email}
            </a>
            {#if showWebsite}<span>·</span>{/if}
          {/if}

          {#if showWebsite}
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            >
              {website}
            </a>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</header>
