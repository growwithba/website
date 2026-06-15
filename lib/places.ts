import type { Business } from '@/data/businesses';
import type { Category } from '@/data/categories';
import type { City } from '@/data/cities';

/**
 * Google Places API (New) client + mapping helpers.
 *
 * This module is dependency-free (plain `fetch`) so it can run both inside the
 * Next.js build and from the standalone `scripts/fetch-places.ts` cache builder.
 * Nothing here is imported by rendered pages directly — pages read the cached
 * JSON via `getBusinesses()` in `data/businesses.ts`.
 */

const PLACES_SEARCH_URL = 'https://places.googleapis.com/v1/places:searchText';

// Only request the fields we actually use — Places (New) bills by field mask.
const FIELD_MASK = [
  'places.id',
  'places.displayName',
  'places.formattedAddress',
  'places.addressComponents',
  'places.rating',
  'places.userRatingCount',
  'places.nationalPhoneNumber',
  'places.websiteUri',
  'places.googleMapsUri',
  'places.businessStatus',
  'places.editorialSummary',
  'places.regularOpeningHours.weekdayDescriptions',
].join(',');

interface PlacesAddressComponent {
  longText?: string;
  shortText?: string;
  types?: string[];
}

interface PlaceResult {
  id?: string;
  displayName?: { text?: string };
  formattedAddress?: string;
  addressComponents?: PlacesAddressComponent[];
  rating?: number;
  userRatingCount?: number;
  nationalPhoneNumber?: string;
  websiteUri?: string;
  googleMapsUri?: string;
  businessStatus?: string;
  editorialSummary?: { text?: string };
  regularOpeningHours?: { weekdayDescriptions?: string[] };
}

interface PlacesSearchResponse {
  places?: PlaceResult[];
  nextPageToken?: string;
  error?: { message?: string; status?: string };
}

/** The text query Google searches, e.g. "personal injury law firm in Austin, TX". */
export function buildTextQuery(category: Category, city: City): string {
  return `${category.serviceQuery} in ${city.name}, ${city.stateCode}`;
}

function postalCodeOf(place: PlaceResult): string {
  const zip = place.addressComponents?.find((c) =>
    c.types?.includes('postal_code'),
  );
  return zip?.longText ?? zip?.shortText ?? '';
}

/** Map a single Google Places result into our `Business` shape. */
export function placeToBusiness(place: PlaceResult, category: Category): Business {
  const rating = typeof place.rating === 'number' ? place.rating : 0;
  return {
    id: place.id ?? cryptoRandomId(),
    placeId: place.id,
    name: place.displayName?.text ?? 'Unnamed business',
    rating,
    reviewCount: place.userRatingCount ?? 0,
    phone: place.nationalPhoneNumber,
    address: place.formattedAddress ?? '',
    zip: postalCodeOf(place),
    website: place.websiteUri,
    googleMapsUri: place.googleMapsUri,
    // Places has no "tagline"; some places carry an editorial summary.
    tagline: place.editorialSummary?.text ?? `${category.singular} in your area`,
    hours: place.regularOpeningHours?.weekdayDescriptions?.join(' · '),
    // No "verified" concept in Places — treat operational listings as verified.
    verified: place.businessStatus === 'OPERATIONAL',
    source: 'google-places',
  };
}

function cryptoRandomId(): string {
  return `place-${Math.random().toString(36).slice(2, 10)}`;
}

export interface FetchPlacesOptions {
  apiKey: string;
  /** Max results to request (Places returns up to 20 per page). */
  maxResults?: number;
  /** ISO region bias for results. */
  regionCode?: string;
}

/**
 * Fetch and map real businesses for a category + city from Google Places.
 * Throws on API/auth errors so the caller (the cache script) can surface them.
 */
export async function fetchBusinesses(
  category: Category,
  city: City,
  opts: FetchPlacesOptions,
): Promise<Business[]> {
  const res = await fetch(PLACES_SEARCH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': opts.apiKey,
      'X-Goog-FieldMask': FIELD_MASK,
    },
    body: JSON.stringify({
      textQuery: buildTextQuery(category, city),
      regionCode: opts.regionCode ?? 'US',
      languageCode: 'en',
      maxResultCount: Math.min(opts.maxResults ?? 20, 20),
    }),
  });

  const data = (await res.json()) as PlacesSearchResponse;
  if (!res.ok || data.error) {
    const msg = data.error?.message ?? `HTTP ${res.status}`;
    throw new Error(`Places API error for "${buildTextQuery(category, city)}": ${msg}`);
  }

  return (data.places ?? []).map((p) => placeToBusiness(p, category));
}
