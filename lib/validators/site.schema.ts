/**
 * Esquemas de validación para los datos del sitio.
 * Asegura que la información crítica (teléfonos, URLs, correos)
 * sea válida antes de ser procesada por los componentes.
 */

export const validateBusinessData = (data: any) => {
  const errors: string[] = [];

  // 1. Validar WhatsApp (Debe ser un string de solo números)
  if (!data.whatsapp || !/^\d+$/.test(data.whatsapp)) {
    errors.push("El número de WhatsApp debe contener solo dígitos.");
  }

  // 2. Validar Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push("El correo electrónico no tiene un formato válido.");
  }

  // 3. Validar Dirección
  if (!data.address?.street || !data.address?.city) {
    errors.push("La dirección debe incluir al menos calle y ciudad.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Tipo para asegurar que los objetos de negocio
 * sigan siempre la misma estructura.
 */
export interface BusinessValidator {
  name: string;
  owner: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
  };
}