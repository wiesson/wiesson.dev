import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import { fileURLToPath } from "url";

import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [tailwind(), svelte()],
  vite: {
    resolve: {
      alias: {
        $lib: fileURLToPath(new URL("./src/lib", import.meta.url)),
        $components: fileURLToPath(new URL("./src/components", import.meta.url)),
        $utils: fileURLToPath(new URL("./src/utils", import.meta.url)),
        $types: fileURLToPath(new URL("./src/types", import.meta.url)),
        $data: fileURLToPath(new URL("./src/data", import.meta.url)),
        $layouts: fileURLToPath(new URL("./src/layouts", import.meta.url)),
      },
    },
  },
});
