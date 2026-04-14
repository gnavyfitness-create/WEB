import React from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface InsuranceCardProps {
  title: string;
  description: string;
  badge?: string;
  href?: string;
  ctaLabel?: string;
  featured?: boolean;
  className?: string;
  imageSrc: string; 
}

export default function InsuranceCard({
  title,
  description,
  badge,
  href,
  ctaLabel = "Más información",
  className,
  imageSrc
}: InsuranceCardProps) {
  return (
    <Card 
      className={`relative flex flex-col h-[500px] w-full group overflow-hidden border-none p-0 bg-[#0F2F57] ${className}`}
    >
      {/* 1. Imagen de Fondo - Zoom suave en hover */}
      <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-out lg:group-hover:scale-110">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover opacity-50 lg:opacity-60 lg:group-hover:opacity-40 transition-opacity"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      {/* 2. Overlay Radial - Garantiza legibilidad al centro */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,rgba(15,47,87,0.4)_0%,rgba(15,47,87,0.8)_100%)]" />

      {/* 3. Contenido CENTRADO TOTAL */}
      <div className="relative z-10 flex flex-col h-full p-8 items-center justify-center text-center">
        
        {badge && (
          <span className="text-[#C9A35A] font-bold uppercase text-[10px] tracking-[0.3em] mb-6 block">
            {badge}
          </span>
        )}
        
        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-[1.1] tracking-tighter uppercase italic">
          {title}
        </h3>
        
        {/* Descripción: Visible en móvil, se revela en desktop */}
        <p className="text-white/90 lg:text-white/70 text-sm leading-relaxed mb-8 max-w-[260px] 
                      opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
                      transition-all duration-500 transform lg:translate-y-4 lg:group-hover:translate-y-0">
          {description}
        </p>
        
        {href && (
          <div className="transition-all duration-500 
                          opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
                          scale-100 lg:scale-90 lg:group-hover:scale-100">
            <Button 
              href={href} 
              variant="secondary" 
              className="rounded-full text-xs font-bold px-8 py-3 shadow-xl"
            >
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}