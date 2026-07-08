'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { BlogPost } from '@/lib/blog'

interface BlogClientProps {
  posts: BlogPost[]
}

const authorPhotos: Record<string, string> = {
  Abhinav: '/images/founder/photo-7.png',
  'Team Bare': '/images/founder/photo-7.png',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogClient({ posts }: BlogClientProps) {
  const allSubjects = Array.from(new Set(posts.map((p) => p.subject)))
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const featuredPost = posts[0]
  const filteredPosts = posts.slice(1).filter((p) =>
    activeFilter === 'All' || p.subject === activeFilter
  )

  return (
    <div className="min-h-screen">

      {/* ── Header ── */}
      <div className="pt-32 pb-16 px-5 md:px-12 max-w-[1320px] mx-auto">
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9c6c5] mb-6"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] animate-pulse" />
          Recovery Intelligence
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1
            className="font-display font-black text-[52px] md:text-[80px] text-[#F5F5F2] leading-none"
            style={{ letterSpacing: '-0.04em' }}
          >
            The Recovery<br />
            <span style={{ color: 'rgba(245,245,242,0.35)' }}>Blog.</span>
          </h1>
          <p className="text-[#8e9192] text-base max-w-xs leading-relaxed">
            Science-backed insights on recovery, performance, and the discipline of feeling better.
          </p>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="px-5 md:px-12 max-w-[1320px] mx-auto text-center py-20 text-[#8e9192]">
          <p className="text-lg mb-3">No posts yet.</p>
          <p className="text-sm">Add <code className="bg-white/5 px-2 py-0.5 rounded text-[#c9c6c5]">.md</code> files to the <code className="bg-white/5 px-2 py-0.5 rounded text-[#c9c6c5]">content/blog/</code> directory.</p>
        </div>
      ) : (
        <div className="px-5 md:px-12 max-w-[1320px] mx-auto pb-24">

          {/* ── Cinematic Featured Post ── */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block w-full overflow-hidden rounded-[28px] mb-8"
              style={{
                height: 'clamp(420px, 52vw, 600px)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {featuredPost.image ? (
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  style={{ objectPosition: 'center center' }}
                />
              ) : (
                <div className="absolute inset-0 bg-[#111]" />
              )}
              {/* Gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(11,11,11,0.2) 0%, transparent 30%, transparent 40%, rgba(11,11,11,0.85) 80%, rgba(11,11,11,0.97) 100%)' }}
              />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                <div className="flex items-center justify-between">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#c9c6c5] uppercase tracking-wider"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.14)' }}
                  >
                    {featuredPost.subject}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-[#8e9192] uppercase tracking-wider"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  >
                    Featured
                  </span>
                </div>
                <div>
                  <h2
                    className="font-display font-black text-[28px] md:text-[44px] text-[#F5F5F2] mb-4 max-w-3xl"
                    style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#c4c7c7] text-sm md:text-base line-clamp-2 max-w-2xl mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      {authorPhotos[featuredPost.author] && (
                        <img src={authorPhotos[featuredPost.author]} alt={featuredPost.author} className="w-7 h-7 rounded-full object-cover object-top" style={{ border: '1px solid rgba(255,255,255,0.15)' }} />
                      )}
                      <span className="text-[#c4c7c7] text-xs font-semibold">{featuredPost.author}</span>
                    </div>
                    <span className="text-[#8e9192] text-xs">·</span>
                    <span className="text-[#8e9192] text-xs">{formatDate(featuredPost.date)}</span>
                    <span className="text-[#8e9192] text-xs">·</span>
                    <span className="text-[#8e9192] text-xs">{featuredPost.readTime}</span>
                    <span
                      className="ml-auto inline-flex items-center gap-2 bg-[#F5F5F2] text-[#0B0B0B] pl-5 pr-2 py-2 rounded-full font-bold text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                    >
                      Read Story
                      <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* ── Filter tabs ── */}
          {posts.length > 1 && (
            <>
              <div className="flex items-center gap-2 flex-wrap mb-8">
                {['All', ...allSubjects].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300"
                    style={{
                      background: activeFilter === cat ? '#F5F5F2' : 'rgba(255,255,255,0.05)',
                      color: activeFilter === cat ? '#0B0B0B' : '#8e9192',
                      border: activeFilter === cat ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* ── Magazine grid ── */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col rounded-[24px] overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:-translate-y-1"
                      style={{
                        background: 'rgba(16,16,16,0.9)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-[200px] overflow-hidden flex-shrink-0">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            style={{ objectPosition: 'center center' }}
                          />
                        ) : (
                          <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                            <span className="text-4xl opacity-20">📖</span>
                          </div>
                        )}
                        <div
                          className="absolute inset-0"
                          style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(16,16,16,0.8) 100%)' }}
                        />
                        {/* Category badge */}
                        <span
                          className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-[#c9c6c5]"
                          style={{ background: 'rgba(16,16,16,0.85)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
                        >
                          {post.subject}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-display font-bold text-lg text-[#F5F5F2] mb-2 leading-tight group-hover:text-white transition-colors line-clamp-2 flex-1">
                          {post.title}
                        </h3>
                        <p className="text-[#8e9192] text-sm line-clamp-2 leading-relaxed mb-5">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {authorPhotos[post.author] && (
                              <img src={authorPhotos[post.author]} alt={post.author} className="w-6 h-6 rounded-full object-cover object-top" />
                            )}
                            <span className="text-[#8e9192] text-xs">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#8e9192]">
                            <span>{formatDate(post.date)}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-[#8e9192]">
                  <p>No posts in this category yet.</p>
                </div>
              )}
            </>
          )}

          {/* ── Subscribe / CTA Banner ── */}
          <div
            className="mt-16 rounded-[28px] p-8 md:p-12 text-center"
            style={{ background: 'rgba(20,20,20,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-[#8e9192] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Put the Science to Work</p>
            <h2
              className="font-display font-black text-[28px] md:text-[36px] text-[#F5F5F2] mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              Ready to recover smarter?
            </h2>
            <p className="text-[#8e9192] text-sm mb-8 max-w-sm mx-auto leading-relaxed">
              Book a session at Bare Recovery Studio, Kompally. Starting from ₹800.
            </p>
            <a
              href="https://wa.me/917670861496?text=Hi!%20I%20would%20like%20to%20book%20a%20session%20at%20Bare%20Recovery%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#F5F5F2] text-[#0B0B0B] pl-7 pr-2.5 py-3 rounded-full font-bold text-sm hover:bg-white transition-all active:scale-[0.98]"
            >
              Book a Session
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B0B0B" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
