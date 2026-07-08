import type { FounderInfo } from '@/lib/types'

export const founderInfo: FounderInfo = {
    name: 'Abhinav',
    role: 'Founder & Fitness Coach',

    instagram: {
        handle: '@abhinav._lifts',
        url: 'https://www.instagram.com/abhinav._lifts',
        followers: '83.3K',
        verified: true,
    },

    philosophy: {
        tagline: 'BE BORING',
        description: 'Consistency over intensity. I help ABROAD INDIANS get in best shape.',
    },

    bio: `As a fitness coach helping Indians abroad get in best shape, I witnessed the missing piece in every training program: proper recovery.

Bare Recovery Studio was born from the vision to bring world-class, evidence-based recovery services to Kompally, Secunderabad—making premium recovery accessible to athletes and wellness seekers.

My philosophy is simple: BE BORING. Consistency beats intensity every time. This applies to training, recovery, and life.`,

    stats: [
        {
            label: 'Instagram Community',
            value: '83.3K',
            icon: 'instagram',
        },
        {
            label: 'Specialization',
            value: 'Fitness Coach',
            icon: 'dumbbell',
        },
        {
            label: 'Philosophy',
            value: 'BE BORING',
            icon: 'target',
        },
    ],

    links: {
        consultation1on1: 'https://superprofile.bio/bookings/abhinavlifts',
        coachingForm: 'https://whatsform.com/i4zbbr',
        instagram: 'https://www.instagram.com/abhinav._lifts',
        strava: 'https://strava.app.link/bbsoZZ4QO0b',
    },

    photos: [
        '/images/founder/abhinav-1.jpg', // coaching
        '/images/founder/abhinav-2.jpg', // training
        '/images/founder/abhinav-3.jpg', // studio
        '/images/founder/abhinav-4.jpg', // lifestyle
        '/images/founder/abhinav-5.jpg', // community
        '/images/founder/abhinav-6.jpg', // recovery
        '/images/founder/abhinav-7.jpg', // athletic
        '/images/founder/abhinav-8.jpg', // planning
        '/images/founder/abhinav-9.jpg', // current
    ],

    serviceInsights: {
        'compression-therapy': 'Compression therapy is excellent for post-workout recovery. I use it after every heavy leg day. The difference in next-day soreness is dramatic.',
        'red-light-therapy': 'Red light therapy has been a game-changer for my recovery and sleep quality. The science behind cellular repair is solid.',
        'traditional-sauna': 'I recommend sauna sessions for both physical recovery and mental clarity. The deep heat penetration aids muscle repair significantly.',
        'cold-plunge': 'Cold plunge is my go-to for mental resilience training and inflammation reduction. Consistency is key—start with 2 minutes.',
        'contrast-therapy': 'The combination of heat and cold creates the ultimate recovery protocol. This is what elite athletes have been using for decades.',
    },
}