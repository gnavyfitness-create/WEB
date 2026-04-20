import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";
import { BUSINESS_INFO } from "@/lib/utils/constants";

export const locationContent = {
  eyebrow: "Sede Operativa",
  title: "Respaldo institucional en Ciudad del Valle",
  subtitle: "Diseñamos un espacio exclusivo para la planeación patrimonial confidencial. Más que una oficina, es tu centro de operaciones en Tepic; el lugar donde damos la cara para gestionar y respaldar cada uno de tus contratos.",
  
  addressLines: [
    "Avenida Universidad 65", 
    "Ciudad del Valle", 
    "Tepic, Nayarit, C.P. 63157"
  ],
  
  hours: "Lunes a Viernes: 9:00 AM - 7:00 PM",
  
  // INYECTAMOS TU MAPA REAL AQUÍ:
mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29698.71109609458!2d-104.891479576347!3d21.49444208750683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273780a0e5e381%3A0x93fff01527de81ac!2sMaster%20Almaraz%20%7C%20Seguros%20y%20Asesor%C3%ADa%20Patrimonial!5e0!3m2!1ses!2smx!4v1776715303047!5m2!1ses!2smx",  
  imageSrc: "/images/home/location-office.webp", 
  
  primaryCta: { 
    label: "Ruta GPS",
    href: "https://maps.app.goo.gl/tu-enlace-corto" // Opcional: Aquí puedes poner el enlace corto de compartir para el botón
  },
  
  secondaryCta: { 
    label: "Agendar Sesión Privada", 
    href: createWhatsAppLink(
      BUSINESS_INFO.whatsapp, 
      "Hola Héctor, me gustaría agendar una asesoría presencial en tu firma de Ciudad del Valle."
    )
  }
};