import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";
import { BUSINESS_INFO } from "@/lib/utils/constants";

export const finalCtaContent = {
  eyebrow: "Asesoría Patrimonial en Nayarit", // Fuerte ancla de SEO Local
  title: "El primer paso hacia tu certeza financiera", // Menos vendedor, más consultivo
  subtitle: "No dejes el futuro de tu familia o empresa al azar. Agenda una sesión de diagnóstico confidencial en Tepic para estructurar tu plan de Vida, Retiro o Gastos Médicos con la solidez de Seguros Monterrey.", // Long-tail SEO
  
  imageSrc: "/images/home/cta-bg.webp", // Recuerda usar una foto arquitectónica o de Héctor de alta calidad aquí

  primaryCta: { 
    label: "Agendar Sesión Privada", // CTA de alto valor, no un simple "Contactar"
    href: createWhatsAppLink(
      BUSINESS_INFO.whatsapp, 
      "Hola Héctor, revisé el sitio web y me interesa agendar una sesión de diagnóstico para mi estrategia patrimonial con Seguros Monterrey."
    )
  },
  secondaryCta: { 
    label: "Completar Formulario", 
    href: "#formulario" 
  },
  
  // CAMBIO CRÍTICO: Eliminamos el plural genérico y anclamos la exclusividad
  trustNote: "Confidencialidad Absoluta • Asesor Exclusivo Seguros Monterrey New York Life"
};