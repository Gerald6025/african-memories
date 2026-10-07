const ts = require('typescript');
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const output = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../lib/experiences.ts'), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2021 },
}).outputText;
const context = { exports: {}, URL, process: { env: { API_URL: 'https://api.example.test/api/v1' } } };
vm.runInNewContext(output, context);
const { experiencePrice, experienceCard, experienceImage } = context.exports;
const now = Date.parse('2026-10-07T12:00:00Z');
const activity = { id: '1', slug: 'river-cruise', name: 'River cruise', category: 'SCENIC',
  image: '/experiences/river-cruise/cover.jpg', prices: [], availabilities: [],
  details: { fromPrice: 'From US$85', shortDescription: 'Sunset on the river.', duration: '2 hours', categories: ['river'], featuredImage: '' } };
assert.equal(experiencePrice(activity, now).label, 'From US$85');
assert.equal(experiencePrice(activity, now).source, 'guide');
const price = { id: 'p1', amount: '100', currency: 'USD', isActive: true,
  validFrom: '2026-10-01T00:00:00Z', validTo: '2026-10-31T00:00:00Z' };
activity.prices = [{ ...price, amount: '20', validTo: '2026-10-06T00:00:00Z' },
  { ...price, amount: '30', isActive: false }, { ...price, amount: '40', validFrom: '2026-10-08T00:00:00Z' }, price];
assert.equal(experiencePrice(activity, now).label, 'From US$100');
assert.equal(experienceCard(activity, now).price.label, 'From US$100');
assert.equal(experienceCard(activity, now).duration, '2 hours');
activity.prices.push({ ...price, amount: '110.5', validFrom: '2026-10-05T00:00:00Z' });
assert.equal(experiencePrice(activity, now).label, 'From US$110.5');
activity.prices = [{ ...price, amount: '' }, { ...price, amount: '-5' }, { ...price, amount: 'not a price' }];
assert.equal(experiencePrice(activity, now).label, 'From US$85');
activity.details.fromPrice = '85 USD';
assert.equal(experiencePrice(activity, now).label, 'From 85 USD');
activity.details = null;
assert.equal(experiencePrice(activity, now).label, 'Price on enquiry');
assert.equal(experienceImage('/experiences/river-cruise/cover.jpg'), 'https://api.example.test/media/experiences/river-cruise/cover.jpg');
assert.equal(experienceImage('https://cdn.example.test/photo.jpg'), 'https://cdn.example.test/photo.jpg');
assert.equal(experienceCard(activity, now).image, 'https://api.example.test/media/experiences/river-cruise/cover.jpg');
console.log('Experience checks passed: current/guide/enquiry prices, price validity and backend media paths.');
