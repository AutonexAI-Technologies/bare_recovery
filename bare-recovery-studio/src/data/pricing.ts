import type { PricingTier } from '@/lib/types'

// SINGLE SESSIONS
export const singleSessions: PricingTier[] = [
    {
        id: 'full-circuit',
        name: 'Full Circuit',
        price: 3000,
        duration: '60-90 min',
        description: 'Complete recovery experience with all modalities',
        includes: [
            'All recovery services',
            'Complete experience',
            'Personalized session',
            'VIP Recovery Concierge',
        ],
        featured: true,
    },
    {
        id: 'contrast-therapy',
        name: 'Contrast Therapy',
        price: 1800,
        duration: '20-40 min',
        description: 'Sauna + Cold Plunge',
        includes: [
            'Sauna session (15-30 min)',
            'Cold plunge (2-5 min)',
            '2-3 rounds',
            'Hot & Cold Immersion',
        ],
    },
    {
        id: 'cold-plunge',
        name: 'Cold Plunge / Ice Bath',
        price: 1200,
        duration: '2-5 min',
        description: 'Cold-water immersion',
        includes: [
            'Cold-water immersion',
            'Inflammation reduction',
            'Mental clarity boost',
        ],
    },
    {
        id: 'sauna',
        name: 'Sauna',
        price: 1000,
        duration: '15-30 min',
        description: 'Traditional dry sauna',
        includes: [
            'Traditional dry sauna',
            'Deep relaxation',
            'Detoxification',
            'Cardiovascular support',
        ],
    },
    {
        id: 'red-light-therapy',
        name: 'Red Light Therapy',
        price: 800,
        duration: '10-20 min',
        description: 'Cellular repair therapy',
        includes: [
            'Cellular repair therapy',
            'Full body coverage',
            'Skin rejuvenation',
            'Inflammation reduction',
        ],
    },
    {
        id: 'compression-upper',
        name: 'Compression (Upper Body)',
        price: 800,
        duration: '20-30 min',
        description: 'Upper body compression',
        includes: [
            'Upper body compression',
            'Lymphatic drainage',
            'Circulation improvement',
        ],
    },
    {
        id: 'compression-lower',
        name: 'Compression (Lower Body)',
        price: 800,
        duration: '20-30 min',
        description: 'Lower body compression',
        includes: [
            'Lower body compression',
            'Lymphatic drainage',
            'Reduces muscle soreness',
        ],
    },
    {
        id: 'compression-full',
        name: 'Compression (Full Body)',
        price: 1400,
        duration: '20-30 min',
        description: 'Upper + Lower Body',
        includes: [
            'Complete compression',
            'Upper + Lower body',
            'Maximum recovery effect',
        ],
    },
]

// COUPLE SESSIONS
export const coupleSessions: PricingTier[] = [
    {
        id: 'couple-full-circuit',
        name: 'Full Circuit for Two',
        price: 4800,
        duration: '60-90 min',
        description: 'Complete recovery for couples',
        includes: [
            'All services × 2 people',
            'Private session',
            'Personalized guidance',
        ],
        savings: 1200,
    },
    {
        id: 'couple-contrast',
        name: 'Contrast Therapy for Two',
        price: 2200,
        duration: '20-40 min',
        description: 'Sauna + Cold Plunge for couples',
        includes: [
            'Sauna + Cold × 2',
            'Private session',
            '2-3 rounds',
        ],
        savings: 1400,
    },
    {
        id: 'couple-cold-plunge',
        name: 'Cold Plunge for Two',
        price: 1600,
        duration: '2-5 min',
        description: 'Ice bath for couples',
        includes: [
            'Ice bath × 2 people',
            'Guided session',
        ],
        savings: 800,
    },
    {
        id: 'couple-sauna',
        name: 'Sauna for Two',
        price: 1400,
        duration: '15-30 min',
        description: 'Traditional sauna for couples',
        includes: [
            'Traditional sauna × 2',
            'Private session',
        ],
        savings: 600,
    },
]

// MEMBERSHIPS
export const memberships: PricingTier[] = [
    {
        id: 'monthly-plan',
        name: 'Monthly Plan',
        price: 8999,
        interval: 'month',
        sessions: 5,
        description: 'Flexible recovery routine',
        includes: [
            '5 Sessions per month',
            'Any service, any time',
            '1 Bring-a-Friend pass',
            'Flexible scheduling',
            'Priority booking',
        ],
        bestFor: 'Regular recovery routine',
    },
    {
        id: '3-month-plan',
        name: '3-Month Plan',
        price: 23999,
        interval: '3 months',
        sessions: 16,
        sessionType: 'Contrast sessions only',
        description: 'Dedicated contrast therapy program',
        includes: [
            '16 Contrast sessions',
            '2 Bring-a-Friend passes',
            'Priority booking',
            'Personalized recovery plan',
            '₹1,500 per session vs ₹1,800 regular',
        ],
        featured: true,
        savings: 5000,
        bestFor: 'Serious athletes',
    },
]

// EXPORT ALL
export const allPricing = {
    single: singleSessions,
    couple: coupleSessions,
    memberships: memberships,
}