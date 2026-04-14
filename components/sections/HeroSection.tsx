'use client';

import React from 'react';
import Image from 'next/image'; // Usamos el componente oficial para mejor manejo
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { ArrowRight, Star } from 'lucide-react'; 
import { HeroContent } from '@/types/home';

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  // RUTA CRÍTICA: Asegúrate de que el archivo existe en public/images/home/hero-agent.webp
  const agentPhotoUrl = "/images/home/hero-agent.webp"; 

  return (
    <section className="relative bg-[#0F2F57] text-[#F7F4EE] pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden min-h-[85vh] flex items-center">
      
      {/* 1. Fondo de Imagen con Next.js Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={agentPhotoUrl}
          alt="Héctor Almaraz - Agente de Seguros"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        {/* Capa de desvanecimiento para que el texto sea legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2F57]/60 via-[#0F2F57]/80 to-[#0F2F57]" />
      </div>

      {/* 2. Resplandor Dorado (Estilo Folioblox) */}
      <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(201,163,90,0.15)_0%,transparent_70%)] z-1 pointer-events-none" />

      <Container className="relative z-10 w-full">
        {/* Cabecera / Navbar rápida */}
        <div className="flex justify-between items-center mb-16 md:mb-24">
          <span className="font-black text-xl tracking-tighter uppercase italic">Master Almaraz</span>
          <Button href={content.secondaryCta.href} variant="ghost" className="border border-white/20 text-white rounded-full hover:bg-white hover:text-[#0F2F57] transition-all group">
             {content.secondaryCta.label}
             <div className="ml-2 w-6 h-6 rounded-full bg-[#C9A35A] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3 h-3 text-white" />
             </div>
          </Button>
        </div>

        <div className="max-w-3xl">
          {/* Estrellas de confianza */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C9A35A] text-[#C9A35A]" />
            ))}
            <span className="ml-3 text-xs font-bold tracking-[0.2em] uppercase text-[#C9A35A]">
              Asesoría de Confianza en Tepic
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
             Héctor <span className="text-[#C9A35A]">Almaraz.</span> <br/>
             Seguros con Claridad.
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-lg mb-12 leading-relaxed">
            {content.subtitle}
          </p>

          <Button href={content.primaryCta.href} size="lg" variant="secondary" external className="rounded-full px-10">
             {content.primaryCta.label}
          </Button>
        </div>

        {/* KPIs (Estilo Folioblox) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-10 border-t border-white/10">
          {content.quickInfo.map((info, idx) => (
            <div key={idx}>
              <p className="text-[#C9A35A] font-bold text-xs uppercase tracking-widest mb-1">#0{idx + 1} {info.label}</p>
              <p className="text-xl md:text-2xl font-black text-white">{info.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}