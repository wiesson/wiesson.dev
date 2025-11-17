<script lang="ts">
  import { formatYear } from "$utils/dateFormat";
  import ListingContent from "$components/cv/listing-content.svelte";
  import type { CollectionEntry } from "astro:content";

  interface Props {
    title: string;
    items: CollectionEntry<"education">[];
    showDetails?: boolean;
  }

  let { title, items, showDetails = false }: Props = $props();
</script>

<section class="py-16">
  <div class="app-text-column">
    <h2 class="cv-h2 mb-6">{title}</h2>

    <div class="space-y-8">
      {#each items as { data } (data.title)}
        {@const from = formatYear(data.from)}
        {@const to = formatYear(data.to)}

        <section class="page-break-avoid flex gap-4 text-sm">
          <div class="cv-text-meta shrink-0 w-40">
            {from} – {to}
          </div>
          <div>
            <div class="font-weight-500">{data.title}</div>
            <div class="cv-text-meta text-sm mb-2">{data.location}</div>

            {#if data.intro}
              <div class="prose prose-sm">
                <p>{data.intro}</p>
              </div>
            {/if}

            {#if showDetails}
              <ListingContent items={data.tasks} />
            {/if}
          </div>
        </section>
      {/each}
    </div>
  </div>
</section>
