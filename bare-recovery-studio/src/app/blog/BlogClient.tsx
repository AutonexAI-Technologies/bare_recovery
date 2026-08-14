'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { BlogPost } from '@/lib/blog'
import { CONTACT_INFO } from '@/lib/constants'

interface BlogClientProps { posts: BlogPost[] }

const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I want to book a session at the 50% launch rate.')}`

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogClient({ posts }: BlogClientProps) {
  const allSubjects = ['All', ...Array.from(new Set(posts.map(p => p.subject)))]
  const [active, setActive] = useState('All')

  const featured = posts[0]
  const rest = posts.slice(1).filter(p => active === 'All' || p.subject === active)
  const filtered = posts.slice(1)

  return (
    <div style={{ background: '#0f0e0e', minHeight: '100vh' }}>

      {/* ── Hero header ── */}
      <div style={{ background: 'linear-gradient(to bottom, rgba(245,158,11,0.06) 0%, transparent 100%)', borderBottom: '1px solid rgba(245,158,11,0.10)', paddingTop: 100, paddingBottom: 60, paddingLeft: 20, paddingRight: 20 }}>
        <div className="max-w-[1320px] mx-auto">
          {/* Sale badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', padding: '6px 16px', borderRadius: 9999, boxShadow: '0 4px 16px rgba(245,158,11,0.40)' }}>
            <span style={{ fontSize: 12 }}>🔥</span>
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#111' }}>50% Off All Sessions — Ends Aug 31</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: 24 }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px,8vw,88px)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 0.92, color: '#f5f0eb', marginBottom: 16 }}>
                The Recovery<br />
                <span style={{ color: 'rgba(245,240,235,0.22)' }}>Blog.</span>
              </h1>
              <p style={{ fontSize: 14, color: 'rgba(245,240,235,0.50)', maxWidth: 380, lineHeight: 1.7 }}>
                Science-backed protocols, performance insights, and the discipline of feeling better — by Abhinav and Team Bare.
              </p>
            </div>
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', padding: '14px 28px', borderRadius: 9999, fontSize: 13, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 24px rgba(245,158,11,0.40)', whiteSpace: 'nowrap', alignSelf: 'flex-end' }}>
              Book at 50% Off →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-5 md:px-12 py-12 md:py-16">

        {/* Category filters */}
        {posts.length > 1 && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
            {allSubjects.map(s => (
              <button key={s} onClick={() => setActive(s)}
                style={{ padding: '8px 18px', borderRadius: 9999, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', border: `1px solid ${active === s ? 'rgba(245,158,11,0.45)' : 'rgba(255,255,255,0.09)'}`, background: active === s ? 'rgba(245,158,11,0.12)' : 'rgba(255,255,255,0.03)', color: active === s ? '#FBBF24' : 'rgba(245,240,235,0.45)', transition: 'all 0.2s' }}>
                {s}
              </button>
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <p style={{ color: 'rgba(245,240,235,0.40)', textAlign: 'center', padding: '80px 0' }}>No posts yet. Add .md files to content/blog/</p>
        )}

        {/* ── Featured post ── */}
        {featured && (active === 'All' || featured.subject === active) && (
          <Link href={`/blog/${featured.slug}`} className="group" style={{ display: 'block', textDecoration: 'none', position: 'relative', borderRadius: 24, overflow: 'hidden', height: 'clamp(380px,50vw,560px)', border: '1px solid rgba(255,255,255,0.07)', marginBottom: 16 }}>
            {featured.image ? (
              <img src={featured.image} alt={featured.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 700ms cubic-bezier(0.32,0.72,0,1)' }} className="group-hover:scale-[1.03]" />
            ) : (
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(245,158,11,0.15),rgba(120,53,15,0.30))' }} />
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.55) 45%, transparent 80%)' }} />
            {/* Featured badge */}
            <span style={{ position: 'absolute', top: 20, left: 20, padding: '5px 14px', borderRadius: 9999, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', fontSize: 10, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', boxShadow: '0 4px 14px rgba(245,158,11,0.45)' }}>
              Featured
            </span>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 28px 28px' }}>
              <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 9999, fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FBBF24', border: '1px solid rgba(245,158,11,0.30)', marginBottom: 10 }}>
                {featured.subject}
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3.5vw,38px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#f5f0eb', marginBottom: 12 }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: 13, color: 'rgba(245,240,235,0.55)', lineHeight: 1.6, maxWidth: 520, marginBottom: 16 }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 11, color: 'rgba(245,240,235,0.40)' }}>
                <span>{featured.author}</span>
                <span>·</span>
                <span>{formatDate(featured.date)}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
                <span style={{ marginLeft: 8, display: 'inline-flex', alignItems: 'center', gap: 5, color: 'rgba(245,240,235,0.65)', fontSize: 12, fontWeight: 600, transition: 'color 0.2s' }} className="group-hover:text-amber-400">
                  Read →
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* ── Article grid ── */}
        {(active === 'All' ? filtered : rest).length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 14, marginTop: 14 }}>
            {(active === 'All' ? filtered : rest).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group" style={{ display: 'block', textDecoration: 'none', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.22)'; (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.04)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)' }}>
                {/* Image */}
                <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                  {post.image ? (
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 600ms cubic-bezier(0.32,0.72,0,1)' }} className="group-hover:scale-[1.04]" />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,rgba(245,158,11,0.12),rgba(120,53,15,0.20))' }} />
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.60) 0%, transparent 60%)' }} />
                  <span style={{ position: 'absolute', bottom: 12, left: 14, padding: '3px 10px', borderRadius: 9999, fontSize: 9, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FBBF24', border: '1px solid rgba(245,158,11,0.28)', background: 'rgba(8,8,8,0.60)', backdropFilter: 'blur(8px)' }}>
                    {post.subject}
                  </span>
                </div>
                {/* Content */}
                <div style={{ padding: '18px 18px 20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.3, color: '#f5f0eb', marginBottom: 8 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: 12, color: 'rgba(245,240,235,0.48)', lineHeight: 1.6, marginBottom: 14 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, color: 'rgba(245,240,235,0.35)' }}>
                    <span>{formatDate(post.date)}</span>
                    <span style={{ padding: '3px 10px', borderRadius: 9999, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ── Newsletter CTA ── */}
        <div style={{ marginTop: 64, padding: '40px 32px', borderRadius: 24, background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.18)', display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 8 }}>📬 Recovery Intelligence</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#f5f0eb', marginBottom: 4 }}>Get the insights first.</p>
            <p style={{ fontSize: 13, color: 'rgba(245,240,235,0.45)', lineHeight: 1.6 }}>Weekly protocols, science, and studio updates. No spam.</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input type="email" placeholder="your@email.com" style={{ padding: '12px 18px', borderRadius: 12, border: '1px solid rgba(245,158,11,0.22)', background: 'rgba(0,0,0,0.30)', color: '#f5f0eb', fontSize: 13, outline: 'none', minWidth: 200 }} />
            <button style={{ padding: '12px 22px', borderRadius: 12, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Subscribe Free →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
