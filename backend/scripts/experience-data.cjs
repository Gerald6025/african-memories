const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const aliases = {
  'guided-tour-falls': 'guided-tour-of-the-falls',
  'chobe-day-safari': 'chobe-day-trip',
  'boma-dinner-show': 'boma-dinner',
  'game-drive-zambezi': 'game-drive',
  'jet-boat-gorge': 'jet-boat-adventure',
  'simunye-theatre-show': 'simunye',
};
const canonical = slug => aliases[slug] || slug;
function prepareDetails() {
  const entries = JSON.parse(fs.readFileSync(path.resolve(root, 'backend/prisma/experience-details.json')));
  const base = (process.env.MEDIA_BASE_URL || 'http://localhost:3001/media/experiences').replace(/\/+$/, '');
  const url = new URL(base);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
    throw new Error('MEDIA_BASE_URL must be an HTTP(S) URL without credentials');
  }
  return entries.map(entry => {
    const slug = canonical(entry.slug);
    function image(source, required = false) {
      if (!source?.startsWith('/Experiences/')) throw new Error(`Unexpected photo path: ${slug}`);
      const file = path.resolve(root, 'app', source.slice(1));
      if (!file.startsWith(path.resolve(root, 'app/Experiences') + path.sep)) {
        throw new Error(`Invalid source photo path for ${slug}`);
      }
      if (!fs.existsSync(file)) {
        if (!required) {
          console.log(`Optional photo unavailable: ${slug}/${path.basename(source)}`);
          return undefined;
        }
        throw new Error(`Missing source photo for ${slug}: ${path.basename(source)}`);
      }
      const folder = path.resolve(root, 'backend/public/experiences', slug);
      fs.mkdirSync(folder, { recursive: true });
      fs.copyFileSync(file, path.resolve(folder, path.basename(file)));
      return `${base}/${slug}/${encodeURIComponent(path.basename(file))}`;
    }
    return { ...entry, sourceId: entry.id, sourceSlug: entry.slug, id: slug, slug, featuredImage: image(entry.featuredImage, true),
      galleryImages: entry.galleryImages.map(source => image(source)).filter(Boolean),
      steps: entry.steps?.map(step => ({ ...step, ...(step.image ? { image: image(step.image) } : {}) })),
      relatedIds: entry.relatedIds.map(canonical) };
  });
}
module.exports = { prepareDetails };
