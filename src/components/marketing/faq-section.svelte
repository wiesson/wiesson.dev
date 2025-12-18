<script lang="ts">
  import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "$lib/components/ui/accordion";
  import type { FAQ } from "$data/services";

  type Props = {
    faqs: FAQ[];
    title?: string;
    description?: string;
  };

  let { faqs, title = "Häufige Fragen", description }: Props = $props();
</script>

<section class="app-grid py-20" style="background-color: var(--muted);">
  <div class="app-text-column mb-12 text-center">
    <h2 class="heading mb-2">{title}</h2>
    {#if description}
      <p class="text-muted-foreground">{description}</p>
    {/if}
  </div>

  <div class="app-text-column">
    <Accordion type="single" collapsible class="w-full">
      {#each faqs as faq, index}
        <AccordionItem value={`item-${index}`}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>
            <p class="text-muted-foreground">{faq.a}</p>
          </AccordionContent>
        </AccordionItem>
      {/each}
    </Accordion>
  </div>
</section>
