<script lang="ts">
	import { Button } from '$lib/ui/button';
	import { Input } from '$lib/ui/input';
	import { ArrowRight } from '@lucide/svelte';
	import { subscribeNewsletter } from '$lib/actions/forms/newsletter.remote';
	import { toast } from 'svelte-sonner';

	let email = $state('');
	let loading = $state(false);
	let success = $state(false);
</script>

<div class="space-y-2">
	{#if success}
		<div class="rounded border border-green-200 bg-green-50 p-3 text-sm">
			<p class="text-green-800">Thank you! You'll now receive our newsletter.</p>
		</div>
	{/if}

	<form
		{...subscribeNewsletter.enhance(async ({ submit }) => {
			loading = true;
			await submit();
			loading = false;

			if (subscribeNewsletter.result?.success) {
				success = true;
				toast.success('Successfully subscribed!');
				email = '';
			} else {
				toast.error('Error subscribing. Please try again.');
			}
		})}
		class="space-y-2"
	>
		<Input
			bind:value={email}
			type="email"
			name="email"
			placeholder="your@email.com"
			disabled={success || loading}
			required
			class="text-sm"
		/>

		<Button type="submit" size="sm" class="w-full" disabled={success || loading}>
			{#if success}
				<span>✓ Subscribed</span>
			{:else if loading}
				Subscribing...
			{:else}
				Subscribe
				<ArrowRight class="ml-2 h-3 w-3" />
			{/if}
		</Button>
	</form>

	<p class="mt-2 text-xs text-muted-foreground">
		We never sell your data and never send spam.
	</p>
</div>
