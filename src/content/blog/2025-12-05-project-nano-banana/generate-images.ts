#!/usr/bin/env npx ts-node

/**
 * Gemini Image Generator for Nano Banana
 *
 * Usage:
 *   GEMINI_API_KEY=your_key npx ts-node generate-images.ts
 *
 * Or with Deno:
 *   GEMINI_API_KEY=your_key deno run --allow-net --allow-write generate-images.ts
 */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-3-pro-image-preview";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;

interface ImagePrompt {
  filename: string;
  prompt: string;
}

const prompts: ImagePrompt[] = [
  {
    filename: "muenster-hero.webp",
    prompt: `A wide-angle landscape aquarelle painting of Münster Prinzipalmarkt and St. Lamberti Church at sunset. Soft watercolor bleed, loose brushwork, warm golden light, historic gabled houses, dreamy atmosphere, textured paper grain, white background fading at edges.`
  },
  {
    filename: "muenster-aasee.webp",
    prompt: `A wide-angle landscape aquarelle painting of cyclists on a path by the Aasee lake in Münster. Soft watercolor bleed, loose brushwork, warm golden light, peaceful lakeside scene, dreamy atmosphere, textured paper grain, white background fading at edges.`
  },
  {
    filename: "muenster-kreuzviertel.webp",
    prompt: `A wide-angle landscape aquarelle painting of typical red brick family homes in the Kreuzviertel, Münster. Soft watercolor bleed, loose brushwork, warm golden light, charming residential street, dreamy atmosphere, textured paper grain, white background fading at edges.`
  }
];

async function generateImage(prompt: ImagePrompt): Promise<void> {
  console.log(`Generating: ${prompt.filename}...`);

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt.prompt
            }
          ]
        }
      ],
      generationConfig: {
        responseModalities: ["image", "text"],
        imageSizeOptions: {
          aspectRatio: "16:9"
        }
      }
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error: ${response.status} - ${error}`);
  }

  const data = await response.json();

  // Extract image from response
  const parts = data.candidates?.[0]?.content?.parts;
  if (!parts) {
    throw new Error(`No parts in response for ${prompt.filename}`);
  }

  for (const part of parts) {
    if (part.inlineData?.mimeType?.startsWith("image/")) {
      const base64Data = part.inlineData.data;
      const buffer = Buffer.from(base64Data, "base64");

      // Write to file
      const fs = await import("fs/promises");
      await fs.writeFile(`./out/${prompt.filename}`, buffer);
      console.log(`✓ Saved: ${prompt.filename} (${buffer.length} bytes)`);
      return;
    }
  }

  throw new Error(`No image data in response for ${prompt.filename}`);
}

async function main() {
  if (!GEMINI_API_KEY) {
    console.error("Error: GEMINI_API_KEY environment variable is required");
    process.exit(1);
  }

  // Create output directory
  const fs = await import("fs/promises");
  await fs.mkdir("./out", { recursive: true });

  console.log(`Generating ${prompts.length} images...\n`);

  for (const prompt of prompts) {
    try {
      await generateImage(prompt);
    } catch (error) {
      console.error(`✗ Failed: ${prompt.filename}`, error);
    }

    // Rate limiting - wait 2 seconds between requests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log("\nDone!");
}

main();
