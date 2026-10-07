const { readFileSync, mkdirSync, copyFileSync } = require('node:fs');
const { resolve, extname } = require('node:path');
const root = resolve(__dirname, '../..');
const entries = JSON.parse(readFileSync(resolve(root, 'backend/prisma/experiences.json')));
for (const entry of entries) {
  const folder = resolve(root, 'backend/public/experiences', entry.slug);
  mkdirSync(folder, { recursive: true });
  copyFileSync(resolve(root, 'public/experiences', entry.slug, `cover${extname(entry.cover).toLowerCase()}`),
    resolve(folder, `cover${extname(entry.cover).toLowerCase()}`));
}
console.log(`Prepared ${entries.length} backend cover images.`);
if (require('node:fs').existsSync(resolve(root, 'backend/prisma/experience-details.json'))) {
  const details = require('./experience-data.cjs').prepareDetails();
  console.log(`Prepared galleries and step images for ${details.length} detailed experiences.`);
}
