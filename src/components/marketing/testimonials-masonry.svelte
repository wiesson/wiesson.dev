<script lang="ts">
	import { Card, CardContent } from '$lib/ui/card';
	import { Quote } from '@lucide/svelte';
	import { testimonials } from '$lib/data/testimonials-data';

	let containerRef = $state<HTMLElement>();
	let columns = $state(3);
	let containerHeight = $state(0);

	const testimonialElements = $state<HTMLElement[]>([]);
	const testimonialPositions = $state<{ x: number; y: number }[]>([]);

	function calculateColumns() {
		if (typeof window !== 'undefined') {
			if (window.innerWidth < 768) columns = 1;
			else if (window.innerWidth < 1024) columns = 2;
			else if (window.innerWidth < 1536) columns = 3;
			else columns = 4;
		}
	}

	function positionTestimonials() {
		if (!containerRef || testimonialElements.length !== testimonials.length) return;

		const columnHeights = new Array(columns).fill(0);
		const containerWidth = containerRef.offsetWidth;
		const gap = 16;
		const columnWidth = (containerWidth - gap * (columns - 1)) / columns;

		testimonials.forEach((_: unknown, index: number) => {
			const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
			const x = shortestColumn * (columnWidth + gap);
			const y = columnHeights[shortestColumn];

			testimonialPositions[index] = { x, y };

			if (testimonialElements[index]) {
				columnHeights[shortestColumn] += testimonialElements[index].offsetHeight + gap;
			}
		});

		containerHeight = Math.max(...columnHeights);
	}

	$effect(() => {
		calculateColumns();

		const handleResize = () => {
			calculateColumns();
			requestAnimationFrame(positionTestimonials);
		};

		window.addEventListener('resize', handleResize);

		// Initial positioning
		setTimeout(positionTestimonials, 100);

		return () => window.removeEventListener('resize', handleResize);
	});

	$effect(() => {
		// Re-position when elements change
		if (testimonialElements.length === testimonials.length) {
			positionTestimonials();
		}
	});
</script>

<section class="overflow-hidden bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
				Das sagen unsere Nutzer
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Über 1.000 zufriedene Nutzer vertrauen auf MaklerUpdate
			</p>
		</div>

		<div bind:this={containerRef} class="relative" style="height: {containerHeight}px">
			{#each testimonials as testimonial, i}
				<div
					bind:this={testimonialElements[i]}
					class="absolute transition-all duration-500 ease-out"
					style="
            transform: translate({testimonialPositions[i]?.x || 0}px, {testimonialPositions[i]?.y ||
						0}px);
            width: calc((100% - {16 * (columns - 1)}px) / {columns});
            opacity: {testimonialPositions[i] ? 1 : 0};
          "
				>
					<Card class="transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg">
						<CardContent class="p-4">
							<Quote class="mb-2 h-5 w-5 text-primary/20" />
							<p class="mb-3 text-sm leading-relaxed text-muted-foreground">
								"{testimonial.content}"
							</p>
							<div class="flex items-center gap-2">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10"
								>
									<span class="text-xs font-semibold text-primary">
										{testimonial.name.charAt(0)}
									</span>
								</div>
								<div>
									<p class="text-sm font-semibold text-foreground">
										{testimonial.name}
									</p>
									<p class="text-xs text-muted-foreground">
										{testimonial.role}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<p class="text-sm text-muted-foreground">✓ Alle Bewertungen sind von verifizierten Nutzern</p>
		</div>
	</div>
</section>

<style>
	@media (prefers-reduced-motion: reduce) {
		div {
			transition: none !important;
		}
	}
</style>
