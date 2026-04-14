import { siteConfig } from './site.config';

export const seoConfig = {
  title: {
    default: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://masteralmaraz.com', // Ojo: pon tu dominio real aquí
    title: siteConfig.businessName,
    description: siteConfig.description,
    siteName: siteConfig.businessName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.businessName,
    description: siteConfig.description,
  }
};