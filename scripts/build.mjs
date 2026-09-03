import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import worker from "../src/index.js";

await rm(new URL("../dist", import.meta.url), { recursive: true, force: true });
await mkdir(new URL("../dist", import.meta.url), { recursive: true });

const response = await worker.fetch(new Request("https://gns-success.com/"));
if (!response.ok) throw new Error(`Homepage render failed: ${response.status}`);

await writeFile(new URL("../dist/index.html", import.meta.url), await response.text());
await cp(new URL("../public/og.png", import.meta.url), new URL("../dist/og.png", import.meta.url));
