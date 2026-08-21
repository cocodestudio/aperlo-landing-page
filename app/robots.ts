import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/template/'], // Prevent crawling dynamic template redirects
    },
    sitemap: 'https://aperlo.cocodestudio.com/sitemap.xml',
  };
}
