'use client'

const items = [
  { label: '100% Private Sessions', icon: '🔒' },
  { label: 'Open 10AM – 10PM · Everyday', icon: '🕐' },
  { label: 'Medical-Grade Equipment', icon: '⚡' },
  { label: 'Science-Based Protocols', icon: '🔬' },
  { label: 'Expert Coach Guidance', icon: '🎯' },
  { label: "Kompally's First Recovery Studio", icon: '🥇' },
  { label: 'From ₹799 Per Session', icon: '₹' },
  { label: '6 Recovery Services', icon: '❖' },
]

export default function TrustBadges() {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden py-3"
      style={{
        borderTop: '1px solid rgba(196,193,196,0.07)',
        borderBottom: '1px solid rgba(196,193,196,0.07)',
        background: 'rgba(42,40,41,0.65)',
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee-left 36s linear infinite', width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-[12px] font-medium tracking-[0.08em]"
            style={{ color: '#c4c1c4' }}
          >
            <span style={{ fontSize: 14 }}>{item.icon}</span>
            {item.label}
            <span
              className="mx-4 w-[3px] h-[3px] rounded-full inline-block flex-shrink-0"
              style={{ background: 'rgba(196,193,196,0.25)' }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
