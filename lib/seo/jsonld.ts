/**
 * Genera el esquema JSON-LD para Master Almaraz.
 * Este objeto permite que los buscadores e IAs identifiquen el negocio,
 * su ubicación en Tepic y al agente responsable.
 */

export const getSiteSchema = () => {
  const name = "Master Almaraz Agente de Seguros";
  const owner = "Héctor Almaraz Ledesma";
  const url = "https://masteralmaraz.com"; // Asegúrate de cambiarla cuando tengas el dominio final
  const logo = `${url}/logo.png`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        "@id": `${url}/#organization`,
        "name": name,
        "url": url,
        "logo": {
          "@type": "ImageObject",
          "url": logo
        },
        "image": `${url}/images/home/hero-agent.webp`,
        "description": "Agente de seguros especializado en gastos médicos, retiro, vida y auto en Ciudad del Valle, Tepic. Planeación patrimonial personalizada.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Avenida Universidad 65",
          "addressLocality": "Ciudad del Valle, Tepic",
          "addressRegion": "Nayarit",
          "postalCode": "63157",
          "addressCountry": "MX"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "21.4939", 
          "longitude": "-104.8967"
        },
        "telephone": "+523111416923",
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "Person",
        "@id": `${url}/#agent`,
        "name": owner,
        "jobTitle": "Especialista en Protección Médica y Planeación Patrimonial",
        "worksFor": { "@id": `${url}/#organization` },
        "image": `${url}/images/home/hero-agent.webp`
      }
    ]
  };
};