import { CTA } from './cta';

export interface QuickInfoItem {
  label: string;
  value?: string;
  icon?: string; // Nombre del icono para mapeo dinámico en UI
}

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  quickInfo: QuickInfoItem[];
  supportText?: string;
}

export interface HomeContent {
  hero: HeroContent;
  // Se pueden añadir más secciones aquí en futuras iteraciones
}