// Analytics utilities for Bare Recovery Studio
// Extend this file when GA/GTM is configured

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? ''

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gtag = (window as any).gtag
  if (typeof gtag === 'function') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}

export function trackWhatsAppClick(source: string) {
  trackEvent('whatsapp_click', 'engagement', source)
}

export function trackBookingIntent(service: string) {
  trackEvent('booking_intent', 'conversion', service)
}