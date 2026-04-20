'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface TestimonialSectionProps {
  eyebrow: string;
  title: string;
  reviews: {
    name: string;
    rating: number;
    text: string;
    date: string;
  }[];
  googleMapsLink: string;
}

export default function TestimonialSection({
  eyebrow,
  title,
  reviews,
  googleMapsLink
}: TestimonialSectionProps) {
  return (
    // FONDO CLARO (Off-white editorial)
    <Section id="testimonios" className="bg-[#F9F8F6] py-24 md:py-32 overflow-hidden relative">
      
      {/* Sutil textura de fondo para que no se vea plano */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/paper-texture.webp')]" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-[#C9A35A] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              {eyebrow}
            </span>
            {/* TEXTO EN AZUL MARINO PARA MÁXIMO CONTRASTE */}
            <h2 className="text-5xl md:text-6xl font-black text-[#0F2F57] leading-[1] tracking-tighter">
              {title}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Button 
              href={googleMapsLink} 
              variant="outline" 
              className="border-[#0F2F57]/20 text-[#0F2F57] hover:bg-[#0F2F57] hover:text-white transition-all text-[10px] py-4 px-8 rounded-sm uppercase tracking-[0.2em] font-black"
            >
              Verificar en Google Maps
            </Button>
          </motion.div>
        </div>

        {/* Carrusel con Drag Dinámico */}
        <motion.div 
          className="flex gap-8 cursor-grab active:cursor-grabbing pb-10"
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }} 
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              // TARJETA BLANCA CON SOMBRA PROFUNDA (Estilo Dossier)
              className="min-w-[320px] md:min-w-[420px] bg-white border border-[#D9D6CF] p-10 rounded-sm shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:border-[#C9A35A]/50"
            >
              <div>
                {/* Comillas en Dorado (Claridad Visual) */}
                <span className="text-7xl font-serif text-[#C9A35A] opacity-20 block mb-[-25px] group-hover:opacity-100 transition-opacity duration-700">“</span>
                
                {/* TEXTO DE RESEÑA EN GRIS OSCURO ELEGANTE */}
                <p className="text-[#1E2430] text-xl md:text-2xl leading-snug font-light italic mb-8 relative z-10">
                  {review.text}
                </p>

                <div className="flex gap-1 mb-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#C9A35A] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* FOOTER DE LA TARJETA */}
              <div className="flex items-center gap-5 border-t border-[#D9D6CF] pt-8">
                <div className="w-12 h-12 rounded-full bg-[#0F2F57] flex items-center justify-center text-[#C9A35A] font-black text-lg border border-[#C9A35A]/20">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[#0F2F57] font-bold text-base tracking-tight">{review.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-[#0F2F57]/50 text-[9px] uppercase tracking-[0.2em] font-black">
                      Verificado • {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}