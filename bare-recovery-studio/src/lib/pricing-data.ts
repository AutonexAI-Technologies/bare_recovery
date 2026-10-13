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
 *  - Regular price (mrpPrice): full rack rate (MRP)
 *  - Offer price (price): actual price after offer
 *  - Athletes: always 50% off on registration (shown separately)
 */

import { CONTACT_INFO } from '@/lib/constants'

const waBase = `https://wa.me/${CONTACT_INFO.whatsapp}?text=`
const bookMsg = (service: string) =>
  encodeURIComponent(`Hi! I'd like to book a ${service} session at Bare Recovery Studio.`)

export const singleSessions = [
  { name: 'Full Circuit',             desc: 'All 6 services in one premium session',         price: 2999, mrpPrice: 4299, tag: 'complete', featured: true,  duration: '60–90 min', href: waBase + bookMsg('Full Circuit') },
  { name: 'Contrast (Sauna + Cold)',  desc: 'Sauna + Cold Plunge — the signature stack',     price: 1899, mrpPrice: 2715, duration: '20–40 min', href: waBase + bookMsg('Contrast Therapy') },
  { name: 'Cold Plunge with Magnesium', desc: 'Cold immersion with magnesium recovery boost', price: 1599, mrpPrice: 2285, duration: '10–15 min', href: waBase + bookMsg('Cold Plunge with Magnesium') },
  { name: 'Cold Plunge',              desc: 'Full body cold immersion at 10–15°C',           price: 1299, mrpPrice: 1855, duration: '10–15 min', href: waBase + bookMsg('Cold Plunge') },
  { name: 'Sauna',                    desc: 'Dry heat at 70–80°C for deep recovery',         price: 999,  mrpPrice: 1429, duration: '15–30 min', href: waBase + bookMsg('Sauna') },
  { name: 'Red Light Therapy',        desc: '660nm & 850nm photobiomodulation',              price: 799,  mrpPrice: 1145, duration: '10–20 min', href: waBase + bookMsg('Red Light Therapy') },
  { name: 'Compression – Lower Body', desc: 'Dynamic air compression for legs & hips',       price: 899,  mrpPrice: 1285, duration: '20–30 min', href: waBase + bookMsg('Compression Therapy (Lower Body)') },
]

export const coupleSessions = [
  { name: 'Full Circuit',          desc: 'All services — best shared experience',      price: 4899, mrpPrice: 6999, featured: true, duration: '60–90 min', href: waBase + bookMsg('Full Circuit Couple') },
  { name: 'Contrast (Sauna + Cold)', desc: 'Sauna + Cold Plunge for two',             price: 2899, mrpPrice: 4145, duration: '20–40 min', href: waBase + bookMsg('Contrast Therapy Couple') },
  { name: 'Cold Plunge / Ice Bath', desc: 'Side-by-side cold immersion',              price: 1699, mrpPrice: 2429, duration: '10–15 min', href: waBase + bookMsg('Cold Plunge Couple') },
  { name: 'Sauna',                 desc: 'Shared heat session for two',               price: 1499, mrpPrice: 2145, duration: '15–30 min', href: waBase + bookMsg('Sauna Couple') },
  { name: 'Red Light Therapy',     desc: 'Shared red light session',                  price: 1199, mrpPrice: 1719, duration: '10–20 min', href: waBase + bookMsg('Red Light Therapy Couple') },
  { name: 'Compression – Lower Body', desc: 'Lower body compression for two',        price: 1299, mrpPrice: 1855, duration: '20–30 min', href: waBase + bookMsg('Compression Therapy Couple') },
]

export const memberships = [
  {
    id: 'monthly',   label: '1 Month', sessions: 4,    type: 'Full Circuit',
    price: 8999, mrpPrice: null, perSession: Math.round(8999 / 4),
    savingsNote: '4 sessions + 1 Bring a Friend pass',
    perks: ['4 Full Circuit sessions', '1 Bring-a-Friend guest pass', 'Priority booking', 'All services included'],
    href: waBase + encodeURIComponent("Hi! I'd like to join the 1-Month Membership plan at Bare Recovery Studio."),
    featured: false,
  },
  {
    id: 'quarterly', label: '3 Month', sessions: 16,   type: 'Full Circuit',
    price: 19999, mrpPrice: null, perSession: Math.round(19999 / 16),
    savingsNote: '16 sessions + 1-month pause option',
    perks: ['16 Full Circuit sessions', '1-month pause option', 'Priority booking', 'Best per-session value'],
    href: waBase + encodeURIComponent("Hi! I'd like to join the 3-Month Membership plan at Bare Recovery Studio."),
    featured: true,
  },
  {
    id: 'individual', label: 'Individual Services', sessions: null, type: 'Monthly',
    price: null, mrpPrice: null, perSession: null,
    savingsNote: 'Sauna ₹2,999 · Cold Plunge ₹3,499 · Red Light ₹1,999 · Compression ₹1,999 · Contrast ₹4,999',
    perks: ['Sauna monthly — ₹2,999', 'Cold Plunge monthly — ₹3,499', 'Red Light monthly — ₹1,999', 'Compression monthly — ₹1,999', 'Contrast monthly — ₹4,999'],
    href: waBase + encodeURIComponent("Hi! I'd like to know about individual monthly memberships at Bare Recovery Studio."),
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
