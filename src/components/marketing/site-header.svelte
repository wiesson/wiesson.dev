<script lang="ts">
	import { Button } from '$lib/ui/button';
	import { Badge } from '$lib/ui/badge';
	import { Clock } from '@lucide/svelte';
	import { FEATURES } from '$lib/config/features';

	interface Props {
		isAuthenticated?: boolean;
		userEmail?: string;
		transparent?: boolean;
	}

	let { isAuthenticated = false, userEmail, transparent = false }: Props = $props();

	const navItems = [
		{ label: 'How It Works', href: '/#how-it-works' },
		{ label: 'Features', href: '/#features' },
		{ label: 'Pricing', href: '/#pricing' },
	];
</script>

<header
	class="w-full {transparent ? 'border-transparent' : 'border-b'}"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo and Navigation (Left-aligned) -->
			<div class="flex items-center space-x-8">
				<a href="/" class="flex items-center">
					<img src="/logo.svg" alt="Tourvy" class="h-6 w-auto" />
				</a>

				<!-- Desktop Navigation -->
				<nav class="hidden items-center space-x-6 md:flex">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-sm font-medium transition-colors {transparent ? 'text-white hover:text-white/80' : 'text-muted-foreground hover:text-foreground'}"
						>
							{item.label}
						</a>
					{/each}
				</nav>
			</div>

			<!-- Auth Buttons and CTA -->
			<div class="flex items-center space-x-4">
				{#if isAuthenticated}
					<span class="hidden text-sm sm:inline {transparent ? 'text-white' : 'text-muted-foreground'}">
						{userEmail}
					</span>
					<Button size="sm" href="/account" variant="outline" class={transparent ? 'border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20' : ''}>My Account</Button>
				{:else if FEATURES.signupEnabled}
					<Button size="sm" href="/login" variant="ghost" class={transparent ? 'text-white hover:bg-white/10' : ''}>Log In</Button>
					<Button size="sm" href="/signup" class={transparent ? 'bg-white text-gray-900 hover:bg-white/90' : ''}>Get Started</Button>
				{:else}
					<Badge variant="secondary" class="px-3 py-1">
						<Clock class="mr-1 h-3 w-3" />
						Coming Soon
					</Badge>
				{/if}
			</div>
		</div>
	</div>
</header>
