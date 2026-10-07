const { readFileSync, existsSync } = require('node:fs');
const { resolve } = require('node:path');
const { extname } = require('node:path');
const { neon } = require('@neondatabase/serverless');
const dotenv = require('dotenv');

const root = resolve(__dirname, '../..');
const env = dotenv.parse(readFileSync(resolve(root, '.env')));
const connection = env.DATABASE_URL_UNPOOLED || env.DATABASE_URL;
if (!connection) throw new Error('Linked Neon database configuration is missing');
const url = new URL(connection);
if (!url.hostname.endsWith('.neon.tech') || !url.hostname.startsWith('ep-purple-fog-b4zf8c2f')) {
  throw new Error('Database does not match the verified Render database');
}
async function main() {
  const entries = JSON.parse(readFileSync(resolve(root, 'backend/prisma/experiences.json')));
  const slugs = new Set();
  const records = entries.map(entry => {
    if (!/^[a-z0-9-]+$/.test(entry.slug) || slugs.has(entry.slug) || !entry.description?.trim()) {
      throw new Error('Invalid experience manifest');
    }
    slugs.add(entry.slug);
    const image = `/experiences/${entry.slug}/cover${extname(entry.cover).toLowerCase()}`;
    if (!existsSync(resolve(root, `public${image}`))) throw new Error('Prepare experience images with preview:experiences first');
    return { name: entry.name, slug: entry.slug, category: entry.category,
      description: entry.description, image, status: entry.needsReview ? 'DRAFT' : 'PUBLISHED' };
  });
  const sql = neon(connection);
  const result = await sql.query(`
    INSERT INTO "Activity" (id, name, slug, category, description, image, status, "createdAt", "updatedAt")
    SELECT gen_random_uuid()::text, name, slug, category, description, image,
      status::"ActivityStatus", now(), now()
    FROM jsonb_to_recordset($1::jsonb)
      AS entry(name text, slug text, category text, description text, image text, status text)
    ON CONFLICT (slug) DO UPDATE SET status = EXCLUDED.status, "updatedAt" = now()
    RETURNING slug, status
  `, [JSON.stringify(records)]);
  console.log(`Cloud publication complete: ${result.filter(row => row.status === 'PUBLISHED').length} published, ${result.filter(row => row.status === 'DRAFT').length} awaiting review.`);
  console.log('Existing content, prices and availability preserved. No price or availability records added.');
}
main().catch(error => {
  console.error(`Cloud publication failed (${error.code || error.name || 'error'}).`);
  process.exitCode = 1;
});
