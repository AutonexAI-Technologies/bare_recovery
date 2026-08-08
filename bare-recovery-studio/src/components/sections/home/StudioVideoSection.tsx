'use client'

import { useState } from 'react'
import FadeIn from '@/components/animations/FadeIn'

// Featured studio video + recent uploads — update IDs as new videos go live
const VIDEOS = [
  {
    id: 'BHbBl4G3VrE',
    title: 'Bare Recovery Studio — Full Tour',
    duration: 'Studio Reel',
    featured: true,
  },
  // Add more video IDs here as the channel grows
  // { id: 'VIDEO_ID_2', title: 'Cold Plunge Experience', duration: '3 min' },
  // { id: 'VIDEO_ID_3', title: 'Contrast Therapy Protocol', duration: '5 min' },
]

const CHANNEL_URL = 'https://youtube.com/@abhinavliftsvlogs'

function VideoThumbnail({
  video,
  onPlay,
}: {
  video: (typeof VIDEOS)[0]
  onPlay: () => void
}) {
  return (
    <button
      onClick={onPlay}
      className="group relative w-full text-left focus:outline-none"
      aria-label={`Play: ${video.title}`}
    >
      {/* YouTube thumbnail */}
      <div
        className="relative rounded-[16px] overflow-hidden"
        style={{ aspectRatio: '16/9', background: '#1a1919' }}
      >
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={e => {
            // Fallback to hqdefault if maxres not available
            const img = e.currentTarget as HTMLImageElement
            img.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ background: 'rgba(20,19,19,0.30)' }}
        />
        {/* Play button */}
        <div
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
            style={{
              background: '#d9d1cc',
              boxShadow: '0 8px 32px rgba(217,209,204,0.30)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#3d3b3d" style={{ marginLeft: 3 }}>
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
        {/* Duration badge */}
        <span
          className="absolute bottom-2 right-2 text-[10px] font-semibold px-2 py-1 rounded"
          style={{ background: 'rgba(20,19,19,0.85)', color: '#c4c1c4' }}
        >
          {video.duration}
        </span>
      </div>
      <p
        className="mt-2.5 text-sm font-medium leading-snug"
        style={{ color: '#c4c1c4' }}
      >
        {video.title}
      </p>
    </button>
  )
}

export default function StudioVideoSection() {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const featured = VIDEOS.find(v => v.featured) ?? VIDEOS[0]
  const rest = VIDEOS.filter(v => !v.featured)

  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12">
      <div className="max-w-[1320px] mx-auto">

        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div>
              <span className="section-label">Inside the Studio</span>
              <h2
                className="font-display text-[32px] md:text-[52px]"
                style={{ letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f5f0eb' }}
              >
                Built for Performance
              </h2>
            </div>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                border: '1px solid rgba(196,193,196,0.16)',
                color: '#c4c1c4',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = '#f5f0eb'
                el.style.borderColor = 'rgba(196,193,196,0.30)'
                el.style.background = 'rgba(196,193,196,0.05)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = '#c4c1c4'
                el.style.borderColor = 'rgba(196,193,196,0.16)'
                el.style.background = 'transparent'
              }}
            >
              {/* YouTube icon */}
              <svg width="16" height="12" viewBox="0 0 24 17" fill="#FF0000">
                <path d="M23.5 2.5S23.2.7 22.4 0C21.4-1 20.2-1 19.7-.9 16.5-.7 12-.7 12-.7s-4.5 0-7.7.2C3.8-.3 2.6-.3 1.6.7.8 1.4.5 3.2.5 3.2S.2 5.3.2 7.4v1.9c0 2.1.3 4.2.3 4.2s.3 1.8 1.1 2.5c1 1 2.4 1 3 1.1C6.5 17 12 17 12 17s4.5 0 7.7-.2c.5-.1 1.7-.1 2.7-1.1.8-.7 1.1-2.5 1.1-2.5s.3-2.1.3-4.2V6.7c0-2.1-.3-4.2-.3-4.2zM9.7 11.5V5l6.6 3.3-6.6 3.2z" />
              </svg>
              @abhinavliftsvlogs
            </a>
          </div>
        </FadeIn>

        {/* Featured video — full width */}
        <FadeIn direction="up" delay={80}>
          <div
            className="relative rounded-[24px] overflow-hidden mb-4"
            style={{
              background: '#1a1919',
              border: '1px solid rgba(196,193,196,0.08)',
              aspectRatio: '16 / 9',
              boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
            }}
          >
            {playingId === featured.id ? (
              <iframe
                src={`https://www.youtube.com/embed/${featured.id}?autoplay=1&rel=0&modestbranding=1&color=white`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
              />
            ) : (
              <button
                onClick={() => setPlayingId(featured.id)}
                className="absolute inset-0 w-full group focus:outline-none"
                aria-label={`Play: ${featured.title}`}
              >
                {/* YouTube maxres thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  onError={e => {
                    const img = e.currentTarget as HTMLImageElement
                    img.src = `https://img.youtube.com/vi/${featured.id}/hqdefault.jpg`
                  }}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(20,19,19,0.28)' }}
                />
                {/* Large play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: '#d9d1cc',
                      boxShadow: '0 16px 64px rgba(217,209,204,0.40)',
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#3d3b3d" style={{ marginLeft: 4 }}>
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#f5f0eb', textShadow: '0 2px 8px rgba(0,0,0,0.60)' }}>
                    {featured.title}
                  </span>
                </div>
              </button>
            )}
          </div>
        </FadeIn>

        {/* Side-by-side additional videos (shown when more than 1 video exists) */}
        {rest.length > 0 && (
          <FadeIn direction="up" delay={140}>
            <div className={`grid gap-4 ${rest.length === 1 ? 'grid-cols-1 max-w-sm' : rest.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
              {rest.map(video => (
                <div
                  key={video.id}
                  className="relative rounded-[16px] overflow-hidden"
                  style={{
                    border: '1px solid rgba(196,193,196,0.08)',
                    background: '#1a1919',
                  }}
                >
                  {playingId === video.id ? (
                    <div style={{ aspectRatio: '16/9' }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ width: '100%', height: '100%', border: 0 }}
                      />
                    </div>
                  ) : (
                    <VideoThumbnail video={video} onPlay={() => setPlayingId(video.id)} />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Channel CTA */}
        <FadeIn direction="up" delay={200}>
          <div className="mt-8 flex items-center justify-center">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-medium transition-colors duration-300"
              style={{ color: '#c4c1c4' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f5f0eb' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#a8a5a8' }}
            >
              More videos on YouTube
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
