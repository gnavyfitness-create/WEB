import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface LocationSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  addressLines: string[];
  hours?: string;
  mapEmbedUrl?: string;
  mapLabel?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string; // Prop para la imagen arquitectónica
}

export default function LocationSection({
  eyebrow = "Nuestra Base",
  title,
  subtitle,
  addressLines,
  hours,
  mapEmbedUrl,
  primaryCta,
  secondaryCta,
  imageSrc
}: LocationSectionProps) {
  return (
    <Section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Información Editorial */}
          <div className="lg:col-span-5 flex flex-col order-2 lg:order-1 lg:pr-10">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F2F57] mb-8 leading-[1.05] tracking-tighter">
              {title}
            </h2>
            <p className="text-[#1E2430]/70 text-lg leading-relaxed mb-12 max-w-md">
              {subtitle}
            </p>

            <div className="flex flex-col gap-8 mb-12">
              <div className="border-l-2 border-[#D9D6CF] pl-6 transition-colors duration-500 hover:border-[#C9A35A]">
                <h4 className="text-[#0F2F57] font-bold uppercase text-[10px] tracking-[0.2em] mb-3 opacity-50">
                  Headquarters
                </h4>
               {addressLines.map((line, idx) => (
  <p key={idx} className="text-[#1E2430] font-bold text-sm tracking-wide uppercase leading-relaxed">
    {line}
  </p>
))}
              </div>

              {hours && (
                <div className="border-l-2 border-[#D9D6CF] pl-6 transition-colors duration-500 hover:border-[#C9A35A]">
                  <h4 className="text-[#0F2F57] font-bold uppercase text-[10px] tracking-[0.2em] mb-3 opacity-50">
                    Horario de Atención
                  </h4>
                  <p className="text-[#1E2430] font-bold text-sm tracking-wide uppercase leading-relaxed">
                    {hours}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Button 
                href={primaryCta.href} 
                external 
                variant="secondary" 
                className="rounded-full text-xs font-bold uppercase tracking-widest px-8 hover:bg-[#0F2F57] hover:text-white hover:border-[#0F2F57]"
              >
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button 
                  href={secondaryCta.href} 
                  variant="ghost" 
                  className="text-xs font-bold uppercase tracking-widest px-6"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>

          {/* Columna Derecha: Composición de Imagen y Mapa (Moodboard) */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[650px] w-full group order-1 lg:order-2">
            
            {/* 1. Imagen Editorial de Fondo */}
            {imageSrc && (
              <div className="absolute top-0 right-0 w-[90%] md:w-[80%] h-[70%] z-10 overflow-hidden shadow-2xl">
                <Image
                  src={imageSrc}
                  alt="Oficina Master Almaraz"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out hover:scale-105"
                />
              </div>
            )}

            {/* 2. Mapa Interactivo (Superpuesto) */}
            <div className={`absolute bottom-0 left-0 z-20 bg-white p-2 shadow-2xl ${imageSrc ? 'w-[85%] md:w-[65%] h-[45%] md:h-[40%]' : 'w-full h-full'}`}>
              <div className="w-full h-full relative overflow-hidden bg-[#D9D6CF]">
                {mapEmbedUrl ? (
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Master Almaraz"
                    className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-auto"
                  ></iframe>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-[#0F2F57]/40 p-4 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-widest">
                      Ciudad del Valle, Tepic
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Elemento Decorativo (Punto Dorado) */}
            <div className="absolute top-[20%] left-[5%] w-3 h-3 rounded-full bg-[#C9A35A] z-30 hidden md:block" />

          </div>
        </div>
      </Container>
    </Section>
  );
}