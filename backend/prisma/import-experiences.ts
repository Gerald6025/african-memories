import { PrismaClient } from '@prisma/client';
import { readFileSync, readdirSync, existsSync, mkdirSync, copyFileSync } from 'fs';
import { resolve, join, extname } from 'path';

interface Experience {
  folder: string;
  name: string;
  slug: string;
  category: string;
  cover: string;
  description: string;
  source: string;
  referencePriceUSD?: number;
  needsReview?: boolean;
}

const root = resolve(__dirname, '../..');
const entries = JSON.parse(readFileSync(join(__dirname, 'experiences.json'), 'utf8')) as Experience[];
const preview = process.argv.includes('--preview');
const sourceRoot = join(root, 'app/Experiences');

async function main() {
  // Validate every source before copying files or writing any records.
  const slugs = new Set<string>();
  for (const entry of entries) {
    if (!/^[a-z0-9-]+$/.test(entry.slug) || slugs.has(entry.slug)) throw new Error(`Invalid or duplicate slug: ${entry.slug}`);
    slugs.add(entry.slug);
    for (const filename of [entry.cover, entry.source]) {
      const path = resolve(sourceRoot, entry.folder, filename);
      if (!path.startsWith(sourceRoot + require('path').sep) || !existsSync(path)) throw new Error(`Missing or invalid source: ${entry.folder}/${filename}`);
    }
    if (!entry.description.trim() || entry.description.length > 5000) throw new Error(`Invalid description: ${entry.slug}`);
  }

  for (const entry of entries) {
    const destination = join(root, 'public/experiences', entry.slug);
    mkdirSync(destination, { recursive: true });
    // Preserve original bytes and filenames; the fact sheets stay in the source folder.
    for (const filename of readdirSync(join(sourceRoot, entry.folder))) {
      if (/\.(jpe?g|png|webp)$/i.test(filename) && !/fact.?sheet/i.test(filename)) {
        copyFileSync(join(sourceRoot, entry.folder, filename), join(destination, filename));
      }
    }
    copyFileSync(join(sourceRoot, entry.folder, entry.cover), join(destination, `cover${extname(entry.cover).toLowerCase()}`));
  }

  if (preview) {
    for (const entry of entries) console.log(`${entry.needsReview ? 'DRAFT' : 'PUBLISHED'} | ${entry.slug} | /experiences/${entry.slug}/cover${extname(entry.cover).toLowerCase()}`);
    console.log(`Validated ${entries.length} experiences and prepared local photos. No database writes.`);
    return;
  }

  const prisma = new PrismaClient();
  try {
    const result = await prisma.$transaction(async tx => {
      let created = 0;
      let skipped = 0;
      for (const entry of entries) {
        if (await tx.activity.findUnique({ where: { slug: entry.slug } })) {
          skipped++;
          continue;
        }
        await tx.activity.create({ data: {
          name: entry.name,
          slug: entry.slug,
          category: entry.category,
          description: entry.description,
          image: `/experiences/${entry.slug}/cover${extname(entry.cover).toLowerCase()}`,
          status: entry.needsReview ? 'DRAFT' : 'PUBLISHED',
        } });
        created++;
      }
      return { created, skipped };
    }, { timeout: 30000 });
    console.log(`Import complete: ${result.created} created, ${result.skipped} existing records preserved.`);
    console.log('No prices or availability created: reference rates require current validity dates and actual seat inventory.');
  } finally {
    await prisma.$disconnect();
  }
}

main().catch(error => {
  // Avoid printing connection strings or other environment secrets.
  console.error(`Experience import failed (${error.code || error.name || 'error'}). Check database readiness and source files.`);
  process.exitCode = 1;
});
