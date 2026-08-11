import FadeIn from '@/components/animations/FadeIn'

const steps = [
  {
    num: '01',
    title: 'Book',
    headline: 'Zero friction booking',
    desc: 'Message us on WhatsApp or walk in. No app, no waitlist — pick your slot and you&apos;re confirmed in under 2 minutes.',
    icon: '📲',
    duration: '2 minutes',
  },
  {
    num: '02',
    title: 'Assess',
    headline: 'Recovery diagnosis',
    desc: 'Our coach evaluates your current training load, fatigue markers, and goals to prescribe the optimal recovery stack for your session.',
    icon: '🎯',
    duration: '5 minutes',
  },
  {
    num: '03',
    title: 'Execute',
    headline: 'Guided protocol',
    desc: 'Step through your custom sequence — Full Circuit, Contrast, or single service. Every temperature, duration, and transition is coached.',
    icon: '⚡',
    duration: '20–60 minutes',
  },
  {
    num: '04',
    title: 'Restore',
    headline: 'Complete reset',
    desc: 'Leave the studio physiologically younger. Reduced inflammation, flushed metabolic waste, and elevated neurotransmitters — for hours.',
    icon: '✦',
    duration: 'Long-lasting',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12 max-w-[1320px] mx-auto overflow-hidden">

      <FadeIn direction="up">
        <div className="text-center mb-14 md:mb-20">
          <span className="section-label">The Process</span>
          <h2
            className="font-display text-[30px] md:text-[52px]"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f5f0eb' }}
          >
            Your Path to Recovery
          </h2>
        </div>
      </FadeIn>

      {/* Steps — horizontal on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">

        {/* Connector line — desktop only */}
        <div
          className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px hidden md:block"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(196,193,196,0.18) 20%, rgba(196,193,196,0.18) 80%, transparent)' }}
        />

        {steps.map((step, i) => (
          <FadeIn key={step.num} direction="up" delay={i * 80}>
            <div className="flex flex-col items-center md:items-start px-4 pb-8 md:pb-0 text-center md:text-left">

              {/* Step circle */}
              <div className="relative mb-6">
                <div
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center relative z-10 text-xl"
                  style={{
                    background: 'rgba(61,59,61,0.90)',
                    border: '1px solid rgba(196,193,196,0.16)',
                    boxShadow: '0 0 0 6px rgba(86,84,86,0.20)',
                  }}
                >
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <span
                className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2"
                style={{ color: '#565456' }}
              >
                Step {step.num}
              </span>
              <h3
                className="font-display text-xl mb-2"
                style={{ color: '#f5f0eb', letterSpacing: '-0.01em' }}
              >
                {step.headline}
              </h3>
              <p
                className="text-sm leading-[1.75] mb-4"
                style={{ color: '#c4c1c4' }}
                dangerouslySetInnerHTML={{ __html: step.desc }}
              />
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(86,84,86,0.40)',
                  border: '1px solid rgba(196,193,196,0.10)',
                  color: '#c4c1c4',
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {step.duration}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
