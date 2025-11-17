<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/ui/card';
	import SectionHeader from '$lib/ui/section-header.svelte';
	import { HelpCircle } from '@lucide/svelte';

	const faqs = [
		{
			question: 'Warum nicht einfach ImmoScout nutzen?',
			answer:
				'Viele Makler veröffentlichen zuerst auf ihrer eigenen Website – oft Tage oder Wochen vor ImmoScout. Außerdem landen manche Objekte nie auf den großen Portalen. Mit MaklerUpdate sehen Sie alles.'
		},
		{
			question: 'Wie viele Makler prüfen Sie im Raum Düsseldorf?',
			answer:
				'Wir prüfen über 120 lokale Makler im Raum Düsseldorf – und erweitern unser Netzwerk regelmäßig. Von großen Ketten bis zu Einzelmaklern, die Sie wahrscheinlich noch nie gehört haben.'
		},
		{
			question: 'Wie schnell erfahre ich von neuen Objekten?',
			answer:
				'Wir prüfen die Makler-Websites täglich und senden Ihnen eine übersichtliche Zusammenfassung mit allen neuen Objekten. Diese erhalten Sie einmal täglich – oft sehen Sie Objekte schon Wochen bevor sie auf ImmoScout erscheinen.'
		},
		{
			question: 'Werde ich auch über Preisänderungen informiert?',
			answer:
				'Absolut! Preisänderungen sind oft der entscheidende Moment im Immobilienmarkt. Unser Team prüft täglich alle Objekte und informiert Sie in der täglichen Zusammenfassung über alle Preissenkungen. So behalten Sie den Überblick und können bei interessanten Angeboten schnell reagieren.'
		},
		{
			question: 'Welche AI-Tools entwickeln Sie für Makler?',
			answer:
				'Wir entwickeln verschiedene smarte AI-Tools, die die Arbeit und das Leben von Maklern erleichtern – von intelligenten Objektbeschreibungen über automatisierte Marktanalysen bis hin zu unserem KI-Exposé Service, der professionelle Exposés in nur 3 Minuten erstellt.'
		},
		{
			question: 'Warum funktionieren Makler-Newsletter nicht?',
			answer:
				'Viele Makler haben veraltete Newsletter-Systeme, die unzuverlässig oder gar nicht funktionieren. Wir lösen das Problem, indem wir direkt die Websites prüfen – so verpassen Sie garantiert nichts.'
		},
		{
			question: 'Was kostet MaklerUpdate nach der Beta-Phase?',
			answer:
				'Die genauen Preise stehen noch nicht fest, aber Beta-Nutzer erhalten dauerhaft vergünstigte Konditionen. Wir schätzen Ihr frühes Vertrauen und belohnen es entsprechend.'
		},
		{
			question: 'Kann ich auch Makler außerhalb von Düsseldorf vorschlagen?',
			answer:
				'Absolut! Wir planen die Expansion in andere Städte. Nennen Sie uns Ihre Wunsch-Makler und -Regionen – das hilft uns bei der Priorisierung der nächsten Ausbaustufen.'
		}
	];
</script>

<section id="faq" class="app-text-column pt-20">
	<SectionHeader
		badgeIcon={HelpCircle}
		badgeLabel="FAQ"
		title="Häufig gestellte Fragen"
		description="Alles was Sie über MaklerUpdate wissen müssen – von der Funktionsweise bis zu unseren Zukunftsplänen."
	/>
</section>

<section class="app-wide-column pb-20">
	<div class="space-y-4">
		{#each faqs as faq}
			<Card>
				<CardHeader>
					<CardTitle class="text-lg">{faq.question}</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-muted-foreground">{faq.answer}</p>
				</CardContent>
			</Card>
		{/each}
	</div>
</section>
