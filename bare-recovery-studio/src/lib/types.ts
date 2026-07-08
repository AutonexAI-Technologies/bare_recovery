// Core type definitions for Bare Recovery Studio

export interface Service {
    id: string
    name: string
    slug: string
    tagline: string
    description: string
    duration: string
    benefits: Benefit[]
    pricing: ServicePricing
    images: ServiceImages
    coachInsight: string
    relatedServices: string[]
    faqs: FAQ[]
    metadata: PageMetadata
}

export interface Benefit {
    icon: string
    text: string
    detail: string
}

export interface ServicePricing {
    single?: number
    upperBody?: number
    lowerBody?: number
    fullBody?: number
    couple?: number
}

export interface ServiceImages {
    hero: string
    detail: string
    gallery?: string[]
}

export interface FAQ {
    question: string
    answer: string
}

export interface PageMetadata {
    title: string
    description: string
    keywords?: string[]
    ogImage?: string
}

export interface PricingTier {
    id: string
    name: string
    price: number
    duration?: string
    description?: string
    includes?: string[]
    featured?: boolean
    savings?: number
    sessionType?: string
    interval?: string
    sessions?: number
    bestFor?: string
}

export interface FounderInfo {
    name: string
    role: string
    instagram: {
        handle: string
        url: string
        followers: string
        verified: boolean
    }
    philosophy: {
        tagline: string
        description: string
    }
    bio: string
    stats: Stat[]
    links: FounderLinks
    photos: string[]
    serviceInsights: Record<string, string>
}

export interface Stat {
    label: string
    value: string
    icon?: string
}

export interface FounderLinks {
    consultation1on1: string
    coachingForm: string
    instagram: string
    strava: string
}

export interface StudioInfo {
    name: string
    tagline: string
    address: {
        full: string
        line1: string
        line2: string
        city: string
        state: string
        pincode: string
    }
    contact: {
        phone: string
        whatsapp: string
        email: string
    }
    social: {
        instagram: string
        instagramHandle: string
    }
    location: {
        googleMapsUrl: string
        embedUrl: string
        coordinates?: {
            lat: number
            lng: number
        }
    }
    hours?: {
        [key: string]: string
    }
}

export interface FAQCategory {
    id: string
    title: string
    icon: string
    questions: FAQ[]
}

export interface NavigationLink {
    name: string
    href: string
    type?: 'link' | 'dropdown'
    children?: NavigationLink[]
}

export interface Testimonial {
    id: string
    name: string
    role: string
    content: string
    avatar?: string
    rating?: number
}

export interface ContactFormData {
    name: string
    email: string
    phone: string
    service: string
    message: string
}