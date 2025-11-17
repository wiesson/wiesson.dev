<script lang="ts">
	import { Card, CardContent } from '$lib/ui/card';
	import { Badge } from '$lib/ui/badge';
	import {
		Mail,
		Globe,
		FileText,
		Workflow,
		CheckCircle2
	} from '@lucide/svelte';
</script>

<section class="app-text-column pt-20">
	<div class="text-left">
		<Badge variant="outline" class="mb-4">
			<Workflow class="mr-1 h-3 w-3" />
			Integrationen
		</Badge>

		<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground">
			Passt sich nahtlos in Ihren Workflow ein
		</h2>

		<p class="mb-8 max-w-3xl text-lg text-muted-foreground">
			Zu viele Tools erfordern, dass Sie ständig zwischen Anwendungen wechseln. Unser KI-Exposé
			Service funktioniert genau dort, wo Sie bereits arbeiten. Die Integration mit Ihren
			bestehenden Systemen stellt sicher, dass kein Exposé verloren geht.
		</p>

		<p class="mb-12 max-w-3xl text-base text-muted-foreground">
			Die E-Mail-Integration lässt Sie Exposés erstellen, ohne Ihren Posteingang zu verlassen.
			Senden Sie einfach Fotos an expose@maklerupdate.de und erhalten Sie das fertige PDF zurück.
		</p>
	</div>
</section>

<section class="app-wide-column pb-12">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<Card class="border-2 py-0! transition-colors hover:border-primary">
			<CardContent class="p-6">
				<div class="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
					<Mail class="size-6 text-primary" />
				</div>
				<h3 class="mb-2 font-semibold">E-Mail</h3>
				<p class="mb-4 text-sm text-muted-foreground">
					Fotos senden, PDF erhalten. So einfach wie eine E-Mail schreiben.
				</p>
				<div class="flex items-center text-sm text-primary">
					<CheckCircle2 class="mr-1 h-4 w-4" />
					<span>Verfügbar</span>
				</div>
			</CardContent>
		</Card>

		<Card class="border-2 py-0! transition-colors hover:border-primary">
			<CardContent class="p-6">
				<div class="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
					<Globe class="size-6 text-primary" />
				</div>
				<h3 class="mb-2 font-semibold">Web-Plattform</h3>
				<p class="mb-4 text-sm text-muted-foreground">
					Volle Kontrolle über Design und Inhalte im Browser.
				</p>
				<div class="flex items-center text-sm text-primary">
					<CheckCircle2 class="mr-1 h-4 w-4" />
					<span>Verfügbar</span>
				</div>
			</CardContent>
		</Card>
	</div>
</section>

<section class="app-text-column pb-20">
	<p class="max-w-3xl text-base text-muted-foreground">
		Wir wissen, dass Sie wahrscheinlich bereits ein System haben, das funktioniert. Deshalb bauen
		wir Integrationen mit ImmoScout24, Immowelt, und anderen Plattformen. So können Sie Exposés mit
		wenigen Klicks direkt dort veröffentlichen, wo Ihre Kunden suchen.
	</p>

	<div class="mt-8 max-w-3xl rounded-lg bg-primary/5 p-6">
		<div class="flex items-start gap-4">
			<FileText class="mt-1 size-6 flex-shrink-0 text-primary" />
			<div>
				<h3 class="mb-2 font-semibold">Weitere Integrationen auf Anfrage</h3>
				<p class="text-sm text-muted-foreground">
					Nutzen Sie ein spezielles CRM oder eine Maklersoftware? Sprechen Sie uns an – wir passen
					unser System an Ihre Bedürfnisse an.
				</p>
			</div>
		</div>
	</div>
</section>
