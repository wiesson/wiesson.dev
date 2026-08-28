import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import { fileURLToPath } from "url";

export default defineConfig({
  // Kanonischer Host. wiesson.dev liefert dieselbe Seite aus; ohne
  // canonical-Tag konkurrieren beide Domains um dieselben Inhalte.
  site: "https://www.arnewiese.de",
  output: "static",
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        $lib: fileURLToPath(new URL("./src/lib", import.meta.url)),
        $components: fileURLToPath(new URL("./src/components", import.meta.url)),
        $utils: fileURLToPath(new URL("./src/utils", import.meta.url)),
        $types: fileURLToPath(new URL("./src/types", import.meta.url)),
        $layouts: fileURLToPath(new URL("./src/layouts", import.meta.url)),
      },
    },
  },
});
