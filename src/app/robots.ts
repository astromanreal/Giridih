
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Optional: Disallow specific paths if needed
        // disallow: ['/admin/', '/private/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    // Optional: Host if your sitemap is on a different domain (not common for Next.js apps)
    // host: BASE_URL,
  };
}
