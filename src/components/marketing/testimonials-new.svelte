<script lang="ts">
	import { Card, CardContent, CardHeader } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import Slides from '$lib/ui/slides.svelte';
	import { Quote, MessageSquare } from '@lucide/svelte';

	const testimonials = [
		{
			name: 'Thomas',
			role: 'Erstkäufer',
			content:
				'Die Wohnung war bei einem kleinen Makler, den ich nie gefunden hätte. Noch nicht auf ImmoScout, und ich war der Erste bei der Besichtigung!'
		},
		{
			name: 'Sandra',
			role: 'Mieterin',
			content:
				'3 Makler-Newsletter angemeldet, keiner kam je an. Mit MaklerUpdate verpasse ich keine einzige neue Wohnung mehr.'
		},
		{
			name: 'Marcus',
			role: 'Investor',
			content:
				'Ich sehe Objekte 1-2 Wochen vor der Masse. Dieser Zeitvorsprung ist bei guten Deals Gold wert.'
		}
	];
</script>

<section class="app-text-column pt-20">
	<div class="text-left">
		<Badge variant="outline" class="mb-4">
			<MessageSquare class="mr-1 h-3 w-3" />
			Testimonials
		</Badge>

		<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">Das sagen unsere Nutzer</h2>

		<p class="mb-12 max-w-3xl text-lg text-muted-foreground">
			Erfahren Sie, wie MaklerUpdate anderen bei der Immobiliensuche hilft. Echte Erfahrungen von
			Menschen, die bereits ihre Traumimmobilie gefunden haben.
		</p>
	</div>
</section>

<section class="app-wide-column pb-20">
	<Slides cols="3">
		{#each testimonials as testimonial}
			<Card>
				<CardHeader>
					<Quote class="mb-4 h-8 w-8 text-primary/20" />
				</CardHeader>
				<CardContent class="space-y-4">
					<p class="text-muted-foreground italic">"{testimonial.content}"</p>
					<div>
						<p class="font-semibold">{testimonial.name}</p>
						<p class="text-sm text-muted-foreground">{testimonial.role}</p>
					</div>
				</CardContent>
			</Card>
		{/each}
	</Slides>
</section>
