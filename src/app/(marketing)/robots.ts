import { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site.config';

export default function robots(): MetadataRoute.Robots {
  // Ajusta esta URL base si tu estructura de links en siteConfig es diferente
  const baseUrl = 'https://masteralmaraz.com'; 

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'], // Protegemos rutas internas
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}