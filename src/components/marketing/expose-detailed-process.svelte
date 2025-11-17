<script lang="ts">
	import { Badge } from '$lib/ui/badge';
	import { Upload, Sparkles, FileCheck, Download, Clock } from '@lucide/svelte';

	const steps = [
		{
			number: '1',
			title: 'Upload',
			duration: '30s',
			icon: Upload,
			description: 'Fotos per E-Mail schicken'
		},
		{
			number: '2',
			title: 'KI-Magie',
			duration: '2min',
			icon: Sparkles,
			description: 'Automatische Erstellung'
		},
		{
			number: '3',
			title: 'Fertig',
			duration: '30s',
			icon: Download,
			description: 'PDF herunterladen'
		}
	];
</script>

<section class="py-16">
	<div class="text-left">
		<Badge variant="outline" class="mb-4">
			<FileCheck class="mr-1 h-3 w-3" />
			Prozess
		</Badge>

		<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">So funktioniert's</h2>

		<p class="mb-12 max-w-3xl text-lg text-muted-foreground">
			Drei einfache Schritte trennen Sie von Ihrem perfekten Exposé. Kein kompliziertes Onboarding,
			keine Schulung erforderlich.
		</p>

		<div class="max-w-3xl space-y-8">
			{#each steps as step}
				<div class="flex items-start gap-6">
					<div class="flex-shrink-0">
						<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<svelte:component this={step.icon} class="h-6 w-6 text-primary" />
						</div>
					</div>
					<div class="flex-1">
						<div class="mb-2 flex items-baseline gap-3">
							<h3 class="text-xl font-semibold">{step.title}</h3>
							<span class="text-sm text-muted-foreground">• {step.duration}</span>
						</div>
						<p class="text-base text-muted-foreground">
							{#if step.number === '1'}
								Senden Sie uns Ihre Handyfotos, PDFs oder Grundrisse per E-Mail an
								expose@maklerupdate.de oder nutzen Sie unsere Web-Plattform für den Upload. Keine
								Sortierung oder Beschriftung nötig – unsere KI erkennt sofort alle Räume (Küche,
								Bad, Schlafzimmer...) und Details.
							{:else if step.number === '2'}
								Unsere KI analysiert Ihre Unterlagen, erstellt verkaufsstarke Texte, optimiert die
								Bildqualität und arrangiert alles in einem professionellen Layout. Alles in
								Rekordzeit, keine Wartezeit.
							{:else}
								Ihr fertiges Exposé landet in Ihrem Posteingang oder steht zum Download bereit.
								Professionell, druckfertig und sofort einsatzbereit. Bei Bedarf können Sie jederzeit
								Anpassungen vornehmen.
							{/if}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-12 flex items-center gap-4">
			<div class="flex items-center gap-2 rounded-lg bg-primary/10 px-6 py-3">
				<Clock class="h-5 w-5 text-primary" />
				<span class="text-lg font-semibold text-primary">Gesamt: 3 Minuten</span>
			</div>
			<p class="text-sm text-muted-foreground">Vom Upload bis zum fertigen PDF</p>
		</div>
	</div>
</section>
