import { NextResponse } from 'next/server'

/**
 * Auto-updating Instagram follower count for @abhinav._lifts
 *
 * Strategy: Server-side scrape of Instagram's public JSON embed.
 * Cached by Next.js ISR for 6 hours (21600s) — updates ~4x per day automatically.
 * Fallback: Returns hardcoded 85.3K if scrape fails.
 */

const INSTAGRAM_HANDLE = 'abhinav._lifts'
const FALLBACK_FOLLOWERS_RAW = 85300
const FALLBACK_FOLLOWERS_DISPLAY = '85.3K'

function formatFollowers(count: number): string {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1)}M`
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1)}K`
  }
  return count.toString()
}

async function fetchInstagramFollowers(): Promise<{ raw: number; display: string }> {
  const url = `https://www.instagram.com/${INSTAGRAM_HANDLE}/?__a=1&__d=dis`

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Cache-Control': 'max-age=0',
    },
    next: { revalidate: 21600 }, // Revalidate every 6 hours
  })

  if (!res.ok) {
    throw new Error(`Instagram fetch failed: ${res.status}`)
  }

  const html = await res.text()

  // Try to extract from JSON in page source
  const patterns = [
    /"edge_followed_by":\{"count":(\d+)\}/,
    /"follower_count":(\d+)/,
    /"followers":(\d+)/,
  ]

  for (const pattern of patterns) {
    const match = html.match(pattern)
    if (match && match[1]) {
      const raw = parseInt(match[1], 10)
      if (raw > 0) {
        return { raw, display: formatFollowers(raw) }
      }
    }
  }

  throw new Error('Could not parse follower count from Instagram page')
}

export async function GET() {
  try {
    const data = await fetchInstagramFollowers()
    return NextResponse.json({
      followers: data.display,
      raw: data.raw,
      handle: `@${INSTAGRAM_HANDLE}`,
      profileUrl: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`,
      updatedAt: new Date().toISOString(),
      source: 'live',
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=43200',
      }
    })
  } catch (error) {
    // Graceful fallback — always return something
    console.error('[instagram-followers] Fetch failed, using fallback:', error)
    return NextResponse.json({
      followers: FALLBACK_FOLLOWERS_DISPLAY,
      raw: FALLBACK_FOLLOWERS_RAW,
      handle: `@${INSTAGRAM_HANDLE}`,
      profileUrl: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`,
      updatedAt: new Date().toISOString(),
      source: 'fallback',
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      }
    })
  }
}
