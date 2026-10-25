# Dr. Kobros Foundation

The Snake Oil Company. A hobby project originating from my times at Igglo, 2007-2009. Imaginary context for lots of my dev stuff.

## Prod

Visit [https://www.dr-kobros.com](https://www.dr-kobros.com)

## Development

- `cp .env.example .env`
- `docker compose up -d mongo` (MongoDB on localhost:27017)
- `pnpm i` (pnpm 12 brings Node 26 by itself: `devEngines` in `package.json`)
- `pnpm dev`
- Before pushing: `pnpm check` (typecheck, oxlint, oxfmt, build)

## Deploy

`docker compose up -d --build` on the server: the site (`127.0.0.1:3000`, behind Caddy) and
MongoDB (`127.0.0.1:27017`, never public).
