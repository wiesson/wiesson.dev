<script lang="ts">
  import { formatDays, formatYear } from "$utils/dateFormat";
  import ListingContent from "$lib/components/listing-content.svelte";
  import type { CollectionEntry } from "astro:content";

  interface Props {
    title: string;
    items: CollectionEntry<"work">[];
    showDetails?: boolean;
    showYearsOnly?: boolean;
    showBadges?: boolean;
    showIntro?: boolean;
  }

  let {
    title,
    items,
    showDetails = false,
    showYearsOnly = false,
    showBadges = true,
    showIntro = false,
  }: Props = $props();

  const getBadgeLabel = (type: string, projectType: string): string => {
    if (type === "main" && projectType === "permanent") return "Festanstellung";
    if (type === "main" && projectType === "project") return "Freiberuflich";
    if (type === "side") return "Nebenprojekt";
    return "";
  };
</script>

<section class="py-16">
  <div class="app-text-column">
    <h2 class="cv-h2 mb-6">{title}</h2>

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
          <div class="shrink-0 w-40 cv-text-meta">{dates}</div>
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
                <p class="cv-text-secondary">{data.intro}</p>
              </div>
            {/if}

            {#if showDetails}
              <ListingContent items={data.tasks} />
            {/if}

            {#if showDetails}
              <div>
                <h3 class="text-xs">Technologien</h3>
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
  </div>
</section>
