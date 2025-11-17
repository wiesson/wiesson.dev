<script lang="ts">
	import { Phone, FileText, Rocket, Code, CheckCircle } from '@lucide/svelte';

	type Props = {
		steps: string[];
		title?: string;
		description?: string;
	};

	let { steps, title = 'So läuft die Zusammenarbeit', description }: Props = $props();

	const icons = [Phone, FileText, Rocket, Code, CheckCircle];
</script>

<section class="app-grid py-20" style="background-color: var(--background);">
	<div class="app-text-column mb-12 text-center">
		<h2 class="heading mb-2">{title}</h2>
		{#if description}
			<p class="text-muted-foreground">{description}</p>
		{/if}
	</div>

	<div class="app-wide-column">
		<div class="relative">
			<!-- Timeline line (hidden on mobile) -->
			<div
				class="absolute left-8 top-12 bottom-12 w-0.5 hidden md:block"
				style="background-color: var(--border);"
			></div>

			<!-- Process steps -->
			<div class="space-y-8">
				{#each steps as step, index}
					<div class="flex gap-6 relative">
						<!-- Step number/icon -->
						<div
							class="flex size-16 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold"
							style="background-color: var(--primary); color: var(--primary-foreground);"
						>
							{#if icons[index]}
								<svelte:component this={icons[index]} class="size-6" />
							{:else}
								{index + 1}
							{/if}
						</div>

						<!-- Step content -->
						<div class="flex-1 pt-3">
							<div
								class="rounded-lg p-4"
								style="background-color: var(--card); border: 1px solid var(--border);"
							>
								<p class="font-medium">{step}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
