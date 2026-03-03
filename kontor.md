
---
title: Kontor
intro: Rechnungssoftware für deutsche Freelancer. Rechnungen, Ausgaben,
  Steuervorbereitung.
url: https://getkontor.app
status: beta
featured: true
role: Gründer & Solo Developer
timeline: 2024 - heute

technologies:
  - React 19
  - TanStack Start
  - TanStack Router
  - TanStack Query
  - Convex
  - Tailwind CSS 4
  - shadcn/ui
  - OpenAI API
  - Typst (PDF-Generierung)
  - Zod
  - TypeScript

problem: |
  Deutsche Freelancer und Selbstständige verwalten ihre Finanzen oft mit Word-Vorlagen,
  Excel-Tabellen und E-Mail-Ordnern. Das führt zu:

  - Manuelle Fehler bei MwSt-Berechnungen
  - Vergessene Rechnungen und fehlende Zahlungsnachverfolgung
  - Zeitaufwand bei der Steuervorbereitung (EÜR, UStVA)
  - Datensilos ohne Überblick über Cashflow

  Existierende Lösungen sind oft überladen, teuer oder nicht auf deutsche
  Anforderungen (Kleinunternehmerregelung, GoBD) ausgerichtet.

solution: |
  Eine fokussierte Webanwendung für den deutschen Markt:

  - Rechnungserstellung mit automatischer MwSt-Berechnung und QR-Code für Überweisungen
  - Ausgabenverwaltung mit KI-gestützter Kategorisierung
  - Cashflow-Dashboard mit Echtzeit-Updates über Convex
  - Steuervorbereitung: EÜR- und UStVA-Übersichten
  - Steuerberater-Portal für delegierten Zugriff

  Der Tech-Stack priorisiert schnelle UX durch optimistische Updates und
  Push-basierte Synchronisierung statt Polling.

results:
  - value: "16"
    metric: Features implementiert
  - value: "8"
    metric: Features geplant
  - value: "50+"
    metric: Datenbank-Migrationen

architecture: |
  **Multi-Tenancy:** Organizations als Root-Entity mit Convex-Funktionen für
  Workspace-Isolation. Jeder Workspace hat eigene Settings für Steuerkonfiguration.

  **Real-Time Sync:** Convex ersetzt traditionelles Polling. Änderungen werden
  reaktiv an alle verbundenen Clients gepusht. TanStack Query cached lokal,
  Convex synchronisiert den Server-State.

  **Steuer-Compliance:** Rechnungen sind nach Erstellung unveränderbar (Validierung in
  Convex-Mutations). Geldbeträge werden als Cents (Integer) gespeichert. Fortlaufende
  Rechnungsnummern mit Unique Constraint pro Organisation.

  **KI-Integration:** OpenAI für Ausgaben-Kategorisierung und natürlichsprachliche
  Abfragen der Geschäftsdaten. RAG-Ansatz für deutsches Steuerrecht geplant.

challenges:
  - "Convex Migration: Vollständige Migration von Supabase+Electric SQL auf Convex
    bei laufendem Betrieb"
  - "GoBD-Compliance: Unveränderbarkeit von Rechnungen auf Anwendungsebene erzwingen,
    ohne Flexibilität für Stornos zu verlieren"
  - "Multi-Tenancy mit Convex: Workspace-Isolation durch Funktions-Level Zugriffskontrolle
    ohne Performance-Einbußen"
  - "Steuerlogik: Kleinunternehmerregelung, verschiedene MwSt-Sätze, Reverse Charge
    korrekt abbilden"
  - "EÜR und UStVA: Korrekte Zuordnung aller Einnahmen und Ausgaben zu steuerlichen
    Kategorien"

learnings:
  - "Convex ermöglicht echte Real-Time UX ohne WebSocket-Infrastruktur oder
    Sync-Layer selbst zu bauen"
  - "Gestartet mit PostgreSQL (Supabase) + Electric SQL für Real-Time Sync.
    Convex war letztlich die bessere Wahl für ein Solo-Projekt: End-to-End Type-Safety
    vom Schema bis zur Query, integrierte Reaktivität und kein eigener Sync-Layer.
    Für kleine, app-fokussierte Projekte schlägt dieses integrierte Harness eine
    selbst zusammengebaute Infrastruktur aus Postgres + RLS + Sync."
  - "Domain-Driven Design zahlt sich bei komplexer Steuerlogik aus - separierte
    Contexts für Invoicing, Expenses, Tax"
  - "Optimistische Updates erfordern sorgfältige Rollback-Strategien bei
    Server-Fehlern"
  - "Deutsche Steuervorschriften sind komplex - enge Zusammenarbeit mit
    Steuerberater für korrekte Implementierung"
---

Anmerkungen zur Einstufung:

- Status beta gewählt, da 16 Features fertig sind und die App bereits funktionsfähig ist, aber noch aktiv entwickelt wird mit bekannten Einschränkungen (8 geplante Features, fehlende Bank-API-Integration)
- Keine Nutzerzahlen in Results, da das ehrlicher ist als geschätzte Metriken
- Challenges fokussieren auf technische Hürden, nicht auf Marketing-Probleme
- Learnings sind konkret und auf wiederverwendbares Wissen ausgerichtet
