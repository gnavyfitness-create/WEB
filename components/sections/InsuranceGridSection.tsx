import React from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import InsuranceCard from '@/components/shared/InsuranceCard';

interface InsuranceItem {
  title: string;
  description: string;
  badge?: string;
  href?: string;
  imageSrc: string; // Inyectamos la ruta de la imagen
}

interface InsuranceGridSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: InsuranceItem[];
}

export default function InsuranceGridSection({
  eyebrow = "Nuestras Soluciones",
  title,
  subtitle,
  items
}: InsuranceGridSectionProps) {
  return (
    <Section className="bg-[#F7F4EE] py-24 md:py-32">
      <Container>
        {/* Cabecera Editorial Estilo Folioblox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 md:mb-28">
          <div className="lg:col-span-7">
            <span className="text-[#C9A35A] font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
              {eyebrow}
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0F2F57] leading-[0.9] tracking-tighter">
              {title}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-[#1E2430]/70 text-lg md:text-xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Galería de Tarjetas Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <InsuranceCard
              key={index}
              title={item.title}
              description={item.description}
              badge={item.badge}
              href={item.href}
              imageSrc={item.imageSrc} // Pasamos la imagen .webp
              ctaLabel="Explorar"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}