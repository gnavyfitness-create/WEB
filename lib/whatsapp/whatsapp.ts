/**
 * Crea un enlace de WhatsApp válido (wa.me) a partir de un número y un mensaje.
 * Limpia caracteres no numéricos y encodear correctamente el texto.
 * * @param phone - Número de teléfono (ej: +52 311 141 6923)
 * @param message - Mensaje predeterminado (ej: Hola, quiero información...)
 * @returns URL de WhatsApp formateada
 */
export function createWhatsAppLink(phone: string, message: string): string {
  // Elimina cualquier carácter que no sea un dígito para el link de wa.me
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Codifica el mensaje para que sea seguro en una URL
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}