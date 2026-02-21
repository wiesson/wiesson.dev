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
  - Convex
  - Tailwind CSS 4
  - shadcn/ui
  - OpenAI API
  - Typst (PDF-Generierung)
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
  - Cashflow-Dashboard mit Echtzeit-Updates über Convex
  - Steuervorbereitung: EÜR- und UStVA-Übersichten
  - Steuerberater-Portal für delegierten Zugriff

  Ursprünglich mit Electric SQL und PostgreSQL gebaut – der Wechsel zu Convex erfolgte, um KI-Workflows enger in die Datenschicht zu integrieren und von Convex' reaktivem Backend zu profitieren.

results:
  - value: "12"
    metric: Features implementiert
  - value: "3"
    metric: Features in Early Access
  - value: "50+"
    metric: Datenbank-Migrationen

architecture: |
  **Multi-Tenancy:** Organizations als Root-Entity in Convex. Jeder Workspace hat eigene Settings für Steuerkonfiguration.

  **Real-Time Sync:** Convex als reaktives Backend ersetzt traditionelles Polling. Änderungen werden automatisch an alle verbundenen Clients gepusht. TanStack Query cached lokal, Convex synchronisiert den Server-State.

  **Steuer-Compliance:** Rechnungen sind nach Erstellung unveränderbar. Geldbeträge werden als Cents (Integer) gespeichert. Fortlaufende Rechnungsnummern mit Unique Constraint pro Organisation.

  **KI-Integration:** OpenAI für Ausgaben-Kategorisierung und natürlichsprachliche Abfragen der Geschäftsdaten. Convex Actions ermöglichen nahtlose KI-Workflows direkt in der Datenschicht.

challenges:
  - "Migration Electric SQL → Convex: Datenschicht komplett umgebaut, um KI-Workflows enger zu integrieren"
  - "GoBD-Compliance: Unveränderbarkeit von Rechnungen erzwingen, ohne Flexibilität für Stornos zu verlieren"
  - "Multi-Tenancy: Workspace-Isolation in Convex ohne Performance-Einbußen"
  - "Steuerlogik: Kleinunternehmerregelung, verschiedene MwSt-Sätze, Reverse Charge korrekt abbilden"
  - "Real-Time Sync: Konfliktauflösung bei gleichzeitigen Änderungen im Team"

learnings:
  - "Electric SQL + Postgres war solide, aber Convex' reaktives Backend und integrierte KI-Actions haben den Wechsel gerechtfertigt"
  - "Convex vereinfacht Real-Time drastisch – kein WebSocket-Setup, kein Polling, kein Cache-Invalidation"
  - "Domain-Driven Design zahlt sich bei komplexer Steuerlogik aus - separierte Contexts für Invoicing, Expenses, Tax"
  - "Optimistische Updates erfordern sorgfältige Rollback-Strategien bei Server-Fehlern"
  - "Deutsche Steuervorschriften sind komplex - enge Zusammenarbeit mit Steuerberater für korrekte Implementierung"
---
