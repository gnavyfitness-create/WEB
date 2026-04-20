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
    // CAMBIO: Fondo con profundidad (radial-gradient) para matar la sensación plana
    <Section id={id} className="bg-[#0F2F57] text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,163,90,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Lado Izquierdo: Promesa de Valor (Sticky) */}
          <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-32 h-fit">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
              {title}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-md font-light">
              {subtitle}
            </p>
            
            {/* UX: Detalle visual para anclar el diseño */}
            <div className="mt-10 h-[1px] w-24 bg-gradient-to-r from-[#C9A35A] to-transparent hidden lg:block"></div>
          </div>

          {/* Lado Derecho: Metodología en Bloques Estructurados (Mata el "vacío") */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-8 pt-10 lg:pt-0">
            {steps.map((step, index) => (
              // CAMBIO: Estructura de tarjeta en lugar de texto flotante
              <div 
                key={index} 
                className="group relative bg-white/[0.02] border border-white/10 p-8 md:p-10 hover:bg-white/[0.05] hover:border-[#C9A35A]/50 transition-all duration-500 rounded-sm"
              >
                
                {/* Número Gigante Editorial (Marca de agua) */}
                <div className="absolute right-8 top-4 select-none pointer-events-none">
                  <span className="text-6xl md:text-8xl font-black text-white/[0.03] group-hover:text-[#C9A35A]/10 transition-colors duration-700 tracking-tighter">
                    {index + 1}
                  </span>
                </div>

                <div className="relative z-10">
                  {/* Etiqueta de Fase */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-8 bg-[#C9A35A] group-hover:w-12 transition-all duration-500"></div>
                    <span className="text-[#C9A35A] font-mono text-xs md:text-sm font-bold tracking-widest uppercase">
                      Fase 0{index + 1}
                    </span>
                  </div>
                  
                  {/* Contenido */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tighter text-white group-hover:text-white transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg font-light group-hover:text-white/80 transition-colors duration-500">
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