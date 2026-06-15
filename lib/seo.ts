import type { Metadata } from 'next';
import { SITE } from './site';
import type { Category } from '@/data/categories';
import type { City } from '@/data/cities';
import type { Business } from '@/data/businesses';

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function buildMetadata({ title, description, path }: BuildMetadataInput): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function localBusinessJsonLd(business: Business, category: Category, city: City) {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/${category.slug}/${city.slug}/#${business.id}`,
    name: business.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.split(',')[0],
      addressLocality: city.name,
      addressRegion: city.stateCode,
      postalCode: business.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
  };

  if (business.tagline) jsonLd.description = business.tagline;
  if (business.phone) jsonLd.telephone = business.phone;
  if (business.website) jsonLd.url = business.website;
  if (business.hours) jsonLd.openingHours = business.hours;
  // Only emit aggregateRating when there are real reviews to back it.
  if (business.rating > 0 && business.reviewCount > 0) {
    jsonLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    };
  }

  return jsonLd;
}

export function itemListJsonLd(
  businesses: Business[],
  category: Category,
  city: City,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: businesses.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: localBusinessJsonLd(b, category, city),
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
