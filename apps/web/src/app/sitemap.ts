import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buildproconstruction.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/team',
    '/blog',
    '/careers',
    '/testimonials',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' ? 0.9 : 0.8,
  }));
}
