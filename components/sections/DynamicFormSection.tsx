'use client';

import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import DynamicQuoteForm from '@/components/shared/DynamicQuoteForm';

interface DynamicFormSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  supportText?: string;
  whatsappPhone: string;
  imageSrc?: string; 
}

export default function DynamicFormSection({
  id = "formulario",
  eyebrow = "Diagnóstico Patrimonial",
  title,
  subtitle,
  supportText,
  whatsappPhone,
  imageSrc
}: DynamicFormSectionProps) {
  return (
    <Section id={id} className="bg-[#0F2F57] py-20 md:py-32 relative overflow-hidden">
      {/* Fondo con profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(30,58,100,0.4)_0%,_transparent_60%)] pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Lado 1: Textos Editoriales e Imagen */}
          <div className="flex flex-col text-white">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 block">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-[1.05] tracking-tighter">
              {title}
            </h2>
            
            {/* IMAGEN EN MÓVIL: Aparece aquí solo en sm/md */}
            {imageSrc && (
              <div className="relative w-full h-[250px] mb-8 lg:hidden rounded-sm overflow-hidden border border-white/10">
                <Image
                  src={imageSrc}
                  alt="Asesoría"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F57] to-transparent opacity-60" />
              </div>
            )}

            <p className="text-white/80 text-lg mb-8 lg:mb-12 leading-relaxed max-w-lg font-light">
              {subtitle}
            </p>

            {/* IMAGEN EN DESKTOP: Mantiene el marco dorado desfasado */}
            {imageSrc && (
              <div className="relative w-full max-w-sm h-[380px] hidden lg:block group mt-4">
                <Image
                  src={imageSrc}
                  alt="Asesoría patrimonial"
                  fill
                  sizes="33vw"
                  className="object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 ease-out z-10 relative"
                />
                <div className="absolute inset-0 border border-[#C9A35A] translate-x-4 translate-y-4 rounded-sm pointer-events-none z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
              </div>
            )}

            {/* Cita del Asesor */}
            {supportText && (
              <div className="mt-10 lg:mt-16 border-l-2 border-[#C9A35A] pl-6 max-w-md bg-white/5 p-6 rounded-r-sm backdrop-blur-sm">
                <p className="text-base text-white/90 font-medium leading-relaxed italic">
                  "{supportText}"
                </p>
              </div>
            )}
          </div>

          {/* Lado 2: Formulario */}
          <div className="w-full relative z-20">
            <div className="bg-white p-6 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.4)] rounded-sm border-t-8 border-[#C9A35A] relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(201,163,90,0.1)_0%,transparent_70%)] pointer-events-none" />
              
              {/* Título interno para móvil para que el usuario sepa qué hace aquí */}
              <p className="text-[#0F2F57] font-black text-xl mb-6 lg:hidden uppercase tracking-tighter">
                Completar Registro
              </p>

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