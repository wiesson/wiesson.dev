<script lang="ts">
	interface Props {
		title: string;
		description?: string;
	}

	let { title, description }: Props = $props();
</script>

<section class="app-text-column pt-20 pb-8">
	<h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground">
		{title}
	</h1>
	{#if description}
		<p class="text-lg text-muted-foreground">
			{description}
		</p>
	{/if}
</section>
