<script lang="ts">
	import {
		Card,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import { Home, Briefcase, Eye, Zap, Bell, Clock, Sparkles, Users } from '@lucide/svelte';

	const seekerBenefits = [
		{
			icon: Eye,
			title: '90% mehr Objekte',
			description: 'Zugang zu versteckten Maklern, die Sie nicht kennen'
		},
		{
			icon: Zap,
			title: 'Wochen Vorsprung',
			description: 'Neue Objekte bevor sie auf ImmoScout landen'
		},
		{
			icon: Bell,
			title: 'Tägliche Updates',
			description: 'Übersichtliche Zusammenfassung aller neuen Objekte'
		}
	];

	const brokerBenefits = [
		{
			icon: Clock,
			title: '2 Stunden pro Exposé sparen',
			description: 'KI erstellt perfekte Exposés aus Fotos & Notizen'
		},
		{
			icon: Sparkles,
			title: 'Qualifizierte Anfragen',
			description: 'Vorselektierte Interessenten mit echtem Kaufinteresse'
		},
		{
			icon: Users,
			title: 'Kostenlose Reichweite',
			description: 'Ihre Objekte erreichen tausende aktive Suchende'
		}
	];
</script>

<section class="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<Badge variant="outline" class="mb-4">Zwei Zielgruppen, eine Plattform</Badge>
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
				MaklerUpdate verbindet moderne Makler mit smarten Suchenden
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-muted-foreground">
				Je mehr Makler mitmachen, desto mehr exklusive Objekte für Suchende.<br />
				Je mehr Suchende, desto mehr qualifizierte Anfragen für Makler.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<!-- For Home Seekers -->
			<div>
				<div class="mb-6 flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
						<Home class="h-5 w-5 text-primary" />
					</div>
					<h3 class="text-2xl font-semibold">Für Immobilien-Suchende</h3>
				</div>

				<div class="space-y-4">
					{#each seekerBenefits as benefit}
						<Card>
							<CardHeader class="pb-3">
								<div class="flex items-start gap-3">
									<div
										class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10"
									>
										<svelte:component this={benefit.icon} class="h-5 w-5 text-primary" />
									</div>
									<div>
										<CardTitle class="text-lg">{benefit.title}</CardTitle>
										<CardDescription class="mt-1">{benefit.description}</CardDescription>
									</div>
								</div>
							</CardHeader>
						</Card>
					{/each}
				</div>

				<div class="mt-6">
					<a
						href="#waitlist-section"
						class="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-xs ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						Jetzt auf die Warteliste
					</a>
				</div>
			</div>

			<!-- For Brokers -->
			<div>
				<div class="mb-6 flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
						<Briefcase class="h-5 w-5 text-primary" />
					</div>
					<h3 class="text-2xl font-semibold">Für moderne Makler</h3>
				</div>

				<div class="space-y-4">
					{#each brokerBenefits as benefit}
						<Card class="border-primary/20 bg-primary/5">
							<CardHeader class="pb-3">
								<div class="flex items-start gap-3">
									<div
										class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20"
									>
										<svelte:component this={benefit.icon} class="h-5 w-5 text-primary" />
									</div>
									<div>
										<CardTitle class="text-lg">{benefit.title}</CardTitle>
										<CardDescription class="mt-1">{benefit.description}</CardDescription>
									</div>
								</div>
							</CardHeader>
						</Card>
					{/each}
				</div>

				<div class="mt-6">
					<a
						href="/expose-service"
						class="inline-flex h-11 w-full items-center justify-center rounded-md border border-primary bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						KI-Exposé Service entdecken
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
