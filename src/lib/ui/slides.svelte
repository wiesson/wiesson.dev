<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		cols?: 'default' | '2' | '3' | '4' | '5' | '6';
		children: Snippet;
	}

	let { cols = 'default', children }: Props = $props();

	const gridClasses = {
		default: 'grid gap-6 md:grid-cols-2 lg:grid-cols-3',
		'2': 'grid gap-6 md:grid-cols-2',
		'3': 'grid gap-6 md:grid-cols-2 lg:grid-cols-3',
		'4': 'grid gap-6 md:grid-cols-2 lg:grid-cols-4',
		'5': 'grid gap-6 md:grid-cols-2 lg:grid-cols-5',
		'6': 'grid gap-6 md:grid-cols-3 lg:grid-cols-6'
	};

	const gridClass = $derived(gridClasses[cols] || gridClasses.default);
</script>

<div class={gridClass}>
	{@render children()}
</div>
