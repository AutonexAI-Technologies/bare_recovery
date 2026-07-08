import { CONTACT_INFO, WHATSAPP_MESSAGES } from './constants'

/**
 * Generate WhatsApp URL with optional pre-filled message
 */
export function generateWhatsAppLink(message?: string): string {
    const baseUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`

    if (!message) {
        return `${baseUrl}?text=${encodeWhatsAppMessage(WHATSAPP_MESSAGES.default)}`
    }

    return `${baseUrl}?text=${encodeWhatsAppMessage(message)}`
}

/**
 * Get WhatsApp link for a specific service inquiry
 */
export function getServiceWhatsAppLink(serviceName: string): string {
    const message = WHATSAPP_MESSAGES.service(serviceName)
    return generateWhatsAppLink(message)
}

/**
 * Get WhatsApp link for booking a specific service
 */
export function getBookingWhatsAppLink(serviceName: string): string {
    const message = WHATSAPP_MESSAGES.bookService(serviceName)
    return generateWhatsAppLink(message)
}

/**
 * Get WhatsApp link for membership inquiry
 */
export function getMembershipWhatsAppLink(): string {
    return generateWhatsAppLink(WHATSAPP_MESSAGES.membership)
}

/**
 * Get WhatsApp link for general booking
 */
export function getGeneralBookingLink(): string {
    return generateWhatsAppLink(WHATSAPP_MESSAGES.booking)
}

/**
 * Encode message for WhatsApp URL
 */
export function encodeWhatsAppMessage(text: string): string {
    return encodeURIComponent(text)
}

/**
 * Get WhatsApp link with custom message
 */
export function getCustomWhatsAppLink(customMessage: string): string {
    return generateWhatsAppLink(customMessage)
}