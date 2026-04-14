'use client';

import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export default function FAQSection({ 
  eyebrow = "Resolución de Dudas", 
  title, 
  subtitle, 
  items 
}: FAQSectionProps) {
  // Abrimos la primera pregunta por defecto para invitar a la interacción
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-[#F7F4EE] py-24 md:py-32 border-t border-[#D9D6CF]/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Columna Izquierda: Sticky Header */}
          <div className="lg:col-span-4 flex flex-col lg:sticky lg:top-32 h-fit">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F2F57] mb-8 leading-[1.05] tracking-tighter">
              {title}
            </h2>
            <p className="text-[#1E2430]/70 text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Columna Derecha: Acordeón Editorial */}
          <div className="lg:col-span-8 flex flex-col w-full border-t-2 border-[#0F2F57]">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className="border-b border-[#D9D6CF] group"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-8 flex items-center text-left transition-colors"
                  >
                    {/* Número Serial */}
                    <span className="text-[#0F2F57] font-mono text-sm font-bold opacity-30 mr-6 md:mr-10">
                      0{index + 1}
                    </span>
                    
                    {/* Pregunta */}
                    <span className={`flex-1 font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 pr-8 ${isOpen ? 'text-[#C9A35A]' : 'text-[#0F2F57] group-hover:text-[#C9A35A]'}`}>
                      {item.question}
                    </span>
                    
                    {/* Icono Minimalista */}
                    <div className={`relative w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? 'border-[#C9A35A] bg-[#C9A35A]' : 'border-[#0F2F57]/30 group-hover:border-[#C9A35A]'}`}>
                      <span className={`absolute w-3 h-[2px] transition-all duration-300 ${isOpen ? 'bg-white' : 'bg-[#0F2F57] group-hover:bg-[#C9A35A]'}`} />
                      <span className={`absolute w-[2px] h-3 transition-all duration-300 ${isOpen ? 'bg-white rotate-90 opacity-0' : 'bg-[#0F2F57] group-hover:bg-[#C9A35A]'}`} />
                    </div>
                  </button>

                  {/* Respuesta con animación CSS Grid (Más suave que max-height) */}
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#1E2430]/70 text-base md:text-lg leading-relaxed pb-10 pl-[45px] md:pl-[68px] max-w-3xl">
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