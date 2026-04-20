'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
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
  
  const icons = [
    <MessageCircle key="1" strokeWidth={1} className="w-7 h-7 text-[#C9A35A]" />,
    <ShieldCheck key="2" strokeWidth={1} className="w-7 h-7 text-[#C9A35A]" />,
    <UserCheck key="3" strokeWidth={1} className="w-7 h-7 text-[#C9A35A]" />,
    <MapPin key="4" strokeWidth={1} className="w-7 h-7 text-[#C9A35A]" />
  ];

  return (
    <Section id="confianza" className="p-0 overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row min-h-[700px]">
        
        {/* LADO IZQUIERDO: CLARO & EDITORIAL */}
        <div className="w-full lg:w-[40%] bg-[#F9F8F6] py-20 md:py-32 px-8 md:px-16 lg:px-24 flex flex-col justify-center relative">
          {/* Acento decorativo sutil (Textura de papel o marca de agua) */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('/images/paper-texture.webp')]" />
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-block text-[#C9A35A] font-bold tracking-[0.4em] uppercase text-[10px] mb-6">
              {eyebrow}
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-[#0F2F57] mb-8 leading-[1] tracking-tighter uppercase">
              {title}
            </h2>
            <div className="h-[2px] w-16 bg-[#C9A35A] mb-8" />
            <p className="text-[#0F2F57]/70 text-lg leading-relaxed font-light italic">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* LADO DERECHO: AZUL & TECNOLÓGICO */}
        <div className="w-full lg:w-[60%] bg-[#0F2F57] py-20 md:py-32 px-8 md:px-16 lg:px-24 relative flex flex-col justify-center">
          {/* Grid Pattern decorativo */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/images/grid-pattern.svg')]" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
            {items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="mb-6 flex items-end justify-between">
                  {/* Icono con contenedor de diseño "Sharp" */}
                  <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-[#C9A35A]/50 group-hover:bg-[#C9A35A]/5 transition-all duration-500">
                    {icons[index]}
                  </div>
                  {/* Número de serie tipo Dossier */}
                  <span className="text-white/10 font-black text-4xl leading-none">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="font-bold text-white text-xl uppercase tracking-widest mb-4 group-hover:text-[#C9A35A] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-white/50 leading-relaxed text-sm font-light border-l border-white/10 pl-6 group-hover:border-[#C9A35A] transition-all duration-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Sello de confianza discreto al final */}
          <div className="mt-20 pt-10 border-t border-white/5 flex items-center gap-4 opacity-20 group">
             <div className="w-2 h-2 bg-[#C9A35A] rounded-full group-hover:scale-150 transition-transform" />
             <p className="text-[10px] text-white uppercase tracking-[0.5em] font-bold">
               Criterio de Excelencia Seguros Monterrey
             </p>
          </div>
        </div>

      </div>
    </Section>
  );
}