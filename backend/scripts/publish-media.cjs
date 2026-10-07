const { readFileSync } = require('node:fs');
const { resolve, extname } = require('node:path');
const { neon } = require('@neondatabase/serverless');
const root = resolve(__dirname, '../..');
const env = require('dotenv').parse(readFileSync(resolve(root, '.env')));
const base = 'https://african-memories-api-latest.onrender.com';
async function main() {
  const entries = JSON.parse(readFileSync(resolve(root, 'backend/prisma/experiences.json')));
  const records = [];
  for (const entry of entries) {
    const oldImage = `/experiences/${entry.slug}/cover${extname(entry.cover).toLowerCase()}`;
    const image = `${base}/media${oldImage}`;
    const response = await fetch(image, { signal: AbortSignal.timeout(30000) });
    if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) {
      throw new Error(`Backend image is not ready: ${entry.slug}. Deploy the updated image first.`);
    }
    await response.arrayBuffer();
    records.push({ slug: entry.slug, oldImage, image });
  }
  const connection = env.DATABASE_URL_UNPOOLED || env.DATABASE_URL;
  if (!new URL(connection).hostname.startsWith('ep-purple-fog-b4zf8c2f')) throw new Error('Unexpected database');
  const sql = neon(connection);
  const result = await sql.query(`UPDATE "Activity" a SET image = m.image, "updatedAt" = now()
    FROM jsonb_to_recordset($1::jsonb) AS m(slug text, "oldImage" text, image text)
    WHERE a.slug = m.slug AND (a.image = m."oldImage" OR a.image = m.image) RETURNING a.slug`, [JSON.stringify(records)]);
  console.log(`Published ${result.length} verified backend photo URLs.`);
}
main().catch(error => { console.error(error.message.replace(/postgres(?:ql)?:\/\/\S+/g, '[private URL]')); process.exitCode = 1; });
