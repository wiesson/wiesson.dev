<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/ui/card';
	import SectionHeader from '$lib/ui/section-header.svelte';
	import Slides from '$lib/ui/slides.svelte';
	import { Eye, Zap, ShieldCheck, Map, Star, Bell, Trophy } from '@lucide/svelte';

	const features = [
		{
			icon: Eye,
			title: 'Versteckte Makler entdecken',
			description:
				'Wir kennen über 120 Makler im Raum Düsseldorf, von denen Sie noch nie gehört haben'
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

<section class="app-text-column pt-20">
	<SectionHeader
		badgeIcon={Trophy}
		badgeLabel="Vorteile"
		title="Ihr unfairer Vorteil bei der Immobiliensuche"
		description="Während andere noch auf ImmoScout warten, haben Sie längst besichtigt. Entdecken Sie, warum MaklerUpdate der schnellste Weg zu Ihrer Traumimmobilie ist."
	/>
</section>

<section class="app-wide-column pb-20">
	<Slides cols="default">
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
	</Slides>
</section>
