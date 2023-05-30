import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from '@astrojs/image';

export default defineConfig({
  integrations: [preact(), tailwind(), image()],
});
