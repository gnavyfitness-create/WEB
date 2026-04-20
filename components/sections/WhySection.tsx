import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface WhyItem {
  title: string;
  description: string;
  badge?: string;
}

interface WhySectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: WhyItem[];
  primaryCta?: { label: string; href: string };
  imageSrc?: string; 
}

export default function WhySection({
  eyebrow = "Filosofía Almaraz",
  title,
  subtitle,
  items,
  primaryCta,
  imageSrc
}: WhySectionProps) {
  return (
    // CAMBIO: Fondo blanco puro para máximo contraste y corte limpio
    <Section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Lado Izquierdo: Manifiesto e Imagen (Sticky) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 h-fit relative z-10">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F2F57] mb-8 leading-[1.05] tracking-tighter">
              {title}
            </h2>
            <p className="text-[#1E2430]/70 text-lg leading-relaxed mb-10 max-w-md font-light">
              {subtitle}
            </p>
            
            {primaryCta && (
              <div className="w-full md:w-auto mb-16">
                <Button 
                  href={primaryCta.href} 
                  variant="outline" 
                  // UX Móvil: w-full en teléfonos para fácil tap, automático en desktop
                  className="w-full md:w-auto rounded-sm px-8 py-3 text-xs font-bold uppercase tracking-widest border border-[#0F2F57] text-[#0F2F57] hover:bg-[#0F2F57] hover:text-white transition-colors duration-300"
                >
                  {primaryCta.label}
                </Button>
              </div>
            )}

            {/* Imagen Editorial */}
            {imageSrc && (
              <div className="relative w-full max-w-sm h-[450px] overflow-hidden group hidden md:block rounded-sm">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000 ease-in-out"
                />
                {/* Marco decorativo que aparece al hacer hover */}
                <div className="absolute inset-4 border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            )}
          </div>

          {/* Lado Derecho: Diferenciadores (Minimalistas y Elegantes) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16 lg:pt-8">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col group">
                {/* CAMBIO: Línea divisoria más fina (border-t) para estética premium */}
                <div className="border-t border-[#D9D6CF] pt-6 mb-5 flex justify-between items-center transition-colors duration-500 group-hover:border-[#C9A35A]">
                  <span className="text-[#0F2F57] font-mono text-sm font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  {item.badge && (
                    <span className="text-[#C9A35A] font-bold uppercase text-[10px] tracking-[0.2em]">
                      {item.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-[#0F2F57] mb-3 uppercase tracking-tighter group-hover:text-[#C9A35A] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#1E2430]/70 leading-relaxed text-sm md:text-base font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}