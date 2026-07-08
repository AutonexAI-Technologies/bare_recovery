import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import { CONTACT_INFO } from '@/lib/constants'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Bare Recovery Blog`,
    description: post.excerpt,
  }
}

const authorPhotos: Record<string, string> = {
  Abhinav: '/images/founder/photo-7.png',
  'Team Bare': '/images/founder/photo-7.png',
}

function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-display font-bold text-[24px] md:text-[28px] text-[#F5F5F2] mt-12 mb-5" style={{ letterSpacing: '-0.02em' }}>
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-display font-semibold text-[19px] text-[#F5F5F2] mt-8 mb-3">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`list-${i}`} className="space-y-2.5 my-6 pl-0">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[#c4c7c7] text-base leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] flex-shrink-0 mt-[10px]" />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#F5F5F2] font-semibold">$1</strong>') }} />
            </li>
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\. /.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\. /, ''))
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-3 my-6 pl-0">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[#c4c7c7] text-base leading-relaxed">
              <span className="font-display font-bold text-[#8e9192] text-sm w-6 flex-shrink-0 pt-0.5">{j + 1}.</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#F5F5F2] font-semibold">$1</strong>') }} />
            </li>
          ))}
        </ol>
      )
      continue
    } else if (line.trim().length > 0) {
      const html = line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#F5F5F2] font-semibold">$1</strong>')
      elements.push(
        <p key={i} className="text-[#c4c7c7] text-base md:text-lg leading-[1.85] mb-0"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )
    } else {
      elements.push(<div key={i} className="h-4" />)
    }
    i++
  }

  return elements
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div>

      {/* ── Hero Image — full bleed, sits UNDER navbar ── */}
      {post.image && (
        <div className="relative w-full overflow-hidden" style={{ minHeight: 'clamp(520px, 68vh, 780px)' }}>
          {/* The actual image — full cover, shows entire image */}
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          {/* Subtle overlay — mostly transparent in the middle so image shows fully */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(11,11,11,0.35) 0%, transparent 18%, transparent 55%, rgba(11,11,11,0.75) 85%, #0B0B0B 100%)',
            }}
          />
          {/* Breadcrumb overlay on the image */}
          <div className="absolute bottom-0 inset-x-0 px-5 md:px-12 pb-8 max-w-[800px] mx-auto">
            <div className="flex items-center gap-2 text-xs text-[#c4c7c7]">
              <Link href="/blog" className="hover:text-[#F5F5F2] transition-colors">Blog</Link>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c9c6c5]"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                {post.subject}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <div className={`px-5 md:px-12 max-w-[800px] mx-auto pb-24 ${post.image ? 'pt-10' : 'pt-32'}`}>

        {/* If no image, show breadcrumb here */}
        {!post.image && (
          <div className="flex items-center gap-2 mb-8 text-xs text-[#8e9192]">
            <Link href="/blog" className="hover:text-[#F5F5F2] transition-colors">Blog</Link>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
            <span className="text-[#c9c6c5]">{post.subject}</span>
          </div>
        )}

        {/* Title */}
        <h1
          className="font-display font-black text-[32px] md:text-[48px] text-[#F5F5F2] mb-6"
          style={{ letterSpacing: '-0.035em', lineHeight: 1.1 }}
        >
          {post.title}
        </h1>

        {/* Meta bar */}
        <div
          className="flex flex-wrap items-center gap-4 mb-10 pb-8"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="flex items-center gap-2.5">
            {authorPhotos[post.author] && (
              <img
                src={authorPhotos[post.author]}
                alt={post.author}
                className="w-8 h-8 rounded-full object-cover object-top"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              />
            )}
            <span className="text-[#c4c7c7] text-sm font-semibold">{post.author}</span>
          </div>
          <span className="text-[#8e9192] text-xs">
            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span
            className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] text-[#c9c6c5]"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {post.readTime}
          </span>
        </div>

        {/* Body */}
        <article className="space-y-1">
          {renderMarkdown(post.content)}
        </article>

        {/* Bottom CTA */}
        <div
          className="mt-16 p-8 md:p-12 rounded-[24px] text-center"
          style={{
            background: 'rgba(16,16,16,0.9)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p className="font-display font-bold text-[20px] md:text-[24px] text-[#F5F5F2] mb-3" style={{ letterSpacing: '-0.02em' }}>
            Ready to put this into practice?
          </p>
          <p className="text-[#8e9192] text-sm mb-7 max-w-xs mx-auto leading-relaxed">
            Book your session at Bare Recovery Studio, Kompally.
          </p>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20a%20session%20at%20Bare%20Recovery%20Studio.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#F5F5F2] text-[#0B0B0B] pl-7 pr-2.5 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-all active:scale-[0.98]"
          >
            Book on WhatsApp
            <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B0B0B" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
