export type CTAVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface CTA {
  label: string;
  href: string;
  variant?: CTAVariant;
  external?: boolean;
}