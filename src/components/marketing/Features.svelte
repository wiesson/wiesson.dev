<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/ui/card';
	import { Eye, Zap, ShieldCheck, Map, Star, Bell } from '@lucide/svelte';

	const features = [
		{
			icon: Eye,
			title: 'Versteckte Makler entdecken',
			description: 'Wir kennen über 120 Makler in Düsseldorf, von denen Sie noch nie gehört haben'
		},
		{
			icon: Zap,
			title: 'Wochen vor den Portalen',
			description: 'Makler veröffentlichen zuerst auf eigenen Websites – seien Sie der Erste'
		},
		{
			icon: ShieldCheck,
			title: 'Keine defekten Newsletter',
			description: 'Makler-Newsletter funktionieren selten – wir prüfen direkt die Websites'
		},
		{
			icon: Map,
			title: 'Breite Marktabdeckung',
			description: 'Vom Einzel-Makler bis zur Kette: Wir erweitern ständig unser Netzwerk'
		},
		{
			icon: Star,
			title: 'Exklusive Objekte',
			description:
				'Viele Immobilien werden nur lokal vermarktet und schaffen es nie auf die großen Portale'
		},
		{
			icon: Bell,
			title: 'Blitzschnelle Alerts',
			description: 'Neue Objekte in Minuten, nicht Tagen oder Wochen'
		}
	];
</script>

<section id="how-it-works" class="bg-muted/50 px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
				Ihr unfairer Vorteil bei der Immobiliensuche
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Während andere noch auf ImmoScout warten, haben Sie längst besichtigt
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<Card>
					<CardHeader>
						<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
							<svelte:component this={feature.icon} class="h-6 w-6 text-primary" />
						</div>
						<CardTitle class="text-xl">{feature.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>{feature.description}</CardDescription>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
