---
title: "5 Jahre eigenes Tool, jetzt SaaS: Die Easy Invoice Story"
description: Wie aus einem persönlichen Rechnungstool nach 5 Jahren und mehreren Refactorings ein SaaS für Freelancer wurde.
tags:
  - SaaS
  - Product Development
  - Freelancing
publishedAt: 2025-11-29
---

2020 hatte ich ein Problem. Als Freelancer brauchte ich Rechnungen. Aber die Tools am Markt waren entweder zu teuer (Lexoffice ab 8€, sevDesk ab 9€) oder zu kompliziert für meine Bedürfnisse.

Also tat ich, was Entwickler eben tun: Ich baute mir mein eigenes Tool.

## Die erste Version: "Hauptsache es funktioniert"

Die erste Version war simpel. Ein React-Frontend, ein Node-Backend, irgendeine Datenbank. Es generierte PDFs. Es speicherte Kunden. Es reichte.

Ich nutzte es. Jeden Monat. Für meine eigenen Rechnungen.

## Refactoring #1: Der Stack muss besser werden

Nach einem Jahr nervte mich der Code. Die Architektur war chaotisch. Also refactored ich komplett. Neuer Stack, sauberere Struktur. Das Tool wurde besser. Ich nutzte es weiter.

## Refactoring #2: Features, die ich wirklich brauche

Ein weiteres Jahr später kam der nächste Umbau. Diesmal mit Expense-Tracking. Ich wollte nicht nur Rechnungen schreiben, sondern auch meine Ausgaben erfassen. Für die Steuer. Für den Überblick.

Das Tool wuchs. Wurde nützlicher. Blieb aber mein persönliches Werkzeug.

## Der Opus 4.5 Moment

2025 änderte sich etwas. Mit Claude Opus 4.5 und modernen AI-Coding-Tools wurde klar: Ich kann dieses Tool in Wochen auf ein Level bringen, für das früher Monate nötig waren.

Gleichzeitig dachte ich: Warum nutze nur ich das? Das Problem – teure, überladene Rechnungstools – haben doch alle Freelancer.

Also beschloss ich: Easy Invoice wird öffentlich.

## Was Easy Invoice heute kann

- **Rechnungen erstellen** mit allem, was dazugehört: Positionen, Steuersätze, Rabatte, automatische Nummernvergabe
- **Status-Tracking**: Entwurf, Gesendet, Bezahlt, Überfällig
- **Expense-Tracking** mit 12 Kategorien und Steuerabzugsfähigkeit
- **Financial Dashboard**: Umsatz-Übersicht, Top-Kunden, Monatsberichte
- **Team-Funktionalität**: Mehrere Nutzer mit Rollen (Owner/Admin/Member)
- **PDF-Export** und E-Mail-Versand
- **DACH-optimiert**: Reverse Charge, QR-Codes für Überweisungen

Der Tech-Stack: TanStack Router, Convex als Realtime-Backend, shadcn/ui für die Komponenten.

## 8€/Monat – warum so günstig?

Ich nutze das Tool selbst. Es muss funktionieren, nicht verkaufen.

Die meisten Konkurrenten laden Features drauf, die 90% der Freelancer nie brauchen. Buchhaltung, DATEV-Export, komplexe Workflows. Das kostet Entwicklung. Das kostet Support. Das kostet Geld.

Easy Invoice macht eine Sache gut: Rechnungen und Ausgaben für Freelancer. Nicht mehr, nicht weniger.

8€ deckt die Serverkosten und lässt mir etwas übrig. Fair für beide Seiten.

## Was als Nächstes kommt

- **Time Tracking** mit Desktop-Apps (der Toggl-Killer)
- **E-Invoicing** (XRechnung/ZUGFeRD) für die B2G-Pflicht ab 2025
- **Stripe Payment Links** für sofortige Kartenzahlung

Aber erstmal: Nutzer finden. Feedback sammeln. Besser werden.

---

**Testen?** [easyinvoice.de](https://easyinvoice.de) – kostenlos starten, 8€/Monat wenn es passt.
