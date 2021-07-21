import { readFileSync, writeFileSync } from "fs";
import Critters from "critters";

const htmlFilePath = "dist/index.html";

const critters = new Critters({ path: "dist/" });

const f = readFileSync(htmlFilePath);

const result = await critters.process(f.toString());
writeFileSync(htmlFilePath, result);
