'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface InsuranceCardProps {
  title: string;
  description: string;
  badge?: string;
  imageSrc: string; 
}

export default function InsuranceCard({ title, description, badge, imageSrc }: InsuranceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative min-w-[320px] md:min-w-[420px] h-[550px] md:h-[600px] rounded-2xl overflow-hidden group bg-white border border-[#D9D6CF] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500"
    >
      {/* Imagen de fondo de alta calidad */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Degradado claro en la base para legibilidad (Igual que Apple) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-90" />

      {/* Contenido Editorial */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        {badge && (
          <span className="text-[#C9A35A] font-black uppercase text-[10px] tracking-[0.4em] mb-4">
            {badge}
          </span>
        )}
        {/* Título en azul marino para coherencia */}
        <h3 className="text-4xl md:text-5xl font-black text-[#0F2F57] mb-6 leading-[0.9] tracking-tighter uppercase">
          {title}
        </h3>
        <p className="text-[#1E2430]/80 text-lg leading-snug font-light max-w-sm italic">
          {description}
        </p>
        
        {/* Indicador de interacción */}
        <div className="w-12 h-1 bg-[#C9A35A] mt-8 transition-all duration-500 group-hover:w-24" />
      </div>
    </motion.div>
  );
}