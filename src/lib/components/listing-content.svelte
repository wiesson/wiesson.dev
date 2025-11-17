<script lang="ts">
  let { items = [] }: { items: string[] } = $props();
</script>

{#if items.length === 1}
  <div class="prose prose-sm">
    <p>{items[0]}</p>
  </div>
{:else}
  <div class="prose prose-sm">
    <ul>
      {#each items as item, i (i)}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
{/if}
