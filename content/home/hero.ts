import { HeroContent } from "../../types/home";
import { createWhatsAppLink } from "../../lib/whatsapp/whatsapp";
import { BUSINESS_INFO } from "../../lib/utils/constants";

/**
 * Contenido editorial para la sección Hero.
 * Estilo: Premium Trust Advisory (Inspiración Folioblox).
 */

export const heroContent: HeroContent = {
  title: "Héctor Almaraz. Asesoría en Blindaje Patrimonial.",
  subtitle:
    "Escuchamos tu situación y diseñamos soluciones claras para proteger tu salud, familia y futuro financiero en Tepic.",
  
  primaryCta: {
    label: "Solicitar asesoría por WhatsApp",
    href: createWhatsAppLink(
      BUSINESS_INFO.whatsapp,
      "Hola Héctor, me gustaría agendar una asesoría personalizada para revisar mis seguros."
    ),
    external: true,
  },

  secondaryCta: {
    label: "Cotizar mi seguro",
    href: "#formulario",
  },

  supportText: "Atención personalizada en Ciudad del Valle, Nayarit.",

  // Estos datos alimentarán los KPIs del estilo editorial que vimos
  quickInfo: [
    { label: "Ubicación", value: "Cd. del Valle, Tepic" },
    { label: "Experiencia", value: "+10 Años Certificado" },
    { label: "Alianzas", value: "GNP / AXA / MetLife" },
    { label: "Impacto", value: "+500 Familias" },
  ],
};