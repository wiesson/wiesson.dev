<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import { Calculator, Clock, Euro, TrendingUp } from '@lucide/svelte';

	let exposesPerMonth = $state(20);
	let hoursPerExpose = $state(2);

	const hoursSaved = $derived(exposesPerMonth * (hoursPerExpose - 0.05)); // 3 minutes = 0.05 hours
	const moneySaved = $derived(hoursSaved * 75); // €75/hour average
	const roi = $derived(Math.round(((moneySaved - 99) / 99) * 100));
</script>

<section class="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<Badge variant="outline" class="mb-4">
				<Calculator class="mr-1 h-3 w-3" />
				ROI-Rechner
			</Badge>
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
				Rechnen Sie selbst: Ihre Zeitersparnis in Zahlen
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Sehen Sie, wie viel Zeit und Geld Sie mit unserem KI-Exposé Service sparen
			</p>
		</div>

		<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
			<!-- Calculator Inputs -->
			<Card>
				<CardHeader>
					<CardTitle>Ihre aktuelle Situation</CardTitle>
				</CardHeader>
				<CardContent class="space-y-6">
					<div>
						<label class="mb-2 block text-sm font-medium"> Exposés pro Monat </label>
						<input type="range" min="5" max="50" bind:value={exposesPerMonth} class="w-full" />
						<div class="mt-1 flex justify-between text-sm text-muted-foreground">
							<span>5</span>
							<span class="font-medium text-foreground">{exposesPerMonth}</span>
							<span>50</span>
						</div>
					</div>

					<div>
						<label class="mb-2 block text-sm font-medium"> Stunden pro Exposé (aktuell) </label>
						<input
							type="range"
							min="1"
							max="4"
							step="0.5"
							bind:value={hoursPerExpose}
							class="w-full"
						/>
						<div class="mt-1 flex justify-between text-sm text-muted-foreground">
							<span>1h</span>
							<span class="font-medium text-foreground">{hoursPerExpose}h</span>
							<span>4h</span>
						</div>
					</div>

					<div class="border-t pt-4">
						<div class="mb-2 flex items-center justify-between">
							<span class="text-sm text-muted-foreground">Mit KI-Exposé Service</span>
							<span class="font-medium">3 Minuten</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm text-muted-foreground">Monatspreis</span>
							<span class="font-medium">99€</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<!-- Results -->
			<div class="space-y-6">
				<Card class="border-primary">
					<CardContent class="p-6">
						<div class="mb-4 flex items-center justify-between">
							<Clock class="h-8 w-8 text-primary" />
							<div class="text-right">
								<div class="text-3xl font-bold text-primary">{hoursSaved}h</div>
								<div class="text-sm text-muted-foreground">Zeit gespart/Monat</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="border-green-500">
					<CardContent class="p-6">
						<div class="mb-4 flex items-center justify-between">
							<Euro class="h-8 w-8 text-green-500" />
							<div class="text-right">
								<div class="text-3xl font-bold text-green-500">
									{moneySaved}€
								</div>
								<div class="text-sm text-muted-foreground">Wert der gesparten Zeit</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="border-primary/20 bg-primary/5">
					<CardContent class="p-6">
						<div class="mb-4 flex items-center justify-between">
							<TrendingUp class="h-8 w-8 text-primary" />
							<div class="text-right">
								<div class="text-3xl font-bold text-primary">{roi}%</div>
								<div class="text-sm text-muted-foreground">Return on Investment</div>
							</div>
						</div>
						<p class="text-sm text-muted-foreground">
							Für jeden investierten Euro erhalten Sie {(roi / 100 + 1).toFixed(2)}€ zurück
						</p>
					</CardContent>
				</Card>
			</div>
		</div>

		<div class="mt-12 text-center">
			<p class="mb-4 text-sm text-muted-foreground">
				* Berechnet mit einem durchschnittlichen Stundensatz von 75€
			</p>
		</div>
	</div>
</section>
