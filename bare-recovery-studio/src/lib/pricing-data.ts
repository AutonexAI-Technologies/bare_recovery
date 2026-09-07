/**
 * pricing-data.ts — Bare Recovery Studio
 *
 * Single source of truth for all pricing data.
 * Imported by /api/pricing (for runtime API access) and
 * /app/pricing/page.tsx (for static build via direct import).
 *
 * Prices are NEVER bundled into client JS — only server code imports this file.
 *
 * Pricing structure:
 *  - Regular price (mrpPrice): full rack rate
 *  - Introductory offer (price): 30% off for all regular customers
 *  - ICN Athletes: always 50% off on registration (shown separately)
 */

import { CONTACT_INFO } from '@/lib/constants'

const waBase = `https://wa.me/${CONTACT_INFO.whatsapp}?text=`
const bookMsg = (service: string) =>
  encodeURIComponent(`Hi! I'd like to book a ${service} session at Bare Recovery Studio.`)

export const singleSessions = [
  { name: 'Full Circuit',              desc: 'All 6 services in one premium session',          price: 4199,  mrpPrice: 5998,  tag: 'complete', featured: true,  note: '30% introductory offer',          duration: '60–90 min', href: waBase + bookMsg('Full Circuit') },
  { name: 'Contrast Therapy',          desc: 'Sauna + Cold Plunge — the signature stack',      price: 2519,  mrpPrice: 3598,  note: '30% introductory offer',          duration: '20–40 min', href: waBase + bookMsg('Contrast Therapy') },
  { name: 'Cold Plunge',               desc: 'Full body cold immersion at 10–15°C',            price: 1679,  mrpPrice: 2398,  note: '30% introductory offer',          duration: '10–15 min', href: waBase + bookMsg('Cold Plunge') },
  { name: 'Traditional Sauna',         desc: 'Dry heat at 70–80°C for deep recovery',          price: 1399,  mrpPrice: 1998,  note: '30% introductory offer',          duration: '15–30 min', href: waBase + bookMsg('Traditional Sauna') },
  { name: 'Infrared Sauna',            desc: 'Far-infrared penetration for deep tissue heat',  price: 1399,  mrpPrice: 1998,  note: '30% introductory offer',          duration: '15–30 min', href: waBase + bookMsg('Infrared Sauna') },
  { name: 'Red Light Therapy',         desc: '660nm & 850nm photobiomodulation',               price: 1119,  mrpPrice: 1598,  note: '30% introductory offer',          duration: '10–20 min', href: waBase + bookMsg('Red Light Therapy') },
  { name: 'Compression — Upper Body',  desc: 'Dynamic air compression for upper limbs',        price: 1119,  mrpPrice: 1598,  note: '30% introductory offer',          duration: '10–20 min', href: waBase + bookMsg('Compression Therapy (Upper Body)') },
  { name: 'Compression — Lower Body',  desc: 'Dynamic air compression for legs & hips',        price: 1119,  mrpPrice: 1598,  note: '30% introductory offer',          duration: '10–20 min', href: waBase + bookMsg('Compression Therapy (Lower Body)') },
  { name: 'Compression — Full Body',   desc: 'Upper + Lower body compression together',        price: 1959,  mrpPrice: 2798,  note: '30% introductory offer',          duration: '10–20 min', href: waBase + bookMsg('Compression Therapy (Full Body)') },
]

export const coupleSessions = [
  { name: 'Full Circuit',       desc: 'All 6 services — best shared experience', price: 6719, mrpPrice: 9598,  featured: true, note: 'save ₹2,879 vs 2 singles', duration: '60–90 min', href: waBase + bookMsg('Full Circuit Couple') },
  { name: 'Contrast Therapy',   desc: 'Sauna + Cold Plunge for two',             price: 3069, mrpPrice: 4398,  note: 'save ₹1,329 vs 2 singles',               duration: '20–40 min', href: waBase + bookMsg('Contrast Therapy Couple') },
  { name: 'Cold Plunge',        desc: 'Side-by-side cold immersion',             price: 2239, mrpPrice: 3198,  note: 'save ₹1,119 vs 2 singles',               duration: '10–15 min', href: waBase + bookMsg('Cold Plunge Couple') },
  { name: 'Traditional Sauna',  desc: 'Shared heat session for two',             price: 1959, mrpPrice: 2798,  note: 'save ₹839 vs 2 singles',                 duration: '15–30 min', href: waBase + bookMsg('Traditional Sauna Couple') },
]

export const memberships = [
  {
    id: 'monthly',   label: '1 Month', sessions: 5,    type: 'Recovery Stack',
    price: 12599, mrpPrice: 17998, perSession: Math.round(12599 / 5),
    savingsNote: '30% off — save ₹5,399',
    perks: ['5 Full Circuit sessions', '1 Bring-a-Friend guest pass', 'Priority booking', 'All 6 services included'],
    href: waBase + encodeURIComponent("Hi! I'd like to join the 1-Month Membership plan."),
    featured: false,
  },
  {
    id: 'quarterly', label: '3 Month', sessions: 16,   type: 'Contrast Only',
    price: 33599, mrpPrice: 47998, perSession: Math.round(33599 / 16),
    savingsNote: '30% off — save ₹14,399',
    perks: ['16 Contrast Therapy sessions', '2 Bring-a-Friend guest passes', 'Priority booking', 'Best per-session value'],
    href: waBase + encodeURIComponent("Hi! I'd like to join the 3-Month Membership plan."),
    featured: true,
  },
  {
    id: 'biannual',  label: '6 Month', sessions: null, type: 'Custom',
    price: null, mrpPrice: null, perSession: null,
    savingsNote: 'Maximum savings — talk to us',
    perks: ['Flexible session bundle', 'Maximum savings', 'Priority booking', 'Dedicated coaching slot'],
    href: waBase + encodeURIComponent("Hi! I'd like to know more about the 6-Month Membership plan."),
    featured: false,
  },
]

export type PricingPayload = {
  singleSessions: typeof singleSessions
  coupleSessions: typeof coupleSessions
  memberships: typeof memberships
}

export function getPricingPayload(): PricingPayload {
  return { singleSessions, coupleSessions, memberships }
}
