<script lang="ts">
	import { Button } from '$lib/ui/button';
	import { Badge } from '$lib/ui/badge';
	import { MessageSquare, Clock } from '@lucide/svelte';
	import NotificationDemo from '$lib/components/notification-demo.svelte';
	import DotGridBackground from '$lib/components/backgrounds/dot-grid-background.svelte';
	import QuickSignupForm from '$lib/components/forms/quick-signup-form.svelte';
	import { FEATURES } from '$lib/config/features';
</script>

<section class="relative pt-24 pb-16">
	<DotGridBackground opacity={0.2} />

	<div class="app-text-column relative z-10 mb-12">
		<div
			class="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/50 px-3 py-1 text-sm font-medium text-secondary-foreground"
		>
			<MessageSquare class="h-3 w-3" />
			<span>Tägliche E-Mail Updates</span>
			<span class="text-muted-foreground">•</span>
			<span>Exklusiver Beta-Zugang</span>
		</div>

		<h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
			Verpassen Sie nie wieder eine Chance
		</h1>

		<p class="mb-8 max-w-2xl text-xl text-muted-foreground">
			Erhalten Sie tägliche Updates über neue Objekte, Preissenkungen und reservierte Immobilien –
			direkt von den Makler-Websites, bevor sie auf den großen Portalen erscheinen.
		</p>

		{#if FEATURES.signupEnabled}
			<QuickSignupForm />
		{:else}
			<Badge variant="secondary" class="text-base px-4 py-2">
				<Clock class="mr-2 h-4 w-4" />
				Bald verfügbar
			</Badge>
		{/if}

		<div class="mt-6">
			<Button href="#how-it-works" variant="ghost" size="sm">Mehr erfahren →</Button>
		</div>
	</div>

	<div class="app-wide-column relative z-10 mb-12">
		<NotificationDemo />
	</div>
</section>
