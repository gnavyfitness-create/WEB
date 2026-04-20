'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import InsuranceCard from '../shared/InsuranceCard';

interface InsuranceGridSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: any[];
}

export default function InsuranceGridSection({ eyebrow, title, subtitle, items }: InsuranceGridSectionProps) {
  return (
    // FONDO CLARO IGUAL A RESEÑAS
    <Section id="ingenieria" className="bg-[#F9F8F6] py-24 md:py-32 overflow-hidden border-t border-[#D9D6CF]">
      <Container>
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C9A35A] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              {eyebrow}
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0F2F57] leading-[1] tracking-tighter mb-8">
              {title}
            </h2>
            <p className="text-[#1E2430]/70 text-xl font-light italic">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Carrusel Draggable tipo Apple App Store */}
        <motion.div 
          className="flex gap-8 cursor-grab active:cursor-grabbing pb-12"
          drag="x"
          dragConstraints={{ right: 0, left: -1500 }}
        >
          {items.map((item, idx) => (
            <InsuranceCard key={idx} {...item} />
          ))}
        </motion.div>
        
        {/* Guía visual sutil */}
        <div className="flex items-center gap-4 opacity-30 mt-4">
          <div className="h-[1px] w-12 bg-[#0F2F57]" />
          <p className="text-[9px] text-[#0F2F57] uppercase tracking-[0.4em] font-black">
            Desliza para explorar ingeniería patrimonial
          </p>
        </div>
      </Container>
    </Section>
  );
}