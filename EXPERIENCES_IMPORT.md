# Experiences import

The 14 supplied folders in `app/Experiences` are mapped in
`backend/prisma/experiences.json`. Each entry records its source document,
description, category, cover photograph and unique slug. Reference prices are
transcribed from the supplied 2024 fact sheets; they are **not current offers**.
Boma and spa descriptions are based on the supplied 2025 PDFs. The Boma timeline
PDF could not be fully extracted, so its schedule is not represented as confirmed.

## Prepare and import

### Detailed experience content

The supplied 25-experience catalog is stored as literal JSON in `backend/prisma/experience-details.json`. The backend's `Activity.details` contains overviews, duration/location, the supplied from-price, galleries, highlights, inclusions/exclusions, steps, local tips, FAQs and related experience IDs. `/api/v1/activities` and its slug endpoint return that content. The frontend renders it on adventure detail pages.

Existing equivalent experiences keep their established slugs. The supplied sunset cruise remains separate from the existing standard cruise; spa treatments also remain available. The missing `Boma prepping on the fire.webp` gallery asset is omitted from prepared galleries; the original manifest is preserved.

After deploying the latest backend Docker image (which applies the committed migration), run from the project root:

```powershell
node backend/scripts/import-experience-details.cjs
node backend/scripts/verify-experience-details.cjs
```

The importer verifies hosted gallery photos before writing. It updates matching activity content and adds new catalog records while preserving existing Price and Availability records. Supplied from-prices remain detail metadata; the importer does not invent price validity periods or departure inventory.

### Backend photo hosting

Cover photos can be served by the NestJS backend at `/media/experiences/<slug>/cover.jpg` (the spa cover uses `.png`). Prepare and package them from the project root:

```powershell
node backend/scripts/prepare-media.cjs
docker build -t masterp02/african-memories-api:latest -t african-memories-api:latest ./backend
docker push masterp02/african-memories-api:latest
```

In Render, select **Manual Deploy → Deploy latest reference**. After deployment, run:

```powershell
node backend/scripts/publish-media.cjs
```

The script checks every hosted cover before switching matching database image paths to absolute backend URLs. Restart Next.js after the remote image configuration changes. The bundled covers survive container restarts; new uploads are not implemented. Additional gallery photographs still remain frontend assets.

### Publish to the linked Neon cloud database

From the project root, with the verified Render database connection in the ignored root `.env`:

```powershell
node backend/scripts/import-cloud-experiences.cjs
node backend/scripts/verify-cloud-experiences.cjs
```

This cloud importer uses HTTPS and publishes the manifest records in one atomic operation. Existing matching records retain their descriptions, images, prices and availability; their publication status follows the manifest. Prepare photos with `preview:experiences` first. Cloud database publication requires the `public/experiences` assets to be included in your frontend deployment.

### Local database import

In PowerShell:

```powershell
cd C:\Users\user\Desktop\african-memories\backend
npm.cmd run preview:experiences
docker compose up -d postgres
npx.cmd prisma migrate deploy
npm.cmd run import:experiences
```

Preview validates the source files and copies photographs to
`public/experiences/<slug>/`, without writing to the database. Import creates
published Activity records with a local cover image path and description, in one
database transaction. Re-running it preserves records with an existing matching
slug, including their publication status, prices and descriptions. It does not
merge records whose slugs differ or replace the sample `zambezi-boat-cruise`.
Review any equivalent activities already present in Studio to avoid duplicate
public listings under different slugs.

The Activity model currently holds one cover image. Additional photographs are
copied and available as assets, but are not a database gallery. The source folders
and supporting documents are preserved. Include the public assets when deploying
the frontend; a frontend-hosted image path resolves on the website's origin.

No Price or Availability records are generated. To show a price, confirm its
current amount and validity period and add it through Studio or the protected
pricing API. To show availability, obtain actual dated departures and remaining
seats. Old operating hours and minimum group sizes are not bookable inventory.

## Verify the application

The root `.env.local` now points to `https://african-memories-api-latest.onrender.com/api/v1`.
If a server-only `API_URL` is configured elsewhere, it takes precedence.

Run `npm.cmd run dev` in the backend folder, and in a separate terminal run
`npm.cmd run dev` in the project root. Check:

- `http://localhost:3001/api/v1/ready`
- `http://localhost:3001/api/v1/activities`
- `http://localhost:3000/adventures`
- `http://localhost:3000/adventures/bungee-jump`
- `http://localhost:3000/experiences/bungee-jump/cover.jpg`

The homepage and adventure list/detail already read the backend with `no-store`.
Refresh after database edits. These changes do not connect accommodation,
destination or blog catalogs to the database.

## Verification on 6 October 2026

- Imported 14 published activities into the configured database.
- A second import created zero records and preserved all 14 existing records.
- All 14 names and descriptions returned by the API match the import manifest.
- All 14 activity detail endpoints and cover-image URLs returned HTTP 200.
- API readiness returned `database: connected`.
- The homepage, adventure list and Bungee Jump detail page returned HTTP 200;
  the list contains all 14 names and the detail contains the imported description.
- All cover images decoded successfully. The supplied spa image is only 372 x
  223 pixels, so a higher-resolution replacement would improve its large display.
- Backend watch compilation reported zero errors.

Docker Desktop's engine was unavailable, but the configured database was already
reachable. No database reset or Docker volume deletion was used. A missing or
short local `ADMIN_API_KEY` was replaced with a randomly generated private key in
`backend/.env` so the backend could start. It was not printed or added to frontend
configuration.
