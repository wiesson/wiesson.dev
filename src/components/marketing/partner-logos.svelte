<script lang="ts">
	const partners = [
		{
			name: 'Take Memories',
			logo: '/images/partners/takememories.svg',
			url: 'https://takememories.com',
		},
		{
			name: 'Canvas Club Oman',
			logo: '/images/partners/canvasclub.svg',
			url: 'https://canvascluboman.com',
		},
		{
			name: 'Silent Sands Oman',
			logo: '/images/partners/silentsands-dark.png',
			url: 'https://silentsandsoman.com',
		},
	];
</script>

<!-- Partner Logos Section -->
<section class="app-text-column pt-16 pb-8">
	<div class="text-center">
		<p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">Used by</p>
	</div>
</section>

<section class="app-wide-column pb-16">
	<div class="grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-3">
		{#each partners as partner (partner.name)}
			<div class="bg-muted flex w-full items-center justify-center rounded-lg px-12 py-4">
				<img
					src={partner.logo}
					alt={partner.name}
					class="h-16 w-auto object-contain transition-all duration-300 hover:opacity-100 hover:grayscale-0"
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	/* Additional styling for logo consistency */
	img {
		filter: grayscale(100%);
		transition:
			filter 0.3s ease,
			opacity 0.3s ease;
	}

	img:hover {
		filter: grayscale(0%);
	}
</style>
