<script lang="ts">
	import { Button } from '$lib/ui/button';
	import { Badge } from '$lib/ui/badge';
	import { ArrowRight, Sparkles } from '@lucide/svelte';
	import type { HeroGradient } from '$lib/config/hero-colors';
	import SiteHeader from './site-header.svelte';

	let { gradient }: { gradient: HeroGradient } = $props();

	let isScrolled = $state(false);

	// Compute dark mode text classes
	const darkTextClass = $derived(gradient.darkTextColor === 'text-white' ? 'dark:text-white' : gradient.darkTextColor === 'text-gray-900' ? 'dark:text-gray-900' : '');
	const darkSubtextClass = $derived(gradient.darkTextColor === 'text-white' ? 'dark:text-white/90' : gradient.darkTextColor === 'text-gray-900' ? 'dark:text-gray-800' : '');
	const darkProofTextClass = $derived(gradient.darkTextColor === 'text-white' ? 'dark:text-white/80' : gradient.darkTextColor === 'text-gray-900' ? 'dark:text-gray-700' : '');

	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="p-4">
	<section
		class="relative flex min-h-[80vh] flex-col rounded-xl bg-gradient-to-br {gradient.from} {gradient.to} {gradient.darkFrom} {gradient.darkTo}"
	>
		<!-- Sticky Header -->
		<div
			class="sticky top-0 z-50 transition-all duration-300 {isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}"
		>
			<SiteHeader transparent={!isScrolled} />
		</div>

		<!-- Hero Content -->
		<div class="flex flex-1 items-center justify-center">
		<!-- Content Container -->
		<div class="relative z-10 w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
		<!-- Badge -->
		<div class="mb-6 flex justify-center sm:mb-8">
			<Badge
				variant="secondary"
				class="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
			>
				<Sparkles class="size-4" />
				Now in Beta
			</Badge>
		</div>

		<!-- Headline -->
		<h1
			class="mb-6 text-center text-4xl font-bold tracking-tight {gradient.textColor} {darkTextClass} sm:text-5xl lg:text-6xl"
		>
			Trip Planning in <br class="hidden sm:inline" />Under 5 Minutes
		</h1>

		<!-- Subline -->
		<p class="mb-10 text-center text-lg {gradient.textColor === 'text-white' ? 'text-white/90' : 'text-gray-800'} {darkSubtextClass} sm:text-xl lg:text-2xl">
			Transform customer emails into complete trip proposals with AI. Your team stays in control,
			while automation handles the heavy lifting.
		</p>

		<!-- CTAs -->
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
			<Button size="lg" href="/signup" class="group w-full bg-white text-gray-900 hover:bg-white/90 sm:w-auto">
				Get Started
				<ArrowRight class="ml-2 size-5 transition-transform group-hover:translate-x-1" />
			</Button>
			<Button
				size="lg"
				variant="outline"
				href="#how-it-works"
				class="w-full border-white/30 bg-white/10 {gradient.textColor} {darkTextClass} backdrop-blur-sm hover:bg-white/20 sm:w-auto"
			>
				How It Works
			</Button>
		</div>

		<!-- Optional: Social Proof or Quick Stats -->
		<div class="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm {gradient.textColor === 'text-white' ? 'text-white/80' : 'text-gray-700'} {darkProofTextClass}">
			<div class="flex items-center gap-2">
				<svg class="size-5 text-white" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>No credit card required</span>
			</div>
			<div class="flex items-center gap-2">
				<svg class="size-5 text-white" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>Free for 30 days</span>
			</div>
			<div class="flex items-center gap-2">
				<svg class="size-5 text-white" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>Cancel anytime</span>
			</div>
		</div>
		</div>
		</div>
	</section>
</div>
