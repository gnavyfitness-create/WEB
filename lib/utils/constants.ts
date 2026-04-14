/**
 * Constantes globales del proyecto Master Almaraz.
 * Centraliza los valores del negocio para asegurar consistencia 
 * en componentes y lógica de negocio.
 */

export const BRAND_COLORS = {
  primary: "#0F2F57",   // Azul Institucional
  secondary: "#C9A35A", // Dorado Sobrio
  accent: "#F7F4EE",    // Marfil Cálido
  text: "#1E2430",      // Texto Oscuro
};

export const BUSINESS_INFO = {
  name: "Master Almaraz Agente de Seguros",
  owner: "Héctor Almaraz Ledesma",
  phone: "+52 311 141 6923",
  whatsapp: "523111416923",
  email: "contacto@masteralmaraz.com",
  address: {
    street: "Avenida Universidad 65",
    neighborhood: "Ciudad del Valle",
    city: "Tepic",
    state: "Nayarit",
    zip: "63157",
  },
  hours: "Lunes a viernes de 9:00 AM a 7:00 PM",
};

export const INSURANCE_PRODUCTS = [
  { id: "sgmm", name: "Gastos Médicos Mayores", icon: "shield-plus" },
  { id: "ppr", name: "Plan Personal de Retiro", icon: "piggy-bank" },
  { id: "vida", name: "Seguro de Vida", icon: "heart-handshake" },
  { id: "auto", name: "Seguro de Auto", icon: "car-front" },
];