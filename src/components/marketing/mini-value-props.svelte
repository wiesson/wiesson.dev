<script lang="ts">
	import { Card, CardContent } from '$lib/ui/card';
	import { Building, Zap, Mail } from '@lucide/svelte';

	const benefits = [
		{
			icon: Building,
			title: '120+ Makler geprüft',
			description: 'Täglich geprüft',
			color: 'text-blue-600',
			bgColor: 'bg-blue-500/10'
		},
		{
			icon: Zap,
			title: 'Täglich benachrichtigt',
			description: 'Im täglichen Update',
			color: 'text-amber-600',
			bgColor: 'bg-amber-500/10'
		},
		{
			icon: Mail,
			title: 'Tägliche E-Mail Updates',
			description: 'Direkt im Postfach',
			color: 'text-green-600',
			bgColor: 'bg-green-500/10'
		}
	];
</script>

<section class="app-wide-column py-12">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
		{#each benefits as benefit}
			<Card class="border-muted/50 py-0! shadow-sm transition-shadow hover:shadow-md">
				<CardContent class="p-6">
					<div class="flex items-center gap-4">
						<div
							class={`h-12 w-12 rounded-lg ${benefit.bgColor} flex flex-shrink-0 items-center justify-center`}
						>
							<svelte:component this={benefit.icon} class={`h-6 w-6 ${benefit.color}`} />
						</div>
						<div>
							<h3 class="text-base font-semibold">{benefit.title}</h3>
							<p class="text-sm text-muted-foreground">{benefit.description}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>

	<!-- Additional trust line -->
	<div class="mt-8 text-center">
		<p class="text-sm text-muted-foreground">
			<span class="font-semibold text-foreground">1000+ aktive Objekte</span> •
			<span class="font-semibold text-foreground">Tägliche E-Mail Updates</span>
			•
			<span class="font-semibold text-foreground">Täglich neue Objekte</span> •
			<span class="font-semibold text-foreground">Zeitersparnis</span>
		</p>
	</div>
</section>
