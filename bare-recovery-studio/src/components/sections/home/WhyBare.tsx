import FadeIn from '@/components/animations/FadeIn'

const rows = [
  {
    number: '01',
    title: 'Precision Protocols',
    body: 'Every session is timed and calibrated. Not a generic countdown — a physiologically designed recovery arc.',
    aside: 'Science-first',
  },
  {
    number: '02',
    title: 'Absolute Privacy',
    body: 'Limited occupancy per time slot. No crowded gyms. No distractions. Just you and the work.',
    aside: 'Focused space',
  },
  {
    number: '03',
    title: 'Tier-One Hardware',
    body: 'The latest generation of compression systems, medical-grade photobiomodulation panels, and custom-built cold filtration.',
    aside: 'Pro equipment',
  },
  {
    number: '04',
    title: 'Recovery Intelligence',
    body: 'Our founder is an active performance coach. Protocols come from the field, validated by research.',
    aside: 'Coach-designed',
  },
]

export default function WhyBare() {
  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12" style={{ background: 'rgba(27,25,22,0.35)' }}>
      <div className="max-w-[1320px] mx-auto">

        {/* Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-12 md:mb-20 pb-8 md:pb-10 border-b border-white/[0.05]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A19F97] block mb-4">
                The Difference
              </span>
              <h2
                className="font-display text-[30px] md:text-[58px] text-[#FFFBF5]"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                Why Bare<br />Stands Alone.
              </h2>
            </div>
            <p className="text-[#A19F97] text-sm md:text-base leading-relaxed max-w-[320px]">
              There are gyms with recovery corners. Then there is Bare Recovery Studio — built exclusively for this.
            </p>
          </div>
        </FadeIn>

        {/* Rows — editorial list layout */}
        <div className="divide-y divide-white/[0.05]">
          {rows.map((row, i) => (
            <FadeIn key={row.number} direction="up" delay={i * 80}>
              <div className="group grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr_160px] gap-6 md:gap-10 py-8 md:py-10 items-start transition-all duration-500 hover:bg-white/[0.01] rounded-2xl px-3 -mx-3 cursor-default">
                {/* Number */}
                <span
                  className="font-display text-[20px] text-[#A19F97] pt-1 transition-colors duration-300 group-hover:text-[#BCA386]"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {row.number}
                </span>

                {/* Content */}
                <div>
                  <h3
                    className="font-display text-[22px] md:text-[26px] text-[#FFFBF5] mb-3"
                    style={{ letterSpacing: '-0.01em', lineHeight: 1.2 }}
                  >
                    {row.title}
                  </h3>
                  <p className="text-[#A19F97] text-sm md:text-base leading-[1.75] max-w-[540px]">
                    {row.body}
                  </p>
                </div>

                {/* Aside tag — desktop only */}
                <div className="hidden md:flex items-start justify-end pt-1">
                  <span
                    className="px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] text-[#BCA386] transition-all duration-300 group-hover:bg-[#BCA386]/10"
                    style={{
                      background: 'rgba(188,163,134,0.08)',
                      border: '1px solid rgba(188,163,134,0.15)',
                    }}
                  >
                    {row.aside}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
