# chofito.github.io

Personal site for Rodolfo "Chofito" Robles — a Cursor-inspired editor window with a terminal demo and an expanded bio.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/docs/installation/using-vite) via `@tailwindcss/vite`

## Local development

```bash
bun install
bun run dev
```

## Lint & format (Biome)

```bash
bun run check        # lint + format check
bun run check:fix    # apply safe fixes and format
bun run lint         # lint only
bun run format       # format only
```

Install the [Biome VS Code extension](https://biomejs.dev/reference/vscode/) for format-on-save (`.vscode/settings.json` is included).

## Customize content

**Bio tab** — [`src/data/profile.ts`](src/data/profile.ts) → rendered by [`src/data/bioCode.ts`](src/data/bioCode.ts)

**Terminal** — [`src/data/terminal/config.ts`](src/data/terminal/config.ts) (copy + rich markup/shaders) → wired in [`src/data/terminal/script.ts`](src/data/terminal/script.ts)

Link URLs are shared from `profile.links` for the `ls ./links` command only.

### Terminal rich markup

Use `rich` template tags in `script.ts` (parsed by [`parseRich.ts`](src/data/terminal/parseRich.ts)):

| Markup | Effect |
|--------|--------|
| `**text**` | bold |
| `*text*` | italic |
| `~~text~~` | strikethrough |
| `{dim:text}` | dim color |
| `{amber:text}` | amber accent |
| `{accent:text}` | purple accent |
| `{shimmer:text}` | animated gradient |
| `{glow:text}` | pulsing glow |
| `{glitch:text}` | glitch jitter |
| `{loader:dots}` | inline `.` / `..` / `...` spinner |
| `{loader:braille}` | braille spinner |
| `{loader:bar}` | `[====    ]` progress bar |

**Builders** in [`builders.ts`](src/data/terminal/builders.ts):

```ts
cmd('$ whoami', rich`**${profile.alias}** — ${profile.name}`)
cmd('$ ls ./links', links())
cmd('$ history --oneline', list(profile.journey))
cmd('$ neofetch --mini', loader('braille', 'fetching...'), ...neofetch())
```

## Deploy

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`).

One-time setup in GitHub repo settings:

1. **Settings → Pages → Build and deployment → Source** → **GitHub Actions**
2. Push to `main`

## Build

```bash
bun run build
bun run preview
```
