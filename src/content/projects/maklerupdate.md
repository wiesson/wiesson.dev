---
title: maklerupdate.de
intro: Persönliches Tool zur automatischen Überwachung von Makler-Websites im Großraum Düsseldorf. Crawlt Websites, extrahiert Properties per KI, sendet tägliche E-Mail-Updates.
url: https://maklerupdate.de
status: mvp
featured: true
role: Gründer & Lead Developer
timeline: 2021 - heute

technologies:
  - SvelteKit
  - Svelte 5
  - Supabase
  - PostgreSQL
  - PostGIS
  - TanStack Query
  - TypeScript
  - Drizzle ORM
  - OpenAI GPT
  - Claude
  - Inngest
  - Deno
  - Firecrawl
  - Tailwind CSS v4
  - Vercel

problem: |
  Wer eine Immobilie in Düsseldorf sucht, muss täglich Dutzende Makler-Websites checken. Die meisten Objekte sind nie auf ImmoScout – lokale Makler listen nur auf der eigenen Website. Manuell 50+ Seiten durchklicken kostet Stunden und man verpasst trotzdem neue Angebote.

solution: |
  maklerupdate crawlt automatisch 3x täglich alle überwachten Makler-Websites, extrahiert neue Properties per KI und schickt Daily-Digest-Emails an Subscriber. Statt stundenlangem Klicken: einmal Suchkriterien definieren, täglich die relevanten Neuzugänge per Mail bekommen.

results:
  - value: "50+"
    metric: Überwachte Makler
  - value: "3x täglich"
    metric: Automatisches Crawling
  - value: "0 Minuten"
    metric: Manueller Aufwand

architecture: |
  SvelteKit 5 Frontend mit Supabase/PostgreSQL Backend. PostGIS für geografische Queries (Umkreissuche). Multi-Strategie Property-Extraction: LLM-gestützte DOM-Selector-Discovery für statische Sites, JSON-API-Detection für React-SPAs, Heuristic-Fallbacks. Event-driven Background Jobs über Inngest mit automatischem Retry und Monitoring.

challenges:
  - "Heterogene Makler-Websites: Jede Site hat andere Struktur – vom WordPress-Theme bis zur Custom React-App"
  - "DOM-Selector-Discovery: GPT/Claude analysieren HTML und finden automatisch die richtigen CSS-Selektoren für Preis, Adresse, Fläche"
  - "Change Detection: Nur echte neue Objekte melden, nicht jede Layout-Änderung auf der Website"
  - "Rate Limiting & Politeness: Nicht als Bot geblockt werden, respektvolle Crawl-Intervalle"

learnings:
  - "LLMs sind erstaunlich gut darin, HTML-Strukturen zu verstehen und Selektoren vorzuschlagen"
  - "Firecrawl nimmt viel Pain aus dem Crawling: JavaScript-Rendering, Anti-Bot-Bypassing, strukturierte Markdown-Ausgabe"
  - "Deno CLI ist perfekt für Admin-Tools: Type-Safety, keine node_modules, läuft überall"
  - "PostGIS + Drizzle = Type-safe geografische Queries ohne SQL-Strings"
---
