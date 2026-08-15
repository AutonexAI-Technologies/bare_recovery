'use client'

import { useState, useEffect } from 'react'

interface Props {
  fallback?: string
  className?: string
  style?: React.CSSProperties
}

export default function InstagramFollowerCount({ fallback = '85.3K', className, style }: Props) {
  const [count, setCount] = useState(fallback)
  const [live, setLive] = useState(false)

  useEffect(() => {
    fetch('/api/instagram-followers')
      .then(r => r.json())
      .then(data => {
        if (data.followers) {
          setCount(data.followers)
          setLive(data.source === 'live')
        }
      })
      .catch(() => {}) // silently use fallback
  }, [])

  return (
    <span className={className} style={style} title={live ? 'Live follower count' : 'Follower count (updated daily)'}>
      {count}
    </span>
  )
}
