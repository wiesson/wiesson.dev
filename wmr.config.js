import Critters from "critters";
import { defineConfig } from "wmr";

function inlineCss() {
  let cwd = ".";
  return {
    name: "inline-css-plugin",
    enforce: "post",
    configResolved(config) {
      cwd = config.cwd;
    },
    async generateBundle(_, bundle) {
      const critters = new Critters({});

      // @ts-ignore
      critters.readFile = async (f) => {
        const localPath = f.replace(`${cwd}/`, "");
        return bundle[localPath].source;
      };

      for (const id in bundle) {
        const asset = bundle[id];
        if (asset.type !== "asset" || !/\.html$/.test(asset.fileName)) continue;
        asset.source = await critters.process(asset.source);
      }
    },
  };
}

// @ts-ignore
export default defineConfig({
  // @ts-ignore
  plugins: [inlineCss()],
});
