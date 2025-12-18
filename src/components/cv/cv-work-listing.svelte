<script lang="ts">
  import { formatDays, formatYear } from "$utils/dateFormat";
  import ListingContent from "$components/cv/listing-content.svelte";
  import type { CollectionEntry } from "astro:content";
  import { getTranslations, type Locale } from "../../i18n";

  interface Props {
    title: string;
    subtitle?: string;
    items: (CollectionEntry<"work"> | CollectionEntry<"work-en">)[];
    lang?: Locale;
    showDetails?: boolean;
    showYearsOnly?: boolean;
    showBadges?: boolean;
    showIntro?: boolean;
    viewAllLink?: {
      href: string;
      label: string;
    };
  }

  let {
    title,
    subtitle,
    items,
    lang = "de",
    showDetails = false,
    showYearsOnly = false,
    showBadges = true,
    showIntro = false,
    viewAllLink,
  }: Props = $props();

  const t = $derived(getTranslations(lang));

  const getBadgeLabel = (type: string, projectType: string): string => {
    if (type === "main" && projectType === "permanent") return t.cv.permanent;
    if (type === "main" && projectType === "project") return t.cv.freelance;
    if (type === "side") return t.cv.sideProject;
    return "";
  };
</script>

<section class="py-16">
  <div class="app-text-column">
    <div class="mb-8">
      <h2 class="cv-h2 mb-1">{title}</h2>
      {#if subtitle}
        <p class="text-sm text-muted-foreground">{subtitle}</p>
      {/if}
    </div>

    <div class="space-y-8">
      {#each items as { data } (data.project + "-" + data.company)}
        {@const showExtendedLayout =
          !showYearsOnly &&
          data.type !== "side" &&
          data.contentType !== "education"}
        {@const from = showExtendedLayout
          ? formatDays(data.from)
          : formatYear(data.from)}
        {@const to = showExtendedLayout
          ? formatDays(data.to)
          : formatYear(data.to)}
        {@const dates = from === to ? from : `${from} - ${to}`}

        <div class="page-break-avoid flex gap-4 text-sm">
          <div class="shrink-0 w-32 cv-text-meta">{dates}</div>
          <div class="space-y-2">
            <header>
              <div class="cv-text-primary font-medium">
                {#if data.project}
                  <span>
                    {data.project}
                    <span class="cv-text-meta px-2">/</span>
                  </span>
                {/if}

                {data.company}
              </div>
              {#if data.position}
                <div class="cv-text-meta text-sm flex items-center gap-2">
                  {data.position}
                </div>
              {/if}
              <div class="cv-text-meta text-sm flex items-center gap-2">
                {data.location}
                {#if showBadges}
                  <span class="cv-badge">
                    {getBadgeLabel(data.type, data.projectType)}
                  </span>
                {/if}
              </div>
            </header>

            {#if showIntro && data.intro}
              <div class="prose prose-sm">
                <p>{data.intro}</p>
              </div>
            {/if}

            {#if showDetails}
              <ListingContent items={data.tasks} />
            {/if}

            {#if showDetails}
              <div>
                <h3 class="text-xs">{t.cv.technologies}</h3>
                <div class="float-left space-x-1">
                  {#each data.technologies ?? [] as text (text)}
                    <span class="cv-badge">
                      {text}
                    </span>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    {#if viewAllLink}
      <div class="mt-12">
        <a
          href={viewAllLink.href}
          class="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {viewAllLink.label}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    {/if}
  </div>
</section>
