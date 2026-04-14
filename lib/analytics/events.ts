/**
 * Utilidades para el seguimiento de eventos y conversiones.
 * Centraliza las acciones que queremos medir para entender 
 * el comportamiento del usuario en la web.
 */

type EventAction = 'click_whatsapp' | 'submit_form' | 'view_insurance';

interface AnalyticsEvent {
  action: EventAction;
  category: string;
  label?: string;
  value?: number;
}

/**
 * Función base para disparar eventos.
 * Por ahora imprime en consola (dev), pero está lista para 
 * conectarse a Google Tag Manager o GA4.
 */
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event]: ${action}`, { category, label, value });
  }

  // Aquí se insertaría la lógica de window.gtag si se activa GA4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Evento específico para rastrear cuando alguien contacta por WhatsApp.
 */
export const trackWhatsAppClick = (insuranceType: string = 'general') => {
  trackEvent({
    action: 'click_whatsapp',
    category: 'conversion',
    label: insuranceType,
  });
};