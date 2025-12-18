---
title: "gnb: Mein Deno CLI-Tool für Gemini Bildgenerierung"
description: "Ein minimales CLI-Tool für AI-Bildgenerierung mit Gemini 3 Pro – global installierbar, überall nutzbar."
image: ./gnb-cli-hero.webp
tags:
  - Deno
  - CLI
  - AI
  - Gemini
publishedAt: 2025-12-06
draft: false
---

Beim Arbeiten an [Project Nano Banana](/blog/project-nano-banana) brauchte ich ständig Bilder zu generieren. Jedes Mal die Gemini-API manuell aufrufen? Zu umständlich. Also habe ich mir ein kleines CLI-Tool gebaut: **gnb** (Gemini Nano Banana).

## Das Problem

AI-Bildgenerierung ist mächtig, aber der Workflow nervt:

1. Browser öffnen
2. In die API-Konsole navigieren
3. Prompt eingeben
4. Bild herunterladen
5. Umbenennen und verschieben

Für ein einzelnes Bild? Okay. Für 50 Bilder pro Region? Nein danke.

## Die Lösung: Ein Deno CLI

Mit Deno kann ich ein TypeScript-Script global installieren und überall nutzen:

```bash
gnb -p "A watercolor painting of Münster" -o muenster.png
```

Fertig. Ein Befehl, ein Bild.

## Installation

**1. Deno installieren** (falls noch nicht vorhanden):

```bash
curl -fsSL https://deno.land/install.sh | sh
```

**2. API-Key konfigurieren:**

```bash
mkdir -p ~/.config/gnb
echo "GEMINI_API_KEY=your_key_here" > ~/.config/gnb/.env
```

**3. gnb global installieren:**

```bash
deno install --global --allow-net --allow-write --allow-env --allow-read \
  --name gnb \
  ~/Dev/gnb/main.ts
```

## Verwendung

```bash
# Einfaches Bild generieren
gnb -p "Architectural sketch of Berlin" -o berlin.png

# Mit langem Prompt
gnb -p "A wide-angle landscape aquarelle painting style, soft watercolor bleed, loose brushwork of the historic Prinzipalmarkt in Münster at sunset." -o muenster-prinzipalmarkt.png

# Hilfe anzeigen
gnb --help
```

## Der Code

Das Script ist bewusst minimal gehalten (~100 Zeilen):

```typescript
import { parseArgs } from "jsr:@std/cli/parse-args";
import { load } from "jsr:@std/dotenv";

const CONFIG_PATH = `${Deno.env.get("HOME")}/.config/gnb/.env`;
const MODEL = "gemini-3-pro-image-preview";

async function getApiKey(): Promise<string> {
  try {
    const env = await load({ envPath: CONFIG_PATH });
    if (env.GEMINI_API_KEY) return env.GEMINI_API_KEY;
  } catch {
    /* fallback to env */
  }

  const key = Deno.env.get("GEMINI_API_KEY");
  if (key) return key;

  console.error("Error: GEMINI_API_KEY not found.");
  Deno.exit(1);
}

async function generateImage(
  prompt: string,
  apiKey: string
): Promise<Uint8Array> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ["image", "text"] },
    }),
  });

  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts;

  for (const part of parts) {
    if (part.inlineData?.mimeType?.startsWith("image/")) {
      return Uint8Array.from(atob(part.inlineData.data), (c) =>
        c.charCodeAt(0)
      );
    }
  }
  throw new Error("No image data");
}
```

**Warum Deno?**

- Kein `package.json`, keine `node_modules`
- TypeScript out of the box
- `deno install` für globale CLIs
- Sichere Permissions (`--allow-net`, `--allow-write`)

## Ausblick: Was noch kommen könnte

Das Tool ist aktuell absichtlich minimal. Aber die Gemini API kann mehr:

**Aspect Ratio:**

```bash
gnb -p "..." -o out.png --aspect 16:9
```

**Style Presets:**

```bash
gnb -p "..." -o out.png --style aquarelle
gnb -p "..." -o out.png --style bauhaus
```

**Batch Mode (mehrere Prompts aus Datei):**

```bash
gnb --batch prompts.json --out-dir ./images/
```

**Bild als Input (Image-to-Image):**

```bash
gnb -p "Make this more colorful" -i input.png -o output.png
```

Aber vorerst gilt: Keep it simple. Ein Prompt rein, ein Bild raus.

---

**Der vollständige Code:** [~/Dev/gnb/main.ts](https://github.com/wiesson/gnb) _(coming soon)_
