import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/approach/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/work/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about/', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy/', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/terms/', priority: 0.2, changeFrequency: 'yearly' },
  ];

  return [
    ...pages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ];
}
