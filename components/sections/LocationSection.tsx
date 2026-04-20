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
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string; 
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
    // CAMBIO: Fondo blanco con un sutilísimo patrón o sensación de limpieza
    <Section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Información Editorial */}
          <div className="lg:col-span-5 flex flex-col order-2 lg:order-1 lg:pr-10 relative z-10">
            
            {/* UX: Marca de agua de fondo para matar el "vacío" en desktop */}
            <div className="absolute top-0 left-[-20px] select-none pointer-events-none hidden md:block">
              <span className="text-[180px] font-black text-[#0F2F57]/[0.02] leading-none tracking-tighter">
                HQ
              </span>
            </div>

            <div className="relative z-10">
              <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                {eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F2F57] mb-8 leading-[1.05] tracking-tighter">
                {title}
              </h2>
              <p className="text-[#1E2430]/70 text-lg leading-relaxed mb-12 max-w-md font-light">
                {subtitle}
              </p>

              {/* Bloque de Dirección Estilo Dossier */}
              <div className="flex flex-col gap-8 mb-12">
                <div className="border-l border-[#D9D6CF] pl-6 transition-colors duration-500 hover:border-[#C9A35A] group">
                  <h4 className="text-[#0F2F57] font-bold uppercase text-[10px] tracking-[0.2em] mb-3 opacity-40 group-hover:opacity-70 transition-opacity">
                    Headquarters
                  </h4>
                  {addressLines.map((line, idx) => (
                    <p key={idx} className="text-[#1E2430] font-bold text-sm md:text-base tracking-wide uppercase leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                {hours && (
                  <div className="border-l border-[#D9D6CF] pl-6 transition-colors duration-500 hover:border-[#C9A35A] group">
                    <h4 className="text-[#0F2F57] font-bold uppercase text-[10px] tracking-[0.2em] mb-3 opacity-40 group-hover:opacity-70 transition-opacity">
                      Horario de Atención
                    </h4>
                    <p className="text-[#1E2430] font-bold text-sm md:text-base tracking-wide uppercase leading-relaxed">
                      {hours}
                    </p>
                  </div>
                )}
              </div>

              {/* UX Móvil: Botones w-full para fácil interacción táctil */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button 
                  href={primaryCta.href} 
                  external 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-sm text-xs font-bold uppercase tracking-widest px-8 py-3 border-[#0F2F57] text-[#0F2F57] hover:bg-[#0F2F57] hover:text-white transition-colors duration-300"
                >
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button 
                    href={secondaryCta.href} 
                    variant="ghost" 
                    className="w-full sm:w-auto text-xs font-bold uppercase tracking-widest px-6 py-3 text-[#1E2430]/60 hover:text-[#0F2F57]"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Composición de Imagen y Mapa */}
          {/* UX: En móvil usamos flex-col y ocultamos overflow para no romper la pantalla. En desktop usamos height fijo */}
          <div className="lg:col-span-7 relative h-auto md:h-[650px] w-full group order-1 lg:order-2 flex flex-col md:block gap-6">
            
            {/* 1. Imagen Editorial de Fondo */}
            {imageSrc && (
              <div className="relative md:absolute md:top-0 md:right-0 w-full md:w-[85%] h-[300px] md:h-[75%] z-10 overflow-hidden shadow-2xl rounded-sm">
                <Image
                  src={imageSrc}
                  alt="Oficina Master Almaraz"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0F2F57]/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
              </div>
            )}

            {/* 2. Mapa Interactivo (Superpuesto en Desktop, Apilado en Móvil) */}
            <div className={`relative md:absolute md:bottom-0 md:left-0 z-20 bg-white p-2 md:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm ${imageSrc ? 'w-full md:w-[65%] h-[300px] md:h-[45%]' : 'w-full h-full'}`}>
              <div className="w-full h-full relative overflow-hidden bg-[#D9D6CF] rounded-sm">
                {mapEmbedUrl ? (
                  // UX: pointer-events-none en iframe hasta hacer hover o tap para evitar scroll accidental en movil
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Master Almaraz"
                    className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
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
            <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-[#C9A35A] z-30 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          </div>
        </div>
      </Container>
    </Section>
  );
}