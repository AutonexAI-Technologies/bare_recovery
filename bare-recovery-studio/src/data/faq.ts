import type { FAQCategory } from '@/lib/types'

export const faqCategories: FAQCategory[] = [
    {
        id: 'about-services',
        title: 'About Services',
        icon: 'info',
        questions: [
            {
                question: 'What is recovery therapy?',
                answer: 'Recovery therapy uses evidence-based services to help your body repair and adapt after physical stress. We offer 5 services: Compression Therapy, Red Light Therapy, Traditional Sauna, Cold Plunge, and Contrast Therapy.',
            },
            {
                question: 'What services do you offer?',
                answer: 'We offer: Compression Therapy (₹800-₹1,400), Red Light Therapy (₹800), Traditional Sauna (₹1,000), Cold Plunge (₹1,200), Contrast Therapy (₹1,800), and Full Circuit (₹3,000).',
            },
            {
                question: 'Do I need to be an athlete to use your services?',
                answer: 'No! Our services benefit athletes, fitness enthusiasts, professionals, and anyone seeking better recovery and wellness. Whether you train intensely or just want to feel better, we have protocols for you.',
            },
            {
                question: 'What should I wear for my appointment?',
                answer: 'Comfortable athletic clothing. For Sauna and Cold Plunge, bring swimwear. For Compression Therapy, shorts are recommended for lower body sessions. We provide towels and robes.',
            },
            {
                question: 'Can I use multiple services in one visit?',
                answer: 'Yes! Our Full Circuit (₹3,000) includes all 5 services. Contrast Therapy combines Sauna and Cold Plunge. You can also book individual services back-to-back.',
            },
            {
                question: 'How often should I come for recovery sessions?',
                answer: 'Depends on your goals. Athletes in heavy training: 2-3x/week. General wellness: 1-2x/week. Our Monthly Membership (5 sessions for ₹8,999) is ideal for regular use.',
            },
            {
                question: 'Where are you located?',
                answer: '3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067. Ample parking available.',
            },
            {
                question: 'How do I book a session?',
                answer: 'WhatsApp us at 7670861496, call directly, or use our online booking form. We\'ll help you choose the right protocol and schedule.',
            },
        ],
    },
    {
        id: 'booking-pricing',
        title: 'Booking & Pricing',
        icon: 'payments',
        questions: [
            {
                question: 'How do I book a session?',
                answer: 'WhatsApp 7670861496, call directly, or submit our online contact form. We respond within 4 business hours and will help you schedule.',
            },
            {
                question: 'What are your prices?',
                answer: 'Single Sessions: Compression (₹800-₹1,400), Red Light (₹800), Sauna (₹1,000), Cold Plunge (₹1,200), Contrast (₹1,800), Full Circuit (₹3,000). Couple Sessions and Memberships also available.',
            },
            {
                question: 'Do you offer couple sessions?',
                answer: 'Yes! Couple pricing: Full Circuit ₹4,800, Contrast Therapy ₹2,200, Cold Plunge ₹1,600, Sauna ₹1,400. Enjoy recovery together in private sessions.',
            },
            {
                question: 'Tell me about your membership plans?',
                answer: 'Monthly Plan: ₹8,999 (5 sessions, any service, 1 Bring-a-Friend pass). 3-Month Plan: ₹23,999 (16 Contrast sessions, 2 Bring-a-Friend passes). Best value for consistent recovery.',
            },
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, UPI, credit/debit cards, and digital wallets. Payment is taken at the studio after your session.',
            },
            {
                question: 'What is your cancellation policy?',
                answer: 'We require 12-hour notice for cancellations. Late cancellations or no-shows may incur a fee or forfeiture of session credit for members.',
            },
            {
                question: 'Can I buy sessions as a gift?',
                answer: 'Yes! Contact us on WhatsApp (7670861496) to purchase gift sessions or gift memberships. Perfect for wellness-minded friends and family.',
            },
            {
                question: 'Do membership sessions expire?',
                answer: 'Monthly memberships renew each month. 3-Month memberships are valid for 3 months from purchase date. Unused sessions do not roll over.',
            },
        ],
    },
    {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'verified_user',
        questions: [
            {
                question: 'Who should NOT use cold plunge?',
                answer: 'Consult your physician if you have cardiovascular conditions, Raynaud\'s disease, uncontrolled high blood pressure, or are pregnant. We require a health waiver for all first-time clients.',
            },
            {
                question: 'Are there restrictions for sauna use?',
                answer: 'Consult your physician if you are pregnant, have heart conditions, uncontrolled blood pressure, or recent heart issues. Stay hydrated and listen to your body.',
            },
            {
                question: 'Is compression therapy safe?',
                answer: 'Yes, for most people. Avoid if you have acute DVT (deep vein thrombosis), severe circulatory issues, or active infections. Our staff will guide you through a health screening.',
            },
            {
                question: 'How do you maintain hygiene in the cold plunges?',
                answer: 'Our water filtration system uses medical-grade UV sterilization and ozone treatment. We monitor water chemistry multiple times daily and exceed international hygiene standards.',
            },
            {
                question: 'Do I need to bring anything?',
                answer: 'We provide towels, robes, and shower facilities. Bring swimwear for Sauna and Cold Plunge. Bring a water bottle—hydration is essential for all recovery sessions.',
            },
            {
                question: 'What should I do before my first session?',
                answer: 'Stay hydrated, avoid heavy meals 1-2 hours before. Complete our health waiver online or at the studio. Arrive 10 minutes early for orientation.',
            },
            {
                question: 'Can I use recovery services if I have an injury?',
                answer: 'Depends on the injury. Many of our services aid recovery, but consult your physician first. Our coaches can recommend protocols, but we are not medical professionals.',
            },
        ],
    },
    {
        id: 'memberships',
        title: 'Memberships',
        icon: 'card_membership',
        questions: [
            {
                question: 'Can I share my membership credits with others?',
                answer: 'Memberships are personal and non-transferable. However, Monthly Plan includes 1 Bring-a-Friend pass/month, and 3-Month Plan includes 2 Bring-a-Friend passes total.',
            },
            {
                question: 'How do I freeze my membership?',
                answer: 'You can freeze your membership for up to 30 days once per year. Email barerecovery@gmail.com at least 5 days before your next billing cycle.',
            },
            {
                question: 'Can I upgrade my membership?',
                answer: 'Yes! Contact us to upgrade from Monthly to 3-Month. We\'ll prorate your current membership and apply credit to the new tier.',
            },
            {
                question: 'What if I don\'t use all my sessions in a month?',
                answer: 'Unused sessions do not roll over. Memberships are designed for consistent use. Plan your recovery routine to maximize value.',
            },
            {
                question: 'Can I cancel my membership?',
                answer: 'Monthly memberships can be cancelled anytime with 5 days notice before the next billing cycle. 3-Month plans are non-refundable after purchase.',
            },
            {
                question: 'Do members get priority booking?',
                answer: 'Yes! All members get priority booking, especially during peak hours. You also get early access to new services and workshops.',
            },
        ],
    },
]

// Helper function to get all FAQs as a flat array
export function getAllFAQs() {
    return faqCategories.flatMap((category) => category.questions)
}

// Helper function to search FAQs
export function searchFAQs(query: string) {
    const lowercaseQuery = query.toLowerCase()
    return getAllFAQs().filter(
        (faq) =>
            faq.question.toLowerCase().includes(lowercaseQuery) ||
            faq.answer.toLowerCase().includes(lowercaseQuery)
    )
}

// Helper function to get category by ID
export function getCategoryById(id: string) {
    return faqCategories.find((category) => category.id === id)
}