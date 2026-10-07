# Backend cloud deployment and frontend fetching

The configured backend is `https://african-memories-api-latest.onrender.com/api/v1`, connected to the linked Neon production database. New Docker images must be activated in Render with **Manual Deploy → Deploy latest reference**. The supplied detailed catalog requires the new `Activity.details` migration and `node backend/scripts/import-experience-details.cjs` after that deployment. See [EXPERIENCES_IMPORT.md](./EXPERIENCES_IMPORT.md).

## Portable Docker image

The built image is named `african-memories-api:latest`. Its portable export is `artifacts/african-memories-api.tar` when built and saved locally. It contains the API and migrations; configure PostgreSQL separately.

Load it on another Linux-container Docker installation:

```powershell
docker load -i artifacts/african-memories-api.tar
docker run -d --name african-memories-api --restart unless-stopped --env-file backend/.env.docker -p 3001:3001 african-memories-api:latest
```

Create `backend/.env.docker` privately with `DATABASE_URL`, `ADMIN_API_KEY`, `FRONTEND_URL` and `PORT=3001`. Use your cloud database URL, or `host.docker.internal` instead of `localhost` when connecting to PostgreSQL exposed on this Windows host. Inside the API container, `localhost` refers to the API container itself. Never include this private environment file in the image.

After starting the API, verify it:

```powershell
node backend/scripts/check-cloud.mjs http://localhost:3001/api/v1
```

To rebuild and export from the project root:

```powershell
docker build -t african-memories-api:latest ./backend
New-Item -ItemType Directory -Force artifacts
docker save -o artifacts/african-memories-api.tar african-memories-api:latest
```

The backend is prepared for a Docker-compatible host with managed PostgreSQL. No cloud resources have been provisioned by this change. Provider/account selection and the deployed URL are still required.

## Backend service

Connect this repository to your cloud host. Set the service root to `backend`, use its `Dockerfile`, and configure these private service variables:

| Variable | Value |
| --- | --- |
| `DATABASE_URL` | Your managed PostgreSQL connection string, with the TLS settings required by your provider |
| `ADMIN_API_KEY` | A new random secret of at least 32 characters |
| `FRONTEND_URL` | Your exact frontend origin, e.g. `https://www.example.com`; separate additional origins with commas |
| `PORT` | Host-provided port, or `3001` if the host requires an explicit value |

Use `/api/v1/ready` for the health check. The container generates Prisma during build, applies committed migrations before starting, then listens on `0.0.0.0`. A migration failure prevents startup. Existing records are preserved; it does not seed or import sample content automatically. Enable backups in your database provider before using real content.

The Docker build context must be `backend`. To build locally from the project root:

```powershell
docker build -t african-memories-api ./backend
```

The image retains build tooling so the pinned Prisma CLI can execute migrations; never put secrets into image build arguments or commit environment files.

## Frontend connection

Set this variable in your Next.js hosting environment, then redeploy the frontend:

```dotenv
API_URL=https://YOUR-BACKEND-HOST/api/v1
```

`API_URL` is used on the server and takes precedence over the older `NEXT_PUBLIC_API_URL`. Include `/api/v1`. Keep database credentials and the admin key exclusively in the backend environment. For a local frontend fetching cloud data, set the same URL in `.env.local` and restart Next.js.

The homepage, adventure list and adventure detail fetch fresh published activities, prices and availability. Accommodation, destination and blog content remain static; deployment does not create missing database models or booking functionality.

## Verify the deployed service

Run from the project root:

```powershell
node backend/scripts/check-cloud.mjs https://YOUR-BACKEND-HOST/api/v1
```

This verifies database readiness, the published list and a detail response when records exist. Then visit `/adventures` on your frontend and open a listed activity. Refresh after a database change to confirm it reaches the frontend. An empty list is valid for a new database; migrate/import your reviewed activity content separately using [EXPERIENCES_IMPORT.md](./EXPERIENCES_IMPORT.md), with the cloud database connection configured locally. Do not assume local Docker records are copied to cloud PostgreSQL.

For Render, configure a Docker web service and managed PostgreSQL using its [Docker deployment guide](https://render.com/docs/docker) and [health check documentation](https://render.com/docs/health-checks). Review the chosen service costs in your account before creating resources.
