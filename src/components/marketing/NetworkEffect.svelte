<script lang="ts">
	import { Card, CardContent } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import { TrendingUp, Users, Building, ArrowRight, ArrowLeft } from '@lucide/svelte';

	const stats = [
		{ value: '120+', label: 'Makler geprüft' },
		{ value: '500+', label: 'Neue Objekte/Monat' },
		{ value: '1000+', label: 'Aktive Suchende' },
		{ value: '24/7', label: 'Automatisiert' }
	];
</script>

<section class="bg-gradient-to-b from-primary/5 to-background px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<Badge variant="outline" class="mb-4">
				<TrendingUp class="mr-1 h-3 w-3" />
				Der Netzwerk-Effekt
			</Badge>
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
				Gemeinsam stärker: Win-Win für alle
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-muted-foreground">
				MaklerUpdate wächst mit jedem neuen Nutzer – zum Vorteil aller Beteiligten
			</p>
		</div>

		<!-- Visual Network Effect -->
		<div class="mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
			<!-- Seekers Side -->
			<Card class="h-full">
				<CardContent class="p-6 text-center">
					<Users class="mx-auto mb-4 h-12 w-12 text-primary" />
					<h3 class="mb-3 text-xl font-semibold">Mehr Suchende</h3>
					<p class="mb-4 text-muted-foreground">bedeutet mehr qualifizierte Anfragen für Makler</p>
					<div class="flex items-center justify-center text-primary">
						<span class="text-sm font-medium">Bessere Leads</span>
						<ArrowRight class="ml-2 h-4 w-4" />
					</div>
				</CardContent>
			</Card>

			<!-- Center Connection -->
			<div class="flex flex-col items-center justify-center">
				<div class="relative">
					<div class="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
						<div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
							<div class="h-8 w-8 animate-pulse rounded-full bg-primary"></div>
						</div>
					</div>
					<!-- Arrows -->
					<ArrowRight
						class="absolute top-1/2 -right-8 hidden h-6 w-6 -translate-y-1/2 text-primary/50 lg:block"
					/>
					<ArrowLeft
						class="absolute top-1/2 -left-8 hidden h-6 w-6 -translate-y-1/2 text-primary/50 lg:block"
					/>
				</div>
				<p class="mt-4 text-center text-sm font-medium">
					Positiver<br />Kreislauf
				</p>
			</div>

			<!-- Brokers Side -->
			<Card class="h-full border-primary/20 bg-primary/5">
				<CardContent class="p-6 text-center">
					<Building class="mx-auto mb-4 h-12 w-12 text-primary" />
					<h3 class="mb-3 text-xl font-semibold">Mehr Makler</h3>
					<p class="mb-4 text-muted-foreground">bedeutet mehr exklusive Objekte für Suchende</p>
					<div class="flex items-center justify-center text-primary">
						<ArrowLeft class="mr-2 h-4 w-4" />
						<span class="text-sm font-medium">Mehr Auswahl</span>
					</div>
				</CardContent>
			</Card>
		</div>

		<!-- Current Stats -->
		<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
			{#each stats as stat}
				<div class="text-center">
					<div class="mb-1 text-3xl font-bold text-primary">{stat.value}</div>
					<div class="text-sm text-muted-foreground">{stat.label}</div>
				</div>
			{/each}
		</div>

		<!-- CTA for Both -->
		<div class="mt-12 text-center">
			<p class="mb-6 text-lg font-medium">Werden Sie Teil des wachsenden Netzwerks</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="#waitlist-section"
					class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-xs ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					Als Suchender beitreten
				</a>
				<a
					href="/expose-service"
					class="inline-flex h-11 items-center justify-center rounded-md border border-primary bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					Als Makler mitmachen
				</a>
			</div>
		</div>
	</div>
</section>
