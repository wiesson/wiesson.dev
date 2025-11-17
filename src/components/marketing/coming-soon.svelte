<script lang="ts">
	import { Button } from '$lib/ui/button';
	import { Mail, ArrowLeft } from '@lucide/svelte';

	let {
		title,
		description,
		expectedDate,
		notifyEmail = 'hello@tourvy.com'
	} = $props<{
		title: string;
		description: string;
		expectedDate?: string;
		notifyEmail?: string;
	}>();
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
	<div class="mx-auto max-w-2xl text-center">
		<!-- Icon/Badge -->
		<div class="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
			<svg
				class="h-12 w-12 text-primary"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
				/>
			</svg>
		</div>

		<!-- Title -->
		<h1 class="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
			{title}
		</h1>

		<!-- Description -->
		<p class="mb-6 text-lg text-muted-foreground">
			{description}
		</p>

		<!-- Expected Date (if provided) -->
		{#if expectedDate}
			<p class="mb-8 text-sm font-medium text-primary">
				Expected launch: {expectedDate}
			</p>
		{/if}

		<!-- CTA Buttons -->
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button href="/" variant="default" class="gap-2">
				<ArrowLeft class="h-4 w-4" />
				Back to Home
			</Button>
			<Button href={`mailto:${notifyEmail}`} variant="outline" class="gap-2">
				<Mail class="h-4 w-4" />
				Get Notified
			</Button>
		</div>

		<!-- Additional Info -->
		<p class="mt-12 text-sm text-muted-foreground">
			Have questions? Contact us at
			<a href={`mailto:${notifyEmail}`} class="font-medium text-primary hover:underline">
				{notifyEmail}
			</a>
		</p>
	</div>
</div>
