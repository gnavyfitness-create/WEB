import { BUSINESS_INFO } from "../../lib/utils/constants";

/**
 * Contenido editorial para la sección de Confianza.
 * Estilo: Minimalista, Directo y de Alta Autoridad.
 */

export const trustContent = {
  eyebrow: "El Estándar Almaraz",
  title: "Asesoría clara, cercana y personalizada",
  subtitle: "En un mercado saturado de pólizas genéricas, nos enfocamos en entender tu realidad para construir una protección que realmente funcione cuando más la necesites.",
  
  items: [
    { 
      title: "Escucha Estratégica", 
      description: "Antes de hablar de costos, hablamos de tus metas. Analizamos tu perfil de riesgo para que no pagues de más ni estés desprotegido." 
    },
    { 
      title: "Ingeniería en Protección", 
      description: "Ajustamos cada cobertura a tu realidad actual, asegurando que tu patrimonio crezca y se mantenga blindado ante cualquier imprevisto." 
    },
    { 
      title: "Asesoría Sin Intermediarios", 
      description: "Sin conmutadores ni esperas eternas. Tienes acceso directo a Héctor Almaraz para resolver dudas o gestionar siniestros con prioridad." 
    },
    { 
      title: "Cercanía en Nayarit", 
      description: `Nuestra base está en Ciudad del Valle, ${BUSINESS_INFO.address.city}. La confianza de una firma local con el respaldo de las mejores aseguradoras de México.` 
    }
  ]
};