<script lang="ts">
	import { Button } from '$lib/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import { CheckCircle2, Building2, Zap, Shield, Mail } from '@lucide/svelte';

	const benefits = [
		{
			icon: Zap,
			title: 'Direkter API-Zugang',
			description: 'Automatische Übertragung Ihrer Immobilien an interessierte Käufer'
		},
		{
			icon: Building2,
			title: 'Größere Reichweite',
			description: 'Erreichen Sie Kaufinteressenten, die aktiv nach lokalen Maklern suchen'
		},
		{
			icon: Shield,
			title: 'Datenschutz garantiert',
			description: 'Ihre Daten bleiben geschützt - keine Weitergabe an Dritte'
		}
	];

	const cooperationOptions = [
		{
			title: 'Basis-Partnerschaft',
			features: [
				'Aufnahme in unseren Makler-Index',
				'Regelmäßige Prüfung Ihrer Website',
				'Benachrichtigung bei neuen Objekten'
			],
			cta: 'Kostenlos'
		},
		{
			title: 'Premium-Partnerschaft',
			features: [
				'Alle Basis-Features',
				'Priorisierte Darstellung',
				'Detaillierte Analyse-Reports',
				'Direkter technischer Support'
			],
			cta: 'Individuelles Angebot',
			highlighted: true
		}
	];
</script>

<section id="broker-cooperation" class="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<Badge variant="outline" class="mb-4">Für Immobilienmakler</Badge>
			<h2 class="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
				Partnerschaft mit MaklerUpdate
			</h2>
			<p class="mx-auto max-w-3xl text-xl text-muted-foreground">
				Profitieren Sie von unserer Technologie und erreichen Sie mehr qualifizierte
				Kaufinteressenten. Wir bringen Ihre Immobilien zu den richtigen Menschen - schnell und
				effizient.
			</p>
		</div>

		<!-- Benefits -->
		<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each benefits as benefit}
				<div class="flex items-start space-x-3">
					<svelte:component this={benefit.icon} class="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
					<div>
						<h3 class="mb-1 font-semibold text-foreground">{benefit.title}</h3>
						<p class="text-sm text-muted-foreground">{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Cooperation Options -->
		<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each cooperationOptions as option}
				<Card class={option.highlighted ? 'border-primary shadow-lg' : ''}>
					{#if option.highlighted}
						<div class="bg-primary py-2 text-center text-sm font-medium text-primary-foreground">
							Empfohlen
						</div>
					{/if}
					<CardHeader>
						<CardTitle>{option.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<ul class="mb-6 space-y-3">
							{#each option.features as feature}
								<li class="flex items-start">
									<CheckCircle2 class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-primary" />
									<span class="text-sm">{feature}</span>
								</li>
							{/each}
						</ul>
						<p class="mb-4 text-center text-lg font-semibold">{option.cta}</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- CTA Section -->
		<div class="rounded-lg border bg-background p-8 text-center">
			<h3 class="mb-4 text-2xl font-bold">Lassen Sie uns zusammenarbeiten</h3>
			<p class="mx-auto mb-6 max-w-2xl text-muted-foreground">
				Kontaktieren Sie uns für eine individuelle Beratung. Wir zeigen Ihnen, wie MaklerUpdate Ihr
				Geschäft unterstützen kann.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button size="lg" class="gap-2">
					<Mail class="h-4 w-4" />
					<a href="mailto:partner@maklerupdate.de">partner@maklerupdate.de</a>
				</Button>
				<p class="text-sm text-muted-foreground">
					oder rufen Sie uns an: <strong>+49 (0) 211 123 456</strong>
				</p>
			</div>
		</div>
	</div>
</section>
