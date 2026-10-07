# Database and content management

The frontend reads published activities from the NestJS API. Prisma manages the PostgreSQL schema.

## Migrations

From `backend`, after configuring `backend/.env`:

```sh
npx prisma generate
npx prisma migrate deploy
npx prisma migrate status
```

For local schema development, edit `prisma/schema.prisma` and run `npx prisma migrate dev --name describe_change`. Commit the schema and generated migration. Deployments apply committed migrations with `migrate deploy`.

## Edit content

From `backend`, run `npx prisma studio` to open the database editor.

- **Activity:** name, unique slug, category, description, image, optional details and publication status. Use DRAFT while editing and PUBLISHED to show it publicly.
- **Price:** link `activityId`, set amount/currency, a valid date range and `isActive`.
- **Availability:** link `activityId`, set future start/end times, capacity and remaining seats. Remaining must be between zero and capacity.

Use ISO dates with a timezone. Studio writes directly to the database; the API validates writes and requires the backend's `ADMIN_API_KEY` in an `x-api-key` header. Keep that key server-side.

The public endpoints are `GET /api/v1/activities` and `GET /api/v1/activities/:slug`. Refresh the frontend to see database changes.

## Bundled content

See [EXPERIENCES_IMPORT.md](EXPERIENCES_IMPORT.md) for the experience catalog and photos. Importers preserve existing prices and availability. Confirm current commercial information before publishing prices or departure inventory.

For setup, see [README.md](README.md). For hosting, see [CLOUD_DEPLOYMENT.md](CLOUD_DEPLOYMENT.md).
