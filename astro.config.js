import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  integrations: [preact(), tailwind()],
});
