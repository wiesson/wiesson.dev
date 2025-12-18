<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { CheckCircle2, ArrowRight } from '@lucide/svelte';
	import type { ComponentType } from 'svelte';

	type Props = {
		title: string;
		description: string;
		price: string;
		features: string[];
		href: string;
		icon: ComponentType;
		badge?: string;
	};

	let { title, description, price, features, href, icon, badge }: Props = $props();
</script>

<Card class="h-full flex flex-col">
	<CardHeader>
		<div class="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
			<svelte:component this={icon} class="size-6 text-primary" />
		</div>
		{#if badge}
			<div class="mb-2">
				<Badge variant="default">{badge}</Badge>
			</div>
		{/if}
		<div class="mb-2">
			<Badge variant="outline" class="text-xs">{price}</Badge>
		</div>
		<CardTitle class="text-xl">{title}</CardTitle>
		<CardDescription>{description}</CardDescription>
	</CardHeader>
	<CardContent class="flex-1 flex flex-col">
		<ul class="space-y-2 mb-6 flex-1">
			{#each features as feature}
				<li class="flex items-start gap-2 text-sm text-muted-foreground">
					<CheckCircle2 class="mt-0.5 size-4 flex-shrink-0 text-primary" />
					<span>{feature}</span>
				</li>
			{/each}
		</ul>
		<Button href={href} class="w-full">
			Details ansehen
			<ArrowRight class="ml-2 size-4" />
		</Button>
	</CardContent>
</Card>
