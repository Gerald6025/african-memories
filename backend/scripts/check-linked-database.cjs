const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { PrismaClient } = require('@prisma/client');
const env = require('dotenv').parse(readFileSync(resolve(__dirname, '../../.env')));
const url = env.DATABASE_URL_UNPOOLED || env.DATABASE_URL;
const prisma = new PrismaClient({ datasources: { db: { url } } });
prisma.$connect().then(() => console.log('Linked database connected')).catch(error => {
  const safe = String(error.message).replace(/postgres(?:ql)?:\/\/\S+/g, '[private database URL]');
  console.error(safe);
  process.exitCode = 1;
}).finally(() => prisma.$disconnect());
