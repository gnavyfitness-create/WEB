import React from 'react';
import Section from '@/components/ui/Section';
import { ShieldCheck, MessageCircle, UserCheck, MapPin } from 'lucide-react'; 

interface TrustItem {
  title: string;
  description: string;
}

interface TrustSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: TrustItem[];
}

export default function TrustSection({
  eyebrow,
  title,
  subtitle,
  items
}: TrustSectionProps) {
  
  // Mapeo de iconos - Manteniendo la elegancia minimalista
  const icons = [
    <MessageCircle key="1" strokeWidth={1.5} className="w-6 h-6 text-[#C9A35A]" />,
    <ShieldCheck key="2" strokeWidth={1.5} className="w-6 h-6 text-[#C9A35A]" />,
    <UserCheck key="3" strokeWidth={1.5} className="w-6 h-6 text-[#C9A35A]" />,
    <MapPin key="4" strokeWidth={1.5} className="w-6 h-6 text-[#C9A35A]" />
  ];

  return (
    <Section className="bg-white border-y border-[#D9D6CF]/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Cabecera Editorial Izquierda */}
        <div className="lg:col-span-5 sticky top-24">
          <span className="inline-block text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
            {eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F2F57] mb-8 leading-[1.1] tracking-tighter">
            {title}
          </h2>
          <p className="text-[#1E2430]/70 text-lg leading-relaxed max-w-md">
            {subtitle}
          </p>
          
          <div className="mt-12 h-[2px] w-12 bg-[#C9A35A]"></div>
        </div>

        {/* Listado de Valores - Estilo Galería Minimalista */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {items.map((item, index) => (
            <div key={index} className="group flex flex-col">
              <div className="mb-6 flex items-center justify-between">
                {icons[index]}
                <span className="text-[#D9D6CF] font-mono text-sm">0{index + 1}</span>
              </div>
              
              <h3 className="font-bold text-[#0F2F57] text-xl uppercase tracking-tight mb-4 group-hover:text-[#C9A35A] transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-[#1E2430]/60 leading-relaxed text-sm pb-6 border-b border-[#D9D6CF]/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}