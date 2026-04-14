import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Inyectamos el Menú Superior */}
      <Header />
      
      {/* 2. El contenido de tu HomePage (y futuras páginas) se inyecta aquí. 
          Le damos un padding-top (pt-20) para que el Header fijo no tape el Hero Section */}
      <main className="flex-grow pt-[80px] md:pt-[100px]">
        {children}
      </main>

      {/* 3. Inyectamos el Pie de Página */}
      <Footer />
    </div>
  );
}