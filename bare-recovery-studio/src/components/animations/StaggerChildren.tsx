'use client'

import { useEffect, useRef, useState, ReactNode, Children } from 'react'

interface StaggerChildrenProps {
  children: ReactNode
  staggerMs?: number
  baseDelay?: number
  className?: string
}

export default function StaggerChildren({ children, staggerMs = 80, baseDelay = 0, className = '' }: StaggerChildrenProps) {
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

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <div
          key={i}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 0.7s cubic-bezier(0.32,0.72,0,1) ${baseDelay + i * staggerMs}ms, transform 0.7s cubic-bezier(0.32,0.72,0,1) ${baseDelay + i * staggerMs}ms`,
            willChange: 'transform, opacity',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
