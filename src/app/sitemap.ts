import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.thepostmortems.in';

  // Fetch published investigations
  const investigations = await prisma.investigation.findMany({
    where: { status: 'PUBLISHED' },
    select: { slug: true, updatedAt: true, publishedAt: true },
  });

  const investigationEntries: MetadataRoute.Sitemap = investigations.map((inv) => ({
    url: `${baseUrl}/investigations/${inv.slug}`,
    lastModified: inv.publishedAt || inv.updatedAt || new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const staticRoutes = [
    '',
    '/investigations',
    '/vault',
    '/about',
    '/corrections-policy',
    '/funding-disclosure',
    '/source-protection',
    '/privacy-policy',
    '/terms-of-use',
    '/editorial-standards'
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));

  return [...staticEntries, ...investigationEntries];
}
