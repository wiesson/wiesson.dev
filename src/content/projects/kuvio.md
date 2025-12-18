---
title: Kuvio Studio
intro: KI-gestützte Bildbearbeitung für Immobilienprofis, Architekten und Möbelbauer – Virtual Staging, Declutter und Atmosphären-Transformationen in Sekunden statt Tagen
url: https://kuvio.studio
status: beta
featured: true
role: Gründer & Lead Developer
timeline: 2025 - heute

technologies:
  - TanStack Start
  - React
  - TypeScript
  - Drizzle ORM
  - PostgreSQL
  - Supabase
  - Google Gemini
  - Tailwind CSS v4
  - shadcn/ui
  - Better-Auth
  - Vercel

problem: |
  Makler zeigen leere Räume, Architekten haben nur Skizzen, Möbelbauer brauchen Produktfotos in verschiedenen Settings. Traditionelles Staging kostet €500-2000 pro Objekt und dauert Tage. AI-Tools aus den USA sind oft nicht DSGVO-konform und verstehen den europäischen Markt nicht.

solution: |
  Kuvio Studio transformiert Fotos in Sekunden mit speziell trainierten AI-Prompts: Virtual Staging füllt leere Räume, Declutter räumt Chaos auf, Twilight-Modus zaubert perfekte Abendstimmung. Ein Credit = eine Transformation. Gehostet in Deutschland, DSGVO-konform, ohne versteckte Kosten.

results:
  - value: "6"
    metric: AI-Transformations-Tools
  - value: "1 Credit"
    metric: Pro Transformation
  - value: "< 30 Sek"
    metric: Durchschnittliche Generierungszeit

architecture: |
  Full-Stack TypeScript mit TanStack Start für SSR und Server Functions. Google Gemini als primäres AI-Model für Bildgenerierung. Supabase für Auth, Storage und PostgreSQL-Datenbank – alles in Deutschland gehostet. Credit-basiertes Billing mit transparenter Pay-per-Use-Struktur.

challenges:
  - "Prompt Engineering für konsistente Ergebnisse: Jede Transformation braucht präzise Prompts, die bei verschiedenen Eingabebildern zuverlässig funktionieren"
  - "Anti-Halluzination bei Möbeln: Das AI-Model darf existierende Einbauten nicht verändern – nur hinzufügen oder entfernen was gewünscht ist"
  - "Intensitätsstufen: Drei Level (Minimal, Moderat, Voll) für jedes Tool, die alle unterschiedliche Prompt-Strategien brauchen"
  - "DACH-Markt-Fokus: Marketing und UX komplett auf den deutschen Markt ausgerichtet, nicht nur übersetzt"

learnings:
  - "Spin-off aus maklerupdate: Die Idee entstand beim Beobachten von Makler-Listings – leere Räume verkaufen sich schlechter"
  - "Gemini ist erstaunlich gut für Bildbearbeitung: Konsistente Ergebnisse, gute Prompt-Befolgung, bezahlbare API-Kosten"
  - "Credit-System > Subscription für diesen Use Case: Nutzer wollen zahlen wenn sie es brauchen, nicht jeden Monat"
  - "B2B-AI im DACH-Markt: DSGVO-Konformität und deutscher Support sind echte Differenzierungsmerkmale"
---
