import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface FinalCtaSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustNote?: string;
  imageSrc?: string; 
}

export default function FinalCtaSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustNote,
  imageSrc
}: FinalCtaSectionProps) {
  return (
    // CAMBIO: Fondo blanco puro y texto oscuro
    <Section className="relative bg-white text-[#0F2F57] text-center py-24 md:py-40 overflow-hidden border-t border-[#D9D6CF]/50">
      
      {/* Fondo Cinematográfico (Aclarado) */}
      {imageSrc && (
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src={imageSrc}
            alt="Asesoría Master Almaraz"
            fill
            className="object-cover grayscale"
            sizes="100vw"
          />
          {/* CAMBIO: Overlay de gradiente blanco para que el texto sea legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60" />
        </div>
      )}

      {/* Marco arquitectónico interno (Paspartú) oscuro */}
      <div className="absolute inset-6 md:inset-12 border border-[#D9D6CF] z-0 pointer-events-none hidden md:block"></div>
      
      {/* Elementos decorativos en las esquinas del marco */}
      <div className="absolute top-12 left-12 w-2 h-2 bg-[#C9A35A] z-0 hidden md:block"></div>
      <div className="absolute bottom-12 right-12 w-2 h-2 bg-[#C9A35A] z-0 hidden md:block"></div>

      {/* Contenedor Principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {eyebrow && (
          <span className="text-[#C9A35A] font-bold tracking-[0.4em] uppercase text-xs mb-8 block">
            {eyebrow}
          </span>
        )}
        
        {/* Título en Azul Marino */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tighter text-[#0F2F57]">
          {title}
        </h2>
        
        {/* Subtítulo en gris oscuro */}
        <p className="text-[#1E2430]/70 text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          {/* Botón Principal (Oscuro para contrastar con el fondo blanco) */}
          <Button 
            href={primaryCta.href} 
            external 
            variant="primary" // O la variante que use tu fondo oscuro por defecto
            className="w-full sm:w-auto px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase bg-[#0F2F57] text-white hover:bg-[#C9A35A] transition-colors duration-300"
          >
            {primaryCta.label}
          </Button>
          
          {/* Botón Secundario (Outline oscuro) */}
          {secondaryCta && (
            <Button 
              href={secondaryCta.href} 
              variant="outline" 
              className="w-full sm:w-auto px-10 py-4 border border-[#0F2F57] text-[#0F2F57] rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-[#0F2F57] hover:text-white transition-colors duration-300"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>

        {trustNote && (
          <div className="inline-block border-t border-[#D9D6CF] pt-8 mt-4">
            <p className="text-[10px] text-[#0F2F57]/40 tracking-[0.3em] uppercase font-bold">
              {trustNote}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}