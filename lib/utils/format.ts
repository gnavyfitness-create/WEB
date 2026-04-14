/**
 * Utilidades de formato para la interfaz de usuario.
 * Asegura que los datos financieros y de contacto se muestren
 * con un estándar profesional y legible.
 */

/**
 * Formatea un número como moneda (MXN por defecto).
 * Uso: formatCurrency(1500) -> $1,500.00
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(amount);
};

/**
 * Formatea una fecha en estilo editorial (ej. 8 de abril de 2026).
 */
export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

/**
 * Limpia un string para que solo queden los dígitos.
 * Útil para procesar números antes de enviarlos a WhatsApp.
 */
export const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, "");
};