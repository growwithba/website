import type { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/categories/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/cities/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${base}/${c.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/cities/${c.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const cityCategoryPages: MetadataRoute.Sitemap = [];
  for (const cat of categories) {
    for (const city of cities) {
      cityCategoryPages.push({
        url: `${base}/${cat.slug}/${city.slug}/`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    }
  }

  return [...staticPages, ...categoryPages, ...cityPages, ...cityCategoryPages];
}
