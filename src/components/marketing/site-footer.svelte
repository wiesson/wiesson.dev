<script lang="ts">
	import { Badge } from '$lib/ui/badge';
	import { Button } from '$lib/ui/button';
	import { Input } from '$lib/ui/input';
	// TODO: Re-implement newsletter subscription for Astro (SvelteKit remote functions not supported)
	// import { subscribeNewsletter } from '$lib/actions/forms/newsletter.remote';
	// import { toast } from 'svelte-sonner';
	import { Mail, MapPin, Sparkles, ArrowRight } from '@lucide/svelte';

	const currentYear = new Date().getFullYear();

	let email = $state('');
	let isSubmitting = $state(false);
</script>

<footer class="bg-background border-t">
	<div class="app-grid">
		<!-- Main Footer Content -->
		<div class="app-wide-column pt-16 pb-8">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
				<!-- Company Info -->
				<div class="lg:col-span-1">
					<a href="/" class="mb-4 flex items-center">
						<img src="/logo.svg" alt="Tourvy" class="h-6 w-auto" />
					</a>
					<p class="text-muted-foreground mb-4 text-sm">
						AI-powered trip planning for travel agencies. From email request to complete proposal in
						under 5 minutes.
					</p>
					<div class="flex items-center gap-2">
						<Badge variant="secondary" class="text-xs">
							<Sparkles class="mr-1 h-3 w-3" />
							AI-Assisted
						</Badge>
						<Badge variant="outline" class="text-xs">Built for Agencies</Badge>
					</div>
				</div>

				<!-- Product -->
				<div>
					<h3 class="mb-4 font-semibold">Product</h3>
					<ul class="space-y-3 text-sm">
						<li>
							<a
								href="/#how-it-works"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								How It Works
							</a>
						</li>
						<li>
							<a
								href="/#features"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="/#pricing"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								Pricing
							</a>
						</li>
						<li>
							<a
								href="/signup"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								Get Started
							</a>
						</li>
					</ul>
				</div>

				<!-- Resources -->
				<div>
					<h3 class="mb-4 font-semibold">Resources</h3>
					<ul class="space-y-3 text-sm">
						<li>
							<a
								href="/tools"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								AI Tools
							</a>
						</li>
						<li>
							<a
								href="/marketplace"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								Marketplace
							</a>
						</li>
						<li>
							<a href="/docs" class="text-muted-foreground hover:text-foreground transition-colors">
								Documentation
							</a>
						</li>
						<li>
							<a
								href="mailto:enterprise@tourvy.com"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								Enterprise
							</a>
						</li>
					</ul>
				</div>

				<!-- Newsletter -->
				<div>
					<h3 class="mb-4 font-semibold">Newsletter</h3>
					<p class="text-muted-foreground mb-4 text-sm">
						Get updates on new features and travel industry insights.
					</p>
					<form
						onsubmit={(e) => {
							e.preventDefault();
							// TODO: Implement newsletter subscription
							console.log('Newsletter subscription:', email);
						}}
						class="space-y-3"
					>
						<Input
							type="email"
							name="email"
							placeholder="your@email.com"
							bind:value={email}
							required
							disabled={isSubmitting}
							class="text-sm"
						/>
						<Button type="submit" disabled={isSubmitting} class="w-full">
							{isSubmitting ? 'Subscribing...' : 'Subscribe'}
							<ArrowRight class="ml-2 h-4 w-4" />
						</Button>
					</form>
					<p class="text-muted-foreground mt-3 text-xs">
						We never sell your data and never send spam.
					</p>
				</div>
			</div>
		</div>

		<!-- Contact & Legal Section -->
		<div class="app-wide-column border-t py-8">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				<!-- Contact -->
				<div>
					<h4 class="mb-4 font-semibold">Contact</h4>
					<div class="text-muted-foreground space-y-2 text-sm">
						<p>Tourvy Team</p>
						<a
							href="mailto:hello@tourvy.com"
							class="hover:text-foreground flex items-center gap-2 transition-colors"
						>
							<Mail class="h-4 w-4" />
							hello@tourvy.com
						</a>
						<div class="flex items-center gap-2">
							<MapPin class="h-4 w-4" />
							Meerbusch, Germany
						</div>
					</div>
				</div>

				<!-- Legal -->
				<div class="md:text-right">
					<h4 class="mb-4 font-semibold">Legal</h4>
					<div class="space-y-2 text-sm">
						<div>
							<a
								href="/privacy"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								Privacy Policy
							</a>
						</div>
						<div>
							<a
								href="/terms"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								Terms of Service
							</a>
						</div>
						<div>
							<a
								href="/cookies"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Footer Bottom -->
		<div class="app-wide-column border-t py-6">
			<p class="text-muted-foreground text-center text-sm">
				© {currentYear} Tourvy. All rights reserved.
			</p>
		</div>
	</div>
</footer>
