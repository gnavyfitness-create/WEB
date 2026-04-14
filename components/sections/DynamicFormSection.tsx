import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container'; // Usamos Container para alinear todo
import DynamicQuoteForm from '@/components/shared/DynamicQuoteForm';

interface DynamicFormSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  supportText?: string;
  whatsappPhone: string;
  imageSrc?: string; // Prop nueva para la imagen editorial
}

export default function DynamicFormSection({
  id = "formulario",
  eyebrow = "Cotización personalizada",
  title,
  subtitle,
  supportText,
  whatsappPhone,
  imageSrc
}: DynamicFormSectionProps) {
  return (
    <Section id={id} className="bg-[#0F2F57] py-24 md:py-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Lado 1: Textos Editoriales e Imagen */}
          <div className="flex flex-col text-white">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
              {title}
            </h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-lg">
              {subtitle}
            </p>

            {/* Imagen Editorial Integrada (Solo visible en Desktop para no saturar el móvil) */}
            {imageSrc && (
              <div className="relative w-full max-w-sm h-[280px] hidden lg:block group">
                <Image
                  src={imageSrc}
                  alt="Asesoría patrimonial en oficina"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out z-10 relative"
                />
                {/* Marco dorado desfasado estilo Folioblox */}
                <div className="absolute inset-0 border border-[#C9A35A] translate-x-4 translate-y-4 pointer-events-none z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
              </div>
            )}

            {supportText && (
              <div className="mt-12 lg:mt-16 border-l-2 border-[#C9A35A] pl-6 max-w-md">
                <p className="text-sm text-white/90 font-medium leading-relaxed italic">
                  "{supportText}"
                </p>
              </div>
            )}
          </div>

          {/* Lado 2: Formulario (En un bloque blanco para máximo contraste) */}
          <div className="w-full relative z-10">
            <div className="bg-white p-8 md:p-12 shadow-2xl relative">
              {/* Acento dorado sutil en la esquina */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(201,163,90,0.1)_0%,transparent_70%)] pointer-events-none" />
              
              <DynamicQuoteForm 
                whatsappPhone={whatsappPhone} 
              />
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}