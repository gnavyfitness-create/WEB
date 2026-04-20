import { HeroContent } from "../../types/home";
import { createWhatsAppLink } from "../../lib/whatsapp/whatsapp";
import { BUSINESS_INFO } from "../../lib/utils/constants";

export const heroContent: HeroContent = {
  title: "Héctor Almaraz. Asesor Exclusivo de Seguros Monterrey.",
  subtitle:
    "Protección que trasciende. Diseñamos estrategias de vida, retiro (Imagina Ser) y educación (SeguBeca) con el respaldo de la institución más sólida de México.",
  
  primaryCta: {
    label: "Agendar Sesión de Diagnóstico",
    href: createWhatsAppLink(
      BUSINESS_INFO.whatsapp,
      "Hola Héctor, me gustaría agendar una asesoría para diseñar mi estrategia patrimonial con Seguros Monterrey."
    ),
    external: true,
  },

  secondaryCta: {
    label: "Conocer mi trayectoria",
    href: "#trayectoria", // Enlazaremos a la nueva sección que vamos a crear
  },

  supportText: "Asesoría patrimonial de élite en Ciudad del Valle, Nayarit.",

  quickInfo: [
    { label: "Sede", value: "Cd. del Valle, Tepic" },
    { label: "Experiencia", value: "+10 Años Certificado" },
    { label: "Respaldo", value: "Seguros Monterrey NYL" }, // ¡Adiós competencia!
    { label: "Especialidad", value: "SeguBeca e Imagina Ser" },
  ],
};