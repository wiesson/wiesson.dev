<script lang="ts">
	import { Card, CardContent } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/ui/tabs';
	import {
		Search,
		Bell,
		Mail,
		Home,
		Camera,
		Sparkles,
		Share2,
		Briefcase,
		ArrowRight,
		CheckCircle2
	} from '@lucide/svelte';

	let activeTab = $state('seekers');

	const seekerSteps = [
		{
			icon: Search,
			title: '1. Warteliste beitreten',
			description: 'Einfach Email hinterlassen und Region wählen'
		},
		{
			icon: Bell,
			title: '2. Tägliche Prüfung',
			description: 'Unser Team prüft täglich 120+ lokale Makler-Websites'
		},
		{
			icon: Mail,
			title: '3. Täglich informiert werden',
			description: 'Tägliche Zusammenfassung aller neuen Objekte'
		},
		{
			icon: Home,
			title: '4. Schneller besichtigen',
			description: 'Kontaktieren Sie Makler bevor die Masse kommt'
		}
	];

	const brokerSteps = [
		{
			icon: Camera,
			title: '1. Material senden',
			description: 'Fotos, PDFs oder Sprachnotizen per E-Mail'
		},
		{
			icon: Sparkles,
			title: '2. KI-Verarbeitung',
			description: 'Automatische Erstellung professioneller Exposés'
		},
		{
			icon: Share2,
			title: '3. Sofort veröffentlichen',
			description: 'Fertiges Exposé in Minuten statt Stunden'
		},
		{
			icon: CheckCircle2,
			title: '4. Mehr Anfragen erhalten',
			description: 'Qualifizierte Interessenten von unserer Plattform'
		}
	];
</script>

<section id="how-it-works" class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<Badge variant="secondary" class="mb-4">So funktioniert's</Badge>
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
				Ihr Weg zum Erfolg mit MaklerUpdate
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Wählen Sie Ihre Rolle und erfahren Sie, wie MaklerUpdate für Sie arbeitet
			</p>
		</div>

		<Tabs bind:value={activeTab} class="w-full">
			<TabsList class="mx-auto mb-12 grid w-full max-w-md grid-cols-2">
				<TabsTrigger value="seekers" class="gap-2">
					<Home class="h-4 w-4" />
					Für Suchende
				</TabsTrigger>
				<TabsTrigger value="brokers" class="gap-2">
					<Briefcase class="h-4 w-4" />
					Für Makler
				</TabsTrigger>
			</TabsList>

			<TabsContent value="seekers" class="mt-0">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{#each seekerSteps as step, index}
						<div class="relative">
							{#if index < seekerSteps.length - 1}
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
									<p class="text-sm text-muted-foreground">
										{step.description}
									</p>
								</CardContent>
							</Card>
						</div>
					{/each}
				</div>

				<div class="mt-8 text-center">
					<a
						href="#waitlist-section"
						class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-xs ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						Jetzt starten
					</a>
				</div>
			</TabsContent>

			<TabsContent value="brokers" class="mt-0">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{#each brokerSteps as step, index}
						<div class="relative">
							{#if index < brokerSteps.length - 1}
								<div
									class="absolute top-12 left-1/2 hidden h-0.5 w-full bg-gradient-to-r from-primary/20 to-primary/20 lg:block"
									style="transform: translateX(50%);"
								>
									<ArrowRight
										class="absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 text-primary/40"
									/>
								</div>
							{/if}

							<Card class="h-full border-primary/20 bg-primary/5 transition-shadow hover:shadow-lg">
								<CardContent class="p-6">
									<div
										class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20"
									>
										<svelte:component this={step.icon} class="h-6 w-6 text-primary" />
									</div>
									<h3 class="mb-2 text-lg font-semibold">{step.title}</h3>
									<p class="text-sm text-muted-foreground">
										{step.description}
									</p>
								</CardContent>
							</Card>
						</div>
					{/each}
				</div>

				<div class="mt-8 text-center">
					<a
						href="/expose-service"
						class="inline-flex h-11 items-center justify-center rounded-md border border-primary bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						KI-Exposé Service testen
					</a>
				</div>
			</TabsContent>
		</Tabs>
	</div>
</section>
