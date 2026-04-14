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
  imageSrc?: string; // Agregamos la prop para la imagen editorial
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
    <Section className="bg-[#F7F4EE] border-t border-[#D9D6CF]/50 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Lado Izquierdo: Manifiesto e Imagen (Sticky) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-24 h-fit">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F2F57] mb-8 leading-[1.05] tracking-tighter">
              {title}
            </h2>
            <p className="text-[#1E2430]/70 text-lg leading-relaxed mb-10 max-w-md">
              {subtitle}
            </p>
            
            {primaryCta && (
              <Button 
                href={primaryCta.href} 
                variant="outline" 
                className="rounded-full px-8 text-xs font-bold uppercase tracking-widest border-[#0F2F57] text-[#0F2F57] hover:bg-[#0F2F57] hover:text-white mb-16"
              >
                {primaryCta.label}
              </Button>
            )}

            {/* Imagen Editorial */}
            {imageSrc && (
              <div className="relative w-full max-w-sm h-[450px] overflow-hidden group hidden md:block">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-in-out"
                />
                {/* Overlay sutil para "apagar" un poco la foto y que sea más elegante */}
                <div className="absolute inset-0 bg-[#0F2F57]/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
            )}
          </div>

          {/* Lado Derecho: Diferenciadores (Minimalistas) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 lg:pt-12">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col group">
                {/* Línea divisoria y número de serie */}
                <div className="border-t-2 border-[#D9D6CF] pt-6 mb-6 flex justify-between items-center transition-colors duration-500 group-hover:border-[#C9A35A]">
                  <span className="text-[#0F2F57] font-mono text-sm font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  {item.badge && (
                    <span className="text-[#C9A35A] font-bold uppercase text-[9px] tracking-[0.2em]">
                      {item.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-black text-[#0F2F57] mb-4 uppercase tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-[#1E2430]/70 leading-relaxed text-sm">
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