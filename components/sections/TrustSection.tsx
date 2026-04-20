'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  
  const icons = [
    <MessageCircle key="1" strokeWidth={1} className="w-7 h-7 text-[#C9A35A]" />,
    <ShieldCheck key="2" strokeWidth={1} className="w-7 h-7 text-[#C9A35A]" />,
    <UserCheck key="3" strokeWidth={1} className="w-7 h-7 text-[#C9A35A]" />,
    <MapPin key="4" strokeWidth={1} className="w-7 h-7 text-[#C9A35A]" />
  ];

  return (
    <Section id="confianza" className="p-0 overflow-hidden bg-white border-y border-[#D9D6CF]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* LADO IZQUIERDO (40% aprox) */}
        <div className="lg:col-span-5 bg-[#F9F8F6] py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#D9D6CF]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full mx-auto lg:mx-0"
          >
            <span className="text-[#C9A35A] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              {eyebrow}
            </span>
            {/* CAMBIO CLAVE: Quitamos break-words, suavizamos el leading a 1.1 y ajustamos tamaños */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#0F2F57] mb-8 leading-[1.1] tracking-tighter uppercase">
              {title}
            </h2>
            <div className="h-[3px] w-16 bg-[#C9A35A] mb-8" />
            <p className="text-[#0F2F57]/70 text-lg leading-relaxed font-light italic max-w-md">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* LADO DERECHO (60% aprox) */}
        <div className="lg:col-span-7 bg-[#0F2F57] py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-24 flex flex-col justify-center relative">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/images/grid-pattern.svg')]" />
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16 relative z-10">
            {items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                <div className="mb-6 flex items-end justify-between">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-[#C9A35A]/50 transition-all duration-500">
                    {icons[index]}
                  </div>
                  <span className="text-white/5 font-black text-6xl leading-none">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Ajustamos el salto de línea para títulos del lado derecho */}
                <h3 className="font-bold text-white text-lg lg:text-xl uppercase tracking-widest mb-4 group-hover:text-[#C9A35A] transition-colors leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-white/50 leading-relaxed text-sm font-light border-l-2 border-white/10 pl-6 group-hover:border-[#C9A35A] transition-all duration-500 max-w-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex items-center gap-4 opacity-30">
             <div className="w-2 h-2 bg-[#C9A35A] rounded-full" />
             <p className="text-[10px] text-white uppercase tracking-[0.5em] font-bold">
               Criterio de Excelencia Seguros Monterrey
             </p>
          </div>
        </div>

      </div>
    </Section>
  );
}