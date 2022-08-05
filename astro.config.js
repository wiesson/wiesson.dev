import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        $components: "src/components",
        $lib: "src/lib",
      },
    },
  },
  integrations: [preact(), tailwind()],
});
