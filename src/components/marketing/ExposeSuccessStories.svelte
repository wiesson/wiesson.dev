<script lang="ts">
	import { Card, CardContent, CardHeader } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import { Quote, Star, Clock, TrendingUp } from '@lucide/svelte';

	const stories = [
		{
			name: 'Thomas Müller',
			company: 'Müller Immobilien GmbH',
			location: 'Düsseldorf',
			quote:
				'Früher habe ich 2-3 Stunden pro Exposé gebraucht. Jetzt schicke ich die Fotos per E-Mail und habe nach 15 Minuten ein perfektes Ergebnis.',
			metric: '2h gespart pro Exposé',
			icon: Clock
		},
		{
			name: 'Sarah Schmidt',
			company: 'Schmidt & Partner',
			location: 'Oberkassel',
			quote:
				'Die KI versteht meinen Stil und schreibt Texte, die sich anhören, als hätte ich sie selbst verfasst. Meine Kunden merken keinen Unterschied.',
			metric: '100% Kundenzufriedenheit',
			icon: Star
		},
		{
			name: 'Michael Weber',
			company: 'Weber Real Estate',
			location: 'Kaiserswerth',
			quote:
				'Ich kann jetzt doppelt so viele Objekte betreuen. Die gesparte Zeit investiere ich in die persönliche Betreuung meiner Kunden.',
			metric: '2x mehr Objekte',
			icon: TrendingUp
		}
	];
</script>

<section class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<Badge variant="secondary" class="mb-4">Erfolgsgeschichten</Badge>
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
				Makler sparen 2 Stunden pro Exposé
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Erfahren Sie, wie Düsseldorfer Makler ihre Produktivität verdoppeln
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each stories as story}
				<Card class="h-full transition-shadow hover:shadow-lg">
					<CardHeader>
						<div class="mb-4 flex items-start justify-between">
							<Quote class="h-8 w-8 rotate-180 text-primary/20" />
							<Badge variant="outline" class="gap-1">
								<svelte:component this={story.icon} class="h-3 w-3" />
								{story.metric}
							</Badge>
						</div>
					</CardHeader>
					<CardContent>
						<p class="mb-6 text-muted-foreground italic">
							"{story.quote}"
						</p>
						<div class="border-t pt-4">
							<div class="font-semibold">{story.name}</div>
							<div class="text-sm text-muted-foreground">{story.company}</div>
							<div class="text-sm text-muted-foreground">{story.location}</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
