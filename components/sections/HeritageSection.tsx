import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

interface HeritageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  stats: { value: string; label: string }[];
}

export default function HeritageSection({
  eyebrow, title, subtitle, paragraphs, imageSrc, imageAlt, stats
}: HeritageProps) {
  return (
    <Section id="trayectoria" className="bg-white text-[#1E2430] py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Imagen Editorial */}
          <div className="relative h-[500px] lg:h-[700px] w-full rounded-sm overflow-hidden shadow-2xl group">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              // CAMBIO: Eliminamos "grayscale" y agregamos un zoom sutil al hacer hover
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Degradado hacia blanco para fusionar la foto con el fondo de la página */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80" />
          </div>

          {/* Contenido (La Voz de Héctor) */}
          <div className="flex flex-col relative z-10">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              {eyebrow}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tighter text-[#0F2F57]">
              {title}
            </h2>
            
            <p className="text-[#C9A35A] text-xl font-medium mb-8 leading-relaxed">
              {subtitle}
            </p>
            
            <div className="space-y-6 mb-12">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="text-[#1E2430]/70 text-lg leading-relaxed font-light">
                  {p}
                </p>
              ))}
            </div>

            {/* Micro-datos de confianza */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#D9D6CF]">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-black text-[#0F2F57] mb-2">{stat.value}</p>
                  <p className="text-xs text-[#0F2F57]/50 uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}