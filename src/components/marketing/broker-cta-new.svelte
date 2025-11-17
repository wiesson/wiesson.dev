<script lang="ts">
	import { Card, CardContent } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import { Button } from '$lib/ui/button';
	import {
		Briefcase,
		Clock,
		MessageSquare,
		Sparkles,
		ArrowRight,
		CheckCircle2
	} from '@lucide/svelte';
</script>

<section class="app-text-column pt-20 pb-8">
	<div class="text-left">
		<Badge variant="outline" class="mb-4">
			<Briefcase class="mr-1 h-3 w-3" />
			Für moderne Makler
		</Badge>

		<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
			Sind Sie Makler? Revolutionieren Sie Ihr Business
		</h2>

		<p class="mb-6 max-w-3xl text-lg text-muted-foreground">
			Während Ihre Konkurrenz noch Stunden mit Exposés verbringt, haben Sie schon drei neue Kunden
			gewonnen. Erstellen Sie professionelle Exposés in nur 3 Minuten mit unserem KI-Service.
		</p>

		<div class="mb-8 space-y-3">
			<div class="flex items-start gap-3">
				<CheckCircle2 class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<span class="text-muted-foreground">
					<strong>3 Minuten statt 2 Stunden</strong> pro Exposé
				</span>
			</div>
			<div class="flex items-start gap-3">
				<CheckCircle2 class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<span class="text-muted-foreground">
					<strong>Unbegrenzte Exposés</strong> für nur 99€/Monat
				</span>
			</div>
			<div class="flex items-start gap-3">
				<CheckCircle2 class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<span class="text-muted-foreground">
					<strong>Kostenlose Reichweite</strong> bei tausenden Suchenden
				</span>
			</div>
		</div>

		<div class="flex flex-wrap gap-4">
			<Button href="/tools/expose-service" size="lg">
				KI-Exposé Service entdecken
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
		</div>
	</div>
</section>

<section class="app-wide-column pb-20">
	<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
		<Card class="border-primary/20 bg-primary/5">
			<CardContent class="p-6 text-center">
				<Clock class="mx-auto mb-3 h-10 w-10 text-primary" />
				<div class="mb-1 text-3xl font-bold text-primary">95%</div>
				<div class="text-sm text-muted-foreground">Zeitersparnis</div>
			</CardContent>
		</Card>

		<Card class="border-green-500/20 bg-green-500/5">
			<CardContent class="p-6 text-center">
				<Sparkles class="mx-auto mb-3 h-10 w-10 text-green-600" />
				<div class="mb-1 text-3xl font-bold text-green-600">3 Min</div>
				<div class="text-sm text-muted-foreground">Pro Exposé</div>
			</CardContent>
		</Card>

		<Card class="border-blue-500/20 bg-blue-500/5">
			<CardContent class="p-6 text-center">
				<MessageSquare class="mx-auto mb-3 h-10 w-10 text-blue-600" />
				<div class="mb-1 text-3xl font-bold text-blue-600">24/7</div>
				<div class="text-sm text-muted-foreground">Verfügbar</div>
			</CardContent>
		</Card>

		<Card class="border-purple-500/20 bg-purple-500/5">
			<CardContent class="p-6 text-center">
				<Briefcase class="mx-auto mb-3 h-10 w-10 text-purple-600" />
				<div class="mb-1 text-3xl font-bold text-purple-600">120+</div>
				<div class="text-sm text-muted-foreground">Aktive Makler</div>
			</CardContent>
		</Card>
	</div>
</section>
