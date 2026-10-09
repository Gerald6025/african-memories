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

For Vercel, import the repository as a Next.js project with the repository root as the Root Directory. Keep the default build settings.

Set this on the frontend host:

```dotenv
API_URL=https://YOUR-BACKEND-HOST/api/v1
```

For the existing Render service, use `API_URL=https://african-memories-api-latest.onrender.com/api/v1` in Vercel's Production environment, and in Preview if preview deployments should use that same backend. Redeploy after changing environment variables.

`DATABASE_URL`, `ADMIN_API_KEY` and `FRONTEND_URL` belong on Render. The Vercel frontend does not read them. Set Render's `FRONTEND_URL` to your live Vercel origin, for example `https://your-project.vercel.app`; append a custom domain as a comma-separated origin when needed. Frontend pages fetch the API server-side using `API_URL`.

The homepage, experience listing and detail pages use the same backend price rules: a currently valid active Price record takes precedence, followed by `Activity.details.fromPrice` as a guide starting price. Without either, they display “Price on enquiry”. Descriptions, durations, categories, galleries, itineraries, FAQs and related experiences also come from the API; no frontend catalog is embedded.

If deploying the frontend on Render, use the repository root, build command `npm ci && npm run build` and start command `npm start -- -H 0.0.0.0 -p $PORT`.

Add your backend's media hostname to `next.config.ts` under `images.remotePatterns` if it differs from the configured host, allowing `/media/experiences/**`. Redeploy the frontend after configuration changes.

## Content and verification

Import reviewed content using [EXPERIENCES_IMPORT.md](EXPERIENCES_IMPORT.md), with the production database and media URL configured for the import command.

From the repository root:

```sh
node backend/scripts/check-cloud.mjs https://YOUR-BACKEND-HOST/api/v1
```

Then open `/adventures` on the frontend and select an activity. Backend photos are bundled in `backend/public/experiences` and persist across container restarts. New uploads and booking checkout are not implemented.

## Enquiry forms and email delivery

Deploy the backend revision containing EnquiriesModule and the enquiry migration. An older deployment returns HTTP 404 for POST /api/v1/enquiries. The Docker startup applies migrations before launching.

Set these variables in the backend Render environment, then redeploy:

| Variable | Purpose |
| --- | --- |
| RESEND_API_KEY | Secret API key from the Resend account |
| ENQUIRY_EMAIL_FROM | Sender on a verified Resend domain |
| ENQUIRY_EMAIL_TO | Business inbox receiving enquiries |

These belong on the backend, never in NEXT_PUBLIC variables. The visitor email is used as Reply-To. Saved enquiries are queued for notification, retried on failure, and marked sent only after the provider accepts the request. Without all three email settings, enquiries are saved but notification delivery is disabled. Provider acceptance does not verify inbox delivery.

Run the cloud check after redeployment. It submits an empty, invalid payload and expects HTTP 400 to verify the public enquiry endpoint without creating records or sending email. For end-to-end verification, submit a real enquiry through the site and confirm its reference and receipt in the receiving inbox.
