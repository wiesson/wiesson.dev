<script lang="ts">
	import { Card, CardContent } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import Slides from '$lib/ui/slides.svelte';
	import { UserPlus, Search, Bell, Home, CheckCircle2, Clock } from '@lucide/svelte';
	import { FEATURES } from '$lib/config/features';

	const steps = [
		{
			icon: UserPlus,
			title: 'Kostenlos registrieren',
			description: 'Konto erstellen und Suchkriterien definieren',
			details:
				'Registrieren Sie sich kostenlos und teilen Sie uns im Chat mit, wonach Sie suchen. 7 Tage kostenlos testen.'
		},
		{
			icon: Search,
			title: 'Wir prüfen für Sie',
			description: '120+ lokale Makler-Websites werden täglich überprüft',
			details:
				'Unser Service-Team beobachtet täglich alle relevanten Makler-Websites in Ihrer Region. Neue Objekte werden sofort für Sie entdeckt und kategorisiert.'
		},
		{
			icon: Bell,
			title: 'Täglich informiert',
			description: 'Neue Objekte per E-Mail im täglichen Update',
			details:
				'Jeden Tag erhalten Sie eine übersichtliche Zusammenfassung aller neuen Objekte, Preisänderungen und weiteren Updates mit allen wichtigen Details und direkten Links zu den Angeboten.'
		},
		{
			icon: Home,
			title: 'Erster am Ziel',
			description: 'Besichtigen Sie, bevor andere davon erfahren',
			details:
				'Während andere noch auf ImmoScout warten, haben Sie bereits Kontakt zum Makler aufgenommen und die Besichtigung vereinbart.'
		}
	];
</script>

<section id="how-it-works" class="app-text-column pt-20">
	<div class="text-left">
		<Badge variant="outline" class="mb-4">
			<CheckCircle2 class="mr-1 h-3 w-3" />
			So funktioniert's
		</Badge>

		<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
			In 4 einfachen Schritten zum Traumobjekt
		</h2>

		<p class="mb-12 max-w-3xl text-lg text-muted-foreground">
			Von der Anmeldung bis zur Besichtigung – so verpassen Sie nie wieder eine Immobilie. Unser
			Team arbeitet rund um die Uhr für Sie.
		</p>
	</div>
</section>

<section class="app-wide-column pb-20">
	<Slides cols="4">
		{#each steps as step, index}
			<Card class="h-full py-0! transition-shadow hover:shadow-lg">
				<CardContent class="p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
						<svelte:component this={step.icon} class="h-6 w-6 text-primary" />
					</div>
					<div class="mb-2 text-sm font-medium text-muted-foreground">
						Schritt {index + 1}
					</div>
					<h3 class="mb-2 text-lg font-semibold">{step.title}</h3>
					<p class="mb-3 text-sm text-muted-foreground">{step.description}</p>
					<p class="text-xs text-muted-foreground">{step.details}</p>
				</CardContent>
			</Card>
		{/each}
	</Slides>

	<div class="mt-12 text-center">
		<p class="mb-4 text-muted-foreground">
			Keine Installation notwendig • Keine versteckten Kosten • Jederzeit kündbar
		</p>
		{#if FEATURES.signupEnabled}
			<a
				href="/signup"
				class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				Suche jetzt starten
			</a>
		{:else}
			<Badge variant="secondary" class="text-base px-4 py-2">
				<Clock class="mr-2 h-4 w-4" />
				Bald verfügbar
			</Badge>
		{/if}
	</div>
</section>
