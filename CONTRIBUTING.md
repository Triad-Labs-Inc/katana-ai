# Contributing to Katana

Thank you for your interest in contributing to Katana! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) >= 1.0.0
- [Git](https://git-scm.com/)

### Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/katana-ai.git
   cd katana-ai
   ```

3. **Add the upstream remote**
   ```bash
   git remote add upstream https://github.com/Triad-Labs-Inc/katana-ai.git
   ```

4. **Install dependencies**
   ```bash
   bun install
   ```

5. **Start development server**
   ```bash
   bun run dev
   ```

## Development Workflow

### Branching

- The default branch is `dev`
- Create feature branches from `dev`
- Use descriptive branch names: `feature/add-theme-support`, `fix/input-handling`, `docs/update-readme`

### Making Changes

1. **Create a new branch**
   ```bash
   git checkout dev
   git pull upstream dev
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style and patterns
   - Add comments where necessary

3. **Test your changes**
   ```bash
   # Run the app in development mode
   bun run dev
   
   # Build to ensure no compilation errors
   bun run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

   We follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Go to the [Katana repository](https://github.com/Triad-Labs-Inc/katana-ai)
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template
   - Submit for review

## Pull Request Guidelines

### Before Submitting

- [ ] Code compiles without errors (`bun run build`)
- [ ] Changes are tested locally
- [ ] Commit messages follow conventional commits format
- [ ] PR targets the `dev` branch

### PR Requirements

- Clear description of changes
- Link to related issue (if applicable)
- Screenshots for UI changes (if applicable)

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- Katana version (`kat --version`)
- Operating system and version
- Bun version (`bun --version`)
- Steps to reproduce the issue
- Expected vs actual behavior
- Error messages or logs (if any)

### Feature Requests

When requesting features, please include:

- Clear description of the feature
- Use case / problem it solves
- Potential implementation ideas (optional)

## Questions?

Feel free to open a [Discussion](https://github.com/Triad-Labs-Inc/katana-ai/discussions) for any questions.

---

Thank you for contributing to Katana!
