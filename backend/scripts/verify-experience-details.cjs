const { prepareDetails } = require('./experience-data.cjs');
const base = 'https://african-memories-api-latest.onrender.com/api/v1';
async function main() {
  const expected = prepareDetails();
  const listResponse = await fetch(`${base}/activities`, { signal: AbortSignal.timeout(30000) });
  if (!listResponse.ok) throw new Error(`List returned ${listResponse.status}`);
  const list = await listResponse.json();
  for (let i = 0; i < expected.length; i += 5) {
    await Promise.all(expected.slice(i, i + 5).map(async entry => {
      const response = await fetch(`${base}/activities/${entry.slug}`, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`Detail missing: ${entry.slug}`);
      const activity = await response.json();
      for (const record of [activity, list.find(item => item.slug === entry.slug)]) {
        if (!record?.details || record.details.fullOverview !== entry.fullOverview
          || JSON.stringify(record.details.faqs) !== JSON.stringify(entry.faqs)
          || JSON.stringify(record.details.galleryImages) !== JSON.stringify(entry.galleryImages)) {
          throw new Error(`Details mismatch: ${entry.slug}`);
        }
      }
    }));
  }
  console.log(`Verified all ${expected.length} detailed experiences through Render.`);
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
