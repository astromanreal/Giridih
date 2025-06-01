
import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/app/blogs/page'; // Adjust path as necessary

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  // Get all blog posts
  const blogPosts = getBlogPosts();
  const blogPostEntries: MetadataRoute.Sitemap = blogPosts.map(({ slug, date }) => ({
    url: `${BASE_URL}/blogs/${slug}`,
    lastModified: new Date(date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Define static routes
  const staticRoutes = [
    '/',
    '/explore',
    '/parasnath-hill',
    '/forests-wildlife',
    '/culture-festivals',
    '/history-heritage',
    '/local-economy-crafts',
    '/tourism-guide',
    '/people-lifestyle',
    '/gallery',
    '/blogs', // The main blogs listing page
    '/forums',
    '/contact',
    '/settings',
  ];

  const staticRouteEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(), // Or a more specific date if available
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1.0 : 0.8,
  }));

  return [
    ...staticRouteEntries,
    ...blogPostEntries,
  ];
}
