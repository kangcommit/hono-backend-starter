# Hono Backend Template

A production-ready backend template built with **Hono**, **TypeScript**, and **Prisma** for developing scalable, maintainable, and type-safe REST APIs.

Whether you're building a personal project or starting a new backend service, this template provides a solid foundation with modern tooling and best practices. It includes authentication, request validation, API documentation, structured logging, Docker support, automated testing, and a module-driven architecture designed for long-term maintainability.

## Features

* 🚀 Hono framework with TypeScript
* 🏗️ Module-driven architecture
* 🔒 Authentication with Better Auth
* 🗄️ PostgreSQL with Prisma ORM
* ✅ Type-safe request validation using Zod
* 📖 OpenAPI documentation with Scalar
* 📄 Standardized API responses
* 📑 Pagination and sorting utilities
* 📝 Structured logging with Pino
* ⚙️ Environment variable validation
* 🧪 Unit and integration testing with Vitest
* 🐳 Docker and Docker Compose support
* 🔄 GitHub Actions CI
* 🎨 Biome for formatting and linting
* 🪝 Husky and lint-staged for Git hooks

## Tech Stack

| Category          | Technology       |
| ----------------- | ---------------- |
| Runtime           | Node.js          |
| Framework         | Hono             |
| Language          | TypeScript       |
| Database          | PostgreSQL       |
| ORM               | Prisma           |
| Authentication    | Better Auth      |
| Validation        | Zod              |
| API Documentation | OpenAPI + Scalar |
| Logging           | Pino             |
| Testing           | Vitest           |
| Code Quality      | Biome            |
| Containerization  | Docker           |
| CI/CD             | GitHub Actions   |

## Project Structure

```text
.
├── prisma/
├── src/
│   ├── auth/
│   ├── config/
│   ├── errors/
│   ├── lib/
│   ├── middleware/
│   ├── modules/
│   ├── openapi/
│   ├── pagination/
│   ├── response/
│   └── routes/
├── tests/
├── Dockerfile
├── docker-compose.yml
├── docker-compose.dev.yml
└── README.md
```

The project follows a **module-driven architecture**, where each feature owns its routes, schemas, and business logic. Shared infrastructure lives outside feature modules to encourage reuse and consistency.

# Rename the Template

After creating a project from this template, update the following values to match your application.

| Location                    | Update                                     |
| --------------------------- | ------------------------------------------ |
| `package.json`              | Change the project name                    |
| `README.md`                 | Change the project title and description   |
| `src/config/constants.ts`   | Update `APP_NAME`                          |
| `docker-compose.yml`        | Update the Compose project name            |

# Getting Started

## Prerequisites

* Node.js 24+
* pnpm
* PostgreSQL
* Docker (optional)

## Installation

```bash
git clone <repository-url>

cd hono-backend-template

pnpm install
```

## Environment Variables

Copy the example environment file.

```bash
cp .env.example .env
```

Configure the required environment variables.

| Variable             | Description                           |
| -------------------- | ------------------------------------- |
| `NODE_ENV`           | Application environment               |
| `LOG_LEVEL`          | Logger level                          |
| `PORT`               | Server port                           |
| `APP_URL`            | Public URL of the backend application |
| `DATABASE_URL`       | PostgreSQL connection string          |
| `BETTER_AUTH_SECRET` | Better Auth secret                    |
| `BETTER_AUTH_URL`    | Better Auth base URL                  |
| `CLIENT_URL`         | Frontend application URL              |

## Generate Prisma Client

```bash
pnpm db:generate
```

## Run Database Migrations

```bash
pnpm db:migrate
```

## Start the Development Server

```bash
pnpm dev
```

The API will be available at:

```text
<APP_URL>
```

# Docker

### Development

Start only the PostgreSQL database.

```bash
docker compose -f docker-compose.dev.yml up -d
```

### Production

Run the full application stack.

```bash
docker compose -f docker-compose.yml up --build
```

# API Documentation

Once the server is running:

| Resource              | URL                          |
| --------------------- | ---------------------------- |
| Scalar UI             | `<APP_URL>/api/docs`         |
| OpenAPI Specification | `<APP_URL>/api/openapi.json` |

# Authentication

Authentication is powered by **Better Auth**.

The template includes:

* Email and password authentication
* Session management
* Authentication middleware
* Current user helper
* Better Auth OpenAPI integration

Authorization is application-specific and should be implemented based on your project's requirements (for example, roles, permissions, or resource ownership).

# Testing

Run tests in watch mode.

```bash
pnpm test
```

Run unit tests.

```bash
pnpm test:unit
```

Run integration tests.

```bash
pnpm test:integration
```

Run all tests.

```bash
pnpm test:all
```

Generate a coverage report.

```bash
pnpm test:coverage
```

# Code Quality

Run Biome.

```bash
pnpm lint
```

Automatically fix formatting and lint issues.

```bash
pnpm lint:fix
```

Run the full verification suite.

```bash
pnpm check
```

Run TypeScript type checking.

```bash
pnpm typecheck
```

# Continuous Integration

GitHub Actions automatically performs:

* Dependency installation
* Prisma Client generation
* Linting
* Type checking
* Test execution with coverage
* Production build
* Docker image build

# Available Scripts

| Script                    | Description                           |
| ------------------------- | ------------------------------------- |
| `pnpm dev`                | Start the development server          |
| `pnpm build`              | Build the application                 |
| `pnpm start`              | Start the production server           |
| `pnpm db:generate`        | Generate Prisma Client                |
| `pnpm db:migrate`         | Run development migrations            |
| `pnpm db:deploy`          | Apply production migrations           |
| `pnpm db:studio`          | Open Prisma Studio                    |
| `pnpm test`               | Run tests in watch mode               |
| `pnpm test:unit`          | Run unit tests                        |
| `pnpm test:integration`   | Run integration tests                 |
| `pnpm test:all`           | Run all tests                         |
| `pnpm test:coverage`      | Generate a coverage report            |
| `pnpm lint`               | Run Biome                             |
| `pnpm lint:fix`           | Automatically fix formatting and lint issues |
| `pnpm check`              | Run the full verification suite       |
| `pnpm typecheck`          | Run TypeScript type checking          |

# Architecture

The template follows a module-driven architecture with a clear separation of concerns.

* **Routes** define HTTP endpoints and OpenAPI metadata.
* **Services** contain business logic.
* **Middleware** provides reusable request processing.
* **Shared infrastructure** (authentication, logging, pagination, responses, and utilities) is isolated from feature modules.

This structure keeps each feature self-contained while making shared functionality reusable across the application.

# Roadmap

* [x] Module-driven architecture
* [x] Better Auth integration
* [x] OpenAPI documentation
* [x] Standard API responses
* [x] Pagination and sorting utilities
* [x] Docker support
* [x] GitHub Actions CI
* [ ] Rate limiting middleware
* [ ] Example CRUD module
* [ ] Extended documentation
* [ ] Additional production middleware

# Contributing

Contributions are welcome. If you find a bug or have an idea for improvement, feel free to open an issue or submit a pull request.

# License

This project is licensed under the MIT License. See the LICENSE file for details.