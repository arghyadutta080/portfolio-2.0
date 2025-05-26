import type { MetadataRoute } from 'next';

// To tell search engine crawlers which URLs they can access on stabble.

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://arghya-dutta.vercel.app/sitemap.xml',
    };
}