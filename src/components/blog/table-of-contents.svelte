<script lang="ts">
  import { onMount } from "svelte";

  interface Heading {
    id: string;
    text: string;
    level: number;
  }

  interface Props {
    headings: Heading[];
    class?: string;
  }

  let { headings, class: className = "" }: Props = $props();

  let activeId = $state<string | null>(null);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        }
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  });

  function handleClick(e: MouseEvent, id: string) {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL hash without scrolling
      history.pushState(null, "", `#${id}`);
    }
  }
</script>

<nav class="blog-toc {className}" aria-label="Inhaltsverzeichnis">
  <p class="blog-toc-title">Inhalt</p>
  <ul class="blog-toc-list">
    {#each headings as heading (heading.id)}
      <li style="padding-left: {(heading.level - 2) * 1}rem">
        <a
          href="#{heading.id}"
          class:active={activeId === heading.id}
          onclick={(e) => handleClick(e, heading.id)}
        >
          {heading.text}
        </a>
      </li>
    {/each}
  </ul>
</nav>
