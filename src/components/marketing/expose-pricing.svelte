<script lang="ts">
	import { Card, CardContent } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import { Button } from '$lib/ui/button';
	import { Check, Euro, Users, Shield, Clock, Award, Infinity } from '@lucide/svelte';

	const features = [
		'Unbegrenzte Exposés pro Monat',
		'3-Minuten-Liefergarantie',
		'Automatische Bildoptimierung',
		'Professionelle Texterstellung',
		'Mehrsprachige Exposés',
		'Corporate Design Anpassung',
		'E-Mail & Web-Zugang',
		'Unbegrenzte Überarbeitungen',
		'Persönlicher Support'
	];

	const trustPoints = [
		{ icon: Award, value: 'KI', label: 'KI-gestützt' },
		{ icon: Clock, value: '95%', label: 'Zeitersparnis' },
		{ icon: Users, value: 'Pro', label: 'Professional' },
		{ icon: Shield, value: '100%', label: 'DSGVO-konform' }
	];
</script>

<section class="app-text-column pt-20">
	<div class="text-left">
		<Badge variant="outline" class="mb-4">
			<Euro class="mr-1 h-3 w-3" />
			Preise
		</Badge>

		<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
			Ein Preis, alles inklusive
		</h2>

		<p class="mb-12 max-w-3xl text-lg text-muted-foreground">
			Keine versteckten Kosten, keine Überraschungen. Ein transparenter Monatspreis für unbegrenzte
			Nutzung.
		</p>
	</div>
</section>

<section class="app-wide-column pb-8">
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		<!-- Pricing Card -->
		<Card class="border-2 border-primary">
			<CardContent class="p-8">
				<div class="mb-6">
					<h3 class="mb-2 text-2xl font-semibold">Professional</h3>
					<p class="text-muted-foreground">Für Makler und Immobilienprofis</p>
				</div>

				<div class="mb-6 flex items-baseline">
					<span class="text-5xl font-bold">99€</span>
					<span class="ml-2 text-xl text-muted-foreground">/Monat</span>
				</div>

				<div class="mb-8 flex items-center gap-2">
					<Infinity class="h-5 w-5 text-primary" />
					<span class="font-medium">Unbegrenzte Exposés erstellen</span>
				</div>

				<ul class="mb-8 space-y-3">
					{#each features as feature}
						<li class="flex items-start gap-3">
							<Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
							<span class="text-sm">{feature}</span>
						</li>
					{/each}
				</ul>

				<Button class="w-full" size="lg" href="#interesse-formular">Jetzt starten</Button>

				<p class="mt-4 text-center text-xs text-muted-foreground">
					Monatlich kündbar • Persönlicher Onboarding-Call inklusive
				</p>
			</CardContent>
		</Card>

		<!-- Right column -->
		<div class="space-y-6">
			<div>
				<h3 class="mb-6 text-xl font-semibold">Warum uns Makler vertrauen</h3>
			</div>

			<Card class="border-primary/20 bg-primary/5">
				<CardContent class="p-6">
					<h4 class="mb-3 font-semibold">Ihre Zufriedenheit ist uns wichtig</h4>
					<p class="text-sm text-muted-foreground">
						Sollten Sie nicht zufrieden sein, nehmen wir Ihr Feedback ernst und passen unseren
						Service entsprechend an. Wir arbeiten kontinuierlich daran, die beste Lösung für Ihre
						Bedürfnisse zu bieten.
					</p>
				</CardContent>
			</Card>

			<Card>
				<CardContent class="p-6">
					<h4 class="mb-3 font-semibold">Enterprise-Lösungen</h4>
					<p class="mb-4 text-sm text-muted-foreground">
						Mehr als 10 Makler im Team? Wir bieten maßgeschneiderte Lösungen mit API-Zugang,
						Priority-Support und individuellen Workflows.
					</p>
					<Button
						variant="outline"
						size="sm"
						class="w-full"
						href="mailto:enterprise@maklerupdate.de"
					>
						Kontakt aufnehmen
					</Button>
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<!-- Trust Points in Wide Column -->
<section class="app-wide-column pb-20">
	<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
		{#each trustPoints as point}
			<div class="rounded-lg bg-muted/30 p-4 text-center">
				<svelte:component this={point.icon} class="mx-auto mb-2 h-8 w-8 text-primary" />
				<div class="mb-1 text-2xl font-bold">{point.value}</div>
				<div class="text-sm text-muted-foreground">{point.label}</div>
			</div>
		{/each}
	</div>
</section>
