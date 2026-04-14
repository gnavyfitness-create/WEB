'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
// Ruta actualizada a tu estructura real
import { navigationConfig } from '@/content/navigation.config'; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto Glassmorphism al hacer scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-[#D9D6CF]/50 py-3 shadow-sm' 
          : 'bg-white border-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative z-10 block w-48 h-10 transition-transform hover:scale-105">
            <Image
              src="/images/brand/logo-almaraz.svg" 
              alt="Master Almaraz"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationConfig.main.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-[#0F2F57] text-xs font-bold uppercase tracking-widest hover:text-[#C9A35A] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pl-4 border-l border-[#D9D6CF]">
              <Button href="#formulario" variant="secondary" className="rounded-full text-xs px-6 py-2 shadow-sm">
                Agendar Sesión
              </Button>
            </div>
          </nav>

          {/* Botón Menú Móvil */}
          <button 
            className="md:hidden relative z-10 text-[#0F2F57] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </Container>

      {/* Menú Móvil Desplegable */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-[#D9D6CF] shadow-xl transition-all duration-300 origin-top ${
        isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
      }`}>
        <div className="flex flex-col p-6 space-y-6">
          {navigationConfig.main.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#0F2F57] text-sm font-bold uppercase tracking-widest hover:text-[#C9A35A] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#D9D6CF]">
            <Button href="#formulario" variant="secondary" className="w-full justify-center">
              Agendar Sesión
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}