# African Memories

Next.js frontend with a NestJS API and PostgreSQL database managed by Prisma.

## Requirements

- Node.js 22 and npm
- Docker with Linux containers, or an existing PostgreSQL database
- Internet access during the frontend build to download Google Fonts

## Local setup

Run commands from the repository root unless a folder is specified.

1. Copy `.env.example` to `.env.local` and `backend/.env.example` to `backend/.env`. On macOS/Linux use `cp`; in PowerShell use `Copy-Item`.
2. In `backend/.env`, set a local `POSTGRES_PASSWORD`, use the same password in `DATABASE_URL`, and replace `ADMIN_API_KEY` with a random secret of at least 16 characters. URL-encode special characters in database passwords.
3. Install and start the backend:

```sh
cd backend
npm ci
docker compose up -d --wait postgres
npx prisma generate
npx prisma migrate deploy
npm run dev
```

If using an existing PostgreSQL database, set `DATABASE_URL` to its connection string and skip Docker.

4. In a second terminal, start the frontend from the repository root:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The API runs at http://localhost:3001/api/v1; `/ready` checks database connectivity. The frontend's `API_URL` must include `/api/v1`.

A new database starts empty. To load the bundled experience catalog, follow [EXPERIENCES_IMPORT.md](EXPERIENCES_IMPORT.md). Published activities appear under `/adventures`. Other sections contain static content.

## Environment variables

| Service | Variable | Purpose |
| --- | --- | --- |
| Frontend | `API_URL` | Backend URL including `/api/v1`; server-side only |
| Frontend | `NEXT_PUBLIC_IMAGEKIT_URL` | Optional public ImageKit endpoint |
| Backend | `DATABASE_URL` | PostgreSQL connection string |
| Backend | `ADMIN_API_KEY` | Secret required in the `x-api-key` header for mutations |
| Backend | `FRONTEND_URL` | Allowed frontend origins, separated by commas |
| Backend | `PORT` | API port; defaults to 3001 |
| Import tooling | `MEDIA_BASE_URL` | Backend media URL used when importing detailed experiences |

Local Docker also reads `POSTGRES_USER`, `POSTGRES_PASSWORD` and `POSTGRES_DB` from `backend/.env`. Keep private environment files out of Git. Restart the frontend after changing its environment.

## Checks

From the repository root:

```sh
node scripts/check-api-fetch.cjs
node scripts/check-experience-data.cjs
npm run build
```

From `backend`:

```sh
npm run typecheck
npm test -- --runInBand
npm run build
```

For integration tests, set `TEST_DATABASE_URL` in your terminal to the test URL shown in `backend/.env.example`, then run from `backend`:

```sh
docker compose --profile test up -d --wait postgres-test
npm run migrate:test
npm run test:e2e
```

PowerShell: `$env:TEST_DATABASE_URL='postgresql://african_memories_test:local_test_only@localhost:5433/african_memories_test?schema=public'`.
macOS/Linux: use `export TEST_DATABASE_URL='...'`.
The test database name must contain `test`.

See [DATABASE_GUIDE.md](DATABASE_GUIDE.md) for content management and [CLOUD_DEPLOYMENT.md](CLOUD_DEPLOYMENT.md) for Render deployment.
