# Projekt-Beschreibungs-Prompt

Starte diesen Prompt in einem Projekt, um alle Informationen für meine Portfolio-Website zu sammeln.

---

Analysiere dieses Projekt und erstelle eine Beschreibung für meine Portfolio-Website (arnewiese.de).

## Zu sammelnde Informationen

1. **Projekt-Name und URL** (falls vorhanden)
2. **Einzeiler** (max. 120 Zeichen, sachlich, keine Marketing-Sprache)
3. **Problem** (Welches Problem löst das Projekt? Für wen?)
4. **Lösung** (Wie löst das Projekt das Problem? Technischer Ansatz)
5. **Tech-Stack** (Frameworks, Libraries, Services - als Liste)
6. **Status** (live | beta | mvp | in-development | coming-soon)
7. **Learnings** (Was habe ich durch dieses Projekt gelernt? 3-5 Punkte)
8. **Challenges** (Welche technischen Herausforderungen gab es? 3-5 Punkte)
9. **Results** (Optional: Messbare Ergebnisse als value/metric Paare)

## Tonalität

- Sachlich, neutral, professionell
- Keine Superlative ("revolutionär", "bahnbrechend", "einzigartig")
- Ehrlich über den Entwicklungsstand
- Fokus auf Lernerfahrungen, nicht auf "Erfolge"
- Erste Person vermeiden wo möglich

## Status-Definitionen

- `live` - Produktiv im Einsatz, stabil, hat echte Nutzer
- `beta` - Funktionsfähig, aber noch in aktiver Entwicklung mit bekannten Einschränkungen
- `mvp` - Minimum Viable Product, funktioniert für den Hauptanwendungsfall
- `in-development` - Wird aktiv entwickelt, noch nicht nutzbar
- `coming-soon` - Geplant, aber noch nicht begonnen

## Output-Format

Gib mir ein fertiges Markdown im Format der Content-Collection:

```markdown
---
title: Projektname
intro: Kurze sachliche Beschreibung (max 120 Zeichen)
url: https://...
status: mvp
featured: true
role: Gründer & Lead Developer
timeline: 2024 - heute

technologies:
  - Framework 1
  - Library 2
  - Service 3

problem: |
  Beschreibung des Problems...

solution: |
  Beschreibung der Lösung...

results:
  - value: "X"
    metric: Beschreibung

architecture: |
  Technische Architektur...

challenges:
  - "Challenge 1"
  - "Challenge 2"

learnings:
  - "Learning 1"
  - "Learning 2"
---
```

## Beispiel für sachlichen Ton

Statt:
> "Revolutionäre KI-Plattform, die die Immobilienbranche transformiert"

Besser:
> "KI-Anwendung für Bildbearbeitung von Immobilienfotos. Virtual Staging und Declutter mit Google Gemini."

Statt:
> "Spart Stunden manueller Arbeit und ermöglicht 10x mehr Produktivität"

Besser:
> "Automatisiert das tägliche Prüfen von Makler-Websites durch Crawling und KI-Extraktion."
