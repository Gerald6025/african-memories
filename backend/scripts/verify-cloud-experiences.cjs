const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const entries = JSON.parse(readFileSync(resolve(__dirname, '../prisma/experiences.json')));
const base = 'https://african-memories-api-latest.onrender.com/api/v1';
async function get(path) {
  const response = await fetch(`${base}${path}`, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
async function main() {
  const list = await get('/activities');
  for (const entry of entries.filter(entry => !entry.needsReview)) {
    if (!list.some(item => item.slug === entry.slug)) throw new Error(`Missing ${entry.slug}`);
    const detail = await get(`/activities/${entry.slug}`);
    if (detail.name !== entry.name || detail.description !== entry.description || detail.status !== 'PUBLISHED') {
      throw new Error(`Content mismatch: ${entry.slug}`);
    }
  }
  console.log(`Verified ${entries.length} published experiences and all detail responses through Render.`);
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
