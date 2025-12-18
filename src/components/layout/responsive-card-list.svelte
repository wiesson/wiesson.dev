<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    mobileWidth?: string;
    class?: string;
  }

  let { children, mobileWidth = "280px", class: className = "" }: Props = $props();
</script>

<div class="responsive-list-wrapper {className}" style="--mobile-width: {mobileWidth}">
  <div class="responsive-list">
    {@render children()}
  </div>
</div>

<style>
  .responsive-list-wrapper {
    position: relative;
  }

  .responsive-list {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 1rem;
    padding: 0.5rem 3rem 0.5rem 0;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .responsive-list::-webkit-scrollbar {
    display: none;
  }

  .responsive-list > :global(*) {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: var(--mobile-width);
  }

  /* Fade gradient on right edge - mobile only */
  @media (max-width: 767px) {
    .responsive-list-wrapper {
      mask-image: linear-gradient(
        to right,
        black calc(100% - 3rem),
        transparent 100%
      );
      -webkit-mask-image: linear-gradient(
        to right,
        black calc(100% - 3rem),
        transparent 100%
      );
    }
  }

  /* Desktop: switch to stacked layout */
  @media (min-width: 768px) {
    .responsive-list {
      display: flex;
      flex-direction: column;
      overflow-x: visible;
      scroll-snap-type: none;
      padding: 0;
    }

    .responsive-list > :global(*) {
      flex-shrink: 1;
      width: 100%;
      scroll-snap-align: unset;
    }
  }
</style>
