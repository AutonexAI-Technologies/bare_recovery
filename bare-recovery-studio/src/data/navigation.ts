import type { NavigationLink } from '@/lib/types'

export const mainNavigation: NavigationLink[] = [
    {
        name: 'Home',
        href: '/',
        type: 'link',
    },
    {
        name: 'About',
        href: '/about',
        type: 'link',
    },
    {
        name: 'Services',
        href: '/services',
        type: 'dropdown',
        children: [
            {
                name: 'All Services',
                href: '/services',
            },
            {
                name: 'Compression Therapy',
                href: '/services/compression-therapy',
            },
            {
                name: 'Red Light Therapy',
                href: '/services/red-light-therapy',
            },
            {
                name: 'Traditional Sauna',
                href: '/services/traditional-sauna',
            },
            {
                name: 'Cold Plunge',
                href: '/services/cold-plunge',
            },
            {
                name: 'Contrast Therapy',
                href: '/services/contrast-therapy',
            },
        ],
    },
    {
        name: 'Pricing',
        href: '/pricing',
        type: 'link',
    },
    {
        name: 'FAQ',
        href: '/faq',
        type: 'link',
    },
    {
        name: 'Contact',
        href: '/contact',
        type: 'link',
    },
    {
        name: 'Blog',
        href: '/blog',
        type: 'link',
    },
]

export const footerNavigation = {
    explore: [
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Locations', href: '/contact' },
        { name: 'Blog', href: '/blog' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Disclaimer', href: '/terms#disclaimer' },
    ],
    connect: [
        { name: 'Instagram', href: 'https://www.instagram.com/bare.recovery' },
        { name: 'WhatsApp', href: 'https://wa.me/917670861496' },
        { name: 'Email', href: 'mailto:barerecovery@gmail.com' },
    ],
}

export const serviceLinks = [
    { name: 'Compression Therapy', href: '/services/compression-therapy' },
    { name: 'Red Light Therapy', href: '/services/red-light-therapy' },
    { name: 'Traditional Sauna', href: '/services/traditional-sauna' },
    { name: 'Cold Plunge', href: '/services/cold-plunge' },
    { name: 'Contrast Therapy', href: '/services/contrast-therapy' },
]