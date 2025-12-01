<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    class?: string;
  }

  let { children, class: className = "" }: Props = $props();
</script>

<div class="blog-carousel-wrapper {className}">
  <div class="blog-carousel">
    {@render children()}
  </div>
</div>

<style>
  .blog-carousel-wrapper {
    position: relative;
    /* Fade gradient on right edge */
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

  .blog-carousel {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 1rem;
    padding: 0.5rem 3rem 0.5rem 0;
    -webkit-overflow-scrolling: touch;

    /* Hide scrollbar but keep functionality */
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .blog-carousel::-webkit-scrollbar {
    display: none;
  }

  .blog-carousel > :global(*) {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 280px;
  }

  @media (min-width: 640px) {
    .blog-carousel > :global(*) {
      width: 320px;
    }
  }

  @media (min-width: 768px) {
    .blog-carousel > :global(*) {
      width: 360px;
    }
  }
</style>
