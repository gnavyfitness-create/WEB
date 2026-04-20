'use client';

import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
  whatsappPhone?: string; // Prop opcional para el botón de contacto rápido
}

export default function FAQSection({ 
  eyebrow = "Transparencia Total", // Un eyebrow más de consultoría
  title, 
  subtitle, 
  items,
  whatsappPhone = "523111416923"
}: FAQSectionProps) {
  // Abrimos la primera pregunta por defecto
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    // CAMBIO: Fondo oscuro para mantener el ritmo visual y dar peso
    <Section className="bg-[#0F2F57] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Sutil gradiente para no dejar el azul totalmente plano */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1F3D]/50 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Columna Izquierda: Sticky Header & Soporte */}
          <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-32 h-fit">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
              {title}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-12 font-light">
              {subtitle}
            </p>

            {/* UX: Tarjeta de contacto para matar el "vacío" debajo del texto */}
            <div className="hidden md:flex flex-col p-8 bg-white/[0.03] border border-white/10 rounded-sm group hover:border-[#C9A35A]/30 transition-colors duration-500">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-6 h-6 text-[#C9A35A]" />
                <h4 className="font-bold uppercase tracking-widest text-sm">¿Una duda específica?</h4>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Escríbeme directamente. Diseñar una estrategia patrimonial requiere claridad absoluta desde el primer momento.
              </p>
              <a 
                href={`https://wa.me/${whatsappPhone}?text=Hola%20H%C3%A9ctor,%20tengo%20una%20duda%20sobre%20el%20blindaje%20patrimonial.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A35A] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
              >
                Chat Directo <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Acordeón Editorial (Dossier) */}
          <div className="lg:col-span-7 flex flex-col w-full border-t border-[#C9A35A]/50 pt-2">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className="border-b border-white/10 group"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-8 md:py-10 flex items-center text-left transition-colors"
                  >
                    {/* Número Serial */}
                    <span className={`font-mono text-sm font-bold mr-6 md:mr-10 transition-colors duration-300 ${isOpen ? 'text-[#C9A35A]' : 'text-white/20 group-hover:text-white/50'}`}>
                      0{index + 1}
                    </span>
                    
                    {/* Pregunta */}
                    <span className={`flex-1 font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 pr-8 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-[#C9A35A]'}`}>
                      {item.question}
                    </span>
                    
                    {/* Icono Minimalista [+] / [-] */}
                    <div className={`relative w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? 'border-[#C9A35A] bg-[#C9A35A]/10' : 'border-white/20 group-hover:border-[#C9A35A]'}`}>
                      {/* Línea horizontal (siempre visible) */}
                      <span className={`absolute w-3 h-[2px] transition-all duration-300 ${isOpen ? 'bg-[#C9A35A]' : 'bg-white group-hover:bg-[#C9A35A]'}`} />
                      {/* Línea vertical (desaparece al abrir) */}
                      <span className={`absolute w-[2px] h-3 transition-all duration-300 ${isOpen ? 'bg-[#C9A35A] rotate-90 opacity-0' : 'bg-white group-hover:bg-[#C9A35A]'}`} />
                    </div>
                  </button>

                  {/* Respuesta con animación CSS Grid */}
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-white/60 text-base md:text-lg leading-relaxed pb-10 pl-[45px] md:pl-[68px] max-w-2xl font-light">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}