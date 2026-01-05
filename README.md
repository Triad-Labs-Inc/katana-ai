<p align="center">
  <pre>
  ██╗  ██╗ █████╗ ████████╗ █████╗ ███╗   ██╗ █████╗
  ██║ ██╔╝██╔══██╗╚══██╔══╝██╔══██╗████╗  ██║██╔══██╗
  █████╔╝ ███████║   ██║   ███████║██╔██╗ ██║███████║
  ██╔═██╗ ██╔══██║   ██║   ██╔══██║██║╚██╗██║██╔══██║
  ██║  ██╗██║  ██║   ██║   ██║  ██║██║ ╚████║██║  ██║
  ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝
  </pre>
</p>

<p align="center">
  <strong>Sharp. Precise. Powerful.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/katana-ai"><img src="https://img.shields.io/npm/v/katana-ai.svg" alt="npm version"></a>
  <a href="https://github.com/Triad-Labs-Inc/katana-ai/blob/dev/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <a href="https://github.com/Triad-Labs-Inc/katana-ai"><img src="https://img.shields.io/badge/status-beta-orange.svg" alt="Status"></a>
</p>

---

A modern TUI (Terminal User Interface) application built with [OpenTUI](https://github.com/triad-labs-inc/opentui) and powered by [Bun](https://bun.sh).

> **Note:** Katana is currently in beta. Expect breaking changes as we iterate.

## Installation

```bash
# Using npm
npm install -g katana-ai

# Using bun
bun install -g katana-ai
```

## Usage

```bash
# Start Katana
kat

# Show version
kat --version

# Show help
kat --help
```

## Development

### Prerequisites

- [Bun](https://bun.sh) >= 1.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/Triad-Labs-Inc/katana-ai.git
cd katana-ai

# Install dependencies
bun install

# Run in development mode
bun run dev
```

### Build

```bash
# Build for current platform
bun run build

# Build compiled binary
bun run build:compile

# Build for specific platforms
bun run build:macos-arm64
bun run build:macos-x64
bun run build:linux-x64
bun run build:linux-arm64
bun run build:windows
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE) - Triad Labs Inc.
