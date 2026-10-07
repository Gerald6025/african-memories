# Render and PostgreSQL deployment

Deploy the backend as a Render Docker web service from this repository.

## Backend

Set the service root directory to `backend` and use `backend/Dockerfile`.

Configure these variables in Render's Environment settings:

| Variable | Value |
| --- | --- |
| `DATABASE_URL` | Production PostgreSQL connection string with the provider's required SSL settings |
| `ADMIN_API_KEY` | Random secret of at least 32 characters |
| `FRONTEND_URL` | Exact live frontend origin; separate additional origins with commas |

Render supplies `PORT`; the API listens on it. Set the health check path to `/api/v1/ready`. The container applies committed Prisma migrations before starting. It does not import content automatically.

With managed PostgreSQL, including Neon, `POSTGRES_USER`, `POSTGRES_PASSWORD` and `POSTGRES_DB` are unnecessary on Render. Keep database credentials and the admin key in the backend environment.

## Frontend

Set this on the frontend host:

```dotenv
API_URL=https://YOUR-BACKEND-HOST/api/v1
```

If deploying the frontend on Render, use the repository root, build command `npm ci && npm run build` and start command `npm start -- -H 0.0.0.0 -p $PORT`.

Add your backend's media hostname to `next.config.ts` under `images.remotePatterns` if it differs from the configured host, allowing `/media/experiences/**`. Redeploy the frontend after configuration changes.

## Content and verification

Import reviewed content using [EXPERIENCES_IMPORT.md](EXPERIENCES_IMPORT.md), with the production database and media URL configured for the import command.

From the repository root:

```sh
node backend/scripts/check-cloud.mjs https://YOUR-BACKEND-HOST/api/v1
```

Then open `/adventures` on the frontend and select an activity. Backend photos are bundled in `backend/public/experiences` and persist across container restarts. New uploads and booking checkout are not implemented.
