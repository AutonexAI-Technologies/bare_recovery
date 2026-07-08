// Global constants for Bare Recovery Studio

export const SITE_CONFIG = {
    name: 'Bare Recovery Studio',
    tagline: 'Recover Better. Perform Better. Feel Better.',
    description:
        'Kompally\'s Premier Recovery Studio - Science-backed recovery services for athletes and wellness seekers.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://barerecovery.studio',
    keywords: [
        'recovery studio Kompally',
        'cryotherapy Hyderabad',
        'compression therapy',
        'red light therapy',
        'sauna Kompally',
        'cold plunge',
        'contrast therapy',
        'Bare Recovery',
        'Secunderabad wellness',
    ],
}

export const CONTACT_INFO = {
    phone: '7670861496',
    phoneFormatted: '+91 76708 61496',
    whatsapp: '917670861496',
    whatsappUrl: 'https://wa.me/917670861496',
    email: 'barerecovery@gmail.com',
}

export const STUDIO_HOURS = {
    display: '10 AM – 10:30 PM',
    days: 'Everyday',
    full: 'Open 10 AM – 10:30 PM, Everyday',
}

export const SOCIAL_LINKS = {
    instagram: 'https://www.instagram.com/bare.recovery',
    instagramHandle: '@bare.recovery',
    founderInstagram: 'https://www.instagram.com/de_abhinav',
    founderHandle: '@de_abhinav',
    youtube: 'https://www.youtube.com/@de_abhinav',
    youtubeHandle: '@de_abhinav',
}

export const STUDIO_ADDRESS = {
    full: '3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067',
    line1: '3rd Floor, Raichandani Orion',
    line2: 'NH44, Bashirabad, Kompally',
    city: 'Secunderabad',
    state: 'Telangana',
    pincode: '500067',
    googleMapsUrl: 'https://share.google/lS1Gy7gRXuZ2x51wI',
}

export const WHATSAPP_MESSAGES = {
    default: 'Hi! I would like to know more about Bare Recovery Studio.',
    booking: 'Hi! I would like to book a session at Bare Recovery Studio.',
    membership: 'Hi! I would like to know more about membership plans.',
    service: (serviceName: string) =>
        `Hi! I would like to know more about ${serviceName}.`,
    bookService: (serviceName: string) =>
        `Hi! I would like to book a ${serviceName} session.`,
}

export const THEME_COLORS = {
    bareBlack: '#0B0B0B',
    bareCharcoal: '#1A1A1A',
    bareGraphite: '#2D2D2D',
    bareWhite: '#F5F5F2',
    bareSilver: '#C6C6C6',
    whatsapp: '#25D366',
}

export const SPACING = {
    sectionGap: '120px',
    containerMax: '1280px',
    gutter: '24px',
    marginDesktop: '64px',
    marginMobile: '20px',
}

export const ANIMATION_DURATION = {
    fast: 200,
    normal: 300,
    slow: 500,
    verySlow: 1000,
}

export const ROUTES = {
    home: '/',
    about: '/about',
    services: '/services',
    pricing: '/pricing',
    contact: '/contact',
    faq: '/faq',
    founder: '/founder',
    blog: '/blog',
    privacyPolicy: '/privacy-policy',
    terms: '/terms',
}

export const SERVICE_ROUTES = {
    compressionTherapy: '/services/compression-therapy',
    redLightTherapy: '/services/red-light-therapy',
    traditionalSauna: '/services/traditional-sauna',
    coldPlunge: '/services/cold-plunge',
    contrastTherapy: '/services/contrast-therapy',
}