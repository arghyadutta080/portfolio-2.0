import type { MetadataRoute } from 'next';

// To help search engine crawlers crawl your site more efficiently.

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://arghya-dutta.vercel.app',
            lastModified: new Date(),
        }
    ];
}