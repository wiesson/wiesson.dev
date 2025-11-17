<script lang="ts">
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/ui/card";
  import { Badge } from "$lib/ui/badge";
  import { TrendingUp } from "@lucide/svelte";
  import type { Example } from "$data/services";

  type Props = {
    examples: Example[];
    title?: string;
    description?: string;
  };

  let { examples, title = "Beispiel-Projekte", description }: Props = $props();
</script>

<section class="app-grid py-20" style="background-color: var(--muted);">
  <div class="app-text-column mb-12 text-center">
    <h2 class="cv-h1 mb-2">{title}</h2>
    {#if description}
      <p class="text-muted-foreground">{description}</p>
    {/if}
  </div>

  <div class="app-wide-column">
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each examples as example}
        <Card class="flex flex-col">
          <CardHeader>
            <CardTitle class="text-lg">{example.title}</CardTitle>
            <CardDescription class="mt-2">{example.description}</CardDescription
            >
          </CardHeader>
          <CardContent class="flex-1 flex flex-col justify-between">
            <div class="mb-4">
              <p
                class="mb-2 text-xs font-semibold uppercase text-muted-foreground"
              >
                Tech Stack
              </p>
              <div class="flex flex-wrap gap-2">
                {#each example.tech as tech}
                  <Badge variant="secondary" class="text-xs">{tech}</Badge>
                {/each}
              </div>
            </div>
            {#if example.results}
              <div class="rounded-lg bg-primary/5 p-3 border border-primary/20">
                <div class="flex items-start gap-2">
                  <TrendingUp
                    class="size-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <p class="text-sm font-medium text-primary">
                    {example.results}
                  </p>
                </div>
              </div>
            {/if}
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
