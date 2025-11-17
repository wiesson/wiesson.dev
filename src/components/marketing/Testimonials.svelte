<script lang="ts">
	import { Card, CardContent, CardHeader } from '$lib/ui/card';
	import { Quote } from '@lucide/svelte';

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

<section class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
				Das sagen unsere Nutzer
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Erfahren Sie, wie MaklerUpdate anderen bei der Immobiliensuche hilft
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
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
		</div>
	</div>
</section>
