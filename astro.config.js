import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [preact(), tailwind()],
});
