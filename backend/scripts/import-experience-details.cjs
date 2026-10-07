const path = require('node:path');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { prepareDetails } = require('./experience-data.cjs');

async function main() {
  const entries = prepareDetails();
  if (process.argv.includes('--preview')) {
    console.log(`Prepared media for ${entries.length} experiences. No database writes.`);
    return;
  }
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required');
  const prisma = new PrismaClient();
  try {
    await prisma.$transaction(entries.map(details => {
      const content = {
        name: details.title,
        description: details.shortDescription,
        image: details.featuredImage,
        category: details.categories[0]?.toUpperCase() || 'SCENIC',
        details,
      };
      return prisma.activity.upsert({
        where: { slug: details.slug },
        create: { ...content, slug: details.slug, status: 'PUBLISHED' },
        update: content,
      });
    }));
    console.log(`Imported ${entries.length} experiences; existing publication status, prices and availability preserved.`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch(() => {
  console.error('Experience import failed. Check backend/.env, source photos and database migrations.');
  process.exitCode = 1;
});
