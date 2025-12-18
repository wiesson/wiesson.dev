---
title: "Der Mythos der 2 Stunden"
description: Was wirklich passiert, bevor ich ein Tool 'in 2 Stunden' baue – und warum diese Zahl nur die halbe Wahrheit ist.
image: ./zwei-stunden-hero.webp
tags:
  - AI
  - Product Development
  - Behind the Scenes
draft: true
---

"Ich habe dieses Tool in 2 Stunden gebaut."

Stimmt. Aber es ist nur die halbe Wahrheit.

## Was in den 2 Stunden passiert

Die KI tippt. Ich reviewe. Wir iterieren. Am Ende steht ein funktionierendes Produkt.

Das ist der sichtbare Teil.

## Was *vor* den 2 Stunden passiert

Bevor ich den ersten Prompt schreibe, habe ich bereits:

### 1. Das Datenbankschema im Kopf

Nicht weil ich es aufgeschrieben habe. Sondern weil ich nach Jahren weiß, welche Entitäten ich brauche. Bei einer Rechnungs-App zum Beispiel:

- Was passiert bei einer Storno-Rechnung?
- Wie speichere ich Versionen, wenn sich Kundenadresse ändert?
- Welche Felder brauche ich für die Steuererklärung?

Diese Fragen beantworte ich nicht während des Codings. Ich beantworte sie aus Erfahrung.

### 2. Die Edge Cases

Jedes echte Produkt hat sie. Die Fälle, an die niemand denkt – bis sie passieren:

- User löscht seinen Account, hat aber noch offene Rechnungen
- Zwei Tabs offen, gleichzeitig bearbeiten
- Internet bricht mitten im Payment ab

Die KI kennt diese Cases nicht. Sie baut den Happy Path. Ich muss wissen, wo der Happy Path endet.

### 3. Die User Experience

Nicht das Design. Die *Flows*:

- Wo verliere ich User?
- Welcher Schritt fühlt sich nach Arbeit an?
- Was kann ich weglassen, ohne dass es auffällt?

Das kommt nicht aus Prompts. Das kommt aus Jahren, in denen ich Nutzer beobachtet habe.

## Die unsichtbare Arbeit

Wenn ich "2 Stunden" sage, meine ich eigentlich:

- 2 Stunden aktives Coding
- \+ 10 Jahre implizites Wissen
- \+ hunderte gescheiterte und erfolgreiche Projekte
- \+ tausende Gespräche mit echten Nutzern

Die KI multipliziert das alles. Aber sie kann es nicht ersetzen.

## Was das für dich bedeutet

Wenn du schneller bauen willst, ist die Antwort nicht "bessere Prompts".

Die Antwort ist: **Mehr Produkte bauen. Mehr scheitern. Mehr lernen.**

Die 2 Stunden kommen von alleine – wenn du die 10 Jahre davor investiert hast.

---

*Dieser Post ist Teil einer Serie über AI-unterstützte Produktentwicklung. [Teil 1: Vibe Coding ist nicht genug](/blog/vibe-coding)*
