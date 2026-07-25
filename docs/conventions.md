# Conventions

This document describes the conventions used throughout the project. Following these conventions helps keep the codebase consistent, predictable, and easy to maintain.

---

# File Naming

Use **kebab-case** for all file names.

Examples:

```text
request-id.ts
require-auth.ts
current-user.ts
```

Avoid:

```text
requestId.ts
RequestId.ts
request_id.ts
```

---

# Directory Organization

Feature code belongs inside `src/modules`.

```text
src/modules/
├── posts/
├── users/
└── categories/
```

Shared infrastructure belongs outside feature modules.

Examples:

* `auth/`
* `config/`
* `errors/`
* `lib/`
* `middleware/`
* `openapi/`
* `pagination/`
* `response/`

---

# Module Structure

Each feature should own everything it needs.

Example:

```text
posts/
├── constants.ts
├── dto.ts
├── filters.ts
├── repository.ts
├── router.ts
├── routes.ts
├── schema.ts
└── service.ts
```

Not every module must contain every file. Add files only when they provide value.

---

# Import Style

Prefer relative imports within a feature.

Example:

```ts
import { createPostSchema } from "./schema.js";
```

Import shared infrastructure from its dedicated directory.

```ts
import { prisma } from "../../lib/prisma.js";
```

Always include the `.js` extension when importing local modules.

---

# Route Design

Use plural resource names.

Examples:

```text
GET    /posts
GET    /posts/:id
POST   /posts
PATCH  /posts/:id
DELETE /posts/:id
```

Keep routes RESTful and resource-oriented.

---

# Validation

Validate all request data using Zod.

Validation should happen before business logic is executed.

---

# Business Logic

Business rules belong in services.

Avoid placing business logic inside:

* routers
* repositories
* middleware

---

# Database Access

Repositories are responsible for all Prisma interaction.

Services should not execute Prisma queries directly.

---

# Error Handling

Throw application-specific errors rather than returning error objects.

Use the provided HTTP error classes whenever possible.

Unexpected errors are handled by the global error middleware.

---

# API Responses

Return standardized payloads.

Single resource:

```json
{
  "data": {}
}
```

Collection:

```json
{
  "data": [],
  "meta": {}
}
```

Avoid returning raw database objects directly.

---

# Pagination

Use the shared pagination utilities.

Supported features include:

* page
* limit
* sorting

Feature modules should reuse the shared pagination helpers instead of implementing their own.

---

# Logging

Use the shared logger.

Avoid using `console.log()` inside application code.

---

# Authentication

Authentication is handled through Better Auth.

Use the provided middleware and helpers instead of reading session data directly.

Authorization should be implemented using reusable middleware and permission helpers.

---

# Testing

Place tests under the `tests` directory.

Recommended structure:

```text
tests/
├── unit/
├── integration/
├── helpers/
└── mocks/
```

Keep test helpers reusable and avoid duplicating setup logic.

---

# Environment Variables

Validate all environment variables during application startup.

Never access `process.env` directly outside the environment configuration.

---

# Commits

Follow the Conventional Commits specification.

Examples:

```text
feat(posts): add create endpoint
fix(auth): handle expired sessions
refactor(pagination): simplify sorting helper
docs: improve architecture guide
test(posts): add service tests
```

---

# General Guidelines

* Keep modules focused on a single responsibility.
* Prefer composition over duplication.
* Reuse shared infrastructure whenever possible.
* Keep functions small and easy to understand.
* Write code that is easy to test.
* Favor clarity over cleverness.
