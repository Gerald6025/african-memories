# Experience catalog

The repository includes source photos and documents in `app/Experiences`, a basic catalog in `backend/prisma/experiences.json`, and detailed content in `backend/prisma/experience-details.json`.

## Import detailed experiences

Configure `backend/.env` with `DATABASE_URL` and `MEDIA_BASE_URL`. Locally, the media URL is `http://localhost:3001/media/experiences`; for production use `https://YOUR-BACKEND-HOST/media/experiences`. Exported environment variables take precedence over the file.

From `backend`:

```sh
npm ci
npx prisma generate
npx prisma migrate deploy
npm run preview:details
npm run import:details
```

Preview validates the media URL and prepares gallery images without writing to the database. Import creates published records and updates matching slugs while preserving existing publication status, prices and availability.

For production, prepare the media before building and deploying the backend, then run the importer against the intended database. The deployment must include the prepared `backend/public/experiences` files. Add your media host to the frontend's `next.config.ts` image configuration.

## Basic catalog

For cover images and descriptions without detailed galleries, run from `backend`:

```sh
npm run preview:experiences
npm run import:experiences
```

This importer copies photos into `public/experiences` and skips existing matching slugs. Choose the catalog you need; the detailed catalog already includes the main experiences.

Imported reference prices are descriptive metadata from source materials. Neither importer creates dated Price or Availability records. Add confirmed prices and actual departure inventory separately.

## Verify

Start the backend and frontend as described in [README.md](README.md), then open `/adventures` and a listed detail page. The API's `/api/v1/ready` endpoint should report database connectivity.
