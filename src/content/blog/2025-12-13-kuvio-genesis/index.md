---
title: "Von maklerupdate zu Kuvio: Wie aus einem Crawler ein AI-Staging-Tool wurde"
description: Die Geschichte, wie ein Side-Project für Immobilien-Monitoring zu einer B2B-AI-Plattform für Visual Professionals wurde.
tags:
  - SaaS
  - AI
  - Product Development
  - Spin-off
publishedAt: 2025-12-13
draft: true
---

Manchmal entstehen die besten Produkte als Nebeneffekt. Kuvio Studio war nie geplant – es wuchs aus einer Beobachtung heraus, die ich beim Bauen von maklerupdate machte.

## maklerupdate: Das Ausgangsproblem

2021 suchte ich eine Wohnung in Düsseldorf. Das Problem: Die meisten Objekte tauchen nie auf ImmoScout auf. Lokale Makler listen nur auf ihrer eigenen Website.

Also baute ich [maklerupdate](https://maklerupdate.de) – ein Tool, das automatisch 50+ Makler-Websites crawlt, neue Objekte per KI extrahiert und mir täglich eine E-Mail schickt. Statt stundenlangem Klicken: einmal Suchkriterien definieren, täglich die relevanten Neuzugänge bekommen.

Das Tool läuft bis heute. 3x täglich crawlen, Property-Extraction per LLM, Daily-Digest per Mail. Es funktioniert.

## Die Beobachtung, die alles änderte

Beim Durchsehen der gecrawlten Listings fiel mir etwas auf: Die Qualität der Fotos variierte enorm.

Manche Makler zeigten professionell inszenierte Räume – Virtual Staging, perfekte Beleuchtung, aufgeräumt. Andere zeigten leere Räume mit Baustellenchaos. Die Preisdifferenz zwischen vergleichbaren Objekten war manchmal signifikant.

Ich begann zu recherchieren. Virtual Staging kostet €50-200 pro Bild bei Agenturen. Für ein komplettes Exposé mit 15-20 Bildern sind das schnell €1000+. Für kleinere Makler ist das ein echtes Hindernis.

## Der AI-Moment

Ende 2023 wurde Bildgenerierung per AI praktikabel. Dall-E 3, Midjourney V5, später Stable Diffusion XL – alle konnten plötzlich Bilder generieren, die "gut genug" für viele Anwendungsfälle waren.

Ich experimentierte. Konnte ich ein leeres Zimmer per AI möblieren? Die ersten Versuche waren... durchwachsen. Aber mit besseren Prompts und den richtigen Modellen wurde es besser. Deutlich besser.

## Von Feature zu Produkt

Zuerst dachte ich: Das könnte ein Feature für maklerupdate werden. Makler laden ihr Bild hoch, bekommen es gestyled zurück.

Aber dann wurde klar: Das ist ein eigenes Produkt. Die Zielgruppen sind breiter als nur Makler. Architekten brauchen Visualisierungen. Möbelbauer brauchen Produktfotos in verschiedenen Settings. Gartenbauer wollen zeigen, wie der Garten in verschiedenen Jahreszeiten aussehen könnte.

Also trennte ich es ab. Kuvio wurde geboren.

## Tech-Entscheidungen

**TanStack Start** statt SvelteKit (wie bei maklerupdate): Ich wollte React für die Bild-Upload-Komponenten und die Preview-UI. TanStack Start war gerade in Beta, aber der DX überzeugte mich.

**Google Gemini** statt OpenAI: Gemini 2.0 Flash hat ein beeindruckendes Preis-Leistungs-Verhältnis für Bildgenerierung. Die Ergebnisse sind konsistent, die API ist stabil, die Kosten überschaubar.

**Credit-System** statt Subscription: Immobilienprofis arbeiten projektbasiert. Ein Makler hat vielleicht diesen Monat 10 Exposés, nächsten Monat keins. Ein festes Abo macht da keinen Sinn. Pay-per-Use ist fairer.

**Deutschland-Hosting**: Supabase bietet EU-Regionen. Für den DACH-Markt ist "Hosted in Germany" ein echtes Verkaufsargument. DSGVO-Konformität ist nicht optional, wenn du an Unternehmen verkaufst.

## Die sechs Tools

Kuvio hat sich auf sechs Kern-Transformationen fokussiert:

1. **Virtual Staging**: Leere Räume möblieren. Drei Intensitätsstufen, sechs Interior-Styles, sieben Raumtypen.

2. **Declutter**: Chaos entfernen. Von "persönliche Gegenstände weg" bis "komplett leer".

3. **Dekorieren**: Bestehende Möbel modernisieren, ohne sie zu ersetzen.

4. **Twilight**: Außenaufnahmen in perfektes Abendlicht tauchen.

5. **Object Removal**: Einzelne Objekte entfernen und natürlich auffüllen.

6. **Upscale**: Auflösung und Qualität verbessern.

Jedes Tool kostet 1 Credit. Typischer Workflow: 3 Credits pro Bild (z.B. Declutter → Staging → Twilight).

## Das Prompt-Engineering-Problem

Die größte Herausforderung war nicht das Frontend oder das Backend. Es war das Prompt-Engineering.

Jedes Tool braucht Prompts, die bei verschiedenen Eingabebildern zuverlässig funktionieren. Ein Staging-Prompt, der bei einem modernen Loft funktioniert, kann bei einem Altbau-Zimmer komplett versagen.

Dazu kommt Anti-Halluzination: Das Model darf existierende Einbauten – Fenster, Türen, Heizkörper – nicht verändern. Es soll Möbel hinzufügen, nicht die Architektur neu erfinden.

Die Lösung war iterativ: Hunderte von Testbildern, systematisches Prompt-Tuning, Feedback-Loops. Das kostet Zeit, aber es zahlt sich aus.

## DACH-First

Kuvio ist bewusst auf den deutschen Markt ausgerichtet. Nicht weil der US-Markt kleiner wäre, sondern weil ich ihn besser verstehe.

Deutsche Makler haben andere Workflows als amerikanische. Die rechtlichen Anforderungen sind anders. Die Erwartungen an Datenschutz sind anders. Ein "made in Germany" Badge ist hier ein Verkaufsargument, kein Marketing-Gag.

Die Konkurrenz – meist US-Tools – bietet oft nur übersetzte UIs. Kuvio ist von Grund auf für den DACH-Markt gebaut.

## Status heute: Early Access

Kuvio ist in der Beta-Phase. Early-Access-Nutzer bekommen doppelte Credits als Dankeschön fürs Testen.

Die Kern-Features funktionieren. Die Bildqualität ist gut. Das Pricing stimmt. Jetzt geht es darum, Nutzer zu finden und Feedback zu sammeln.

## Was kommt

- **Exposé-Architekt**: Aus Sprachnotizen und Bildern automatisch Objektbeschreibungen generieren
- **DocChat**: Fragen an Grundbuch-Dokumente stellen (RAG-basiert)
- **Subscription-Pläne**: Für Power-User mit konstantem Volumen

Aber erstmal: Nutzer finden. Iterieren. Besser werden.

---

**Testen?** [kuvio.studio](https://kuvio.studio) – 20 kostenlose Credits zum Start, keine Kreditkarte nötig.
