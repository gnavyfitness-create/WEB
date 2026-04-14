import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";
import { BUSINESS_INFO } from "@/lib/utils/constants"; // Usamos tu constante para mantener consistencia global

export const locationContent = {
  eyebrow: "Nuestra Sede",
  title: "Respaldo presencial en Ciudad del Valle",
  subtitle: "Un espacio diseñado para la consultoría patrimonial confidencial. Estamos físicamente en Tepic para dar la cara por ti cuando más lo necesites.",
  addressLines: [
    "Avenida Universidad 65", 
    "Ciudad del Valle", 
    "Tepic, Nayarit"
  ],
  hours: "Lunes a Viernes: 9:00 AM - 7:00 PM",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.946395343465!2d-104.8966785!3d21.488338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427371f6a623f95%3A0x6b49e3933c6a992e!2sAv.%20Universidad%2065%2C%20Cd%20del%20Valle%2C%2063157%20Tepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1712600000000!5m2!1ses-419!2smx", // Mantenemos tu URL de Google Maps
  imageSrc: "/images/home/location-office.webp", // Enlace a la nueva fotografía arquitectónica
  primaryCta: { 
    label: "Abrir en Maps", 
    href: "https://maps.app.goo.gl/YourGoogleMapsLink" 
  },
  secondaryCta: { 
    label: "Agendar Cita", 
    href: createWhatsAppLink(
      BUSINESS_INFO.whatsapp, 
      "Hola Héctor, me gustaría agendar una asesoría presencial en tu oficina de Ciudad del Valle."
    )
  }
};