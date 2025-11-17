<script lang="ts">
  import { services } from "$data/services";
  import ServiceCard from "./service-card.svelte";
  import { Button } from "$lib/ui/button";
</script>

<section class="app-grid py-20 bg-muted">
  <div class="app-text-column mb-8 text-center">
    <h2 class="cv-h1 mb-2">Services</h2>
    <p class="text-muted-foreground">
      Von AI-Entwicklung bis Technical Leadership
    </p>
  </div>

  <div class="app-full-column">
    <div class="services-carousel-wrapper">
    <div class="services-carousel">
      {#each services as service}
        <div class="service-card-snap">
          <ServiceCard
            title={service.title}
            description={service.subtitle}
            price={service.price}
            features={service.features.slice(0, 4)}
            href={service.href}
            icon={service.icon}
            badge={service.badge}
          />
        </div>
      {/each}
    </div>
    </div>
  </div>

  <div class="app-text-column mt-8 text-center">
    <Button href="/services">Alle Services ansehen</Button>
  </div>
</section>

<style>
  .services-carousel-wrapper {
    padding: 0 max(1rem, calc((100vw - 96rem) / 2));
  }

  .services-carousel {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(min(300px, 100%), 350px);
    gap: 1.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 1rem;
    -webkit-overflow-scrolling: touch;
  }

  .service-card-snap {
    scroll-snap-align: start;
  }

  /* Hide scrollbar but keep functionality */
  .services-carousel::-webkit-scrollbar {
    display: none;
  }

  .services-carousel {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Add subtle scroll indicators on larger screens */
  @media (min-width: 768px) {
    .services-carousel-wrapper {
      position: relative;
    }

    .services-carousel-wrapper::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 4rem;
      background: linear-gradient(to left, var(--muted), transparent);
      pointer-events: none;
    }
  }
</style>
