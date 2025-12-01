<script lang="ts">
  const items = [
    { class: "h-6", src: "tourvy.svg", href: "https://www.tourvy.de" },
    { class: "h-6", src: "douglas.svg", href: "https://www.douglas.de" },
    {
      class: "h-6",
      src: "douglas-markting-solutions.png",
      href: "https://www.douglas-marketing-solutions.com/",
    },
    { class: "h-6", src: "frontnow.svg", href: "https://www.frontnow.com" },
    {
      class: "h-8",
      src: "take-memories.svg",
      href: "https://www.takememories.com",
    },
    {
      class: "h-12",
      src: "canvas-club-oman.svg",
      href: "https://www.canvascluboman.com",
    },
    { class: "h-5", src: "caroutlet.svg", href: "https://www.caroutlet.ch" },
    { class: "h-7", src: "energybox.svg", href: "https://www.energybox.com" },
    { class: "h-8", src: "sipgate.svg", href: "https://www.sipgate.de" },
    {
      class: "h-10",
      src: "loyd-digital.svg",
      href: "https://www.loyd.digital",
    },
    {
      class: "h-14",
      src: "monday-rocks.svg",
      href: "https://www.monday.rocks",
    },
    {
      class: "h-12",
      src: "84rooms.svg",
      href: "https://www.84rooms.com",
    },
    {
      class: "h-7",
      src: "juts.svg",
      href: "https://www.juts.ch",
    },
    {
      class: "h-7",
      src: "tigev.svg",
      href: "https://www.tigev.de",
    },
  ];
</script>

<!-- Horizontal scroll on mobile, grid on desktop -->
<div class="logo-scroll-container relative">
  <div class="flex md:grid md:grid-cols-4 gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scroll-smooth snap-x snap-mandatory md:snap-none">
    {#each items as item (item.src)}
      <a
        href={item.href + "?ref=arnewiese.de"}
        target="_blank"
        rel="noopener noreferrer"
        class="group shrink-0 w-28 md:w-auto snap-start bg-muted rounded-lg flex items-center justify-center h-20 px-3 border border-transparent card-hover"
      >
        <img
          src={`/assets/customers/${item.src}`}
          alt={item.src.replace(".svg", "")}
          class="block max-h-8 w-auto object-contain transition duration-300 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </a>
    {/each}
  </div>
</div>

<style>
  .logo-scroll-container > div {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .logo-scroll-container > div::-webkit-scrollbar {
    display: none;
  }
  /* Fade mask only on mobile */
  @media (max-width: 767px) {
    .logo-scroll-container {
      mask-image: linear-gradient(to right, black calc(100% - 2rem), transparent 100%);
      -webkit-mask-image: linear-gradient(to right, black calc(100% - 2rem), transparent 100%);
    }
  }
</style>
