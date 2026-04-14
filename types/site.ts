import { CTA } from './cta';

export interface SiteConfig {
  businessName: string;
  ownerName: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  serviceArea: string;
  hours: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
}