import type { MetadataRoute } from 'next';

const siteUrl = 'https://thomasherrmann.me';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/resume`, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
