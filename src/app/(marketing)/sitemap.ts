import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://masteralmaraz.com'; // Cambia esto por el dominio real en producción

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, // Prioridad máxima para la landing page
    }
    // Si en el futuro agregas más páginas (ej. /nosotros), las añades aquí
  ];
}