import { readFileSync, writeFileSync } from "fs";
import Critters from "critters";

const indexHtmlFileLocation = "dist/index.html";

const critters = new Critters({ path: "dist/" });
const indexHtmlContent = readFileSync(indexHtmlFileLocation).toString();
const inlinedCssHtmlContent = await critters.process(indexHtmlContent);
writeFileSync(indexHtmlFileLocation, inlinedCssHtmlContent);
