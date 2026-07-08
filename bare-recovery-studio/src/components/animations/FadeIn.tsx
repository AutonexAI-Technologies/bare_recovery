'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function FadeIn({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const getTranslate = () => {
    if (direction === 'up') return visible ? 'translateY(0)' : 'translateY(32px)'
    if (direction === 'down') return visible ? 'translateY(0)' : 'translateY(-32px)'
    if (direction === 'left') return visible ? 'translateX(0)' : 'translateX(40px)'
    if (direction === 'right') return visible ? 'translateX(0)' : 'translateX(-40px)'
    return 'none'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTranslate(),
        filter: visible ? 'blur(0)' : 'blur(4px)',
        transition: `opacity 0.8s cubic-bezier(0.32,0.72,0,1) ${delay}ms, transform 0.8s cubic-bezier(0.32,0.72,0,1) ${delay}ms, filter 0.8s cubic-bezier(0.32,0.72,0,1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  )
}
