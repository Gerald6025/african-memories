const ts = require('typescript');
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '../lib/api.ts'), 'utf8');
const output = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2021 },
}).outputText;
let request;
const context = {
  exports: {}, URL, AbortSignal,
  process: { env: { API_URL: 'https://api.example.test/api/v1/', NEXT_PUBLIC_API_URL: 'https://wrong.test' } },
  fetch: async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => [] };
  },
};
vm.runInNewContext(output, context);

async function main() {
  await context.exports.apiGet('/activities');
  assert.equal(request.url, 'https://api.example.test/api/v1/activities');
  assert.equal(request.options.cache, 'no-store');
  assert.ok(request.options.signal);
  context.fetch = async () => ({ ok: false, status: 404 });
  await assert.rejects(context.exports.apiGet('/missing'), error =>
    error instanceof context.exports.ApiError && error.status === 404);
  context.process.env.API_URL = '';
  context.process.env.NEXT_PUBLIC_API_URL = '';
  await assert.rejects(context.exports.apiGet('/activities'), /API_URL is missing/);
  console.log('API fetching checks passed');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
