<script lang="ts">
	import { Button } from '$lib/ui/button';
	import { Card, CardContent } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import {
		Camera,
		FileText,
		Mic,
		ArrowRight,
		CheckCircle2,
		Mail
	} from '@lucide/svelte';

	const inputMethods = [
		{ icon: Camera, label: 'Fotos', description: 'Handyfotos reichen aus' },
		{ icon: FileText, label: 'PDFs', description: 'Grundrisse, Dokumente' },
		{ icon: Mic, label: 'Sprachnotizen', description: 'Einfach diktieren' }
	];

	const features = [
		'Professionelle Texte in Ihrem Stil',
		'Automatische Bildoptimierung',
		'SEO-optimierte Beschreibungen',
		'Mehrsprachige Exposés möglich',
		'Blitzschnelle Lieferung in 3 Minuten',
		'Unbegrenzte Überarbeitungen'
	];

	// Form will be handled by separate component
</script>

<div class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<!-- How it works -->
		<div class="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
			<div>
				<h3 class="mb-6 text-2xl font-semibold">So einfach geht's:</h3>

				<!-- Input Methods -->
				<div class="mb-8 space-y-4">
					{#each inputMethods as method, i}
						<div class="flex items-center space-x-4">
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10"
							>
								<svelte:component this={method.icon} class="h-6 w-6 text-primary" />
							</div>
							<div class="flex-1">
								<h4 class="font-medium">{method.label}</h4>
								<p class="text-sm text-muted-foreground">
									{method.description}
								</p>
							</div>
							{#if i < inputMethods.length - 1}
								<ArrowRight class="h-4 w-4 text-muted-foreground" />
							{/if}
						</div>
					{/each}
				</div>

				<Card class="border-primary/20 bg-primary/5">
					<CardContent class="p-6">
						<div class="mb-4 flex items-center justify-between">
							<h4 class="text-xl font-semibold">Ergebnis in 3 Minuten</h4>
							<Badge variant="secondary">KI-gestützt</Badge>
						</div>
						<p class="text-muted-foreground">
							Professionelles Exposé mit optimierten Bildern, verkaufsstarken Texten und allen
							wichtigen Informationen – fertig zum Veröffentlichen.
						</p>
					</CardContent>
				</Card>
			</div>

			<div>
				<h3 class="mb-6 text-2xl font-semibold">Das bekommen Sie:</h3>
				<ul class="mb-8 space-y-3">
					{#each features as feature}
						<li class="flex items-start">
							<CheckCircle2 class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-primary" />
							<span>{feature}</span>
						</li>
					{/each}
				</ul>

				<!-- Form Section -->
				<div class="w-full">
					<Card class="border-primary shadow-lg">
						<CardContent class="p-6">
							<slot name="form">
								<!-- Form will be inserted here -->
							</slot>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>

		<!-- Contact Alternative -->
		<div class="text-center">
			<p class="mb-4 text-muted-foreground">Haben Sie Fragen oder möchten Sie eine Demo sehen?</p>
			<div class="flex flex-col items-center gap-4">
				<Button variant="outline" size="sm" class="gap-2">
					<Mail class="h-4 w-4" />
					<a href="mailto:expose@maklerupdate.de">expose@maklerupdate.de</a>
				</Button>
			</div>
		</div>
	</div>
</div>
