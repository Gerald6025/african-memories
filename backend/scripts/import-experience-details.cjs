const fs = require('node:fs');
const path = require('node:path');
const { neon } = require('@neondatabase/serverless');
const { prepareDetails } = require('./experience-data.cjs');
async function main() {
  const entries = prepareDetails();
  const env = require('dotenv').parse(fs.readFileSync(path.resolve(__dirname, '../../.env')));
  const connection = env.DATABASE_URL_UNPOOLED || env.DATABASE_URL;
  if (!new URL(connection).hostname.startsWith('ep-purple-fog-b4zf8c2f')) throw new Error('Unexpected database');
  const records = entries.map(details => ({ slug: details.slug, name: details.title,
    description: details.shortDescription, image: details.featuredImage,
    category: details.categories[0]?.toUpperCase() || 'SCENIC', details }));
  const sql = neon(connection);
  const photos = new Set(entries.flatMap(entry => [entry.featuredImage, ...entry.galleryImages,
    ...(entry.steps || []).map(step => step.image).filter(Boolean)]));
  const photoList = [...photos];
  for (let i = 0; i < photoList.length; i += 8) {
    await Promise.all(photoList.slice(i, i + 8).map(async photo => {
      const response = await fetch(photo, { method: 'HEAD', signal: AbortSignal.timeout(30000) });
      if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) {
        throw new Error('Gallery deployment is not ready');
      }
    }));
  }
  // The deployment applies the schema migration before these records are imported.
  const result = await sql.query(`INSERT INTO "Activity"
      (id, name, slug, category, description, image, details, status, "createdAt", "updatedAt")
    SELECT gen_random_uuid()::text, name, slug, category, description, image, details,
      'PUBLISHED'::"ActivityStatus", now(), now()
    FROM jsonb_to_recordset($1::jsonb)
      AS e(name text, slug text, category text, description text, image text, details jsonb)
    ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description,
      image = EXCLUDED.image, details = EXCLUDED.details, "updatedAt" = now()
    RETURNING slug`, [JSON.stringify(records)]);
  console.log(`Imported ${result.length} detailed experiences; existing prices and availability preserved.`);
}
main().catch(error => { console.error(`Details import failed (${error.code || error.name}). Confirm the latest image, gallery assets and schema migration are deployed.`); process.exitCode = 1; });
