<script lang="ts">
	import { Button } from '$lib/ui/button';
	import { ArrowLeft } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	let {
		title,
		lastUpdated,
		children
	} = $props<{
		title: string;
		lastUpdated: string;
		children: Snippet;
	}>();
</script>

<div class="min-h-screen bg-background">
	<!-- Header -->
	<div class="border-b bg-muted/30">
		<div class="container mx-auto px-4 py-8">
			<Button href="/" variant="ghost" size="sm" class="mb-4 gap-2">
				<ArrowLeft class="h-4 w-4" />
				Back to Home
			</Button>
			<h1 class="text-4xl font-bold tracking-tight">{title}</h1>
			<p class="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
		</div>
	</div>

	<!-- Content -->
	<div class="container mx-auto px-4 py-12">
		<div class="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
			{@render children()}
		</div>
	</div>
</div>

<style>
	:global(.prose) {
		max-width: 100%;
	}

	:global(.prose h2) {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-weight: 600;
	}

	:global(.prose h3) {
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		font-size: 1.25rem;
		font-weight: 600;
	}

	:global(.prose p) {
		margin-bottom: 1rem;
		line-height: 1.75;
	}

	:global(.prose ul, .prose ol) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
	}

	:global(.prose a) {
		color: hsl(var(--primary));
		text-decoration: underline;
	}

	:global(.prose a:hover) {
		text-decoration: none;
	}

	:global(.prose strong) {
		font-weight: 600;
	}
</style>
