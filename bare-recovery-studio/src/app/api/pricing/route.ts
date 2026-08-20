import { NextResponse } from 'next/server'
import { getPricingPayload } from '@/lib/pricing-data'

/**
 * GET /api/pricing
 *
 * Authoritative server-side source of truth for all pricing data.
 * Moving prices off client JS prevents DevTools manipulation of displayed values.
 * All price data lives in @/lib/pricing-data — the single canonical source.
 */

export async function GET() {
  const data = getPricingPayload()
  return NextResponse.json(data, {
    headers: {
      // Cache for 1 hour on CDN, revalidate in background — prices rarely change
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}

// Block all other methods
function methodNotAllowed() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { Allow: 'GET', 'X-Content-Type-Options': 'nosniff' } }
  )
}
export async function POST()   { return methodNotAllowed() }
export async function PUT()    { return methodNotAllowed() }
export async function DELETE() { return methodNotAllowed() }
export async function PATCH()  { return methodNotAllowed() }
