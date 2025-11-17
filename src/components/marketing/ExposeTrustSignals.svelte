<script lang="ts">
	import { Card, CardContent } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import { Shield, Award, Users, FileText, Lock, Zap } from '@lucide/svelte';

	const trustPoints = [
		{
			icon: Users,
			title: '120+ Makler vertrauen uns',
			description: 'Aktiv genutzt von führenden Maklern in Düsseldorf'
		},
		{
			icon: FileText,
			title: '1000+ Exposés erstellt',
			description: 'Bewährte Qualität in über 1000 Immobilien-Exposés'
		},
		{
			icon: Shield,
			title: '100% DSGVO-konform',
			description: 'Ihre Daten sind sicher und bleiben in Deutschland'
		},
		{
			icon: Lock,
			title: 'Vertrauliche Behandlung',
			description: 'Ihre Objekte bleiben exklusiv bei Ihnen'
		},
		{
			icon: Zap,
			title: '3 Min Durchschnitt',
			description: 'Schnellste Exposé-Erstellung am Markt'
		},
		{
			icon: Award,
			title: 'Zufriedenheitsgarantie',
			description: 'Unbegrenzte Überarbeitungen bis Sie zufrieden sind'
		}
	];
</script>

<section class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<Badge variant="outline" class="mb-4">
				<Shield class="mr-1 h-3 w-3" />
				Vertrauen & Sicherheit
			</Badge>
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
				Vertraut von 120+ Maklern in Düsseldorf
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Warum führende Immobilienprofis auf unseren Service setzen
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each trustPoints as point}
				<Card class="h-full transition-shadow hover:shadow-md">
					<CardContent class="p-6">
						<div class="flex items-start gap-4">
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10"
							>
								<svelte:component this={point.icon} class="h-6 w-6 text-primary" />
							</div>
							<div>
								<h3 class="mb-1 font-semibold">{point.title}</h3>
								<p class="text-sm text-muted-foreground">{point.description}</p>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>

		<div class="mt-12 rounded-lg bg-primary/5 p-8 text-center">
			<h3 class="mb-4 text-xl font-semibold">Keine versteckten Kosten</h3>
			<div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
				<div>
					<div class="mb-1 text-3xl font-bold text-primary">99€</div>
					<div class="text-sm text-muted-foreground">pro Monat</div>
				</div>
				<div class="text-2xl text-muted-foreground">×</div>
				<div>
					<div class="mb-1 text-3xl font-bold text-primary">∞</div>
					<div class="text-sm text-muted-foreground">Exposés erstellen</div>
				</div>
				<div class="text-2xl text-muted-foreground">=</div>
				<div>
					<div class="mb-1 text-3xl font-bold text-green-600">Mehr Zeit</div>
					<div class="text-sm text-muted-foreground">für Ihre Kunden</div>
				</div>
			</div>
		</div>
	</div>
</section>
