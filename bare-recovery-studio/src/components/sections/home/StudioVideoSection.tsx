'use client'

import { useRef, useState } from 'react'
import FadeIn from '@/components/animations/FadeIn'

export default function StudioVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)

  const toggleMute = () => {
    const vid = videoRef.current
    if (!vid) return
    vid.muted = !vid.muted
    setMuted(vid.muted)
  }

  const togglePlay = () => {
    const vid = videoRef.current
    if (!vid) return
    if (vid.paused) { vid.play(); setPlaying(true) }
    else { vid.pause(); setPlaying(false) }
  }

  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12">
      <div className="max-w-[1320px] mx-auto">

        {/* Header row */}
        <FadeIn direction="up">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A19F97] block mb-3">
                Inside the Studio
              </span>
              <h2
                className="font-display text-[32px] md:text-[48px] text-[#FFFBF5]"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                See it for yourself.
              </h2>
            </div>
            <p className="hidden md:block text-[#A19F97] text-sm max-w-[300px] text-right leading-relaxed">
              A glimpse inside Bare Recovery Studio, 3rd Floor, Raichandani Orion, Kompally.
            </p>
          </div>
        </FadeIn>

        {/* Double-Bezel video container */}
        <FadeIn direction="up" delay={100}>
          <div
            className="relative"
            style={{
              background: 'rgba(27,25,22,0.6)',
              border: '1px solid rgba(188,163,134,0.15)',
              borderRadius: '32px',
              padding: '6px',
              boxShadow: '0 40px 120px rgba(0,0,0,0.5)',
            }}
          >
            <div className="relative rounded-[26px] overflow-hidden aspect-video bg-[#111]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/bare-recovery.mp4" type="video/mp4" />
              </video>

              {/* Inset highlight */}
              <div
                className="absolute inset-0 pointer-events-none rounded-[26px]"
                style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)' }}
              />

              {/* Controls overlay — bottom bar */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-center justify-between">
                {/* Left: studio label */}
                <div
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-[#FFFBF5]"
                  style={{
                    background: 'rgba(18,17,15,0.75)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(188,163,134,0.15)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BCA386] animate-pulse" />
                  Bare Recovery Studio · Kompally
                </div>

                {/* Right: controls */}
                <div className="flex items-center gap-2">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    aria-label={playing ? 'Pause' : 'Play'}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                    style={{
                      background: 'rgba(11,11,11,0.65)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {playing ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5F5F2">
                        <rect x="6" y="4" width="4" height="16" rx="1"/>
                        <rect x="14" y="4" width="4" height="16" rx="1"/>
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5F5F2">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    )}
                  </button>

                  {/* Mute/Unmute */}
                  <button
                    onClick={toggleMute}
                    aria-label={muted ? 'Unmute sound' : 'Mute sound'}
                    className="group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                    style={{
                      background: muted ? 'rgba(11,11,11,0.65)' : 'rgba(245,245,242,0.9)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    title={muted ? 'Click to enable sound' : 'Click to mute'}
                  >
                    {muted ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F5F5F2" strokeWidth="1.8">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                        <line x1="23" y1="9" x2="17" y2="15"/>
                        <line x1="17" y1="9" x2="23" y2="15"/>
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0B0B0B" strokeWidth="1.8">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Sound hint */}
        {muted && (
          <FadeIn direction="up" delay={200}>
            <p className="text-center text-xs text-[#A19F97] mt-5">
              <button onClick={toggleMute} className="underline underline-offset-2 hover:text-[#BCA386] transition-colors">
                Click the 🔊 button
              </button>
              {' '}to enable sound
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
