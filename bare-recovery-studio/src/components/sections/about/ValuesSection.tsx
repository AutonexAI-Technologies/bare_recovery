import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren from '@/components/animations/StaggerChildren'

export default function ValuesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <FadeIn className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#25D366] font-medium mb-3">What We Stand For</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F5F5F2] leading-tight">
            Our values
          </h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerMs={80}>
          {[
            {
              num: '01',
              title: 'Science, not trends',
              body: 'Every service we offer is backed by peer-reviewed research and used by elite athletes worldwide.',
            },
            {
              num: '02',
              title: 'Accessibility',
              body: 'Premium recovery shouldn\'t be exclusive. We offer transparent pricing with no hidden fees.',
            },
            {
              num: '03',
              title: 'Guidance',
              body: 'You\'re not just using equipment. Our team guides you through protocols optimized for your goals.',
            },
            {
              num: '04',
              title: 'Community',
              body: 'Recovery is better together. We\'re building a community of performance-focused individuals in Kompally.',
            },
          ].map((v) => (
            <div key={v.num} className="group flex gap-5 p-6 rounded-2xl border border-white/[0.06] hover:border-white/12 transition-all duration-300" style={{ background: 'rgba(17,17,17,0.75)' }}>
              <span className="font-display font-bold text-4xl text-white/[0.06] select-none shrink-0 leading-none">{v.num}</span>
              <div>
                <h3 className="font-display font-semibold text-[#F5F5F2] mb-2">{v.title}</h3>
                <p className="text-[#C6C6C6]/70 text-sm leading-relaxed">{v.body}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
