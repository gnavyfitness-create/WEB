import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";
import { BUSINESS_INFO } from "@/lib/utils/constants";

export const finalCtaContent = {
  eyebrow: "El Siguiente Paso",
  title: "La decisión que blinda tu patrimonio",
  subtitle: "No dejes tu tranquilidad al azar. Inicia hoy el diseño de tu estrategia de protección financiera con orientación experta.",
  
  imageSrc: "/images/home/cta-bg.webp", // El fondo oscuro cinematográfico

  primaryCta: { 
    label: "Iniciar Diagnóstico", 
    href: createWhatsAppLink(
      BUSINESS_INFO.whatsapp, 
      "Hola Héctor, revisé el sitio web y me interesa agendar una sesión de diagnóstico patrimonial."
    )
  },
  secondaryCta: { 
    label: "Completar Perfil", 
    href: "#formulario" 
  },
  trustNote: "Confidencialidad absoluta • Soluciones respaldadas por aseguradoras de élite"
};