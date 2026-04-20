'use client';

import React from 'react';
import Image from 'next/image'; 
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Star } from 'lucide-react'; 
import { HeroContent } from '@/types/home';

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  const agentPhotoUrl = "/images/home/hero-agent.webp"; 

  // Dividimos el título. Usamos un fallback por si no hay punto.
  const titleParts = content.title.includes('.') 
    ? content.title.split('.') 
    : [content.title, ''];

  return (
    <section className="relative bg-[#0F2F57] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center border-b border-[#C9A35A]/30">
      
      {/* 1. Fondo de Imagen Editorial */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image
          src={agentPhotoUrl}
          alt={titleParts[0]}
          fill
          priority
          className="object-cover object-center grayscale mix-blend-luminosity"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2F57] via-[#0F2F57]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F2F57]/50 to-[#0F2F57]" />
      </div>

      {/* 2. Resplandor Dorado Sutil */}
      <div className="absolute top-[10%] right-[-10%] w-[60%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(201,163,90,0.1)_0%,transparent_60%)] z-1 pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="max-w-3xl">
          
          <div className="flex items-center gap-1 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#C9A35A] text-[#C9A35A]" />
              ))}
            </div>
            <span className="ml-4 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#C9A35A]">
              Asesoría Patrimonial de Élite
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 leading-[0.95] tracking-tighter">
             {titleParts[0]}. <br/>
             {titleParts[1] && titleParts[1].trim() !== '' && (
               <span className="text-3xl md:text-5xl lg:text-6xl text-[#C9A35A] block mt-4 font-light tracking-tight">
                 {titleParts[1].trim()}.
               </span>
             )}
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 leading-relaxed font-light">
            {content.subtitle}
          </p>

          {/* BOTONES DE ACCIÓN CORREGIDOS */}
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <Button 
              href={content.primaryCta.href} 
              size="lg" 
              variant="secondary" 
              className="rounded-sm px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] bg-[#C9A35A] text-[#0F2F57] hover:bg-white transition-all duration-300 shadow-xl"
            >
               {content.primaryCta.label}
            </Button>
            
            {content.secondaryCta && (
              <Button 
                href={content.secondaryCta.href} 
                size="lg" 
                variant="outline" 
                // CAMBIO: border-white/40 y text-white para que resalte del fondo azul
                className="rounded-sm px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] border border-white/40 text-white hover:border-[#C9A35A] hover:bg-white/10 transition-all duration-300"
              >
                 {content.secondaryCta.label}
              </Button>
            )}
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mt-12 md:mt-24 pt-10 border-t border-white/10">
          {content.quickInfo.map((info, idx) => (
            <div key={idx} className="group">
              <p className="text-[#C9A35A] font-bold text-[10px] uppercase tracking-[0.2em] mb-2 group-hover:text-white transition-colors">
                #0{idx + 1} {info.label}
              </p>
              <p className="text-xl md:text-2xl font-black text-white tracking-tight">
                {info.value}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}