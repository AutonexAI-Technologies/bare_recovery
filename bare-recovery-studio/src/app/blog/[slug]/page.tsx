import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/blog'
import { CONTACT_INFO } from '@/lib/constants'
import {
  ReadingProgress, TableOfContents, ShareBar,
  StarRating, NewsletterSignup, SaleCallout, RelatedPosts,
} from './BlogArticleClient'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return { title: `${post.title} | Bare Recovery Blog`, description: post.excerpt }
}

const authorPhotos: Record<string, string> = {
  Abhinav: '/images/founder/photo-7.png',
  'Team Bare': '/images/founder/photo-7.png',
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

interface Heading { id: string; text: string; level: number }

function parseHeadings(content: string): Heading[] {
  const headings: Heading[] = []
  content.split('\n').forEach(line => {
    if (line.startsWith('## ')) headings.push({ id: slugify(line.slice(3)), text: line.slice(3), level: 2 })
    else if (line.startsWith('### ')) headings.push({ id: slugify(line.slice(4)), text: line.slice(4), level: 3 })
  })
  return headings
}

function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  let saleInjected = false

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      const id = slugify(line.slice(3))
      // Inject sale callout after 2nd heading
      if (!saleInjected && elements.length > 8) {
        elements.push(<SaleCallout key="sale-mid" />)
        saleInjected = true
      }
      elements.push(
        <h2 key={i} id={id} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,4vw,30px)', fontWeight: 400, letterSpacing: '-0.025em', color: '#f5f0eb', marginTop: 52, marginBottom: 18, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.06)', scrollMarginTop: 100 }}>
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      const id = slugify(line.slice(4))
      elements.push(
        <h3 key={i} id={id} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(17px,3vw,22px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#f5f0eb', marginTop: 32, marginBottom: 12, scrollMarginTop: 100 }}>
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2)); i++
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ listStyle: 'none', padding: 0, margin: '18px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {listItems.map((item, j) => (
            <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'rgba(245,240,235,0.70)', fontSize: 16, lineHeight: 1.75 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#FBBF24', flexShrink: 0, marginTop: 10 }} />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#f5f0eb;font-weight:600">$1</strong>') }} />
            </li>
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\. /.test(line)) {
      const listItems: string[] = []
      let idx = 1
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\. /, '')); i++
      }
      elements.push(
        <ol key={`ol-${i}`} style={{ listStyle: 'none', padding: 0, margin: '18px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {listItems.map((item, j) => (
            <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, color: 'rgba(245,240,235,0.70)', fontSize: 16, lineHeight: 1.75 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: '#FBBF24', background: 'rgba(245,158,11,0.10)', border: '1px solid rgba(245,158,11,0.22)', width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{idx++}</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#f5f0eb;font-weight:600">$1</strong>') }} />
            </li>
          ))}
        </ol>
      )
      continue
    } else if (line.trim().length > 0) {
      const html = line
        .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#f5f0eb;font-weight:600">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
      elements.push(
        <p key={i} style={{ color: 'rgba(245,240,235,0.68)', fontSize: 17, lineHeight: 1.85, marginBottom: 0 }}
          dangerouslySetInnerHTML={{ __html: html }} />
      )
    } else {
      elements.push(<div key={i} style={{ height: 16 }} />)
    }
    i++
  }
  return elements
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts.filter(p => p.slug !== slug).slice(0, 3).map(p => ({
    slug: p.slug, title: p.title, subject: p.subject, readTime: p.readTime, image: p.image,
  }))
  const headings = parseHeadings(post.content)
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I read the blog and want to book at the 50% launch rate.')}`

  return (
    <div style={{ background: '#0f0e0e', minHeight: '100vh' }}>
      <ReadingProgress />

      {/* ── Hero Image ── */}
      {post.image && (
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: 'clamp(420px,58vh,700px)' }}>
          <img src={post.image} alt={post.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,8,8,0.45) 0%, transparent 25%, transparent 50%, rgba(8,8,8,0.80) 80%, #0f0e0e 100%)' }} />
          {/* Sale badge on image */}
          <div style={{ position: 'absolute', top: 80, right: 20 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 16px', borderRadius: 9999, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', boxShadow: '0 4px 20px rgba(245,158,11,0.50)' }}>
              🔥 50% Off — Book Now
            </span>
          </div>
          {/* Breadcrumb */}
          <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0, padding: '0 20px' }} className="max-w-[900px] mx-auto">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(245,240,235,0.60)' }}>
              <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-white transition-colors">Blog</Link>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              <span style={{ padding: '3px 10px', borderRadius: 9999, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)', color: '#FBBF24', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{post.subject}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Main content ── */}
      <div className="max-w-[1100px] mx-auto px-5 md:px-12" style={{ paddingTop: post.image ? 36 : 120, paddingBottom: 80 }}>

        {/* If no image: breadcrumb here */}
        {!post.image && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(245,240,235,0.50)', marginBottom: 32 }}>
            <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            <span style={{ color: '#FBBF24', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{post.subject}</span>
          </div>
        )}

        {/* Title */}
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,5.5vw,56px)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1, color: '#f5f0eb', marginBottom: 24 }}>
          {post.title}
        </h1>

        {/* Meta bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {authorPhotos[post.author] && (
              <img src={authorPhotos[post.author]} alt={post.author} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '2px solid rgba(245,158,11,0.30)' }} />
            )}
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#f5f0eb', lineHeight: 1 }}>{post.author}</p>
              <p style={{ fontSize: 11, color: 'rgba(245,240,235,0.45)', marginTop: 2 }}>Bare Recovery Studio</p>
            </div>
          </div>
          <span style={{ fontSize: 12, color: 'rgba(245,240,235,0.40)' }}>
            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span style={{ padding: '4px 12px', borderRadius: 9999, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(245,240,235,0.55)' }}>
            {post.readTime}
          </span>
        </div>

        {/* Mobile TOC */}
        <TableOfContents headings={headings} />

        {/* Desktop: two-column (TOC sidebar + article) */}
        <div className="lg:flex" style={{ gap: 64, alignItems: 'flex-start' }}>

          {/* Article body */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <article style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {renderMarkdown(post.content)}
            </article>

            {/* Bottom sale callout */}
            <SaleCallout />

            {/* Rating */}
            <StarRating slug={slug} />

            {/* Share */}
            <ShareBar title={post.title} slug={slug} />

            {/* Newsletter */}
            <NewsletterSignup />

            {/* Related posts */}
            <RelatedPosts posts={related} />

            {/* Final CTA */}
            <div style={{ marginTop: 64, padding: '36px 32px', borderRadius: 24, background: 'linear-gradient(135deg,rgba(120,53,15,0.45),rgba(245,158,11,0.08))', border: '1px solid rgba(245,158,11,0.25)', textAlign: 'center' }}>
              <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 12 }}>🔥 50% Off — Launch Sale</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,4vw,32px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#f5f0eb', marginBottom: 8 }}>
                Ready to experience it yourself?
              </p>
              <p style={{ fontSize: 13, color: 'rgba(245,240,235,0.50)', marginBottom: 24, maxWidth: 380, margin: '0 auto 24px' }}>
                Every session is 50% off for founding members. Book now before August rates reset permanently.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', padding: '14px 28px', borderRadius: 9999, fontSize: 13, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 24px rgba(245,158,11,0.35)' }}>
                  Book at 50% Off →
                </a>
                <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 22px', borderRadius: 9999, fontSize: 13, fontWeight: 500, color: 'rgba(245,240,235,0.50)', border: '1px solid rgba(255,255,255,0.10)', textDecoration: 'none' }}>
                  View Pricing
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop TOC sidebar */}
          <TableOfContents headings={headings} />
        </div>
      </div>
    </div>
  )
}
