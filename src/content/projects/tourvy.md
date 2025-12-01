---
title: tourvy.com
intro: KI-gestützte Reiseplanungssoftware, die durch eine 10-stufige AI-Pipeline vollständige Reiseangebote in unter 5 Minuten generiert
url: https://tourvy.com
status: live
featured: true
role: Gründer & Lead Developer
timeline: 2023 - heute

technologies:
  - TanStack Start
  - TanStack Query
  - Supabase
  - PostgreSQL
  - TypeScript
  - Drizzle ORM
  - OpenAI API
  - Inngest
  - Stripe
  - Tailwind CSS

problem: |
  Traditionelle Reisebüros verbringen 2-4 Stunden pro Angebotsanfrage mit manueller Recherche: Hotels suchen, Aktivitäten planen, Transfers koordinieren, Preise kalkulieren. Bei 10+ Anfragen täglich bleibt kaum Zeit für Kundenbetreuung. Die Konkurrenz durch Online-Buchungsportale macht es noch schwieriger, profitabel zu bleiben.

solution: |
  tourvy automatisiert den gesamten Angebotsprozess durch eine 10-stufige AI-Pipeline. Von der E-Mail-Anfrage bis zum fertigen, buchbaren Reiseangebot vergehen weniger als 5 Minuten. Die KI extrahiert automatisch Reisedaten, analysiert Destinationen, matcht passende Unterkünfte und plant Aktivitäten - alles basierend auf den individuellen Kundenwünschen.

results:
  - value: "90%"
    metric: Weniger manuelle Planungszeit
  - value: "10x"
    metric: Mehr Angebote pro Tag
  - value: "<5 Min"
    metric: Zeit bis zum fertigen Angebot

architecture: |
  Multi-Tenant SaaS-Architektur mit TanStack Start für Server Functions, TanStack Query für optimistisches Data Fetching, und Supabase/PostgreSQL als Backend. Die AI-Pipeline läuft asynchron über Inngest mit automatischem Retry und Monitoring. Drizzle ORM garantiert Type-Safety vom Database-Schema bis zum Frontend.

challenges:
  - "AI-Pipeline Orchestrierung: 10 abhängige Steps mit unterschiedlichen Laufzeiten und Fehlerszenarien koordinieren, ohne dass ein Fehler die gesamte Pipeline blockiert"
  - "Real-time Collaboration: Mehrere Team-Mitglieder bearbeiten dasselbe Angebot gleichzeitig - Race Conditions und Konflikte vermeiden"
  - "E-Mail Threading: RFC 5322-konforme Implementierung für korrektes Gruppieren von E-Mail-Konversationen"
  - "Multi-Provider Billing: Stripe und Mollie parallel unterstützen mit einheitlichem Subscription-Management"

learnings:
  - "Inngest ist perfekt für komplexe AI-Workflows - built-in Retries, Timeouts und Observability sparen Wochen Entwicklungszeit"
  - "TanStack Start Server Functions + Query ergeben eine DX, die sich anfühlt wie ein lokales API - ohne den Boilerplate"
  - "JSONB für Feature Flags funktioniert erstaunlich gut für tiered Pricing ohne Schema-Migrations"
  - "TypeScript Strict Mode von Anfang an spart mehr Zeit als es kostet - ZERO Fehler-Toleranz zahlt sich aus"
---
