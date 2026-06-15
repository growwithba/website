/**
 * Populate data/listings.generated.json with real businesses from the
 * Google Places API (New).
 *
 * Usage:
 *   GOOGLE_PLACES_API_KEY=xxxx npm run fetch:places
 *
 * Flags (optional):
 *   --categories=personal-injury-lawyers,plumbers   limit to these category slugs
 *   --cities=austin-tx,miami-fl                      limit to these city slugs
 *   --limit=20                                       max listings per page (<=20)
 *   --delay=200                                      ms between API calls (rate limit)
 *   --fresh                                          ignore existing cache and refetch all
 *
 * The script is incremental by default: pairs already present in the cache are
 * skipped, so an interrupted run can be resumed. Pairs that return zero results
 * are left out of the cache, so the site falls back to synthetic data for them.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categories } from '../data/categories';
import { cities } from '../data/cities';
import { fetchBusinesses } from '../lib/places';
import type { Business } from '../data/businesses';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CACHE_PATH = resolve(__dirname, '../data/listings.generated.json');

function arg(name: string): string | undefined {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit?.split('=').slice(1).join('=');
}
const hasFlag = (name: string) => process.argv.includes(`--${name}`);

function parseList(value: string | undefined): Set<string> | null {
  if (!value) return null;
  return new Set(value.split(',').map((s) => s.trim()).filter(Boolean));
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.error('Missing GOOGLE_PLACES_API_KEY environment variable.');
    process.exit(1);
  }

  const catFilter = parseList(arg('categories'));
  const cityFilter = parseList(arg('cities'));
  const maxResults = Number(arg('limit') ?? 20);
  const delay = Number(arg('delay') ?? 200);
  const fresh = hasFlag('fresh');

  const cache: Record<string, Business[]> = fresh
    ? {}
    : JSON.parse(readFileSync(CACHE_PATH, 'utf8') || '{}');

  const selectedCats = categories.filter((c) => !catFilter || catFilter.has(c.slug));
  const selectedCities = cities.filter((c) => !cityFilter || cityFilter.has(c.slug));

  const total = selectedCats.length * selectedCities.length;
  let done = 0;
  let fetched = 0;
  let failed = 0;

  console.log(`Fetching ${total} category×city pairs (delay ${delay}ms)…`);

  for (const category of selectedCats) {
    for (const city of selectedCities) {
      done++;
      const key = `${category.slug}|${city.slug}`;
      if (!fresh && cache[key]?.length) continue; // resume: already cached

      try {
        const businesses = await fetchBusinesses(category, city, { apiKey, maxResults });
        if (businesses.length) {
          cache[key] = businesses;
          fetched++;
        }
        if (done % 25 === 0 || done === total) {
          // Persist periodically so progress survives interruption.
          writeCache(cache);
          console.log(`  [${done}/${total}] ${key} → ${businesses.length} listings`);
        }
      } catch (err) {
        failed++;
        console.warn(`  ✗ ${key}: ${(err as Error).message}`);
      }
      await sleep(delay);
    }
  }

  writeCache(cache);
  console.log(`Done. ${fetched} pairs fetched, ${failed} failed, ${Object.keys(cache).length} total in cache.`);
}

function writeCache(cache: Record<string, Business[]>) {
  mkdirSync(dirname(CACHE_PATH), { recursive: true });
  writeFileSync(CACHE_PATH, `${JSON.stringify(cache, null, 2)}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
