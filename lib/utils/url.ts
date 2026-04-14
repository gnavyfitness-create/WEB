/**
 * Utilidades para la gestión de URLs del sitio.
 * Centraliza la lógica para construir enlaces absolutos y 
 * asegurar la consistencia en el SEO.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://masteralmaraz.com";

/**
 * Construye una URL absoluta a partir de una ruta relativa.
 * Útil para metadatos, sitemaps y esquemas JSON-LD.
 */
export const getAbsoluteUrl = (path: string = "") => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
};

/**
 * Limpia una URL para que sea amigable (slugify).
 * Útil si en el futuro decides añadir un blog o secciones dinámicas.
 */
export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")     // Reemplaza espacios con -
    .replace(/[^\w-]+/g, "")   // Elimina caracteres no alfanuméricos
    .replace(/--+/g, "-");    // Reemplaza múltiples - con uno solo
};