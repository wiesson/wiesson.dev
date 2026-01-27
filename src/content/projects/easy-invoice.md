---
title: Kontor
intro: Rechnungssoftware für deutsche Freelancer. Rechnungen, Ausgaben, Steuervorbereitung.
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
  - Electric SQL
  - Supabase (PostgreSQL)
  - Tailwind CSS 4
  - shadcn/ui
  - OpenAI API
  - Typst (PDF-Generierung)
  - Zod
  - TypeScript

problem: |
  Deutsche Freelancer und Selbstständige verwalten ihre Finanzen oft mit Word-Vorlagen, Excel-Tabellen und E-Mail-Ordnern. Das führt zu:

  - Manuelle Fehler bei MwSt-Berechnungen
  - Vergessene Rechnungen und fehlende Zahlungsnachverfolgung
  - Zeitaufwand bei der Steuervorbereitung (EÜR, UStVA)
  - Datensilos ohne Überblick über Cashflow

  Existierende Lösungen sind oft überladen, teuer oder nicht auf deutsche Anforderungen (Kleinunternehmerregelung, GoBD) ausgerichtet.

solution: |
  Eine fokussierte Webanwendung für den deutschen Markt:

  - Rechnungserstellung mit automatischer MwSt-Berechnung und QR-Code für Überweisungen
  - Ausgabenverwaltung mit KI-gestützter Kategorisierung
  - Cashflow-Dashboard mit Echtzeit-Updates über Electric SQL
  - Steuervorbereitung: EÜR- und UStVA-Übersichten
  - Steuerberater-Portal für delegierten Zugriff

  Der Tech-Stack priorisiert schnelle UX durch optimistische Updates und Push-basierte Synchronisierung statt Polling.

results:
  - value: "12"
    metric: Features implementiert
  - value: "3"
    metric: Features in Early Access
  - value: "50+"
    metric: Datenbank-Migrationen

architecture: |
  **Multi-Tenancy:** Organizations als Root-Entity mit Row-Level Security in PostgreSQL. Jeder Workspace hat eigene Settings für Steuerkonfiguration.

  **Real-Time Sync:** Electric SQL ersetzt traditionelles Polling. Änderungen werden per WebSocket an alle verbundenen Clients gepusht. TanStack Query cached lokal, Electric synchronisiert den Server-State.

  **Steuer-Compliance:** Rechnungen sind nach Erstellung unveränderbar (Trigger in der DB). Geldbeträge werden als Cents (Integer) gespeichert. Fortlaufende Rechnungsnummern mit Unique Constraint pro Organisation.

  **KI-Integration:** OpenAI für Ausgaben-Kategorisierung und natürlichsprachliche Abfragen der Geschäftsdaten. RAG-Ansatz für deutsches Steuerrecht geplant.

challenges:
  - "Electric SQL Integration: Supabase Edge Functions als Proxy notwendig für HTTP/2 WebSocket-Support"
  - "GoBD-Compliance: Unveränderbarkeit von Rechnungen auf Datenbankebene erzwingen, ohne Flexibilität für Stornos zu verlieren"
  - "Multi-Tenancy mit RLS: Komplexe PostgreSQL Policies für Workspace-Isolation ohne Performance-Einbußen"
  - "Steuerlogik: Kleinunternehmerregelung, verschiedene MwSt-Sätze, Reverse Charge korrekt abbilden"
  - "Offline-First Architektur: Konfliktauflösung bei gleichzeitigen Änderungen im Team"

learnings:
  - "Electric SQL und TanStack DB ermöglichen echte Real-Time UX ohne WebSocket-Infrastruktur selbst zu bauen"
  - "Row-Level Security in PostgreSQL ist mächtig, aber die Policy-Logik muss von Anfang an geplant werden"
  - "Domain-Driven Design zahlt sich bei komplexer Steuerlogik aus - separierte Contexts für Invoicing, Expenses, Tax"
  - "Optimistische Updates erfordern sorgfältige Rollback-Strategien bei Server-Fehlern"
  - "Deutsche Steuervorschriften sind komplex - enge Zusammenarbeit mit Steuerberater für korrekte Implementierung"
---
