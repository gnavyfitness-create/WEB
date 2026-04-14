/**
 * Configuración global del sitio y datos del negocio.
 * Sistema MAPS 2.0 - Master Almaraz Agente de Seguros
 */

export const siteConfig = {
  businessName: "Master Almaraz Agente de Seguros",
  ownerName: "Héctor Almaraz Ledesma",
  tagline: "Construimos tu futuro hoy garantizando tu tranquilidad mañana",
  description:
    "Asesoría personalizada en seguros de gastos médicos, vida, auto y retiro en Tepic, Nayarit. Soluciones claras y a la medida para proteger tu salud, patrimonio y futuro.",
  
  contact: {
    phone: "+52 311 141 6923",
    whatsapp: "+523111416923",
    whatsappMessage: "Hola, quiero información sobre un seguro y una asesoría personalizada.",
    email: "contacto@masteralmaraz.com", // Placeholder recomendado para coherencia
  },

  location: {
    address: "Avenida Universidad 65",
    neighborhood: "Ciudad del Valle",
    city: "Tepic",
    state: "Nayarit",
    fullAddress: "Avenida Universidad 65, Ciudad del Valle, 63157 Tepic, Nayarit",
    serviceArea: "Tepic y todo México",
  },

  hours: "Lunes a viernes, 9:00 AM a 7:00 PM",

  // Generación centralizada de links de acción
  links: {
    whatsapp: `https://wa.me/523111416923?text=${encodeURIComponent(
      "Hola, quiero información sobre un seguro y una asesoría personalizada."
    )}`,
    internalForm: "#cotizar",
  },

  cta: {
    primary: {
      label: "Solicitar asesoría por WhatsApp",
    },
    secondary: {
      label: "Cotizar mi seguro",
    },
  },
};

export type SiteConfig = typeof siteConfig;