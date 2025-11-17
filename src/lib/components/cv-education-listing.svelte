<script lang="ts">
  import { formatYear } from "$utils/dateFormat";
  import ListingContent from "$lib/components/listing-content.svelte";
  import type { CollectionEntry } from "astro:content";

  interface Props {
    title: string;
    items: CollectionEntry<"education">[];
    showDetails?: boolean;
  }

  let { title, items, showDetails = false }: Props = $props();
</script>

<section class="space-y-4">
  <h3 class="cv-h2">{title}</h3>

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
          {#if showDetails}
            <ListingContent items={data.tasks} />
          {/if}
        </div>
      </section>
    {/each}
  </div>
</section>
