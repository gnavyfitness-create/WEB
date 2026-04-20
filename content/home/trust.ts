import { BUSINESS_INFO } from "../../lib/utils/constants";

/**
 * Contenido editorial para la sección de Confianza.
 * Estilo: Minimalista, Directo y de Alta Autoridad (Firma Privada).
 */

export const trustContent = {
  eyebrow: "El Estándar Almaraz",
  title: "Consultoría patrimonial sin intermediarios",
  subtitle: "En un mercado saturado de vendedores y pólizas genéricas, operamos como una firma boutique. Entendemos tu realidad para construir una protección que responda con exactitud cuando el momento llegue.",
  
  items: [
    { 
      title: "Diagnóstico Profundo", 
      description: "Antes de hablar de instrumentos financieros, auditamos tu situación. Analizamos tu perfil de riesgo para que cada peso invertido tenga un propósito estratégico y no pagues coberturas innecesarias." 
    },
    { 
      title: "Ingeniería en Protección", 
      description: "No adaptamos tu vida a un formato preestablecido. Estructuramos tu blindaje utilizando exclusivamente la solidez y el prestigio de Seguros Monterrey New York Life." 
    },
    { 
      title: "Respaldo Directo", 
      description: "Sin conmutadores automatizados ni call centers. Tienes línea directa con Héctor Almaraz para resolver dudas de inversión o gestionar siniestros con máxima prioridad." 
    },
    { 
      // CAMBIO CRÍTICO: Eliminamos el plural "mejores aseguradoras" y anclamos la solidez institucional
      title: "Presencia en Nayarit", 
      description: `Operamos desde nuestra sede en Ciudad del Valle, ${BUSINESS_INFO.address.city}. La confidencialidad y cercanía de una firma local, con el respaldo de más de 80 años de historia institucional.` 
    }
  ]
};