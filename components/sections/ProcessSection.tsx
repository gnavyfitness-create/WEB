import React from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

interface Step {
  title: string;
  description: string;
}

interface ProcessSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  steps: Step[];
}

export default function ProcessSection({
  id = "proceso",
  eyebrow = "Metodología",
  title,
  subtitle,
  steps
}: ProcessSectionProps) {
  return (
    <Section id={id} className="bg-[#0F2F57] text-white py-24 md:py-32 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Lado Izquierdo: Promesa de Valor (Sticky para que se quede fijo al hacer scroll) */}
          <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-32 h-fit">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
              {title}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              {subtitle}
            </p>
          </div>

          {/* Lado Derecho: Línea de tiempo vertical */}
          <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-16 md:pl-24 group">
                
                {/* Número Gigante Editorial */}
                <div className="absolute left-0 top-[-10px] md:top-[-20px] select-none">
                  <span className="text-6xl md:text-8xl font-black text-[#C9A35A]/10 group-hover:text-[#C9A35A]/30 transition-colors duration-700 tracking-tighter">
                    {index + 1}
                  </span>
                </div>

                {/* Contenido del paso con línea de tiempo */}
                <div className="border-l border-white/10 pl-8 md:pl-12 pb-16 relative">
                  {/* Punto brillante en la línea de tiempo */}
                  <div className="absolute left-[-4px] top-4 w-2 h-2 rounded-full bg-[#C9A35A]/30 group-hover:bg-[#C9A35A] group-hover:shadow-[0_0_10px_rgba(201,163,90,0.5)] transition-all duration-500" />
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg group-hover:text-white/90 transition-colors duration-500">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}