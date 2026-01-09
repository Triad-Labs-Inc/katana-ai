# KATANA

**Generated:** 2026-01-08 | **Commit:** f4f73ba | **Branch:** dev

## OVERVIEW

Bun-powered TUI (Terminal User Interface) application built with React and OpenTUI. CLI tool distributed as npm package (`katana-ai`) and cross-platform binaries.

## STRUCTURE

```
katana/
├── src/index.tsx    # Entire application (single file)
├── bin/katana.js    # CLI entry → imports dist/
├── dist/            # Build output (git-ignored in prod)
└── package.json     # Scripts, deps, bin config
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| App logic & UI | `src/index.tsx` | Everything is here |
| CLI args | `src/index.tsx:8-17` | yargs config |
| TUI components | `src/index.tsx:32-87` | App() function |
| Add CLI command | `bin/katana.js` | Bun shebang wrapper |
| Build config | `package.json:scripts` | Cross-platform targets |
| TS config | `tsconfig.json` | Strict mode, bundler resolution |

## CODE MAP

| Symbol | Type | Location | Role |
|--------|------|----------|------|
| App | Component | `src/index.tsx:32-87` | Main TUI layout |
| createCliRenderer | Function | `src/index.tsx` | TUI renderer setup |
| createRoot | Function | `src/index.tsx` | App root container |
| yargs | Config | `src/index.tsx:8-17` | CLI argument parsing |

## CONVENTIONS

- **Runtime**: Bun only (not Node.js)
- **JSX**: Custom `@opentui/react` import source (not standard React)
- **Module**: ESM (`"type": "module"`)
- **Strict TS**: Enabled with `noUncheckedIndexedAccess`, `noImplicitOverride`
- **Commits**: Conventional commits (`feat:`, `fix:`, `docs:`, etc.)
- **Branch**: Work from `dev`, not `main`

## ANTI-PATTERNS

- No Node.js APIs - use Bun equivalents
- No `as any` or `@ts-ignore`
- No tests exist yet - manual testing via `bun run dev`

## UNIQUE STYLES

- Single-file architecture (entire app in one TSX)
- OpenTUI primitives: `<box>`, `<text>`, `<input>` (not HTML)
- TextAttributes enum for styling: `TextAttributes.BOLD`
- Renderer pattern: `createCliRenderer()` → `createRoot()` → `render()`
- Bun shebang CLI wrapper (`bin/katana.js`) importing dist/

## COMMANDS

```bash
bun install              # Install deps
bun run dev              # Dev mode (watch)
bun run build            # Build to dist/
bun run build:compile    # Single binary

# Cross-platform
bun run build:macos-arm64
bun run build:macos-x64
bun run build:linux-x64
bun run build:linux-arm64
bun run build:windows
```

## NOTES

- **Beta status**: Expect breaking changes
- **No CI**: No GitHub Actions workflows
- **No tests**: Manual testing only
- **Flat src/**: Intentionally minimal - expand as needed
