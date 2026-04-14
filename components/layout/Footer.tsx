import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { navigationConfig } from '@/content/navigation.config'; 
import { siteConfig } from '@/content/site.config'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2F57] text-white pt-20 pb-10 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Columna 1: Marca */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/" className="block w-56 h-12 relative mb-8">
              <Image
                src="/images/brand/logo-almaraz.svg" 
                alt={siteConfig.businessName}
                fill
                className="object-contain object-left brightness-0 invert" 
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              {siteConfig.description}
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-[#C9A35A] font-bold uppercase text-[10px] tracking-[0.2em] mb-6">Navegación</h4>
            <ul className="space-y-4">
              {navigationConfig.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="md:col-span-8 lg:col-span-4">
            <h4 className="text-[#C9A35A] font-bold uppercase text-[10px] tracking-[0.2em] mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <span className="block text-white/50 mb-1 text-xs">Oficina Central</span>
                {/* Usamos location.address que es la propiedad que sí existe en tu config */}
                {siteConfig.location.address}
              </li>
              <li className="pt-2">
                <span className="block text-white/50 mb-1 text-xs">Línea Directa</span>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +{siteConfig.contact.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Legal y Firma */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-white/40">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>© {currentYear} {siteConfig.businessName}. Todos los derechos reservados.</p>
            <span className="hidden md:inline">|</span>
            <p>
              Hecho con amor por <a href="https://somoslazaro.marketing" target="_blank" rel="noopener noreferrer" className="text-[#C9A35A] font-medium hover:text-white transition-colors">somoslazaro.marketing</a>
            </p>
          </div>
          
          <div className="flex gap-6">
            {navigationConfig.legal.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}