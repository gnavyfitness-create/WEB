import React from 'react';

// Secciones
import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';
import InsuranceGridSection from '@/components/sections/InsuranceGridSection';
import DynamicFormSection from '@/components/sections/DynamicFormSection';
import WhySection from '@/components/sections/WhySection';
import ProcessSection from '@/components/sections/ProcessSection';
import LocationSection from '@/components/sections/LocationSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

// Contenidos
import { heroContent } from '@/content/home/hero';
import { trustContent } from '@/content/home/trust';
import { insurancesContent } from '@/content/home/insurances';
import { formContent } from '@/content/home/form';
import { whyContent } from '@/content/home/why';
import { processContent } from '@/content/home/process';
import { locationContent } from '@/content/home/location';
import { faqContent } from '@/content/home/faq';
import { finalCtaContent } from '@/content/home/final-cta';

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      {/* 1. Hero: Captación inmediata (Corregido: sin pasar imageSrc extra) */}
      <HeroSection content={heroContent} />

      {/* 2. Trust: Autoridad y cercanía */}
      <TrustSection {...trustContent} />

      {/* 3. Products: Oferta principal */}
      <InsuranceGridSection {...insurancesContent} />

      {/* 4. Conversion: Formulario dinámico */}
      <DynamicFormSection {...formContent} />

      {/* 5. Why: Diferenciación profunda */}
      <WhySection {...whyContent} />

      {/* 6. Process: Claridad de camino */}
      <ProcessSection {...processContent} />

      {/* 7. Location: Credibilidad local */}
      <LocationSection {...locationContent} />

      {/* 8. FAQ: Resolución de objeciones */}
      <FAQSection {...faqContent} />

      {/* 9. Final CTA: Cierre de ciclo */}
      <FinalCtaSection {...finalCtaContent} />
    </main>
  );
}