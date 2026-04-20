import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";
import { BUSINESS_INFO } from "@/lib/utils/constants";

export const formContent = {
  eyebrow: "Asesoría Confidencial",
  title: "Inicia el diseño de tu blindaje",
  subtitle: "Selecciona el área que deseas proteger (Salud, Retiro o Vida). Analizaremos tu perfil con absoluta discreción para estructurar una estrategia respaldada por Seguros Monterrey.",
  
  // UX: Un texto de soporte que suena a firma legal/financiera, generando confianza inmediata
  supportText: "Toda la información proporcionada está protegida bajo secreto profesional. La precisión en esta etapa es vital para garantizar el éxito de tu diagnóstico.",
  
  // Usamos la constante centralizada
  whatsappPhone: BUSINESS_INFO.whatsapp, 
  
  // Mensaje predeterminado con lenguaje de alto nivel
  defaultMessage: "Hola Héctor, me gustaría agendar una sesión privada para mi diagnóstico patrimonial.",
  
  imageSrc: "/images/home/form-contact.webp" // Recuerda usar una foto de la oficina o de Héctor trabajando
};