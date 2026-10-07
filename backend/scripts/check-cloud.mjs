const base = process.argv[2]?.replace(/\/+$/, '');
if (!base) throw new Error('Usage: node scripts/check-cloud.mjs https://YOUR-API/api/v1');
const parsed = new URL(base);
if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) {
  throw new Error('Supply an HTTP(S) API URL without credentials');
}
async function get(path) {
  const response = await fetch(`${base}${path}`, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${path} returned HTTP ${response.status}`);
  return response.json();
}
const ready = await get('/ready');
if (ready.database !== 'connected') throw new Error('Database is not ready');
const activities = await get('/activities');
if (!Array.isArray(activities)) throw new Error('Activities endpoint did not return a list');
if (activities.some(activity => activity.status !== 'PUBLISHED')) {
  throw new Error('Public list includes unpublished activities');
}
if (activities.length) {
  const activity = await get(`/activities/${encodeURIComponent(activities[0].slug)}`);
  if (activity.id !== activities[0].id || !Array.isArray(activity.prices) || !Array.isArray(activity.availabilities)) {
    throw new Error('Activity detail does not match the list or is missing related data');
  }
}
console.log(`Cloud check passed: database connected; ${activities.length} published activities; ${activities.length ? 'detail fetching verified' : 'add a published activity to verify detail fetching'}.`);
