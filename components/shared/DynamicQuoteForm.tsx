'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { createWhatsAppLink } from '@/lib/whatsapp/whatsapp';

type InsuranceType = 'gastos-medicos' | 'retiro' | 'vida' | 'auto';

interface DynamicQuoteFormProps {
  whatsappPhone: string;
  className?: string;
}

export default function DynamicQuoteForm({ whatsappPhone, className }: DynamicQuoteFormProps) {
  const [type, setType] = useState<InsuranceType>('gastos-medicos');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    extra: '', // Meta de retiro, Modelo de auto, etc.
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let detail = "";
    if (type === 'gastos-medicos') detail = `para Gastos Médicos en ${formData.city}. Edad: ${formData.age}`;
    if (type === 'retiro') detail = `para un Plan de Retiro. Edad: ${formData.age}, Meta: ${formData.extra}`;
    if (type === 'vida') detail = `para Seguro de Vida en ${formData.city}. Edad: ${formData.age}`;
    if (type === 'auto') detail = `para Seguro de Auto. Modelo/Año: ${formData.extra}, Ciudad: ${formData.city}`;

    const message = `Hola Héctor, soy ${formData.name}. Me interesa una asesoría ${detail}.`;
    window.open(createWhatsAppLink(whatsappPhone, message), '_blank');
  };

  const inputStyles = "w-full px-4 py-3 bg-white border border-[#D9D6CF] text-[#1E2430] focus:ring-1 focus:ring-[#C9A35A] focus:border-[#C9A35A] outline-none transition-all rounded-sm";
  const labelStyles = "block text-xs font-bold uppercase tracking-wider text-[#0F2F57] mb-2";

  return (
    <div id="formulario" className={className}>
      <Card className="max-w-2xl mx-auto border-t-4 border-t-[#C9A35A]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0F2F57] mb-2">Cotiza tu tranquilidad</h2>
          <p className="text-[#1E2430]/60">Selecciona el ramo de tu interés y te contactaremos a la brevedad.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Selector de Ramo */}
          <div>
            <label className={labelStyles}>Tipo de Seguro</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {(['gastos-medicos', 'retiro', 'vida', 'auto'] as InsuranceType[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`py-2 px-1 text-xs font-bold rounded-sm border transition-all ${
                    type === t 
                      ? 'bg-[#0F2F57] text-white border-[#0F2F57]' 
                      : 'bg-transparent text-[#0F2F57] border-[#D9D6CF] hover:border-[#0F2F57]'
                  }`}
                >
                  {t.replace('-', ' ').toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyles}>Nombre Completo</label>
              <input name="name" required placeholder="Ej. Juan Pérez" onChange={handleInputChange} className={inputStyles} />
            </div>
            <div>
              <label className={labelStyles}>Ciudad</label>
              <input name="city" required placeholder="Ej. Tepic" onChange={handleInputChange} className={inputStyles} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyles}>Edad</label>
              <input name="age" type="number" required placeholder="Ej. 35" onChange={handleInputChange} className={inputStyles} />
            </div>
            <div>
              <label className={labelStyles}>
                {type === 'auto' ? 'Modelo y Año' : type === 'retiro' ? 'Meta de Ahorro' : 'Detalle Adicional'}
              </label>
              <input name="extra" placeholder="..." onChange={handleInputChange} className={inputStyles} />
            </div>
          </div>

          <Button type="submit" variant="secondary" className="w-full py-4 text-lg">
            Iniciar Cotización por WhatsApp
          </Button>
          
          <p className="text-[10px] text-center text-[#1E2430]/40 uppercase tracking-widest">
            Atención personalizada de Lunes a Viernes
          </p>
        </form>
      </Card>
    </div>
  );
}