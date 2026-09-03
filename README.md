# GNS — Global Network of Success

The production website for `gns-success.com`.

## Source of truth

This GitHub repository is the only source of truth for the website. The complete, editable homepage is [`index.html`](./index.html). Images live in [`public`](./public).

The official circular GNS logo is stored in `public` as an SVG, favicon, 48–512 px web icons, and a 2000 px master PNG. The header, footer, browser icons, Apple touch icon, and web-app manifest all use these repository assets.

Cloudflare Pages is connected directly to this repository and deploys the `main` branch automatically. Cloudflare runs the build command and publishes the generated `dist` directory; website content is never authored or maintained inside Cloudflare.

## Cloudflare Pages settings

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

## Local preview

Run `npm run build`, then preview the `dist` directory with any static web server.
