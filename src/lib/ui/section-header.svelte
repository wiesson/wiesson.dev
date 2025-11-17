<script lang="ts">
	import { Badge } from '$lib/ui/badge';
	import type { ComponentType } from 'svelte';

	interface Props {
		badgeIcon?: ComponentType;
		badgeLabel: string;
		title: string;
		description?: string;
		align?: 'left' | 'center';
	}

	let { badgeIcon, badgeLabel, title, description, align = 'center' }: Props = $props();

	const alignmentClasses = {
		left: 'text-left',
		center: 'text-center'
	};
</script>

<div class="mb-12 {alignmentClasses[align]}">
	<Badge variant="secondary" class="mb-4 inline-flex items-center gap-2">
		{#if badgeIcon}
			<svelte:component this={badgeIcon} class="size-3" />
		{/if}
		<span>{badgeLabel}</span>
	</Badge>

	<h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
		{title}
	</h2>

	{#if description}
		<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
			{description}
		</p>
	{/if}
</div>
