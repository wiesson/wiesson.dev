<script lang="ts">
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { CheckCircle2, Clock, Euro } from "@lucide/svelte";
  import type { BundledService } from "$data/services";

  type Props = {
    bundles: BundledService[];
    title?: string;
    description?: string;
  };

  let { bundles, title = "Pakete & Pricing", description }: Props = $props();
</script>

<section class="app-grid py-20" style="background-color: var(--background);">
  <div class="app-text-column mb-12 text-center">
    <h2 class="heading mb-2">{title}</h2>
    {#if description}
      <p class="text-muted-foreground">{description}</p>
    {/if}
  </div>

  <div class="app-wide-column">
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each bundles as bundle}
        <Card class="flex flex-col">
          <CardHeader>
            <div class="mb-3 flex items-center justify-between">
              <Badge variant="outline" class="flex items-center gap-1">
                <Euro class="size-3" />
                <span>{bundle.price}</span>
              </Badge>
              <Badge variant="secondary" class="flex items-center gap-1">
                <Clock class="size-3" />
                <span>{bundle.duration}</span>
              </Badge>
            </div>
            <CardTitle class="text-xl">{bundle.name}</CardTitle>
          </CardHeader>
          <CardContent class="flex-1">
            <ul class="space-y-2">
              {#each bundle.features as feature}
                <li class="flex items-start gap-2 text-sm">
                  <CheckCircle2 class="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
