<script lang="ts">
	import { Card, CardContent } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import { UserPlus, Search, Bell, Home, ArrowRight } from '@lucide/svelte';

	const steps = [
		{
			icon: UserPlus,
			title: '1. Warteliste beitreten',
			description: 'Email hinterlassen und tägliche Updates erhalten'
		},
		{
			icon: Search,
			title: '2. Wir prüfen für Sie',
			description: '120+ lokale Makler-Websites werden täglich überprüft'
		},
		{
			icon: Bell,
			title: '3. Täglich informiert',
			description: 'Neue Objekte per E-Mail im täglichen Update'
		},
		{
			icon: Home,
			title: '4. Erster am Ziel',
			description: 'Besichtigen Sie, bevor andere davon erfahren'
		}
	];
</script>

<section id="how-it-works" class="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<Badge variant="secondary" class="mb-4">So funktioniert's</Badge>
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
				In 4 einfachen Schritten zum Traumobjekt
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Von der Anmeldung bis zur Besichtigung – so verpassen Sie nie wieder eine Immobilie
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each steps as step, index}
				<div class="relative">
					{#if index < steps.length - 1}
						<div
							class="absolute top-12 left-1/2 hidden h-0.5 w-full bg-gradient-to-r from-primary/20 to-primary/20 lg:block"
							style="transform: translateX(50%);"
						>
							<ArrowRight
								class="absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 text-primary/40"
							/>
						</div>
					{/if}

					<Card class="h-full transition-shadow hover:shadow-lg">
						<CardContent class="p-6">
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
							>
								<svelte:component this={step.icon} class="h-6 w-6 text-primary" />
							</div>
							<h3 class="mb-2 text-lg font-semibold">{step.title}</h3>
							<p class="text-sm text-muted-foreground">{step.description}</p>
						</CardContent>
					</Card>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<p class="mb-4 text-muted-foreground">
				Keine Installation notwendig • Keine versteckten Kosten • Jederzeit kündbar
			</p>
			<a
				href="#waitlist-section"
				class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-xs ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				Jetzt starten
			</a>
		</div>
	</div>
</section>
