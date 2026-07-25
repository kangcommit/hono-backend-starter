# Contributing

Thank you for your interest in contributing to this project!

This repository is a backend template designed to provide a clean, production-ready foundation for building REST APIs with Hono, TypeScript, and Prisma. Contributions that improve the template, documentation, developer experience, or code quality are welcome.

## Development Setup

### Prerequisites

* Node.js 24+
* pnpm
* PostgreSQL (or Docker)

### Install dependencies

```bash
pnpm install
```

### Configure the environment

```bash
cp .env.example .env
```

Update the environment variables as needed.

### Generate the Prisma Client

```bash
pnpm db:generate
```

### Run database migrations

```bash
pnpm db:migrate
```

### Start the development server

```bash
pnpm dev
```

# Development Workflow

1. Create a new branch from `main`.
2. Make focused, incremental changes.
3. Ensure all checks pass.
4. Open a Pull Request with a clear description of the changes.

# Code Style

This project uses:

* **Biome** for formatting and linting
* **TypeScript** with strict type checking
* **Conventional Commits** for commit messages

Before opening a Pull Request, run:

```bash
pnpm check
```

This command runs formatting, linting, type checking, and the test suite.

# Testing

Run all tests:

```bash
pnpm test:all
```

Generate a coverage report:

```bash
pnpm test:coverage
```

New features should include appropriate unit and/or integration tests whenever practical.

# Commit Messages

This project follows the Conventional Commits specification.

Examples:

```text
feat(posts): add post update endpoint

fix(auth): handle expired sessions

refactor(pagination): simplify sorting helper

docs: improve README

test(posts): add repository tests
```

# Pull Requests

When submitting a Pull Request:

* Keep changes focused on a single topic.
* Update documentation when behavior changes.
* Add or update tests when applicable.
* Ensure the project builds successfully.
* Ensure all checks pass before requesting review.

# Scope of Contributions

Contributions are especially welcome for:

* Improving the template architecture
* Enhancing developer experience
* Documentation improvements
* Testing improvements
* Performance optimizations
* Bug fixes

Large architectural changes should be discussed before implementation to ensure they align with the goals of the template.

# Questions and Suggestions

If you have questions, ideas, or suggestions for improving the template, feel free to open an issue or start a discussion.
