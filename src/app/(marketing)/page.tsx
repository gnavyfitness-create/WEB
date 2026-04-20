import React from 'react';

// Secciones
import HeroSection from '@/components/sections/HeroSection';
import HeritageSection from '@/components/sections/HeritageSection';
import TrustSection from '@/components/sections/TrustSection';
import InsuranceGridSection from '@/components/sections/InsuranceGridSection';
import DynamicFormSection from '@/components/sections/DynamicFormSection';
import WhySection from '@/components/sections/WhySection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialSection from '@/components/sections/TestimonialSection'; // NUEVA SECCIÓN
import LocationSection from '@/components/sections/LocationSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

// Contenidos
import { heroContent } from '@/content/home/hero';
import { heritageContent } from '@/content/home/heritage';
import { trustContent } from '@/content/home/trust';
import { insurancesContent } from '@/content/home/insurances';
import { formContent } from '@/content/home/form';
import { whyContent } from '@/content/home/why';
import { processContent } from '@/content/home/process';
import { reviewsContent } from '@/content/home/reviews'; // NUEVO CONTENIDO
import { locationContent } from '@/content/home/location';
import { faqContent } from '@/content/home/faq';
import { finalCtaContent } from '@/content/home/final-cta';

export default function HomePage() {
  return (
    <main className="flex flex-col w-full bg-[#0F2F57]"> 
      {/* 1. Hero: Impacto inicial y propuesta de valor */}
      <HeroSection content={heroContent} />

      {/* 2. Heritage: Identidad y trayectoria de Héctor */}
      <HeritageSection {...heritageContent} />

      {/* 3. Trust: Los pilares de la firma */}
      <TrustSection {...trustContent} />

      {/* 4. Products: Cuadrícula editorial de soluciones SMNYL */}
      <InsuranceGridSection {...insurancesContent} />

      {/* 5. Conversion: El primer punto de contacto (Lead Gen) */}
      <DynamicFormSection {...formContent} />

      {/* 6. Why: Manifiesto y diferenciadores clave */}
      <WhySection {...whyContent} />

      {/* 7. Process: El paso a paso de la asesoría */}
      <ProcessSection {...processContent} />

      {/* 8. Testimonials: Prueba social real de Google Maps (SEO Boost) */}
      <TestimonialSection {...reviewsContent} />

      {/* 9. Location: Presencia física en Ciudad del Valle */}
      <LocationSection {...locationContent} />

      {/* 10. FAQ: Respuesta a dudas frecuentes y objeciones */}
      <FAQSection {...faqContent} />

      {/* 11. Final CTA: Cierre y último empuje a WhatsApp */}
      <FinalCtaSection {...finalCtaContent} />
    </main>
  );
}