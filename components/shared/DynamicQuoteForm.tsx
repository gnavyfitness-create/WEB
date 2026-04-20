'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { createWhatsAppLink } from '@/lib/whatsapp/whatsapp';

// CAMBIO CRÍTICO: Eliminamos 'auto' e introducimos 'educacion'
type StrategyType = 'salud' | 'retiro' | 'vida' | 'educacion';

interface DynamicQuoteFormProps {
  whatsappPhone: string;
  className?: string;
}

export default function DynamicQuoteForm({ whatsappPhone, className }: DynamicQuoteFormProps) {
  const [type, setType] = useState<StrategyType>('salud');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    extra: '', 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mensajes adaptados a los productos de Seguros Monterrey
    let detail = "";
    if (type === 'salud') detail = `para una estrategia de Salud (Alfa Medical) en ${formData.city}. Edad: ${formData.age}, Ocupación: ${formData.extra}`;
    if (type === 'retiro') detail = `para un Plan Personal de Retiro (Imagina Ser). Edad: ${formData.age}, Capacidad mensual: ${formData.extra}`;
    if (type === 'vida') detail = `para un Seguro de Vida Patrimonial en ${formData.city}. Edad: ${formData.age}`;
    if (type === 'educacion') detail = `para un plan educativo (SeguBeca). Ciudad: ${formData.city}, Edad del menor: ${formData.extra}`;

    const message = `Hola Héctor, soy ${formData.name}. Me interesa agendar una sesión privada de diagnóstico ${detail}.`;
    window.open(createWhatsAppLink(whatsappPhone, message), '_blank');
  };

  // UI: Inputs más elegantes y ligeros
  const inputStyles = "w-full px-4 py-3 bg-white border border-[#D9D6CF] text-[#1E2430] focus:ring-1 focus:ring-[#C9A35A] focus:border-[#C9A35A] outline-none transition-all rounded-sm font-light";
  const labelStyles = "block text-[10px] font-bold uppercase tracking-widest text-[#0F2F57] mb-2 opacity-80";

  const typeLabels: Record<StrategyType, string> = {
    'salud': 'SALUD',
    'retiro': 'RETIRO',
    'vida': 'VIDA',
    'educacion': 'EDUCACIÓN'
  };

  return (
    <div id="formulario-dinamico" className={className}>
      <div className="text-center mb-10">
        {/* Lenguaje consultivo, cero "vendedor" */}
        <h2 className="text-3xl md:text-4xl font-black text-[#0F2F57] mb-3 tracking-tighter">Solicitud de Diagnóstico</h2>
        <p className="text-[#1E2430]/70 font-light">Selecciona el área patrimonial que deseas estructurar con Seguros Monterrey.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Selector de Área */}
        <div>
          <label className={labelStyles}>Área de Protección</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {(Object.keys(typeLabels) as StrategyType[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`py-3 px-2 text-[10px] sm:text-xs font-bold rounded-sm border transition-all uppercase tracking-widest ${
                  type === t 
                    ? 'bg-[#0F2F57] text-[#C9A35A] border-[#0F2F57]' 
                    : 'bg-transparent text-[#1E2430]/60 border-[#D9D6CF] hover:border-[#0F2F57] hover:text-[#0F2F57]'
                }`}
              >
                {typeLabels[t]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyles}>Nombre Completo</label>
            <input name="name" required placeholder="Ej. Juan Pérez" onChange={handleInputChange} className={inputStyles} />
          </div>
          <div>
            <label className={labelStyles}>Ciudad de Residencia</label>
            <input name="city" required placeholder="Ej. Tepic, Nayarit" onChange={handleInputChange} className={inputStyles} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyles}>Tu Edad</label>
            <input name="age" type="number" required placeholder="Ej. 35" onChange={handleInputChange} className={inputStyles} />
          </div>
          <div>
            {/* Etiqueta dinámica según el ramo seleccionado */}
            <label className={labelStyles}>
              {type === 'educacion' ? 'Edad del Menor' : type === 'retiro' ? 'Capacidad Mensual (Aprox)' : 'Ocupación / Profesión'}
            </label>
            <input 
              name="extra" 
              placeholder={type === 'educacion' ? "Ej. 3 años" : type === 'retiro' ? "Ej. $3,000 MXN" : "Ej. Empresario"} 
              onChange={handleInputChange} 
              className={inputStyles} 
            />
          </div>
        </div>

        <Button type="submit" className="w-full py-4 text-sm font-bold uppercase tracking-widest bg-[#0F2F57] text-white hover:bg-[#C9A35A] transition-colors duration-300 rounded-sm mt-4">
          Agendar Diagnóstico Confidencial
        </Button>
        
        <p className="text-[9px] text-center text-[#0F2F57]/40 uppercase tracking-[0.2em] font-bold mt-4">
          Información cifrada bajo secreto profesional
        </p>
      </form>
    </div>
  );
}