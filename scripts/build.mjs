import { cp, mkdir, rm } from "node:fs/promises";

await rm(new URL("../dist", import.meta.url), { recursive: true, force: true });
await mkdir(new URL("../dist", import.meta.url), { recursive: true });

await cp(new URL("../index.html", import.meta.url), new URL("../dist/index.html", import.meta.url));
await Promise.all([
  cp(new URL("../public/og.png", import.meta.url), new URL("../dist/og.png", import.meta.url)),
  cp(new URL("../public/gemma-serenity.jpg", import.meta.url), new URL("../dist/gemma-serenity.jpg", import.meta.url)),
  cp(new URL("../public/sascha-gorokhoff.jpg", import.meta.url), new URL("../dist/sascha-gorokhoff.jpg", import.meta.url)),
  cp(new URL("../public/_headers", import.meta.url), new URL("../dist/_headers", import.meta.url)),
]);
