import type { Service } from '@/lib/types'

export const services: Service[] = [
    // SERVICE 1: COMPRESSION THERAPY
    {
        id: 'compression-therapy',
        name: 'Compression Therapy',
        slug: 'compression-therapy',
        tagline: 'Dynamic air compression boots designed to improve circulation and support recovery',
        description: `Our compression systems utilize a patented pulsing action that mimics the muscle pump of the legs and arms, greatly enhancing the movement of fluid and metabolites out of the limbs after an intense workout.

Unlike traditional static compression (squeezing), our systems use dynamic compression (pulsing) to effectively transport fluid. This cycle of compression and release is the key to accelerating the body's natural recovery process.`,
        duration: '20-30 minutes',

        benefits: [
            {
                icon: 'check-circle',
                text: 'Reduces muscle soreness',
                detail: 'Significantly reduces the "heavy leg" feeling after high-intensity training by accelerating metabolic waste removal.',
            },
            {
                icon: 'check-circle',
                text: 'Improves blood circulation',
                detail: 'Dynamic pulse action enhances blood flow and oxygen delivery to muscle tissue.',
            },
            {
                icon: 'check-circle',
                text: 'Supports lymphatic drainage',
                detail: 'Stimulates the lymphatic system\'s natural flow, reducing edema and swelling.',
            },
            {
                icon: 'check-circle',
                text: 'Decreases swelling',
                detail: 'Prevents delayed onset muscle soreness (DOMS) through improved vascularity.',
            },
            {
                icon: 'check-circle',
                text: 'Accelerates recovery between training sessions',
                detail: 'Keeps soft tissue healthy and pliable, reducing the risk of strains and tears.',
            },
        ],

        pricing: {
            upperBody: 799,
            lowerBody: 799,
            fullBody: 1399,
        },

        images: {
            hero: '/images/services/compression-therapy.PNG',
            detail: '/images/services/compression-therapy.PNG',
            gallery: [
                '/images/services/compression-therapy.PNG',
            ],
        },

        coachInsight: 'Compression therapy is excellent for post-workout recovery. I use it after every heavy leg day. The difference in next-day soreness is dramatic. Consistent use makes a real difference.',

        relatedServices: ['red-light-therapy', 'cold-plunge'],

        faqs: [
            {
                question: 'How long is a compression therapy session?',
                answer: '20-30 minutes. You can choose upper body, lower body, or full body (upper + lower) compression.',
            },
            {
                question: 'What should I wear for compression therapy?',
                answer: 'Comfortable clothing. For lower body compression, shorts are recommended. We provide all necessary equipment.',
            },
            {
                question: 'How often should I use compression therapy?',
                answer: '2-3 times per week is ideal for athletes in heavy training. For general wellness, 1-2 times per week is sufficient.',
            },
            {
                question: 'Can I use compression therapy the same day as my workout?',
                answer: 'Yes! It\'s excellent post-workout. Many athletes use it within 2-4 hours after training for maximum benefit.',
            },
            {
                question: 'Are there any health restrictions?',
                answer: 'Avoid if you have acute DVT, severe circulatory issues, or active infections. Consult your physician if you have any concerns.',
            },
            {
                question: 'What does compression therapy feel like?',
                answer: 'You\'ll feel a rhythmic squeeze and release, starting from your feet and moving upwards. It\'s a deep, relaxing pressure—never painful.',
            },
        ],

        metadata: {
            title: 'Compression Therapy | Bare Recovery Studio, Kompally',
            description: 'Dynamic air compression therapy in Kompally. Reduce muscle soreness, improve circulation, and accelerate recovery. Upper body ₹800, Lower body ₹800, Full body ₹1,400.',
            keywords: ['compression therapy Kompally', 'normatec boots', 'lymphatic drainage', 'muscle recovery Hyderabad'],
            ogImage: '/images/services/compression-therapy.PNG',
        },
    },

    // SERVICE 2: RED LIGHT THERAPY
    {
        id: 'red-light-therapy',
        name: 'Red Light Therapy',
        slug: 'red-light-therapy',
        tagline: 'Low-wavelength red and near-infrared light therapy that supports cellular repair and recovery',
        description: `Photobiomodulation (red light therapy) uses specific wavelengths of light (660nm and 850nm) to penetrate deep into tissue, supporting cellular energy production and accelerating recovery at the mitochondrial level.

This non-invasive therapy has been clinically shown to reduce inflammation, support collagen production, improve skin health, and enhance overall recovery when used consistently.`,
        duration: '10-20 minutes',

        benefits: [
            {
                icon: 'check-circle',
                text: 'Supports cellular repair',
                detail: 'Red and near-infrared wavelengths stimulate ATP production in mitochondria, enhancing cellular energy and repair.',
            },
            {
                icon: 'check-circle',
                text: 'Reduces inflammation',
                detail: 'Clinical studies show significant reduction in inflammatory markers after consistent red light exposure.',
            },
            {
                icon: 'check-circle',
                text: 'Promotes faster recovery',
                detail: 'Accelerates muscle repair and reduces recovery time between training sessions.',
            },
            {
                icon: 'check-circle',
                text: 'Supports collagen production',
                detail: 'Stimulates fibroblast activity, promoting skin elasticity and wound healing.',
            },
            {
                icon: 'check-circle',
                text: 'Improves skin health',
                detail: 'Reduces fine lines, improves skin tone, and supports overall skin rejuvenation.',
            },
            {
                icon: 'check-circle',
                text: 'May improve sleep quality and energy levels',
                detail: 'Red light exposure supports circadian rhythm regulation and may enhance sleep quality.',
            },
        ],

        pricing: {
            single: 799,
        },

        images: {
            hero: '/images/services/redlight-therapy.PNG',
            detail: '/images/services/redlight-therapy.PNG',
        },

        coachInsight: 'Red light therapy has been a game-changer for my recovery and sleep quality. I use it 4-5 times per week. The science behind cellular repair is solid, and the results speak for themselves.',

        relatedServices: ['compression-therapy', 'sauna'],

        faqs: [
            {
                question: 'How does red light therapy work?',
                answer: 'Red light therapy uses specific wavelengths (660nm and 850nm) that penetrate skin and tissue, stimulating mitochondrial function and cellular energy production (ATP).',
            },
            {
                question: 'How long does a session take?',
                answer: '10-20 minutes per session. Consistency is more important than duration—regular sessions yield better results.',
            },
            {
                question: 'What should I wear during red light therapy?',
                answer: 'Minimal clothing is recommended for maximum skin exposure. We provide private rooms for your comfort.',
            },
            {
                question: 'Is red light therapy safe?',
                answer: 'Yes, red light therapy is non-invasive and has no known negative side effects when used properly. It does not contain UV rays.',
            },
            {
                question: 'How often should I use red light therapy?',
                answer: 'For optimal results, 3-5 times per week. Benefits are cumulative and improve with consistent use.',
            },
            {
                question: 'When will I see results?',
                answer: 'Some people notice improved energy within days. For skin and recovery benefits, consistent use over 4-6 weeks shows significant results.',
            },
        ],

        metadata: {
            title: 'Red Light Therapy | Photobiomodulation | Bare Recovery Studio',
            description: 'Red light therapy (660nm & 850nm) for cellular repair, skin health, and recovery. 10-20 minute sessions. ₹800 per session in Kompally, Secunderabad.',
            keywords: ['red light therapy Hyderabad', 'photobiomodulation', 'infrared therapy', 'skin rejuvenation Kompally'],
            ogImage: '/images/services/redlight-therapy.PNG',
        },
    },

    // SERVICE 3: TRADITIONAL SAUNA
    {
        id: 'traditional-sauna',
        name: 'Traditional Sauna',
        slug: 'traditional-sauna',
        tagline: 'Dry heat therapy promoting relaxation, circulation, detoxification, and recovery',
        description: `Our traditional dry sauna provides deep penetrating heat that raises core body temperature, promoting cardiovascular health, muscle relaxation, and mental clarity.

Regular sauna use has been linked to improved cardiovascular function, reduced stress hormones, enhanced recovery, and better sleep quality. The intense heat stress triggers beneficial adaptations in the body.`,
        duration: '15-30 minutes',

        benefits: [
            {
                icon: 'check-circle',
                text: 'Deep relaxation',
                detail: 'Heat-induced relaxation reduces cortisol levels and promotes a parasympathetic (rest and digest) state.',
            },
            {
                icon: 'check-circle',
                text: 'Increased circulation',
                detail: 'Elevated heart rate and vasodilation improve blood flow to muscles and organs.',
            },
            {
                icon: 'check-circle',
                text: 'Relieves muscle stiffness',
                detail: 'Deep heat penetration loosens tight muscles and reduces tension.',
            },
            {
                icon: 'check-circle',
                text: 'Supports cardiovascular health',
                detail: 'Regular sauna use has been shown to improve cardiovascular markers and heart health.',
            },
            {
                icon: 'check-circle',
                text: 'Reduces stress',
                detail: 'Heat stress activates heat shock proteins and reduces psychological stress markers.',
            },
            {
                icon: 'check-circle',
                text: 'Improves sleep quality',
                detail: 'Post-sauna cooling effect and relaxation promote deeper, more restorative sleep.',
            },
        ],

        pricing: {
            single: 999,
            couple: 1399,
        },

        images: {
            hero: '/images/services/sauna.PNG',
            detail: '/images/services/sauna.PNG',
            gallery: [
                '/images/services/sauna.PNG',
                '/images/services/infrared-sauna.PNG',
            ],
        },

        coachInsight: 'I recommend sauna sessions for both physical recovery and mental clarity. The deep heat penetration aids muscle repair significantly. Post-sauna, you feel completely reset.',

        relatedServices: ['cold-plunge', 'contrast-therapy'],

        faqs: [
            {
                question: 'How long should I stay in the sauna?',
                answer: '15-30 minutes is ideal. Start with 10-15 minutes if you\'re new to sauna use, and gradually increase duration.',
            },
            {
                question: 'What should I bring?',
                answer: 'We provide towels. Bring a water bottle—hydration is essential. Swimwear is recommended.',
            },
            {
                question: 'Can I use the sauna after a workout?',
                answer: 'Yes! Post-workout sauna sessions aid in muscle recovery and relaxation. Wait 10-15 minutes after intense exercise to allow heart rate to normalize.',
            },
            {
                question: 'Are there any health restrictions?',
                answer: 'Consult your physician if you have cardiovascular conditions, are pregnant, or have uncontrolled high blood pressure.',
            },
            {
                question: 'How often can I use the sauna?',
                answer: '3-5 times per week is safe for most people. Listen to your body and stay hydrated.',
            },
            {
                question: 'What temperature is the sauna?',
                answer: 'Our traditional sauna operates at 160-180°F (70-80°C), providing therapeutic heat stress.',
            },
        ],

        metadata: {
            title: 'Traditional Sauna | Dry Heat Therapy | Bare Recovery Studio',
            description: 'Traditional dry sauna in Kompally. 15-30 minute sessions for relaxation, detoxification, and cardiovascular health. ₹1,000 single, ₹1,400 couple.',
            keywords: ['sauna Kompally', 'dry sauna Hyderabad', 'infrared sauna', 'detox sauna Secunderabad'],
            ogImage: '/images/services/sauna.PNG',
        },
    },

    // SERVICE 4: COLD PLUNGE
    {
        id: 'cold-plunge',
        name: 'Cold Plunge',
        slug: 'cold-plunge',
        tagline: 'Cold-water immersion designed to reduce inflammation and improve resilience',
        description: `Cold plunge therapy involves full-body immersion in cold water (typically 50-59°F / 10-15°C), triggering powerful physiological responses including reduced inflammation, enhanced mental clarity, and improved immune function.

Regular cold exposure has been shown to increase norepinephrine levels, improve mood, boost metabolism, and build mental resilience. It's a cornerstone practice of elite athletes worldwide.`,
        duration: '2-5 minutes',

        benefits: [
            {
                icon: 'check-circle',
                text: 'Reduces inflammation',
                detail: 'Cold exposure constricts blood vessels, reducing inflammatory markers and tissue swelling.',
            },
            {
                icon: 'check-circle',
                text: 'Decreases muscle soreness',
                detail: 'Cold-water immersion significantly reduces delayed onset muscle soreness (DOMS) after intense training.',
            },
            {
                icon: 'check-circle',
                text: 'Enhances focus and mental clarity',
                detail: 'Cold shock increases norepinephrine and dopamine, improving focus and alertness.',
            },
            {
                icon: 'check-circle',
                text: 'Boosts alertness and energy',
                detail: 'Cold exposure activates the sympathetic nervous system, increasing energy and wakefulness.',
            },
            {
                icon: 'check-circle',
                text: 'Improves mental resilience',
                detail: 'Regular cold exposure builds stress tolerance and mental toughness through controlled discomfort.',
            },
        ],

        pricing: {
            single: 1199,
            couple: 1599,
        },

        images: {
            hero: '/images/services/cold-plunge.PNG',
            detail: '/images/services/cold-plunge.PNG',
        },

        coachInsight: 'Cold plunge is my go-to for mental resilience training and inflammation reduction. Start with 2 minutes and work your way up. Consistency is key—the benefits compound over time.',

        relatedServices: ['sauna', 'contrast-therapy'],

        faqs: [
            {
                question: 'How cold is the cold plunge?',
                answer: 'Our cold plunge is maintained at 50-59°F (10-15°C)—cold enough for therapeutic benefit, safe for regular use.',
            },
            {
                question: 'How long should I stay in?',
                answer: 'Start with 2 minutes. Experienced users can go up to 5 minutes. Quality over quantity—even 2 minutes provides significant benefits.',
            },
            {
                question: 'Is cold plunge safe?',
                answer: 'Yes, for most people. Avoid if you have uncontrolled cardiovascular conditions, Raynaud\'s disease, or are pregnant. Consult your physician if unsure.',
            },
            {
                question: 'Should I use cold plunge before or after workouts?',
                answer: 'After workouts for recovery. Avoid immediately before strength training as it may blunt adaptation. Wait 4-6 hours post-workout for optimal results.',
            },
            {
                question: 'What should I expect during my first session?',
                answer: 'Initial shock and rapid breathing. Focus on controlled breathing. The first 30 seconds are the hardest—it gets easier. You\'ll feel incredibly energized afterward.',
            },
            {
                question: 'How often should I cold plunge?',
                answer: '2-4 times per week is ideal for most people. Consistency builds cold adaptation and maximizes benefits.',
            },
        ],

        metadata: {
            title: 'Cold Plunge | Ice Bath Therapy | Bare Recovery Studio',
            description: 'Cold plunge therapy in Kompally. Reduce inflammation, boost mental clarity, and enhance recovery. 2-5 minute sessions. ₹1,200 single, ₹1,600 couple.',
            keywords: ['cold plunge Hyderabad', 'ice bath Kompally', 'cryotherapy', 'cold water therapy Secunderabad'],
            ogImage: '/images/services/cold-plunge.PNG',
        },
    },

    // SERVICE 5: CONTRAST THERAPY
    {
        id: 'contrast-therapy',
        name: 'Contrast Therapy',
        slug: 'contrast-therapy',
        tagline: 'A combination of sauna and cold plunge sessions alternating between heat and cold exposure',
        description: `Contrast therapy combines the benefits of sauna (heat stress) and cold plunge (cold stress) in alternating cycles, creating a powerful recovery protocol used by elite athletes worldwide.

The rapid vasodilation (heat) and vasoconstriction (cold) creates a "pumping" effect that enhances circulation, accelerates metabolic waste removal, and triggers beneficial hormetic stress responses. This is the signature recovery experience at Bare Recovery Studio.`,
        duration: '20-40 minutes (2-3 rounds)',

        benefits: [
            {
                icon: 'check-circle',
                text: 'Enhances circulation',
                detail: 'Alternating heat and cold creates a vascular "pump" that dramatically improves blood flow and nutrient delivery.',
            },
            {
                icon: 'check-circle',
                text: 'Accelerates recovery',
                detail: 'The combination of heat relaxation and cold reduction of inflammation provides comprehensive recovery.',
            },
            {
                icon: 'check-circle',
                text: 'Reduces inflammation',
                detail: 'Cold exposure reduces inflammatory markers, while heat promotes healing—a synergistic effect.',
            },
            {
                icon: 'check-circle',
                text: 'Improves energy and focus',
                detail: 'Hormetic stress from temperature extremes boosts norepinephrine, dopamine, and overall alertness.',
            },
            {
                icon: 'check-circle',
                text: 'Supports nervous system regulation',
                detail: 'Alternating sympathetic (cold) and parasympathetic (heat) activation improves nervous system balance.',
            },
            {
                icon: 'check-circle',
                text: 'Creates a full-body rejuvenation effect',
                detail: 'The ultimate recovery protocol—athletes report feeling completely reset after contrast sessions.',
            },
        ],

        pricing: {
            single: 1799,
            couple: 2199,
        },

        images: {
            hero: '/images/services/contrast-therapy.PNG',
            detail: '/images/services/contrast-therapy.PNG',
        },

        coachInsight: 'The combination of heat and cold creates the ultimate recovery protocol. This is what elite athletes have been using for decades. Contrast therapy is our signature experience—nothing compares.',

        relatedServices: ['sauna', 'cold-plunge'],

        faqs: [
            {
                question: 'What is the protocol for contrast therapy?',
                answer: 'Typically 2-3 rounds: 15 minutes sauna → 2-3 minutes cold plunge → repeat. Total session time is 20-40 minutes.',
            },
            {
                question: 'Is contrast therapy better than sauna or cold plunge alone?',
                answer: 'It provides synergistic benefits—the alternating heat and cold creates effects you don\'t get from either modality alone. This is why it\'s our signature protocol.',
            },
            {
                question: 'Who should use contrast therapy?',
                answer: 'Athletes, fitness enthusiasts, anyone recovering from intense training, or anyone seeking comprehensive recovery. It\'s suitable for most people.',
            },
            {
                question: 'How often should I do contrast therapy?',
                answer: '2-3 times per week is ideal for athletes in training. For general wellness, once per week provides significant benefits.',
            },
            {
                question: 'What should I bring?',
                answer: 'We provide towels. Bring swimwear and a water bottle. Hydration before, during, and after is essential.',
            },
            {
                question: 'Can beginners do contrast therapy?',
                answer: 'Yes! We guide you through the protocol. If you\'re new to heat or cold exposure, we can modify the duration. Listen to your body.',
            },
        ],

        metadata: {
            title: 'Contrast Therapy | Sauna + Cold Plunge | Bare Recovery Studio',
            description: 'Signature contrast therapy in Kompally: alternating sauna and cold plunge for ultimate recovery. 20-40 minute sessions, 2-3 rounds. ₹1,800 single, ₹2,200 couple.',
            keywords: ['contrast therapy Hyderabad', 'hot cold therapy', 'recovery protocol Kompally', 'sauna cold plunge'],
            ogImage: '/images/services/contrast-therapy.PNG',
        },
    },
]

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug)
}

// Helper function to get service by ID
export function getServiceById(id: string): Service | undefined {
    return services.find((service) => service.id === id)
}

// Export individual services for direct import
export const compressionTherapy = services[0]
export const redLightTherapy = services[1]
export const traditionalSauna = services[2]
export const coldPlunge = services[3]
export const contrastTherapy = services[4]