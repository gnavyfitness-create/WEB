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
  imageSrc?: string; // Prop para el fondo cinematográfico
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
    <Section className="relative bg-[#0F2F57] text-white text-center py-32 md:py-48 overflow-hidden">
      
      {/* Fondo Cinematográfico (Noir Aesthetic) */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt="Asesoría Master Almaraz"
            fill
            className="object-cover opacity-50 grayscale mix-blend-luminosity"
            sizes="100vw"
          />
          {/* Overlay de contraste brutal para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F57] via-[#0F2F57]/90 to-[#0F2F57]/60" />
        </div>
      )}

      {/* Contenedor Principal (Elevado sobre el fondo) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {eyebrow && (
          <span className="text-[#C9A35A] font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">
            {eyebrow}
          </span>
        )}
        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tighter uppercase italic">
          {title}
        </h2>
        
        <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            href={primaryCta.href} 
            external 
            size="lg" 
            variant="secondary"
            className="w-full sm:w-auto px-12 py-5 rounded-full text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(201,163,90,0.3)] hover:shadow-[0_0_50px_rgba(201,163,90,0.5)] transition-all duration-500"
          >
            {primaryCta.label}
          </Button>
          
          {secondaryCta && (
            <Button 
              href={secondaryCta.href} 
              size="lg" 
              variant="ghost" 
              className="w-full sm:w-auto px-10 border border-white/20 text-white hover:bg-white hover:text-[#0F2F57] rounded-full text-sm tracking-widest uppercase transition-all duration-500"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>

        {trustNote && (
          <div className="inline-block border-t border-white/10 pt-8">
            <p className="text-xs text-white/50 tracking-[0.2em] uppercase font-medium">
              {trustNote}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}